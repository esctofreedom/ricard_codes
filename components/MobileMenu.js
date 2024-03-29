import Image from "next/image";
import { Button } from "./Button";

export const MobileMenu = ({ showMobileMenu, setShowMobileMenu }) => {
  return (
    // full screen menu for mobile
    <div className="fixed md:hidden top-0 left-0 w-full h-full bg-white/80 backdrop-blur-xl dark:bg-gray-900/80 z-40 ">
      <div className="relative flex flex-col items-center justify-center h-full ">
        <div className="flex flex-col gap-12">
          <button
            onClick={() => {
              setShowMobileMenu(!showMobileMenu);
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
              setShowMobileMenu(!showMobileMenu);
              const target = document.querySelector("#skills");
              target.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            <a>Skills & Tools</a>
          </button>

          <Button text="Contact" href="mailto:ricard@ricardcodes.com" />
        </div>

        <div className="absolute bottom-0  mx-auto flex items-end ">
          <Image
            src="/ricard_codes_test2.png"
            alt="Ricard Codes Logo"
            width={200}
            height={205}
          />
        </div>
      </div>
    </div>
  );
};
