import React from "react";
import logo from "../../images/webdeer_logo.jpg"; // with import
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink to="/" className="w-16 h-16 block rounded-full">
      <img
        src={logo}
        alt="logo"
        className="rounded-full hover:brightness-110"
      />
    </NavLink>
  );
};

export default Logo;
