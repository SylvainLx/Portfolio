import React from "react";

import Card from "./Card";

function Projets() {
  return (
    <div id="projets" className="m-8 mt-16 border-t-4 md:m-16 lg:m-48">
      <h1 className="mt-14 mb-8  select-none text-center font-mono text-4xl text-gray-100 md:mt-20 md:text-6xl">
        Projets
      </h1>
      <Card />
    </div>
  );
}

export default Projets;
