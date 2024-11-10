'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, CheckCircle, Sun, Droplets, Trees, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import Image from 'next/image'
import Link from 'next/link'

export default function FRQ() {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null)



    const faqItems = [
        { question: 'How long does it take to build a deck?', answer: 'The timeline varies depending on the size and complexity of the project, but most decks can be completed within 1-2 weeks.' },
        { question: 'What types of materials do you use?', answer: 'We offer a variety of materials including pressure-treated wood, cedar, composite decking, and PVC. Well help you choose the best option for your needs and budget.' },
        { question: 'Do I need a permit to build a deck?', answer: 'In most cases, yes. We handle all necessary permits and ensure your deck meets local building codes.' },
        { question: 'How much does a new deck cost?', answer: 'Costs vary based on size, materials, and design. We offer free consultations to provide accurate estimates for your specific project.' },
    ]

    return (
        <div className="">
 <main className="container  px-4 py-12">
 <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqItems.map((item, index) => (
                            <Card key={index} className="overflow-hidden">
                                <CardContent className="p-0">
                                    <button
                                        className="flex justify-between items-center w-full p-4 text-left"
                                        onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                                    >
                                        <span className="font-semibold">{item.question}</span>
                                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeAccordion === index ? 'transform rotate-180' : ''}`} />
                                    </button>
                                    {activeAccordion === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="px-4 pb-4"
                                        >
                                            <p className="text-gray-600">{item.answer}</p>
                                        </motion.div>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                <section>
                    <Card className="bg-blue-600 text-white">
                        <CardContent className="p-8 text-center">
                            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Dream Deck Project?</h2>
                            <p className="mb-6">Contact us today for a free consultation and quote!</p>
                         <Link href="/contact-us">
                         <Button variant="secondary" size="lg">
                                Get Started
                            </Button>
                         </Link>   
                        </CardContent>
                    </Card>
                </section>
            </main>

            
        </div>
    )
}