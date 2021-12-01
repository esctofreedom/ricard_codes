import { useEffect, useState } from "react"
import { Dark } from "./Dark"

export const Header = () => {

    const [headerBg, setHeaderBg] = useState(false)

    // Window is only accessible inside useEffect
    useEffect(() => {
    
        var onScroll = () => {
            
            window.scrollY >= 100 ? setHeaderBg(true) : setHeaderBg(false)
            return window.scrollY
          }
    
        window.addEventListener("scroll", onScroll);
    
        return onScroll
        
    }, [])
    


    return (
        <header className={`z-50 sticky top-0 px-4 bg-blueGray-100 dark:bg-black   backdrop-filter  backdrop-blur-lg  ${headerBg ? 'transition ease-in-out shadow-lg py-4 bg-opacity-80' : 'shadow-none py-4' }`}>

        <div className="flex w-full md:max-w-6xl min-w-min mx-auto ">

            <span className=" text-xl md:text-2xl font-inter text-transparent font-extrabold bg-clip-text bg-gradient-to-r 
      
            dark:from-green-500  dark:to-cyan-500 
            from-purple-600  to-pink-500 
            ">Ricard Codes</span>

            <div className=" ml-4    flex-grow cursor-pointer">
                <Dark />   
            </div>

        </div>
        </header>
    )
}
