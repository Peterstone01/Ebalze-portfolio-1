import React, { useEffect, useState } from "react";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
import hero5 from "../assets/hero5.jpg";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";
const Hero = () => {
  const slides = [hero3, hero4, hero5];
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => prevSlide + 1);
      return clearInterval(timer);
    }, 3000);
  }, []);
  return (
    <div id="hero" className=" mx-auto bg-green-500 relative w-full">
      {/* ///////////////////////////////////// */}
      <div className="h-[80vh] w-full">
        <div className="gap-4 space-y-5 md:h-full   relative w-full overflow-hidden">
          {slides.map((image, i) => (
            <img
              key={i}
              src={image}
              alt="image"
              className={`${
                i === currentSlide ? "opacity-100" : "opacity-0"
              } absolute top-0 left-0 w-full h-full  object-cover transition-opacity duration-1000`}
            />
          ))}
          <button
            onClick={() =>
              setCurrentSlide(
                (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
              )
            }
            className="absolute top-1/2 left-4 transform -translate-y-1/2  text-primary"
          >
            <IoChevronBackCircleOutline className="size-8 lg:size-10" />
          </button>
          <button
            onClick={() =>
              setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
            }
            className="absolute top-1/2 right-4 transform -translate-y-1/2  text-primary "
          >
            <IoChevronForwardCircleOutline className="size-8 lg:size-10" />
          </button>
        </div>
      </div>
      {/* ///////////////////////////////////////////// */}
      <div className="absolute top-1/2 left-1/2 w-full md:w-[70%] -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-3xl text-center  text-gray-200 font-bold   ">
          E-Blaze integrated <span className=""> I.T solutions</span>
          <div className="w-20 h-1 mt-2 bg-primary mx-auto mb-5"></div>
        </h1>
        <div>
          <p className="  text-center text-gray-200 max-w-4xl leading-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
            veritatis officiis nobis accusamus ratione quae, dolorem non illo
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
{
  /* <div className="h-[80vh]">
        <img
          src={hero3}
          alt="hero image"
          className="h-[80vh] w-full object-cover"
        />
      </div> */
}
