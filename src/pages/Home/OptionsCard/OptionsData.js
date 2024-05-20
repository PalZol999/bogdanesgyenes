import React from "react";
import { Link } from "react-router-dom";
import "./OptionsCard.css";

function OptionsData(props) {
  return (
    <Link to={props.linkTo} className="t-card">
      <div className="t-image">
        <img alt="img" src={props.image}  />
      </div>
      <h4 style={{ color:"#3d761d"}}>{props.heading}</h4>
      <p>{props.text}</p>
    </Link>
  );
}

export default OptionsData;
