import Link from "next/link";

type Links = {
  id: number;
  href: string;
  text: string;
};

function Navbar() {
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
      <div className="m-4 mx-auto flex w-10/12 flex-col items-center justify-between rounded-full bg-stone-100 bg-opacity-10 px-2 md:w-3/4 md:w-2/3 md:flex-row lg:px-4">
        <div>
          <div className="flex items-center px-2 py-2 md:py-4 md:px-0">
            <a href="#">
              <h2 className="select-none rounded-full p-2 text-xl font-bold text-white duration-300 hover:bg-stone-600 hover:text-[#A5FB89] lg:text-2xl">
                Sylvain LEGUAY
              </h2>
            </a>
          </div>
        </div>
        <div>
          <ul className="mb-2 flex flex-row space-x-0 p-2 duration-300 md:mb-0 lg:space-x-10">
            {navLinks.map((link) => {
              return (
                <li key={link.text}>
                  <Link
                    href={link.href}
                    scroll={false}
                    className="text-l  scroll-smooth rounded-full p-2 duration-300 hover:bg-stone-600 hover:text-[#A5FB89] focus:bg-stone-900 focus:text-[#A5FB89] md:m-0 md:p-2 lg:p-3"
                  >
                    {link.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
