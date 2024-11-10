"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button"


import Link from "next/link";



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="">
      <div>
        <div
          className={
            scrolled
              ? "scrolled  bg-white items-center  mx-auto md:left-[10rem]  rounded-md w-full md:w-3/4 z-50 top-0 md:top-10  fixed drop-shadow-lg pt-[1.3rem] pb-[1.3rem] "
              : "z-50  bg-white top-0 md:top-10  md:left-[10rem] rounded-md w-full  md:w-3/4  fixed drop-shadow-lg  py-[1rem]  "
          }
        >
          <div className="px-2 flex justify-between items-center w-full h-full">
            <div className="flex items-center md:pl-6 realtive ">
             
              <Image src="/images/logo.jpg" alt="logo" className="py-[1rem] absolute w-[4rem] md:w-[4rem] h-[5rem] md:h-[5rem]" width={100} height={50} />
             
            </div>
            <div className="hidden md:flex pr-4">
              <ul className="hidden md:flex ">
                <li className="md:ml-3 py-3  text-[19px] font-Poppins  px-6  border-5 border-sky-900 cursor-pointer text-gray-800  font-bold">
                  <Link href="/">Home</Link>
                </li>
               
                
                <li className="md:ml-3 py-3 px-6 border-5 border-sky-900  text-[19px] font-Poppins cursor-pointer text-gray-800 font-bold">
                  <Link href="/about-us">About US</Link>
                </li>
                <li className="md:ml-3 py-3 px-6 border-5 border-sky-900  text-[19px] font-Poppins cursor-pointer text-gray-800 font-bold">
                  <Link href="/decking-services">Services</Link>
                </li>
                <li className="md:ml-3 py-3 px-6 border-5 border-sky-900  text-[19px] font-Poppins cursor-pointer text-gray-800 font-bold">
                  <Link href="/decking-services">Contact US</Link>
                </li>
               
                <li className="md:ml-3 py-2 px-6  border-5 border-sky-900 cursor-pointer text-[19px] font-Poppins text-slate-200 font-bold">
                  <a href="tel:+27 74 684 5729" className="lg:flex">
                  <Button variant="destructive"> Call Now +27 78 41 8819</Button>
            
          </a>
                </li>
              </ul>
              
            </div>
            <div className="md:hidden mr-4" onClick={handleClick}>
              {!nav ? (
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
             </svg>
             
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

              )}
            </div>
          </div>

          <ul
            className={
              !nav
                ? "hidden"
                : "scrolled absolute w-[250px] bg-white px-8 top-[5rem] right-[1rem] border-none rounded-md"
            }
          >
            <li className=" md:ml-3 py-3 px-6 font-Poppins border-5 border-sky-900 cursor-pointer text-gray-800 font-bold">
            <Link href="/">Home</Link>
            </li>
            
            <li className="md:ml-3 py-3 px-6 font-Poppins border-5 border-sky-900 cursor-pointer text-gray-800 font-bold">
            <Link href="/about-us">About us</Link>
            </li>
            <li className="md:ml-3 py-3 px-6 font-Poppins border-5 border-sky-900 cursor-pointer text-gray-800 font-bold">
            <Link href="/decking-services">Services</Link>
            </li>
            <li className="md:ml-3 py-3 px-6 font-Poppins border-5 border-sky-900 cursor-pointer text-gray-800 font-bold">
            <Link href="/decking-services">Contact US</Link>
            </li>
           

            <div className="flex flex-col my-4">
            <button
                type="button"
                className={`py-2 px-6  mr-[2rem]  hover:from-pink-500  font-bold bg-blue-400 font-poppins font-medium   text-[16px]  md:text-[20px] border-none rounded-md  text-gray-800   hover:scale-[1.1] transition-all duration-75  font-Poppins`}
              >
                <Link href="/contact">27 78 41 8819</Link>
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;