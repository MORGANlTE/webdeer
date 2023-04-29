import React from "react";
import { NavLink } from "react-router-dom";

const NavElement = (props) => {
  return (
    <NavLink to={props.url} className="flex items-center group">
      <p className="text-lg text-white font-fira group-hover:text-gray-300 duration-300">
        {props.name}
      </p>
    </NavLink>
  );
};

export default NavElement;
