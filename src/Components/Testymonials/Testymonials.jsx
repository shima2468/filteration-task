import React from "react";
import styles from "./Testymonials.module.css";
import test from "../../assets/Tes.png";
import Titel from "../Titel/Titel";
export default function Testymonials() {
  return (
    <>
      <section
        className="relative flex flex-col justify-center items-center py-12 bg-[#f5f5f5]"
        id="Testymonials"
      >
        <Titel title="Testymonials" />
        <div className="flex flex-wrap justify-center gap-8 w-[90%]">
          <div className="bg-white rounded-3xl p-4 shadow-xl flex flex-col sm:flex-row w-full sm:w-[80%] md:w-[43%] xl:w-[35%] border-2 border-[#6D91EE] gap-4 items-center">
            <img
              className="rounded-full w-16 h-16 object-cover"
              src={test}
              alt="testimonial"
            />
            <div>
              <h5 className="mb-2 text-lg font-bold tracking-tight">
                Courtney Henry
              </h5>
              <p className="text-sm mb-3 font-normal text-gray-700 dark:text-gray-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className="stars flex gap-2">
                <i className="fa-solid fa-star text-[#6D91EE]"></i>
                <i className="fa-solid fa-star text-[#6D91EE]"></i>
                <i className="fa-solid fa-star text-[#6D91EE]"></i>
                <i className="fa-solid fa-star text-[#6D91EE]"></i>
                <i className="fa-solid fa-star text-[#6D91EE]"></i>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-4 shadow-xl flex flex-col sm:flex-row w-full sm:w-[80%] md:w-[43%] xl:w-[35%] border-2 border-[#6D91EE] gap-4 items-center">
            <img
              className="rounded-full w-16 h-16 object-cover"
              src={test}
              alt="testimonial"
            />
            <div>
              <h5 className="mb-2 text-lg font-bold tracking-tight">
                Courtney Henry
              </h5>
              <p className="text-sm mb-3 font-normal text-gray-700 dark:text-gray-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className="stars flex gap-2">
                <i className="fa-solid fa-star text-[#6D91EE]"></i>
                <i className="fa-solid fa-star text-[#6D91EE]"></i>
                <i className="fa-solid fa-star text-[#6D91EE]"></i>
                <i className="fa-solid fa-star text-[#6D91EE]"></i>
                <i className="fa-solid fa-star text-[#6D91EE]"></i>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-4 shadow-xl flex flex-col sm:flex-row w-full sm:w-[80%] md:w-[43%] xl:w-[35%] border-2 border-[#6D91EE] gap-4 items-center">
            <img
              className="rounded-full w-16 h-16 object-cover"
              src={test}
              alt="testimonial"
            />
            <div>
              <h5 className="mb-2 text-lg font-bold tracking-tight">
                Courtney Henry
              </h5>
              <p className="text-sm mb-3 font-normal text-gray-700 dark:text-gray-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className="stars flex gap-2">
                <i className="fa-solid fa-star text-[#6D91EE]"></i>
                <i className="fa-solid fa-star text-[#6D91EE]"></i>
                <i className="fa-solid fa-star text-[#6D91EE]"></i>
                <i className="fa-solid fa-star text-[#6D91EE]"></i>
                <i className="fa-solid fa-star text-[#6D91EE]"></i>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-4 shadow-xl flex flex-col sm:flex-row w-full sm:w-[80%] md:w-[43%] xl:w-[35%] border-2 border-[#6D91EE] gap-4 items-center">
            <img
              className="rounded-full w-16 h-16 object-cover"
              src={test}
              alt="testimonial"
            />
            <div>
              <h5 className="mb-2 text-lg font-bold tracking-tight">
                Courtney Henry
              </h5>
              <p className="text-sm mb-3 font-normal text-gray-700 dark:text-gray-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className="stars flex gap-2">
                <i className="fa-solid fa-star text-[#6D91EE]"></i>
                <i className="fa-solid fa-star text-[#6D91EE]"></i>
                <i className="fa-solid fa-star text-[#6D91EE]"></i>
                <i className="fa-solid fa-star text-[#6D91EE]"></i>
                <i className="fa-solid fa-star text-[#6D91EE]"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
