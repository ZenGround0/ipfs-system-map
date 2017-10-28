  var nodes = new vis.DataSet([
    // libp2p system components
    {id: 1, label: 'Host',  group: 1},
    {id: 2, label: 'Net',  group: 1},
    {id: 3, label: 'Peerstore', group: 1},
    {id: 4, label: 'Protocol',  group: 1},
    {id: 5, label: 'I-Conn', group: 1},
    {id: 6, label: 'Peer', group: 1},
    {id: 7, label: 'PeerStream', group: 1},
    {id: 8, label: 'StreamMuxer', group: 1},
    {id: 9, label: 'Transport', group: 1},
    {id: 10, label: 'Nat', group: 1},
    {id: 11, label: 'Crypto', group: 1},
    {id: 12, label: 'Secio', group: 1},
    {id: 13, label: 'I-ConnMgr', group: 1},
    {id: 14, label: 'AddrUtil', group: 1},
    {id: 15, label: 'WaddrTransport', group: 1},
    {id: 16, label: 'Floodsub', group: 1},
    {id: 17, label: 'BasicHost', group: 1},
    {id: 18, label: 'Circuit', group: 1},
    {id: 19, label: 'Metrics', group: 1},
    {id: 20, label: 'RoutedHost', group: 1},
    {id: 21, label: 'Loggables', group: 1},
    {id: 22, label: 'MDNSDiscovery', group: 1},
    {id: 23, label: 'PingProtocol', group: 1},
    {id: 24, label: 'IdentifyProtocol', group: 1},
    {id: 25, label: 'MetricsStream', group: 1},
    {id: 26, label: 'Conn', group: 1},
    {id: 27, label: 'I-Pnet', group: 1},
    {id: 28, label: 'Maddr-filter', group: 1},
    {id: 29, label: 'TCP-Transport', group: 1},
    {id: 30, label: 'Consensus', group: 1},
    {id: 31, label: 'Routing', group: 1},
    {id: 32, label: 'Record', group: 1},
    {id: 33, label: 'KBucket', group: 1},
    {id: 34, label: 'MeterConn', group: 1},
    {id: 35, label: 'MeterStream', group: 1},
    {id: 36, label: '', group: 1},
  
  
  
    //multiformats system components
    {id: 67, label: 'MultiHash', group: 2},
    {id: 68, label: 'MultiBase', group: 2},
    {id: 69, label: 'MultiAddr', group: 2},
    {id: 70, label: 'MultiCodec', group: 2},
    {id: 71, label: 'MultiStream', group: 2},
    {id: 72, label: 'MultiAddrNet', group: 2},
    {id: 73, label: 'MultiAddrDNS', group: 2}, 

    //IPFS system components
    {id: 80, label: 'Log', group: 3},
    {id: 81, label: 'Util', group: 3},
    {id: 82, label: 'BlockService', group: 3},
    {id: 83, label: 'OfflineExchange', group: 3},
    {id: 84, label: 'BlockFormat', group: 3},
    {id: 85, label: 'MerkleDag', group: 3},
    {id: 86, label: 'Exchange', group: 3},
    {id: 87, label: 'Bitswap', group: 3},
    {id: 88, label: 'BlockStore', group: 3},
    {id: 89, label: 'BitswapDecision', group: 3},
    {id: 90, label: 'BitswapMessage', group: 3},
    {id: 91, label: 'BitswapNetwork', group: 3},
    {id: 92, label: 'BitswapNotifications', group: 3},
    {id: 93, label: 'Flags', group: 3},
    {id: 94, label: 'MetricsInterface', group: 3},
    {id: 95, label: 'Pin', group: 3},
    {id: 96, label: 'DataStore', group: 3},
    {id: 97, label: 'Importer', group: 3},
    {id: 98, label: 'BalancedLayout', group: 3},
    {id: 99, label: 'Chunker', group: 3},
    {id: 100, label: 'TrickleLayout', group: 3},
    {id: 101, label: 'ImporterHelpers', group: 3},
    {id: 102, label: 'UnixFS', group: 3},
    {id: 103, label: 'FilesCommands', group: 3},
    {id: 104, label: 'NilRouting', group: 3},
    {id: 105, label: 'Repo', group: 3},
    {id: 106, label: 'OfflineRouter', group: 3},
    {id: 107, label: 'Supernode', group: 3},
    {id: 108, label: 'SupernodeProxy', group: 3},
    {id: 109, label: 'FileStore', group: 3},
    {id: 110, label: 'KeyStore', group: 3},
    {id: 111, label: 'RepoConfig', group: 3},
    {id: 112, label: 'FSRepo', group: 3},
    {id: 113, label: 'DataStoreMeasure', group: 3},
    {id: 114, label: 'SyncMount', group: 3},
    {id: 115, label: 'LevelDB', group: 3},
    {id: 116, label: 'Badger', group: 3},
    {id: 117, label: 'FlatFS', group: 3},
    {id: 118, label: 'LevelDBOpt', group: 3},
    {id: 119, label: 'RepoCommon', group: 3},
    {id: 120, label: 'LockFile', group: 3},
    {id: 121, label: 'FSRepoMigrations', group: 3},
    {id: 122, label: 'FSRepoSerialize', group: 3},
    {id: 123, label: 'Lock', group: 3},
    {id: 124, label: 'AtomicFile', group: 3},
    {id: 125, label: '', group: 3},
    {id: 126, label: '', group: 3},
    {id: 127, label: '', group: 3},
    {id: 128, label: '', group: 3},
    {id: 129, label: '', group: 3},
    {id: 130, label: '', group: 3},
    {id: 131, label: '', group: 3},
    {id: 132, label: '', group: 3},
    {id: 133, label: '', group: 3},
    {id: 134, label: '', group: 3},
    {id: 135, label: '', group: 3},
      
      


    //IPLD system components
    {id: 200, label: 'Cid', group: 4},
    {id: 201, label: 'ipld-format', group: 4},
    {id: 202, label: 'ipld-cbor', group: 4}
  ]);

  // create an array with edges

  var edges = new vis.DataSet([
    {from: 1, to: 2, arrows:'to'},
    {from: 1, to: 3, arrows:'to'},
    {from: 1, to: 4, arrows:'to'},
    {from: 1, to: 6, arrows:'to'},
    {from: 1, to: 13, arrows:'to'},
    {from: 1, to: 69, arrows:'to'},
    {from: 1, to: 71, arrows:'to'},
  
    {from: 2, to: 3, arrows:'to'},
    {from: 2, to: 4, arrows:'to'},
    {from: 2, to: 5, arrows:'to'},
    {from: 2, to: 6, arrows:'to'},
    {from: 2, to: 69, arrows:'to'},
  
    {from: 3, to: 69, arrows:'to'},
    {from: 3, to: 72, arrows:'to'},
    {from: 3, to: 6, arrows:'to'},
    {from: 3, to: 11, arrows:'to'},

  
    {from: 5, to: 69, arrows:'to'},
    {from: 5, to: 6, arrows:'to'},
    {from: 5, to: 9, arrows:'to'},
    {from: 5, to: 14, arrows:'to'},
    {from: 5, to: 11, arrows:'to'},
    {from: 5, to: 81, arrows:'to'},

    {from: 6, to: 67, arrows:'to'},
    {from: 6, to: 11, arrows:'to'},
  
    {from: 7, to: 8, arrows:'to'},
    {from: 7, to: 9, arrows:'to'},
    {from: 7, to: 72, arrows:'to'},
    {from: 7, to: 4, arrows:'to'},
    
    {from: 9, to: 72, arrows:'to'},

    {from: 10, to: 72, arrows:'to'},
    {from: 10, to: 69, arrows:'to'},
    {from: 10, to: 80, arrows:'to'},

    {from: 12, to: 11, arrows:'to'},
    {from: 12, to: 6, arrows:'to'},


    {from: 13, to: 2, arrows:'to'},
    {from: 13, to: 6, arrows:'to'},
    {from: 13, to: 69, arrows: 'to'},



    {from: 16, to: 1, arrows:'to'},
    {from: 16, to: 2, arrows:'to'},
    {from: 16, to: 4, arrows:'to'},
    {from: 16, to: 6, arrows:'to'},
    {from: 16, to: 80, arrows:'to'},

    {from: 17, to: 2, arrows:'to'},
    {from: 17, to: 3, arrows:'to'},
    {from: 17, to: 4, arrows:'to'},
    {from: 17, to: 6, arrows:'to'},
    {from: 17, to: 13, arrows:'to'},
    {from: 17, to: 18, arrows:'to'},
    {from: 17, to: 19, arrows:'to'},
    {from: 17, to: 69, arrows:'to'},
    {from: 17, to: 71, arrows:'to'},
    {from: 17, to: 73, arrows:'to'},
    {from: 17, to: 80, arrows:'to'},

    {from: 19, to: 6, arrows:'to'},
    {from: 19, to: 4, arrows:'to'},

    {from: 20, to: 1 , arrows:'to'},
    {from: 20, to: 2, arrows:'to'},
    {from: 20, to: 3, arrows:'to'},
    {from: 20, to: 4, arrows:'to'},
    {from: 20, to: 6, arrows:'to'},
    {from: 20, to: 13, arrows:'to'},
    {from: 20, to: 21, arrows:'to'},
    {from: 20, to: 69, arrows:'to'},
    {from: 20, to: 71, arrows:'to'},

    {from: 21, to: 6, arrows:'to'},
    {from: 21, to: 69, arrows:'to'},
    {from: 21, to: 80, arrows:'to'},
      
      
    {from: 22, to: 1, arrows:'to'},
    {from: 22, to: 3, arrows:'to'},
    {from: 22, to: 6, arrows:'to'},
    {from: 22, to: 69, arrows:'to'},
    {from: 22, to: 72, arrows:'to'},
    {from: 22, to: 80, arrows:'to'},

    {from: 23, to: 1, arrows:'to'},
    {from: 23, to: 2, arrows:'to'},
    {from: 23, to: 6, arrows:'to'},
    {from: 23, to: 80, arrows:'to'},
    {from: 23, to: 81, arrows:'to'},

    {from: 24, to: 1, arrows:'to'},
    {from: 24, to: 2, arrows:'to'},
    {from: 24, to: 3, arrows:'to'},
    {from: 24, to: 6, arrows:'to'},
    {from: 24, to: 11, arrows:'to'},
    {from: 24, to: 19, arrows:'to'},
    {from: 24, to: 21, arrows:'to'},
    {from: 24, to: 25, arrows:'to'},
    {from: 24, to: 69, arrows:'to'},
    {from: 24, to: 71, arrows:'to'},
    {from: 24, to: 80, arrows:'to'},

    {from: 26, to: 5, arrows:'to'},
    {from: 26, to: 6, arrows:'to'},
    {from: 26, to: 9, arrows:'to'},
    {from: 26, to: 11, arrows:'to'},
    {from: 26, to: 12, arrows:'to'},
    {from: 26, to: 14, arrows:'to'},
    {from: 26, to: 21, arrows:'to'},
    {from: 26, to: 27, arrows:'to'},
    {from: 26, to: 28, arrows:'to'},
    {from: 26, to: 29, arrows:'to'},
    {from: 26, to: 69, arrows:'to'},
    {from: 26, to: 71, arrows:'to'},
    {from: 26, to: 72, arrows:'to'},
    {from: 26, to: 80, arrows:'to'},
  
    {from: 27, to: 9, arrows:'to'},
      
  
    {from: 32, to: 69, arrows:'to'},

    {from: 34, to: 9, arrows:'to'},
    {from: 34, to: 19, arrows:'to'},
      
    {from: 35, to: 2, arrows:'to'},
    {from: 35, to: 4, arrows:'to'},
    {from: 35, to: 6, arrows:'to'},
    {from: 35, to: 19, arrows:'to'},

    {from: 69, to: 67, arrows:'to'},

    {from: 72, to: 69, arrows:'to'},

    {from: 82, to: 80, arrows:'to'},
    {from: 82, to: 84, arrows:'to'},
    {from: 82, to: 86, arrows:'to'},
    {from: 82, to: 87, arrows:'to'},
    {from: 82, to: 88, arrows:'to'},
    {from: 82, to: 200, arrows:'to'},
      

    {from: 85, to: 67, arrows:'to'},
    {from: 85, to: 81, arrows:'to'},
    {from: 85, to: 82, arrows:'to'},
    {from: 85, to: 83, arrows:'to'},
    {from: 85, to: 84, arrows:'to'},
    {from: 85, to: 200, arrows:'to'},
    {from: 85, to: 201, arrows:'to'},
    {from: 85, to: 202, arrows:'to'},
      
    {from: 86, to: 84, arrows:'to'},
    {from: 86, to: 200, arrows:'to'},

    {from: 87, to: 6, arrows:'to'},
    {from: 87, to: 80, arrows:'to'},
    {from: 87, to: 84, arrows:'to'},
    {from: 87, to: 86, arrows:'to'},
    {from: 87, to: 88, arrows:'to'},
    {from: 87, to: 89, arrows:'to'},
    {from: 87, to: 90, arrows:'to'},
    {from: 87, to: 91, arrows:'to'},
    {from: 87, to: 92, arrows:'to'},
    {from: 87, to: 93, arrows:'to'},
    {from: 87, to: 94, arrows:'to'},
    {from: 87, to: 200, arrows:'to'},


    {from: 91, to: 1, arrows:'to'},
    {from: 91, to: 2, arrows:'to'},
    {from: 91, to: 3, arrows:'to'},
    {from: 91, to: 4, arrows:'to'},
    {from: 91, to: 6, arrows:'to'},
    {from: 91, to: 31, arrows: 'to'},
    {from: 91, to: 69, arrows: 'to'},
    {from: 91, to: 90, arrows:'to'},
    {from: 91, to: 200, arrows:'to'},

    {from: 95, to: 80, arrows:'to'},
    {from: 95, to: 85, arrows:'to'},
    {from: 95, to: 96, arrows:'to'},
    {from: 95, to: 200, arrows:'to'},
    {from: 95, to: 201, arrows:'to'},

    {from: 97, to: 85, arrows:'to'},
    {from: 97, to: 98, arrows:'to'},
    {from: 97, to: 99, arrows:'to'},
    {from: 97, to: 100, arrows:'to'},
    {from: 97, to: 101, arrows:'to'},
    {from: 97, to: 103, arrows:'to'},
    {from: 97, to: 201, arrows:'to'},

    {from: 98, to: 101, arrows:'to'},
    {from: 98, to: 201, arrows:'to'},

    {from: 99, to: 80, arrows: 'to'},

    {from: 100, to: 85, arrows: 'to'},
    {from: 100, to: 101, arrows: 'to'},
    {from: 100, to: 102, arrows: 'to'},
    {from: 100, to: 201, arrows: 'to'},

    {from: 101, to: 85, arrows:'to'},
    {from: 101, to: 99, arrows:'to'},
    {from: 101, to: 102, arrows:'to'},
    {from: 101, to: 103, arrows:'to'},
    {from: 101, to: 200, arrows:'to'},
    {from: 101, to: 201, arrows:'to'},

    {from: 102, to: 85, arrows:'to'},

    {from: 104, to: 1, arrows:'to'},
    {from: 104, to: 3, arrows:'to'},
    {from: 104, to: 6, arrows:'to'},
    {from: 104, to: 31, arrows:'to'},
    {from: 104, to: 105, arrows:'to'},
    {from: 104, to: 200, arrows:'to'},

    {from: 105, to: 69, arrows:'to'},
    {from: 105, to: 96, arrows:'to'},
    {from: 105, to: 109, arrows:'to'},
    {from: 105, to: 110, arrows:'to'},
    {from: 105, to: 111, arrows:'to'},
      

    {from: 106, to: 3, arrows:'to'},
    {from: 106, to: 6, arrows:'to'},
    {from: 106, to: 11, arrows:'to'},
    {from: 106, to: 31, arrows:'to'},
    {from: 106, to: 32, arrows:'to'},
    {from: 106, to: 96, arrows:'to'},
    {from: 106, to: 200, arrows:'to'},
      

    {from: 107, to: 1, arrows:'to'},
    {from: 107, to: 3, arrows:'to'},
    {from: 107, to: 6, arrows:'to'},
    {from: 107, to: 21, arrows:'to'},
    {from: 107, to: 31, arrows:'to'},
    {from: 107, to: 80, arrows:'to'},
    {from: 107, to: 96, arrows:'to'},
    {from: 107, to: 108, arrows:'to'},
    {from: 107, to: 200, arrows:'to'},
      
      
    {from: 108, to: 2, arrows:'to'},
    {from: 108, to: 3, arrows:'to'},
    {from: 108, to: 6, arrows:'to'},
    {from: 108, to: 21, arrows:'to'},
    {from: 108, to: 33, arrows:'to'},
    {from: 108, to: 80, arrows:'to'},

    {from: 111, to: 6, arrows: 'to'},
    {from: 111, to: 11, arrows: 'to'},

    {from: 112, to: 69, arrows:'to'},
    {from: 112, to: 80, arrows:'to'},
    {from: 112, to: 81, arrows:'to'},
    {from: 112, to: 96, arrows:'to'},
    {from: 112, to: 105, arrows:'to'},
    {from: 112, to: 109, arrows:'to'},
    {from: 112, to: 110, arrows:'to'},
    {from: 112, to: 111, arrows:'to'},
    {from: 112, to: 113, arrows:'to'},
    {from: 112, to: 114, arrows:'to'},
    {from: 112, to: 115, arrows:'to'},
    {from: 112, to: 116, arrows:'to'},
    {from: 112, to: 117, arrows:'to'},
    {from: 112, to: 118, arrows:'to'},
    {from: 112, to: 119, arrows:'to'},
    {from: 112, to: 120, arrows:'to'},
    {from: 112, to: 121, arrows:'to'},
    {from: 112, to: 122, arrows:'to'},

    {from: 120, to: 80, arrows:'to'},
    {from: 120, to: 81, arrows:'to'},
    {from: 120, to: 123, arrows:'to'},

    {from: 121, to: 81, arrows:'to'},
    {from: 121, to: 111, arrows:'to'},
    {from: 121, to: 124, arrows:'to'},
      
      
      
    {from: 200, to: 68, arrows:'to'},
    {from: 200, to: 67, arrows:'to'},

    {from: 201, to: 67, arrows:'to'},
    {from: 201, to: 84, arrows:'to'},
    {from: 201, to: 200, arrows:'to'}
  ]);

  // create a network
  var container = document.getElementById('mynetwork');
  var data = {
    nodes: nodes,
    edges: edges
  };
  var options = {};
  var network = new vis.Network(container, data, options);
