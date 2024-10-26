import React from "react";
import { Cover } from "@/components/ui/cover";
import Link from "next/link";
import { AnimatedShinyTextDemo } from "@/components/demos/animated-shiny-text-demo";

export function AboutHero() {
  return (
    <div>
      <div className="text-3xl md:text-6xl 
       font-semibold
        max-w-8xl 
        mx-auto 
        pt-[6rem]
        md:pt-[3.4rem]
        text-center 
        relative
         z-20 
         bg-clip-text
          text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        <Cover>  About Harvey Projects

        </Cover>
        <AnimatedShinyTextDemo />


        <div
          className="
                 flex 
                justify-center 
                  items-center 
                  gap-x-2
                  z-50
                 
                   "
        >
          <Link
            href="/meeting"
            className="
            py-2 
    px-5
   md:px-16
   text-[15px]
      md:text-xl
      hover:bg-[#abcbff] 
      rounded-[6px]
      border-2 
      border-black 
      dark:border-white 
       bg-[#121212] 
       text-white 
       transition 
       duration-200 
       hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
          >
            Get A Quote
          </Link>
          <Link
            href={"/showcase"}
            className="
              bg-white
                 text-gray-500
   py-2 
   md:px-10  px-5
   md:px-16
   text-[15px]
      md:text-xl
        border-4
        border-black
        rounded-[6px]
        hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
          >
            Call Now
          </Link>
        </div>
      </div>


    </div>
  );
}
