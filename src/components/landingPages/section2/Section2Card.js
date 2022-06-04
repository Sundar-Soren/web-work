import React from "react";
import "./section2Card.scss";
import section2Profile from "../assets/section2Profile.png";
const Section2Card = ({ data }) => {
  console.log(data.image);
  return (
    <div className="section2_card">
      <div className="section2_card_container">
        <div className="section2Card_img_container">
          <img src={require(`../assets/${data.image}.png`)} alt="" />
        </div>
        <div className="section2Card_text">
          <h2>{data.title}</h2>
          <div className="section2Card_profile_info">
            <img src={section2Profile} alt="" />

            <div className="section2Card_profile_name">
              <p className="creator_text">creator</p>
              <p>MetaQube Design</p>
            </div>
            <div className="section2Card_profile_explore">
              <button>Explore</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2Card;
