import React from "react";
import { Cover } from "@/components/ui/cover";
import { AnimatedShinyTextDemo } from "./animated-shiny-text-demo";
import Link from "next/link";
import { Button } from "@/app/about-us/ui/button";

export function CoverDemo() {
  return (
    <div>
      <div className="text-3xl md:text-6xl 
       font-semibold
        max-w-8xl 
        mx-auto 
        md:text-center 
        relative
         z-20 
         bg-clip-text
          text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        <Cover>  Decking Expects <br />  Solution for all Spaces

        </Cover>
        <AnimatedShinyTextDemo />


        <div
          className="
                 flex 
                  justify-center 
                  items-center 
                 md:gap-x-4 gap-x-2
                  z-50
                 
                   "
        >
          <Link
            href="/contact-us"
            className="py-3 
            px-4
            md:px-16
          text-[16px]

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
          <div className="md:ml-3 py-2 px-6  border-5 border-sky-900 cursor-pointer text-[19px] font-Poppins text-slate-200 font-bold">
            <a href="tel:+27 78 41 8819" className="lg:flex">
              Call Now

            </a>
          </div>
        </div>
      </div>


    </div>
  );
}
