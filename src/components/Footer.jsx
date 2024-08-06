import React from "react";
import logo from "../assets/logoWhite.svg";
import ratingImg from "../assets/ratingImg.svg";

const Footer = () => {
  return (
    <div className="flex mt-[64px] py-[32px] flex-wrap items-start justify-evenly bg-[#002606] gap-4">
      <div className="flex flex-col gap-3">
        <img src={logo} className="w-[90px] " />
        <span className=" text-[16px] text-white">
          Empowering Women, Transforming Lives
        </span>
        <img src={ratingImg} className="w-[224px]" />
      </div>
      <section className="flex gap-2 mt-2 flex-wrap items-center justify-center px-3">
        <div className="foot-heads xs:w-full">
          <map>Quick Links</map>
          <span>Home </span>
          <span>Our Stories</span>
          <span>Support</span>
          <span>Contact Us</span>
        </div>
        <div className="foot-heads xs:w-full">
          <map>Resources</map>
          <span>Blog </span>
          <span>Newsletter</span>
          <span>Events</span>
          <span>Help center</span>
        </div>
        <div className="foot-heads xs:w-full">
          <map>Social</map>
          <span>Twitter </span>
          <span>Linkedin</span>
          <span>Facebook</span>
          <span>Twitter</span>
        </div>
        <div className="foot-heads xs:w-full">
          <map>Legal</map>
          <span>Terms </span>
          <span>Privacy</span>
          <span>Cookies</span>
          <span>Licenses</span>
        </div>
      </section>
    </div>
  );
};

export default Footer;
