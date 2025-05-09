import React from 'react'
import styles from './AboutUs.module.css'
import AboutImg1 from "../../assets/AboutImg.png"
import AboutImg2 from "../../assets/AboutImg2.png"
export default function AboutUs() {
  return (
    <>
       <section class="bg-left h-screen bg-contain bg-no-repeat relative" id='About'>
             <div className="img-overlay absolute right-0 w-[66%]  top-9">
                                 <img src={AboutImg2} alt="" className='' />
                </div>
            <button className="bg-[#eec04b] hover:bg-blue-700 font-bold py-3 px-12  absolute bottom-20 left-[45%] rounded-3xl text-[#515151]">
                                           Help Me
           </button>
           <div className="max-w-4xl mx-auto py-28 flex justify-center items-center gap-16 relative">
               
                <div className="left-section text-white">
                                  <h2 className="text-3xl font-bold mb-6 text-shadow-lg">About Us</h2>
                                        <p className="mb-6 text-sm">
                                            I am not given a straight average test of the printing unit
                                            and I have already been in contact with you. I was very
                                            confident about my career since the 30th, which is
                                        </p>
                                        <img src={AboutImg1} alt="" className='w-[75%]'/>
       
                </div>
                <div className="right-section text-white" dir="rtl">
                          <h2 className="text-2xl font-semibold mb-4 text-shadow-lg">Where</h2>
                           <p className="mb-8 text-sm w-sm ">
                                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                     and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                           </p>
                          
                </div>
   
    
      

      
 
      {/* 
         
     
      
       */}
    </div>
       </section>
 
    
    </>
  )
}
