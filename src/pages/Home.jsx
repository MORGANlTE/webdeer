import React from "react";
import webdeer from "../images/deer.png"; // with import
import Navbar from "../components/Global/Navbar";
import data from "../data";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <div className="fixed flex flex-col items-center justify-center translate-x-1/2 -translate-y-1/2 top-1/2 right-1/2">
        <h3 className="text-3xl text-center text-white font-fira h-fit">Welkom op Webdeer</h3>
        <h5 className="text-xl text-center text-white font-fira h-fit animate-pulse">Hier kan je jouw internet vaardigheden testen!</h5>
        <NavLink to="/quiz" className="">
          <button className="px-4 py-1 mt-3 text-lg text-white duration-200 rounded-sm bg-blu hover:bg-blu2 font-fira">Start</button>
        </NavLink>
      </div>
      <img
        src={webdeer}
        alt="webdeer"
        className="w-72 h-72 drop-shadow-[0_0_5px_rgba(68,150,255,0.25)] fixed -left-10 -bottom-9 opacity-50 hover:opacity-100 duration-500"
        draggable="false"
      />
      <p className="absolute text-white bottom-1 right-2 font-fira">v{data.code.version}</p>
    </div>
  );
};

export default Home;
