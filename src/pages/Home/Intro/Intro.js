import React, { useState } from "react";
import OptionsCard from "../OptionsCard/OptionsCard"
import "./intro.css";

import images1 from "../../../assets/reci.jpeg";
import images2 from "../../../assets/varo.jpeg";
import images3 from "../../../assets/pc_doki.jpeg";
import images4 from "../../../assets/rendelo_ajto.jpeg";
import image5 from "../../../assets/kint.jpeg";


import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const AmazingMeal = () => {
  const [items, setItems] = useState([
    { id: 1, url: images1 },
    { id: 2, url: images2 },
    { id: 3, url: images3 },
    { id: 4, url: images4 },
    { id: 5, url: image5 },
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="section">
      <div className="container">
        <div className="intro-container">
          <div className="intro-carousal">
            <div>
              <Slider {...settings}>
                {items.map((item) => (
                  <div key={item.id}>
                    <img src={item.url} alt="caurosal pic" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className="intro-content">
            <h2 className="heading-secondary">
              Bogdan <span className="ampersand">&#38;</span> Gyenes
              <br />
              <span>
                Szájsebészet és fogászat
              </span>
            </h2>

            <h4>Professzionális rendelő a XII. került szívében</h4>

            <p>
            2012.-ben alakult Gyenes Rita és Bogdán Sándor fogorvosi, illetve szájsebészeti 
            magánrendelőinek összevonása révén.A rendelő kialakításában több mint 15 évnyi magánorvosi, 
            valamint klinikai oktatói-gyógyítói tapasztalat segített. 
              <br />
              <br />
              Célunk az volt, hogy a fogászat minden 
            szakterülete képviselve legyen, és így csapatmunka keretében tudjunk magas színvonalú ellátást 
            biztosítani pácienseink számára. 
            </p>

            <blockquote>
              Nulla consequat massa quis enim. Doncus ut, imperdiet a.
            </blockquote>
          </div>
     
        </div>
        <OptionsCard />
        
      </div>
    </div>
  );
};

export default AmazingMeal;


