import { CommandLineIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ButtonOne } from "./ButtonOne";
import { ButtonOutline } from "./ButtonOutline";
import { Dark } from "./Dark";

export const Header = () => {
  const [headerBg, setHeaderBg] = useState(false);

  // Window is only accessible inside useEffect
  useEffect(() => {
    var onScroll = () => {
      window.scrollY >= 100 ? setHeaderBg(true) : setHeaderBg(false);
      return window.scrollY;
    };

    window.addEventListener("scroll", onScroll);

    return onScroll;
  }, []);

  const router = useRouter();

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
        <div className="flex gap-8 items-center ">
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

          <ButtonOutline text="Contact" />

          <Dark />
        </div>
      </div>
    </header>
  );
};
