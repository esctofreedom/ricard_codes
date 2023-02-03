export const ButtonOutline = ({ text, onClick, href }) => {
  console.log("the href is: ", href);
  const Button = () => {
    return (
      <button
        onClick={onClick}
        className=" w-full rounded-md py-2 px-6   bg-transparent border-2 whitespace-nowrap
      border-slate-500 text-slate-500 hover:border-purple-600 hover:text-purple-600 dark:hover:border-emerald-400 dark:hover:text-emerald-400
      dark:border-slate-300 dark:text-slate-300
         font-bold uppercase  hover:shadow-lg transition ease-out transform hover:-translate-y-px "
      >
        {text}
      </button>
    );
  };

  if (!href) {
    console.log("no href");
    return <Button />;
  }

  console.log("has href");
  return (
    <a className="text-base" href={href}>
      <Button />
    </a>
  );
};
