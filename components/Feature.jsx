/* eslint-disable @next/next/no-img-element */
import React from "react";

const Feature = ({ props, image }) => {
  return (
    <div id="features" className="w-full h-full bg-[#FFFFFF]">
      <div className="  ">
        <div className="w-full border   flex items-center justify-center flex-col h-full md:px-56 px-10">
          <div className="my-10 pt-10">
            <span className="text-3xl font-semibold ">
              How Does This App Work ?
            </span>
            <div className="w-12 h-1 bg-orange-500" />
          </div>
          <div>
            <div className="text-lg p-5 my-10 flex flex-row items-center gap-40">
              <div className="">
                <p className="font-semibold text-2xl">Download for Free</p>
                <p>
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                accusantium in vitae tenetur quos fuga quia modi nulla minus
                saepe, dolor eligendi reiciendis laboriosam, soluta illo officia
                explicabo, obcaecati dolorum! */}
                  {props[0]}
                </p>
              </div>
              <div>
                <img src={image} alt="" />
              </div>
            </div>
            <div className="text-lg p-5 my-10 flex flex-row items-center gap-40">
              <div>
                <img src={image} alt="" />
              </div>
              <div className="">
                <p className="font-semibold text-2xl">Create your profile</p>
                <p>
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                accusantium in vitae tenetur quos fuga quia modi nulla minus
                saepe, dolor eligendi reiciendis laboriosam, soluta illo officia
                explicabo, obcaecati dolorum! */}
                  {props[1]}
                </p>
              </div>
            </div>
            <div className="text-lg p-5 my-10 flex flex-row items-center gap-40">
              <div className="">
                <p className="font-semibold text-2xl">Find Varieties</p>
                <p>
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                accusantium in vitae tenetur quos fuga quia modi nulla minus
                saepe, dolor eligendi reiciendis laboriosam, soluta illo officia
                explicabo, obcaecati dolorum! */}
                  {props[0]}
                </p>
              </div>
              <div>
                <img src={image} alt="" />
              </div>
            </div>
            <div className="text-lg p-5 my-10 flex flex-row items-center gap-40">
              <div>
                <img src={image} alt="" />
              </div>
              <div className="">
                <p className="font-semibold text-2xl">Enjoy your meal</p>
                <p>
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                accusantium in vitae tenetur quos fuga quia modi nulla minus
                saepe, dolor eligendi reiciendis laboriosam, soluta illo officia
                explicabo, obcaecati dolorum! */}
                  {props[0]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
