import Link from "next/link"
import {  Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'


export default function Footer() {
    return (


        <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Harvey Projects</h3>
              <p className="mb-4">Transforming surfaces, one project at a time.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white"><Facebook size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Twitter size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Instagram size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={20} /></a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                <li><Link href="/service" className="text-gray-400 hover:text-white">Services</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Decking</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Hady Man</a></li>

              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span>+27 (0)78 471 8819</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail size={16} />
                  <a href="mailto:harveyre4@mail.com" className="text-gray-400 hover:text-white">harveyre4@mail.com</a>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span>Johannesburg, South Africa</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Harvey Projects. All rights reserved.</p>
          </div>
        </div>
      </footer>

    )
}
























// import Image from "next/image";
// import Link from "next/link";

// const Footer = () => {
//   return (
//     <footer className="bg-[#fafafa] py-10  px-6 md:px-0 md:mx-auto border-t">
//       <div className="flex flex-col  justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
//         <h1 className="text-3xl md:text-5xl font-medium ">
//           <Image
//             src={"/images/logo.jpg"}
//             width={10000}
//             height={10000}
//             className="w-40"
//             alt="image"
//           />{" "}
//         </h1>
//         <div className="grid grid-cols-2">
//         <p className="text-left  text-xl  text-gray-500">+27 78 41 8819</p>
//         <p className="text-left  text-xl  text-gray-500">
//           Pool Decking
//         </p>
//         <p className="text-left  text-xl  text-gray-500">
//           Wall decking
//         </p>
//         <p className="text-left  text-xl  text-gray-500">
//           harveyre4@mail.com
//         </p>
        
//         </div>
       
//       </div>

//       <div className="flex md:justify-center gap-x-4 mt-10">
        
//       <Link href="/southflow.co.za" className="text-blue-500">
//       © Southflow Agency All Rights Reserved.
//         </Link>
     
//         <Link href="/" className="text-blue-500">
//           Privacy Policy
//         </Link>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
