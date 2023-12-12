"use client"

import React, { useState, useEffect } from "react";

import {
  ReactIcon,
  NodeIcon,
  SwiftIcon,
  HtmlIcon,
  MySQLIcon,
  NextIcon,
  CssIcon,
  JsIcon,
  TailwindIcon,
  FigmaIcon,
  GithubIcon,
  GitIcon,
  FirebaseIcon,
} from "./Icons";

function CircleIcons() {
  const icons = [
    <SwiftIcon key="Swift" />,
    <HtmlIcon key="HTML" />,
    <CssIcon key="CSS" />,
    <JsIcon key="JavaScript" />,
    <ReactIcon key="ReactJS" />,
    <NodeIcon key="NodeJS" />,
    <TailwindIcon key="TailwindCSS" />,
    <MySQLIcon key="MySQL" />,
    <NextIcon key="NextJS" />,
    <FigmaIcon key="Figma" />,
    <GithubIcon key="GitHub" />,
    <GitIcon key="Git" />,
    <FirebaseIcon key="Firebase" />,
  ];

  const [radius, setRadius] = useState(300);
  const [centerX, setCenterX] = useState(110);
  const [centerY, setCenterY] = useState(400);

  const [hoveredIcon, setHoveredIcon] = useState("Skills");

  useEffect(() => {
    function handleResize() {
      setRadius(window.innerWidth >= 768 ? 300 : 150);
      setCenterX(window.innerWidth >= 768 ? 110 : 160);
      setCenterY(window.innerWidth >= 768 ? 400 : 300);
    }

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const iconElements = icons.map((icon, index) => {
    const angle = (360 / icons.length) * index;
    const x = centerX + radius * Math.cos(angle * (Math.PI / 180));
    const y = centerY + radius * Math.sin(angle * (Math.PI / 180));

    return (
      <div
        key={icon.key}
        style={{
          top: `${y}px`,
          left: `${x}px`,
        }}
        className="absolute hover:scale-105"
        onMouseEnter={() => setHoveredIcon(String(icon.key))}
        onMouseLeave={() => setHoveredIcon("Skills")}
      >
        
        {icon}
      </div>
    );
  });

  return (
    <div className="relative h-[600px] md:h-[800px]">
      <div className="flex h-96 w-96 rounded-full ">
        {iconElements}
        <h3 className="absolute top-[320px] w-full items-center justify-center text-center align-middle text-xl duration-300 md:top-[450px] md:text-4xl">
          {hoveredIcon}
        </h3>
      </div>
    </div>
  );
}

export default CircleIcons;
