import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="section footer">
      <div className="container">
        <div className="grid-container">
          <div className="footer-grid-item">
            <div className="social-icons">
              <a href="https://www.facebook.com/bogdangyenes">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com">
                <FaInstagram />
              </a>
            </div>
            <div >
              <h3 >Bogdan és Gyenes</h3>
              <p>1124 Budapest</p>
              <p>Zsámbéki utca 10 </p>
              <p>(+36) 30 43 77 220</p>
              <p>(+36) 1 20 20 168</p>
              <p>praxis@bogdangyenes.hu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
