import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import NavElement from "./Navbar/NavElement";

const Navbar = () => {
  return (
    <div className="flex flex-row float-right w-[98%] rounded-l-full bg-navbar">
      <Logo />
      <div className="flex flex-row w-full px-3 justify-evenly">
        <NavElement name="Startpagina" url="/" />
        <NavElement name="Quiz" url="/quiz" />
        <NavElement name="Over" url="/about" />
        <NavElement name="Privacy" url="/privacy" />
      </div>
    </div>
  );
};

export default Navbar;
