import React from "react";
import logo from "../../../assets/header_logo.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <img src={logo} alt="logo" className="hero-logo"  width={700} />
        <p className="text-white">Üdvözöljük a Bogdan és Gyenes fogorvosi rendelő honlapján</p>
      </div>
    </div>
  );
};

export default Hero;
