import Image, { StaticImageData } from "next/image";
import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

type Modal = {
  title: string;
  openModalProjects: () => void;
  modalDesc: string;
  img: StaticImageData[];
};

function ModalProject(props: Modal) {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
        <div className="relative my-6 mx-auto flex w-[90%] max-w-4xl flex-col  items-end rounded-lg bg-[#383331] lg:w-screen">
          <button
            className="background-transparent mr-1 mb-1 w-min px-6 py-2 text-end text-xl font-bold uppercase outline-none transition-all duration-150 ease-linear hover:scale-125 focus:outline-none"
            type="button"
            onClick={props.openModalProjects}
          >
            X
          </button>
          <div className="relative flex h-fit w-full flex-col items-center space-y-12 rounded-lg border-0 bg-[#383331] text-3xl shadow-lg outline-none focus:outline-none">
            <p className="shadow-xl">{props.title}</p>
            <Carousel
              showStatus={false}
              transitionTime={1000}
              infiniteLoop={true}
              className="w-full"
              dynamicHeight
            >
              {props &&
                props.img.map((image: StaticImageData) => {
                  return (
                    <div key={image.src}>
                      <p className="pb-2 text-xl">{props.modalDesc}</p>
                      <Image src={image} alt="carousel projet" />
                    </div>
                  );
                })}
            </Carousel>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  );
}

export default ModalProject;
