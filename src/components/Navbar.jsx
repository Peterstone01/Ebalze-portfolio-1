import elblaze from "../assets/elblaze.png";
import React, { useState } from "react";
import { navigations } from "../constants/navigations";
// import { Link, NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="bg-gray-100 fixed w-full py-3 z-10 px-14 flex items-center justify-between ">
      <Link className="text-green-500">
        <img src={elblaze} alt="logo" className="w-32 object-contain" />
      </Link>
      <div className="  flex items-center justify-center gap-5 text-gray-700     ">
        {navigations.map((item, i) => (
          <div key={i} className="hidden md:flex items-center gap-1 ">
            {<item.Icon />}
            <Link
              smooth={true}
              duration={300}
              to={item.href}
              className="cursor-pointer hover:text-primary font-bold delay-75"
            >
              {item.name}
            </Link>
          </div>
        ))}
        <div className="block md:hidden">
          <button onClick={() => setShow((show) => !show)}>
            <FaBars />
          </button>
        </div>
      </div>

      {/* //////////////////mobile navigation starts here */}
      {show && (
        <div className="bg-white rounded-md absolute right-0 top-10 px-2 py-3 mb-3 shadow-gray-300 w-[200px] ">
          <div className="   items-center justify-center gap-5 text-gray-700     ">
            {navigations.map((item, i) => (
              <div key={i} className="flex md:hidden items-center px-10 gap-3 ">
                {<item.Icon />}
                <Link
                  onClick={() => setShow((show) => !show)}
                  smooth={true}
                  duration={300}
                  to={item.href}
                  className="cursor-pointer hover:text-primary font-bold delay-75"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
