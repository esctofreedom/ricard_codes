export const NewSkillItem = ({ name, description, Logo }) => {
  return (
    <div
      className="block border-t-4 border-transparent hover:border-purple-500 hover:shadow-2xl dark:hover:border-emerald-500 group relative
       bg-white dark:bg-slate-900 
    shadow-xl transition ease-in-out hover:rounded-t-none rounded-t-xl
  rounded-b-lg   p-3 lg:p-4 mx-1 my-1
  overflow-clip cursor-default
  "
    >
      {/* Normal */}
      <div className=" flex flex-col gap-4 h-full w-full md:group-hover:translate-y-36  transition ease-in-out  md:p-3">
        <div className="h-12 w-12 flex-grow mx-auto transition ease-in-out transform ">
          {/* {logo} */}
          <Logo />
        </div>
        <h4 className="text-center text-xs md:text-base  font-inter whitespace-nowrap">
          {name}
        </h4>
      </div>

      {/* Hover */}
      <div className="hidden md:flex absolute top-0 left-0  flex-col gap-4 h-full w-full opacity-0 group-hover:opacity-100  transition ease-in-out p-2">
        <div className="flex w-full  gap-2   items-center px-2">
          <div className="h-5 w-5 ">
            <Logo />
          </div>

          <h4 className="text-center text-sm  font-inter whitespace-nowrap">
            {name}
          </h4>
        </div>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
};
