import React from "react";
import "./section1.scss";
import exploreIcon from "../assets/explore.png";
import createIcon from "../assets/create.png";
const Section1 = () => {
  return (
    <div className="section1">
      <h1>Build Your Own</h1>
      <h1 className="gradient_heading">Metaverse for Art Galleries</h1>
      <div className="setion11_btn">
        <button>
          <img src={exploreIcon} alt="explore icon" /> <p>Explore</p>
        </button>
        <button className="createBtn">
          <img src={createIcon} alt="create icon" /> <p> Create</p>
        </button>
      </div>
    </div>
  );
};

export default Section1;
