import { BeakerIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { CssLogo } from "./logos/CssLogo";
import { DjangoLogo } from "./logos/DjangoLogo";
import { HtmlLogo } from "./logos/HtmlLogo";
import { JavascriptLogo } from "./logos/JavascriptLogo";
import { NextLogo } from "./logos/NextLogo";
import { NodeJsLogo } from "./logos/NodeJsLogo";
import { PandasLogo } from "./logos/PandasLogo";
import { PostgresLogo } from "./logos/PostgresLogo";
import { PrismaLogo } from "./logos/PrismaLogo";
import { PythonLogo } from "./logos/PythonLogo";
import { ReactLogo } from "./logos/ReactLogo";
import { ReactQueryLogo } from "./logos/ReactQueryLogo";
import { SupabaseLogo } from "./logos/SupabaseLogo";
import { TailwindLogo } from "./logos/TailwindLogo";
import { TypescriptLogo } from "./logos/TypescriptLogo";
import { NewSkillItem } from "./NewSkillItem";
import { SkillItem } from "./SkillItem";

export const Skills = () => {
  return (
    <div className=" w-full   py-5   flex-col   mx-auto " id="skills">
      <div className="max-w-6xl mx-auto my-12">
        <div className="flex gap-4 items-center mb-4 justify-center">
          <WrenchScrewdriverIcon className="h-8 w-8 text-slate-400" />
          <h2 className=" md:text-2xl lg:text-3xl  font-inter font-semibold text-center  ">
            My Skills & Tools
          </h2>
        </div>

        <p className="text-xl text-center font-medium   mb-8">
          As the saying goes, a man is only as good as his tools. These are
          mine:
        </p>

        <div className="w-full grid gap-4  grid-cols-1 md:grid-cols-4 lg:grid-cols-7">
          <NewSkillItem
            name="Javascript"
            logo={<JavascriptLogo />}
            description="Javascript takes Html and CSS and gives it life! It allows me to create any interactions you need."
          />

          <NewSkillItem
            name="Typescript"
            logo={<TypescriptLogo />}
            description="Typescript is a type-safe version of Javascript that's quickly becomign the defacto."
          />
          <NewSkillItem
            name="React"
            logo={<ReactLogo />}
            description="A Javascript framework created by Meta - made to build user interfaces such as website or dashboards."
          />
          <NewSkillItem
            name="Next.js"
            logo={
              <NextLogo className="fill-current  text-black dark:text-slate-200" />
            }
            description="Next.js takes React to the next (pun intended) level and creates blazing-fast experiences."
          />
          <NewSkillItem
            name="Tailwind"
            logo={<TailwindLogo />}
            description="A modern css toolset that makes me much quicker at building pretty things!"
          />
          <NewSkillItem
            name="Python"
            logo={<PythonLogo />}
            description="Python is a modern programming language that lets you create anything."
          />
          <NewSkillItem
            name="Django"
            logo={
              <DjangoLogo className="fill-current dark:text-green-800 text-green-900" />
            }
            description="Django is a python framework which gives me full control over the back-end."
          />
          <NewSkillItem
            name="Pandas"
            logo={
              <PandasLogo className="fill-current dark:text-blueGray-300 text-sky-900" />
            }
            description="Pandas is a possibly the best data science tool. Great for serious number-crunching. "
          />
          <NewSkillItem
            name="Postgres"
            logo={<PostgresLogo />}
            description="Postgres is a SQL database system to store information and retrieve it."
          />
          {/* <NewSkillItem
            name="Html"
            logo={<HtmlLogo />}
            description="The skeleton of a website or app. This is all there was in the 90s..."
          /> */}
          <NewSkillItem
            name="CSS"
            logo={<CssLogo />}
            description="If Html is the skeleton, CSS makes it pretty - flesh, skin... even a dress!"
          />

          <NewSkillItem
            name="Supabase"
            logo={<SupabaseLogo />}
            description="A database-as-a-service takes minutes to set up"
          />

          <NewSkillItem
            name="Node JS"
            logo={<NodeJsLogo />}
            description="A database-as-a-service takes minutes to set up"
          />

          <NewSkillItem
            name="Prisma"
            logo={<PrismaLogo />}
            description="Prisma allows interaction between an API and the frontend in the simplest way possible."
          />

          <NewSkillItem
            name="React Query"
            logo={<ReactQueryLogo />}
            description="Recnetly rebranded as Tanstack Query, it's a great way to handle data fetching and caching in React."
          />

          {/* React Native */}
          {/* Supabase */}
          {/* Prisma */}
          {/* Photoshop */}
          {/* Figma */}
        </div>
      </div>
    </div>
  );
};
