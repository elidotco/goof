/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AiFillApple } from "react-icons/ai";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Hero = ({ links, text }) => {
  return (
    <div className="hero h-full">
      <div
        className="flex  items-center h-full md:h-[700px] md:flex-row justify-between  flex-col px-5 "
        id="home"
      >
        <div className="z-10 w-full md:w-4/6 my-14">
          <p className="md:text-5xl text-3xl pt-20 animate__animated animate__backInLeft font-bold md:pl-20 md:px-20 text-white">
            {/* Awesome App that suits the morden lifestyle */}
            {text.title}
          </p>
          <p className="py-2 animate__animated animate__backInLeft font-light text-white md:px-40 md:pl-20 ">
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            quis facere quae recusandae impedit odio enim ducimus doloremque rem
            velit, minima, at vel, iure deleniti dolore nobis debitis aliquid
            nesciunt! */}
            {text.description}
          </p>
          <div className="mt-12 md:flex hidden   gap-10 ml-20">
            <div
              className="32 items-center h-12 flex flex-row hover:bg-transparent hover:border hover:border-green-400 transition-all duration-150 hover:transition-all
                px-6 py-3 
                 rounded-full bg-green-400 cursor-pointer text-white text-xl
              "
            >
              <a
                href={links.appStore}
                className="flex-row flex items-center justify-between gap-x-2"
              >
                <AiFillApple size={35} />
                Appstore
              </a>
            </div>
            <div
              className="32 items-center border hover:border hover:border-green-400 transition-all duration-150 hover:transition-all cursor-pointer h-12 flex flex-row  px-6 py-3 
                 rounded-full   text-white text-xl
              "
            >
              <a
                href={links.playStore}
                className="flex-row flex items-center justify-between gap-x-2"
              >
                <IoLogoGooglePlaystore />
                PlayStore
              </a>
            </div>
          </div>
        </div>

        {/* <div className="w-full z-10 md:w-2/6 h-[500px] ">
          <img src={text.image.url} alt="alt" className=" w-4/5 h-[500px]  " />
        </div> */}
      </div>

      {/* <div className=" -rotate-1 ml-20 mb-20">
        <div className="h-7 w-14 bg-[#007F66] relative rounded translate-x-px -top-10 skew-y-12"></div>
        <div className="h-7 w-14 bg-green-500 relative rounded -bottom-10-right-5 skew-y-12"></div>
      </div> */}
    </div>
  );
};

export default Hero;
