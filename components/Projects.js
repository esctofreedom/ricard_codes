import { MasonProjectItem } from "./MasonProjectItem";
import { ProjectItem } from "./ProjectItem";
import { Testimonial } from "./Testimonial";

export const Projects = () => {
  return (
    <div className=" px-10 py-5  flex flex-col   mx-auto p-0">
      <h2 className=" md:text-2xl lg:text-3xl  font-inter font-semibold text-center md:text-left mb-4">
        My Projects
      </h2>

      <p className="text-xl text-center font-medium  md:text-left mb-8">
        I love building things. Below are a few examples of tools and solutions
        I've created for my clients.
      </p>

      <div className="grid grid-cols-2 gap-8">
        <MasonProjectItem
          name="Dividend Compass"
          img={"/dc-1.jpg"}
          description="Dividend Compass is a tool made for dividend investors. It's a software that allows the average investor to find great stocks, analyze them, and track them in a beautiful UI."
          color="bg-purple-500"
        />

        <Testimonial
          name="Ricard"
          title="Software Engineer"
          testimonial="I love building things. Below are a few examples of tools I've created."
          image="/ricard.jpg"
        />

        <ProjectItem
          name="Budget Calculator"
          img={"/dividend_compass.png"}
          description="Dividend Compass is a tool made for 
                dividend investors. It's a software that allows the average investor to find great stocks, analyze them, and track them in a beautiful UI."
        />
      </div>

      <div></div>
    </div>
  );
};
