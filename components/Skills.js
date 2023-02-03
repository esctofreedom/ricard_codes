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
import { techItems } from "./TECHITEMS";

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
          {techItems.map((item) => (
            <NewSkillItem
              name={item.name}
              Logo={item.logo}
              description={item.description}
            />
          ))}

          {/* React Native */}

          {/* Photoshop */}
          {/* Figma */}
        </div>
      </div>
    </div>
  );
};
