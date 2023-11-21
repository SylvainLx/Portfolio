import Image from "next/image";
import Link from "next/link";
import React from "react";

import photo from "../public/moi.jpg";
import { GithubIconLink, LinkedinIcon, GmailIcon, CvIcon } from "./Icons";

function Description() {
  return (
    <div
      id="description"
      className="relative mt-4 flex w-full flex-col justify-center overflow-x-hidden overflow-y-hidden lg:p-8"
    >
      <h1 className="my-8 mx-24 select-none overflow-x-hidden overflow-y-hidden text-4xl text-gray-100 md:text-6xl md:leading-normal">
        Bonjour ! Moi c&apos;est Sylvain
      </h1>
      <h2 className="mx-24 text-4xl text-white md:text-6xl">
        Développeur iOS & Web
      </h2>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/3">
          <div className="flex flex-col items-center space-y-12 p-12 md:space-y-0 lg:p-24 xl:flex-row xl:space-x-40">
            <div className="flex flex-col">
              <p className="w-full select-none p-4 text-xl md:pr-24">
                J&apos;ai 31 ans et papa de 3 enfants
              </p>
              <p className="w-full select-none p-4  text-xl md:pr-24">
                Ancien chef de rayon en grande distribution, j&apos;ai décidé de
                me reconvertir dans un domaine qui me plait depuis toujours : Le
                numérique.
              </p>
              <p className="w-full select-none p-4  text-xl md:pr-24">
                Après plusieurs formations dans le web et le mobile, je vous
                propose mes services pour la réalisation et la gestion de vos
                sites internet et application mobile iOS.
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
      <div className="mt-12 mb-4 flex flex-row justify-center space-x-24 text-black md:space-x-48">
        <Link
          href="mailto:leguay.sylvain40@gmail.com"
          className="flex h-24 w-24 flex-col items-center justify-center space-y-3 rounded-full bg-white shadow-lg shadow-[#A5FB89] duration-300 hover:scale-110 hover:border-2 hover:shadow-lg md:h-48  md:w-48 md:shadow-xl"
          aria-label="Me contacter par mail"
        >
          <GmailIcon />
          <p className="hidden md:flex">Me Contacter</p>
        </Link>
        <Link
          href="/SylvainLEGUAY_CV.pdf"
          download
          className="flex h-24 w-24 flex-col items-center justify-center space-y-3 rounded-full bg-white shadow-lg shadow-[#A5FB89] duration-300 hover:scale-110 hover:border-2 hover:shadow-lg md:h-48  md:w-48 md:shadow-xl"
          title="Télécharger mon CV au format PDF"
          aria-label="Télécharger mon CV au format PDF"
        >
          <CvIcon />
          <span className="sr-only">Télécharger mon CV au format PDF</span>
          <p className="hidden md:flex">Mon CV</p>
        </Link>
      </div>
    </div>
  );
}

export default Description;
