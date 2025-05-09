import React from 'react'
import styles from './Services.module.css'
import ser1 from "../../assets/ser1.png"
import ser2 from "../../assets/ser2.png"
import ser3 from "../../assets/ser3.jpg"
import Titel from '../Titel/Titel'
export default function Services() {
  return (
   <>
           <section class="relative flex flex-col justify-center items-center py-12 " id='Serices'>
                       <Titel title="Services"></Titel>
                        <div className="ser-card flex justify-center items-center gap-12 w-[70%]">
                                         <div className="max-w-sm bg-white border border-gray-200 rounded-3xl  shadow-xl">
                                               <a href="#">
                                                         <img class="rounded-t-lg" src={ser1} alt="" />
                                                   </a>
                                              <div className="p-5">
                                                  <a href="#">
                                                      <h5 className="mb-2 text-lg font-bold tracking-tight ">Lorem Ipsum</h5>
                                                  </a>
                                                  <p class=" text-sm mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                                                  
                                          </div>
                                          </div>
                                           <div className="max-w-sm bg-white border border-gray-200 rounded-3xl  shadow-xl">
                                               <a href="#">
                                                         <img class="rounded-t-lg" src={ser2} alt="" />
                                                   </a>
                                              <div className="p-5">
                                                  <a href="#">
                                                      <h5 className="mb-2 text-lg font-bold tracking-tight ">Lorem Ipsum</h5>
                                                  </a>
                                                  <p class=" text-sm mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                                                  
                                          </div>
                                          </div>
                                           <div className="max-w-sm bg-white border border-gray-200 rounded-3xl  shadow-xl">
                                               <a href="#">
                                                         <img class="rounded-t-lg overflow-hidden" src={ser2} alt="" />
                                                   </a>
                                              <div className="p-5">
                                                  <a href="#">
                                                      <h5 className="mb-2 text-lg font-bold tracking-tight ">Lorem Ipsum</h5>
                                                  </a>
                                                  <p class=" text-sm mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                                                  
                                          </div>
                                          </div>
                                          
                                         

                        </div>
                        <a href="#" className="inline-flex justify-center items-center  mb-7 py-4 px-12 mt-6 bg-[#6D91EE]  rounded-full  hover:bg-gray-200 " role="alert">
                                                 <span className="text-sm rounded-full text-white">Help me</span> 
                        </a>

                   
           </section>
   </>
  )
}
