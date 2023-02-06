import { BeakerIcon } from "@heroicons/react/24/outline";
import { MasonProjectItem } from "./MasonProjectItem";
import { ProjectItem } from "./ProjectItem";
import { SectionTitle } from "./SectionTitle";
import { Testimonial } from "./Testimonial";

export const Projects = () => {
  return (
    <div className="section bg-slate-100 dark:bg-black" id="projects">
      <div className=" max-w-7xl text-center   flex flex-col   mx-auto p-0 ">
        <SectionTitle
          title="Projects"
          description="
            I love building things. Below are a few examples of solutions I've
            created for my clients (and myself)."
          Logo={BeakerIcon}
        />

        {/* Dividend Compass */}
        <ProjectItem
          name="Dividend Compass"
          tech={[
            "React",
            "Next.js",
            "Tailwind",
            "React Query",
            "Python",
            "Django",
            "Postgres",
            "Pandas",
          ]}
          // tags={["Financial App"]}
          tagline="Financial SaaS"
          images={{
            big: "/portfolios-mobile.jpg",
            small: "/portfolio-desktop.jpg",
          }}
          description={[
            `Dividend Compass is a SaaS made for dividend investors. It's a tool that allows the average investor to find great stocks, 
            analyze them, and track them in a beautiful UI.`,
            `It uses a backend using Python with Pandas for intensive data analysis, and Django to build an API. The frontend is built 
            with Next.js, and styled with Tailwind CSS. `,
            `This a fully functional SaaS with hundreds of users and customers, which is personally run and manage.`,
          ]}
          url="https://dividendcompass.com"
          gitHub="https://github.com/esctofreedom/DC2.0"
        />

        {/* Testimonials */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
          <Testimonial
            name="Will Petric"
            title="Founder & CEO - Rockify"
            testimonial="Ricard's development skills are top notch, but what we didn't expect just how good his designs were. Functional and beautiful, with great UX for our users."
            image="/testimonials/will_petric.jpg"
          />
          <Testimonial
            name="Lily La Rosa"
            title="Founder - Glitter Girls Burlesque"
            testimonial={`We needed a management system for out dance academy, and Ricard over-delivered. He was able to build a system that was easy to use, and is saving us dozens of hours per week.`}
            image="/testimonials/lily_la_rosa.jpg"
          />
          <Testimonial
            name="Peter Felton"
            title="Customer - Dividend Compass"
            testimonial={`I've been using Dividend Compass for a few months now, and it's been a great tool for my investing. I love the UI, 
            and the data analysis is superb. I highly recommend it.`}
            image="/testimonials/peter_felton.jpg"
          />
        </div>

        {/* How Old Were They */}

        <ProjectItem
          name="How Old Were They"
          tech={["React", "Next.js", "Tailwind"]}
          // tags={["Financial App"]}
          tagline="API Movie App"
          images={{
            small: "/howt-big.jpg",
            big: "/howt-small.jpg",
          }}
          description={[
            `A simple Next JS website that allows you to find out how old an actor or acrtress was when they filmed a movie. 
            This was a fun project that I built in one day which uses the Open Movie Database API.`,
          ]}
          url="https://howoldwerethey.vercel.app/"
          gitHub="https://github.com/esctofreedom/howoldwerethey"
        />

        <div></div>
      </div>
    </div>
  );
};
