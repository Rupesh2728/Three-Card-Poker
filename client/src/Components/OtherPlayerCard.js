import React from 'react'
import CardImg from "./CardImg";
import card_back from '../Assests/cards/back.jpg';

const OtherPlayerCard = (props) => {
    const value=(Number(props.value)+1).toString();
    let suit;

    if(props.suit==="0")
       suit="D"

    else if(props.suit==="1")
       suit="S"
      
    else if(props.suit==="2")
       suit="H"

    else
       suit="C"

    const imgname=value+suit;   
    
    const classes="cursor-pointer "+ props.className;
    return (
    <div className={classes}>
        
         {props.reveal && <CardImg imageName={imgname} className="w-[12rem]"/>}
          
         {!props.reveal && <img src={card_back} className="w-[12rem]" alt=""/>}

    </div>
  )
}

export default OtherPlayerCard;