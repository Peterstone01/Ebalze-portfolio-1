import React from "react";
import Card from "../components/Card";
import { FaPhoneVolume } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const ContactUs = () => {
  return (
    <div id="contact" className="w-full mt-20 bg-gray-200 ">
      <h1 className=" font-bold md:text-2xl text-center text-heading pt-10">
        Contact Us
      </h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.6, y: -2 }}
        whileInView={{ scale: 1, opacity: 1, y: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="max-w-4xl mx-auto  my-10"
      >
        <div className="md:grid grid-cols-12 gap-4">
          {/* ////////////////////left */}
          <div className="col-span-6 ">
            <h1 className="font-bold text-gray-300 text-4xl my-4">
              GET IN TOUCH TODAY
            </h1>

            <Card padding="true">
              <p className="my-5 text-gray-700 font-bold">
                For more information about our products and services, reachout
                to our customer service through
              </p>
              <div className="flex items-center justify-start gap-2">
                <MdOutlineMarkEmailRead />
                <p>Send us Mail</p>
              </div>
              <div className="flex items-center justify-start gap-2">
                <FaWhatsapp />
                <p>Reachout via Whatsapp: 234567890</p>
              </div>
              <div className="flex items-center justify-start gap-2">
                <FaPhoneVolume />
                <p>Our official call line</p>
              </div>
            </Card>
          </div>
          {/* ////////////////////right */}
          <div className="col-span-6">
            <Card padding="true">
              <h4 className="my-4 font-bold text-center">
                Fill the form below to send us a direct message
              </h4>
              <form>
                <div className="">
                  <input
                    type="text"
                    placeholder="Enter your names"
                    className="border-b border-gray-400 rounded px-5 py-2  w-full"
                  />
                  <input
                    type="email"
                    placeholder="Enter your Email Address"
                    className="border-b border-gray-400 rounded px-5 py-2 mt-2  w-full"
                  />
                  <textarea
                    placeholder="Enter your messages"
                    className="h-[100px] px-5 border  border-gray-400 rounded w-full mt-2"
                  ></textarea>
                </div>
                <button className="px-5 py-2 bg-primary text-white w-full rounded my-5">
                  {" "}
                  Send
                </button>
              </form>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
