import React from "react";
import "./epStep2.scss";
import EpStep2Card from "./EpStep2Card";

const EpStep2 = () => {
  return (
    <div className="epStep2">
      <div className="epStep2_container">
        <div className="epStep2_heading">
          <h1>Choose A Use Case</h1>
          <p>This helps you create your environment with the right content</p>
        </div>
        <div className="epStep2_card_container">
          <EpStep2Card />
          <EpStep2Card />
          <EpStep2Card />
          <EpStep2Card />
        </div>
        <div className="epStep2_next_btn">
          {" "}
          <button> Next</button>
        </div>
        <p className="seStep2_bottom_text">
          Not sure ? <span>Explore all templates</span>
        </p>
      </div>
    </div>
  );
};

export default EpStep2;
