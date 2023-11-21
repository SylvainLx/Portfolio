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
    <footer
      id="contact"
      className="border-blue-gray-50 flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 overflow-hidden overflow-x-hidden border-t bg-gradient-to-t from-black px-8 py-6 md:justify-between"
    >
      <p color="blue-gray" className="font-normal">
        &copy; 2023 Sylvain LEGUAY
      </p>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        {Links.map((link) => {
          return (
            <li key={link.id}>
              <Link
                href={link.href}
                target={link.target}
                className="flex h-12 w-36 items-center justify-center rounded-full bg-[#A5FB89]  text-black shadow-md duration-300 hover:scale-110 hover:border-2 hover:shadow-lg  md:w-48"
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>

      <a href="#">
        <Image
          src={arrowUp}
          alt="backToTop"
          className="fixed right-3 bottom-20 z-40 scroll-smooth hover:scale-125 lg:right-12 lg:bottom-6"
          height={50}
          width={50}
          draggable={false}
        />
      </a>
    </footer>
  );
}

export default Contact;
