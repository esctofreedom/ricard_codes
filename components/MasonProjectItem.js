import Image from "next/image";

import { Pill } from "./Pill";

export const MasonProjectItem = ({ name, img, description, color }) => {
  return (
    <div
      className={` h-full bg-white overflow-clip min-h-[650px] dark:bg-slate-800 text-left md:block group relative  shadow-2xl rounded-md md:p-6 p-8 lg:p-8 mx-1 my-1`}
    >
      {/* Top Texts */}
      <div className=" mb-6">
        {/* <div className="absolute h-full w-full rounded-full bg-red-100 top-0 left-0 rotate-45 -translate-y-2/4 z-0" /> */}
        <Pill text={"Financial App"} color={"bg-black z-10"} />
        <h3
          className=" text-slate-800 text-3xl font-inter z-10
          group-hover:text-blueGray-400
            transition ease-in-out transform "
        >
          {name}
        </h3>

        <p
          className={` text-slate-800/70 font-medium text-lg
      `}
        >
          some text that briefly explains project
        </p>
      </div>
      {/* <Image
        src={"/analyzer-1.jpg"}
        height={553}
        width={979}
        priority={true}
        //className="transition ease-in-out group-hover:opacity-10"
      /> */}

      <div className="relative flex-grow  w-full bg-red-100">
        <img
          src={"/portfolios-mobile.jpg"}
          className=" absolute z-30 -right-[50px] border border-slate-200  rounded-lg shadow-lg"
          width={250}
        />
        <img
          src={"/analyzer-1.jpg"}
          className="absolute  shadow-lg rounded-xl z-20 top-[20px]"
          height={800}
        />
      </div>

      {/* <div
        className="absolute top-0 mt-16 opacity-0 transition ease-in-out group-hover:opacity-100
            hover:top-10 p-1 cursor-default"
      >
        <p className="text-md font-medium text-blueGray-500">{description}</p>
      </div> */}

      {/* tools */}

      {/* <div className="w-full flex justify-center space-x-5 opacity-0 transition ease-in-out group-hover:opacity-100 ">
        <PlayIcon
          className="dark:text-green-500 text-purple-600 transform transition ease-in-out hover:scale-110 cursor-pointer"
          height={"2rem"}
          width={"2rem"}
        />
        <GlobeAltIcon
          className="dark:text-amber-500 text-amber-500 transform transition ease-in-out hover:scale-110 cursor-pointer"
          height={"2rem"}
          width={"2rem"}
        />
        <InformationCircleIcon
          className="dark:text-sky-600 text-pink-500 transform transition ease-in-out hover:scale-110 cursor-pointer"
          height={"2rem"}
          width={"2rem"}
        />
      </div> */}
    </div>
  );
};
