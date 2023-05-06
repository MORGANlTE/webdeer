import React from "react";
import Navbar from "../components/Global/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="px-10 py-5 mx-auto my-16 mt-20 bg-blue-300 rounded-md w-fit font-fira text-background">
        <p className="text-xl">
          Deze applicatie is geschreven door een student van HoGent als
          <br />
          bachelorproef met een Proof of Concept
        </p>
        <br />
        <p className="text-xl">Moesten er eventuele vragen/opmerkingen zijn:</p>
        <p className="text-md">Contacteer mij hier:</p>
        <a
          className="text-white"
          href="https://github.com/MORGANlTE"
          rel="nofollow noreferrer"
          target="_blank"
        >
          Github
        </a>{" "}
        of via{" "}
        <a className="text-white" href="mailto:laurensarnauts@hotmail.com">
          email
        </a>
      </div>
    </>
  );
};

export default About;
