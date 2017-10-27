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
    {id: 32, label: '', group: 1},
    {id: 33, label: '', group: 1},
    {id: 34, label: '', group: 1},
    {id: 35, label: '', group: 1},
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
      
      
      {from: 200, to: 68, arrows:'to'},
      {from: 200, to: 67, arrows:'to'}
  ]);

  // create a network
  var container = document.getElementById('mynetwork');
  var data = {
    nodes: nodes,
    edges: edges
  };
  var options = {};
  var network = new vis.Network(container, data, options);
