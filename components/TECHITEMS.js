import { JavascriptLogo } from "./logos/JavascriptLogo";
import { TypescriptLogo } from "./logos/TypescriptLogo";
import { ReactLogo } from "./logos/ReactLogo";
import { NextLogo } from "./logos/NextLogo";
import { TailwindLogo } from "./logos/TailwindLogo";
import { PythonLogo } from "./logos/PythonLogo";
import { DjangoLogo } from "./logos/DjangoLogo";
import { PandasLogo } from "./logos/PandasLogo";
import { PostgresLogo } from "./logos/PostgresLogo";
import { CssLogo } from "./logos/CssLogo";
import { SupabaseLogo } from "./logos/SupabaseLogo";
import { NodeJsLogo } from "./logos/NodeJsLogo";
import { PrismaLogo } from "./logos/PrismaLogo";
import { ReactQueryLogo } from "./logos/ReactQueryLogo";

// return json
export const techItems = [
  {
    name: "Javascript",
    logo: JavascriptLogo,
    description:
      "Javascript takes Html and CSS and gives it life! It allows me to create any interactions you need.",
  },

  {
    name: "Typescript",
    logo: TypescriptLogo,
    description:
      "Typescript is a type-safe version of Javascript that's quickly becomign the defacto.",
  },
  {
    name: "React",
    logo: ReactLogo,
    description:
      "A Javascript framework created by Meta - made to build user interfaces such as website or dashboards.",
  },
  {
    name: "Next.js",
    logo: NextLogo,

    description:
      "Next.js takes React to the next (pun intended) level and creates blazing-fast experiences.",
  },
  {
    name: "Tailwind",
    logo: TailwindLogo,
    description:
      "A modern css toolset that makes me much quicker at building pretty things!",
  },
  {
    name: "Python",
    logo: PythonLogo,
    description:
      "Python is a modern programming language that lets you create anything.",
  },
  {
    name: "Django",
    logo: DjangoLogo,

    description:
      "Django is a python framework which gives me full control over the back-end.",
  },
  {
    name: "Pandas",
    logo: PandasLogo,

    description:
      "Pandas is a possibly the best data science tool. Great for serious number-crunching.",
  },
  {
    name: "Postgres",
    logo: PostgresLogo,
    description:
      "Postgres is a relational SQL database system to store information and retrieve it.",
  },
  //   {/* {
  //     name:"Html"
  //     logo:{<HtmlLogo />}
  //     description:"The skeleton of a website or app. This is all there was in the 90s..."
  // } */}
  {
    name: "CSS",
    logo: CssLogo,
    description:
      "If Html is the skeleton, CSS makes it pretty - flesh, skin... even a dress!",
  },

  {
    name: "Supabase",
    logo: SupabaseLogo,
    description: "A database-as-a-service takes minutes to set up",
  },

  {
    name: "Node JS",
    logo: NodeJsLogo,
    description: "A database-as-a-service takes minutes to set up",
  },

  {
    name: "Prisma",
    logo: PrismaLogo,
    description:
      "Prisma allows interaction between an API and the frontend in the simplest way possible.",
  },

  {
    name: "React Query",
    logo: ReactQueryLogo,
    description:
      "AKA Tanstack Query, it's a great way to handle data fetching and caching in React.",
  },
];
