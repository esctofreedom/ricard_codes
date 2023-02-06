import dayjs from "dayjs";
import { GithubLogo } from "./logos/GithubLogo";
import { LinkedInLogo } from "./logos/LinkedInLogo";
import { TwitterLogo } from "./logos/TwitterLogo";

const SocialButton = ({ name, url, Logo }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-slate-500 dark:text-white"
    >
      <button className=" group bg-slate-300 dark:bg-slate-700 hover:bg-purple-500 dark:hover:bg-emerald-500 rounded-full p-3 transition ease-in-out duration-200 items-center justify-center">
        <div className="h-6 w-6 text-slate-500 dark:text-white group-hover:text-white">
          <Logo />
        </div>
      </button>
    </a>
  );
};

export const Footer = () => {
  return (
    <div className="w-full p-12 bg-white dark:bg-slate-800">
      <div className="max-w-7xl flex mx-auto  items-center justify-center p-4">
        <div className="flex-col items-center justify-center">
          <div className=" flex items-center w-full justify-center text-slate-500">
            <p className="font-semibold text-lg">
              © {dayjs().format("YYYY")} Ricard Torres
            </p>
          </div>

          <div className="w-full flex items-center justify-center gap-4 p-4">
            <SocialButton
              name="Github"
              url="https://github.com/esctofreedom"
              Logo={GithubLogo}
            />
            <SocialButton
              name="Twitter"
              url="https://twitter.com/EscToFreedom"
              Logo={TwitterLogo}
            />
            <SocialButton
              name="LinkedIn"
              url="https://www.linkedin.com/in/ricard-torres-aa2b9226/"
              Logo={LinkedInLogo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
