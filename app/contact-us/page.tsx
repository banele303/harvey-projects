'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Navbar from '../about-us/ui/Navbar'
import Footer from '@/components/footer'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div>
        <Navbar/>
    <div className="container mx-auto px-[2rem] mt-[7rem] md:px-[11rem] py-8 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[4rem]">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full"
                placeholder="Your message here..."
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold pt-4 mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-gray-600" />
              <span>harvey4@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-gray-600" />
              <span>+27 78 471 8819</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-gray-600" />
              <span>Johanenesburg South Africa</span>
            </div>
          </div>
          <h3 className="text-xl font-semibold mt-8 mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <Footer/>
    </div>
  )
}