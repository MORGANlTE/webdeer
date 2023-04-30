import React, { useCallback, useContext, useState } from 'react'
import Navbar from '../components/Global/Navbar'
import MultipleChoice4 from '../components/Quiz/MultipleChoice4'
import AnswerWithImage from '../components/Quiz/AnswerWithImage'
import OneImageQuestion from '../components/Quiz/OneImageQuestion'
import AnswerNoImage from '../components/Quiz/AnswerNoImage'
import { useQuiz } from '../context/QuizContext'
import webdeer from "../images/deer.png"; // with import
import TextPart from '../components/Quiz/TextPart'
import ProgressBar from '../components/Global/ProgressBar'
import bronze from '../images/ranks/bronze.png'
import silver from '../images/ranks/silver.png'
import gold from '../images/ranks/gold.png'
import diamond from '../images/ranks/diamond.png'

const Quiz = () => {
	const { stap, categories, currentQuestion, setNiveau, niveau, nextStap } = useQuiz();
  const updateNiveau = (nr) => {
    console.log('test')
    setNiveau(nr)
    nextStap();
  };
  return (
    <>
        <Navbar/>
        {
          stap===0 && (
            <TextPart text="Welkom gebruiker" subtext="Om te starten zouden we je graag je internet vaardigheidsniveau inschatten" imgurl={webdeer}/>
          )
        }
        {/* <div>
          <h2>{questionData.question}</h2>
          <ul>
            {questionData.choices.map((choice, index) => (
              <li key={index} onClick={() => handleChoiceClick(choice)}>
                {choice}
              </li>
            ))}
          </ul>
        </div> */}
        {
          stap===1 && 
          <>
            <MultipleChoice4 titel="Hoe schat je je eigen vaardigheden in?">
              <AnswerWithImage onClick={() => updateNiveau(1)} text="Geen internet vaardigheden" url={bronze}/>
              <AnswerWithImage onClick={() => updateNiveau(2)} text="Beperkte internet vaardigheid" url={silver}/>
              <AnswerWithImage onClick={() => updateNiveau(3)} text="Goed internetvaardig" url={gold}/>
              <AnswerWithImage onClick={() => updateNiveau(4)} text="Ik heb alle basisvaardigheden van het internet" url={diamond}/>
            </MultipleChoice4>
          </>
        }
      <ProgressBar completed={(currentQuestion/categories.length)*100}/>
        <p>{stap}</p>
        <p>{niveau}</p>
    </>
  )
}

export default Quiz