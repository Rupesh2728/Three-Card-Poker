require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_URL=process.env.SEPOLIA_URL;
const DEPLOYING_ACC_PRIVATE_KEY=process.env.DEPLOYING_ACC_PRIVATE_KEY;


module.exports = {
  solidity: "0.8.19",
  networks :
  {
    sepolia :
    {
      url : SEPOLIA_URL,
      accounts :[DEPLOYING_ACC_PRIVATE_KEY],
    }
  }
};

