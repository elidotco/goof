/* eslint-disable @next/next/no-img-element */
import React from "react";

const Feature = ({ props, image }) => {
  return (
    <div id="features" className="w-full h-full bg-green-400 text-white">
      <div className="flex flex-row">
        <div className="w-full md:w-3/6   h-full px-10">
          <div className="my-10">
            <span className="text-3xl font-semibold ">
              How Does This App Work ?
            </span>
            <div className="w-12 h-1 bg-orange-500" />
          </div>
          <div>
            <div className="text-lg p-5 my-10">
              <p className="font-semibold text-2xl">Download for Free</p>
              <p>
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                accusantium in vitae tenetur quos fuga quia modi nulla minus
                saepe, dolor eligendi reiciendis laboriosam, soluta illo officia
                explicabo, obcaecati dolorum! */}
                {props[0]}
              </p>
            </div>
            <div className="text-lg p-5 my-10">
              <p className="font-semibold text-2xl">Create a Profile</p>
              <p>
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                accusantium in vitae tenetur quos fuga quia modi nulla minus
                saepe, dolor eligendi reiciendis laboriosam, soluta illo officia
                explicabo, obcaecati dolorum! */}
                {props[1]}
              </p>
            </div>
            <div className="text-lg p-5 my-10">
              <p className="font-semibold text-2xl">Get your Meal</p>
              <p>
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                accusantium in vitae tenetur quos fuga quia modi nulla minus
                saepe, dolor eligendi reiciendis laboriosam, soluta illo officia
                explicabo, obcaecati dolorum! */}
                {props[2]}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/6 hidden md:flex">
          <div
            className="w-4/5 h-5/6  
          "
          >
            <img src={image} alt="temp" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
