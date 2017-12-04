import json
import subprocess
import os

'''
GoPackage represents a golang package.  Its constructor parses path strings
of the package and its dependencies.  Its emitJson method returns collections
of json objects that can be used as data for the vis.js framework to visualize
a flexible dependency graph
'''
class GoPackage(object):
  # static variable initialization
  # maps storing unique ids for packages and orgs
  orgToId = dict()
  longNameToId = dict()
  # set to keep track of dependencies that are not themselves parsed by
  # a repository traversal.  This way external dependency packages can be
  # initialized in post processing to generate a json node structure
  uninitDeps = set()
  # counters for generating this unique ids
  packageCounter = 0
  orgCounter = 0

  def __init__(self, packageString, depsString):
    parsedNames = self.parsePackageString(packageString)
    self.longName = parsedNames[0]
    self.org = parsedNames[1]
    self.name = parsedNames[2]

    self.depsList = self.parseDeps(depsString)
    # make sure that this package hasn't been initialized already
    assert(not (self.longName in GoPackage.longNameToId))
    GoPackage.packageCounter += 1
    GoPackage.longNameToId[self.longName] = GoPackage.packageCounter
    if not (self.org in GoPackage.orgToId):
      GoPackage.orgCounter += 1
      GoPackage.orgToId[self.org] = GoPackage.orgCounter

    # Manage dependency record
    if self.longName in GoPackage.uninitDeps:
      GoPackage.uninitDeps.remove(self.longName) # No longer 'un'init!
    for depLongName in self.depsList:
      if not (depLongName in GoPackage.longNameToId): # Only add if uninitialized
        GoPackage.uninitDeps.add(depLongName)


  def parsePackageString(self, packageString):
    pieces = packageString.split("/")  # Assumes we are not running on windows
    assert(pieces[0] == "github.com")  # Assuming all dvc links come from github
    return (packageString, pieces[1], pieces[-1])

  def parseDeps(self, depsString):
    deps = depsString.split(",")
    trackedDeps = []
    for dep in deps:
      # We are not interested in tracking builtins
      if dep[0:10] != "github.com":
        #if "." in dep:
          # Output so we know if there are any other dvcs distro sites...
          #print(dep)
        continue
      trackedDeps.append(dep)
    return trackedDeps


  def emitObjs(self):
    # make the node object to convert to json
    packId = GoPackage.longNameToId[self.longName]
    groupId = GoPackage.orgToId[self.org]
    nodeObj = {'id': packId, 'label': self.name, 'group': groupId, 'uuid': self.longName}

    # make the edge json objects
    edgeObjs = []
    for depName in self.depsList:
      # Ensure that this dependency has been assigned an id (this should be flag guarded)
      # assert(depName in GoPackage.longNameToId)
      if not depName in GoPackage.longNameToId: #skip plotting this one
        continue
      toId = GoPackage.longNameToId[depName]
      edge = {'from': packId, 'to': toId, 'arrows': 'to'}
      edgeObjs.append(edge)
    return (nodeObj, edgeObjs)

def run():
  ## Search and index
  packages = []
  formatstring = "'"+"{{ join .Deps \",\"}}" + "'"
  packageCmdBase = ["go", "list"]
  depsCmdBase = ["go", "list", "-f", formatstring]

  # We use github.com as signal and don't want hashes (this is recursive)
  subprocess.run(["gx-go", "rewrite " "--undo"]) 

  # Traverse directory tree, for now from cwd
  #   more generally there will be a set of roots that we traverse from
  #   (go-ipfs, libp2p) even more generally this root set will be generated
  #   dynamically and run() becomes bfs through the dvc dependency graph of the
  #   initial set of roots.  Another feature here, we could filter out *test*,
  #   utils, mock etc, subpackages that are primarily for development support
  for root, _, _ in os.walk("."):
    # Get the current package identifier
    packageCmd = packageCmdBase[:]
    packageCmd.append(root)
    invoc = subprocess.run(packageCmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    #if invoc.returncode != 0:
      # This subdirectory is not a valid golang package
      continue
    packageString = invoc.stdout.decode("utf-8").strip()

    if packageString[0:10] != "github.com":
      # Only add if this package is not a built in.  Currently assuming all 
      #   dvcs packages come from "github.com"
      if "." in packageString:
        # Output so we know if there are any other dvcs distro sites...
        # print(packageString)  -- Dec 2017 all but golang.org leb.io, bazil.org
      continue

    # Get the deps of the current package
    depsCmd = depsCmdBase[:]
    depsCmd.append(root)
    invoc = subprocess.run(depsCmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    assert(invoc.returncode == 0) # if go list passes this should pass too
    depsString = invoc.stdout.decode("utf-8").strip().strip("'")

    # Add this package to global index [goPackage1, goPackage2, ...] 
    #   note if we want to map out the PL code universe recursively (this 
    #   isn't my focus yet) then we need to do bfs on all their directories.
    #   We could also include filters, e.g only expand out subpackages of
    #   repos under PL-orgs.
    nextPackage = GoPackage(packageString, depsString)
    packages.append(nextPackage)

  ## Traversal completed, all packages below the root are assigned a unique id

  # Post processing: initialize a package for each name in uninitDeps with a 
  #   "" dep string this completes assignment of unique ids to all external 
  #   dependency packages not accessed by directory traversal

  # This should be flag guarded (some projects are so big this renders graphs unuseable)
  # uninitDeps = list(GoPackage.uninitDeps) 
  # for packageString in uninitDeps:
  #   nextPackage = GoPackage(packageString, "")
  #   packages.append(nextPackage)

  # Now we can iterate through the global index and emit json objects 
  #   into node and edge lists.  This is pretty much it!  Data goes directly
  #   to visualization after we write it to a file
  nodeMasterList = []
  edgeMasterList = []
  for package in packages:
    node, edges = package.emitObjs()
    nodeMasterList.append(node)
    edgeMasterList += edges
  with open('dep_graph.json', 'w') as outfile:
    nodesJson = json.dump(nodeMasterList, outfile, indent=2, separators=(',', ': '))
    edgesJson = json.dump(edgeMasterList, outfile, indent=2, separators=(',', ': '))

  print(nodesJson)
  print(edgesJson)


if __name__ == "__main__":
  run()