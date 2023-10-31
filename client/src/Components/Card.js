
import React, { useState } from "react";
import CardImg from "./CardImg";
import card_back from '../Assests/cards/back.jpg';
const Card = (props) => {
    const [isRotated, setIsRotated] = useState(false);

    const handleRotateClick = () => {
      setIsRotated(!isRotated);
    };

    const rotationStyle = {
        transform: `rotateX(${isRotated ? 180 : 0}deg)`,
        transition: 'transform 0.5s ease-in-out', // You can adjust the duration and timing function as needed
      };
      
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
        <div>
        {isRotated && <CardImg imageName={imgname} className="w-[12rem]"/>}
        </div>
       <div>
        {!isRotated && <img src={card_back} className="w-[12rem]" alt="" style={rotationStyle} onClick={handleRotateClick}/>}
       </div>
    </div>
  )
}

export default Card;
