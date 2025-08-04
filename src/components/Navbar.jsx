import React from "react";
import { navigations } from "../constants/navigations";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center gap-5 text-gray-400 absolute   top-1/12 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
      {navigations.map((item, i) => (
        <div key={i} className="flex items-center gap-1 ">
          {<item.Icon />}
          <NavLink to={item.href}>{item.name}</NavLink>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
