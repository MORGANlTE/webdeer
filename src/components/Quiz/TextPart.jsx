import React from 'react'
import { useQuiz } from '../../context/QuizContext';

const TextPart = (props) => {
    const style = {
        height: 'calc(100vh - 128px)' /* 60px is the height of the navbar */
      };
    const styleImg = {
        background: "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(27,53,120,1) 0%, rgba(26,32,56,1) 100%)"
    }
    const {nextStap} = useQuiz();
  return (
    <div style={style} className='flex items-center justify-center'>
        <div className="flex flex-col justify-center w-4/5 mx-auto text-center text-white rounded-xl h-4/5 bg-blu font-fira" >
            <h3 className='my-3 text-3xl'>{props.text}</h3>
            <p className='w-3/5 mx-auto mt-4 text-lg'>{props.subtext}</p>
            {
                props.imgurl && 
                <img src={props.imgurl} alt="bijlage" className="w-32 h-32 mx-auto mt-6" style={styleImg}/>
            }
            <button onClick={nextStap} className="px-5 py-2 mx-auto mt-6 duration-300 rounded-sm hover:bg-blue-600 bg-blu2 w-fit">Volgende</button>
        </div>
    </div>
  )
}

export default TextPart