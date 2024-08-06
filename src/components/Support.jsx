import React from "react";
import chartImg from "../assets/chartImg.svg";
import chartImg2 from "../assets/chartImg2.svg";

const Support = () => {
  return (
    <div className=" mt-[64px] py-[52px] chart-margin flex w-full justify-center flex-col items-center  relative">
      <div className="md:px-[40px] bg-gradient-to-r from-[#003320] to-[#009960] support-grad  w-full items-center justify-center py-7 pb-[190px]">
        <span className="support-head">Support Our Mission</span>
        <span className="support-desc">
          Your contribution can make a difference in the lives of women
          entrepreneurs.
        </span>
        <span className="get-started  rounded-lg w-fit self-center cursor-pointer">
          Get in touch
        </span>
      </div>
      <div className="absolute w-[45%] top-[80%] z-20 md:flex justify-center hidden">
        <img src={chartImg} className="" />
        <img
          src={chartImg2}
          className="absolute -bottom-[40px] -right-[50px] "
        />
      </div>
    </div>
  );
};

export default Support;
