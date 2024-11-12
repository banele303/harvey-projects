import { BlurFadeDemo } from "@/components/demos/blur-fade-demo";
import Footer from "@/components/footer";
import Image from "next/image";
import backgroundImage from "@/public/images/main-hero.jpg"


import Navbar from "./ui/Navbar";
import FRQ from "../decking-services/FRQ";
import AboutHarvey from "./about-havery";



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








<AboutHarvey/>


<BlurFadeDemo/>
<FRQ/>
<Footer/>
    </div>
  );
};

export default AboutUS;
