import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/header_logo.png";

import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className={color ? "header header-bg" : "header"}>
      <div className="container">
        <div className="nav-bar">
          <Link to="/">
            <img src={logo} alt="logo" width={160} />
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/">
                Főoldal
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/about">
                Rólunk
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/treatment">
                Kezelések
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/contact">
                Munkatársak
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/contact">
                Kapcsolat
              </NavLink>
            </li>
            <li onClick={handleClick} >
              <NavLink className="nav-link"  style={{ fontWeight: 100}} to="/contact">
                Eng/Hun
              </NavLink>
            </li>
          </ul>

          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={20} style={{ color: "#fff" }} />
            ) : (
              <FaBars size={20} style={{ color: "#fff" }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
/*

 <li onClick={handleClick}>
              <NavLink className="nav-link" to="/menu">
                Menu
              </NavLink>
            </li>
*/
