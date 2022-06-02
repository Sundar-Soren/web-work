import React from "react";
import LPNavbar from "../../components/landingPages/LPNavbar/LPNavbar";
import Section1 from "../../components/landingPages/section1/Section1";
import Section2 from "../../components/landingPages/section2/Section2";
import Section3 from "../../components/landingPages/section3/Section3";
import Section4 from "../../components/landingPages/section4/Section4";
import Section5 from "../../components/landingPages/section5/Section5";
import Section6 from "../../components/landingPages/section6/Section6";

const Home = () => {
  return (
    <div>
      <LPNavbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
};

export default Home;
