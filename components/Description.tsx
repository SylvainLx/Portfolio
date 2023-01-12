import Image from "next/image";
import Link from "next/link";
import React from "react";

import photoPerso from "../public/photoPerso.jpeg";

function Description() {
  return (
    <div
      id="description"
      className="relative mt-4 flex w-full flex-col items-center justify-center lg:p-8"
    >
      <h1 className="m-8 overflow-x-hidden font-mono text-4xl text-gray-100 md:text-6xl">
        Bonjour ! Moi c&apos;est <br className="block md:hidden" />
        <span className="relative ">
          <span className="text-brand-accent h-20 overflow-x-hidden whitespace-nowrap pt-2">
            Sylvain <span className="text-3xl md:text-5xl">👋</span>
          </span>
          <span className="cursor will-change absolute -bottom-0 left-0 -top-1 inline-block w-full animate-type overflow-x-hidden  bg-[#383331]"></span>
        </span>
      </h1>

      <div className="flex flex-col items-center space-y-12 p-12 md:space-y-0 lg:p-24 xl:flex-row xl:space-x-40">
        <Image
          src={photoPerso}
          alt="photo Sylvain Leguay"
          className="h-72 w-72 rounded-lg border-2 border-stone-800 shadow-lg shadow-stone-800 md:h-96 md:w-96 "
        />
        <div className="flex flex-col">
          <p className="w-full p-4 text-xl md:pr-24">
            Je me présente, j&apos;ai 30 ans, je suis en couple et papa de 3
            enfants.
          </p>
          <p className="w-full p-4 text-xl md:pr-24">
            Après 7 ans en tant que Chef de rayon dans la grande distribution,
            j&apos;ai décidé de me reconvertir dans un domaine qui me plait
            depuis toujours : Le numérique.
          </p>
          <p className="w-full p-4 text-xl md:pr-24">
            Issu d&apos;une formation à la Wild Code School, je vous propose mes
            services pour la réalisation et la gestion de vos sites internet :
            site vitrine, mobile, e-commerce, blog, application web.
          </p>
          <p className="w-full p-4 text-xl md:pr-24">
            En naviguant sur mon site, vous trouverez mes réalisations.
          </p>
        </div>
      </div>
      <div className="flex flex-row space-x-4 md:mt-12 md:space-x-48 ">
        <Link
          href="mailto:leguay.sylvain40@gmail.com"
          className="flex h-12 w-48 items-center justify-center rounded-xl border-2 border-stone-800 bg-[#655A4E] shadow-md duration-300 hover:scale-110 hover:border-2  hover:shadow-lg"
        >
          Me contacter
        </Link>
        <a
          href="/SylvainLEGUAY_CV.pdf"
          download
          className="flex h-12 w-48 items-center justify-center rounded-xl border-2 border-stone-800 bg-[#655A4E] text-center shadow-md duration-300 hover:scale-110 hover:border-2  hover:shadow-lg"
        >
          Plus d&apos;infos
        </a>
      </div>
    </div>
  );
}

export default Description;
