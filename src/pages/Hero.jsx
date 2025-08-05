import React from "react";
import hero3 from "../assets/hero3.jpg";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
const Hero = () => {
  return (
    <div id="hero" className=" mx-auto bg-green-500 relative w-full">
      <div className="h-[80vh]">
        <img
          src={hero3}
          alt="hero image"
          className="h-[80vh] w-full object-cover"
        />
        <Navbar />
      </div>
      <div className="absolute top-1/2 left-1/2 w-full md:w-[70%] -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-3xl text-center  text-gray-200 font-bold   ">
          E-Blaze integrated <span className=""> I.T solutions</span>
          <div className="w-20 h-1 mt-1 bg-red-500 mx-auto mb-10"></div>
        </h1>
        <div>
          <p className="  text-center text-gray-200 max-w-4xl leading-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
            veritatis officiis nobis accusamus ratione quae, dolorem non illo
            ipsam corrupti! Magnam quam nostrum laudantium amet optio quia ipsa
            sequi molestiae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
