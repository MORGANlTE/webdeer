import React from 'react'
import Navbar from '../components/Global/Navbar'
import data from "../data";

const Changelog = () => {
  return (
    <div>
        <Navbar/>
        <p className="mt-6 text-3xl text-white font-fira border-b-[1px] border-solid border-white w-fit mx-auto pb-2">Nu op versie v{data.changelog.logs[0].version}</p>
        {
            data.changelog.logs.map((log, i) => {     
            return (
                <div className="mt-8 mb-5 text-white text-md font-fira">
                    <h3 className='text-xl'>v{log.version} - {log.title}</h3>
                    <p className='text-slate-500'>{log.description}</p>
                </div>
            ) 
        })}
    </div>
  )
}

export default Changelog