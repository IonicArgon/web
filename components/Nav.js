import Link from "next/link";
import { useState } from "react";

// convert seasons to colours
function seasonToColour(season) {
  switch (season) {
    case 0:
      return "winter";
    case 1:
      return "spring";
    case 2:
      return "summer";
    case 3:
      return "autumn";
    default:
      return "black";
  }
}

const Nav = ({ seasonID }) => {
  let colour = seasonToColour(seasonID);

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <div id="navColor" className={"h-2 bg-" + colour}></div>
      <nav className="flex items-center justify-between flex-wrap bg-greyd px-20 py-4">
        <div className="flex items-center flex-shrink-0 mr-10">
          <span className="text-2xl">
            <text className="text-white">Ionic</text>
            <text className={"text-" + colour}>Argon</text>
          </span>
        </div>
        <div className="block md:hidden">
          <button id="navButton" className={"flex items-center px-3 py-2 text-" + colour + " border-" + colour + " border rounded hover:text-white hover:border-white transition ease-in-out duration-300"} onClick={handleClick}>
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
              </svg>
          </button>
        </div>
        <div id="navMenu" className={`${
          active ? "" : "hidden"
        } w-full block flex-grow md:flex md:items-center md:w-auto transform translate-y-1`}>
          <div className="text-m md:flex-grow">
            <Link href="/home">
              <a href="#responsive-header" className={"block mt-4 md:inline-block md:mt-0 text-" + colour + " hover:text-white mr-4 transition ease-in-out duration-300"}>
                Home
              </a>
            </Link>
            <Link href="/about">
              <a href="#responsive-header" className={"block mt-4 md:inline-block md:mt-0 text-" + colour + " hover:text-white mr-4 transition ease-in-out duration-300"}>
                About
              </a>
            </Link>
            <Link href="/portfolio">
              <a href="#responsive-header" className={"block mt-4 md:inline-block md:mt-0 text-" + colour + " hover:text-white mr-4 transition ease-in-out duration-300"}>
                Portfolio
              </a>
            </Link>
            <Link href="/contact">
              <a href="#responsive-header" className={"block mt-4 md:inline-block md:mt-0 text-" + colour + " hover:text-white mr-4 transition ease-in-out duration-300"}>
                Contact
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
