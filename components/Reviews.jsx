/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";

const Reviews = () => {
  return (
    <div id="reviews" className="w-full h-[700px] bg-gray-200">
      <div className="flex justify-center flex-col pb-10 pt-20 items-center text-4xl font-bold">
        Our Clients Speak
        <p className="text-xl font-normal py-1">
          {" "}
          We work with people all around the world
        </p>
      </div>

      <div className="py-5 px-10 hidden md:flex">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={true}
          className="mx-20  "
        >
          <SwiperSlide className="rounded-lg">
            <div className="w-full flex flex-col md:flex-row  items-center justify-center   rounded-lg">
              <div className="w-full h-56 rounded-lg bg-white shadow-md shadow-gray-200 flex items-center justify-center flex-col">
                <p className="font-bold text-2xl ">Efficient Collaboration</p>
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
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="py-5 px-10  md:hidden">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={true}
          className="mx-20  "
        >
          <SwiperSlide className="rounded-lg">
            <div className="w-full flex flex-col md:flex-row  items-center justify-center   rounded-lg">
              <div className="w-full h-56 rounded-lg bg-white shadow-md shadow-gray-200 flex items-center justify-center flex-col">
                <p className="font-bold text-2xl ">Efficient Collaboration</p>
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
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
