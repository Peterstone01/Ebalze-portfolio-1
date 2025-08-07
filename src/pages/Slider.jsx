import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.jpg";
import hero6 from "../assets/hero6.png";

import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";

function Slider() {
  const slides = [hero1, hero2, hero6, hero3];
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log(currentSlide);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => prevSlide + 1);
      return clearInterval(timer);
    }, 5000);
  }, []);

  return (
    <div id="hero" className=" mx-auto relative w-full">
      <div className="h-[80vh] w-full">
        <div className="md:gap-4 space-y-5 h-full   relative w-full overflow-hidden">
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
          <div className="w-full h-full bg-primary absolute top-0 right-0 opacity-20"></div>
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
            <IoChevronForwardCircleOutline className="size-8 lg:size-10 z-10" />
          </button>
        </div>
      </div>

      {/* /////////////////// */}
    </div>
  );
}

export default Slider;
