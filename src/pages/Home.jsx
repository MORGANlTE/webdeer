import React from "react";
import webdeer from "../images/deer.png"; // with import
import Navbar from "../components/Global/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <img
        src={webdeer}
        alt="webdeer"
        className="w-72 h-72 drop-shadow-[0_0_5px_rgba(68,150,255,0.25)]"
        draggable="false"
      />
    </div>
  );
};

export default Home;
