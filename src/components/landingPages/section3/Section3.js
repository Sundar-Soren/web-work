import React, { useState } from "react";
import "./section3.scss";
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
            <img
              src="https://i.all3dp.com/workers/images/fit=cover,w=1284,h=722,gravity=0.5x0.5,format=auto/wp-content/uploads/2021/06/08145453/3d-design-video-games-Fortnite.jpg"
              alt=""
            />
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
              <img
                src="https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aWxsdXN0cmF0aW9ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt=""
              />
              <div className="setion3_smallcard_text">
                <h4>Art Fairs & Galleries</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  aliquid eum aut voluptate eligendi veritatis!
                </p>
              </div>
            </div>
            <div className="setion3_smallcard">
              <img
                src="https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aWxsdXN0cmF0aW9ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt=""
              />
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
              <img
                src="https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aWxsdXN0cmF0aW9ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt=""
              />
              <div className="setion3_smallcard_text">
                <h4>Art Fairs & Galleries</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  aliquid eum aut voluptate eligendi veritatis!
                </p>
              </div>
            </div>{" "}
            <div className="setion3_smallcard">
              <img
                src="https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aWxsdXN0cmF0aW9ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt=""
              />
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
