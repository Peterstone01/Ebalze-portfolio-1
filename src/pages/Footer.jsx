import React from "react";
import { navigations } from "../constants/navigations";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-slate-950 px-16 w-full bottom-0  h-[50vh]">
      <div className="max-w-4xl mx-auto  my-10">
        <div className=" md:grid grid-cols-10 gap-5 ">
          <div className="col-span-6">
            <h1 className="font-bold text-red-500 mt-10 text-4xl">E-Blaze</h1>
            <h4 className=" text-gray-400">
              intgrated Tech solution providers
            </h4>
            <p className="text-gray-600 mt-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
              quidem praesentium doloribus, hic eius iste deleniti repellat quia
              nihil illum, similique possimus fuga provident reiciendis incidunt
              ipsam omnis saepe iusto.
            </p>
          </div>
          <div className="col-span-4">
            <h1 className="text-gray-500  mt-10">Navigations</h1>
            <div>
              {navigations.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1 text-gray-500 my-2 "
                >
                  {<item.Icon />}
                  <NavLink to={item.href} className="text-gray-400">
                    {item.name}
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
