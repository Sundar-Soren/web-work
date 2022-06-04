import React, { useState } from "react";
import "./section3.scss";

import section3main from "../assets/section3main.png";
import sectionIcon1 from "../assets/sectionIcon1.png";
import sectionIcon2 from "../assets/sectionIcon2.png";
import sectionIcon3 from "../assets/sectionIcon3.png";
import sectionIcon4 from "../assets/sectionIcon4.png";

const Section3 = () => {
  const [accrodion, setAccrodion] = useState(1);

  const toggleAccrodion = (key) => {
    if (key === accrodion) {
      setAccrodion(0);
    } else {
      setAccrodion(key);
    }
  };
  return (
    <div className="section3">
      <div className="section3_conatiner">
        <div className="section3_heading">
          <h2>Take Advantage of our collaboration tools</h2>
        </div>
        <div className="section3_content_1">
          <div className="section3_img">
            <img src={section3main} alt="" />
          </div>
          <div className="section3_accrodion">
            <div
              className={
                accrodion === 1 ? "collapes_content" : "collapes_content_normal"
              }
            >
              <h3
                onClick={() => toggleAccrodion(1)}
                className="accrodion_heading"
              >
                Meet, Share & Collaborate
              </h3>
              {accrodion === 1 && (
                <p className="accrodion_text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore et delectus exercitationem cumque aspernatur nostrum
                  alias ipsam eos vero a.
                </p>
              )}
            </div>
            <div
              className={
                accrodion === 2 ? "collapes_content" : "collapes_content_normal"
              }
            >
              <h3
                onClick={() => toggleAccrodion(2)}
                className="accrodion_heading"
              >
                Customise Your Avatar
              </h3>
              {accrodion === 2 && (
                <p className="accrodion_text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore et delectus exercitationem cumque aspernatur nostrum
                  alias ipsam eos vero a.
                </p>
              )}
            </div>
            <div
              className={
                accrodion === 3 ? "collapes_content" : "collapes_content_normal"
              }
            >
              <h3
                onClick={() => toggleAccrodion(3)}
                className="accrodion_heading"
              >
                Import JPEGs, Videos & 3D Assets
              </h3>
              {accrodion === 3 && (
                <p className="accrodion_text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore et delectus exercitationem cumque aspernatur nostrum
                  alias ipsam eos vero a.
                </p>
              )}
            </div>
            <div
              className={
                accrodion === 4 ? "collapes_content" : "collapes_content_normal"
              }
            >
              <h3
                onClick={() => toggleAccrodion(4)}
                className="accrodion_heading"
              >
                Screenshare, Jamboard & More
              </h3>
              {accrodion === 4 && (
                <p className="accrodion_text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore et delectus exercitationem cumque aspernatur nostrum
                  alias ipsam eos vero a.
                </p>
              )}
            </div>
            <div
              className={
                accrodion === 5 ? "collapes_content" : "collapes_content_normal"
              }
            >
              <h3
                onClick={() => toggleAccrodion(5)}
                className="accrodion_heading"
              >
                Explore Marketplace
              </h3>
              {accrodion === 5 && (
                <p className="accrodion_text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore et delectus exercitationem cumque aspernatur nostrum
                  alias ipsam eos vero a.
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="section3_content_2">
          <div className="section_col_1">
            <h1>Metaverse For Every Use Case</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              a eveniet minus, consequuntur illum esse incidunt quasi commodi
              nesciunt ad.
            </p>
            <p className="fihwnef">Can't Find the right use case?</p>
            <button>Contact us</button>
          </div>
          <div className="section_col_2">
            <div className="setion3_smallcard">
              <img src={sectionIcon1} alt="" />
              <div className="setion3_smallcard_text">
                <h4>Art Fairs & Galleries</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  aliquid eum aut voluptate eligendi veritatis!
                </p>
              </div>
            </div>
            <div className="setion3_smallcard">
              <img src={sectionIcon2} alt="" />
              <div className="setion3_smallcard_text">
                <h4>Art Fairs & Galleries</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  aliquid eum aut voluptate eligendi veritatis!
                </p>
              </div>
            </div>
          </div>
          <div className="section_col_3">
            <div className="setion3_smallcard">
              <img src={sectionIcon3} alt="" />
              <div className="setion3_smallcard_text">
                <h4>Art Fairs & Galleries</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  aliquid eum aut voluptate eligendi veritatis!
                </p>
              </div>
            </div>{" "}
            <div className="setion3_smallcard">
              <img src={sectionIcon4} alt="" />
              <div className="setion3_smallcard_text">
                <h4>Art Fairs & Galleries</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  aliquid eum aut voluptate eligendi veritatis!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
