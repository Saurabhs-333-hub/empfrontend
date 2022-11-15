import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import axios from "axios";
import "./Home.css";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import About from "./About";
// import Jobs from "../Jobs/Jobs";
// import FormInput from "../Register/FormInput";
// import App from "../Register/App";
const Home = () => {
  return (
    <div className="divmain">
      <div className="homebg">
        <div className="h1main">
          <div className="homeh1">Employed Bharat</div>
        </div>
        <br />
        <div className="text">“Far and away the best prize that life offers is the chance to work hard at work worth doing." <br />—Theodore Roosevelt</div>
        {/* <div className="button1"> */}
        {/* </div> */}
      </div>


      <About />
    </div>
  );
};

export default Home;
