import React from 'react'

const AnswerWithImage = (props) => {
  return (
    <div className="flex flex-col justify-center bg-blu rounded-md w-1/3 mx-1 xl:h-56 h-56 cursor-pointer hover:bg-blu2" onClick={props.onClick}>
        <img src={props.url} alt="answer" draggable="false" className="w-32 rounded-full mx-auto" />
        <p className='text-center font-fira text-white text-lg pb-3 px-3 mt-4'>{props.text}</p>
    </div>
  )
}

export default AnswerWithImage