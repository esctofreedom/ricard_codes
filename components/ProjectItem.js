import Image from "next/image";
import {
  GlobeAltIcon,
  InformationCircleIcon,
  LightBulbIcon,
  MoonIcon,
  PlayIcon,
} from "@heroicons/react/solid";

export const ProjectItem = ({ name, img, description }) => {
  return (
    <div className="hidden md:block group relative bg-white dark:bg-blueGray-800 shadow-md hover:shadow-lg rounded-md md:p-6 p-8 lg:p-4 mx-1 my-1">
      <h4
        className="text-center text-blueGray-300 dark:text-blueGray-500  group-hover:text-blueGray-400
            transition ease-in-out transform group-hover:scale-110"
      >
        {name}
      </h4>

      <Image
        src={img}
        height={553}
        width={979}
        priority={true}
        className="transition ease-in-out group-hover:opacity-10"
      />

      <div
        className="absolute top-0 mt-16 opacity-0 transition ease-in-out group-hover:opacity-100
            hover:top-10 p-1 cursor-default"
      >
        <p className="text-md font-medium text-blueGray-500">{description}</p>
      </div>

      {/* tools */}

      <div className="w-full flex justify-center space-x-5 opacity-0 transition ease-in-out group-hover:opacity-100 ">
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
      </div>
    </div>
  );
};
