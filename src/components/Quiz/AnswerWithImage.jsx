import React from 'react'

const AnswerWithImage = (props) => {
  return (
    <div className="flex flex-col justify-center">
        <p className='text-center'>{props.text}</p>
        <img src={props.url} alt="answer" />
    </div>
  )
}

export default AnswerWithImage