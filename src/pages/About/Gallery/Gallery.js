import React from "react";
import "./Gallery.css";

import imageItem1 from "../../../assets/aboutus.jpg";
import imageItem2 from "../../../assets/car1.jpg";
import imageItem3 from "../../../assets/car2.jpg";
import imageItem4 from "../../../assets/car3.jpg";
import imageItem5 from "../../../assets/car4.jpg";
import imageItem6 from "../../../assets/car5.jpg";
import imageItem7 from "../../../assets/about.jpg";
import imageItem8 from "../../../assets/car6.jpg";
import imageItem9 from "../../../assets/car7.jpg";
import imageItem10 from "../../../assets/cakes.jpg";

const Gallery = () => {
  return (
    <div className="gallery">
      <figure className="gallery__item gallery__item-1">
        <img src={imageItem1} alt="Gallery image 1" className="gallery__img" />
      </figure>

      <figure className="gallery__item gallery__item-2">
        <img src={imageItem2} alt="Gallery image 2" className="gallery__img" />
      </figure>

      <figure className="gallery__item gallery__item-3">
        <img src={imageItem3} alt="Gallery image 3" className="gallery__img" />
      </figure>

      <figure className="gallery__item gallery__item-4">
        <img src={imageItem4} alt="Gallery image 4" className="gallery__img" />
      </figure>

      <figure className="gallery__item gallery__item-5">
        <img src={imageItem5} alt="Gallery image 5" className="gallery__img" />
      </figure>

      <figure className="gallery__item gallery__item-6">
        <img src={imageItem6} alt="Gallery image 6" className="gallery__img" />
      </figure>

      <figure className="gallery__item gallery__item-7">
        <img src={imageItem7} alt="Gallery image 7" className="gallery__img" />
      </figure>

      <figure className="gallery__item gallery__item-8">
        <img src={imageItem8} alt="Gallery image 8" className="gallery__img" />
      </figure>

      <figure className="gallery__item gallery__item-9">
        <img src={imageItem9} alt="Gallery image 9" className="gallery__img" />
      </figure>

      <figure className="gallery__item gallery__item-10">
        <img
          src={imageItem10}
          alt="Gallery image 10"
          className="gallery__img"
        />
      </figure>
    </div>
  );
};

export default Gallery;
