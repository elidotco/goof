/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";

const Screenshots = () => {
  return (
    <div id="screenshots" className="w-full h-[700px]">
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
      <div className="py-5 px-10 hidden md:flex">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          //  autoplay={true}
          navigation={true}
          className="mx-20  "
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {/* {data?.map((item) => {
            return (
              <SwiperSlide key={item.name}>
                <div className="w-full flex flex-col md:flex-row px-10  items-center justify-center">
                  <div className="w-44 h-44 rounded-full shadow-md shadow-black  " />
                  <div className="p-2 md:w-3/5 w-full ">
                    {item.message}
                    <div>{item.name}</div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })} */}
          <SwiperSlide>
            <div className="w-full flex flex-col md:flex-row  items-center justify-center  ">
              <div className="">
                <img src="/images/temp.png" alt="temp" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full flex flex-col md:flex-row  items-center justify-center  ">
              <div className="">
                <img src="/images/temp.png" alt="temp" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full flex flex-col md:flex-row  items-center justify-center  ">
              <div className="">
                <img src="/images/temp.png" alt="temp" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full flex flex-col md:flex-row  items-center justify-center  ">
              <div className="">
                <img src="/images/temp.png" alt="temp" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="py-5 px-10  md:hidden">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          //  autoplay={true}
          navigation={true}
          className="mx-20  "
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {/* {data?.map((item) => {
            return (
              <SwiperSlide key={item.name}>
                <div className="w-full flex flex-col md:flex-row px-10  items-center justify-center">
                  <div className="w-44 h-44 rounded-full shadow-md shadow-black  " />
                  <div className="p-2 md:w-3/5 w-full ">
                    {item.message}
                    <div>{item.name}</div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })} */}
          <SwiperSlide>
            <div className="w-full flex flex-col md:flex-row  items-center justify-center  ">
              <div className="">
                <img src="/images/temp.png" alt="temp" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full flex flex-col md:flex-row  items-center justify-center  ">
              <div className="">
                <img src="/images/temp.png" alt="temp" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full flex flex-col md:flex-row  items-center justify-center  ">
              <div className="">
                <img src="/images/temp.png" alt="temp" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full flex flex-col md:flex-row  items-center justify-center  ">
              <div className="">
                <img src="/images/temp.png" alt="temp" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Screenshots;
