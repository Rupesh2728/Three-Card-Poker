import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { ethers } from "ethers";

const PlayersFormationPage = ({state,account}) => {
  const [nickname, setNickname] = useState("");
  const [amount, setAmount] = useState("");
  const [playerDetails, setPlayerDetails] = useState([]);
  const [win_wallet,setwin_wallet] = useState("0.0");
  const [pfee,setpfee]=useState("");
  const [bonusval,setbonusval] = useState("");
  const [displaymsg,setdisplaymsg] = useState("");
  const [addbtn,setaddbtn] = useState(true);
  const [numgames,setnumgames] = useState("");
  const [exiting_players,setexiting_players] = useState("");
  const [player_bonus_amount,setplayer_bonus_amount] = useState();

  const betval=0.0008;

  const {contract}=state;

  //  setInterval(async ()=>{
  //   const getplayers_arr=await contract.getplayers_arr();
  //   setPlayerDetails(getplayers_arr);
  //  },500);

   useEffect(()=>{
    const getinfo=async()=>{
    const getplayers_arr=await contract.getplayers_arr();
    setPlayerDetails(getplayers_arr);

    
    if(getplayers_arr.length!==0)
    {
      for(let i=0;i<getplayers_arr.length;i++)
      {
        if(getplayers_arr[i].player_address===account)
        {
            setaddbtn(false);
        }
      }

    }

    else
    {
         setaddbtn(true);
    }

    const player_bonus_val=await contract.Bonus_Users(account);
    setplayer_bonus_amount((ethers.formatEther(player_bonus_val)).toString());
    
  
    const bonus=await contract.bonus();
    setbonusval((ethers.formatEther(bonus)).toString());
 
    const pfee=await contract.platformfee();
    setpfee((ethers.formatEther(pfee)).toString());

    const numgamesplayed=await contract.num_games_played();
    setnumgames(numgamesplayed.toString());

    const exiting_players=await contract.exiting_players_length();
    setexiting_players(exiting_players.toString());
     
    const getplayerbalance=await contract.registered_Users(account);
    setwin_wallet((ethers.formatEther(getplayerbalance)).toString());

    if(playerDetails.length===4)
      setdisplaymsg("***Room Limit reached, Please wait for next round... ");
    else
      setdisplaymsg(""); 
    };

    getinfo();
   },[contract,account,playerDetails]);


  //  setInterval(async ()=>{ 
  //   const getplayerbalance=await contract.registered_Users(account);
  //   // if(Number(ethers.formatEther(getplayerbalance).toString())>2)
  //   //  {   const val=Number(ethers.formatEther(getplayerbalance).toString());
  //   //      const updatedval=val+Number(bonus);
  //   //     await contract.update_wallet(account,ethers.parseEther(updatedval.toString()));
  //   //  }
  //    // But after updating the balance , if bal= 2.2 eth...again bonus will come we have to overcome this.
  //   setwin_wallet(ethers.formatEther(getplayerbalance).toString());
  //  },2000);

   
  const tranferHandler=async ()=>{
    await contract.transfer_bet_from_game_to_acc();
    const getplayerbalance=await contract.registered_Users(account);
    setwin_wallet(ethers.formatEther(getplayerbalance).toString());
  }

  const bonus_tranferHandler=async()=>{
     await contract.transfer_bonus_from_contract_to_acc();
     const player_bonus_val=await contract.Bonus_Users(account);
     setplayer_bonus_amount((ethers.formatEther(player_bonus_val)).toString());
  }


  const handleSubmit = async (e) => {

    e.preventDefault(); 
    if(playerDetails.length<4)
    {
      if(amount===betval.toString())
    {
      const {contract}=state;
      const val=betval+Number(pfee);
      console.log(val);
      const amount={ value : ethers.parseEther(val.toString()) };
      await contract.Play_poker(nickname,amount);
      console.log("Transaction done...");
    }

    else 
    {
      console.log("Invalid Bet amount");
    }

    }

    else
    {
      console.log("Round is full");
    }

    setNickname("");
    setAmount("");
   
  };


  return (
    <div className="cursor-pointer h-screen container mx-auto bg-no-repeat bg-cover bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20210902/pngtree-casino-chip-with-poker-background-image_786808.jpg')]">
      <div className="m-auto flex justify-between">
     
      <div className="bg-[#FFFDD0] rounded-lg flex ml-6 mt-5 p-2 py-3">
        <p className="font-bold text-[black]">Players : {playerDetails.length}</p>
      </div>

     
      
        <h1 className="text-[2rem] font-bold mt-5 ml-[15rem] text-[orange]">Players per round : 4</h1>

        <div className="bg-[#FFFDD0] rounded-lg flex mr-6 mt-5 p-2 py-3">
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png"
         className="w-[1.5rem] h-[1.5rem] mr-2" alt=""/>
        <p className="font-bold">{account}</p>
      </div>
      </div>

      <p className="text-[1rem] font-bold mt-8 ml-[40rem]  text-[white]">{displaymsg}</p>

      <div className="bg-[#FFFDD0] rounded-lg flex ml-6 p-2 py-3 absolute right-0 mr-6">
        <p className="font-bold text-[black]">Games Played : {numgames}</p>
      </div>

      <div className="bg-[#FFFDD0] rounded-lg flex p-2 py-3 absolute right-0 mr-[15rem]">
        <p className="font-bold text-[black]">Bonus Earned : {player_bonus_amount}</p>
      </div>

      {
        player_bonus_amount!=="" && player_bonus_amount!=="0.0" && 
        <button onClick={bonus_tranferHandler} className="bg-[blue] text-[white] mt-1 font-bold w-[8rem] h-[2.8rem] rounded-lg hover:bg-[gold]
        hover:text-[red] absolute right-0 mr-[30rem]" type="submit">
          Transfer Bonus
         </button>
      }




      <h2 className="text-[1.5rem] font-bold ml-[40rem] mt-[4rem] text-[gold]">Add Bet :</h2>

      <form onSubmit={handleSubmit} className="flex mt-[1rem]">
        <div className="mb-2 ml-[40rem]">
          <label className="block text-sm font-medium text-green-200">Nickname</label>
          <input
            type="text"
            className="w-full px-3 py-2 border-2 border-[#9e7979] text-[gold] mt-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 bg-transparent"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>

        <div className="mb-2 ml-[6rem]">
          <label className="block text-sm font-medium text-green-200">Amount (in Ether)</label>
          <input
            type="text"
            className="w-full px-3 py-2 mt-2 border-2 border-[#9e7979] text-[gold] rounded-md focus:outline-none focus:ring focus:border-blue-300 bg-transparent"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        {playerDetails.length!==4 && addbtn && 
        <button className="bg-green-600 font-bold text-white w-[6rem] h-[2.5rem] ml-[8rem] rounded-lg hover:bg-blue-600 mt-6" type="submit">
          Add Bet
        </button> }
      </form>


      <div className="mt-8">
      <h2 className="text-[1.5rem] font-bold ml-[40rem] text-[gold]">Player's Details :</h2>
        <table className="w-[50%] border-2 m-auto mt-6 ml-[40rem]">
          <thead>
            <tr>
              <th className="border p-2 text-green-200">Nickname</th>
              <th className="border p-2 text-green-200">Amount (Ether)</th>
              <th className="border p-2 text-green-200">Metamask A/c</th>
            </tr>
          </thead>
          <tbody>
            {playerDetails.map((player, index) => (
              <tr key={index}>
                <td className="border p-2 text-white">{player.name}</td>
                <td className="border p-2 text-white">{betval}</td>
                <td className="border p-2 text-white">{player.player_address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <div className="absolute bottom-0 right-0 mb-8 mr-8  flex">
     <p className="ml-6 mt-6 p-2 text-white font-bold"> Bet Value :</p>
     <div className="bg-[#FFFDD0] rounded-lg flex ml-2 mt-6 p-2">
       <p className="font-bold text-[red]">{betval} Eth</p>
     </div>

      </div>

      <div className="absolute bottom-0 right-0 mb-8 mr-[20rem]  flex">
     <p className="ml-6 mt-6 p-2 text-white font-bold"> Win Wallet :</p>
     <div className="bg-[#FFFDD0] rounded-lg flex ml-2 mt-6 p-2">
       <p className="font-bold text-[red]">{win_wallet} Eth</p>
     </div>

      </div>


      <div className="absolute bottom-0 left-0 mb-8 ml-[38rem]  flex">
     <p className="ml-6 mt-6 p-2 text-white font-bold">Bonus Value :</p>
     <div className="bg-[#FFFDD0] rounded-lg flex ml-2 mt-6 p-2">
       <p className="font-bold text-[red]">{bonusval} Eth</p>
     </div>

      </div>

      <div className="absolute top-0 left-0 mt-0 ml-[8rem]  flex">
     <p className="ml-6 mt-6 p-2 text-white font-bold">Plaform Fee:</p>
     <div className="bg-[#FFFDD0] rounded-lg flex ml-2 mt-6 p-2">
       <p className="font-bold text-[red]">{pfee} Eth</p>
     </div>

      </div>

      

      {
        win_wallet!=="0.0" && 
        <button onClick={tranferHandler} className="bg-[blue] text-[white] font-bold w-[6rem] h-[2.5rem] rounded-lg hover:bg-[gold]
        hover:text-[red] absolute bottom-0 mb-8 right-0 mr-[58rem]" type="submit">
          Transfer
       </button>
      }


     <Link to="/game">
     {playerDetails.length===4 && exiting_players!=="" && exiting_players==="0" && 
       playerDetails.map((player)=>{
          return (player.player_address===account && 
          <button className="bg-green-600 hover:bg-[gold] hover:text-[red] text-[white] text-[1.5rem] font-bold py-4 px-8 mt-10 absolute bottom-0 left-0 mb-8 ml-8 flex rounded">
          <div className="flex">
            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/casino-coin-2870771-2385686.png"
            className="w-[1.6rem] h-[1.8rem] mr-2 mt-1" alt=""/>
            Start Game
          </div>
        </button>
        )
       })
     }
     </Link>
      
    </div>
  );
}

export default PlayersFormationPage;

