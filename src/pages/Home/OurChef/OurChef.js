import React from "react";
import "./OurChef.css";

const OurChef = () => {
  return (
    <div>
      <div className="chef-img">
        <div className="container">
          <div className="chef-content">
            <h1 className="heading-primary">
              our <span>chef Leo</span>
            </h1>

            <p className="text-white">Brazil Food with Hungarian flavor</p>
          </div>
        </div>
      </div>

      {/* chef info  */}

      <div className="container">
        <div className="grid-container py-md">
          <div className="grid-item chef-info">
            <h3 className="heading-tertiary">
              Marissa<span> Reisman Vieirale</span>
            </h3>

            <h4>Owner</h4>

            <p>
              She moved form Brasil to Hungary to be the founder and owner of A
              La Gringa
            </p>
          </div>

          <div className="grid-item chef-info">
            <h3 className="heading-tertiary">
              <span>Leo</span>
            </h3>

            <h4>executive chef</h4>

            <p>The master of the kitchen, who creates those wonderfull means</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurChef;
