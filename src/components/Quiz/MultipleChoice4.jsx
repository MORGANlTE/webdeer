import React from 'react'

const MultipleChoice4 = (props) => {
  return (
    <div className="flex flex-col justify-center mt-3 font-arial">
        <h3 className='text-2xl text-white'>{props.titel}</h3>
        <div className='grid grid-cols-2 grid-rows-2'>
            {props.children}
        </div>
    </div>
  )
}

export default MultipleChoice4