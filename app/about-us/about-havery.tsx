'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronRight, Award, Users, Zap } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function AboutHarvey() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 500)
        return () => clearTimeout(timer)
    }, [])

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <div className="bg-background text-foreground">
            <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
                <Image
                    src="/placeholder.svg?height=1080&width=1920"
                    alt="Stunning decking project"
                    layout="fill"
                    objectFit="cover"
                    className="brightness-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center"
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        variants={fadeIn}
                        transition={{ duration: 0.5 }}
                    >
                        Crafting Excellence in<br />Decking and Ceilings
                    </motion.h1>
                </div>
            </section>

            <section className="py-16 px-4 md:px-8 lg:px-16  mx-auto">
                <motion.div
                    className=" mb-12"
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    variants={fadeIn}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="text-3xl text-center md:text-4xl py-[3rem] font-bold mb-4">About Harvey Projects</h2>
                    <p className="text-xl text-muted-foreground mx-auto">
                        At Harvey Projects, we specialize in transforming spaces with
                        our expertise in decking and ceiling solutions. Our commitment
                        to quality craftsmanship and years of experience enable us to
                        deliver results that not only enhance the aesthetics but also
                        add functional value to your spaces. <br /><br /> Whether you&apos;re looking to
                        create a stylish outdoor deck or a striking ceiling feature, we
                        work closely with you to bring your unique vision to life. With
                        a focus on precision, durability, and design excellence, Harvey
                        Projects ensures every detail aligns with your goals, turning ordinary areas into
                        extraordinary spaces that you&apos;ll love for years to come
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {[
                        { icon: Award, title: "Quality Craftsmanship", description: "We pride ourselves on delivering top-notch workmanship in every project." },
                        { icon: Users, title: "Customer-Centric Approach", description: "Your satisfaction is our priority. We work closely with you at every step." },
                        { icon: Zap, title: "Innovative Solutions", description: "We stay ahead of the curve, offering the latest in decking and ceiling innovations." }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-muted p-6 rounded-lg shadow-lg"
                            initial="hidden"
                            animate={isVisible ? "visible" : "hidden"}
                            variants={fadeIn}
                            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        >
                            <item.icon className="w-12 h-12 text-primary mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                        </motion.div>
                    ))}
                </div>



                <motion.div
                    className="text-center bg-primary text-primary-foreground py-16 px-4 rounded-lg"
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    variants={fadeIn}
                    transition={{ duration: 0.5, delay: 0.9 }}
                >
                    <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
                    <p className="mb-8 text-lg">Let&apos;s bring your decking and ceiling dreams to life.</p>
                    <div className="max-w-[18rem] mx-auto">

                        <a
                            href="tel:+27784718819" // Replace with your actual phone number
                            className="bg-blue-500 hover:bg-blue-700 text-white p-3 rounded-md shadow-lg flex items-center justify-center transition-transform transform hover:scale-105"
                            aria-label="Call Us"
                        >
                            Get a Free Quote
                            <ChevronRight className="ml-2 h-4 w-4" />

                        </a>

                    </div>
                </motion.div>
            </section>
        </div>
    )
}