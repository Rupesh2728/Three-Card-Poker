require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const DEPLOYING_ACC_PRIVATE_KEY="fc26f425c8f294af6a4f1775bf0468cb3922f8da790ba4d9e7cd0840aa84f6ef"
module.exports = {
  solidity: "0.8.19",
  networks :
  {
    sepolia :
    {
      url : "https://sepolia.infura.io/v3/4547260be2324afbb3f3aebedffb5fbf",
      accounts :[DEPLOYING_ACC_PRIVATE_KEY],
    }
  }
};

// CA : 0x0236f682cE29580E6f5Ef7f3c0F4c30564CDbc95
