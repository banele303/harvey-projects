import { BlurFadeDemo } from "@/components/demos/blur-fade-demo";
import Footer from "@/components/footer";
import WordFadeIn from "@/components/magicui/word-fade-in";
import ShowcaseNavbar from "@/components/showcase-navbar";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import Image from "next/image";
import Link from "next/link";
import backgroundImage from "@/public/images/main-hero.jpg"
import { AboutHero } from "./about-hero";
import { SecondSection } from "./second-section";
import { DeckingTypes } from "./decking-types";
import Navbar from "./ui/Navbar";



const AboutUS = () => {
  return (
    <div
      className="
        overflow-clip 
 inset-0 
 -z-10 h-full w-full bg-[#fafafa]
  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
   bg-[size:14px_24px] md:px-[2rem]"
   
    >
     
     
     
      <Image
        src={backgroundImage}
        alt="Hero Background"
        style={{   height:"500px"}} 
        className="absolute inset-0 z-0 "
      />

<Navbar/>








<AboutHero/>

<SecondSection/>

<BlurFadeDemo/>
    </div>
  );
};

export default AboutUS;
