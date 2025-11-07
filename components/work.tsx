"use client"

import { Gem, Truck, Wrench, Award } from "lucide-react"

export default function Services() {
  const services = [
    {
      id: 1,
      icon: Gem,
      title: "Premium Selection",
      description: "Curated collection of the finest granite and marble from leading suppliers worldwide",
    },
    {
      id: 2,
      icon: Truck,
      title: "Professional Delivery",
      description: "Safe and timely delivery with proper handling and installation support",
    },
    {
      id: 3,
      icon: Wrench,
      title: "Custom Fabrication",
      description: "Expert cutting, polishing, and finishing to your exact specifications",
    },
    {
      id: 4,
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous quality checks and lifetime support for peace of mind",
    },
  ]

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">Our Professional Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.id} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <Icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
