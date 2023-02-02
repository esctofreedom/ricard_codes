export const SkillItem = ({ name, description, logo }) => {
  return (
    <>
      <div
        className="hidden md:block border-t-4 border-transparent hover:border-slate-200 group relative bg-white dark:bg-slate-800 
        shadow-xl hover:shadow-lg 
      rounded-b-lg  md:p-6 p-8 lg:p-4 mx-1 my-1
      overflow-clip
      "
      >
        {/* Hover */}
        <div className="h-full w-full bg-green-100   -translate-y-36 left-0 top-0 p-4">
          <div className=" flex  w-full bg-red-100 items-center justify-end gap-4">
            <div className="w-6 h-6">{logo}</div>
            <h4
              className=" text-base  
            transition ease-in-out   font-inter"
            >
              {name}
            </h4>
          </div>

          <div className="flex-grow py-2">
            <p className="text-sm font-light">{description}</p>
          </div>
        </div>
        {/* Normal */}
        <div className="h-full w-full bg-blue-200 group-hover:translate-y-36  transition ease-in-out  flex flex-col left-0 top-0 p-4">
          <h4
            className="text-center text-base  
            transition ease-in-out transform group-hover:hidden block font-inter"
          >
            {name}
          </h4>
          <div className="h-8 w-8 4 mx-auto transition ease-in-out transform ">
            {logo}
          </div>
        </div>

        {/* <div
          className="p-6 w-3/4 mx-auto transition ease-in-out transform group-hover:scale-[40%] 
            group-hover:-translate-y-[60%] group-hover:-translate-x-1/2"
        >
          {logo}
        </div> */}
        {/* 
        <div
          className="absolute top-0 mt-16 opacity-0 transition ease-in-out group-hover:opacity-100
            hover:top-10 p-1 cursor-default"
        >
          <p className="text-sm font-light">{description}</p>
        </div> */}
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
