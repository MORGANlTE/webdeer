import React from 'react'

const MultipleChoice4 = (props) => {
  return (
    <div className="flex flex-col justify-center mt-3 font-arial">
        <h3 className='text-2xl text-white mb-4 font-fira'>{props.titel}</h3>
        <div className='flex flex-wrap justify-center gap-4'>
            {props.children}
        </div>
    </div>
  )
}

export default MultipleChoice4