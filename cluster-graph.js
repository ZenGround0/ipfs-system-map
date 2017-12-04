var nodes = new vis.DataSet([{"group": 1, "id": 1, "label": "ipfs-cluster"}, {"group": 1, "id": 2, "label": "raft"}, {"group": 1, "id": 3, "label": "ipfshttp"}, {"group": 1, "id": 4, "label": "basic"}, {"group": 1, "id": 5, "label": "test"}, {"group": 1, "id": 6, "label": "config"}, {"group": 1, "id": 7, "label": "state"}, {"group": 1, "id": 8, "label": "mapstate"}, {"group": 1, "id": 9, "label": "numpin"}, {"group": 1, "id": 10, "label": "disk"}, {"group": 1, "id": 11, "label": "util"}, {"group": 1, "id": 12, "label": "ascendalloc"}, {"group": 1, "id": 13, "label": "descendalloc"}, {"group": 1, "id": 14, "label": "ipfs-cluster-ctl"}, {"group": 1, "id": 15, "label": "api"}, {"group": 1, "id": 16, "label": "rest"}, {"group": 1, "id": 17, "label": "maptracker"}, {"group": 1, "id": 18, "label": "ipfs-cluster-service"}, {"group": 2, "id": 19, "label": "go-notifier"}, {"group": 2, "id": 20, "label": "goprocess"}, {"group": 3, "id": 21, "label": "pb"}, {"group": 4, "id": 22, "label": "spdystream"}, {"group": 5, "id": 23, "label": "context"}, {"group": 6, "id": 24, "label": "go-multiaddr"}, {"group": 7, "id": 25, "label": "cli"}, {"group": 6, "id": 26, "label": "go-multihash"}, {"group": 3, "id": 27, "label": "go-libp2p-swarm"}, {"group": 4, "id": 28, "label": "spdy"}, {"group": 3, "id": 29, "label": "pb"}, {"group": 3, "id": 30, "label": "go-libp2p-nat"}, {"group": 3, "id": 31, "label": "go-libp2p-secio"}, {"group": 5, "id": 32, "label": "periodic"}, {"group": 8, "id": 33, "label": "go.uuid"}, {"group": 3, "id": 34, "label": "go-libp2p-transport"}, {"group": 3, "id": 35, "label": "go-libp2p-circuit"}, {"group": 3, "id": 36, "label": "go-libp2p-raft"}, {"group": 1, "id": 37, "label": "go-cid"}, {"group": 9, "id": 38, "label": "go-libp2p-gostream"}, {"group": 10, "id": 39, "label": "ssdp"}, {"group": 3, "id": 40, "label": "go-ws-transport"}, {"group": 5, "id": 41, "label": "go-base58"}, {"group": 3, "id": 42, "label": "pb"}, {"group": 6, "id": 43, "label": "go-multibase"}, {"group": 6, "id": 44, "label": "go-multistream"}, {"group": 2, "id": 45, "label": "ws-transport"}, {"group": 11, "id": 46, "label": "io"}, {"group": 12, "id": 47, "label": "raft"}, {"group": 2, "id": 48, "label": "go-smux-yamux"}, {"group": 3, "id": 49, "label": "go-libp2p-conn"}, {"group": 3, "id": 50, "label": "go-libp2p-interface-connmgr"}, {"group": 6, "id": 51, "label": "msgpack"}, {"group": 12, "id": 52, "label": "codec"}, {"group": 3, "id": 53, "label": "go-libp2p-host"}, {"group": 10, "id": 54, "label": "internetgateway1"}, {"group": 5, "id": 55, "label": "go-msgio"}, {"group": 13, "id": 56, "label": "go-nat-pmp"}, {"group": 3, "id": 57, "label": "go-tcp-transport"}, {"group": 14, "id": 58, "label": "mux"}, {"group": 2, "id": 59, "label": "mafmt"}, {"group": 5, "id": 60, "label": "go-temp-err-catcher"}, {"group": 2, "id": 61, "label": "go-logging"}, {"group": 12, "id": 62, "label": "yamux"}, {"group": 12, "id": 63, "label": "raft-boltdb"}, {"group": 5, "id": 64, "label": "go-stream-muxer"}, {"group": 3, "id": 65, "label": "addr"}, {"group": 5, "id": 66, "label": "singlepoll"}, {"group": 3, "id": 67, "label": "go-libp2p-protocol"}, {"group": 10, "id": 68, "label": "soap"}, {"group": 2, "id": 69, "label": "go-metrics"}, {"group": 3, "id": 70, "label": "go-libp2p-net"}, {"group": 3, "id": 71, "label": "go-libp2p-peerstore"}, {"group": 2, "id": 72, "label": "base32"}, {"group": 15, "id": 73, "label": "murmur3"}, {"group": 13, "id": 74, "label": "gateway"}, {"group": 3, "id": 75, "label": "basic"}, {"group": 11, "id": 76, "label": "proto"}, {"group": 10, "id": 77, "label": "scpd"}, {"group": 3, "id": 78, "label": "identify"}, {"group": 1, "id": 79, "label": "go-ipfs-util"}, {"group": 3, "id": 80, "label": "go-libp2p-metrics"}, {"group": 16, "id": 81, "label": "edwards25519"}, {"group": 17, "id": 82, "label": "codec"}, {"group": 3, "id": 83, "label": "stream"}, {"group": 3, "id": 84, "label": "go-libp2p-peer"}, {"group": 3, "id": 85, "label": "go-libp2p-consensus"}, {"group": 14, "id": 86, "label": "websocket"}, {"group": 6, "id": 87, "label": "go-multiaddr-net"}, {"group": 3, "id": 88, "label": "go-libp2p-interface-pnet"}, {"group": 5, "id": 89, "label": "poll"}, {"group": 3, "id": 90, "label": "go-stream-muxer"}, {"group": 3, "id": 91, "label": "go-addr-util"}, {"group": 2, "id": 92, "label": "multiaddr-filter"}, {"group": 18, "id": 93, "label": "bolt"}, {"group": 16, "id": 94, "label": "ed25519"}, {"group": 19, "id": 95, "label": "go-metrics"}, {"group": 3, "id": 96, "label": "go-libp2p-interface-conn"}, {"group": 2, "id": 97, "label": "go-smux-spdystream"}, {"group": 3, "id": 98, "label": "go-libp2p-loggables"}, {"group": 20, "id": 99, "label": "btcec"}, {"group": 5, "id": 100, "label": "mpool"}, {"group": 3, "id": 101, "label": "go-libp2p-crypto"}, {"group": 10, "id": 102, "label": "httpu"}, {"group": 3, "id": 103, "label": "conn"}, {"group": 6, "id": 104, "label": "go-multicodec-packed"}, {"group": 10, "id": 105, "label": "goupnp"}, {"group": 21, "id": 106, "label": "semver"}, {"group": 2, "id": 107, "label": "ratelimit"}, {"group": 3, "id": 108, "label": "go-libp2p-pnet"}, {"group": 3, "id": 109, "label": "go-peerstream"}, {"group": 22, "id": 110, "label": "go-nat"}, {"group": 1, "id": 111, "label": "go-log"}, {"group": 6, "id": 112, "label": "go-multicodec"}, {"group": 9, "id": 113, "label": "go-libp2p-gorpc"}, {"group": 16, "id": 114, "label": "extra25519"}, {"group": 5, "id": 115, "label": "goprocess"}, {"group": 6, "id": 116, "label": "go-multiaddr-dns"}, {"group": 2, "id": 117, "label": "go-smux-multistream"}, {"group": 5, "id": 118, "label": "go-reuseport"}, {"group": 3, "id": 119, "label": "pb"}, {"group": 3, "id": 120, "label": "go-maddr-filter"}, {"group": 10, "id": 121, "label": "internetgateway2"}, {"group": 5, "id": 122, "label": "net"}]);




var edges = new vis.DataSet([{"from": 1, "to": 94, "arrows": "to"}, {"from": 1, "to": 81, "arrows": "to"}, {"from": 1, "to": 114, "arrows": "to"}, {"from": 1, "to": 95, "arrows": "to"}, {"from": 1, "to": 93, "arrows": "to"}, {"from": 1, "to": 99, "arrows": "to"}, {"from": 1, "to": 106, "arrows": "to"}, {"from": 1, "to": 22, "arrows": "to"}, {"from": 1, "to": 28, "arrows": "to"}, {"from": 1, "to": 110, "arrows": "to"}, {"from": 1, "to": 46, "arrows": "to"}, {"from": 1, "to": 76, "arrows": "to"}, {"from": 1, "to": 86, "arrows": "to"}, {"from": 1, "to": 52, "arrows": "to"}, {"from": 1, "to": 47, "arrows": "to"}, {"from": 1, "to": 63, "arrows": "to"}, {"from": 1, "to": 62, "arrows": "to"}, {"from": 1, "to": 113, "arrows": "to"}, {"from": 1, "to": 38, "arrows": "to"}, {"from": 1, "to": 105, "arrows": "to"}, {"from": 1, "to": 54, "arrows": "to"}, {"from": 1, "to": 121, "arrows": "to"}, {"from": 1, "to": 102, "arrows": "to"}, {"from": 1, "to": 77, "arrows": "to"}, {"from": 1, "to": 68, "arrows": "to"}, {"from": 1, "to": 39, "arrows": "to"}, {"from": 1, "to": 37, "arrows": "to"}, {"from": 1, "to": 79, "arrows": "to"}, {"from": 1, "to": 111, "arrows": "to"}, {"from": 1, "to": 15, "arrows": "to"}, {"from": 1, "to": 6, "arrows": "to"}, {"from": 1, "to": 2, "arrows": "to"}, {"from": 1, "to": 7, "arrows": "to"}, {"from": 1, "to": 74, "arrows": "to"}, {"from": 1, "to": 56, "arrows": "to"}, {"from": 1, "to": 41, "arrows": "to"}, {"from": 1, "to": 55, "arrows": "to"}, {"from": 1, "to": 100, "arrows": "to"}, {"from": 1, "to": 118, "arrows": "to"}, {"from": 1, "to": 89, "arrows": "to"}, {"from": 1, "to": 66, "arrows": "to"}, {"from": 1, "to": 122, "arrows": "to"}, {"from": 1, "to": 64, "arrows": "to"}, {"from": 1, "to": 60, "arrows": "to"}, {"from": 1, "to": 115, "arrows": "to"}, {"from": 1, "to": 23, "arrows": "to"}, {"from": 1, "to": 32, "arrows": "to"}, {"from": 1, "to": 91, "arrows": "to"}, {"from": 1, "to": 35, "arrows": "to"}, {"from": 1, "to": 42, "arrows": "to"}, {"from": 1, "to": 49, "arrows": "to"}, {"from": 1, "to": 85, "arrows": "to"}, {"from": 1, "to": 101, "arrows": "to"}, {"from": 1, "to": 29, "arrows": "to"}, {"from": 1, "to": 53, "arrows": "to"}, {"from": 1, "to": 96, "arrows": "to"}, {"from": 1, "to": 50, "arrows": "to"}, {"from": 1, "to": 88, "arrows": "to"}, {"from": 1, "to": 98, "arrows": "to"}, {"from": 1, "to": 80, "arrows": "to"}, {"from": 1, "to": 103, "arrows": "to"}, {"from": 1, "to": 83, "arrows": "to"}, {"from": 1, "to": 30, "arrows": "to"}, {"from": 1, "to": 70, "arrows": "to"}, {"from": 1, "to": 84, "arrows": "to"}, {"from": 1, "to": 71, "arrows": "to"}, {"from": 1, "to": 65, "arrows": "to"}, {"from": 1, "to": 108, "arrows": "to"}, {"from": 1, "to": 67, "arrows": "to"}, {"from": 1, "to": 36, "arrows": "to"}, {"from": 1, "to": 31, "arrows": "to"}, {"from": 1, "to": 21, "arrows": "to"}, {"from": 1, "to": 27, "arrows": "to"}, {"from": 1, "to": 34, "arrows": "to"}, {"from": 1, "to": 75, "arrows": "to"}, {"from": 1, "to": 78, "arrows": "to"}, {"from": 1, "to": 119, "arrows": "to"}, {"from": 1, "to": 120, "arrows": "to"}, {"from": 1, "to": 109, "arrows": "to"}, {"from": 1, "to": 90, "arrows": "to"}, {"from": 1, "to": 57, "arrows": "to"}, {"from": 1, "to": 40, "arrows": "to"}, {"from": 1, "to": 24, "arrows": "to"}, {"from": 1, "to": 116, "arrows": "to"}, {"from": 1, "to": 87, "arrows": "to"}, {"from": 1, "to": 43, "arrows": "to"}, {"from": 1, "to": 112, "arrows": "to"}, {"from": 1, "to": 104, "arrows": "to"}, {"from": 1, "to": 51, "arrows": "to"}, {"from": 1, "to": 26, "arrows": "to"}, {"from": 1, "to": 44, "arrows": "to"}, {"from": 1, "to": 33, "arrows": "to"}, {"from": 1, "to": 73, "arrows": "to"}, {"from": 1, "to": 82, "arrows": "to"}, {"from": 1, "to": 72, "arrows": "to"}, {"from": 1, "to": 61, "arrows": "to"}, {"from": 1, "to": 69, "arrows": "to"}, {"from": 1, "to": 19, "arrows": "to"}, {"from": 1, "to": 20, "arrows": "to"}, {"from": 1, "to": 107, "arrows": "to"}, {"from": 1, "to": 117, "arrows": "to"}, {"from": 1, "to": 97, "arrows": "to"}, {"from": 1, "to": 48, "arrows": "to"}, {"from": 1, "to": 59, "arrows": "to"}, {"from": 1, "to": 92, "arrows": "to"}, {"from": 1, "to": 45, "arrows": "to"}, {"from": 2, "to": 94, "arrows": "to"}, {"from": 2, "to": 81, "arrows": "to"}, {"from": 2, "to": 114, "arrows": "to"}, {"from": 2, "to": 95, "arrows": "to"}, {"from": 2, "to": 93, "arrows": "to"}, {"from": 2, "to": 99, "arrows": "to"}, {"from": 2, "to": 76, "arrows": "to"}, {"from": 2, "to": 52, "arrows": "to"}, {"from": 2, "to": 47, "arrows": "to"}, {"from": 2, "to": 63, "arrows": "to"}, {"from": 2, "to": 113, "arrows": "to"}, {"from": 2, "to": 38, "arrows": "to"}, {"from": 2, "to": 37, "arrows": "to"}, {"from": 2, "to": 79, "arrows": "to"}, {"from": 2, "to": 111, "arrows": "to"}, {"from": 2, "to": 15, "arrows": "to"}, {"from": 2, "to": 6, "arrows": "to"}, {"from": 2, "to": 7, "arrows": "to"}, {"from": 2, "to": 41, "arrows": "to"}, {"from": 2, "to": 115, "arrows": "to"}, {"from": 2, "to": 85, "arrows": "to"}, {"from": 2, "to": 101, "arrows": "to"}, {"from": 2, "to": 29, "arrows": "to"}, {"from": 2, "to": 53, "arrows": "to"}, {"from": 2, "to": 96, "arrows": "to"}, {"from": 2, "to": 70, "arrows": "to"}, {"from": 2, "to": 84, "arrows": "to"}, {"from": 2, "to": 71, "arrows": "to"}, {"from": 2, "to": 65, "arrows": "to"}, {"from": 2, "to": 67, "arrows": "to"}, {"from": 2, "to": 36, "arrows": "to"}, {"from": 2, "to": 34, "arrows": "to"}, {"from": 2, "to": 120, "arrows": "to"}, {"from": 2, "to": 90, "arrows": "to"}, {"from": 2, "to": 24, "arrows": "to"}, {"from": 2, "to": 87, "arrows": "to"}, {"from": 2, "to": 43, "arrows": "to"}, {"from": 2, "to": 112, "arrows": "to"}, {"from": 2, "to": 104, "arrows": "to"}, {"from": 2, "to": 51, "arrows": "to"}, {"from": 2, "to": 26, "arrows": "to"}, {"from": 2, "to": 73, "arrows": "to"}, {"from": 2, "to": 82, "arrows": "to"}, {"from": 2, "to": 72, "arrows": "to"}, {"from": 2, "to": 61, "arrows": "to"}, {"from": 2, "to": 59, "arrows": "to"}, {"from": 3, "to": 94, "arrows": "to"}, {"from": 3, "to": 81, "arrows": "to"}, {"from": 3, "to": 114, "arrows": "to"}, {"from": 3, "to": 99, "arrows": "to"}, {"from": 3, "to": 76, "arrows": "to"}, {"from": 3, "to": 113, "arrows": "to"}, {"from": 3, "to": 37, "arrows": "to"}, {"from": 3, "to": 79, "arrows": "to"}, {"from": 3, "to": 111, "arrows": "to"}, {"from": 3, "to": 15, "arrows": "to"}, {"from": 3, "to": 6, "arrows": "to"}, {"from": 3, "to": 41, "arrows": "to"}, {"from": 3, "to": 115, "arrows": "to"}, {"from": 3, "to": 101, "arrows": "to"}, {"from": 3, "to": 29, "arrows": "to"}, {"from": 3, "to": 53, "arrows": "to"}, {"from": 3, "to": 96, "arrows": "to"}, {"from": 3, "to": 70, "arrows": "to"}, {"from": 3, "to": 84, "arrows": "to"}, {"from": 3, "to": 71, "arrows": "to"}, {"from": 3, "to": 65, "arrows": "to"}, {"from": 3, "to": 67, "arrows": "to"}, {"from": 3, "to": 34, "arrows": "to"}, {"from": 3, "to": 120, "arrows": "to"}, {"from": 3, "to": 90, "arrows": "to"}, {"from": 3, "to": 24, "arrows": "to"}, {"from": 3, "to": 87, "arrows": "to"}, {"from": 3, "to": 43, "arrows": "to"}, {"from": 3, "to": 112, "arrows": "to"}, {"from": 3, "to": 104, "arrows": "to"}, {"from": 3, "to": 51, "arrows": "to"}, {"from": 3, "to": 26, "arrows": "to"}, {"from": 3, "to": 73, "arrows": "to"}, {"from": 3, "to": 82, "arrows": "to"}, {"from": 3, "to": 72, "arrows": "to"}, {"from": 3, "to": 61, "arrows": "to"}, {"from": 3, "to": 59, "arrows": "to"}, {"from": 4, "to": 94, "arrows": "to"}, {"from": 4, "to": 81, "arrows": "to"}, {"from": 4, "to": 114, "arrows": "to"}, {"from": 4, "to": 99, "arrows": "to"}, {"from": 4, "to": 76, "arrows": "to"}, {"from": 4, "to": 113, "arrows": "to"}, {"from": 4, "to": 37, "arrows": "to"}, {"from": 4, "to": 79, "arrows": "to"}, {"from": 4, "to": 111, "arrows": "to"}, {"from": 4, "to": 15, "arrows": "to"}, {"from": 4, "to": 6, "arrows": "to"}, {"from": 4, "to": 41, "arrows": "to"}, {"from": 4, "to": 115, "arrows": "to"}, {"from": 4, "to": 101, "arrows": "to"}, {"from": 4, "to": 29, "arrows": "to"}, {"from": 4, "to": 53, "arrows": "to"}, {"from": 4, "to": 96, "arrows": "to"}, {"from": 4, "to": 70, "arrows": "to"}, {"from": 4, "to": 84, "arrows": "to"}, {"from": 4, "to": 71, "arrows": "to"}, {"from": 4, "to": 65, "arrows": "to"}, {"from": 4, "to": 67, "arrows": "to"}, {"from": 4, "to": 34, "arrows": "to"}, {"from": 4, "to": 120, "arrows": "to"}, {"from": 4, "to": 90, "arrows": "to"}, {"from": 4, "to": 24, "arrows": "to"}, {"from": 4, "to": 87, "arrows": "to"}, {"from": 4, "to": 43, "arrows": "to"}, {"from": 4, "to": 112, "arrows": "to"}, {"from": 4, "to": 104, "arrows": "to"}, {"from": 4, "to": 51, "arrows": "to"}, {"from": 4, "to": 26, "arrows": "to"}, {"from": 4, "to": 73, "arrows": "to"}, {"from": 4, "to": 82, "arrows": "to"}, {"from": 4, "to": 72, "arrows": "to"}, {"from": 4, "to": 61, "arrows": "to"}, {"from": 4, "to": 59, "arrows": "to"}, {"from": 5, "to": 94, "arrows": "to"}, {"from": 5, "to": 81, "arrows": "to"}, {"from": 5, "to": 114, "arrows": "to"}, {"from": 5, "to": 99, "arrows": "to"}, {"from": 5, "to": 76, "arrows": "to"}, {"from": 5, "to": 113, "arrows": "to"}, {"from": 5, "to": 37, "arrows": "to"}, {"from": 5, "to": 79, "arrows": "to"}, {"from": 5, "to": 111, "arrows": "to"}, {"from": 5, "to": 15, "arrows": "to"}, {"from": 5, "to": 8, "arrows": "to"}, {"from": 5, "to": 41, "arrows": "to"}, {"from": 5, "to": 115, "arrows": "to"}, {"from": 5, "to": 101, "arrows": "to"}, {"from": 5, "to": 29, "arrows": "to"}, {"from": 5, "to": 53, "arrows": "to"}, {"from": 5, "to": 96, "arrows": "to"}, {"from": 5, "to": 70, "arrows": "to"}, {"from": 5, "to": 84, "arrows": "to"}, {"from": 5, "to": 71, "arrows": "to"}, {"from": 5, "to": 65, "arrows": "to"}, {"from": 5, "to": 67, "arrows": "to"}, {"from": 5, "to": 34, "arrows": "to"}, {"from": 5, "to": 120, "arrows": "to"}, {"from": 5, "to": 90, "arrows": "to"}, {"from": 5, "to": 24, "arrows": "to"}, {"from": 5, "to": 87, "arrows": "to"}, {"from": 5, "to": 43, "arrows": "to"}, {"from": 5, "to": 112, "arrows": "to"}, {"from": 5, "to": 104, "arrows": "to"}, {"from": 5, "to": 51, "arrows": "to"}, {"from": 5, "to": 26, "arrows": "to"}, {"from": 5, "to": 73, "arrows": "to"}, {"from": 5, "to": 82, "arrows": "to"}, {"from": 5, "to": 72, "arrows": "to"}, {"from": 5, "to": 61, "arrows": "to"}, {"from": 5, "to": 59, "arrows": "to"}, {"from": 6, "to": 111, "arrows": "to"}, {"from": 6, "to": 61, "arrows": "to"}, {"from": 7, "to": 94, "arrows": "to"}, {"from": 7, "to": 81, "arrows": "to"}, {"from": 7, "to": 114, "arrows": "to"}, {"from": 7, "to": 99, "arrows": "to"}, {"from": 7, "to": 76, "arrows": "to"}, {"from": 7, "to": 37, "arrows": "to"}, {"from": 7, "to": 111, "arrows": "to"}, {"from": 7, "to": 15, "arrows": "to"}, {"from": 7, "to": 41, "arrows": "to"}, {"from": 7, "to": 101, "arrows": "to"}, {"from": 7, "to": 29, "arrows": "to"}, {"from": 7, "to": 84, "arrows": "to"}, {"from": 7, "to": 67, "arrows": "to"}, {"from": 7, "to": 24, "arrows": "to"}, {"from": 7, "to": 43, "arrows": "to"}, {"from": 7, "to": 104, "arrows": "to"}, {"from": 7, "to": 26, "arrows": "to"}, {"from": 7, "to": 73, "arrows": "to"}, {"from": 7, "to": 72, "arrows": "to"}, {"from": 7, "to": 61, "arrows": "to"}, {"from": 8, "to": 94, "arrows": "to"}, {"from": 8, "to": 81, "arrows": "to"}, {"from": 8, "to": 114, "arrows": "to"}, {"from": 8, "to": 99, "arrows": "to"}, {"from": 8, "to": 76, "arrows": "to"}, {"from": 8, "to": 37, "arrows": "to"}, {"from": 8, "to": 111, "arrows": "to"}, {"from": 8, "to": 15, "arrows": "to"}, {"from": 8, "to": 41, "arrows": "to"}, {"from": 8, "to": 101, "arrows": "to"}, {"from": 8, "to": 29, "arrows": "to"}, {"from": 8, "to": 84, "arrows": "to"}, {"from": 8, "to": 67, "arrows": "to"}, {"from": 8, "to": 24, "arrows": "to"}, {"from": 8, "to": 43, "arrows": "to"}, {"from": 8, "to": 112, "arrows": "to"}, {"from": 8, "to": 104, "arrows": "to"}, {"from": 8, "to": 51, "arrows": "to"}, {"from": 8, "to": 26, "arrows": "to"}, {"from": 8, "to": 73, "arrows": "to"}, {"from": 8, "to": 82, "arrows": "to"}, {"from": 8, "to": 72, "arrows": "to"}, {"from": 8, "to": 61, "arrows": "to"}, {"from": 9, "to": 94, "arrows": "to"}, {"from": 9, "to": 81, "arrows": "to"}, {"from": 9, "to": 114, "arrows": "to"}, {"from": 9, "to": 99, "arrows": "to"}, {"from": 9, "to": 76, "arrows": "to"}, {"from": 9, "to": 113, "arrows": "to"}, {"from": 9, "to": 37, "arrows": "to"}, {"from": 9, "to": 79, "arrows": "to"}, {"from": 9, "to": 111, "arrows": "to"}, {"from": 9, "to": 15, "arrows": "to"}, {"from": 9, "to": 6, "arrows": "to"}, {"from": 9, "to": 41, "arrows": "to"}, {"from": 9, "to": 115, "arrows": "to"}, {"from": 9, "to": 101, "arrows": "to"}, {"from": 9, "to": 29, "arrows": "to"}, {"from": 9, "to": 53, "arrows": "to"}, {"from": 9, "to": 96, "arrows": "to"}, {"from": 9, "to": 70, "arrows": "to"}, {"from": 9, "to": 84, "arrows": "to"}, {"from": 9, "to": 71, "arrows": "to"}, {"from": 9, "to": 65, "arrows": "to"}, {"from": 9, "to": 67, "arrows": "to"}, {"from": 9, "to": 34, "arrows": "to"}, {"from": 9, "to": 120, "arrows": "to"}, {"from": 9, "to": 90, "arrows": "to"}, {"from": 9, "to": 24, "arrows": "to"}, {"from": 9, "to": 87, "arrows": "to"}, {"from": 9, "to": 43, "arrows": "to"}, {"from": 9, "to": 112, "arrows": "to"}, {"from": 9, "to": 104, "arrows": "to"}, {"from": 9, "to": 51, "arrows": "to"}, {"from": 9, "to": 26, "arrows": "to"}, {"from": 9, "to": 73, "arrows": "to"}, {"from": 9, "to": 82, "arrows": "to"}, {"from": 9, "to": 72, "arrows": "to"}, {"from": 9, "to": 61, "arrows": "to"}, {"from": 9, "to": 59, "arrows": "to"}, {"from": 10, "to": 94, "arrows": "to"}, {"from": 10, "to": 81, "arrows": "to"}, {"from": 10, "to": 114, "arrows": "to"}, {"from": 10, "to": 99, "arrows": "to"}, {"from": 10, "to": 76, "arrows": "to"}, {"from": 10, "to": 113, "arrows": "to"}, {"from": 10, "to": 37, "arrows": "to"}, {"from": 10, "to": 79, "arrows": "to"}, {"from": 10, "to": 111, "arrows": "to"}, {"from": 10, "to": 15, "arrows": "to"}, {"from": 10, "to": 6, "arrows": "to"}, {"from": 10, "to": 41, "arrows": "to"}, {"from": 10, "to": 115, "arrows": "to"}, {"from": 10, "to": 101, "arrows": "to"}, {"from": 10, "to": 29, "arrows": "to"}, {"from": 10, "to": 53, "arrows": "to"}, {"from": 10, "to": 96, "arrows": "to"}, {"from": 10, "to": 70, "arrows": "to"}, {"from": 10, "to": 84, "arrows": "to"}, {"from": 10, "to": 71, "arrows": "to"}, {"from": 10, "to": 65, "arrows": "to"}, {"from": 10, "to": 67, "arrows": "to"}, {"from": 10, "to": 34, "arrows": "to"}, {"from": 10, "to": 120, "arrows": "to"}, {"from": 10, "to": 90, "arrows": "to"}, {"from": 10, "to": 24, "arrows": "to"}, {"from": 10, "to": 87, "arrows": "to"}, {"from": 10, "to": 43, "arrows": "to"}, {"from": 10, "to": 112, "arrows": "to"}, {"from": 10, "to": 104, "arrows": "to"}, {"from": 10, "to": 51, "arrows": "to"}, {"from": 10, "to": 26, "arrows": "to"}, {"from": 10, "to": 73, "arrows": "to"}, {"from": 10, "to": 82, "arrows": "to"}, {"from": 10, "to": 72, "arrows": "to"}, {"from": 10, "to": 61, "arrows": "to"}, {"from": 10, "to": 59, "arrows": "to"}, {"from": 11, "to": 94, "arrows": "to"}, {"from": 11, "to": 81, "arrows": "to"}, {"from": 11, "to": 114, "arrows": "to"}, {"from": 11, "to": 99, "arrows": "to"}, {"from": 11, "to": 76, "arrows": "to"}, {"from": 11, "to": 37, "arrows": "to"}, {"from": 11, "to": 111, "arrows": "to"}, {"from": 11, "to": 15, "arrows": "to"}, {"from": 11, "to": 41, "arrows": "to"}, {"from": 11, "to": 101, "arrows": "to"}, {"from": 11, "to": 29, "arrows": "to"}, {"from": 11, "to": 84, "arrows": "to"}, {"from": 11, "to": 67, "arrows": "to"}, {"from": 11, "to": 24, "arrows": "to"}, {"from": 11, "to": 43, "arrows": "to"}, {"from": 11, "to": 104, "arrows": "to"}, {"from": 11, "to": 26, "arrows": "to"}, {"from": 11, "to": 73, "arrows": "to"}, {"from": 11, "to": 72, "arrows": "to"}, {"from": 11, "to": 61, "arrows": "to"}, {"from": 12, "to": 94, "arrows": "to"}, {"from": 12, "to": 81, "arrows": "to"}, {"from": 12, "to": 114, "arrows": "to"}, {"from": 12, "to": 99, "arrows": "to"}, {"from": 12, "to": 76, "arrows": "to"}, {"from": 12, "to": 113, "arrows": "to"}, {"from": 12, "to": 37, "arrows": "to"}, {"from": 12, "to": 79, "arrows": "to"}, {"from": 12, "to": 111, "arrows": "to"}, {"from": 12, "to": 11, "arrows": "to"}, {"from": 12, "to": 15, "arrows": "to"}, {"from": 12, "to": 41, "arrows": "to"}, {"from": 12, "to": 115, "arrows": "to"}, {"from": 12, "to": 101, "arrows": "to"}, {"from": 12, "to": 29, "arrows": "to"}, {"from": 12, "to": 53, "arrows": "to"}, {"from": 12, "to": 96, "arrows": "to"}, {"from": 12, "to": 70, "arrows": "to"}, {"from": 12, "to": 84, "arrows": "to"}, {"from": 12, "to": 71, "arrows": "to"}, {"from": 12, "to": 65, "arrows": "to"}, {"from": 12, "to": 67, "arrows": "to"}, {"from": 12, "to": 34, "arrows": "to"}, {"from": 12, "to": 120, "arrows": "to"}, {"from": 12, "to": 90, "arrows": "to"}, {"from": 12, "to": 24, "arrows": "to"}, {"from": 12, "to": 87, "arrows": "to"}, {"from": 12, "to": 43, "arrows": "to"}, {"from": 12, "to": 112, "arrows": "to"}, {"from": 12, "to": 104, "arrows": "to"}, {"from": 12, "to": 51, "arrows": "to"}, {"from": 12, "to": 26, "arrows": "to"}, {"from": 12, "to": 73, "arrows": "to"}, {"from": 12, "to": 82, "arrows": "to"}, {"from": 12, "to": 72, "arrows": "to"}, {"from": 12, "to": 61, "arrows": "to"}, {"from": 12, "to": 59, "arrows": "to"}, {"from": 13, "to": 94, "arrows": "to"}, {"from": 13, "to": 81, "arrows": "to"}, {"from": 13, "to": 114, "arrows": "to"}, {"from": 13, "to": 99, "arrows": "to"}, {"from": 13, "to": 76, "arrows": "to"}, {"from": 13, "to": 113, "arrows": "to"}, {"from": 13, "to": 37, "arrows": "to"}, {"from": 13, "to": 79, "arrows": "to"}, {"from": 13, "to": 111, "arrows": "to"}, {"from": 13, "to": 11, "arrows": "to"}, {"from": 13, "to": 15, "arrows": "to"}, {"from": 13, "to": 41, "arrows": "to"}, {"from": 13, "to": 115, "arrows": "to"}, {"from": 13, "to": 101, "arrows": "to"}, {"from": 13, "to": 29, "arrows": "to"}, {"from": 13, "to": 53, "arrows": "to"}, {"from": 13, "to": 96, "arrows": "to"}, {"from": 13, "to": 70, "arrows": "to"}, {"from": 13, "to": 84, "arrows": "to"}, {"from": 13, "to": 71, "arrows": "to"}, {"from": 13, "to": 65, "arrows": "to"}, {"from": 13, "to": 67, "arrows": "to"}, {"from": 13, "to": 34, "arrows": "to"}, {"from": 13, "to": 120, "arrows": "to"}, {"from": 13, "to": 90, "arrows": "to"}, {"from": 13, "to": 24, "arrows": "to"}, {"from": 13, "to": 87, "arrows": "to"}, {"from": 13, "to": 43, "arrows": "to"}, {"from": 13, "to": 112, "arrows": "to"}, {"from": 13, "to": 104, "arrows": "to"}, {"from": 13, "to": 51, "arrows": "to"}, {"from": 13, "to": 26, "arrows": "to"}, {"from": 13, "to": 73, "arrows": "to"}, {"from": 13, "to": 82, "arrows": "to"}, {"from": 13, "to": 72, "arrows": "to"}, {"from": 13, "to": 61, "arrows": "to"}, {"from": 13, "to": 59, "arrows": "to"}, {"from": 14, "to": 94, "arrows": "to"}, {"from": 14, "to": 81, "arrows": "to"}, {"from": 14, "to": 114, "arrows": "to"}, {"from": 14, "to": 99, "arrows": "to"}, {"from": 14, "to": 76, "arrows": "to"}, {"from": 14, "to": 37, "arrows": "to"}, {"from": 14, "to": 111, "arrows": "to"}, {"from": 14, "to": 15, "arrows": "to"}, {"from": 14, "to": 41, "arrows": "to"}, {"from": 14, "to": 101, "arrows": "to"}, {"from": 14, "to": 29, "arrows": "to"}, {"from": 14, "to": 84, "arrows": "to"}, {"from": 14, "to": 67, "arrows": "to"}, {"from": 14, "to": 24, "arrows": "to"}, {"from": 14, "to": 43, "arrows": "to"}, {"from": 14, "to": 104, "arrows": "to"}, {"from": 14, "to": 26, "arrows": "to"}, {"from": 14, "to": 73, "arrows": "to"}, {"from": 14, "to": 25, "arrows": "to"}, {"from": 14, "to": 72, "arrows": "to"}, {"from": 14, "to": 61, "arrows": "to"}, {"from": 15, "to": 94, "arrows": "to"}, {"from": 15, "to": 81, "arrows": "to"}, {"from": 15, "to": 114, "arrows": "to"}, {"from": 15, "to": 99, "arrows": "to"}, {"from": 15, "to": 76, "arrows": "to"}, {"from": 15, "to": 37, "arrows": "to"}, {"from": 15, "to": 111, "arrows": "to"}, {"from": 15, "to": 41, "arrows": "to"}, {"from": 15, "to": 101, "arrows": "to"}, {"from": 15, "to": 29, "arrows": "to"}, {"from": 15, "to": 84, "arrows": "to"}, {"from": 15, "to": 67, "arrows": "to"}, {"from": 15, "to": 24, "arrows": "to"}, {"from": 15, "to": 43, "arrows": "to"}, {"from": 15, "to": 104, "arrows": "to"}, {"from": 15, "to": 26, "arrows": "to"}, {"from": 15, "to": 73, "arrows": "to"}, {"from": 15, "to": 72, "arrows": "to"}, {"from": 15, "to": 61, "arrows": "to"}, {"from": 16, "to": 94, "arrows": "to"}, {"from": 16, "to": 81, "arrows": "to"}, {"from": 16, "to": 114, "arrows": "to"}, {"from": 16, "to": 99, "arrows": "to"}, {"from": 16, "to": 76, "arrows": "to"}, {"from": 16, "to": 58, "arrows": "to"}, {"from": 16, "to": 113, "arrows": "to"}, {"from": 16, "to": 37, "arrows": "to"}, {"from": 16, "to": 79, "arrows": "to"}, {"from": 16, "to": 111, "arrows": "to"}, {"from": 16, "to": 15, "arrows": "to"}, {"from": 16, "to": 6, "arrows": "to"}, {"from": 16, "to": 41, "arrows": "to"}, {"from": 16, "to": 115, "arrows": "to"}, {"from": 16, "to": 101, "arrows": "to"}, {"from": 16, "to": 29, "arrows": "to"}, {"from": 16, "to": 53, "arrows": "to"}, {"from": 16, "to": 96, "arrows": "to"}, {"from": 16, "to": 70, "arrows": "to"}, {"from": 16, "to": 84, "arrows": "to"}, {"from": 16, "to": 71, "arrows": "to"}, {"from": 16, "to": 65, "arrows": "to"}, {"from": 16, "to": 67, "arrows": "to"}, {"from": 16, "to": 34, "arrows": "to"}, {"from": 16, "to": 120, "arrows": "to"}, {"from": 16, "to": 90, "arrows": "to"}, {"from": 16, "to": 24, "arrows": "to"}, {"from": 16, "to": 87, "arrows": "to"}, {"from": 16, "to": 43, "arrows": "to"}, {"from": 16, "to": 112, "arrows": "to"}, {"from": 16, "to": 104, "arrows": "to"}, {"from": 16, "to": 51, "arrows": "to"}, {"from": 16, "to": 26, "arrows": "to"}, {"from": 16, "to": 73, "arrows": "to"}, {"from": 16, "to": 82, "arrows": "to"}, {"from": 16, "to": 72, "arrows": "to"}, {"from": 16, "to": 61, "arrows": "to"}, {"from": 16, "to": 59, "arrows": "to"}, {"from": 17, "to": 94, "arrows": "to"}, {"from": 17, "to": 81, "arrows": "to"}, {"from": 17, "to": 114, "arrows": "to"}, {"from": 17, "to": 99, "arrows": "to"}, {"from": 17, "to": 76, "arrows": "to"}, {"from": 17, "to": 113, "arrows": "to"}, {"from": 17, "to": 37, "arrows": "to"}, {"from": 17, "to": 79, "arrows": "to"}, {"from": 17, "to": 111, "arrows": "to"}, {"from": 17, "to": 15, "arrows": "to"}, {"from": 17, "to": 41, "arrows": "to"}, {"from": 17, "to": 115, "arrows": "to"}, {"from": 17, "to": 101, "arrows": "to"}, {"from": 17, "to": 29, "arrows": "to"}, {"from": 17, "to": 53, "arrows": "to"}, {"from": 17, "to": 96, "arrows": "to"}, {"from": 17, "to": 70, "arrows": "to"}, {"from": 17, "to": 84, "arrows": "to"}, {"from": 17, "to": 71, "arrows": "to"}, {"from": 17, "to": 65, "arrows": "to"}, {"from": 17, "to": 67, "arrows": "to"}, {"from": 17, "to": 34, "arrows": "to"}, {"from": 17, "to": 120, "arrows": "to"}, {"from": 17, "to": 90, "arrows": "to"}, {"from": 17, "to": 24, "arrows": "to"}, {"from": 17, "to": 87, "arrows": "to"}, {"from": 17, "to": 43, "arrows": "to"}, {"from": 17, "to": 112, "arrows": "to"}, {"from": 17, "to": 104, "arrows": "to"}, {"from": 17, "to": 51, "arrows": "to"}, {"from": 17, "to": 26, "arrows": "to"}, {"from": 17, "to": 73, "arrows": "to"}, {"from": 17, "to": 82, "arrows": "to"}, {"from": 17, "to": 72, "arrows": "to"}, {"from": 17, "to": 61, "arrows": "to"}, {"from": 17, "to": 59, "arrows": "to"}, {"from": 18, "to": 94, "arrows": "to"}, {"from": 18, "to": 81, "arrows": "to"}, {"from": 18, "to": 114, "arrows": "to"}, {"from": 18, "to": 95, "arrows": "to"}, {"from": 18, "to": 93, "arrows": "to"}, {"from": 18, "to": 99, "arrows": "to"}, {"from": 18, "to": 106, "arrows": "to"}, {"from": 18, "to": 22, "arrows": "to"}, {"from": 18, "to": 28, "arrows": "to"}, {"from": 18, "to": 110, "arrows": "to"}, {"from": 18, "to": 46, "arrows": "to"}, {"from": 18, "to": 76, "arrows": "to"}, {"from": 18, "to": 58, "arrows": "to"}, {"from": 18, "to": 86, "arrows": "to"}, {"from": 18, "to": 52, "arrows": "to"}, {"from": 18, "to": 47, "arrows": "to"}, {"from": 18, "to": 63, "arrows": "to"}, {"from": 18, "to": 62, "arrows": "to"}, {"from": 18, "to": 113, "arrows": "to"}, {"from": 18, "to": 38, "arrows": "to"}, {"from": 18, "to": 105, "arrows": "to"}, {"from": 18, "to": 54, "arrows": "to"}, {"from": 18, "to": 121, "arrows": "to"}, {"from": 18, "to": 102, "arrows": "to"}, {"from": 18, "to": 77, "arrows": "to"}, {"from": 18, "to": 68, "arrows": "to"}, {"from": 18, "to": 39, "arrows": "to"}, {"from": 18, "to": 37, "arrows": "to"}, {"from": 18, "to": 79, "arrows": "to"}, {"from": 18, "to": 111, "arrows": "to"}, {"from": 18, "to": 1, "arrows": "to"}, {"from": 18, "to": 12, "arrows": "to"}, {"from": 18, "to": 13, "arrows": "to"}, {"from": 18, "to": 11, "arrows": "to"}, {"from": 18, "to": 15, "arrows": "to"}, {"from": 18, "to": 16, "arrows": "to"}, {"from": 18, "to": 6, "arrows": "to"}, {"from": 18, "to": 2, "arrows": "to"}, {"from": 18, "to": 10, "arrows": "to"}, {"from": 18, "to": 9, "arrows": "to"}, {"from": 18, "to": 3, "arrows": "to"}, {"from": 18, "to": 4, "arrows": "to"}, {"from": 18, "to": 17, "arrows": "to"}, {"from": 18, "to": 7, "arrows": "to"}, {"from": 18, "to": 8, "arrows": "to"}, {"from": 18, "to": 74, "arrows": "to"}, {"from": 18, "to": 56, "arrows": "to"}, {"from": 18, "to": 41, "arrows": "to"}, {"from": 18, "to": 55, "arrows": "to"}, {"from": 18, "to": 100, "arrows": "to"}, {"from": 18, "to": 118, "arrows": "to"}, {"from": 18, "to": 89, "arrows": "to"}, {"from": 18, "to": 66, "arrows": "to"}, {"from": 18, "to": 122, "arrows": "to"}, {"from": 18, "to": 64, "arrows": "to"}, {"from": 18, "to": 60, "arrows": "to"}, {"from": 18, "to": 115, "arrows": "to"}, {"from": 18, "to": 23, "arrows": "to"}, {"from": 18, "to": 32, "arrows": "to"}, {"from": 18, "to": 91, "arrows": "to"}, {"from": 18, "to": 35, "arrows": "to"}, {"from": 18, "to": 42, "arrows": "to"}, {"from": 18, "to": 49, "arrows": "to"}, {"from": 18, "to": 85, "arrows": "to"}, {"from": 18, "to": 101, "arrows": "to"}, {"from": 18, "to": 29, "arrows": "to"}, {"from": 18, "to": 53, "arrows": "to"}, {"from": 18, "to": 96, "arrows": "to"}, {"from": 18, "to": 50, "arrows": "to"}, {"from": 18, "to": 88, "arrows": "to"}, {"from": 18, "to": 98, "arrows": "to"}, {"from": 18, "to": 80, "arrows": "to"}, {"from": 18, "to": 103, "arrows": "to"}, {"from": 18, "to": 83, "arrows": "to"}, {"from": 18, "to": 30, "arrows": "to"}, {"from": 18, "to": 70, "arrows": "to"}, {"from": 18, "to": 84, "arrows": "to"}, {"from": 18, "to": 71, "arrows": "to"}, {"from": 18, "to": 65, "arrows": "to"}, {"from": 18, "to": 108, "arrows": "to"}, {"from": 18, "to": 67, "arrows": "to"}, {"from": 18, "to": 36, "arrows": "to"}, {"from": 18, "to": 31, "arrows": "to"}, {"from": 18, "to": 21, "arrows": "to"}, {"from": 18, "to": 27, "arrows": "to"}, {"from": 18, "to": 34, "arrows": "to"}, {"from": 18, "to": 75, "arrows": "to"}, {"from": 18, "to": 78, "arrows": "to"}, {"from": 18, "to": 119, "arrows": "to"}, {"from": 18, "to": 120, "arrows": "to"}, {"from": 18, "to": 109, "arrows": "to"}, {"from": 18, "to": 90, "arrows": "to"}, {"from": 18, "to": 57, "arrows": "to"}, {"from": 18, "to": 40, "arrows": "to"}, {"from": 18, "to": 24, "arrows": "to"}, {"from": 18, "to": 116, "arrows": "to"}, {"from": 18, "to": 87, "arrows": "to"}, {"from": 18, "to": 43, "arrows": "to"}, {"from": 18, "to": 112, "arrows": "to"}, {"from": 18, "to": 104, "arrows": "to"}, {"from": 18, "to": 51, "arrows": "to"}, {"from": 18, "to": 26, "arrows": "to"}, {"from": 18, "to": 44, "arrows": "to"}, {"from": 18, "to": 33, "arrows": "to"}, {"from": 18, "to": 73, "arrows": "to"}, {"from": 18, "to": 82, "arrows": "to"}, {"from": 18, "to": 25, "arrows": "to"}, {"from": 18, "to": 72, "arrows": "to"}, {"from": 18, "to": 61, "arrows": "to"}, {"from": 18, "to": 69, "arrows": "to"}, {"from": 18, "to": 19, "arrows": "to"}, {"from": 18, "to": 20, "arrows": "to"}, {"from": 18, "to": 107, "arrows": "to"}, {"from": 18, "to": 117, "arrows": "to"}, {"from": 18, "to": 97, "arrows": "to"}, {"from": 18, "to": 48, "arrows": "to"}, {"from": 18, "to": 59, "arrows": "to"}, {"from": 18, "to": 92, "arrows": "to"}, {"from": 18, "to": 45, "arrows": "to"}]);

// create a network
  var container = document.getElementById('mynetwork');
  var data = {
    nodes: nodes,
    edges: edges
  };
var options = {
  physics:{
    enabled: true,
    barnesHut: {
      gravitationalConstant: -2000,
      centralGravity: 0.3,
      springLength: 95,
      springConstant: 0.04,
      damping: 0.09,
      avoidOverlap: 0
    },
    forceAtlas2Based: {
      gravitationalConstant: -50,
      centralGravity: 0.01,
      springConstant: 0.08,
      springLength: 100,
      damping: 0.4,
      avoidOverlap: 0
    },
    repulsion: {
      centralGravity: 0.2,
      springLength: 200,
      springConstant: 0.05,
      nodeDistance: 100,
      damping: 0.09
    },
    hierarchicalRepulsion: {
      centralGravity: 0.0,
      springLength: 100,
      springConstant: 0.001,
      nodeDistance: 120,
      damping: 0.09
    },
    maxVelocity: 10,
    minVelocity: 0.1,
    solver: 'barnesHut',
    stabilization: {
      enabled: true,
      iterations: 1000,
      updateInterval: 100,
      onlyDynamicEdges: false,
      fit: true
    },
    timestep: 0.5,
    adaptiveTimestep: true
  }
}

var network = new vis.Network(container, data, options);
