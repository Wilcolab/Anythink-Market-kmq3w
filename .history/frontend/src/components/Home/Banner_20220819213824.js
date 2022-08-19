import React from "react";
import logo from "../../imgs/logo.png";

const Banner = () => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get </span>
          <input className="w-" type='text' placeholder='search the item'/>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
