import React from "react";
import "./section4.scss";

import brandSpicejet from "../assets/brandSpicejet.png";
import brandEmcure from "../assets/brandEmcure.png";
import brandIF from "../assets/brandIF.png";
import brandagora from "../assets/brandagora.png";
import brandFreshMenu from "../assets/brandFreshMenu.png";
const Section4 = () => {
  return (
    <div className="section4">
      <div className="section4_container">
        <h1>Brands we have worked with</h1>
        <div className="section4_brandList">
          <div className="section4_brand1">
            <img src={brandSpicejet} alt="" className="img1" />
          </div>
          <div className="section4_brand1">
            <img src={brandEmcure} alt="" className="img2" />
          </div>
          <div className="section4_brand1">
            <img src={brandIF} alt="" className="img3" />
          </div>
          <div className="section4_brand1">
            <img src={brandagora} alt="" className="img4" />
          </div>
          <div className="section4_brand1">
            <img src={brandFreshMenu} alt="" className="img5" />
          </div>
        </div>
        <h1>Covered In The News by</h1>
        <div className="section4_newList">
          <div className="section4_news_1"></div>
          <div className="section4_news_1"></div>
          <div className="section4_news_1"></div>
          <div className="section4_news_1"></div>
          <div className="section4_news_1"></div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
