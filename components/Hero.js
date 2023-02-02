import { ButtonOne } from "./ButtonOne";
import Image from "next/image";
import { useState } from "react";
import { ButtonOutline } from "./ButtonOutline";
import { Router, useRouter } from "next/router";

const Circles = ({ dimensions, children }) => {
  return (
    <div
      className={`relative ${dimensions}  z-10 flex items-center justify-center   `}
    >
      {/* <div className="absolute z-30 h-full w-full rounded-full  bg-gradient-to-b from-purple-400 to-pink-400 scale-[90%]"></div>
          <div className="absolute z-30 h-full w-full rounded-full  bg-gradient-to-b from-purple-900 to-pink-900 scale-[85%]"></div> */}

      <div className="absolute  h-full w-full rounded-full  bg-gradient-to-b from-purple-500 dark:from-emerald-500 to-white dark:to-black animate-spin1 "></div>

      <div className="absolute  h-[94%] w-[94%]  rounded-full  bg-gradient-to-r from-purple-400 dark:from-emerald-400 to-white dark:to-black animate-spin2  "></div>
      <div className="absolute  h-[90%] w-[90%] rounded-full  bg-gradient-to-b from-purple-700 dark:from-emerald-700 to-white dark:to-black animate-spin3"></div>

      <div className="absolute  h-[85%] w-[85%] rounded-full  bg-gradient-to-b from-purple-400 dark:from-emerald-400 to-white dark:to-black animate-spin4"></div>

      <div className=" absolute flex justify-center z-40 h-full w-full scale-[80%] rounded-full bg-white dark:bg-black">
        {children}
      </div>
    </div>
  );
};

export const Hero = () => {
  // const [ricard, setRicard] = useState("/ricard_codes_test3.png");

  const router = useRouter();

  return (
    <div className="w-full bg-gradient-to-b from-white to-slate-100 dark:from-black dark:to-slate-900">
      <div className="flex flex-col h-auto md:h-auto md:flex-row w-full md:max-w-7xl mx-auto p-0 ">
        {/* Title & Button Section */}
        <div className="w-full p-8 md:mx-6 md:w-2/4 h-auto flex flex-col md:flex-grow  md:pl-10 items-center md:items-start justify-center">
          {/* <p className="text-brand-text font-medium text-2xl mb-4">
          I'm a full-stack developer with a passion for design and user
          experience.
        </p> */}
          <h1 className=" md:text-3xl lg:text-5xl  font-inter font-semibold text-center md:text-left mb-4">
            Hello! I'm Ricard <br /> I <span className="text-red-500">❤️</span>{" "}
            to code
          </h1>

          <p className="text-2xl text-center font-medium  md:text-left">
            I help people and businesses create the perfect digital products for
            their needs.
          </p>

          <div className="flex gap-6">
            <ButtonOne
              text="Let's Talk"
              onClick={() =>
                // navigate to/#projects
                router.push("/#contact")
              }
            />
            <ButtonOutline
              text="My Work"
              onClick={() => router.push("/#projects")}
            />
          </div>
        </div>

        {/* Ricard Image */}
        <div className="relative  flex w-3/4 mt-7 h-[500px]   md:w-2/4  mx-auto flex-grow  justify-center">
          {/* <div
          className="absolute bottom-0 md:top-5 h-3/4 w-3/4 animate-blob  rounded-full 
        bg-gradient-to-r from-purple-600 to-pink-600 dark:from-emerald-500 dark:to-cyan-600
        filter blur-md dark:blur-3xl  opacity-40 dark:opacity-70 "
        ></div> */}

          <Circles dimensions={"h-[400px] w-[390px]"}></Circles>

          <div className=" absolute brightness-110  h-full z-30 scale-90 overflow-clip">
            {/* div that is hidden in normal mode and shown in dark */}
            <div className="hidden dark:block">
              <Image
                src={"/ricard-hey-tie-green.png"}
                height={500}
                width={505}
                priority={true}
              />
            </div>

            <div className="block dark:hidden">
              <Image
                src={"/ricard-hey-tie2.png"}
                height={500}
                width={505}
                priority={true}
              />
            </div>

            {/* if dar */}
          </div>

          <div className="hidden md:block">
            {/* <div
            onMouseEnter={() => setRicard("/ricard_codes_test3_eyes.png")}
            onMouseLeave={() => setRicard("/ricard_codes_test3.png")}
          >
            <Image src={ricard} height={500} width={500} priority={true} />
            
          </div> */}
          </div>

          <div className=" object-scale-down block bottom-0 md:hidden overflow-y-hidden">
            <Image src="/ricard_codes_test2.png" height={350} width={350} />
          </div>
        </div>
      </div>
    </div>
  );
};
