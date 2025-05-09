import React from 'react'
import styles from './Hero.module.css'
import logo from "../../assets/Logo.png"
import heroImg from "../../assets/Herobg.png"
export default function Hero() {
  return (
    <>
       <section class="bg-white  h-screen relative flex justify-center items-center " >
                    <div className="HeroImg  absolute top-0 left-0 h-[95%] z-10 ">
                                 <img src={heroImg} alt="" className='h-full  object-cover' />    
                    </div>
  
  
  
    <div className="z-20 flex  gap-16 flex-col justify-center items-center  absolute">
         <div className="logo-img">
                      <img className='w-2/3 xl:w-4/5 mx-auto' src={logo}/>
         </div>
         <div className="hero-content text-white text-center ">
                            <button className="bg-[#6D91EE] text-white rounded-2xl text-sm p-1 px-4 sm:text-lg sm:px-6 md:px-6 sm:font-medium cursor-pointer hover:opacity-80 ">
                                        Experts
                            </button>
                             <h2 className="my-2 text-4xl text-[#4F4F4F] md:text-5xl lg:text-6xl xl:text-7xl  text-center">
             
           <span class="font-extralight tracking-tight">Lorem</span>
           <span class="rounded-full text-black font-extrabold  block">Lorem lorem</span>    </h2>
        <p className="my-3 w-1/2  min-w-50 md:max-w-4/9 mx-auto sm:my-4 sm:text-lg lg:text-sm text-black text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
        <button className="bg-[#6D91EE] text-white rounded-2xl text-sm p-2 px-4 sm:text-lg sm:px-6 md:px-14 sm:font-medium cursor-pointer hover:opacity-80 ">
                                        Help me
           </button>
         </div>
      
        
       
    </div>
</section>
    
    </>
  )
}
