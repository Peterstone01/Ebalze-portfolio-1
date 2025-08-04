import React from "react";
import Card from "../components/Card";
import man from "../assets/man.jpg";
import { chooseUs } from "../constants/chooseUs";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto my-10">
      <Card padding="true">
        <h1 className=" font-bold md:text-2xl text-center text-gray-700">
          About Us
        </h1>
        <div className="w-10 h-1 bg-primary mx-auto mb-5"></div>
        <div className="md:grid grid-cols-12 gap-4">
          {/* //////////////////left side */}
          <div className="col-span-5">
            <div padding="true">
              <img src={man} alt="about image" className="object-cover" />
            </div>
          </div>
          {/* //////////////////right side */}
          <div className="col-span-7">
            <div>
              <h1 className="font-bold text-primary">Who we are</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laudantium debitis quod enim hic ea officiis, sit molestias ab,
                incidunt inventore soluta beatae excepturi, eveniet
                necessitatibus quaerat quis. Odio, iste tempore!
              </p>
              <p className="my-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                tenetur deleniti eum fugiat error fugit accusamus vel voluptate
                dignissimos quod!
              </p>
            </div>
          </div>
        </div>
      </Card>
      <h1 className=" font-bold text-center  text-xl my-5 text-gray-700">
        Why you should choose us
      </h1>
      <div className="md:grid grid-cols-12 gap-4 w-full">
        {chooseUs.map((item, i) => (
          <div
            key={i}
            className="col-span-3 bg-white shadow-md rounded-md mb-3 shadow-gray-300 p-4"
          >
            <div className="flex items-center  gap-2">
              {<item.Icon className="font-bold" />}

              <h2 className="font-bold my-2">{item.title}</h2>
            </div>
            <div className="w-10 h-1 bg-primary mb-2"></div>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
