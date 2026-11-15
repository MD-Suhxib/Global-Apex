"use client"

import { useState, useEffect } from "react"

export default function AboutNew() {
  const images = [
    "/granite.jpg",
    "/granite-sample.jpg",
    "/quarry.png",
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  const expertiseItems = [
    {
      title: "QUARRY OWNERS",
      description:
        "Owners of premium quarries for 20+ years, supplying large volumes of high-quality raw granite blocks globally.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full text-[#c5a47e] gold-icon-shine"
        >
          <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      title: "GRANITE",
      description:
        "Premium Granite sourcing for Export, showrooms, countertops, flooring, and luxury applications.",
      icon: (
        <img
          src="/icon1.png"
          alt="Granite Icon"
          className="w-full h-full object-contain gold-icon-shine"
        />
      ),
    },
    {
      title: "MARBLE",
      description:
        "Exotic and classic marble collections for architectural features and design.",
      icon: (
        <img
          src="/icon3.png"
          alt="Marble Icon"
          className="w-full h-full object-contain gold-icon-shine"
        />
      ),
    },
    {
      title: "INSTALLATION",
      description:
        "Professional installation services by world-class certified stone experts.",
      icon: (
        <img
          src="/icon2.png"
          alt="Installation Icon"
          className="w-full h-full object-contain gold-icon-shine"
        />
      ),
    },
  ]

  return (
    <section id="about" className="bg-black text-white py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-[#c5a47e]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            ABOUT <span className="text-[#c5a47e]">GLOBAL APEX</span>
          </h2>
        </div>

        {/* Content Grid: 2 Columns - Left: Expertise, Right: Images */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Column - Our Expertise */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Our Expertise:
              </h3>
              <div className="h-0.5 w-12 bg-[#c5a47e]" />
            </div>

            <div className="space-y-4 sm:space-y-5">
              {expertiseItems.map((item, idx) => (
                <div
                  key={idx}
                  className="group p-5 sm:p-6 rounded-xl border border-[#c5a47e]/25 bg-gradient-to-r from-white/[0.04] to-transparent hover:border-[#c5a47e]/60 hover:from-white/[0.07] transition-all duration-300 hover:translate-x-1.5"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    {/* Glowing Gold Icon Box */}
                    <div className="w-12 h-12 rounded-xl border border-[#c5a47e]/60 flex items-center justify-center p-2.5 bg-gradient-to-br from-[#c5a47e]/25 via-[#c5a47e]/10 to-black/60 shadow-[0_0_15px_rgba(197,164,126,0.35)] group-hover:shadow-[0_0_25px_rgba(197,164,126,0.65)] group-hover:border-[#c5a47e] transition-all duration-300 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm sm:text-base font-bold tracking-widest uppercase mb-1.5 gold-shine">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Auto Sliding Images */}
          <div className="lg:col-span-6">
            <div className="relative h-80 sm:h-96 md:h-[480px] lg:h-[540px] xl:h-[580px] overflow-hidden rounded-2xl shadow-2xl border border-[#c5a47e]/30">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img || "/placeholder.svg"}
                  alt={`Slide ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                    index === currentIndex
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

              {/* Slide Indicators */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2.5 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-[#c5a47e]"
                        : "w-2 bg-white/50 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Bottom Navigation */}
        <div className="lg:hidden mt-8 pt-8 border-t border-[#c5a47e]/20">
          <div className="flex justify-between items-center">
            <button
              onClick={() =>
                setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
              }
              className="text-[#c5a47e] font-semibold text-sm flex items-center gap-2"
            >
              ← Previous
            </button>
            <span className="text-xs text-muted-foreground font-mono">
              {currentIndex + 1} / {images.length}
            </span>
            <button
              onClick={() =>
                setCurrentIndex((prev) => (prev + 1) % images.length)
              }
              className="text-[#c5a47e] font-semibold text-sm flex items-center gap-2"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
