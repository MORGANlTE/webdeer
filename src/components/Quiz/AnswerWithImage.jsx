import React from 'react'

const AnswerWithImage = (props) => {
  return (
    <div className="flex flex-col justify-center w-1/3 h-56 mx-1 rounded-md cursor-pointer bg-blu xl:h-56 hover:bg-blu2" onClick={props.onClick}>
        {props.url && <img src={props.url} alt="answer" draggable="false" className="w-32 mx-auto rounded-full" />}
        <p className='px-3 pb-3 mt-4 text-lg text-center text-white font-fira'>{props.text}</p>
    </div>
  )
}

export default AnswerWithImage