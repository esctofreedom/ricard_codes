export const ButtonOne = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className=" w-full rounded-md py-2 px-6 my-4  bg-gradient-to-r whitespace-nowrap
        dark:from-green-500  dark:to-cyan-500 dark:hover:from-green-400 dark:hover:to-cyan-400
        from-purple-600  to-pink-500 hover:from-purple-500 hover:to-pink-400
        text-white font-bold uppercase  hover:shadow-lg transition ease-out transform hover:-translate-y-px "
    >
      {text}
    </button>
  );
};
