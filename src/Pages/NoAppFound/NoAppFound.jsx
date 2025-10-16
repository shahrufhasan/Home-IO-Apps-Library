import React from "react";
import img from "../../../public/App-Error.png";

const NoAppFound = () => {
  return (
    <div className="flex justify-center items-center my-28">
      <img src={img} alt="No Apps Found" />
    </div>
  );
};

export default NoAppFound;
