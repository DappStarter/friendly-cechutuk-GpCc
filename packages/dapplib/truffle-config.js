require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remain hole gloom dry fringe tunnel'; 
let testAccounts = [
"0x0b8e817fb071df1fc4dd1823b82d08c46a26e9c1cb6506b6f573dfa3b7eb4bf6",
"0x76c2354f181617ef6a71b06c92cea141c4790af3098fe3a02d790f2c5207ced5",
"0xd776b4e0b124067a5b9d98859eaefcd1c5bcdb71fa619f69314361ab1890205c",
"0xf9ed50597a1686932cbba1e3e01da9c696fef9010b96924d87cf3cfd31dd4c9b",
"0x04d73bf2aa4253107d5c0d6b2203d348a7f1b8ac477ce69a67b8f871161a860e",
"0x674b77f7db8720bc528d1f3b60df6dcc84d47f339cab5afa257fdef2066cecf6",
"0x6ff17c04cc60151e9450fc2ff75768a854f17adae2ff7c442a9ece34bcd89279",
"0x446af5895f2182a05cfc369daaf7a76b6b9fd7abba5ed2d46dadee3e5bcbbd7c",
"0x27d364229b3537a50bddc55dbc3db03a192a24969181bf0b5f136f71b407351d",
"0x7973248205bef6b55a78c96093bc522c52a232fc61f73580d0daee852b5b7e71"
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

