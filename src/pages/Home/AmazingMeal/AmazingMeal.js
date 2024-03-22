import React, { useState } from "react";

import "./AmazingMeal.css";

import images1 from "../../../assets/car1.jpg";
import images2 from "../../../assets/car2.jpg";
import images3 from "../../../assets/car3.jpg";
import images4 from "../../../assets/car4.jpg";
import image5 from "../../../assets/car7.jpg";
import reservation from "../../../assets/reservation.jpg";
import ingredient from "../../../assets/ingredient.jpg";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BsFillStarFill } from "react-icons/bs";

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
        <div className="amazing-container">
          <div className="amazing-carousal">
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

          <div className="amazing-content">
            <h2 className="heading-secondary">
              Amazing meals <span className="ampersand">&#38;</span>
              <br />
              <span>
                Great <br /> Enviroment
              </span>
            </h2>

            <h4>We hope to see you soon!</h4>

            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem.
              <br />
              <br />
              Venenatis vitae, justo. Nullam dictum felis eu pede mollis
              pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper
              nisi. Aenean vulputate eleifend tellus. sem.
            </p>

            <blockquote>
              Nulla consequat massa quis enim. Doncus ut, imperdiet a.
            </blockquote>
          </div>
        </div>

        <div className="amazing-card-container">
          <div className="amazing-card amazing-card-left">
            <img src={ingredient} alt="burger" className="amazing-card-image" />

            <div className="amazing-card-content">
              <div className="amazing-card-title">
                <BsFillStarFill color="#c3512f" />
                <h3 className="heading-tertiary">
                  the best <span>ingredients</span>
                </h3>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </div>
          </div>

          <div className="amazing-card amazing-card-right">
            <img
              src={reservation}
              alt="cheese"
              className="amazing-card-image"
            />

            <div className="amazing-card-content">
              <div className="amazing-card-title">
                <BsFillStarFill color="#c3512f" />
                <h3 className="heading-tertiary">
                  <span>reservations</span>
                </h3>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazingMeal;
