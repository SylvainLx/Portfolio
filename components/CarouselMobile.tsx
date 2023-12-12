import React from "react";
import Image, { StaticImageData } from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards, Pagination } from "swiper";

import etik1 from "../public/sreenProject/etik/etik1.webp";
import etik2 from "../public/sreenProject/etik/etik2.webp";
import etik3 from "../public/sreenProject/etik/etik3.webp";
import etik5 from "../public/sreenProject/etik/etik5.webp";
import etik6 from "../public/sreenProject/etik/etik6.webp";
import etik7 from "../public/sreenProject/etik/etik7.webp";
import etik8 from "../public/sreenProject/etik/etik8.webp";
import etik9 from "../public/sreenProject/etik/etik9.webp";
import etik10 from "../public/sreenProject/etik/etik10.webp";
import etik11 from "../public/sreenProject/etik/etik11.webp";
import etik12 from "../public/sreenProject/etik/etik12.webp";

import ecotribe1 from "../public/sreenProject/myecotribe/ecotribe1.webp";
import ecotribe2 from "../public/sreenProject/myecotribe/ecotribe2.webp";
import ecotribe3 from "../public/sreenProject/myecotribe/ecotribe3.webp";
import ecotribe4 from "../public/sreenProject/myecotribe/ecotribe4.webp";
import ecotribe5 from "../public/sreenProject/myecotribe/ecotribe5.webp";
import ecotribe6 from "../public/sreenProject/myecotribe/ecotribe6.webp";
import ecotribe9 from "../public/sreenProject/myecotribe/ecotribe9.webp";
import ecotribe10 from "../public/sreenProject/myecotribe/ecotribe10.webp";
import ecotribe7 from "../public/sreenProject/myecotribe/okok.webp";

type Projet = {
  id: number;
  title: string;
  desc: string;
  modalDesc: string;
  img: StaticImageData;
  imgs: StaticImageData[];
  alt: string;
  url?: string;
};

const CarouselMobile = () => {
  const projets: Projet[] = [
    {
      id: 1,
      title: "EtiK",
      desc: "Application iOS e-commerce pour les créateurs de mode éthique.",
      modalDesc:
        "Projet Apple Foundation Extended Program. Application E-Commerce pour les créateurs de mode éthique et leur éthiques customers. Stack : Swift, SwiftUI, MapKit, AirTable",
      img: etik7,
      imgs: [
        etik12,
        etik1,
        etik2,
        etik3,
        etik5,
        etik6,
        etik8,
        etik9,
        etik10,
        etik11,
      ],
      alt: "Logo EtiK",
    },
    {
      id: 3,
      title: "MyEcoTribe",
      desc: "Application iOS réseaux social sur la sensibilisation des éco-gestes.",
      modalDesc:
        "Projet Apple Foundation Program. Application réseau social pour les jeunes dans le but de la sensibilisation aux éco-gestes, avec de la gamification. Stack : Swift, SwiftUI, MapKit",
      img: ecotribe1,
      imgs: [
        ecotribe1,
        ecotribe2,
        ecotribe3,
        ecotribe4,
        ecotribe5,
        ecotribe6,
        ecotribe7,
        ecotribe9,
        ecotribe10,
      ],
      alt: "Logo MasterWild",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
        {projets.map((projet) => {
          return (
            <div
              key={projet.id}
              className="rounded-3xl bg-stone-100 bg-opacity-10  md:m-12  2xl:flex 2xl:flex-col 2xl:items-center 2xl:justify-center"
            >
              <div className="m-8 w-10/12 text-left">
                <h2 className="text-xl">{projet.title}</h2>
                <h3>{projet.desc}</h3>
              </div>
              <div className="my-16 mx-24  rounded-3xl  md:mx-32  lg:mx-28 lg:my-12 xl:mx-24 2xl:mx-24 2xl:flex 2xl:w-[330px] 2xl:items-center 2xl:justify-center">
                <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[EffectCards, Pagination]}
                  className="mySwiper2"
                  slidesPerView={1}
                >
                  {projet.imgs.map((mockup, index) => {
                    return (
                      <SwiperSlide key={mockup.src} className="rounded-3xl">
                        <Image
                          src={mockup}
                          alt={`Photo projet ${index + 1}`}
                          width={400}
                          height={700}
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CarouselMobile;
