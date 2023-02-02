import useDarkMode from "./useDarkMode";

import { LightBulbIcon, MoonIcon } from "@heroicons/react/24/outline";

export const Dark = () => {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <>
      {colorTheme === "light" ? (
        <button onClick={() => setTheme("light")} className="relative group">
          <div className="group-hover:opacity-100 opacity-40 absolute w-full h-full  bg-yellow-500 rounded-full p-2 blur-md"></div>
          <LightBulbIcon
            className="text-amber-400 group-hover:text-amber-200 transform transition ease-in-out hover:scale-110 "
            height={"2rem"}
            width={"2rem"}
          />
        </button>
      ) : (
        <button onClick={() => setTheme("dark")}>
          <MoonIcon
            className="text-slate-600 transform transition ease-in-out hover:scale-110"
            height={"2rem"}
            width={"2rem"}
          />
        </button>
      )}
    </>
  );
};
