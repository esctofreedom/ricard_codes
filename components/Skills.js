import { CssLogo } from "./logos/CssLogo";
import { DjangoLogo } from "./logos/DjangoLogo";
import { HtmlLogo } from "./logos/HtmlLogo";
import { JavascriptLogo } from "./logos/JavascriptLogo";
import { NextLogo } from "./logos/NextLogo";
import { PandasLogo } from "./logos/PandasLogo";
import { PostgresLogo } from "./logos/PostgresLogo";
import { PythonLogo } from "./logos/PythonLogo";
import { ReactLogo } from "./logos/ReactLogo";
import { TailwindLogo } from "./logos/TailwindLogo";
import { SkillItem } from "./SkillItem";

export const Skills = () => {
  return (
    <div className=" px-10 py-5   flex flex-col   mx-auto p-0  items-center justify-center">
      <h2 className=" md:text-2xl lg:text-3xl  font-inter font-semibold text-center md:text-left mb-4">
        My Skills & Tools
      </h2>

      <p className="text-xl text-center font-medium  md:text-left mb-8">
        As the saying goes, a man is only as good as his tools. These are mine:
      </p>

      <div className="w-full grid gap-4  grid-cols-1 md:grid-cols-4 lg:grid-cols-5">
        <SkillItem
          name="Python"
          logo={<PythonLogo />}
          description="Python is a modern programming language that lets you create anything."
        />
        <SkillItem
          name="Django"
          logo={
            <DjangoLogo className="fill-current dark:text-green-800 text-green-900" />
          }
          description="Django is a python framework which gives me full control over the back-end."
        />
        <SkillItem
          name="Pandas"
          logo={
            <PandasLogo className="fill-current dark:text-blueGray-300 text-sky-900" />
          }
          description="Pandas is a super-clever package that unlocks powerful data science tools. Great for serious number-crunching. "
        />
        <SkillItem
          name="Postgres"
          logo={<PostgresLogo />}
          description="Postgres is a SQL database system to store information and retrieve it."
        />
        <SkillItem
          name="Html"
          logo={<HtmlLogo />}
          description="The skeleton of a website or app. This is all there was in the 90s..."
        />
        <SkillItem
          name="CSS"
          logo={<CssLogo />}
          description="If Html is the skeleton, CSS makes it pretty - flesh, skin... even a dress!"
        />
        <SkillItem
          name="Javascript"
          logo={<JavascriptLogo />}
          description="Javascript takes Html and CSS and gives it life! It allows me to create any interactions I need."
        />
        <SkillItem
          name="React"
          logo={<ReactLogo />}
          description="A Javascript framework created by Facebook. It's specifially made to build user interfaces such as website or dashboards."
        />
        <SkillItem
          name="Next.js"
          logo={
            <NextLogo className="fill-current dark:text-blueGray-300 text-black" />
          }
          description="Next.js takes React to the next (pun intended) level and creates blazing-fast websites and apps."
        />
        <SkillItem
          name="Tailwind"
          logo={<TailwindLogo />}
          description="A modern css toolset that makes me much quicker at building pretty things!"
        />
      </div>
    </div>
  );
};
