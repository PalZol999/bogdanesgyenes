import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import bgImage from "../../assets/csapat_kep_head.jpeg";

import AboutInfo from "./AboutInfo/AboutInfo";



const About = () => {
  return (
    <div>
      <HeroImage
         bgImage={bgImage}
         heading={["", <span>Rólunk</span>]}
         
       />
      
      <AboutInfo />



 
    </div>
  );
};

export default About;
