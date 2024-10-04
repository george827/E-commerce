import React from "react";
import "./Hero.css";
import handHandIcon from "../assets/Frontend_Assets/hand_icon.png";
import arrowIcon from "../assets/Frontend_Assets/arrow.png";
import HeroImage from "../assets/Frontend_Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New arrivals only</h2>
        <div className="hero-hand-icon">
          <p>New</p>
          <img src={handHandIcon} alt="hand" />
        </div>
        <p>collections</p>
        <p>For everyone</p>
        <div className="hero-latest-btn">
          <div>latest collection</div>
          <img src={arrowIcon} alt="arrow-left" />
        </div>
      </div>
      <div className="hero-right">
        <img src={HeroImage} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
