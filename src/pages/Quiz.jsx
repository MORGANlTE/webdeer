import React, { useCallback, useContext, useState } from 'react'
import Navbar from '../components/Global/Navbar'
import { useQuiz } from '../context/QuizContext'

import ProgressBar from '../components/Global/ProgressBar'
import StappenPlan from '../components/Global/StappenPlan'


const Quiz = () => {
	const { stap, categories, currentQuestion, niveau } = useQuiz();

  return (
    <>
      <Navbar/>
        
      <StappenPlan /> 
        
      <ProgressBar completed={(currentQuestion/categories.length)*100}/>
    </>
  )
}

export default Quiz