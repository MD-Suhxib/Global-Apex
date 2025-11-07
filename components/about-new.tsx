"use client"

import { useState, useEffect } from "react"

export default function AboutNew() {
  const images = [
    "/granite.jpg",
    "/marble1.jpg",
    "/quarry.png",
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000) // ⏱️ changes every 4 seconds
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section id="about" className="bg-primary/10 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold tracking-tight">
            ABOUT <span className="text-[#c5a47e]">GLOBAL APEX</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-bold text-foreground mb-6 leading-tight">
              Nature’s textures, human touch.
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              At Global Apex, We are pioneers in the procuring, manufacturing,
              trading, and global distribution of premium granite from India
              since from 2007.
              <br />
              <br />
              Ever since its inception, Global Apex has played a vital role in
              the Indian Market for multiple types of Granite. Our main mission
              is that we are dedicated to sourcing, crafting, and delivering
              world-class granite solutions that enhance architectural
              excellence and pure quality.
              <br />
              <br />
              Our commitment to quality craftsmanship, ethical sourcing, and
              global excellence sets us apart. With cutting-edge technology and
              a vast international network, we ensure seamless delivery,
              customized solutions, and unmatched reliability for your granite &
              marble needs.
            </p>
          </div>

          {/* Middle Column - Specializations */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-foreground mb-12">
              Our Specialization:
            </h3>

            <div className="space-y-12">
              {/* Granite */}
              <div>
                <div className="w-12 h-12 border border-[#c5a47e] mb-4 flex items-center justify-center overflow-hidden rounded-md bg-primary/5">
                  <img
                    src="/icon1.png"
                    alt="Granite Icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>

                <h4 className="text-sm tracking-widest font-bold text-foreground mb-2">
                  GRANITE
                </h4>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  Premium granite sourcing for export, showrooms, countertops,
                  flooring, and luxury applications.
                </p>
              </div>

              {/* Marble */}
              <div>
                <div className="w-12 h-12 border border-[#c5a47e] mb-4 flex items-center justify-center overflow-hidden rounded-md bg-primary/5">
                  <img
                    src="/icon3.png"
                    alt="Marble Icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>

                <h4 className="text-sm tracking-widest font-bold text-foreground mb-2">
                  MARBLE
                </h4>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  Exotic and classic marble collections for architectural
                  features and design.
                </p>
              </div>

              {/* Installation */}
              <div>
                <div className="w-12 h-12 border border-[#c5a47e] mb-4 flex items-center justify-center overflow-hidden rounded-md bg-primary/5">
                  <img
                    src="/icon2.png"
                    alt="Installation Icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>

                <h4 className="text-sm tracking-widest font-bold text-foreground mb-2">
                  INSTALLATION
                </h4>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  Professional installation services by certified experts.
                </p>
              </div>
            </div>
          </div>

          {/* ✅ Right Column - Auto Sliding Images */}
          <div className="lg:col-span-1">
            <div className="relative h-96 overflow-hidden rounded-lg">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                    index === currentIndex
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
