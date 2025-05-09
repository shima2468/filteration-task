import React from 'react'
import styles from './Hero.module.css'
import logo from "../../assets/Logo.png"
export default function Hero() {
  return (
    <>
       <section class="bg-white bg-left h-screen bg-contain bg-no-repeat " id='Hero'>
    <div className="py-32 px-4 mx-auto  h-[200px]  lg:py-94 lg:px-12 flex flex-col justify-center items-center ">
         <div className="logo-img w-60 mb-24">
                      <img className='w-full' src={logo}/>
         </div>
         
        <a href="#" className="inline-flex justify-center items-center  mb-7 py-2 px-6  bg-[#6D91EE]  rounded-xl  hover:bg-gray-200 " role="alert">
            <span className="text-xs  rounded-full text-white">Experts</span> 
        </a>
        
        <h2 className="mb-4 text-4xl font-extralight tracking-tight leading-none text-black md:text-5xl lg:text-6xl  text-center">Lorem <br/>   <span class="rounded-full text-black font-extrabold">Lorem lorem</span>    </h2>
        <p className="mb-8 text-lg font-normal text-black lg:text-sm sm:px-16 xl:px-48 text-center w-3xl mt-12">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
        <a href="#" className="inline-flex justify-center items-center  mb-7 py-4 px-12  bg-[#6D91EE]  rounded-full  hover:bg-gray-200 " role="alert">
            <span className="text-sm rounded-full text-white">Help me</span> 
        </a>
    </div>
</section>
    
    </>
  )
}
