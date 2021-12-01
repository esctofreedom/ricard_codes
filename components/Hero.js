import { ButtonOne } from "./ButtonOne"
import Image from 'next/image'
import { useState } from "react"



export const Hero = () => {

    const [ricard, setRicard] = useState('/ricard_codes_test3.png')

    

    return (
        <div className="flex flex-col h-auto md:h-auto md:flex-row w-full md:max-w-5xl mx-auto p-0">
          
        {/* Title & Button Section */}
        <div className="w-full p-8 md:mx-6 md:w-2/4 h-auto flex flex-col md:flex-grow  md:pl-10 items-center md:items-start justify-center">



          <h1 className=' text-blueGray-800 dark:text-white text-3xl md:text-4xl lg:text-5xl  font-inter font-bold text-center md:text-left'>
            Hello! I'm Ricard. <br/> I <span className="text-red-500">❤️</span> to code
          </h1>

          <p className="text-blueGray-500 dark:text-blueGray-400 text-center font-medium text-lg md:text-left ">I help businesses create anything they can imagine</p>

          <div className="w-2/4 ">
          <ButtonOne text="Let's Talk?" onClick={ () => console.log('jeff')}/>

          </div>
         
        </div>

        {/* Ricard Image */}
        <div className="relative  w-3/4 mt-7 h-72 md:h-auto md:w-2/4 flex mx-auto flex-grow  justify-center">

        <div className="absolute bottom-0 md:top-5 h-3/4 w-3/4 animate-blob  rounded-full 
        bg-gradient-to-r from-purple-600 to-pink-600 dark:from-emerald-500 dark:to-cyan-600
        filter blur-md dark:blur-3xl  opacity-40 dark:opacity-70 "></div>
        
        <div className="hidden md:block">
            <div 
                onMouseEnter={() => setRicard("/ricard_codes_test3_eyes.png")}
                onMouseLeave={() => setRicard("/ricard_codes_test3.png")}
            >

            <Image src= {ricard}  height={500} width={500} />
            </div>

        </div>

        <div className=" object-scale-down block bottom-0 md:hidden overflow-y-hidden">
            <Image src= "/ricard_codes_test2.png"  height={350} width={350}   />
        </div>



        </div>

      
        </div>
    )
}
