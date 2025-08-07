import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Card from "../components/Card";
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";
import Slider from "./Slider";
const Hero = () => {
  ///////////////////////////////////////////////////////

  return (
    <div id="hero" className=" mx-auto bg-green-500  w-full">
      {/* ///////////////////////////////////// */}
      <Slider />
      {/* ///////////////////////////////////////////// */}
      <div className="absolute top-1/2 left-1/2 w-full md:w-[70%] -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-3xl md:text-5xl text-center  text-white font-bold   ">
          ELBlaze integrated <span className=""> I.T solutions</span>
          <div className="w-20 h-1 mt-2 bg-primary mx-auto mb-5"></div>
        </h1>
        <div>
          <p className="  text-center text-white max-w-4xl leading-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
            veritatis officiis nobis accusamus ratione quae, dolorem non illo
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

/////////////////////////////////////
//       <div className="h-[80vh]">
//   <img
//     src={hero3}
//     alt="hero image"
//     className="h-[80vh] w-full object-cover"
//   />
// </div>
