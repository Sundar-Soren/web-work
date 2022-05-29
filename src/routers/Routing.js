import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/auth/login/Login";
import Signup from "../components/auth/signup/Signup";
import EpStep1 from "../components/entrypages/epStep1/EpStep1";
import EpStep2 from "../components/entrypages/epStep2/EpStep2";
import EpStep3 from "../components/entrypages/epStep3/EpStep3";
import Home from "../pages/home/Home";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/step1" element={<EpStep1 />} />
        <Route path="/step2" element={<EpStep2 />} />
        <Route path="/step3" element={<EpStep3 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
