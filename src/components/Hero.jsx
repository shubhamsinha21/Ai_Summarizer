import React from "react";

import { logo } from "/assets";

const Hero = () => {
  return (
    <div>
      {" "}
      <img src={logo} alt="sumz_logo" className="w-44 m-6 object-contain" />
    </div>
  );
};

export default Hero;
