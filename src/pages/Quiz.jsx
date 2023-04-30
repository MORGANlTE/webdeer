import React, { useContext, useState } from 'react'
import Navbar from '../components/Global/Navbar'
import MultipleChoice4 from '../components/Quiz/MultipleChoice4'
import AnswerWithImage from '../components/Quiz/AnswerWithImage'
import OneImageQuestion from '../components/Quiz/OneImageQuestion'
import AnswerNoImage from '../components/Quiz/AnswerNoImage'
import { useQuiz } from '../context/QuizContext'

const Quiz = () => {

  return (
    <>
        <Navbar/>

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
        <MultipleChoice4 titel="Hoe schat je je eigen vaardigheden in?">
          <AnswerWithImage text="" url=""/>
          <AnswerWithImage text="" url=""/>
          <AnswerWithImage text="" url=""/>
          <AnswerWithImage text="" url=""/>
        </MultipleChoice4>
        <OneImageQuestion>
        <AnswerWithImage text="" url=""/>
          <AnswerNoImage text=""/>
          <AnswerNoImage text=""/>
          <AnswerNoImage text=""/>
          <AnswerNoImage text=""/>
        </OneImageQuestion>
    </>
  )
}

export default Quiz