import React from "react";
import Navbar from "../components/Global/Navbar";

const Privacy = () => {
  return (
    <>
      <Navbar />
      <div className="px-10 py-5 mx-auto my-16 mt-20 bg-blue-300 rounded-md w-fit font-fira text-background">
        <p className="text-lg">
          Met grote trots: wij verzamelen geen gegevens!
          <br />
          Er worden geen gegevens verzameld. Nu niet en nooit niet.
        </p>
        <br />
        <p className="text-lg">Onze website is "privacy first" gericht:</p>
        <p className="text-lg">
          wij zullen <b className="font-normal text-white">NOOIT</b> om jouw
          persoonlijke gegevens vragen!
        </p>
        <p>Alle gegevens worden anoniem verwerkt</p>
      </div>
    </>
  );
};

export default Privacy;
