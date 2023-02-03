import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export const Testimonial = ({ name, title, testimonial, image }) => {
  return (
    <div className="relative flex flex-col shadow-2xl rounded-md bg-white dark:bg-slate-900 p-6 text-center h-min ">
      <div className="w-full absolute -top-10 left-0 ">
        {" "}
        <img
          src={image}
          height={70}
          width={70}
          className="  mx-auto  rounded-full border-4 border-slate-200 dark:border-slate-600 my-2"
        />
      </div>

      <div className="">
        <div className="flex flex-col  mx-auto justify-center items-center  h-min mt-6 mb-4">
          <h3 className="text-lg p-0">{name}</h3>
          <p className="text-slate-500 font-semibold">{title}</p>
        </div>

        <blockquote className="text-slate-400 text-lg  text-center mx-auto ">
          "{testimonial}"
        </blockquote>

        <div className="mx-auto flex gap-2 my-4 w-min">
          <StarIcon className="h-6 w-6 text-yellow-400 mx-auto " />
          <StarIcon className="h-6 w-6 text-yellow-400 mx-auto" />
          <StarIcon className="h-6 w-6 text-yellow-400 mx-auto" />
          <StarIcon className="h-6 w-6 text-yellow-400 mx-auto" />
          <StarIcon className="h-6 w-6 text-yellow-400 mx-auto" />
        </div>
      </div>

      {/* <div className="flex gap-2 mx-auto">
      
        <img src={image} height={50} width={50} className="rounded-full" />

        <div className="flex-grow flex flex-col text-left">
          <h3 className="text-base">{name}</h3>
          <p className="text-slate-400">{title}</p>
        </div>
      </div> */}
    </div>
  );
};
