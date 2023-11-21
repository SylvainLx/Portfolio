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
import masterwild3 from "../public/sreenProject/masterwild3.png";
import masterwild4 from "../public/sreenProject/masterwild4.png";
import masterwild5 from "../public/sreenProject/masterwild5.png";
import masterwild6 from "../public/sreenProject/masterwild6.png";
import masterwild7 from "../public/sreenProject/masterwild7.png";
import healthy1 from "../public/sreenProject/healthy1.png";
import healthy2 from "../public/sreenProject/healthy2.png";
import healthy3 from "../public/sreenProject/healthy3.png";
import decoevasion from "../public/sreenProject/decoevasion.png";

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

function Card() {
  const projets: Projet[] = [
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
      title: "HealthyLife Elodie",
      desc: "Site vitrine Healthy Life Elodie.",
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
        masterwild3,
        masterwild4,
        masterwild5,
        masterwild6,
        masterwild7,
      ],
      alt: "Logo MasterWild",
    },
    {
      id: 6,
      title: "Triangle project",
      desc: "Quizz avec plusieurs thèmes et un ranking.",
      modalDesc:
        "Création d'un quizz avec plusieurs thèmes et un ranking. Cas d'école pour découvrir l'environnement HTML, CSS et intro en JavaScript.",
      img: logoP1,
      imgs: [game1, game2, game3],
      alt: "Logo photo triangle",
    },
    {
      id: 7,
      title: "Cocktail Finder",
      desc: "Site web de recherche de Cocktails, avec leurs recettes.",
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
      desc: "Hackathon 72h : Plateforme interne entreprise. ",
      modalDesc:
        "Création d'une placeteforme interne pour centraliser l'attribution des tâches de chacun. Stack : ReactJS, NodeJS, MySQL, Prisma, ChakraUI.",
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
    <div className="flex flex-col overflow-hidden md:grid md:grid-cols-2 lg:p-10 2xl:grid-cols-3">
      {projets.map((projet) => {
        return (
          <div key={projet.id} className="overflow-hidden">
            {projet.url ? (
              <a
                className="m-6 flex flex-col items-center overflow-hidden rounded-lg border-2 border-stone-800 bg-[#655A4E] shadow-md duration-300 hover:scale-105 hover:bg-[#5C534A] md:h-56 md:max-w-xl lg:h-64 lg:flex-row"
                href={projet.url}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="rounded-t-lg object-contain p-1 md:h-2/5 md:w-2/5 md:max-w-md md:rounded-none md:rounded-l-lg"
                  height={150}
                  width={150}
                  src={projet.img}
                  alt={projet.alt}
                  draggable={false}
                />
                <div className="flex flex-col justify-between overflow-hidden text-ellipsis p-4 leading-normal">
                  <h2 className="select-none  pb-2 text-left text-2xl font-bold text-white">
                    {projet.title}
                  </h2>
                  <p className="select-none text-ellipsis text-left text-xl font-normal text-gray-300">
                    {projet.desc}
                  </p>
                </div>
              </a>
            ) : (
              <button
                className="m-6 flex flex-col items-center overflow-hidden rounded-lg border-2 border-stone-800 bg-[#655A4E] shadow-md duration-300 hover:scale-105 hover:bg-[#5C534A] md:h-56 md:max-w-xl lg:h-64 lg:flex-row"
                onClick={() => openModalProjects(projet.id)}
              >
                <Image
                  className="rounded-t-lg object-contain p-1 md:h-2/5 md:w-2/5 md:max-w-md md:rounded-none md:rounded-l-lg"
                  height={150}
                  width={150}
                  src={projet.img}
                  alt={projet.alt}
                  draggable={false}
                />
                <div className="flex flex-col justify-between overflow-hidden text-ellipsis p-4 leading-normal">
                  <h3 className="select-none  pb-2 text-left text-2xl font-bold text-white">
                    {projet.title}
                  </h3>
                  <p className="select-none text-ellipsis text-left text-xl font-normal text-gray-300">
                    {projet.desc}
                  </p>
                </div>
              </button>
            )}
            {showModal === projet.id && (
              <ModalProject
                openModalProjects={openModalProjects}
                title={projet.title}
                img={projet.imgs}
                modalDesc={projet.modalDesc}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Card;
