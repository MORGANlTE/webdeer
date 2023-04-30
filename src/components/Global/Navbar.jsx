import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import NavElement from "./Navbar/NavElement";
import { useQuiz } from "../../context/QuizContext";
import bronze from '../../images/ranks/bronze.png'
import silver from '../../images/ranks/silver.png'
import gold from '../../images/ranks/gold.png'
import diamond from '../../images/ranks/diamond.png'

const Navbar = () => {
	const { niveau } = useQuiz();

  const niveauIcon = () => {
    switch (niveau) {
      case 1:
        return bronze;
      case 2:
        return silver;
      case 3:
        return gold;
      case 4:
        return diamond;
      default:
        return 
    }
  }
  const style = {
    height: '64px',
  };
  return (
    <>
      <div className="flex flex-row float-right w-[98%] rounded-l-full bg-navbar fixed right-0">
        <Logo />
        <div className="flex flex-row w-full px-3 justify-evenly">
          <NavElement name="Startpagina" url="/" />
          <NavElement name="Quiz" url="/quiz" />
          <NavElement name="Over" url="/about" />
          <NavElement name="Privacy" url="/privacy" />
        </div>
      </div>
      <div style={style}></div>
      {
        niveau > 0 && (
          <img
            src={niveauIcon()}
            alt="level"
            className="rounded-full hover:brightness-110 fixed top-4 right-3 w-8 h-8"
            draggable="false"
          />
        )
      }
    </>
  );
};

export default Navbar;
