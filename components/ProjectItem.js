import { TechPill } from "./TechPill";
import { Button } from "./Button";
import { GithubLogo } from "./logos/GithubLogo";

export const ProjectItem = ({
  name,
  tech,
  tagline,
  description,
  images,
  url,
  gitHub,
}) => {
  return (
    <div
      className={` min-h-[400px] md:min-h-[500px]   bg-white overflow-clip h-min dark:bg-slate-900 text-left md:flex 
      flex-col group relative  shadow-2xl rounded-md md:p-6 p-8 lg:p-8 mx-1 my-1`}
    >
      {/* Top Texts */}

      <div className="w-full relative flex-col md:grid md:grid-cols-8 gap-4 flex-grow">
        <div className="col-span-3 flex flex-col gap-2">
          <div className=" mb-6">
            {/* <div className="absolute h-full w-full rounded-full bg-red-100 top-0 left-0 rotate-45 -translate-y-2/4 z-0" /> */}

            <div className="w-full  mb-2 flex">
              <div className="flex-1 gap-2">
                {/* {tags?.map((tag) => (
              <Pill key={tag} text={tag} color={"bg-black z-10"} />
            ))} */}

                <h6 className="">{tagline}</h6>
              </div>

              {/* <div className=" gap-2 bg-blue-100 flex">
            {tech?.map((tech) => (
              <TechPill key={tech} name={tech} />
            ))}
          </div> */}
            </div>

            <h3
              className="  text-3xl mb-2
         "
            >
              {name}
            </h3>
          </div>

          {/* Mobile Images */}
          <div className="md:hidden w-full h-[300px] ">
            <div className="relative block flex-grow  w-full ">
              <div className="absolute z-30  -right-[30px]  -top-[20px]   border-4 border-slate-300 dark:border-slate-700  rounded-lg shadow-2xl overflow-clip h-[300px]">
                <img src={images.big && images.big} className=" " width={180} />
              </div>
              <div className="absolute  shadow-lg rounded-xl z-20 -left-[30px] overflow-clip h-[280px]">
                <img
                  src={images.small && images.small}
                  className=""
                  width={400}
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div
            className={` text-slate-800/70 font-medium text-base mb-4
      `}
          >
            {description?.map((desc) => (
              <div className="" key={desc}>
                <p className="md:text-lg text-base font-medium">{desc}</p>
                <br />
              </div>
            ))}
          </div>

          {/* Tech */}
          <h5 className="font-inter text-sm font-semibold text-slate-400">
            Tech used:
          </h5>

          <div className=" gap-2  flex flex-row w-full flex-wrap  h-auto">
            {tech?.map((tech) => (
              <TechPill key={tech} name={tech} />
            ))}
          </div>

          <div className="flex-grow" />

          {/* CTA */}
          <div className="flex gap-4">
            <div className="w-min">
              <Button text={"View Live"} href={url} />
            </div>

            {gitHub && (
              <div className="w-min">
                <Button
                  Logo={GithubLogo}
                  text={"View Github"}
                  href={gitHub}
                  isOutline={true}
                />
              </div>
            )}
          </div>
        </div>

        {/* Area for Images */}

        <div className="col-span-5 hidden md:block relative flex-grow  w-full  p-8">
          <img
            src={images.big && images.big}
            className=" absolute z-30  -right-[10px]  top-[150px]     rounded-lg shadow-2xl"
            width={250}
          />
          <img
            src={images.small && images.small}
            className="absolute  shadow-lg rounded-xl z-20"
            height={800}
          />
        </div>
      </div>
    </div>
  );
};
