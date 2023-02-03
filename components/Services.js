import {
  BeakerIcon,
  BriefcaseIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { ConstructionEmoji } from "./emojis/ConstructionEmoji";
import { DeveloperEmoji } from "./emojis/DeveloperEmoji";
import { HeartEmoji } from "./emojis/HeartEmoji";
import { LoveFaceEmoji } from "./emojis/LoveFaceEmoji";
import { PaintEmoji } from "./emojis/PaintEmoji";
import { ServiceCard } from "./ServiceCard";

export const Services = () => {
  return (
    <div
      className=" w-full   py-8   flex-col  mx-auto bg-gradient-to-b from-white to-white dark:from-black dark:to-slate-900"
      id="services "
    >
      <div className="max-w-6xl mx-auto my-12">
        <div className="flex gap-4 items-center mb-4 justify-center">
          <BriefcaseIcon className="h-8 w-8 text-slate-400" />
          <h2 className=" md:text-2xl lg:text-3xl  font-inter font-semibold text-center  ">
            Services
          </h2>
        </div>

        <p className="text-xl text-center font-medium   mb-8 max-w-3xl mx-auto">
          As a founder of 2 SaaS companies, I bring a rare offer to the table:
          technical and design expertise with a deep understanding of an owner's
          mindset.
        </p>

        <div className="w-full grid gap-8 grid-cols-1 md:grid-cols-3">
          <ServiceCard
            name="Product Design"
            Emoji={PaintEmoji}
            list={[
              "Responsive & Mobile Websites",
              "Mobile apps",
              "Animations",
              "SaaS Applications",
              "And more...",
            ]}
          />
          <ServiceCard
            name="Front End Development"
            Emoji={DeveloperEmoji}
            list={[
              "Responsive & Mobile Websites",
              "Mobile apps",
              "Animations",
              "SaaS Applications",
              "And more...",
            ]}
          />
          <ServiceCard
            name="Back End Development"
            Emoji={ConstructionEmoji}
            list={[
              "Responsive & Mobile Websites",
              "Mobile apps",
              "Animations",
              "SaaS Applications",
              "And more...",
            ]}
          />
          {/* React Native */}

          {/* Photoshop */}
          {/* Figma */}
        </div>
      </div>
    </div>
  );
};
