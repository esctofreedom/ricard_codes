export const ButtonOutline = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className=" w-full rounded-md py-2 px-6 my-4  bg-transparent border-2 
      border-slate-500 text-slate-500 
      dark:border-slate-200 dark:text-slate-200
         font-bold uppercase  hover:shadow-lg transition ease-out transform hover:-translate-y-px "
    >
      {text}
    </button>
  );
};
