import { CssLogo } from "./logos/CssLogo"
import { DjangoLogo } from "./logos/DjangoLogo"
import { HtmlLogo } from "./logos/HtmlLogo"
import { JavascriptLogo } from "./logos/JavascriptLogo"
import { NextLogo } from "./logos/NextLogo"
import { PandasLogo } from "./logos/PandasLogo"
import { PostgresLogo } from "./logos/PostgresLogo"
import { PythonLogo } from "./logos/PythonLogo"
import { ReactLogo } from "./logos/ReactLogo"
import { TailwindLogo } from "./logos/TailwindLogo"
import { SkillItem } from "./SkillItem"

export const Skills = () => {
    return (
        <div className=" px-10 py-5 bg-trueGray-100 dark:bg-black flex flex-col max-w-5xl   mx-auto p-0">
            
            <h2 className="text-blueGray-700 dark:text-blueGray-400">My Skills</h2>
            <p className="text-blueGray-500 pb-4">As the saying goes, a man is only as good as his tools. These are mine:</p>


            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5">
                <SkillItem name='Python' logo = { <PythonLogo/> } description='Python is a modern programming language that lets you create anything.'/>    
                <SkillItem name='Django' logo = { <DjangoLogo/> }  description='Django is a python framework which gives me full control over the back-end.'/>    
                <SkillItem name='Pandas' logo = { <PandasLogo/> } description='Pandas is a super-clever package that unlocks powerful data science tools. Great for serious number-crunching. '/>    
                <SkillItem name='Postgres' logo = { <PostgresLogo/> } description='Postgres is a SQL database system to store information and retrieve it.'/>   
                <SkillItem name='Html' logo = { <HtmlLogo/> } description='The skeleton of a website or app. This is all there was in the 90s...'/>   
                <SkillItem name='CSS' logo = { <CssLogo/> } description='If Html is the skeleton, CSS makes it pretty - flesh, skin... even a dress!'/>   
                <SkillItem name='Javascript' logo = { <JavascriptLogo/> } description='Javascript takes Html and CSS and gives it life! It allows me to create any interactions I need.'/>   

                <SkillItem name='React' logo = { <ReactLogo/> } description="A Javascript framework created by Facebook. It's specifially made to build user interfaces such as website or dashboards."/>   
                <SkillItem name='Next.js' logo = { <NextLogo/> } description='Next.js takes React to the next (pun intended) level and creates blazing-fast websites and apps.'/>   

                <SkillItem name='Tailwind' logo = { <TailwindLogo/> } description='A modern css toolset that makes me much quicker at building pretty things!'/>   
         
            </div>


        </div>
    )
}
