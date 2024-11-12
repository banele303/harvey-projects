'use client'

import { useState } from 'react'
import Image from "next/image"
import { motion } from "framer-motion"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const works = [
  { imageUrl: "/images/pool3.jpg", alt: "Pool decking project" },
  { imageUrl: "/demin/decking-min.png", alt: "Wooden decking installation" },
  { imageUrl: "/demin/mx2-min.png", alt: "Modern deck design" },
  { imageUrl: "/images/mdecking.jpg", alt: "Pergola construction" },
  { imageUrl: "/demin/pooldecking-min.png", alt: "Pool area decking" },
  { imageUrl: "/demin/pagols2-min.png", alt: "Elegant pergola design" },
  { imageUrl: "/images/pool2.jpg", alt: "Luxurious pool decking" },
 
  { imageUrl: "/images/main-hero.jpg", alt: "Stunning deck view" },
  { imageUrl: "/images/ww4.jpg", alt: "Wooden walkway project" },
  { imageUrl: "/images/img6.jpg", alt: "Innovative deck solution" },
  { imageUrl: "/images/p2.jpg", alt: "Patio decking design" },
  { imageUrl: "/images/mm.jpg", alt: "Multi-level deck construction" },
]

export function  BlurFadeDemo() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % works.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + works.length) % works.length)
  }

  return (
    <section id="gallery" className="py-16 px-4 md:px-8 lg:px-16 bg-background">
      <h2 className="text-3xl font-bold text-center mb-8">Our Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {works.map((work, idx) => (
          <motion.div
            key={work.imageUrl}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative overflow-hidden rounded-lg cursor-pointer group">
                  <Image
                    src={work.imageUrl}
                    alt={work.alt}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-lg font-semibold">View Project</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full bg-background p-0">
                <div className="relative">
                  <Image
                    src={works[currentImageIndex].imageUrl}
                    alt={works[currentImageIndex].alt}
                    width={1200}
                    height={800}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 text-white bg-black bg-opacity-50 hover:bg-opacity-75"
                    onClick={() => document.querySelector('button[aria-label="Close"]')?.click()}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-75"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-75"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        ))}
      </div>
    </section>
  )
}