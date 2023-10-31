import React from "react";
import { Link } from "react-router-dom";

const Intro = () => {
  return (    
    <div className="h-screen flex flex-col items-center bg-no-repeat bg-cover bg-[url('https://images.squarespace-cdn.com/content/v1/524da667e4b0dfdf24b0c51c/1392845667005-X4GZ2WZOWD1OYGTFYGPW/threecard1.jpg?format=2500w')]">
      <div className="bg-[#d3aeae] rounded-lg flex absolute right-0 mr-6 mt-5 p-2">
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png"
         className="w-[1.5rem] h-[1.5rem] mr-2" alt=""/>
        <p className="font-bold">fdfihuferfuefuergfureurg uyg</p>
      </div>


      <div className="absolute left-0 flex">

      <p className="ml-6 mt-6 p-2 text-green-500 font-bold">Status :</p>
      <div className="bg-[#d3aeae] rounded-lg flex ml-2 mt-6 p-2">
        <p className="font-bold text-[green]">Connected</p>
        {/* <p className="font-bold text-[red]">Not Connected</p> */}
      </div>

      </div>

      <div className="p-8 mt-[6rem] rounded-lg text-[gold]">
        <h1 className="text-[2.5rem] font-bold mb-4 ml-[3.5rem]">Welcome to Three Card Poker</h1>
       <div className="items-center justify-center m-auto">
         <p className="text-white font-bold">
          Are you ready to play? Please connect your Metamask account before you start the game...
        </p>
       </div>
 
      </div>

        <div className="flex absolute bottom-0 mb-10">
        <Link to="/takeplayers">
        <button className="bg-green-600 hover:bg-[gold] hover:text-[red] text-[white] text-[1.5rem] font-bold py-4 px-8 mt-10 mr-6 bottom-0 rounded">
          <div className="flex">
          <img src="https://www.kpis.in/assets/img/teen_banner_img.png" className="w-[1.6rem] h-[1.8rem] mr-2 mt-1" alt=""/>
          Play Now
          </div>
       </button>
        </Link>

       {/* <button className="bg-green-600 hover:bg-[gold] hover:text-[red] text-[white] text-[1.5rem] font-bold py-4 px-8 mt-10 ml-6 bottom-0 rounded">
     <div className="flex">
     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png"
         className="w-[1.6rem] h-[1.8rem] mr-2 mt-1" alt=""/>
          Connect
     </div>
       </button> */}

        </div>
      
    </div>
  );
};

export default Intro;
