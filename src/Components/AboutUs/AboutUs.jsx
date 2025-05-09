import React from "react";
import styles from "./AboutUs.module.css";
import AboutImg1 from "../../assets/AboutImg.png";
import AboutImg2 from "../../assets/AboutImg2.png";
export default function AboutUs() {
  return (
    <>
      <section className="relative bg-[#6D91EE] pb-3 md:p-0">
        <div
          className="leftSection w-full md:h-full bg-cover bg-center"
          id="About"
        >
          <div className="text-left text-white md:w-[45%] xl:w-4/10 p-[7%]">
            <h2 className="font-bold text-4xl md:text-3xl my-7">About Us</h2>
            <p className="my-5 xl:text-xl md:text-xs font-semibold">
              I am not given a straight average test of the printing unit and I
              have already been in contact with you. I was very confident about
              my career since the 30th, which is
            </p>
            <div className="w-4/5 rounded-3xl overflow-hidden">
              <img src={AboutImg1} alt="" className="w-[75%]" />
            </div>
          </div>
        </div>

        <div
          className="right-section md:absolute md:w-3/4 right-0 top-0 md:h-full md:z-10 flex items-center md:flex-row sm:flex-col"
          dir="rtl"
        >
          <div className="right-section-content text-white p-[7%] md:w-3/4 lg:w-2/3">
            <h2 className="font-bold text-2xl my-8 md:text-5xl">Where</h2>
            <p className="xl:text-sm md:text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <button className="bg-[#eec04b] hover:bg-blue-700 font-bold lg:py-3 lg:px-12 sm:py-2 sm:px-6 md:absolute md:bottom-5 left-[30%] md:transform-[translateX(-50%)] md:z-20 rounded-3xl text-[#515151] ">
            Help Me
          </button>
        </div>
      </section>
    </>
  );
}
