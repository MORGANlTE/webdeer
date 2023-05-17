import React, { useEffect, useState } from "react";
import one from "../../images/ranks/one.png";
import two from "../../images/ranks/two.png";
import three from "../../images/ranks/three.png";
import four from "../../images/ranks/four.png";
import webdeer from "../../images/deer.png"; // with import
import TextPart from "../../components/Quiz/TextPart";
import MultipleChoice4 from "../../components/Quiz/MultipleChoice4";
import AnswerWithImage from "../../components/Quiz/AnswerWithImage";
import { useQuiz } from "../../context/QuizContext";
import NotMultipleChoice from "../Quiz/NotMultipleChoice";
import EindScherm from "../Quiz/EindScherm";

const StappenPlan = () => {
  const {
    stap,
    setNiveau,
    nextStap,
    currentQuestion,
    questions,
    handleAnswer,
    currentCategory,
    ended,
  } = useQuiz();
  const updateNiveau = (nr) => {
    setNiveau(nr);
    nextStap();
  };
  const [question, setQuestion] = useState(questions[currentCategory]);

  useEffect(() => {
    if (currentCategory < 6 && currentQuestion < 6 && !ended) {
      setQuestion(questions[currentCategory][currentQuestion]);
    }
  }, [currentQuestion, currentCategory, question, ended]);

  return (
    <>
      {ended ? (
        <EindScherm />
      ) : (
        <>
          {stap === 0 && (
            <TextPart
              text="Welkom gebruiker"
              subtext="Om te starten zouden we je graag je internet vaardigheidsniveau inschatten"
              imgurl={webdeer}
            />
          )}
          {stap === 1 && (
            <>
              <MultipleChoice4 titel="Hoe schat je je eigen vaardigheden in?">
                <AnswerWithImage
                  onClick={() => updateNiveau(1)}
                  text="Geen internet vaardigheden"
                  url={one}
                />
                <AnswerWithImage
                  onClick={() => updateNiveau(2)}
                  text="Beperkte internet vaardigheid"
                  url={two}
                />
                <AnswerWithImage
                  onClick={() => updateNiveau(3)}
                  text="Goed internetvaardig"
                  url={three}
                />
                <AnswerWithImage
                  onClick={() => updateNiveau(4)}
                  text="Ik heb alle basisvaardigheden van het internet"
                  url={four}
                />
              </MultipleChoice4>
            </>
          )}
          {stap >= 2 && (
            <>
              {question?.is_category_description && (
                <TextPart
                  text={question?.category}
                  subtext={question?.question}
                />
              )}
              {!question?.is_category_description &&
              question?.is_multiple_choice ? (
                <>
                  <MultipleChoice4 titel={question?.question}>
                    {question.answers.map((option, i) => {
                      return (
                        <AnswerWithImage
                          key={i}
                          onClick={() => handleAnswer(option)}
                          text={option.text}
                          url={option.imgUrl}
                        />
                      );
                    })}
                  </MultipleChoice4>
                </>
              ) : (
                <></>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default StappenPlan;
