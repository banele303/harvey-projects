"use client";



import { CoverDemo } from "@/components/demos/cover-demo";
import backgroundImage from "@/public/images/decking-hero3.jpg"
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import { WordPullUpDemo } from "@/components/demos/word-pull-up-demo";
import BoxReveal from "@/components/magicui/box-reveal";
import NumberTicker from "@/components/magicui/number-ticker";

import Image from "next/image";

import { PiCheckBold } from "react-icons/pi";
import { Link as ScrollLink, Element } from "react-scroll";

import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/shooting-stars-demo";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import Services from "@/components/2ui/services";

import { DeckingTypes } from "./about-us/decking-types";
import Navbar from "./about-us/ui/Navbar";
import TheTestimonials from "@/components/2ui/testimonial";
import FRQ from "./decking-services/FRQ";
import Footer from "@/components/footer";
import ContactButtons from "./decking-services/contact-buttons";





export default function Home() {
  return (
    <div
      className="overflow-clip 
 inset-0 
 -z-10 h-full w-full  bg-[#fafafa]
  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
   bg-[size:14px_24px]"
    >
      <Image
        src={backgroundImage}
        alt="Hero Background"
        style={{ height: "550px" }}
        className="absolute inset-0 z-0 "
      />

      <Navbar />


      <ContactButtons />




      <main className="md:pb-10 pt-[5rem] md:pt-[9rem]">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">


          <div className="">

            <h1>
              <CoverDemo />
            </h1>

          </div>




          <div className="grid md:pt-[3rem] grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-[3rem] md:mt-16">
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Decking
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Balustrades
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                pergolas
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Pool Decking
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Borma
              </p>
            </BoxReveal>
          </div>

          <div className="md:flex items-center justify-between gap-y-4 my-10 gap-x-28 mx-auto">
            <div className="md:w-2/5">
              <h1 className="text-2xl font-medium text-gray-600 w-4/5">
                Trusted by South Africans
              </h1>

              <div className="flex my-6 gap-x-5 w-full">
                <div>
                  <h1 className="text-blue-500 text-3xl md:text-5xl">
                    <NumberTicker value={100} /> +
                    <p className="text-gray-500 text-sm md:text-md">
                      Happy Clients
                    </p>
                  </h1>
                </div>

                <div className="w-px bg-gray-300 self-stretch"></div>

                <div className="flex-1 min-w-0">
                  <h1 className="text-blue-500 text-3xl md:text-5xl whitespace-nowrap overflow-hidden">
                    <NumberTicker value={50} /> +
                    <p className="text-gray-500 text-sm md:text-md">
                      Projects Completed
                    </p>
                  </h1>
                </div>
              </div>
            </div>


          </div>
        </div>
      </main>









      <h3
        className="
           text-2xl md:text-4xl my-6 md:my-10 md:text-center px-[2rem] font-extrabold text-blue-300">

        WOODEN PATIO DECKING, PERGOLAS , BALUSTRADES & Borma
      </h3>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-2 mx-auto my-[3rem]">

        <div className="max-auto mx-[2rem] md:ml-[4rem]">

          <h3
            className="
           text-[16px] md:text-[17px] my-6 md:my-10  text-bold text-gray-500"
          >
            When it comes to customization in superior deck building, the deck company to call on is Synthetic Deck.  That is one of the reasons we are the number one choice in South Africa, we are focused on just working on deck building, deck repairs and services related to decks.
            <br />
            <br />


            You can feel secure knowing that every one of our crew members is as dedicated to perfection in craftsmanship and superior customer care. We take great pride in the work that we do and in this industry in general. This is all evident in the results that we are able to provide for each and every one of our customers.



          </h3>
          <p
            className="
           text-[16px] md:text-[17px] my-6 md:my-10  text-gray-500"
          >
            Our expertise lies in delivering a high level of pest management, creating pest-free environments conducive to comfortable living and peak performance. By eliminating diseases associated with pests, we ensure that residents can live comfortably and employees can perform at their optimum level.
          </p>


        </div>
        <div className="mx-auto pt-[5rem] px-[2rem]">
          <Image
            src={"/images/decking-hero4.jpg"}
            width={10000}
            height={10000}
            className=""
            alt="image"
          />
        </div>
      </section>













      <Element name="services">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto pt-[2rem]">
          <h1>
            <WordPullUpDemo />
          </h1>
          <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">

            Trusted. Experienced. Dedicated
          </p>


        </div>
      </Element>









      <Services />



      <section className="py-20">
        <ScrollBasedVelocityDemo />
      </section>

      <TheTestimonials />

      <Element name="guarentees">
        <ShootingStarsAndStarsBackgroundDemo />
      </Element>

      <div className="pt-[6rem]">
        <DeckingTypes />
      </div>


      <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <LetsMakeThingsHappenSection />
      </section>


      <FRQ />
      <Footer />
    </div>
  );
}
