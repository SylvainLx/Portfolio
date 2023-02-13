import Link from "next/link";
import Image from "next/image";
import React from "react";

import arrowUp from "../public/arrowUp.png";

type BtnLink = { id: number; href: string; target?: string; name: string };

function Contact() {
  const Links: BtnLink[] = [
    {
      id: 1,
      href: "https://www.linkedin.com/in/sylvain-leguay/",
      target: "_blank",
      name: "LinkedIn",
    },
    {
      id: 2,
      href: "https://github.com/SylvainLx",
      target: "_blank",
      name: "GitHub",
    },
    {
      id: 3,
      href: "mailto:leguay.sylvain40@gmail.com",
      name: "Mail",
    },
    {
      id: 4,
      href: "tel:0783299535",
      name: "Téléphone",
    },
  ];

  return (
    <div
      id="contact"
      className="flex h-24 w-screen flex-row items-center justify-center space-x-2 overflow-hidden bg-gradient-to-t from-black pl-2 md:space-x-8 md:pl-6 lg:space-x-24 "
    >
      {Links &&
        Links.map((link) => {
          return (
            <Link
              key={link.id}
              href={link.href}
              target={link.target}
              className="flex h-12 w-48 items-center justify-center rounded-xl border-2 border-stone-800 bg-[#655A4E] text-center duration-300 hover:scale-110 hover:shadow-lg "
            >
              {link.name}
            </Link>
          );
        })}
      <a href="#">
        <Image
          src={arrowUp}
          alt="logo"
          className="fixed right-3 bottom-20 z-40 scroll-smooth hover:scale-125 lg:right-12 lg:bottom-8"
          height={50}
          width={50}
          draggable={false}
        />
      </a>
    </div>
  );
}

export default Contact;
