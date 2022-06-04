import React, { useState } from "react";
import "./lpNavbar.scss";
import logo from "../assets/logo.png";

const LPNavbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <div className="lPNavbar">
      <div className="LPNavbar_container">
        <div className="LPNavbar_logo">
          {" "}
          <img src={logo} alt="" className="logo_img" /> <h1>MetaQube</h1>
        </div>
        <div className="Nvabar_Navigation">
          <li
            className={toggleNav ? "nav_menu" : "nav_menu onLyShowMenu"}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div></div>
            <div></div>
            <div></div>
          </li>
          <ul className={toggleNav ? "lp_es-navbar" : "lp_hide_navgation"}>
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
