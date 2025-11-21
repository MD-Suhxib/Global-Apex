"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      company: "Foxconn Pvt Ltd.",
      role: "Project Manager",
      image: "/client1.jpg",
      rating: 5,
      text: "Global Apex provided exceptional granite for our premium residential project. The quality and finish exceeded our expectations. Their team was professional and delivered on time, making our luxury Company project a huge success.",
    },
    {
      id: 2,
      name: "Priya Sharma",
      company: "Design Studio International",
      role: "Lead Architect",
      image: "/client2.jpg",
      rating: 5,
      text: "The marble selection from Global Apex transformed our commercial space into a masterpiece. Their attention to detail and quality control is remarkable. Highly recommended for architects working on luxury projects.",
      project: "Corporate Office, Mumbai"
    },
    {
      id: 3,
      name: "Amit Patel",
      company: "Heritage Hotels Group",
      role: "Procurement Head",
      image: "/client3.jpg",
      rating: 5,
      text: "We've been sourcing stones from Global Apex for 3 years across multiple hotel projects. Consistent quality, reliable delivery, and excellent customer service. They understand luxury requirements perfectly.",
      project: "5-Star Hotel Chain"
    },
    {
      id: 4,
      name: "Sanjay Mehta",
      company: "Elite Developers",
      role: "CEO",
      image: "/client4.jpg",
      rating: 5,
      text: "The exotic granite collection helped us create unique spaces that impressed our most discerning clients. Global Apex's expertise in stone selection is unmatched in the industry.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-slide every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  // Star rating component
  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex gap-1 mb-3 sm:mb-4 justify-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${i < rating ? "text-[#c5a47e] fill-current" : "text-gray-300"} sm:w-4 sm:h-4`}
          />
        ))}
      </div>
    )
  }

  // Responsive slide variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9
    })
  }

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
            CLIENT <span className="text-[#c5a47e]">TESTIMONIALS</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Discover what our valued clients say about their experience working with Global Apex
          </p>
          <div className="w-16 sm:w-20 h-1 bg-[#c5a47e] mx-auto"></div>
        </motion.div>

        {/* Sliding Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-[#c5a47e] text-white hover:text-black w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 border border-[#c5a47e]/30 hover:border-[#c5a47e]"
          >
            <ChevronLeft size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-[#c5a47e] text-white hover:text-black w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 border border-[#c5a47e]/30 hover:border-[#c5a47e]"
          >
            <ChevronRight size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          {/* Testimonial Slide */}
          <div className="relative h-64 sm:h-72 md:h-80 lg:h-96">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: "easeOut" as const }}
                className="absolute inset-0"
              >
                <div className="bg-gradient-to-br from-gray-900 to-black border border-[#c5a47e]/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 h-full flex flex-col justify-center">
                  {/* Quote Icon */}
                  <div className="text-center mb-3 sm:mb-4 md:mb-6">
                    <Quote className="text-[#c5a47e]/30 mx-auto sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" size={24} />
                  </div>

                  {/* Rating */}
                  <StarRating rating={testimonials[currentIndex].rating} />

                  {/* Testimonial Text */}
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 text-center leading-relaxed mb-4 sm:mb-6 md:mb-8 italic max-w-3xl mx-auto line-clamp-4 sm:line-clamp-5 md:line-clamp-none">
                    "{testimonials[currentIndex].text}"
                  </p>

                  {/* Project Info */}
                  <div className="text-center mb-4 sm:mb-6">
                    <p className="text-[#c5a47e] text-xs sm:text-sm font-semibold uppercase tracking-wider">
                      {testimonials[currentIndex].project}
                    </p>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center justify-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-[#c5a47e]/20 rounded-full flex items-center justify-center border border-[#c5a47e]/30">
                      <div className="text-[#c5a47e] font-bold text-sm sm:text-base md:text-lg">
                        {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-white text-sm sm:text-base md:text-lg">{testimonials[currentIndex].name}</h4>
                      <p className="text-gray-400 text-xs sm:text-sm">{testimonials[currentIndex].role}</p>
                      <p className="text-[#c5a47e] text-xs sm:text-sm">{testimonials[currentIndex].company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-4 sm:mt-6 md:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#c5a47e] scale-125" : "bg-gray-600 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 md:mt-20 bg-gradient-to-r from-[#c5a47e]/10 to-transparent border border-[#c5a47e]/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12"
        >
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="p-2 sm:p-4"
            >
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#c5a47e] mb-1 sm:mb-2">200+</div>
              <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">Projects Completed</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="p-2 sm:p-4"
            >
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#c5a47e] mb-1 sm:mb-2">98%</div>
              <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">Client Satisfaction</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="p-2 sm:p-4"
            >
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#c5a47e] mb-1 sm:mb-2">15+</div>
              <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">Years Experience</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="p-2 sm:p-4"
            >
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#c5a47e] mb-1 sm:mb-2">10+</div>
              <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">Countries Served</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}