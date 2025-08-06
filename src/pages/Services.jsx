import React from "react";
import Card from "../components/Card";
import { services } from "../constants/services";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const Services = () => {
  return (
    <div id="services" className="w-full bg-gray-200  py-10">
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

          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: -2 }}
            whileInView={{ scale: 1, opacity: 1, y: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="md:grid grid-cols-12 gap-4 w-full my-5"
          >
            {services.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className="col-span-3 bg-white shadow-md rounded-md mb-3 shadow-gray-300 p-4"
              >
                <div>
                  <img
                    src={item.image}
                    alt="service image"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-bold my-3">{item.title}</h2>
                  <p>{item.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
