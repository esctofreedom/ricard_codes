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
import { SectionTitle } from "./SectionTitle";
import { SkillItem } from "./SkillItem";
import { techItems } from "./TECHITEMS";

export const Skills = () => {
  return (
    <div className="section" id="skills">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title=" My Skills & Tools"
          description="As the saying goes, a man is only as good as his tools. These are
          mine:"
          Logo={WrenchScrewdriverIcon}
        />

        <div className="w-full grid gap-1 md:gap-4  grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
          {techItems.map((item) => (
            <NewSkillItem
              key={item.name}
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
