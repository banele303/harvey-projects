'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, CheckCircle, Sun, Droplets, Trees, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import Image from 'next/image'

export default function DeckingServices() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)

  const features = [
    { icon: Sun, title: 'Weather-Resistant', description: 'Our decks are built to withstand various weather conditions.' },
    { icon: Droplets, title: 'Low Maintenance', description: 'Enjoy your deck without the hassle of frequent upkeep.' },
    { icon: Trees, title: 'Eco-Friendly Materials', description: 'We use sustainable materials for environmentally conscious builds.' },
    { icon: Clock, title: 'Quick Installation', description: 'Get your dream deck installed in record time.' },
  ]

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
     
      <div className="relative aspect-[2/1] max-h-[50vh] w-full rounded-xl overflow-hidden pt-[3rem]">
        <Image
          src="/images/decking-hero3.jpg" 
          alt="Beautiful deck with outdoor furniture" 
          fill
         
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col bg-black bg-opacity-50 flex items-center justify-center">

        <h2 className="text-3xl font-bold mb-4 text-white">Ready to Start Your Dream Deck Project?</h2>

          <Button size="lg" className="text-xl text-blue-700">Get a Free Quote</Button>
        </div>
      </div>
    </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Decking Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
            {['Consultation', 'Design', 'Material Selection', 'Construction', 'Final Inspection'].map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold mb-4">
                  {index + 1}
                </div>
                <p className="text-lg font-semibold text-center">{step}</p>
              </div>
            ))}
          </div>
        </section>

    

      </main>

      
    </div>
  )
}