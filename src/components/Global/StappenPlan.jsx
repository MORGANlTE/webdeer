import React, { useEffect, useState } from 'react'
import bronze from '../../images/ranks/bronze.png'
import silver from '../../images/ranks/silver.png'
import gold from '../../images/ranks/gold.png'
import diamond from '../../images/ranks/diamond.png'
import webdeer from "../../images/deer.png"; // with import
import TextPart from '../../components/Quiz/TextPart'
import MultipleChoice4 from '../../components/Quiz/MultipleChoice4'
import AnswerWithImage from '../../components/Quiz/AnswerWithImage'
import { useQuiz } from '../../context/QuizContext'

const StappenPlan = () => {
  const { stap, setNiveau, nextStap, currentQuestion, questions, handleAnswer } = useQuiz();
  const updateNiveau = (nr) => {
    console.log('test')
    console.log(stap)
    setNiveau(nr)
    nextStap();
  };
  const [question, setQuestion] = useState(questions[currentQuestion]);

  useEffect(() => {
    setQuestion(questions[currentQuestion]);
  }, [currentQuestion]);

  return (
    <>
    {currentQuestion}
    {stap}
        {
            stap===0 && (
            <TextPart text="Welkom gebruiker" subtext="Om te starten zouden we je graag je internet vaardigheidsniveau inschatten" imgurl={webdeer}/>
            )
        }
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
        {
          stap>=2 && 
          <>
            {
              (question?.isCategoryDescription) && <TextPart text={question.category} subtext={question.description} imgurl={webdeer}/>
            }
            {(!question?.isCategoryDescription) && 
              (question?.isMultipleChoice) ? 
                <>
                  <MultipleChoice4 titel={question.question}>
                    {
                      question.options.map((option, i) => {     
                        return (
                          <AnswerWithImage key={i} onClick={() => handleAnswer(option.text)} text={option.text} url={option.imgUrl}/>
                        ) 
                    })}
                  </MultipleChoice4>
                </>
                :
                <p>End</p>
              }
            
          </>   

            
        }
        
    </>
  )
}

export default StappenPlan