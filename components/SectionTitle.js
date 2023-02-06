export const SectionTitle = ({ title, description, Logo }) => {
  return (
    <>
      <div className="flex gap-4 items-center mb-4 mt-12 justify-center">
        <Logo className="h-8 w-8 text-slate-400" />
        <h2 className=" text-2xl md:text-2xl lg:text-3xl  font-inter font-semibold text-center  ">
          {title}
        </h2>
      </div>

      <p className="text-lg md:text-xl text-center font-medium   mb-8 max-w-3xl mx-auto">
        {description}
      </p>
    </>
  );
};
