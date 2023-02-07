require("@nomicfoundation/hardhat-toolbox");
const { env } = require("./.env");
require("dotenv").config(env);
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.10",
  networks: {
    goerli: {
      url: INFURA_GOERLI_ENDPOINT,
      accounts: [PRIVATE_KEY]
    }
  }
};
