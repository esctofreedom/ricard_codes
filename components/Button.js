export const Button = ({ text, onClick, href, isOutline, Logo }) => {
  console.log("the href is: ", href);

  const buttonClasses = isOutline
    ? `border-2 border-slate-500 text-slate-500 hover:border-purple-600 hover:text-purple-600 dark:hover:border-emerald-400 dark:hover:text-emerald-400
  dark:border-slate-300 dark:text-slate-300`
    : ` bg-gradient-to-r dark:from-green-500  dark:to-emerald-600 dark:hover:from-green-400 dark:hover:to-emerald-500
  from-purple-500  to-purple-600 hover:from-purple-400 hover:to-purple-500
  text-white`;

  const Button = () => {
    return (
      <button
        onClick={onClick}
        className={` ${buttonClasses} w-full  flex justify-center   gap-2 items-center rounded-md py-2 px-6  whitespace-nowrap
      
         font-bold uppercase  hover:shadow-lg transition ease-out transform hover:-translate-y-px `}
      >
        {Logo && (
          <div className="h-5 w-5  ">
            {/* {logo} */}
            <Logo />
          </div>
        )}
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
