"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Work() {
  const steps = [
    {
      step: "01",
      title: "Browse Our Premium Collection",
      description:
        "Explore our exclusive range of premium granite, marble, and natural stones. Browse through detailed specifications and high-resolution images to find the perfect stone for your luxury projects.",
      image: "/images/step1.png",
      reverse: false,
    },
    {
      step: "02",
      title: "Select Your Stone",
      description:
        "Choose from our extensive collection of exotic stones. Compare textures, colors, and finishes to select the perfect material that matches your architectural vision and design requirements.",
      image: "/images/step2.png",
      reverse: true,
    },
    {
      step: "03",
      title: "Consult with Our Experts",
      description:
        "Connect with our stone specialists for personalized consultation. Discuss your project requirements, get expert recommendations, and receive detailed quotes tailored to your specific needs.",
      image: "/images/step3.png",
      reverse: false,
    },
    {
      step: "04",
      title: "Global Delivery & Installation",
      description:
        "Experience seamless global delivery of your selected stones. Our team handles secure packaging, international shipping logistics, and can arrange professional installation services worldwide.",
      image: "/images/step4.png",
      reverse: true,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-black text-white py-4 px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between">
          <div className="text-xl md:text-2xl font-bold tracking-wider">GLOBAL APEX</div>
          
          {/* Get Quote Button */}
          <button className="bg-[#c5a47e] text-black px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-[#b8966d] transition-all duration-300 flex items-center gap-3 font-semibold text-sm md:text-base tracking-wider uppercase group">
            <span className="hidden sm:inline">GET INSTANT QUOTE</span>
            <span className="sm:hidden">GET QUOTE</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-12 md:py-24 px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            HOW IT{" "}
            <span className="text-[#c5a47e]">
              WORKS
            </span>
          </h1>
          <div className="w-20 h-1 bg-[#c5a47e] mx-auto mt-6"></div>
        </div>

        {/* Steps */}
        <div className="space-y-16 md:space-y-24 lg:space-y-32">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${
                step.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-8 md:gap-12 lg:gap-16 ${
                i === steps.length - 1 ? "bg-primary/5 rounded-3xl p-6 md:p-12" : ""
              }`}
            >
              {/* Image */}
              <div className={`flex-1 w-full ${i === steps.length - 1 ? "bg-gray-900" : "bg-gray-100"} rounded-2xl md:rounded-3xl shadow-xl p-4 md:p-8 flex justify-center items-center overflow-hidden`}>
                <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden">
                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    fill
                    className="object-cover rounded-xl"
                  />
                  {/* Gold overlay for luxury feel */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#c5a47e]/10 to-transparent"></div>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1 w-full">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl md:text-6xl font-bold text-[#c5a47e] opacity-80">
                    {step.step}
                  </span>
                  <div className="w-12 h-px bg-[#c5a47e]"></div>
                </div>
                
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-foreground leading-tight tracking-wide">
                  {step.title}
                </h2>
                
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg font-light tracking-wide">
                  {step.description}
                </p>

                {/* Decorative line */}
                <div className="w-20 h-0.5 bg-[#c5a47e] mt-8"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20 md:mt-32"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-wide">
            READY TO START YOUR PROJECT?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Contact us today to discuss your stone requirements and let us help you bring your vision to life with our premium materials and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-[#c5a47e] text-black px-8 md:px-12 py-4 rounded-full hover:bg-[#b8966d] transition-all duration-300 font-semibold text-sm tracking-wider uppercase min-w-[200px]">
              CONTACT US
            </button>
            <button className="border border-[#c5a47e] text-[#c5a47e] px-8 md:px-12 py-4 rounded-full hover:bg-[#c5a47e] hover:text-black transition-all duration-300 font-semibold text-sm tracking-wider uppercase min-w-[200px]">
              VIEW CATALOG
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}