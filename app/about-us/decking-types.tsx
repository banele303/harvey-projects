"use client";

import React from "react";
import Pool from "../../public/images/pool3.jpg"
import Walldecking from "../../public/images/ww2.jpg"
import Decking from "../../public/images/main-hero.jpg"
import P1 from "../../public/images/p1.jpg"
import Lights from "../../public/images/img4.jpg"
import PP from "../../public/images/pp.jpg"

import { BackgroundGradient } from "./ui/background-gradient";
import { Button } from "./ui/button";
import Image from "next/image";


export function DeckingTypes() {
    return (
        <div className="">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-5 py-[2rem] px-[2rem]">

                <div className="">
                    <BackgroundGradient className="rounded-[22px] p-[2.3rem] sm:p-10 bg-white dark:bg-zinc-900">
                        <h3 className="text-[23px] leading-6 text-neutral-600 dark:text-neutral-400 ">
                        TRANSFORM YOU OUTDOOR LIVING SPACE WITH SYNTHETIC DECK
                        </h3>
                        <p className="text-md leading-7 text-neutral-600 dark:text-neutral-400 py-5">
                        Decking allows you to enhance any boring, lethargic entertainment area transforming it into an entertainers dream.
                        </p>
                        <Button />
                    </BackgroundGradient>
                </div>

                <div className="rounded-[22px] w-full h-[320px] md:h-[400px] p-4 sm:p-10 md:mt-[-2rem] ">
                    <Image
                        src={Decking}
                        alt="jordans"
                        height="500"
                        width="500"
                        className="h-[200px] md:object-contain rounded-md"
                    />


                </div>


            </section>




            {/* Secnd Bath*/}

            <section className="grid grid-cols-1 md:grid-cols-2 gap-5 py-[2rem] px-[2rem]">

<div className="">
    <BackgroundGradient className="rounded-[22px] p-[2.3rem] bg-white dark:bg-zinc-900">
        <h3 className="text-[23px] leading-6 text-neutral-600 dark:text-neutral-400 ">
        Wall Decking
        </h3>
        <p className="text-md leading-7 text-neutral-600 dark:text-neutral-400 py-5">
        We do wall cladding on outside wall and inside walls with Composite or Timber cladding.
        </p>
        <Button />
    </BackgroundGradient>
</div>

<div className="rounded-[22px] w-full h-[320px]  p-4 sm:p-10 items-center md:mt-[-5rem] ">
    <Image
        src={Walldecking}
        alt="jordans"
        height="500"
        width="500"
        className="h-[200px] rounded-md   md:h-[350px]"
    />


</div>


</section>
            {/* Thrid Bath*/}

            <section className="grid grid-cols-1 md:grid-cols-2 gap-5 py-[2rem] px-[2rem]">

<div className="">
    <BackgroundGradient className="rounded-[22px] p-[2.3rem] sm:p-10 bg-white dark:bg-zinc-900">
        <h3 className="text-[23px] leading-6 text-neutral-600 dark:text-neutral-400 ">
       Pool Decking
        </h3>
        <p className="text-md leading-7 text-neutral-600 dark:text-neutral-400 py-5">
   Huggie  decking is a hugely popular choice for decks big and small Pools. It&apos;s a completely natural product that is the result of years and years of growth. Seen by many as the only ‘real&apos; decking option, hardwood decking timber does call for maintenance, but is well worth the extra effort.
        </p>
        <Button />
    </BackgroundGradient>
</div>

<div className="rounded-[22px] w-full h-[320px] p-4 sm:p-10 ">
    <Image
        src={Pool}
        alt="jordans"
        height="500"
        width="500"
        className="h-[200px] md:object-contain rounded-md"
    />


</div>


</section>
            {/* Thrid Bath*/}

            <section className="grid grid-cols-1 md:grid-cols-2 gap-5 py-[2rem] px-[2rem]">

<div className="">
    <BackgroundGradient className="rounded-[22px] p-[2.3rem] sm:p-10 bg-white dark:bg-zinc-900">
        <h3 className="text-[23px] leading-6 text-neutral-600 dark:text-neutral-400 ">
       
SPC VINYL FLOORING 
        </h3>
        <p className="text-md leading-7 text-neutral-600 dark:text-neutral-400 py-5">
        &quote;Synthetic Core&quote; (SPC) flooring is far superior to the traditional luxury vinyl flooring tiles in all aspects, it outperforms on every criterium due to the &quote;Synthetic Core&quote; (SPC), it is totally waterproof, there is no expansion and contraction and due to the state of the art core it is far more stable under temperatures of over 60 degrees.
        </p>
        <Button />
    </BackgroundGradient>
</div>

<div className="rounded-[22px] w-full  p-4 sm:p-10 ">
    <Image
        src={P1}
        alt="jordans"
        height="500"
        width="500"
        className="h-[200px]  rounded-md"
    />


</div>


</section>
      
            {/* Thrid Bath*/}

            <section className="grid grid-cols-1 md:grid-cols-2 gap-5 py-[2rem] px-[2rem]">

<div className="">
    <BackgroundGradient className="rounded-[22px] p-[2.3rem] sm:p-10 bg-white dark:bg-zinc-900">
        <h3 className="text-[23px] leading-6 text-neutral-600 dark:text-neutral-400 ">
       
        REATING THE PERFECT OUT DOOR FEATURE
        </h3>
        <p className="text-md leading-7 text-neutral-600 dark:text-neutral-400 py-5">
        Pergolas are the perfect outdoor feature for Patios,Balcony&apos;s and Gardens making any wasted space look alive. Synthetic Deck has extensive experience in designing and building a unique trellis, pergola or arbor to fit the exterior needs of your home and your family.
        </p>
        <Button />
    </BackgroundGradient>
</div>

<div className="rounded-[22px] h-[320px] w-full p-4 sm:p-10 ">
    <Image
        src={PP}
        alt="jordans"
        height="500"
        width="500"
        className="h-[200px] md:object-contain rounded-md"
    />


</div>


</section>
            {/* Thrid Bath*/}

            <section className="grid grid-cols-1 md:grid-cols-2 gap-5 py-[2rem] px-[2rem]">

<div className="">
    <BackgroundGradient className="rounded-[22px] p-[2.3rem] sm:p-10 bg-white dark:bg-zinc-900">
        <h3 className="text-[23px] leading-6 text-neutral-600 dark:text-neutral-400 ">
       
        LIGHT UP THE WAY WITH DECK LIGHTS
        </h3>
        <p className="text-md leading-7 text-neutral-600 dark:text-neutral-400 py-5">
        Nothing Brings a deck alive like the nice ambient Deck Lighting. We do different colours Deck lights and also Garde lights
        </p>
        <Button />
    </BackgroundGradient>
</div>

<div className="rounded-[22px] h-[320px] w-full p-4 sm:p-10 ">
    <Image
        src={ Lights }
        alt="jordans"
        height="500"
        width="500"
        className="h-[200px] md:object-contain rounded-md"
    />


</div>


</section>




<section className="bg-black md:mx-[2rem] roundend-md py-[2rem] flex flex-col justify-center mx-auto md:px-[3rem] px-[1rem] items-center">
                <h3 className="text-white text-[22px] py-4 text-center">So what are you waiting for? CALL NOW or click the button below to get started on your Decking project!</h3>
           <Button/>
            </section>

        </div>

    );
}