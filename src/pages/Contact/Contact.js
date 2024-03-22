import React from "react";

import HeroImage from "../../components/HeroImage/HeroImage";
import bgImage from "../../assets/contactUs.jpg";

import CantactForm from "./CantactForm/CantactForm";

const Contact = () => {
  return (
    <div>
      <HeroImage
        bgImage={bgImage}
        heading={["contact ", <span>us</span>]}
        text="Feel free to contact with us"
      />
      <CantactForm />
    </div>
  );
};

export default Contact;
