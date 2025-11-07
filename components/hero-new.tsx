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
    <div className="relative min-h-screen bg-background overflow-hidden flex">
      {/* Left Sidebar */}
      <div
        className={`hidden lg:flex w-1/3 bg-gradient-to-b from-primary/20 to-transparent flex-col justify-between p-12 transition-all duration-1000 ${
          hasLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
        }`}
      >
        {/* Portfolio Number */}
        <div>
          <p className="text-muted-foreground text-sm tracking-widest">
            / {slides[currentSlide].total.padStart(2, "0")}
          </p>
          <p className="text-7xl font-bold text-[#c5a47e] mt-4">
            {slides[currentSlide].number}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <button
            onClick={prevSlide}
            className="text-xs tracking-wider font-semibold text-muted-foreground hover:text-[#c5a47e] transition flex items-center gap-2"
          >
            <ChevronLeft size={16} />
            PREV
          </button>
          <div className="w-8 h-px bg-muted-foreground"></div>
          <button
            onClick={nextSlide}
            className="text-xs tracking-wider font-semibold text-muted-foreground hover:text-[#c5a47e] transition flex items-center gap-2"
          >
            NEXT
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col gap-6 text-[#c5a47e]">
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
      <div className="flex-1 flex flex-col justify-center items-center px-8 lg:px-16 relative overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background"></div>
        </div>

        <div
          className={`relative z-10 max-w-2xl text-center transition-all duration-1000 ${
            hasLoaded && !isTransitioning
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-5xl lg:text-7xl font-light text-foreground mb-8 leading-tight tracking-[0.3em] uppercase">
            {slides[currentSlide].title}
          </h1>

          <p className="text-base lg:text-lg text-foreground/90 mb-12 leading-relaxed font-medium tracking-wide">
            {slides[currentSlide].description}
          </p>

          {/* Updated LOOK MORE Button */}
          <button className="px-10 py-4 bg-[#c5a47e] text-black text-sm tracking-[0.2em] font-medium hover:bg-[#b8966d] transition uppercase flex items-center gap-3 mx-auto rounded-full">
            LOOK MORE
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute bottom-8 left-8 right-8 flex justify-between items-center z-20 transition-all duration-1000 ${
          hasLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <button onClick={prevSlide} className="text-[#c5a47e]">
          <ChevronLeft size={24} />
        </button>
        <span className="text-xs tracking-widest text-muted-foreground">
          {slides[currentSlide].number} / {slides[currentSlide].total}
        </span>
        <button onClick={nextSlide} className="text-[#c5a47e]">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  )
}
