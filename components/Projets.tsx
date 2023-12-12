import React from "react";

import CarouselMobile from "./CarouselMobile";
import CarouselWeb from "./CarouselWeb";

import Blob from "./Blob";

function Projets() {
  return (
    <div id="projets" className="m-8 mt-16 border-t-4 md:m-16 lg:m-48">
      <h2 className="mt-14 mb-8  select-none text-center  text-4xl text-gray-100 md:mt-20 md:text-6xl">
        Conception iOS
      </h2>

      <CarouselMobile />
      <div className="absolute right-0 -z-10">
        <Blob width={"64"} height={"64"} />
      </div>
      <h2 className="mt-14 mb-8  select-none text-center  text-4xl text-gray-100 md:mt-20 md:text-6xl">
        Développement Web
      </h2>
      <CarouselWeb />
    </div>
  );
}

export default Projets;
