import React from "react";
import badge from "../assets/badge.svg";

const Hero = () => {
  return (
    <div className="flex p-[80px] items-center justify-center flex-col">
      <img src={badge} alt="" />
      <span className="heading mt-4 mb-6">
        Empowering Africa&apos;s Market Women
      </span>
      <span className="hero-desc">
        Connecting entrepreneurs to opportunity, one market at a time
      </span>
      <span className="get-started my-[48px] rounded-lg">Get Started</span>
    </div>
  );
};

export default Hero;
