var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('e4efdbfd'),
  addressVersion: 0x15,
  privKeyVersion: 149,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('332566761dcc76ff8daa5e3635033bb6686231a82d7e5ebe02c876ae3ea72b3c'),
    merkle_root: hex('ea7cd09a3f0092bdf746dc13d324c0827814403555b8905098206fae6d571cde'),
    height: 0,
    nonce: 11221122,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1374911200,
    bits: 504365055,
  },
  dnsSeeds: [
    '',
  ],
  defaultClientPort: 16282
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('fec3b9de'),
  addressVersion: 111,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('14D879BCBC6DB4A5F49B15AB710BD3F1DC1FF65361F10B3F6E58649C518DDB46'),
    merkle_root: hex('FF79AF16A9FFEB1B826DE1EA7F24539A2FE3702FE987912B09072BC41DBC02B5'),
    height: 0,
    nonce: 1403777,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1399544585,
    bits: 504365040
  },
  dnsSeeds: [],
  defaultClientPort: 26282,
  lastPoWBlock: 150
};
