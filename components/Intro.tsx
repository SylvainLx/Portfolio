import Image from "next/image";
import React from "react";

import Js from "../public/languagesIcon/js.webp";
import TS from "../public/languagesIcon/ts.webp";
import Reacts from "../public/languagesIcon/react.webp";
import Css from "../public/languagesIcon/css.webp";
import Html from "../public/languagesIcon/html.webp";
import Mysql from "../public/languagesIcon/mysql.webp";
import Node from "../public/languagesIcon/node.webp";

function Intro() {
  const Img = [Html, Css, Js, Reacts, Node, TS, Mysql];

  return (
    <div className="h-[600px] w-screen bg-backgroundInto bg-cover shadow-2xl md:h-[750px]">
      <div className="align-center items-left flex flex-col p-12 leading-10 md:p-20 ">
        <h2 className="select-none text-4xl text-white  md:text-6xl">
          DEVELOPPEUR WEB
        </h2>
        <div className="flex flex-col p-4">
          <div className="m-2 grid grid-cols-3 md:grid-cols-4 lg:flex lg:flex-row">
            {Img.map((img) => {
              return (
                <div key={img.src}>
                  <Image
                    src={img}
                    alt="logo"
                    width={96}
                    draggable={false}
                    className="m-2 animate-fade-in-down space-x-2 rounded-lg object-cover p-2 shadow shadow-white md:m-4 lg:m-5"
                  />
                </div>
              );
            })}
          </div>
          <div className="m-5 hidden space-y-3 md:flex md:flex-col">
            <p className="-fade-in-right select-none  text-xl">
              HTML - CSS - SCSS
            </p>
            <p className="animate-fade-in-right2 select-none  text-xl">
              ReactJS - NodeJS
            </p>
            <p className="animate-fade-in-right3 select-none  text-xl">
              JavaScript - TypeScript
            </p>
            <p className="animate-fade-in-right4 select-none  text-xl">
              NextJS
            </p>
            <p className="animate-fade-in-right5 select-none  text-xl">
              MySQL - Prisma
            </p>
            <p className="animate-fade-in-right6 select-none  text-xl">
              MaterialUI - ChakraUI - TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
