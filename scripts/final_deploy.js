
const hre = require("hardhat");

async function main() {
 
   const ThreeCardPoker=await hre.ethers.getContractFactory("ThreeCardPoker");
   const contract=await ThreeCardPoker.deploy();
   
   console.log("CA:",await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
