
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");

require("./tasks/task")
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17",


    viaIR: true,
    settings: {
      optimizer: {

        enabled: true,
        runs: 200
      }, outputSelection: {
        "*": {
          "*": ["evm.assembly", "irOptimized"],
        }
      }
    }
  },

  defaultNetwork: "BSCTest",
  networks: {
    hardhat: {

    },
    BSCTest: {
      url: "https://bsc-testnet.public.blastapi.io",
      accounts: [],

    },
  },
  etherscan: {
    apiKey: "", // Your Etherscan API key
  }
};

// "*":{
//   "*":["evm.assembly","irOptimized"],
// }
