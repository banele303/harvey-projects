import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: "/images/decking5.jpg",
    title: "Transform Your OutDoor",
    description: "Decking allows you to enhance any boring, lethargic entertainment area transforming it into an entertainers dream.",
  },
  {
    icon: "/images/w2.jpg",
    title: "Wall Clanging",
    description: "We do wall cladding on outside wall and inside walls with Composite or Timber cladding.",
  },
  {
    icon: "/images/decking7.jpg",
    title: "Pergolas",
    description: "Pergolas are the perfect outdoor feature for Patios,Balcony's and Gardens making any wasted space look alive. Synthetic Deck has extensive experience in designing and building a unique trellis, pergola or arbor to fit the exterior needs of your home and your family.",
  },
  {
    icon: "/images/pool4.jpg",
    title: "Pool Decking",
    description: "Huggie decking is a hugely popular choice for decks big and small Pools. It's a completely natural product that is the result of years and years of growth. Seen by many as the only real decking option, hardwood decking timber does call for maintenance, but is well worth the extra effort.",
  },
  {
    icon: "/images/ceiling.jpg",
    title: "Ceilling Installation",
    description: "We install and repair all the ceilling in Gauteng",
  },
];

export default function Services() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative w-full pt-[56.25%]">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}