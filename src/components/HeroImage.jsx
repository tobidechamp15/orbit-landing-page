import React from "react";
import heroImage from "../assets/hero-image.svg";

const HeroImage = () => {
  return (
    <div className="flex items-center justify-center py-[24px] xsm:p-4">
      <img src={heroImage} alt="" />
    </div>
  );
};

export default HeroImage;
