import React from "react";
import Image, { StaticImageData } from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination } from "swiper";

import Blob from "./Blob";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";

//assets
import healthyLife from "../public/logoEC2.png";
import logoMasterwild from "../public/sreenProject/logo-masterwild.png";
import kids1 from "../public/sreenProject/ecolokids/ecolo1.webp";
import kids2 from "../public/sreenProject/ecolokids/ecolo2.webp";
import kids3 from "../public/sreenProject/ecolokids/ecolo3.webp";
import kids4 from "../public/sreenProject/ecolokids/ecolo5.webp";
import apside1 from "../public/sreenProject/apside/apside1.webp";
import apside2 from "../public/sreenProject/apside/apside2.webp";
import apside3 from "../public/sreenProject/apside/apside3.webp";
import apside4 from "../public/sreenProject/apside/apside4.webp";
import apside5 from "../public/sreenProject/apside/apside5.webp";
import apside6 from "../public/sreenProject/apside/apside6.webp";
import game1 from "../public/sreenProject/triangle/triangle1.webp";
import game2 from "../public/sreenProject/triangle/triangle2.webp";
import game3 from "../public/sreenProject/triangle/triangle3.webp";
import game4 from "../public/sreenProject/triangle/triangle4.webp";
import cocktail1 from "../public/sreenProject/cocktail/cocktail1.webp";
import cocktail2 from "../public/sreenProject/cocktail/cocktail2.webp";
import cocktail3 from "../public/sreenProject/cocktail/cocktail3.webp";
import logoP1 from "../public/sreenProject/logo-p1.png";
import logoP2 from "../public/sreenProject/logo-p2.svg";
import logoApside from "../public/sreenProject/logo-apside.png";
import logoKids from "../public/sreenProject/logo-kids.png";
import masterwild1 from "../public/sreenProject/masterwild/masterwild1.webp";
import masterwild3 from "../public/sreenProject/masterwild/masterwild3.webp";
import masterwild4 from "../public/sreenProject/masterwild/masterwild4.webp";
import masterwild5 from "../public/sreenProject/masterwild/masterwild5.webp";
import masterwild6 from "../public/sreenProject/masterwild/masterwild6.webp";
import masterwild2 from "../public/sreenProject/masterwild/masterwild2.webp";
import healthy1 from "../public/sreenProject/healthylife/healthy1.webp";
import healthy2 from "../public/sreenProject/healthylife/healthy2.webp";
import healthy3 from "../public/sreenProject/healthylife/healthy3.webp";
import decoevasion from "../public/sreenProject/logo2-evasion.png";
import elodiehometherapy from "../public/sreenProject/logo-elodiehometherapy.png";

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

function CarouselWeb() {
  const projets: Projet[] = [
    {
      id: 2,
      title: "HealthyLife Elodie",
      desc: "Site vitrine Healthy Life Elodie, conseillère bien-être.",
      modalDesc:
        "Ce site a pour objectif de présenter et développer son activité avec l'aide du web. Stack : ReactJS, NodeJS, MySQL, Prisma",
      img: healthyLife,
      imgs: [healthy1, healthy2, healthy3],
      alt: "Logo HealthyLife",
    },
    {
      id: 3,
      title: "MasterWild",
      desc: "Plateforme de masterclass d'intervenant pour la WildCodeSchool.",
      modalDesc:
        "Plateforme de masterclass pour la WildCodeSchool, pour but de les centraliser et partager celles-ci à destination des élèves, prospects et professionnels. Stack : ReactJS, NodeJS, MySQL, Prisma.",
      img: logoMasterwild,
      imgs: [
        masterwild1,
        masterwild2,
        masterwild3,
        masterwild4,
        masterwild5,
        masterwild6,
      ],
      alt: "Logo MasterWild",
    },
    {
      id: 6,
      title: "Triangle project",
      desc: "Cas d'école. Quizz avec plusieurs thèmes et un ranking.",
      modalDesc:
        "Création d'un quizz avec plusieurs thèmes et un ranking. Cas d'école pour découvrir l'environnement HTML, CSS et intro en JavaScript.",
      img: logoP1,
      imgs: [game1, game2, game3, game4],
      alt: "Logo photo triangle",
    },
    {
      id: 7,
      title: "Cocktail Finder",
      desc: "Cas d'école. Site web de recherche de Cocktails, avec leurs recettes.",
      modalDesc:
        "Site de recherche de Cocktails, avec leurs recettes. Cas d'école pour apprendre à faire des call API. Stack : ReactJS.",
      img: logoP2,
      imgs: [cocktail1, cocktail2, cocktail3],
      alt: "Logo photo cocktail",
    },
    {
      id: 4,
      title: "Ecolo KIDS",
      desc: "Hackathon 48h : Sensibiliser les enfants au 'Do It Yourself'.",
      modalDesc:
        "Sensibiliser les enfants au DIY avec des idées d'activités ludiques. Stack : ReactJS, NodeJS, MySQL, Prisma, ChakraUI.",
      img: logoKids,
      imgs: [kids1, kids2, kids3, kids4],
      alt: "Logo Ecolo KIDS",
    },
    {
      id: 5,
      title: "Plateforme APSIDE",
      desc: "Hackathon 72h : Plateforme interne entreprise pour une meilleure organisation/gestion. ",
      modalDesc:
        "Création d'une placeteforme interne pour centraliser l'attribution des tâches de chacun. Stack : ReactJS, NodeJS, MySQL, Prisma, ChakraUI.",
      img: logoApside,
      imgs: [apside1, apside2, apside3, apside5, apside6, apside4],
      alt: "Logo photos APSIDE",
    },
  ];

  const onlineProjects: Projet[] = [
    {
      id: 1,
      title: "Deco-Evasion",
      desc: "Site vitrine d'une entrepreneuse de décoration.",
      modalDesc: "Deco evasion",
      img: decoevasion,
      imgs: [decoevasion, decoevasion],
      alt: "Logo DecoEvasion",
      url: "https://deco-evasion.fr/",
    },
    {
      id: 2,
      title: "Elodie Home Therapy",
      desc: "Site web et e-commerce d'article feng shui.",
      modalDesc: "Elodie Home Therapy",
      img: elodiehometherapy,
      imgs: [elodiehometherapy, elodiehometherapy],
      alt: "Logo ElodieHomeTherapy",
      url: "https://elodiehometherapy.fr/",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <h3 className="m-8 text-2xl font-bold">Sites en ligne</h3>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {onlineProjects.map((projet) => {
          return (
            <div key={projet.id}>
              <a href={projet.url} target="blank">
                <Image
                  src={projet.img}
                  alt={projet.alt}
                  width={400}
                  draggable={false}
                  height={300}
                  className="rounded-xl bg-white"
                />
              </a>
            </div>
          );
        })}
      </div>

      <h3 className="m-8 text-2xl font-bold">Projets GitHub</h3>
      <div className="absolute left-10 -z-10">
        <Blob width={"48"} height={"48"} />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2">
        {projets.map((projet) => {
          return (
            <div
              className="my-4  rounded-3xl bg-stone-100 bg-opacity-10  md:m-8"
              key={projet.id}
            >
              <div className="m-8 space-y-1">
                <h2 className="text-xl font-semibold">{projet.title}</h2>
                <h3>{projet.desc}</h3>
              </div>
              <div className="xl:mx-8 xl:my-12">
                <Swiper
                  grabCursor={true}
                  effect={"creative"}
                  creativeEffect={{
                    prev: {
                      shadow: true,
                      translate: [0, 0, -400],
                    },
                    next: {
                      translate: ["100%", 0, 0],
                    },
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[EffectCreative, Pagination]}
                  className="mySwiper"
                >
                  {projet.imgs.map((img, index) => {
                    return (
                      <SwiperSlide key={img.src + 1}>
                        <Image
                          src={img}
                          alt={`${projet.alt} ${index + 1}`}
                          width={1500}
                          height={800}
                          className="bg-[#292A29] p-4"
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
}

export default CarouselWeb;
