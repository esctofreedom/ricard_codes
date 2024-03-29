import { CheckCircleIcon } from "@heroicons/react/24/outline";

export const ServiceCard = ({ name, Emoji, list }) => {
  return (
    <div className="bg-white dark:bg-slate-900 md:shadow-xl   rounded-lg py-4 px-8">
      <div className="flex flex-col items-center">
        <div className="text-4xl w-20 h-20">
          <Emoji />
        </div>
        <h3 className="text-xl font-bold my-2">{name}</h3>
      </div>
      <div className="flex md:flex-col flex-wrap gap-2 mt-4">
        {list.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <CheckCircleIcon className="h-5 w-5 text-purple-500 dark:text-emerald-500" />
            <p className="text-md font-medium">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
