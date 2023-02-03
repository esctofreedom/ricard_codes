export const ButtonOne = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className=" w-full rounded-md py-2 px-6   bg-gradient-to-r whitespace-nowrap
        dark:from-green-500  dark:to-emerald-600 dark:hover:from-green-400 dark:hover:to-emerald-500
        from-purple-500  to-purple-600 hover:from-purple-400 hover:to-purple-500
        text-white font-bold uppercase  hover:shadow-lg transition ease-out transform hover:-translate-y-px "
    >
      {text}
    </button>
  );
};
