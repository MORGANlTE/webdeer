import React from 'react'

const OneImageQuestion = (props) => {
  return (
    <div className="flex flex-col justify-center mt-3 font-arial">
        <h3 className='text-2xl text-white'>{props.titel}</h3>
        <img src={props.url} alt="fullimg"/>
        <div className='grid grid-cols-2 grid-rows-2'>
            {props.children}
        </div>
    </div>
  )
}

export default OneImageQuestion