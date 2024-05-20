import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import bgImage from "../../assets/treatment2.jpeg";
import CardTree from "./CardTree";


const Treatment = () => {
  return (
    <div>
      <HeroImage
         bgImage={bgImage}
         heading={["", <span>Kezelések</span>]} 
       />
      <CardTree/>
 
    </div>
  );
};

export default Treatment;
