import React from 'react'
import styles from './Titel.module.css'
export default function Titel({title}) {
  return (
     <div className='scale-75 sm:scale-100 md:scale-100 lg:scale-90 md:my-5 lg:my-11'>
         <div className="title my-8 flex justify-center items-center">
        <div className="wholeLine">
          <div  className= "LineTopLeft"></div>
          <div></div>
        </div>

        <h1 className="title text-[#6D91EE] font-bold xl:text-5xl lg:text-3xl text-center">
          {title}
        </h1>
        
        <div className="wholeLine">
          <div></div>
          <div className= "LineTopLeft"></div>
        </div>
      </div>
    </div>
  )
}
