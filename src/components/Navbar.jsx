import React from "react";
import { navigations } from "../constants/navigations";
// import { Link, NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="bg-gray-100 py-2 px-5 w-full flex items-center justify-center gap-5 text-gray-700 fixed    top-5  left-1/2 -translate-x-1/2 -translate-y-1/2  ">
      {navigations.map((item, i) => (
        <div key={i} className="flex items-center gap-1 ">
          {<item.Icon />}
          <Link
            smooth={true}
            duration={300}
            to={item.href}
            className="cursor-pointer"
          >
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
