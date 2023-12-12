"use client";

import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import Modal from 'react-modal';


import {  pdfjs, Document, Page } from 'react-pdf';

import workerSrc from "../pdf-worker";

import Blob from "./Blob";
import photo from "../public/moi.jpg";
import { GithubIconLink, LinkedinIcon, GmailIcon, CvIcon } from "./Icons";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: "#000000",
  },
};

function Description() {
const [isOpen, setIsOpen] = useState(false);

function openModal() {
  setIsOpen(true);
}

function closeModal() {
  setIsOpen(false);
}

  return (
    <div
      id="description"
      className="relative mt-4 flex w-full flex-col justify-center overflow-hidden overflow-x-hidden overflow-y-hidden lg:p-8 "
    >
      <h1 className="my-8 mx-12 select-none text-4xl text-gray-100 md:mx-24 md:text-6xl md:leading-normal">
        Bonjour ! Moi c&apos;est Sylvain
      </h1>
      <h2 className="mx-12 text-4xl text-white md:mx-24 md:text-6xl">
        Développeur iOS & Web
      </h2>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/3">
          <div className="flex flex-col items-center space-y-12 p-12 md:space-y-0 lg:p-24 xl:flex-row xl:space-x-40">
            <div className="flex w-full select-none flex-col space-y-8 text-xl md:pr-24">
              <p>
                Ancien chef de rayon en grande distribution, j&apos;ai découvert
                ma véritable passion dans un domaine qui stimule ma curiosité
                depuis toujours : le numérique.
              </p>
              <p>
                Après avoir effectué une série de formations dédiées au web et
                au développement mobile, je me suis engagé dans une transition
                professionnelle passionnante. Aujourd&apos;hui, je vous offre
                mes services pour la création et la gestion de vos sites
                internet ainsi que le développement d&apos;applications mobiles
                iOS.
              </p>
              <p>
                Mon objectif essentiel est de vous accompagner de manière
                proactive, depuis la conception initiale jusqu&apos;à la mise en
                ligne, pour concrétiser pleinement vos projets.
              </p>
              <p>
                Je suis constamment attiré par l&apos;apprentissage continu,
                toujours à la recherche des dernières évolutions technologiques
                et des tendances émergentes. Ma motivation découle de ma volonté
                naturelle de comprendre en profondeur cet univers en constante
                évolution.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative h-72 w-72 md:mt-24 md:ml-0 md:h-96 md:w-96 xl:mt-0">
            <Image
              src={photo}
              alt="photo Sylvain Leguay"
              width={500}
              height={500}
              draggable={false}
              className="h-72 w-72 rounded-full object-cover object-center md:h-96 md:w-96"
            />

            <Link
              href="https://github.com/SylvainLx"
              aria-label="Lien vers mon profil GitHub"
              target="blank"
            >
              <div className="absolute top-0 left-0 mt-4 ml-4">
                <GithubIconLink />
                <span className="sr-only">GitHub Profile</span>
              </div>{" "}
            </Link>

            <Link
              href="https://www.linkedin.com/in/sylvain-leguay/"
              aria-label="Lien vers mon profil LinkedIn"
              target="blank"
            >
              <div className="absolute bottom-0 right-0 mb-4 mr-4">
                <LinkedinIcon />
                <span className="sr-only">LinkedIn Profile</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className=" absolute left-96 -z-10">
        <Blob width={"48"} height={"48"} />
      </div>

      <h2 className="mt-14 mb-8 select-none text-center text-3xl font-bold lg:mb-20 lg:mt-0">
        Ce que je privilégie
      </h2>
      <div className="mx-12 flex flex-col items-center justify-center gap-8 md:grid md:grid-cols-3 lg:mx-24">
        <div className="flex flex-col items-center justify-center text-center">
          <h3 className="flex h-28 w-28 items-center justify-center rounded-full  text-xl shadow-lg shadow-[#A5FB89] duration-300 md:h-40 md:w-40">
            Curiosité sans Limites
          </h3>
          <p className=" mt-4 text-xl">
            Chaque jour, je plonge dans le monde numérique, désireux de
            découvrir et de maîtriser les nouvelles avancées technologiques qui
            façonnent notre quotidien.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <h3 className="flex h-28 w-28 items-center justify-center rounded-full  text-xl shadow-lg shadow-[#A5FB89] duration-300 md:h-40 md:w-40">
            Souci du Détail
          </h3>
          <p className="mt-4 text-xl">
            J&apos;attache une grande importance à la précision. Chaque projet
            que j&apos;entreprends est méticuleusement conçu pour offrir une
            expérience utilisateur de qualité et répondre aux attentes élevées.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <h3 className="flex h-28 w-28 items-center justify-center rounded-full  text-xl shadow-lg shadow-[#A5FB89] duration-300 md:h-40 md:w-40">
            Passion et Engagement
          </h3>
          <p className=" mt-4 text-xl">
            Mon enthousiasme pour le développement web et mobile est une source
            inépuisable de motivation. C&apos;est cet enthousiasme qui me pousse
            à surpasser les attentes de chaque client, à chaque étape du projet.
          </p>
        </div>
      </div>

      <div className="mt-12 mb-24 flex flex-row justify-center space-x-24 md:space-x-48 lg:mt-36">
        <Link
          href="mailto:contact@sylvainleguay.fr"
          className="flex h-24 w-24 flex-col items-center justify-center space-y-3 rounded-full shadow-xl shadow-[#A5FB89] duration-300 hover:scale-110 hover:border-2 hover:shadow-lg md:h-48  md:w-48"
          aria-label="Me contacter par mail"
        >
          <GmailIcon />
          <p className="hidden md:flex">Me Contacter</p>
        </Link>
        <button
          onClick={() => openModal() }
          className="flex h-24 w-24 flex-col items-center justify-center space-y-3 rounded-full shadow-xl shadow-[#A5FB89] duration-300 hover:scale-110 hover:border-2 hover:shadow-lg md:h-48  md:w-48"
          title="Mon CV"
          aria-label="Mon CV"
          name="Mon CV"
        >
          <CvIcon />
          <span className="sr-only">Mon CV</span>
          <p className="hidden md:flex">Mon CV</p>
        </button>
        <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        >
         <Document file="./SylvainLEGUAY_CV.pdf">
          <Page
            pageNumber={1}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        </Document> 
        </Modal>   
      </div>
    </div>
  );
}

export default Description;
