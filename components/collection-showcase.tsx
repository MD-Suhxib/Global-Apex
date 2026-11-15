"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Mountain } from "lucide-react"

interface SlideItem {
  id: number
  collection: string
  code: string
  subtitle: string
  mainImage: string
  mainImageAlt: string
  tag: string
  lead: string
  description: string
  metrics: { label: string; value: string }[]
}

const SLIDES: SlideItem[] = [
  {
    id: 1,
    collection: "Granite Mining",
    code: "MINING-01",
    subtitle: "Sourcing from Own Mines",
    mainImage: "/panoramic-granite-quarry.jpg",
    mainImageAlt: "Panoramic Granite Quarry with Derrick Crane and Stepped Granite Blocks",
    tag: "DIRECT QUARRY EXTRACTION // 20+ YEARS",
    lead: "Vertical Quarry Ownership & Industrial Extraction",
    description:
      "Directly owning and operating our granite quarries for over two decades. We extract premier raw granite blocks using heavy derrick cranes and diamond wire saws, ensuring zero intermediaries, superior geological density, and massive supply reliability for monumental global projects.",
    metrics: [
      { label: "Quarry Ownership", value: "20+ Yrs" },
      { label: "Mines Operated", value: "100% Direct" },
      { label: "Structural Purity", value: "Grade A+" },
    ],
  },
  {
    id: 2,
    collection: "Stone Processing",
    code: "PROCESSING-02",
    subtitle: "Precision Cutting & Calibration",
    mainImage: "/stone-processing.jpg",
    mainImageAlt: "Heavy Diamond Circular Saw Blade Cutting Stone Slab with Water Jet",
    tag: "FACTORY FABRICATION // HIGH PRECISION",
    lead: "High-Tolerance Multi-Blade Cutting & Slab Calibration",
    description:
      "Our state-of-the-art processing facility transforms raw quarry blocks into calibrated slabs with millimeter precision. Equipped with heavy diamond circular saws, multi-wire gangsaw machinery, automated resin lines, and computerized bridge saws for flawless architectural sizing.",
    metrics: [
      { label: "Slab Tolerance", value: "±0.5 mm" },
      { label: "Machinery", value: "Multi-Blade" },
      { label: "Resin Fortified", value: "Italian Epoxy" },
    ],
  },
  {
    id: 3,
    collection: "Material Texture",
    code: "TEXTURE-03",
    subtitle: "Exotic Formations & Natural Veining",
    mainImage: "/material-texture.jpg",
    mainImageAlt: "High-Res Black and White Granite Natural Stone Texture Swirl",
    tag: "EXOTIC GEOLOGY // BESPOKE SURFACES",
    lead: "Dramatic Crystalline Formations & Tactile Surfaces",
    description:
      "Every stone slab is a unique natural masterpiece. We curate exquisite swirling veins, deep crystalline structures, and rich mineral tones—finished across distinctive styles including diamond mirror polish, tactile silk leathered, antique honed, and thermal flamed textures.",
    metrics: [
      { label: "Surface Finishes", value: "6 Styles" },
      { label: "Natural Stone", value: "100% Virgin" },
      { label: "Gloss Level", value: "95+ GU" },
    ],
  },
  {
    id: 4,
    collection: "Architectural Fit outs",
    code: "FITOUTS-04",
    subtitle: "Custom Residential & Commercial Spaces",
    mainImage: "/architectural-fitouts.jpg",
    mainImageAlt: "Modern Architectural Luxury Kitchen with Marble Waterfall Island",
    tag: "BESPOKE ARCHITECTURE // PENTHOUSES & HOTELS",
    lead: "Monolithic Kitchen Islands & Master Stone Architecture",
    description:
      "Transforming monolithic stone into breathtaking architectural centerpieces: seamless waterfall kitchen islands, continuous bookmatched feature walls, cantilevered stone staircases, and custom vanity suites engineered with invisible 45° precision miter joints.",
    metrics: [
      { label: "Edge Profiles", value: "45° Miter" },
      { label: "Bookmatching", value: "Continuous" },
      { label: "Turnkey Fitout", value: "Custom" },
    ],
  },
  {
    id: 5,
    collection: "Worldwide Export",
    code: "EXPORT-05",
    subtitle: "Global Sea Port Logistics & Delivery",
    mainImage: "/worldwide-export.jpg",
    mainImageAlt: "Shipping Container Yard with Port Reach Stacker Crane for Global Export",
    tag: "INTERNATIONAL LOGISTICS // DIRECT PORT DISPATCH",
    lead: "Direct Ocean Freight from Indian Ports to the World",
    description:
      "With a fully managed international supply chain, Global Apex exports raw blocks, calibrated slabs, and custom-cut architectural stone directly from major Indian deepwater seaports. All cargo is packed in fumigated ISPM-15 wooden crates with heavy steel bracing.",
    metrics: [
      { label: "Export Reach", value: "Worldwide" },
      { label: "Packing Standard", value: "ISPM-15" },
      { label: "Direct Freight", value: "Ocean Port" },
    ],
  },
]

export default function CollectionShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1) // 1 = forward, -1 = backward

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length)
  }, [])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)
  }, [])

  const goToSlide = (idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1)
    setCurrentIndex(idx)
  }

  // Auto-sliding interval: advances automatically every 3.5 seconds (resets on manual navigation)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5500)
    return () => clearInterval(timer)
  }, [nextSlide, currentIndex])

  const slide = SLIDES[currentIndex]

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 30 : -30,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 280, damping: 30 },
        opacity: { duration: 0.4 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -30 : 30,
      opacity: 0,
      transition: {
        x: { type: "spring" as const, stiffness: 280, damping: 30 },
        opacity: { duration: 0.3 },
      },
    }),
  }

  return (
    <section
      id="about"
      aria-label="About Global Apex - Granite Mining and Stone Excellence"
      className="relative w-full max-w-full bg-black text-white py-12 sm:py-16 lg:py-20 overflow-x-hidden border-t border-b border-white/10 scroll-mt-20"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(197,164,126,0.08),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 mb-6 sm:mb-10 pb-5 sm:pb-6 border-b border-white/10">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#c5a47e] shadow-[0_0_8px_#c5a47e] flex-shrink-0" />
              <span className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#c5a47e] font-medium truncate">
                NATURAL STONE EXCELLENCE // GLOBAL APEX
              </span>
            </div>
            <div className="flex items-baseline gap-3 sm:gap-4 flex-wrap">
              <h2 className="text-xl sm:text-3xl md:text-4xl font-light tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white break-words">
                {slide.collection}
              </h2>
              <span className="text-[11px] sm:text-xs font-mono text-white/60 px-2 py-0.5 rounded border border-white/15 bg-white/5 flex-shrink-0">
                {slide.code}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 tracking-wider uppercase mt-1 break-words">
              {slide.subtitle}
            </p>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-6 w-full md:w-auto pt-2 md:pt-0">
            {/* Number Indicator */}
            <div className="text-xs sm:text-sm font-mono tracking-widest text-neutral-400">
              <span className="text-white font-semibold">0{currentIndex + 1}</span>
              <span className="text-neutral-600 mx-1">/</span>
              <span>0{SLIDES.length}</span>
            </div>

            {/* Pagination Dots / Bars */}
            <div className="flex items-center gap-1.5">
              {SLIDES.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => goToSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-6 sm:w-8 bg-[#c5a47e] shadow-[0_0_8px_rgba(197,164,126,0.6)]"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/15 bg-neutral-950/80 hover:bg-white/10 hover:border-white/30 flex items-center justify-center transition-all group flex-shrink-0"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-300 group-hover:text-white transition-colors" />
              </button>
              <button
                onClick={nextSlide}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#c5a47e]/40 bg-[#c5a47e]/10 hover:bg-[#c5a47e]/25 hover:border-[#c5a47e] flex items-center justify-center transition-all group shadow-[0_0_12px_rgba(197,164,126,0.15)] flex-shrink-0"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#c5a47e] group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Architectural Board Container */}
        <div className="relative bg-[#0d0d0e] border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-5 lg:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden w-full max-w-full">
          {/* Subtle Grid Canvas Background */}
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Animated Slide Content */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={slide.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-stretch w-full max-w-full"
            >
              {/* Left Column: Vertical Brand Watermark + Main Image (approx 7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between relative w-full min-w-0">
                <div className="relative rounded-lg sm:rounded-xl overflow-hidden border border-white/10 bg-black aspect-[16/11] sm:aspect-[16/10] shadow-2xl group w-full">
                  {/* Vertical Brand Watermark on Left side */}
                  <div className="absolute left-0 top-0 bottom-0 z-20 w-10 sm:w-16 bg-gradient-to-r from-black/85 via-black/40 to-transparent flex flex-col justify-end items-center pb-4 sm:pb-6 pointer-events-none">
                    <div className="flex items-center gap-2 sm:gap-3 -rotate-90 origin-center translate-y-[-20px] sm:translate-y-[-32px]">
                      <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 relative flex-shrink-0">
                        <Image
                          src="/emblem-gold.png"
                          alt="Global Apex Emblem"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] sm:tracking-[0.35em] text-white/90 uppercase whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                        GLOBAL APEX
                      </span>
                    </div>
                  </div>

                  {/* Main Hero Image */}
                  <Image
                    src={slide.mainImage}
                    alt={slide.mainImageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />

                  {/* Soft Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c5a47e] via-white/40 to-transparent" />
                </div>
              </div>

              {/* Right Column: Clean Editorial Content & Stats */}
              <div className="lg:col-span-5 flex flex-col justify-between rounded-xl bg-neutral-900/80 border border-white/10 p-4 sm:p-6 lg:p-7 backdrop-blur-md shadow-xl relative overflow-hidden w-full min-w-0">
                {/* Top Subtle Amber Glow */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#c5a47e]/10 blur-3xl rounded-full pointer-events-none" />

                <div className="flex flex-col justify-center flex-1 min-w-0">
                  {/* Category / Scope Tag */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4 border-b border-white/10 pb-2.5 sm:pb-3 gap-2 min-w-0">
                    <span className="text-[9px] sm:text-[11px] font-mono tracking-wider sm:tracking-[0.2em] uppercase text-[#c5a47e] font-semibold flex items-center gap-1.5 min-w-0 truncate">
                      <Mountain className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="truncate">{slide.tag}</span>
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-mono text-neutral-400 border border-white/15 px-2 py-0.5 rounded bg-white/5 flex-shrink-0">
                      {slide.code}
                    </span>
                  </div>

                  {/* Lead Headline */}
                  <h3 className="text-base sm:text-xl md:text-2xl font-light tracking-wide text-white mb-2.5 sm:mb-4 leading-snug break-words">
                    {slide.lead}
                  </h3>

                  {/* Description Paragraph */}
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light mb-4 sm:mb-6 break-words">
                    {slide.description}
                  </p>
                </div>

                {/* Bottom Metrics Bar */}
                <div className="pt-3 sm:pt-5 border-t border-white/10 grid grid-cols-3 gap-1.5 sm:gap-3 w-full min-w-0">
                  {slide.metrics.map((m, i) => (
                    <div
                      key={i}
                      className="p-1.5 sm:p-2.5 rounded-lg bg-black/60 border border-white/10 text-center hover:border-[#c5a47e]/30 transition-colors min-w-0 flex flex-col justify-center overflow-hidden"
                    >
                      <div className="text-[11px] sm:text-xs md:text-sm font-semibold text-[#c5a47e] font-mono leading-tight truncate px-0.5">
                        {m.value}
                      </div>
                      <div className="text-[7.5px] sm:text-[9px] uppercase tracking-normal sm:tracking-wider text-neutral-400 mt-0.5 sm:mt-1 font-mono leading-tight line-clamp-2 px-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
