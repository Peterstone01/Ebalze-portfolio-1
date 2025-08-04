import React from "react";

const Card = ({ children, padding }) => {
  let classes = "bg-white shadow-md rounded-md mb-3 shadow-gray-300";

  if (padding === "true") {
    classes = "bg-white shadow-md rounded-md mb-3 p-4 shadow-gray-300";
  }
  return <div className={`${classes}`}>{children}</div>;
};

export default Card;
