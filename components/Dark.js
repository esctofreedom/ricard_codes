import useDarkMode from "./useDarkMode";

import { LightBulbIcon, MoonIcon } from '@heroicons/react/outline'


export const Dark = () => {

  const [colorTheme, setTheme] = useDarkMode();

    return (
        <>
        {colorTheme === "light" ? (

            <button onClick={() => setTheme("light")} ><LightBulbIcon className ="text-yellow-300 transform transition ease-in-out hover:scale-110" height={'2rem'} width={'2rem'}/></button>

            

           
        ) : (
           
           
            <button  onClick={() => setTheme("dark")} ><MoonIcon className ="text-blueGray-600 transform transition ease-in-out hover:scale-110" height={'2rem'} width={'2rem'}/></button>
        )}


        </>
    );
}