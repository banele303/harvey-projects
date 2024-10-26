'use client'
import { cn } from "@/lib/utils";
import AnimatedShinyText from "../magicui/animated-shiny-text";
import { FcGoogle } from "react-icons/fc";

export function AnimatedShinyTextDemo() {
  return (
    <div className="z-20 flex items-center md:justify-center py-[2rem] px-[2rem]">
      <div
        className={cn(
          "group rounded-sm md:rounded-full text-base bg-white text-white transition-all ease-in px-[1.4rem] py-[.8rem]" , 
        )}
      >
        <AnimatedShinyText className=" 
        items-center 
        justify-center 
         py-1 transition ease-out
          hover:text-neutral-600 
          hover:duration-300
           hover:dark:text-neutral-400">
          <div className="
          md:flex
          flex-col-reverse
          md:flex-row
          justify-between
          gap-x-6">
          ⭐{" "}   ⭐{" "}   ⭐{" "}   ⭐{" "}   ⭐
          <div className="flex items-center space-x-2 py-2 md:py-0">
          <FcGoogle className="h-6 w-6 " />
            <span className="text-yellow-600 hover:underline cursor-pointer z-10">
              4.8 stars 40+ google reviews
            </span>
          </div>
          </div>
        </AnimatedShinyText>
      </div>
    </div>
  );
}
