import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

import ModalProject from "./ModalProject";

import healthyLife from "../public/logoEC2.png";
import logoMasterwild from "../public/sreenProject/logo-masterwild.png";
import kids1 from "../public/sreenProject/kids1.png";
import kids2 from "../public/sreenProject/kids2.png";
import kids3 from "../public/sreenProject/kids3.png";
import kids4 from "../public/sreenProject/kids4.png";
import apside1 from "../public/sreenProject/apside1.png";
import apside2 from "../public/sreenProject/apside2.png";
import apside3 from "../public/sreenProject/apside3.png";
import apside4 from "../public/sreenProject/apside4.png";
import apside5 from "../public/sreenProject/apside5.png";
import game1 from "../public/sreenProject/game1.png";
import game2 from "../public/sreenProject/game2.png";
import game3 from "../public/sreenProject/game3.png";
import cocktail1 from "../public/sreenProject/cocktail1.png";
import cocktail2 from "../public/sreenProject/cocktail2.png";
import cocktail3 from "../public/sreenProject/cocktail3.png";
import logoP1 from "../public/sreenProject/logo-p1.png";
import logoP2 from "../public/sreenProject/logo-p2.svg";
import logoApside from "../public/sreenProject/logo-apside.png";
import logoKids from "../public/sreenProject/logo-kids.png";
import masterwild1 from "../public/sreenProject/masterwild1.png";
import masterwild2 from "../public/sreenProject/masterwild2.png";
import masterwild3 from "../public/sreenProject/masterwild3.png";
import masterwild4 from "../public/sreenProject/masterwild4.png";
import masterwild5 from "../public/sreenProject/masterwild5.png";
import masterwild6 from "../public/sreenProject/masterwild6.png";
import masterwild7 from "../public/sreenProject/masterwild7.png";
import healthy1 from "../public/sreenProject/healthy1.png";
import healthy2 from "../public/sreenProject/healthy2.png";
import healthy3 from "../public/sreenProject/healthy3.png";

type Projet = {
  id: number;
  title: string;
  desc: string;
  img: StaticImageData;
  imgs: StaticImageData[];
  alt: string;
  url?: string;
};

function Card() {
  const projets: Projet[] = [
    {
      id: 1,
      title: "HealthyLife Elodie",
      desc: "Site vitrine visant à développer la visibilité dans le monde du numérique. Site en ligne",
      img: healthyLife,
      imgs: [healthy1, healthy2, healthy3],
      alt: "Logo HealthyLife",
    },
    {
      id: 2,
      title: "MasterWild",
      desc: "Projet d'école avec un vrai client, pour des Masterclass. Site en ligne",
      img: logoMasterwild,
      imgs: [
        masterwild1,
        masterwild2,
        masterwild3,
        masterwild4,
        masterwild5,
        masterwild6,
        masterwild7,
      ],
      alt: "Logo MasterWild",
    },
    {
      id: 5,
      title: "Triangle project",
      desc: "Premier cas d'école en HTML/CSS/JS, création d'un quizz avec plusieurs thèmes et un ranking",
      img: logoP1,
      imgs: [game1, game2, game3],
      alt: "Logo photo triangle",
    },
    {
      id: 6,
      title: "Cocktail Finder",
      desc: "Second cas d'école sous React, création d'un site grâce à une API",
      img: logoP2,
      imgs: [cocktail1, cocktail2, cocktail3],
      alt: "Logo photo cocktail",
    },
    {
      id: 3,
      title: "Ecolo KIDS",
      desc: "Premier hackathon site full stack en 48h pour but de sensibiliter les enfants au 'Do It Yourself'",
      img: logoKids,
      imgs: [kids1, kids2, kids3, kids4],
      alt: "Logo Ecolo KIDS",
    },
    {
      id: 4,
      title: "Plateforme APSIDE",
      desc: "Second hackathon site full stack en 72h, création d'une plateforme",
      img: logoApside,
      imgs: [apside1, apside2, apside3, apside4, apside5],
      alt: "Logo photos APSIDE",
    },
  ];

  const [showModal, setShowModal] = useState<number | undefined>(undefined);

  const openModalProjects = (id?: number): void => {
    if (showModal !== undefined) setShowModal(undefined);
    if (id !== undefined) setShowModal(id);
  };

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 lg:p-10 2xl:grid-cols-3 ">
      {projets.map((projet) => {
        return (
          <div key={projet.id}>
            <button
              className="m-6 flex flex-col items-center text-ellipsis rounded-lg border-2 border-stone-800 bg-[#655A4E] shadow-md duration-300 hover:scale-105 hover:bg-[#5C534A] md:h-56 md:max-w-xl lg:h-64 lg:flex-row"
              onClick={() => openModalProjects(projet.id)}
            >
              <Image
                className="m-1 h-48 w-48 rounded-t-lg object-contain md:h-2/5 md:w-2/5 md:max-w-md md:rounded-none md:rounded-l-lg"
                src={projet.img}
                alt={projet.alt}
              />
              <div className="flex flex-col justify-between overflow-hidden text-ellipsis p-4 leading-normal">
                <p className="overflow-scroll text-ellipsis pb-2 text-left text-2xl font-bold dark:text-white">
                  {projet.title}
                </p>
                <p className="overflow-scroll text-ellipsis pb-2 text-left font-normal text-gray-300">
                  {projet.desc}
                </p>
              </div>
            </button>
            {showModal === projet.id && (
              <ModalProject
                openModalProjects={openModalProjects}
                title={projet.title}
                img={projet.imgs}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Card;
