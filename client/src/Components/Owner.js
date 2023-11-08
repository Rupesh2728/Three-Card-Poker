import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ethers } from "ethers";


const Owner = ({state}) => {
    const [bonus, setbonus] = useState("");
    const [platformfee, setplatformfee] = useState("");
    const [bonusval,setbonusval] = useState("");
    const [ownerbal,setownerbal] = useState("");
    const [pfee,setpfee]=useState("");
    const [playerDetails, setPlayerDetails] = useState([]);
    const [owner,setowner] = useState("");

    const {contract} =state;
    const platformfeeHandler = async (e) => {
      e.preventDefault(); 
      await contract.setPlatformfee(platformfee);
      setplatformfee("");
    };
 
    const bonusHandler = async (e) => {
      e.preventDefault(); 
      await contract.setBonus(ethers.parseEther(bonus));
      setbonus("");
    };

    useEffect(()=>{
       const getdetails=async ()=>{
        const owneraddress=await contract.manager();
        setowner(owneraddress.toString());
     

        const bonus=await contract.bonus();
        setbonusval((ethers.formatEther(bonus)).toString());
      
 
        const ownerbal=await contract.getOwnerBalance();
        setownerbal((ethers.formatEther(ownerbal)).toString());
      
 
        const pfee=await contract.platformfee();
        setpfee(pfee);
       
 
        const getplayers_arr=await contract.getplayers_arr();
        setPlayerDetails(getplayers_arr);

       }

       getdetails();
    },[contract]);


    // setInterval(async ()=>{
    //   const owneraddress=await contract.manager();
    //   setowner(owneraddress.toString());
     
      
    //   const bonus=await contract.bonus();
    //   setbonusval(bonus);

    //       const ownerbal=await contract.getOwnerBalance();
    //     setownerbal((ethers.formatEther(ownerbal)).toString());
    

    //    const pfee=await contract.platformfee();
    //    setpfee(pfee);

    //    const getplayers_arr=await contract.getplayers_arr();
    //    setPlayerDetails(getplayers_arr);
    // },2000);
  
  
    return (
    <div className="h-screen container mx-auto bg-no-repeat bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/016/123/131/non_2x/poker-and-casino-playing-card-background-with-royal-flush-on-red-vector.jpg')]">
    <div className="m-auto flex justify-between">
   
    <div className="bg-[#FFFDD0] rounded-lg flex ml-6 mt-5 p-2 py-3">
      <p className="font-bold text-[green]">Plaform Fee : <span className="text-[red]">{pfee} Eth</span></p>
    </div>

    <div className="absolute top-0 right-0 mt-[5rem] mr-[3rem]  flex">
   <div className="bg-[#FFFDD0] rounded-lg flex ml-6 mt-5 p-2 py-3">
        <p className="font-bold text-[red]">Current Active Players : <span className="text-[green]">{playerDetails.length}</span></p>
    </div>
    </div>

   
    
      <h1 className="text-[2rem] font-bold mt-5 ml-[6rem] text-[gold]">Owner DashBoard</h1>

      <div className="bg-[#FFFDD0] rounded-lg flex mr-6 mt-5 p-2 py-3">
       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png"
       className="w-[1.5rem] h-[1.5rem] mr-2" alt=""/>
      <p className="font-bold">{owner}</p>
    </div>
    </div>




    <form onSubmit={platformfeeHandler} className="flex mt-[5rem]">
    <h2 className="text-[1.3rem] font-bold ml-[3rem] mt-[1.3rem] text-[orange]">Platform Fee :</h2>
      <div className="mb-2 ml-[3rem] mt-[0.5rem]">
        <input
          type="text"
          className="w-full px-3 py-2 mt-2 border-2 border-[#9e7979] text-[gold] rounded-md focus:outline-none focus:ring focus:border-blue-300 bg-transparent"
          value={platformfee}
          onChange={(e) => setplatformfee(e.target.value)}
        />
      </div>

      <button className="bg-green-600 font-bold text-white w-[9rem] h-[2.5rem] ml-[8rem] rounded-lg hover:bg-blue-600 mt-5" type="submit">
        Set Platform Fee
      </button>
    </form>

    <form onSubmit={bonusHandler} className="flex mt-[4rem]">
    <h2 className="text-[1.3rem] font-bold ml-[3rem] mt-[1.3rem] text-[orange]">Bonus :</h2>
      <div className="mb-2 ml-[7rem] mt-[0.5rem]">
        <input
          type="text"
          className="w-full px-3 py-2 mt-2 border-2 border-[#9e7979] text-[gold] rounded-md focus:outline-none focus:ring focus:border-blue-300 bg-transparent"
          value={bonus}
          onChange={(e) => setbonus(e.target.value)}
        />
      </div>

      <button className="bg-green-600 font-bold text-white w-[9rem] h-[2.5rem] ml-[8rem] rounded-lg hover:bg-red-600 mt-5" type="submit">
        Set Bonus
      </button>
    </form>


    <div className="absolute bottom-0 left-0 mb-8 ml-8  flex">
   <p className="ml-6 mt-6 p-2 text-white font-bold"> Owner Balance :</p>
   <div className="bg-[#FFFDD0] rounded-lg flex ml-2 mt-6 p-2">
     <p className="font-bold text-[red]">{ownerbal} Eth</p>
   </div>

    </div>

    <div className="absolute bottom-0 left-0 mb-8 ml-[30rem]  flex">
     <p className="ml-6 mt-6 p-2 text-white font-bold"> Bonus :</p>
     <div className="bg-[#FFFDD0] rounded-lg flex ml-2 mt-6 p-2">
       <p className="font-bold text-[red]">{bonusval} Eth</p>
     </div>

      </div>

  



   <Link to="/">

   <button className="hover:bg-[gold] hover:text-[red] bg-[red] text-[white]  text-[1.2rem] font-bold py-2 px-4 absolute bottom-0 left-0 mb-8 ml-[45rem] flex rounded">
   <div className="flex">
       logout
    </div>
   </button>
   </Link>
    
  </div>
  )
}

export default Owner