import React, { useState } from "react";
import { Link } from "react-router-dom";

const PlayersFormationPage = () => {
  const [nickname, setNickname] = useState("");
  const [amount, setAmount] = useState("");
  const [playerDetails, setPlayerDetails] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nickname && amount) 
    {
      setPlayerDetails([...playerDetails, { nickname, amount }]);
      setNickname("");
      setAmount("");
    }
  };


  return (
    <div className="h-screen container mx-auto bg-no-repeat bg-cover bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20210902/pngtree-casino-chip-with-poker-background-image_786808.jpg')]">
      <div className="m-auto flex justify-between">
     
      <div className="bg-[#FFFDD0] rounded-lg flex ml-6 mt-5 p-2 py-3">
        <p className="font-bold text-[black]">Players : 4</p>
      </div>

     
      
        <h1 className="text-[2rem] font-bold mt-5 ml-[6rem] text-[orange]">Players per round : 4</h1>

        <div className="bg-[#FFFDD0] rounded-lg flex mr-6 mt-5 p-2 py-3">
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png"
         className="w-[1.5rem] h-[1.5rem] mr-2" alt=""/>
        <p className="font-bold">fdfihuferfuefuergfureurg uyg</p>
      </div>
      </div>


  
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

        <div className="mb-2 ml-[10rem]">
          <label className="block text-sm font-medium text-green-200">Amount (in Ether)</label>
          <input
            type="text"
            className="w-full px-3 py-2 mt-2 border-2 border-[#9e7979] text-[gold] rounded-md focus:outline-none focus:ring focus:border-blue-300 bg-transparent"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button className="bg-green-600 font-bold text-white w-[6rem] h-[2.5rem] ml-[10rem] rounded-lg hover:bg-blue-600 mt-6" type="submit">
          Add Bet
        </button>
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
                <td className="border p-2 text-white">{player.nickname}</td>
                <td className="border p-2 text-white">{player.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <div className="absolute bottom-0 right-0 mb-8 mr-8  flex">
     <p className="ml-6 mt-6 p-2 text-white font-bold"> Bet Value :</p>
     <div className="bg-[#FFFDD0] rounded-lg flex ml-2 mt-6 p-2">
       <p className="font-bold text-[red]">0.02 Eth</p>
     </div>

      </div>

      <div className="absolute bottom-0 right-0 mb-8 mr-[20rem]  flex">
     <p className="ml-6 mt-6 p-2 text-white font-bold"> Win Wallet :</p>
     <div className="bg-[#FFFDD0] rounded-lg flex ml-2 mt-6 p-2">
       <p className="font-bold text-[red]">0.02 Eth</p>
     </div>

      </div>

      <button className="bg-[blue] text-[white] font-bold w-[6rem] h-[2.5rem] rounded-lg hover:bg-[gold]
       hover:text-[red] absolute bottom-0 mb-8 right-0 mr-[35rem]" type="submit">
         Transfer
        </button>


     <Link to="/game">
     <button className="bg-green-600 hover:bg-[gold] hover:text-[red] text-[white] text-[1.5rem] font-bold py-4 px-8 mt-10 absolute bottom-0 left-0 mb-8 ml-8 flex rounded">
     <div className="flex">
     <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/casino-coin-2870771-2385686.png"
         className="w-[1.6rem] h-[1.8rem] mr-2 mt-1" alt=""/>
         Start Game
     </div>
       </button>
     </Link>
      
    </div>
  );
}

export default PlayersFormationPage;

