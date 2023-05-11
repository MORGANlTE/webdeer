import React, { useCallback, useContext, useState } from "react";
import Navbar from "../components/Global/Navbar";
import { useQuiz } from "../context/QuizContext";
import todo from "../images/todo.gif";

import ProgressBar from "../components/Global/ProgressBar";
import StappenPlan from "../components/Global/StappenPlan";

const Quiz = () => {
  const {
    stap,
    categories,
    currentQuestion,
    niveau,
    loading,
    currentCategory,
  } = useQuiz();

  return (
    <>
      <Navbar />
      {!loading && (
        <>
          <StappenPlan />
          <ProgressBar
            completed={
              ((currentQuestion + currentCategory * 5) /
                (categories.length * 5)) *
              100
            }
          />
        </>
      )}
      {loading && (
        <img
          draggable="false"
          className="fixed -translate-x-1/2 -translate-y-1/2 rounded-full left-1/2 top-1/2"
          src={todo}
          alt="loading"
        />
      )}
    </>
  );
};

export default Quiz;
