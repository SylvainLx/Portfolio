import Image, { StaticImageData } from "next/image";
import React, { CSSProperties } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

type Modal = {
  title: string;
  openModalProjects: () => void;
  modalDesc: string;
  img: StaticImageData[];
};

function ModalProject(props: Modal) {
  return (
    <>
      <div className="fixed inset-0 z-50 flex justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
        <div className="relative my-6 mx-auto flex h-[70%] w-[90%] max-w-4xl flex-col items-end rounded-lg bg-[#383331] lg:w-screen">
          <button
            className="background-transparent mr-1 mb-1 w-min px-6 py-2 text-end text-xl font-bold uppercase outline-none transition-all duration-150 ease-linear hover:scale-125 focus:outline-none"
            type="button"
            onClick={props.openModalProjects}
          >
            X
          </button>
          <div className="relative flex h-fit w-full flex-col items-center justify-center space-y-12 rounded-lg border-0 bg-[#383331] text-3xl shadow-lg outline-none focus:outline-none">
            <p className="select-none drop-shadow-xl">{props.title}</p>
            <p className="select-none pb-2 text-center text-xl">
              {props.modalDesc}
            </p>
            <Swiper
              navigation={true}
              pagination={true}
              keyboard={true}
              loop={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              style={
                {
                  "--swiper-pagination-color": "#ae9764",
                  "--swiper-navigation-color": "#ae9764",
                } as CSSProperties
              }
            >
              {props &&
                props.img.map((image: StaticImageData) => {
                  return (
                    <SwiperSlide key={image.src} className="h-10/12  w-10/12">
                      <Image
                        src={image}
                        alt="carousel projet"
                        draggable={false}
                        className="h-10/12 w-10/12 bg-[#383331]"
                      />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  );
}

export default ModalProject;
