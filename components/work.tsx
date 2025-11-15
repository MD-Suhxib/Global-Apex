"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Lottie from "lottie-react"

// Import your local Lottie JSON files
import browseAnimation from '@/public/animations/Sandy Loading.json'
import selectAnimation from '@/public/animations/select-stone.json'
import consultAnimation from '@/public/animations/Handshake Loop.json'
import deliveryAnimation from '@/public/animations/delivery-installation.json'

export default function Work() {
  const steps = [
    {
      step: "01",
      title: "Browse Our Premium Collection",
      description: "Explore our exclusive range of premium granite, marble, and natural stones. Browse through detailed specifications and high-resolution images to find the perfect stone for your luxury projects.",
      animationData: browseAnimation,
      reverse: false,
    },
    {
      step: "02",
      title: "Select Your Stone",
      description: "Choose from our extensive collection of exotic stones. Compare textures, colors, and finishes to select the perfect material that matches your architectural vision and design requirements.",
      animationData: selectAnimation,
      reverse: true,
    },
    {
      step: "03",
      title: "Consult with Our Experts",
      description: "Connect with our stone specialists for personalized consultation. Discuss your project requirements, get expert recommendations, and receive detailed quotes tailored to your specific needs through Whatsapp.",
      animationData: consultAnimation,
      reverse: false,
    },
    {
      step: "04",
      title: "Global Delivery & Installation",
      description: "Experience seamless global delivery of your selected stones. Our team handles secure packaging, international shipping logistics, and can arrange professional installation services worldwide.",
      animationData: deliveryAnimation,
      reverse: true,
    },
  ]

  // Animation variants with proper TypeScript types
  const buttonHover = {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeOut" as const }
  }

  const buttonTap = {
    scale: 0.98,
    transition: { duration: 0.2, ease: "easeIn" as const }
  }

  const iconHover = {
    x: 5,
    transition: { duration: 0.3, ease: "easeOut" as const }
  }

  const glowHover = {
    boxShadow: "0 0 20px rgba(197, 164, 126, 0.4)",
    transition: { duration: 0.3, ease: "easeOut" as const }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-black text-white py-4 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between">
          <div className="text-lg sm:text-xl md:text-2xl font-bold tracking-wider">GLOBAL APEX</div>
          
          {/* Get Quote Button */}
          <motion.button 
            className="bg-[#c5a47e] text-black px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-semibold text-xs sm:text-sm md:text-base tracking-wider uppercase flex items-center gap-2 sm:gap-3 group relative overflow-hidden"
            whileHover={buttonHover}
            whileTap={buttonTap}
          >
            {/* Animated background on hover */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-[#b8966d] to-[#d4b992] opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" as const }}
            />
            
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              whileHover={glowHover}
            />
            
            <span className="relative z-10 flex items-center gap-1 sm:gap-2">
              <span className="hidden sm:inline">GET INSTANT QUOTE</span>
              <span className="sm:hidden">GET QUOTE</span>
              <motion.div
                whileHover={iconHover}
              >
                <ChevronRight size={14} className="sm:w-4 sm:h-4 mt-0.5" />
              </motion.div>
            </span>
          </motion.button>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            HOW IT{" "}
            <span className="text-[#c5a47e]">
              WORKS
            </span>
          </motion.h1>
          <motion.div 
            className="w-16 sm:w-20 h-1 bg-[#c5a47e] mx-auto mt-4 sm:mt-6"
            initial={{ width: 0 }}
            animate={{ width: "4rem" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" as const }}
          />
        </div>

        {/* Steps */}
        <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-32">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" as const }}
              viewport={{ once: true, margin: "-50px" }}
              className={`flex flex-col ${
                step.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 ${
                i === steps.length - 1 ? "bg-primary/5 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12" : ""
              }`}
            >
              {/* Animation Container */}
              <div className="flex-1 w-full bg-gray-100 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg p-3 sm:p-4 md:p-6 lg:p-8 flex justify-center items-center overflow-hidden">
                <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 flex items-center justify-center">
                  <Lottie
                    animationData={step.animationData}
                    loop={true}
                    autoplay={true}
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1 w-full">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <motion.span 
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#c5a47e] opacity-80"
                    whileHover={{ scale: 1.05, opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" as const }}
                  >
                    {step.step}
                  </motion.span>
                  <motion.div 
                    className="w-8 sm:w-10 md:w-12 h-px bg-[#c5a47e]"
                    whileHover={{ width: 16 }}
                    transition={{ duration: 0.3, ease: "easeOut" as const }}
                  />
                </div>
                
                <motion.h2 
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-foreground leading-tight tracking-wide cursor-default"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.3, ease: "easeOut" as const }}
                >
                  {step.title}
                </motion.h2>
                
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base md:text-lg font-light tracking-wide">
                  {step.description}
                </p>

                {/* Decorative line with hover */}
                <motion.div 
                  className="w-16 sm:w-20 h-0.5 bg-[#c5a47e] mt-6 sm:mt-8 cursor-pointer"
                  whileHover={{ width: 32, backgroundColor: "#b8966d" }}
                  transition={{ duration: 0.4, ease: "easeOut" as const }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-32"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-5 md:mb-6 tracking-wide">
            READY TO START YOUR PROJECT?
          </h3>
          <p className="text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-4">
            Contact us today to discuss your stone requirements and let us help you bring your vision to life with our premium materials and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            {/* Primary CTA Button */}
            <motion.button 
              className="bg-[#c5a47e] text-black px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 rounded-full font-semibold text-xs sm:text-sm tracking-wider uppercase min-w-[160px] sm:min-w-[180px] md:min-w-[200px] flex items-center justify-center gap-2 group relative overflow-hidden"
              whileHover={buttonHover}
              whileTap={buttonTap}
            >
              {/* Animated background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#b8966d] to-[#d4b992] opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" as const }}
              />
              
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                whileHover={glowHover}
              />
              
              <span className="relative z-10">CONTACT US</span>
              <motion.div
                whileHover={iconHover}
              >
                <ChevronRight size={14} className="sm:w-4 sm:h-4 mt-0.5" />
              </motion.div>
            </motion.button>

            {/* Secondary CTA Button */}
            <motion.button 
              className="border border-[#c5a47e] text-[#c5a47e] px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 rounded-full font-semibold text-xs sm:text-sm tracking-wider uppercase min-w-[160px] sm:min-w-[180px] md:min-w-[200px] flex items-center justify-center gap-2 group relative overflow-hidden"
              whileHover={buttonHover}
              whileTap={buttonTap}
            >
              {/* Border glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                whileHover={glowHover}
              />
              
              {/* Background slide on hover */}
              <motion.div 
                className="absolute inset-0 bg-[#c5a47e] opacity-0 -z-10"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" as const }}
              />
              
              <motion.span 
                className="relative z-10 group-hover:text-black transition-colors duration-300"
              >
                VIEW CATALOG
              </motion.span>
              <motion.div
                whileHover={iconHover}
                className="group-hover:text-black transition-colors duration-300"
              >
                <ChevronRight size={14} className="sm:w-4 sm:h-4 mt-0.5" />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}