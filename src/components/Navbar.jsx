import React, { useState } from "react";
import logo from "../assets/logo.svg";
import SideBar from "./Sidebar";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="flex justify-between md:px-[30px] lg:px-[80px] xsm:px-3 py-3 items-center">
      {isActive && <SideBar />}
      <div className="flex gap-3 items-center">
        <img src={logo} alt="" />
      </div>
      <div className="nav-items items-center md:flex hidden">
        <span>Home</span>
        <span className="in-active-item"> Our Stories</span>
        <span className="in-active-item">Support</span>
        <span className="in-active-item">Contact Us</span>
      </div>
      <div className=" gap-4 items-center md:flex hidden">
        <span className="login">Log in</span>
        <span className="sign-up">Sign up</span>
      </div>
      <div
        className={`hamburgerMenu z-10 flex md:hidden ${
          isActive ? "active fixed" : ""
        }`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
