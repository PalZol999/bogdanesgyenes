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
              <a href="https://www.facebook.com/alagringainbudapest">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/your-instagram-page">
                <FaInstagram />
              </a>
            </div>
            <div>
              <h3>A la Gringa</h3>
              <p>1052 Budapest</p>
              <p>Vitkovics Mihály u. 3-5 </p>
              <p>(+36) 30 225 4537</p>
              <p>management@alagringa.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
