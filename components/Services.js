import { BriefcaseIcon } from "@heroicons/react/24/outline";
import { ConstructionEmoji } from "./emojis/ConstructionEmoji";
import { DeveloperEmoji } from "./emojis/DeveloperEmoji";
import { HeartEmoji } from "./emojis/HeartEmoji";
import { LoveFaceEmoji } from "./emojis/LoveFaceEmoji";
import { PaintEmoji } from "./emojis/PaintEmoji";
import { SectionTitle } from "./SectionTitle";
import { ServiceCard } from "./ServiceCard";

export const Services = () => {
  return (
    <div
      className="section bg-gradient-to-b from-white to-white dark:from-black dark:to-slate-900"
      id="services"
    >
      <div className="max-w-6xl mx-auto ">
        <SectionTitle
          title="Services"
          description="As a founder of 2 SaaS companies, I bring a rare offer to the table: technical and design expertise with a deep understanding of an owner's mindset."
          Logo={BriefcaseIcon}
        />

        <div className="w-full grid gap-8 grid-cols-1 md:grid-cols-3">
          <ServiceCard
            name="Product Design & UI/UX"
            Emoji={PaintEmoji}
            list={[
              "User Interface Design",
              "Rapid Prototyping",
              "Customer Journey",
              "Brand Guidelines",
              "MVP Creation",
            ]}
          />
          <ServiceCard
            name="Front End Development"
            Emoji={DeveloperEmoji}
            list={[
              "Responsive & Mobile Websites",
              "Charts & Graphs",
              "Animations",
              "SaaS Applications",
              "Mobile Apps",
            ]}
          />
          <ServiceCard
            name="Back End Development"
            Emoji={ConstructionEmoji}
            list={[
              "Database Design",
              "User Authentication",
              "API Creation",
              "CRUD Operations",
              "Complex Data Analysis",
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
