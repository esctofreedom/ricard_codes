import { techItems } from "./TECHITEMS";

export const TechPill = ({ name }) => {
  // find image from techItems

  const item = techItems.find((item) => item.name === name);

  if (!item) {
    return null;
  }

  const Logo = item.logo;

  return (
    <div
      className="flex w-min text-left gap-2   items-center justify-center px-2 py-1 bg-white dark:bg-slate-700 dark:text-white 
    rounded-full border border-slate-300 dark:border-slate-700"
    >
      <div className="h-4 w-4 ">
        <Logo />
      </div>

      <span className="text-center text-xs  font-inter font-semibold  whitespace-nowrap">
        {item.name}
      </span>
    </div>
  );
};
