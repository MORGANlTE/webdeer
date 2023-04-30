import React, { useContext, useState } from 'react'
import Navbar from '../components/Global/Navbar'
import MultipleChoice4 from '../components/Quiz/MultipleChoice4'
import AnswerWithImage from '../components/Quiz/AnswerWithImage'
import OneImageQuestion from '../components/Quiz/OneImageQuestion'
import AnswerNoImage from '../components/Quiz/AnswerNoImage'
import { useQuiz } from '../context/QuizContext'
import webdeer from "../images/deer.png"; // with import
import TextPart from '../components/Quiz/TextPart'
import ProgressBar from '../components/Global/ProgressBar'

const Quiz = () => {
	const { stap, categories, currentQuestion } = useQuiz();

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
              <AnswerWithImage text="" url=""/>
              <AnswerWithImage text="" url=""/>
              <AnswerWithImage text="" url=""/>
              <AnswerWithImage text="" url=""/>
            </MultipleChoice4>
            <OneImageQuestion>
            <AnswerWithImage text="" url=""/>
              <AnswerNoImage text=""/>
            </OneImageQuestion>
          </>
        }
      <ProgressBar completed={(currentQuestion/categories.length)*100}/>
        
    </>
  )
}

export default Quiz