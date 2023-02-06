import {
  Bars3Icon,
  CommandLineIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { useState } from "react";

import { Button } from "./Button";
import { Dark } from "./Dark";

export const Header = ({ showMobileMenu, setShowMobileMenu }) => {
  const [headerBg, setHeaderBg] = useState(false);

  // Window is only accessible inside useEffect
  // useEffect(() => {

  //   var onScroll = () => {
  //     window.scrollY >= 100 ? setHeaderBg(true) : setHeaderBg(false);
  //     return window.scrollY;
  //   };

  //   window.addEventListener("scroll", onScroll);

  //   return onScroll;
  // }, []);

  return (
    <header
      className={`z-50 sticky top-0 px-4 bg-white dark:bg-black   backdrop-filter  backdrop-blur-lg  ${
        headerBg
          ? "transition ease-in-out shadow-lg py-4 bg-opacity-70"
          : "shadow-none py-4"
      }`}
    >
      <div className="flex w-full md:max-w-6xl min-w-min mx-auto items-center ">
        <button
          onClick={() => {
            scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="flex gap-2 items-center  justify-center">
            <CommandLineIcon className="h-7 w-7 text-purple-600 dark:text-emerald-400" />
            <span
              className=" text-xl md:text-2xl font-inter  text-transparent font-bold bg-clip-text bg-gradient-to-r 
      
            dark:from-green-400  dark:to-cyan-500 
            from-purple-600  to-pink-500 
            "
            >
              Ricard Codes
            </span>
          </div>
        </button>

        <div className="flex-grow"></div>

        {/* link to projects */}
        <div className="md:flex gap-6 items-center hidden">
          <button
            onClick={() => {
              const target = document.querySelector("#projects");
              target.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            <a>Projects</a>
          </button>
          <button
            onClick={() => {
              const target = document.querySelector("#skills");
              target.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            <a>Skills & Tools</a>
          </button>

          <Button text="Contact" href="mailto:ricard@ricardcodes.com" />

          <Dark />
        </div>

        <div className="flex md:hidden items-center gap-8">
          <Dark />
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="cursor-pointer hover:scale-110 transition ease-in-out"
          >
            {!showMobileMenu && (
              <Bars3Icon className="h-9 w-9 text-purple-600 dark:text-emerald-400" />
            )}
            {showMobileMenu && (
              <XMarkIcon className="h-9 w-9 text-purple-600 dark:text-emerald-400" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
