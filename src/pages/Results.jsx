import React, { useCallback, useContext, useEffect, useState } from "react";
import Navbar from "../components/Global/Navbar";
import { useQuiz } from "../context/QuizContext";

import ProgressBar from "../components/Global/ProgressBar";
import StappenPlan from "../components/Global/StappenPlan";
import { NavLink } from "react-router-dom";
import bronze from "../images/ranks/bronze.png";
import silver from "../images/ranks/silver.png";
import gold from "../images/ranks/gold.png";
import diamond from "../images/ranks/diamond.png";

const Results = () => {
  const [totalPoints, setTotalPoints] = useState(0);
  const [gottenPoints, setGottenPoints] = useState(0);
  const { categories, niveau, ended, questions, answers } = useQuiz();
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
        return;
    }
  };
  console.log(answers);

  const niveauTotaalIcon = useCallback(() => {
    switch (gottenPoints) {
      case 0:
      case 1:
        return bronze;
      case 2:
      case 3:
        return silver;
      case 4:
        return gold;
      case 5:
        return diamond;
      default:
        return;
    }
  }, [gottenPoints]);

  useEffect(() => {
    let count = 0;
    let totalCount = 0;
    categories.forEach((option) => {
      if (option.score >= option.total / 2) {
        count++;
      }
      totalCount += 1;
    });
    setGottenPoints(count);
    setTotalPoints(totalCount);
  }, [categories]);

  return (
    <>
      <Navbar />
      {ended && (
        <>
          <div className="px-10 py-5 mx-auto my-16 mt-20 bg-blue-300 rounded-md w-fit font-fira text-background">
            <h3 className="text-4xl text-white font-fira">Eindresultaten:</h3>
            <h4 className="text-xl text-blu font-fira">Totaalscore: </h4>
            <p className="text-3xl">
              {Math.round(
                (categories.reduce((total, option) => total + option.score, 0) /
                  categories.reduce(
                    (total, option) => total + option.total,
                    0
                  )) *
                  100
              )}
              %
            </p>
            <p className="my-1 text-sm">
              {categories.reduce((total, option) => total + option.score, 0)}/
              {categories.reduce((total, option) => total + option.total, 0)}
            </p>
            <br />
            <div className="flex flex-row justify-center gap-8">
              <div>
                <p className="text-lg">Zelfinschatting</p>
                <img
                  src={niveauIcon()}
                  alt="level"
                  className="w-16 mx-auto rounded-full hover:brightness-110"
                  draggable="false"
                />
              </div>
              <div>
                <p className="text-lg">Behaalde score</p>
                <img
                  src={niveauTotaalIcon()}
                  alt="level"
                  className="w-16 mx-auto rounded-full hover:brightness-110"
                  draggable="false"
                />
              </div>
            </div>
            <div>
              <p className="my-8 text-md">
                Je bent geslaagd voor {gottenPoints} van de {totalPoints}{" "}
                onderdelen
              </p>
            </div>
            <NavLink to="/quiz">
              <button className="my-4 text-3xl text-background font-fira border-background border-[1px] border-solid p-3 rounded-md">
                &lt;- Vorige
              </button>
            </NavLink>
            {/* <br />
            <p className="p-3 my-4 text-3xl border-solid rounded-md text-background font-fira">
              ⇩ Jouw antwoorden ⇩
            </p> */}
          </div>
          {/* <div className="px-10 py-5 mx-auto my-16 mt-20 bg-blue-300 rounded-md w-fit font-fira text-background">
            {answers.map((a, i) => {
              return 
              <div key={i}>
                {a.text}
                </div>;
            })}
          </div> */}
        </>
      )}
    </>
  );
};

export default Results;
