import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import Link from "next/link";

const works = [
  {
    background: "bg-gray-200",
    imageUrl: "/images/pool3.jpg",
   
  },
  {
    background: "bg-gray-200",
    imageUrl: "/demin/decking-min.png",
   
  },
  {
    background: "bg-gray-200",
    imageUrl: "/demin/mx2-min.png",
   
  },
  {
    background: "bg-gray-200",
    imageUrl: "/demin/pagoals-min.png",
   
  },
  {
    background: "bg-gray-200",
    imageUrl: "/demin/pooldecking-min.png",
   
  },
  {
    background: "bg-gray-200",
    imageUrl: "/demin/pagols2-min.png",
   
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/pool2.jpg",
   
  },
  {
    background: "bg-gray-200",
    imageUrl: "/demin/decking-min.jpg",
   
  },
  
  {
    background: "bg-gray-200",
    imageUrl: "/images/main-hero.jpg",
   
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/ww4.jpg",
   
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/img6.jpg",
   
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/p2.jpg",
    
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/mm.jpg",
    
  },
  

];

export function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="grid md:grid-cols-2 gap-8 mt-10 justify-items-center">
        {works.map(({ imageUrl }, idx) => (
          <BlurFade
            key={ imageUrl}
            delay={0.25 + idx * 0.05}
            inView
            className={`rounded-lg ${works[idx].background} p-4`}
          >
           
              <Image
                height={10000}
                width={10000}
                className="
                h-full md:h-[350px] w-full object-cover rounded-lg"
        
              
       
                src={imageUrl}
                alt={`Random stock image ${idx + 1}`}
              />
          
            
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
