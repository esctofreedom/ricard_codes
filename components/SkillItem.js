export const SkillItem = ({ name, description, logo }) => {
  return (
    <>
      <div className="hidden md:block group relative bg-white dark:bg-slate-800 shadow-md hover:shadow-lg rounded-md md:p-6 p-8 lg:p-4 mx-1 my-1">
        <h4
          className="text-center   group-hover:text-blueGray-400
            transition ease-in-out transform group-hover:translate-x-6"
        >
          {name}
        </h4>

        <div
          className="p-6 w-3/4 mx-auto transition ease-in-out transform group-hover:scale-50 
            group-hover:-translate-y-3/4 group-hover:-translate-x-1/2"
        >
          {logo}
        </div>

        <div
          className="absolute top-0 mt-16 opacity-0 transition ease-in-out group-hover:opacity-100
            hover:top-10 p-1 cursor-default"
        >
          <p className="text-sm font-light">{description}</p>
        </div>
      </div>

      {/* Small Screens */}

      <div className=" flex  md:hidden group items-center bg-white dark:bg-blueGray-800 shadow-md hover:shadow-lg rounded-md md:p-6 px-4 py-2 lg:p-4 mx-1 my-1">
        <div className=" w-20 ">{logo}</div>

        <div className="flex flex-col p-4">
          <h4 className="  text-blueGray-500 dark:text-blueGray-500 font-bold pb-0">
            {name}
          </h4>

          <p className="text-sm font-light">{description}</p>
        </div>
      </div>
    </>
  );
};
