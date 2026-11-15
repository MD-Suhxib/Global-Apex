"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Instagram, Twitter, Facebook } from "lucide-react"
import { useRouter } from "next/navigation" // Add this import

export default function HeroNew() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)
  const router = useRouter() // Add this hook

  const slides = [
    {
      number: "01",
      total: "03",
      title: "Premium Granite Collection",
      description:
        "Experience the timeless elegance of our premium granite Collection. Each stone is carefully sourced and curated to ensure the highest quality for your luxury projects.",
      image: "/sample1.jpg",
    },
    {
      number: "02",
      total: "03",
      title: "Exotic Marble Selection",
      description:
        "Discover our exclusive marble collection from around the world. From classic Italian marble to rare exotic stones, we bring sophistication to every space.",
      image: "/sample3.jpg",
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

  // Smooth scroll to products section
  const handleViewProductsClick = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex pt-16">
      {/* Full-width Background Slides - Spans across both sidebar and content */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ${
          hasLoaded ? "scale-100" : "scale-105"
        }`}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image || "/placeholder.svg"}
              alt="Stone texture"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Seamless Blend Gradient:
            - Left corner is deep black (like Image 2)
            - Image emerges and is clearly visible from the left/center
            - Right end fades away: becomes less, less, and dark
        */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.95) 20%, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.2) 42%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.78) 86%, rgba(0,0,0,0.97) 100%)",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 pointer-events-none"></div>
      </div>

      {/* Left Sidebar - Transparent so background seamlessly blends underneath */}
      <div
        className={`relative z-10 hidden lg:flex w-1/3 flex-col justify-between p-8 xl:p-12 transition-all duration-1000 ${
          hasLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
        }`}
      >
        {/* Portfolio Number */}
        <div>
          <p className="text-muted-foreground text-sm tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            / {slides[currentSlide].total.padStart(2, "0")}
          </p>
          <p className="text-6xl xl:text-7xl font-bold mt-2 xl:mt-4 gold-shine">
            {slides[currentSlide].number}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-6 xl:gap-8">
          <button
            onClick={prevSlide}
            className="text-xs tracking-wider font-semibold text-muted-foreground hover:text-[#c5a47e] transition flex items-center gap-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            <ChevronLeft size={16} />
            PREV
          </button>
          <div className="w-6 xl:w-8 h-px bg-muted-foreground"></div>
          <button
            onClick={nextSlide}
            className="text-xs tracking-wider font-semibold text-muted-foreground hover:text-[#c5a47e] transition flex items-center gap-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            NEXT
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col gap-4 xl:gap-6 text-[#c5a47e] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          <a href="https://www.instagram.com/global.apex_?igsh=MWF5d3V4NDkzaDgwaA==" className="hover:text-[#c5a47e] transition">
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
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden">
        <div
          className={`relative z-10 max-w-2xl text-center transition-all duration-1000 w-full ${
            hasLoaded && !isTransitioning
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-6 md:mb-8 leading-tight tracking-[0.2em] sm:tracking-[0.3em] uppercase px-4 silver-shine drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            {slides[currentSlide].title}
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-white/95 mb-8 md:mb-12 leading-relaxed font-medium tracking-wide px-4 sm:px-6 md:px-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            {slides[currentSlide].description}
          </p>

          {/* VIEW PRODUCTS Button - Scrolls to products section */}
          <button 
            onClick={handleViewProductsClick}
            className="group relative overflow-hidden px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-gradient-to-r from-[#b8966d] via-[#d6b793] to-[#b8966d] text-black text-xs sm:text-sm tracking-[0.2em] font-semibold hover:brightness-110 transition uppercase flex items-center gap-2 sm:gap-3 mx-auto rounded-full shadow-[0_0_20px_rgba(197,164,126,0.35)] hover:shadow-[0_0_30px_rgba(197,164,126,0.6)] cursor-pointer"
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent"></span>
            <span className="relative z-10 flex items-center gap-2 sm:gap-3">
              View Products
              <ChevronRight size={16} className="sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </span>
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
          <span className="text-xs tracking-widest text-muted-foreground flex items-center gap-1.5">
            <span className="gold-shine font-bold text-sm">{slides[currentSlide].number}</span> / {slides[currentSlide].total}
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