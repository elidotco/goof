/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";

const Reviews = ({ comment }) => {
  console.log(comment);
  return (
    <div id="reviews" className="w-full h-[700px] bg-gray-200">
      <div className="flex justify-center flex-col pb-20 pt-32 items-center  text-4xl font-bold">
        <p className="text-white">Our Food Lovers Speak</p>
      </div>

      <div className="py-5 px-10 hidden md:block">
        <Swiper
          className="flex justify-center items-center"
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={true}
          className="mx-20  "
        >
          {/* {comment.map((i, index) => {
            return (
              <SwiperSlide className="rounded-lg" key={index}>
                <div className="w-full flex flex-col md:flex-row  items-center justify-center   rounded-lg">
                  <div className="w-full h-56 rounded-lg bg-white shadow-md shadow-gray-200 flex items-center justify-center flex-col">
                    <p className="font-bold text-2xl ">{i.name}</p>
                    <p className="px-4">{i.comment}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })} */}
          {comment.map((i, index) => {
            return (
              <SwiperSlide className="rounded-lg" key={index}>
                <div className="w-full flex flex-col md:flex-row  items-center justify-center   rounded-lg">
                  <div className="w-full border-green-200 h-72 rounded-lg bg-white shadow-md shadow-gray-200 flex items-center justify-center flex-col">
                    <p className="font-bold text-2xl ">{i.name}</p>
                    <p className="px-4">{i.comment}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

          {/* <SwiperSlide className="rounded-lg">
            <div className="w-full flex flex-col md:flex-row  items-center justify-center   rounded-lg">
              <div className="w-full h-56 rounded-lg bg-white shadow-md shadow-gray-200 flex items-center justify-center flex-col">
                <p className="font-bold text-2xl ">Intuitive Design</p>
                <p className="px-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Sapiente qui, alias suscipit necessitatibus quasi laborum
                  provident voluptas aut maxime mollitia deserunt nesciunt
                  inventore rem possimus ullam debitis magni id consequatur?
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-lg">
            <div className="w-full flex flex-col md:flex-row  items-center justify-center   rounded-lg">
              <div className="w-full h-56 rounded-lg bg-white shadow-md shadow-gray-200 flex items-center justify-center flex-col">
                <p className="font-bold text-2xl ">Intuitive Design</p>
                <p className="px-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Sapiente qui, alias suscipit necessitatibus quasi laborum
                  provident voluptas aut maxime mollitia deserunt nesciunt
                  inventore rem possimus ullam debitis magni id consequatur?
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-lg">
            <div className="w-full flex flex-col md:flex-row  items-center justify-center   rounded-lg">
              <div className="w-full h-56 rounded-lg bg-white  -black shadow-md shadow-gray-200 flex items-center justify-center flex-col">
                <p className="font-bold text-2xl ">Intuitive Design</p>
                <p className="px-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Sapiente qui, alias suscipit necessitatibus quasi laborum
                  provident voluptas aut maxime mollitia deserunt nesciunt
                  inventore rem possimus ullam debitis magni id consequatur?
                </p>
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
      <div className="py-5 px-10  md:hidden">
        <Swiper
          modules={[Navigation, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={true}
          className="mx-20  "
        >
          {comment.map((i, index) => {
            return (
              <SwiperSlide className="rounded-lg" key={index}>
                <section class="bg-white dark:bg-gray-900">
                  <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                    <figure class="max-w-screen-md mx-auto">
                      <svg
                        class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                        viewBox="0 0 24 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                          fill="currentColor"
                        />
                      </svg>
                      <blockquote>
                        <p class="text-2xl font-medium text-gray-900 dark:text-white">
                          &quot; {i.comment} &quot;
                        </p>
                      </blockquote>
                      <figcaption class="flex items-center justify-center mt-6 space-x-3">
                        <img
                          class="w-6 h-6 rounded-full"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                          alt="profile picture"
                        />
                        <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                          <div class="pr-3 font-medium text-gray-900 dark:text-white">
                            {i.name}
                          </div>
                          <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                            User
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </section>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
