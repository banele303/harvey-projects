import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, StarHalf } from "lucide-react"

interface TestimonialProps {
  name: string
  avatar: string
  rating: number
  text: string
}

const testimonials: TestimonialProps[] = [
  {
    name: "Sthabile Nkomo",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4.5,
    text: "I hahe been working with Harvey Projects and I must say they are professional when it comes to decking projects and they alsywas on time thanks Erusmus "
  },
  {
    name: "Jane Smith",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    text: "Since day they have beeen on time whuch I usually strugly with oher contractor that I employ"
  },
  {
    name: "Alex Dube",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    text: "Erusmus and team are amazing at decking work and my small partio looks new and I love it"
  },
  {
    name: "Alex Dube",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    text: "Erusmus and team are amazing at decking work and my small partio looks new and I love it"
  },
  {
    name: "Alex Dube",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    text: "Erusmus and team are amazing at decking work and my small partio looks new and I love it"
  },
  {
    name: "Alex Dube",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    text: "Erusmus and team are amazing at decking work and my small partio looks new and I love it"
  },
]

function TestimonialCard({ name, avatar, rating, text }: TestimonialProps) {
  const [isHovered, setIsHovered] = useState(false)

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400" />)
    }

    while (stars.length < 5) {
      stars.push(<Star key={`empty-${stars.length}`} className="w-4 h-4 text-gray-300" />)
    }

    return stars
  }

  return (
    <Card 
      className="overflow-hidden transition-all duration-300 ease-in-out transform hover:shadow-lg h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <Avatar className="h-10 w-10 mr-4">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <div className="flex items-center">
              {renderStars(rating)}
              <span className="ml-2 text-sm text-gray-600">{rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
        <p className={`text-gray-700 transition-all duration-300 ease-in-out ${isHovered ? 'text-primary' : ''}`}>
          {text}
        </p>
      </CardContent>
    </Card>
  )
}

export default function TheTestimonials() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  )
}