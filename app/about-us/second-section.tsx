import Link from "next/link";
import Image from "next/image";
export function SecondSection ( ) {
    return (
<div>
        <h3
            className="
           text-2xl md:text-4xl my-6  pt-[8rem] md:my-10 md:text-center px-[2rem] font-extrabold text-blue-300">

 WOODEN PATIO DECKING, PERGOLAS & BALUSTRADES
          </h3>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-2 mx-auto my-[3rem]">
     
        <div className="max-auto mx-[2rem] md:ml-[4rem]">
          
         
          <p
            className="
           text-xl md:text-xl my-6 md:my-10  text-gray-500"
          >
           When it comes to customization in superior deck building, the deck company to call on is Synthetic Deck.  That is one of the reasons we are the number one choice in South Africa, we are focused on just working on deck building, deck repairs and services related to decks. 
<br/>
<br/>


You can feel secure knowing that every one of our crew members is as dedicated to perfection in craftsmanship and superior customer care. We take great pride in the work that we do and in this industry in general. This is all evident in the results that we are able to provide for each and every one of our customers.

          </p>

          
        </div>
        <div className="mx-auto pt-[5rem] px-[2rem]">
          <Image
            src={"/demin/decking-min.png"}
            width={10000}
            height={10000}
            className=" roundend-md"
            alt="image"
          />
        </div>
      </section>

      </div>
    )
}
