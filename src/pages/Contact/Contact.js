import React from "react";

import HeroImage from "../../components/HeroImage/HeroImage";
import bgImage from "../../assets/kint.jpeg";

import CantactForm from "./CantactForm/CantactForm";

const Contact = () => {
  return (
    <div>
      <HeroImage
        bgImage={bgImage}
        heading={["", <span>kapcsolat</span>]}
        
      />
      <CantactForm />
    </div>
  );
};

export default Contact;
