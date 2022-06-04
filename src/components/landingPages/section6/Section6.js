import { Facebook, Send } from "@mui/icons-material";
import React from "react";
import "./section6.scss";
import logo from "../assets/logo.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import discord from "../assets/discord.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
const Section6 = () => {
  return (
    <div className="section6">
      <div className="section6_container">
        <div className="section6_left">
          <div className="section6_left_logo">
            <img src={logo} alt="" />
            <h1>METAQUBE</h1>
          </div>
          <p>
            MM Tower Chamber C, 4th Floor, Udyog Vihar <br />
            Sector 18, Gurugram, Haryana 122002 <br />
            Phone Number 1800 XXXXXX
          </p>
          <div className="section6_left_icons">
            <img src={linkedin} alt="" />
            <img src={twitter} alt="" />
            <img src={discord} alt="" />
            <img src={instagram} alt="" />
            <img src={youtube} alt="" />
          </div>
        </div>
        <div className="section6_right">
          <div className="section6_right_col_1">
            <h3>Resource</h3>
            <p>News and insights</p>
            <p>FAQs</p>
            <p>Community</p>
          </div>
          <div className="section6_right_col_1">
            <h3>Company</h3>
            <p>About us</p>
            <p>Contact Us</p>
            <p>Careers</p>
          </div>
          <div className="section6_right_col_1">
            <h3>Subscribe Us</h3>
            <p className="section6_subs_decs_no">
              subscribe for our newslatter to get the latest news <br /> in your
              inbox
            </p>
            <p className="section6_subs_decs">
              subscribe for our newslatter to get the latest news in your inbox
            </p>
            <form>
              <input type="email" placeholder="Info@yourgmail.com" />
              {/* <button> */}
              <Send className="sendIcon" />
              {/* </button> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
