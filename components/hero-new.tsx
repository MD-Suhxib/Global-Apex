"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Instagram, Twitter, Facebook } from "lucide-react"

export default function HeroNew() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)

  const slides = [
    {
      number: "01",
      total: "03",
      title: "Premium Granite Collection",
      description:
        "Experience the timeless elegance of our premium granite Collection. Each stone is carefully sourced and curated to ensure the highest quality for your luxury projects.",
      image: "sample1.jpg",
    },
    {
      number: "02",
      total: "03",
      title: "Exotic Marble Selection",
      description:
        "Discover our exclusive marble collection from around the world. From classic Italian marble to rare exotic stones, we bring sophistication to every space.",
      image: "sample3.jpg",
    },
    {
      number: "03",
      total: "03",
      title: "Custom Stone Solutions",
      description:
        "Our expert team provides tailored stone solutions for architects and designers. Transform your vision into reality with our premium materials and professional guidance.",
      image: "/luxury-marble-granite-penthouse-interior.jpg",
    },
  ]

  useEffect(() => {
    setTimeout(() => setHasLoaded(true), 100)

    const interval = setInterval(() => {
      nextSlide()
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setIsTransitioning(false)
    }, 400)
  }

  const prevSlide = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
      setIsTransitioning(false)
    }, 400)
  }

  return (
    <div className="relative min-h-screen bg-background overflow-hidden flex pt-16">
      {/* Left Sidebar - Hidden on mobile */}
      <div
        className={`hidden lg:flex w-1/3 bg-gradient-to-b from-primary/20 to-transparent flex-col justify-between p-8 xl:p-12 transition-all duration-1000 ${
          hasLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
        }`}
      >
        {/* Portfolio Number */}
        <div>
          <p className="text-muted-foreground text-sm tracking-widest">
            / {slides[currentSlide].total.padStart(2, "0")}
          </p>
          <p className="text-6xl xl:text-7xl font-bold text-[#c5a47e] mt-2 xl:mt-4">
            {slides[currentSlide].number}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-6 xl:gap-8">
          <button
            onClick={prevSlide}
            className="text-xs tracking-wider font-semibold text-muted-foreground hover:text-[#c5a47e] transition flex items-center gap-2"
          >
            <ChevronLeft size={16} />
            PREV
          </button>
          <div className="w-6 xl:w-8 h-px bg-muted-foreground"></div>
          <button
            onClick={nextSlide}
            className="text-xs tracking-wider font-semibold text-muted-foreground hover:text-[#c5a47e] transition flex items-center gap-2"
          >
            NEXT
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col gap-4 xl:gap-6 text-[#c5a47e]">
          <a href="#" className="hover:text-[#c5a47e] transition">
            <Instagram size={18} />
          </a>
          <a href="#" className="hover:text-[#c5a47e] transition">
            <Twitter size={18} />
          </a>
          <a href="#" className="hover:text-[#c5a47e] transition">
            <Facebook size={18} />
          </a>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative overflow-hidden">
        <div
          className={`absolute inset-0 opacity-60 transition-all duration-1000 ${
            hasLoaded ? "scale-100" : "scale-110"
          }`}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-800 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image || "/placeholder.svg"}
                alt="Stone texture"
                className="w-full h-full object-cover hero-bg-pan"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80 lg:from-background lg:via-transparent lg:to-background"></div>
        </div>

        <div
          className={`relative z-10 max-w-2xl text-center transition-all duration-1000 w-full ${
            hasLoaded && !isTransitioning
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-foreground mb-6 md:mb-8 leading-tight tracking-[0.2em] sm:tracking-[0.3em] uppercase px-4">
            {slides[currentSlide].title}
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-foreground/90 mb-8 md:mb-12 leading-relaxed font-medium tracking-wide px-4 sm:px-6 md:px-8">
            {slides[currentSlide].description}
          </p>

          {/* LOOK MORE Button */}
          <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-[#c5a47e] text-black text-xs sm:text-sm tracking-[0.2em] font-medium hover:bg-[#b8966d] transition uppercase flex items-center gap-2 sm:gap-3 mx-auto rounded-full">
            LOOK MORE
            <ChevronRight size={16} className="sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute bottom-6 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 flex justify-between items-center z-20 transition-all duration-1000 ${
          hasLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <button onClick={prevSlide} className="text-[#c5a47e] p-2">
          <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
        </button>
        
        {/* Mobile slide indicator */}
        <div className="flex items-center gap-4">
          <span className="text-xs tracking-widest text-muted-foreground">
            {slides[currentSlide].number} / {slides[currentSlide].total}
          </span>
          
          {/* Mobile social icons - horizontal */}
          <div className="flex gap-3 sm:gap-4 text-[#c5a47e]">
            <a href="#" className="hover:text-[#c5a47e] transition">
              <Instagram size={16} className="sm:w-4 sm:h-4" />
            </a>
            <a href="#" className="hover:text-[#c5a47e] transition">
              <Twitter size={16} className="sm:w-4 sm:h-4" />
            </a>
            <a href="#" className="hover:text-[#c5a47e] transition">
              <Facebook size={16} className="sm:w-4 sm:h-4" />
            </a>
          </div>
        </div>
        
        <button onClick={nextSlide} className="text-[#c5a47e] p-2">
          <ChevronRight size={20} className="sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Mobile slide dots indicator */}
      <div className="lg:hidden absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true)
              setTimeout(() => {
                setCurrentSlide(index)
                setIsTransitioning(false)
              }, 400)
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-[#c5a47e]" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}