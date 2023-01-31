import Image from "next/image";

export const Testimonial = ({ name, title, testimonial, image }) => {
  return (
    <div className="flex flex-col shadow-2xl rounded-md bg-white dark:bg-slate-800 p-6 text-center">
      <blockquote className="text-slate-400 text-lg">{testimonial}</blockquote>

      <div className="flex">
        {/* Image Left */}
        <Image src={image} height={50} width={50} className="rounded-full" />

        <div className="flex-grow flex flex-col text-left">
          <h3>{name}</h3>
          <p className="text-slate-400">{title}</p>
        </div>
      </div>
    </div>
  );
};
