import { ClockIcon } from "@heroicons/react/24/outline";
import React from "react";

//import 'react-vertical-timeline-component/style.min.css';

export const Timeline = () => {
  return (
    <div className="w-full ">
      <div className=" max-w-7xl text-center px-10 py-16  flex flex-col   mx-auto p-0 ">
        <div className="flex gap-4 items-center mb-4 justify-center">
          <ClockIcon className="h-8 w-8 text-slate-400" />
          <h2 className=" md:text-2xl lg:text-3xl  font-inter font-semibold text-center  ">
            Timeline
          </h2>
        </div>

        <p className="text-xl text-center font-medium   mb-8">
          I love building things. Below are a few examples of tools and
          solutions I've created for my clients.
        </p>
      </div>
    </div>
  );
};
