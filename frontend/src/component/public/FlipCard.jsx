import React, { useEffect, useState } from "react";
import messiImage from "@img/messi.jpg";
import ronaldoImage from "@img/ronado.webp";

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped(prev => !prev);
    }, 3000); // Change toutes les 3 secondes

    return () => clearInterval(interval);
  }, []);
  return (

<div className="flex justify-center items-center h-screen bg-gray-100">
  <div className="perspective-1000 w-[300px] h-[200px]">
    <div className="relative w-full h-full transform-style-preserve-3d animate-spin-y">
      <div className="absolute w-full h-full backface-hidden">
        <img
          src={ronaldoImage}
          alt="Recto"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute w-full h-full backface-hidden transform-rotate-y-180">
        <img
          src={messiImage}
          alt="Verso"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</div>

/*
<div class="card-container">
  <div class="card">
    <div class="card-front">
      <img src={messiImage} alt="Recto" />
    </div>
    <div class="card-back">
      <img src={ronaldoImage} alt="Verso" />
    </div>
  </div>
</div>

*/



  );
};

export default FlipCard;