require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    sepiola: {
      url: process.env.SEPIOLA_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
