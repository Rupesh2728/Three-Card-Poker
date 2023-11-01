
const hre = require("hardhat");


async function getBalances(addresses)
{  for(const address of addresses) {
     console.log(`Balance of ${address} is ${hre.ethers.formatEther(await hre.ethers.provider.getBalance(address))}`);
}  
}

async function main() {
   const [owner,player1,player2,player3,player4]=await hre.ethers.getSigners();
   const ThreeCardPoker=await hre.ethers.getContractFactory("ThreeCardPoker");
   const contract=await ThreeCardPoker.deploy();

   console.log("CA:",await contract.getAddress());

   console.log("Before Game starts...");
   await getBalances([player1,player2,player3,player4]);

   await contract.connect(player1).Play_poker("Player1",{value : hre.ethers.parseEther("0.5")});
   await contract.connect(player2).Play_poker("Player2",{value : hre.ethers.parseEther("0.5")});
   await contract.connect(player3).Play_poker("Player3",{value : hre.ethers.parseEther("0.25")});
   await contract.connect(player4).Play_poker("Player4",{value : hre.ethers.parseEther("0.75")});


   console.log("Participant 1:",(await contract.participents(0)).toString());
   console.log("Participant 2:",(await contract.participents(1)).toString());
   console.log("Participant 3:",(await contract.participents(2)).toString());
   console.log("Participant 4:",(await contract.participents(3)).toString());


   await contract.connect(owner).select_Winner();

   console.log("After Game starts...");
   const p1_bal=await contract.registered_Users(player1);
   const p2_bal=await contract.registered_Users(player2);
   const p3_bal=await contract.registered_Users(player3);
   const p4_bal=await contract.registered_Users(player4);

   console.log(p1_bal,p2_bal,p3_bal,p4_bal);
   await getBalances([player1,player2,player3,player4]);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
