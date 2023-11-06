import React, { useState } from "react";
import abi from '../ABI/ThreeCardPoker.json';
import { Link } from "react-router-dom";
import {ethers } from "ethers";
import startbtnlogo from '../Assests/startbtnlogo.png';

// 0x36F5d0D5e83D3d46aF27aEc976305aa1d390cF0c
const Intro = ({setstateHandler,setAccountHandler,owner}) => {

  const [account,setaccount]=useState("No account Connected");
  const [flag,setflag]=useState(false);

  const onClickHandler=()=>{
    const connetWallet=async()=>{
      const contractAddress="0x36F5d0D5e83D3d46aF27aEc976305aa1d390cF0c";
      const contractABI=abi.abi;
      try{
        const {ethereum} = window;
         if(ethereum)
         {
          await ethereum.request({method: 'eth_requestAccounts'});
         }
    
        const provider=new ethers.BrowserProvider(ethereum);
        console.log(await provider.getBalance(contractAddress));
        const accounts=await provider.listAccounts();
        setaccount(accounts[0].address);
        const signer=await provider.getSigner();

        window.ethereum.on('accountsChanged', async () => {
          const new_accounts=await provider.listAccounts();
          setaccount(new_accounts[0].address);
        });

        const contract=new ethers.Contract(contractAddress,contractABI,signer);
        setstateHandler({provider:provider,signer:signer,contract:contract});
      }

      catch(error) {
       console.log(error);
      }
   }
  
   connetWallet();
   setflag(true);
  }


  setAccountHandler(account);



  return (    
    <div className="h-screen flex flex-col items-center bg-no-repeat bg-cover bg-[url('https://images.squarespace-cdn.com/content/v1/524da667e4b0dfdf24b0c51c/1392845667005-X4GZ2WZOWD1OYGTFYGPW/threecard1.jpg?format=2500w')]">
      <div className="bg-[#d3aeae] rounded-lg flex absolute right-0 mr-6 mt-5 p-2">
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png"
         className="w-[1.5rem] h-[1.5rem] mr-2" alt=""/>
        <p className="font-bold">{account}</p>
      </div>


      <div className="absolute left-0 flex">

      <p className="ml-6 mt-6 p-2 text-green-500 font-bold">Status :</p>
      <div className="bg-[#d3aeae] rounded-lg flex ml-2 mt-6 p-2">
        {flag && <p className="font-bold text-[green]">Connected</p>}
        {!flag && <p className="font-bold text-[red]">Not Connected</p>}
      </div>

      </div>

      <div className="p-8 mt-[4rem] rounded-lg text-[gold]">
        <h1 className="text-[2.5rem] font-bold mb-4 ml-[3.5rem]">Welcome to Three Card Poker</h1>
       <div className="items-center justify-center m-auto">
         <p className="text-white font-bold">
          Are you ready to play? Please connect your Metamask account before you start the game...
        </p>    
       </div>
 
      </div>

      <div className="absolute left-0 mt-[15rem] ml-[2rem] bg-[#FFFDD0] rounded-lg w-[30rem] p-4 pt-2">
      <p className="text-[red] font-bold text-[1.3rem] mt-[1rem] ml-[1.5rem]">
           Game Rules and Bonus Criteria: 
        </p>

        <p className="text-[black] font-bold ml-[0.5rem] flex">
          <img src="https://i.pinimg.com/1200x/a4/ea/b8/a4eab8d261ab7205975996cf04269565.jpg"
          className="w-[1.5rem] h-[1.5rem]" alt=""/> Pay the mentioned bet value to participate in the game, after connecting to the account
        </p>

        <p className="text-[black] font-bold ml-[0.5rem] flex">
          <img src="https://i.pinimg.com/1200x/a4/ea/b8/a4eab8d261ab7205975996cf04269565.jpg"
          className="w-[1.5rem] h-[1.5rem]" alt=""/> Note, an additional Platform fee will also be added when you pay the bet, collected for maintainance purposes.
        </p>

        <p className="text-[black] font-bold ml-[0.5rem] flex">
          <img src="https://i.pinimg.com/1200x/a4/ea/b8/a4eab8d261ab7205975996cf04269565.jpg"
          className="w-[1.5rem] h-[1.5rem]" alt=""/> After forming a team of 4 players you can start the game.
        </p>

        <p className="text-[black] font-bold ml-[0.5rem] flex">
          <img src="https://i.pinimg.com/1200x/a4/ea/b8/a4eab8d261ab7205975996cf04269565.jpg"
          className="w-[1.5rem] h-[1.5rem]" alt=""/> 3 Cards are distributed to each player. One can see the other player cards after seeing their own cards.
        </p>

        <p className="text-[black] font-bold ml-[0.5rem] flex">
          <img src="https://i.pinimg.com/1200x/a4/ea/b8/a4eab8d261ab7205975996cf04269565.jpg"
          className="w-[1.5rem] h-[1.5rem]" alt=""/> After revealing of all the cards winners are declared and the bet value is distributed accordingly.
        </p>

        <p className="text-[black] font-bold ml-[0.5rem] flex">
          <img src="https://i.pinimg.com/1200x/a4/ea/b8/a4eab8d261ab7205975996cf04269565.jpg"
          className="w-[1.5rem] h-[1.5rem]" alt=""/> Their is a wallet named "Win Wallet" which stores your win amount in it. You can transfer the amount at any time.
        </p>

        <p className="text-[black] font-bold ml-[0.5rem] flex">
          <img src="https://i.pinimg.com/1200x/a4/ea/b8/a4eab8d261ab7205975996cf04269565.jpg"
          className="w-[1.5rem] h-[1.5rem]" alt=""/> If your wallet accumulates a certain amount of win amount you recieve bonus.
        </p>
      </div>

      {account===owner && 
      <Link to="/owner">
        <button className="hover:bg-green-600 bg-[gold] text-[red] hover:text-[white] text-[1.2rem] absolute font-bold py-4 px-8 mb-[2rem] mr-6 bottom-0 right-0 rounded">
            <div className="flex">
              <img src="https://cdn-icons-png.flaticon.com/512/1654/1654220.png"
               className="w-[1.5rem] h-[1.5rem] mr-2 mt-1" alt=""/>
                Owner Dashboard
             </div>
        </button>
      </Link>}


        <div className="flex absolute bottom-0 mb-10">
        {
        flag && account!==owner && 
        <Link to="/takeplayers">
           <button className="bg-green-600 hover:bg-[gold] hover:text-[red] text-[white] text-[1.5rem] font-bold py-4 px-8 mt-10 mr-6 bottom-0 rounded">
             <div className="flex">
               <img src={startbtnlogo} className="w-[1.6rem] h-[1.8rem] mr-2 mt-1" alt=""/>
                Play Now
             </div>
           </button>
        </Link>}

       {
       !flag && 
         <button  onClick={onClickHandler} className="bg-green-600 hover:bg-[gold] hover:text-[red] text-[white] text-[1.5rem] font-bold py-4 px-8 mt-10 ml-6 bottom-0 rounded">
            <div className="flex">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png"
               className="w-[1.6rem] h-[1.8rem] mr-2 mt-1" alt=""/>
               Connect
             </div>
        </button>
      }

        </div>
      
    </div>
  );
};

export default Intro;
