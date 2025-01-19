"use client"

import Image from 'next/image'
import { PhoneCall, MessageCircle, CheckCircle, PenToolIcon as Tool, Clock, Shield, ArrowRight, Star, Users, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function Home() {
  return (
    <div className="flex flex-col ">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/images/logo.jpg" alt="Run Doors Logo" width={50} height={50} />
            <span className="ml-2 text-xl font-bold text-gray-800">DOORS EXPECT</span>
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="#services" className="text-gray-600 hover:text-gray-800">Services</a>
            <a href="#about" className="text-gray-600 hover:text-gray-800">About Us</a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-800">Testimonials</a>
            <a href="#faq" className="text-gray-600 hover:text-gray-800">FAQ</a>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="tel:+1234567890" className="text-gray-600 hover:text-gray-800">
              <PhoneCall className="inline-block mr-1" size={20} />
              +27 78 471 8819
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gray-900  text-white ">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/door/door.jpg"
              alt="Run Doors Installation"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
            <div className="absolute inset-0 bg-black opacity-70"></div>
          </div>
          <div className="relative container mx-auto px-4 pb-24 sm:py-32">
            <h1 className="text-3xl sm:text-5xl  py-4 font-bold mb-4 animate-fade-in-up">
              Transform Your Home with Expert Door Solutions
            </h1>
            <section className="py-16 bg-blue-600 text-white rounded-md mb-4">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4">Limited Time Offer!</h2>
                <p className="text-xl mb-8">Get an exclusive 20% discount for our first 10 clients</p>
                <div className="bg-white text-blue-600 p-6 rounded-lg shadow-lg inline-block">
                  <h3 className="text-2xl font-bold mb-2">SAVE 20%</h3>
                  <p className="mb-4">Use code: HURVEY50</p>
                  <Button size="lg" variant="secondary" onClick={() => window.location.href = 'https://wa.me/27784718819'}>
                    Claim Offer via WhatsApp
                  </Button>
                </div>
                <p className="mt-6 text-sm">Offer valid for new customers only.
                  Terms and conditions apply.</p>
              </div>
            </section>




            {/* <p className="text-xl mb-8 animate-fade-in-up animation-delay-200">
              Elevate your home&apos;s security, style, and energy efficiency with our professional 
              door installation and maintenance services
            </p> */}
            <div className="space-x-4 animate-fade-in-up items-center mt-[4rem] mx-auto justify-center animation-delay-400">
              <Button size="lg" onClick={() => window.location.href = 'https://wa.me/27784718819'}>
                <MessageCircle className="mr-2" />
                WhatsApp Now
              </Button>
              <Button size="lg" variant="outline" className="bg-orange" onClick={() => window.location.href = 'tel:+27784718819'}>
                <PhoneCall className="mr-2" />
                Call Us
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Comprehensive Door Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Tool,
                  title: 'Expert Installation',
                  description: 'Professional door installation for all types of doors, ensuring perfect fit and functionality',
                  image: '/d3.jpg',
                  details: [
                    'Precise measurements and custom fitting',
                    'Wide range of door styles and materials',
                    'Energy-efficient options available',
                    'Professional hardware installation'
                  ]
                },
                {
                  icon: Clock,
                  title: 'Routine Maintenance',
                  description: 'Regular maintenance to keep your doors in top condition, preventing issues before they arise',
                  image: '/door/door2.jpg',
                  details: [
                    'Lubrication of moving parts',
                    'Weather stripping replacement',
                    'Alignment adjustments',
                    'Safety and security checks'
                  ]
                },
                {
                  icon: Shield,
                  title: 'Swift Repair Services',
                  description: 'Quick and efficient repair services for any door issues, restoring security and functionality',
                  image: '/door/door4.jpg',
                  details: [
                    '24/7 emergency repair services',
                    'Replacement of damaged components',
                    'Security system integration',
                    'Upgrade options for older doors'
                  ]
                },
              ].map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <service.icon className="mr-2" size={24} />
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image src={service.image} alt={service.title} width={300} height={200} className="mb-4 rounded-md" />
                    <CardDescription>{service.description}</CardDescription>
                    <ul className="mt-4 space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="flex-shrink-0 text-green-500 mr-2" size={16} />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Learn More <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Special Offer Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Limited Time Offer!</h2>
            <p className="text-xl mb-8">Get an exclusive 20% discount for our first 10 clients</p>
            <div className="bg-white text-blue-600 p-6 rounded-lg shadow-lg inline-block">
              <h3 className="text-2xl font-bold mb-2">SAVE 20%</h3>
              <p className="mb-4">Use code: HURVEY50</p>
              <Button size="lg" variant="secondary" onClick={() => window.location.href = 'https://wa.me/27784718819'}>
                Claim Offer via WhatsApp
              </Button>
            </div>
            <p className="mt-6 text-sm">Offer valid for new customers only.
              Terms and conditions apply.</p>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Run Doors?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <Image src="/door/door1.jpg" alt="Run Doors Team" width={600} height={400} className="rounded-lg shadow-md" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Your Trusted Door Experts Since 2005</h3>
                <p className="mb-6">At Run Doors, we&apos;ve been enhancing homes and businesses
                  with top-quality door solutions for over
                  15 years. Our commitment to excellence, attention to
                  detail, and customer-first approach sets us apart in the industry.</p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Users, title: 'Expert Team', description: 'Skilled technicians with years of experience' },
                    { icon: Shield, title: 'Quality Assured', description: 'We use only the finest materials and products' },
                    { icon: Clock, title: 'Timely Service', description: 'We respect your time and stick to schedules' },
                    { icon: Zap, title: 'Energy Efficient', description: 'Eco-friendly options to reduce energy costs' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <item.icon className="flex-shrink-0 text-blue-500 mr-2" size={24} />
                      <div>
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'John D.', role: 'Homeowner', comment: 'Run Doors transformed our home with beautiful, energy-efficient doors. Their team was professional and efficient.' },
                { name: 'Sarah M.', role: 'Business Owner', comment: 'We needed secure doors for our new office, and Run Doors delivered beyond our expectations. Highly recommended!' },
                { name: 'Michael R.', role: 'Property Manager', comment: 'Their maintenance service is top-notch. They keep all the doors in our buildings working perfectly.' },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>&quot;{testimonial.comment}&quot;</p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              {[
                { question: 'How long does a typical door installation take?', answer: 'A standard door installation usually takes 2-4 hours, depending on the type of door and any additional features.' },
                { question: 'Do you offer warranties on your services?', answer: 'Yes, we provide a 1-year warranty on our installation services and pass on manufacturers\' warranties for the products we install.' },
                { question: 'Can you match my existing doors?', answer: 'We offer a wide range of door styles and can often custom-order to match your existing doors or décor.' },
                { question: 'How often should I have my doors serviced?', answer: 'We recommend a professional inspection and service annually to ensure optimal performance and longevity of your doors.' },
                { question: 'Do you offer emergency repair services?', answer: 'Yes, we provide 24/7 emergency repair services for urgent door-related issues.' },
              ].map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Doors?</h2>
            <p className="text-xl mb-8">Contact us now for a free consultation and quote. Don&apos;t forget about our special 20% discount offer!</p>
            <div className="space-x-4">
              <Button size="lg" onClick={() => window.location.href = 'https://wa.me/27784718819'}>
                <MessageCircle className="mr-2" />
                WhatsApp Us
              </Button>
              <Button size="lg" variant="outline" className="bg-blue-800" onClick={() => window.location.href = 'tel:+27784718819'}>
                <PhoneCall className="mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Run Doors</h3>
              <p>Enhancing homes and businesses with top-quality door solutions since 2005.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:underline">Services</a></li>
                <li><a href="#about" className="hover:underline">About Us</a></li>
                <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
                <li><a href="#faq" className="hover:underline">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>6261 Yaounde Crescent
                Cosmo city ext 6
                Randburg
                2188</p>

              <p>Phone: +27 78 471 8819</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy;Hurvey Projects 2025 Run Doors. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

