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
          ? "transition ease-in-out shadow-lg py-4 bg-opacity-80"
          : "shadow-none py-4"
      }`}
    >
      <div className="flex w-full md:max-w-6xl min-w-min mx-auto items-center ">
        <span
          className=" text-xl md:text-2xl font-inter  text-transparent font-bold bg-clip-text bg-gradient-to-r 
      
            dark:from-green-500  dark:to-cyan-500 
            from-purple-600  to-pink-500 
            "
        >
          Ricard Codes
        </span>

        <div className="flex-grow"></div>

        {/* link to projects */}
        <div className="flex gap-8 items-center ">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills & Tools</a>

          <ButtonOutline
            text="Contact"
            onClick={() => router.push("/#contact")}
          />
          <Dark />
        </div>
      </div>
    </header>
  );
};
