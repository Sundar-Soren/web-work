import React from "react";
import "./lpNavbar.scss";

const LPNavbar = () => {
  return (
    <div className="lPNavbar">
      <div className="LPNavbar_container">
        <div className="LPNavbar_logo">MetaQube</div>
        <div className="Nvabar_Navigation">
          <ul>
            <li>Explore</li>
            <li>Feature</li>
            <li>News & Insights</li>
            <li>Contact Us</li>
            <li>
              <button>Login/SignUp</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LPNavbar;
