import React from "react";

export const NewSkillItem = ({ name, description, logo }) => {
  return (
    <div
      className="hidden md:block border-t-4 border-transparent hover:border-purple-500 hover:shadow-2xl dark:hover:border-emerald-500 group relative
       bg-white dark:bg-slate-900 
    shadow-xl transition ease-in-out hover:rounded-t-none rounded-t-xl
  rounded-b-lg  md:p-6 p-8 lg:p-4 mx-1 my-1
  overflow-clip cursor-default
  "
    >
      {/* Normal */}
      <div className=" flex flex-col gap-4 h-full w-full group-hover:translate-y-36  transition ease-in-out   p-3">
        <div className="h-12 w-12 flex-grow    mx-auto transition ease-in-out transform ">
          {logo}
        </div>
        <h4 className="text-center text-base  font-inter whitespace-nowrap">
          {name}
        </h4>
      </div>

      {/* Hover */}
      <div className="absolute top-0 left-0 flex flex-col gap-4 h-full w-full opacity-0 group-hover:opacity-100  transition ease-in-out p-2">
        <div className="flex w-full test-left gap-2   items-center px-2">
          <div className="h-5 w-5 ">{logo}</div>

          <h4 className="text-center text-base  font-inter whitespace-nowrap">
            {name}
          </h4>
        </div>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
};
