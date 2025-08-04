import React from "react";
import Card from "../components/Card";
import { services } from "../constants/services";

const Services = () => {
  return (
    <div className="max-w-6xl mx-auto my-10">
      <div>
        <h1 className=" font-bold md:text-2xl text-center text-heading">
          Services
        </h1>
        <div className="w-10 h-1 bg-primary mx-auto mb-5"></div>
        <p className=" text-center text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          quidem.
        </p>

        <div className="md:grid grid-cols-12 gap-4 w-full my-5">
          {services.map((item, i) => (
            <div
              key={i}
              className="col-span-3 bg-white shadow-md rounded-md mb-3 shadow-gray-300 p-4"
            >
              <h2 className="font-bold my-3">{item.title}</h2>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
