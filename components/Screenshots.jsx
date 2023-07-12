/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";

const Screenshots = ({ screen }) => {
  console.log(screen);
  return (
    <div id="screenshots" className="w-full h-full">
      <div>
        <div className="flex items-center flex-col py-10 justify-center">
          <span
            className="text-4xl font-bold 
            "
          >
            Screenshots
          </span>
          <div className="w-12 h-1 bg-orange-500" />
        </div>
      </div>
      <div className="py-5 px-10 hidden h-full md:flex">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          navigation={true}
          className="mx-20  "
        >
          {screen.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="w-full flex flex-col md:flex-row  items-center justify-center border ">
                  <div className="">
                    <img src={item.image.url} className="h-full" alt="temp" />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="py-5 px-10  md:hidden">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
          className="mx-20  "
        >
          {screen.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="w-full flex flex-col md:flex-row  items-center justify-center  ">
                  <div className="">
                    <img src={item.image.url} alt="temp" />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Screenshots;
