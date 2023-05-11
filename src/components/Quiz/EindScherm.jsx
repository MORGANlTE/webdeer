import React from "react";
import { useQuiz } from "../../context/QuizContext";
import icon1 from "../../images/icons/icon1.png";
import icon2 from "../../images/icons/icon2.png";
import icon3 from "../../images/icons/icon3.png";
import icon4 from "../../images/icons/icon4.png";
import icon5 from "../../images/icons/icon5.png";
import { NavLink } from "react-router-dom";

const EindScherm = () => {
  const { categories } = useQuiz();

  return (
    <>
      <div className="px-10 py-5 mx-auto my-16 mt-20 bg-blue-300 rounded-md w-fit font-fira">
        <h3 className="text-4xl text-white font-fira">Eindresultaten:</h3>
        <h4 className="text-xl text-blu font-fira">
          Eerst en vooral proficiat! Dit waren moeilijke vragen
        </h4>
        <br />
        <div className="grid grid-cols-2 gap-2">
          {categories.map((option, i) => {
            return (
              <div
                key={i}
                className="mb-3 text-xl border-solid border-[1px] border-white rounded-md p-4 bg-background"
              >
                <p
                  className={`text-sm text-white ${
                    option.score === option.total ? "text-green-400" : ""
                  }`}
                >
                  {option.name}
                </p>
                <p
                  className={`bg-blu w-fit mx-auto py-3 p-3 rounded-full ${
                    option.score === option.total
                      ? "text-green-400"
                      : option.score + 1 < option.total / 2
                      ? "text-red-600"
                      : option.score < option.total / 2
                      ? "text-orange-600"
                      : "text-green-700"
                  }`}
                >
                  {option.score}/{option.total}
                </p>
              </div>
            );
          })}
        </div>
        <div>
          <p className="mt-3 text-xl">Behaalde badges</p>
          <div className="flex flex-row justify-center">
            {categories.map((option, i) => {
              return (
                option.score >= option.total / 2 && (
                  <div className="flex flex-col justify-center">
                    <img
                      key={i}
                      alt={option.name}
                      className="w-24 mx-auto my-3 bg-blue-100 rounded-full hover:brightness-110"
                      src={
                        i === 0
                          ? icon1
                          : i === 1
                          ? icon2
                          : i === 2
                          ? icon3
                          : i === 3
                          ? icon4
                          : i === 4
                          ? icon5
                          : null
                      }
                    />
                    <p className="w-32 text-xs h-14 text-blu">{option.name}</p>
                  </div>
                )
              );
            })}
          </div>
        </div>
        <NavLink to="/results">
          <button className="my-4 text-3xl text-background font-fira border-background border-[1px] border-solid p-3 rounded-md">
            Volgende -&gt;
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default EindScherm;
