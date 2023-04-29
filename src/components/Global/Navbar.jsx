import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import NavElement from "./Navbar/NavElement";

const Navbar = () => {
  return (
    <div className="bg-navbar rounded-l-full flex flex-row">
      <Logo />
      <div className="flex flex-row w-full px-3 justify-evenly">
        <NavElement name="Startpagina" url="/" />
        <NavElement name="Over" url="/about" />
      </div>
    </div>
  );
};

export default Navbar;
