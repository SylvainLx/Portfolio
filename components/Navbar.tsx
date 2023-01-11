import React, { useState } from "react";
import Link from "next/link";

type Links = {
  id: number;
  href: string;
  text: string;
};

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const navLinks: Links[] = [
    {
      id: 2,
      href: "#description",
      text: "Description",
    },
    {
      id: 3,
      href: "#projets",
      text: "Projets",
    },
    {
      id: 4,
      href: "#contact",
      text: "Contact",
    },
  ];

  return (
    <nav>
      <div className="mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl">
        <div>
          <div className="flex items-center justify-between py-3 md:block md:py-5">
            <a href="#">
              <h2 className="text-2xl font-bold  text-white duration-300 hover:text-yellow-500">
                Sylvain LEGUAY
              </h2>
            </a>
            <div className="md:hidden">
              <button
                className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pt-4 pb-3 transition-all duration-300 md:mt-0 md:block md:pt-0 md:pb-0 ${
              navbar
                ? "absolute z-20 -ml-4 block w-screen scroll-smooth  bg-[#383331] pl-5"
                : "hidden"
            } `}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-20 md:space-y-0">
              {navLinks &&
                navLinks.map((link) => {
                  return (
                    <li key={link.text}>
                      <Link
                        href={link.href}
                        scroll={false}
                        className="scroll-smooth text-xl duration-300 hover:text-yellow-500 focus:text-yellow-500 active:text-yellow-600"
                      >
                        {link.text}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
