require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz kiwi october slab chapter deny radar pumpkin harvest nature system section'; 
let testAccounts = [
"0x4d49f0684f42d88da0c5b2f1686ac9115ed8a0cd038e695ca7c38a303714672b",
"0x71bb37cdb71b12364a7ac484ec736fa211f1ded0b78c4eaa4fcd9cb0784441e3",
"0x4bdfbe71e7682d02aebbf03e355fc1b8f958d5d5013bb1d27bcd62a13d0ea5b0",
"0xff7800402d6ed036c99b082a42ee3d441ecbb9a8ad5a4b6454fb6ddab3b32c7e",
"0x97ae4cdb6ff3fdf343d90de1604b7b7f0961ee4f06ae3c458e95be07982dcbda",
"0xa01121a060cc65c0143180f2be89c5c5ef3370d5b094084d0bd60c541eea9832",
"0x4914b693449e7f1214ef2cf474aa0fa780dbf011fb6832c0b79c159147daae81",
"0x7f953c000a6a8fd9c9287ce63527586c8206aa4c63eb16bfedb710b0893ec8a3",
"0x90dec7e975edd46ffd3bada4047c786eaae54ce46ab9f1d66d25e27577fc4533",
"0xa37b1c8af52364d981842b12dc422940c7792979501de4c052f426171903a6d2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

