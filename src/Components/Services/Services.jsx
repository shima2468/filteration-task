import React from 'react'
import styles from './Services.module.css'
import ser1 from "../../assets/ser1.png"
import ser2 from "../../assets/ser2.png"
import ser3 from "../../assets/ser3.jpg"
import Titel from '../Titel/Titel'
export default function Services() {
  return (
   <>
<section className="relative flex flex-col justify-center items-center py-12" id="Serices">
  <Titel title="Services" />

  <div className="ser-card flex flex-wrap justify-center items-start gap-8 w-[90%]">
    {/* الكرت 1 */}
    <div className="bg-white border border-gray-200 rounded-3xl shadow-xl 
                    w-full sm:w-[80%] md:w-[38%] lg:w-[24%] overflow-hidden">
      <a href="#">
        <img className="w-full h-auto" src={ser1} alt="" />
      </a>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-bold tracking-tight">Lorem Ipsum</h5>
        <p className="text-sm font-normal text-gray-700 dark:text-gray-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
        </p>
      </div>
    </div>

    {/* الكرت 2 */}
    <div className="bg-white border border-gray-200 rounded-3xl shadow-xl 
                    w-full sm:w-[80%] md:w-[38%] lg:w-[24%] overflow-hidden">
      <a href="#">
        <img className="w-full h-auto" src={ser2} alt="" />
      </a>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-bold tracking-tight">Lorem Ipsum</h5>
        <p className="text-sm font-normal text-gray-700 dark:text-gray-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
        </p>
      </div>
    </div>

    {/* الكرت 3 */}
    <div className="bg-white border border-gray-200 rounded-3xl shadow-xl 
                    w-full sm:w-[80%] md:w-[38%] lg:w-[24%] overflow-hidden">
      <a href="#">
        <img className="w-full h-auto" src={ser2} alt="" />
      </a>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-bold tracking-tight">Lorem Ipsum</h5>
        <p className="text-sm font-normal text-gray-700 dark:text-gray-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
        </p>
      </div>
    </div>
  </div>

  <a href="#" className="inline-flex justify-center items-center mb-7 py-4 px-12 mt-6 bg-[#6D91EE] rounded-full hover:bg-gray-200">
    <span className="text-sm rounded-full text-white">Help me</span>
  </a>
</section>



   </>
  )
}
