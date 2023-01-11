import Image from "next/image";
import React from "react";

import Js from "../public/languagesIcon/js.png";
import TS from "../public/languagesIcon/typescript.png";
import Reacts from "../public/languagesIcon/react.png";
import Css from "../public/languagesIcon/css.png";
import Html from "../public/languagesIcon/html.png";
import Mysql from "../public/languagesIcon/mysql.png";
import Node from "../public/languagesIcon/node.png";

function Intro() {
  const Img = [Html, Css, Js, Reacts, Node, TS, Mysql];

  return (
    <div className="h-[600px] w-screen bg-backgroundInto bg-cover shadow-2xl md:h-[750px]">
      <div className="align-center items-left flex flex-col p-12 leading-10 md:p-20 ">
        <h2 className="text-4xl text-white md:text-6xl">DEVELOPPEUR WEB</h2>
        <div className="flex flex-col p-4">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:flex lg:flex-row">
            {Img.map((img) => {
              return (
                <div key={img.src}>
                  <Image
                    src={img}
                    alt="logo"
                    className="m-2 h-24 w-24 animate-fade-in-down space-x-2 rounded-lg p-1 shadow shadow-white md:m-4 lg:m-5"
                  />
                </div>
              );
            })}
          </div>
          <div className="m-5 hidden space-y-3 md:flex md:flex-col">
            <p className="animate-fade-in-right text-xl">HTML - CSS - SCSS</p>
            <p className="animate-fade-in-right2 text-xl">ReactJS - NodeJS</p>
            <p className="animate-fade-in-right3 text-xl">
              JavaScript - TypeScript
            </p>
            <p className="animate-fade-in-right4 text-xl">NextJS - MySQL</p>
            <p className="animate-fade-in-right5 text-xl">
              MaterialUI - ChakraUI - TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
