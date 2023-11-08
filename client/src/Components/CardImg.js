import React from 'react'
import { useState,useEffect } from 'react';

const CardImg = ({imageName,className}) => {
 
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
      import(`../Assests/cards/${imageName}.jpg`)
        .then((image) => setImageSrc(image.default))
        .catch((error) => console.error("Error loading image:", error));
    }, [imageName]);
  
    
    return (
        <img src={imageSrc} alt={imageName} key={imageName} className={className} />
  )
}

export default CardImg