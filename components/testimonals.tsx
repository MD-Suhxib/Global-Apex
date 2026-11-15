"use client"

import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

interface TestimonialItem {
  id: number
  name: string
  role: string
  company: string
  project?: string
  initials: string
  rating: number
  text: string
  verified: boolean
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Lead Architect",
    company: "Design Studio International",
    project: "CORPORATE OFFICE, MUMBAI",
    initials: "PS",
    rating: 5,
    verified: true,
    text: "The marble selection from Global Apex transformed our commercial space into a masterpiece. Their attention to detail and quality control is remarkable. Highly recommended for architects working on luxury projects.",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Project Manager",
    company: "Foxconn Pvt Ltd.",
    project: "PREMIUM RESIDENTIAL COMPLEX",
    initials: "RK",
    rating: 5,
    verified: true,
    text: "Global Apex provided exceptional granite for our premium residential project. The quality and finish exceeded our expectations. Their team was professional and delivered on time, making our luxury Company project a huge success.",
  },
  {
    id: 3,
    name: "Sanjay Mehta",
    role: "CEO",
    company: "Elite Developers",
    project: "COMMERCIAL LANDMARKS",
    initials: "SM",
    rating: 5,
    verified: true,
    text: "The exotic granite collection helped us create unique spaces that impressed our most discerning clients. Global Apex's expertise in stone selection is unmatched in the industry.",
  },
  {
    id: 4,
    name: "Amit Patel",
    role: "Procurement Head",
    company: "Heritage Hotels Group",
    project: "5-STAR HOTEL CHAIN",
    initials: "AP",
    rating: 5,
    verified: true,
    text: "We've been sourcing stones from Global Apex for 3 years across multiple hotel projects. Consistent quality, reliable delivery, and excellent customer service. They understand luxury requirements perfectly.",
  },
  {
    id: 5,
    name: "Vikram Singhania",
    role: "Principal Designer",
    company: "Aura Luxury Residences, Dubai",
    project: "ULTRA-LUXURY PENTHOUSES",
    initials: "VS",
    rating: 5,
    verified: true,
    text: "The bookmatched granite slabs and precision-mitered waterfall island supplied by Global Apex are absolute showstoppers. Their ability to deliver export-grade blocks with exact vein continuity made our turnkey penthouse project truly world-class.",
  },
  {
    id: 6,
    name: "Elena Rostova",
    role: "Chief Sourcing Director",
    company: "Continental Façades & Resorts",
    project: "WATERFRONT LUXURY RESORTS",
    initials: "ER",
    rating: 5,
    verified: true,
    text: "Sourcing zero-defect granite blocks directly from their proprietary quarries gave us complete peace of mind. Global Apex handled international ocean freight, ISPM-15 crating, and strict calibration flawlessly.",
  },
]

export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  // Sync state when carousel changes
  const onSelect = useCallback(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
  }, [api])

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())
    api.on("select", onSelect)
    api.on("reInit", onSelect)

    // Auto-advance every 3.5 seconds (3 to 4 secs)
    const interval = setInterval(() => {
      api.scrollNext()
    }, 3500)

    return () => {
      clearInterval(interval)
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api, onSelect, current]) // re-creates interval on current change so manual interaction resets countdown

  const scrollPrev = () => api?.scrollPrev()
  const scrollNext = () => api?.scrollNext()
  const scrollTo = (index: number) => api?.scrollTo(index)

  return (
    <section
      id="testimonials"
      aria-label="Client Testimonials - What Our Clients Say"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-black text-white border-t border-b border-white/10 overflow-hidden"
    >
      {/* Subtle Black & Gold Ambient Background */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(197,164,126,0.1),transparent_65%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(197,164,126,0.05),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#c5a47e] shadow-[0_0_8px_#c5a47e]" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.3em] text-[#c5a47e] uppercase">
              CLIENT REVIEWS // GLOBAL APEX
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.15em] uppercase text-white mb-3">
            WHAT OUR CLIENTS <span className="text-[#c5a47e] font-normal">SAY</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
            Short notes from architects, developers, and hospitality leaders who build with our stone every day.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              loop: true,
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 sm:-ml-6">
              {TESTIMONIALS.map((t) => (
                <CarouselItem
                  key={t.id}
                  className="pl-4 sm:pl-6 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/3"
                >
                  <div className="h-full bg-[#0d0d0e] rounded-2xl border border-white/10 p-6 sm:p-7 shadow-[0_15px_35px_rgba(0,0,0,0.85)] hover:border-[#c5a47e]/50 hover:shadow-[0_15px_40px_rgba(197,164,126,0.12)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                    {/* Top Subtle Amber Ambient Glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a47e]/5 blur-2xl rounded-full pointer-events-none group-hover:bg-[#c5a47e]/10 transition-colors" />

                    <div className="relative z-10 flex flex-col flex-1">
                      {/* Top: 5 Gold Stars + Quote Icon */}
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-[#c5a47e] text-[#c5a47e] drop-shadow-[0_0_4px_rgba(197,164,126,0.4)]"
                            />
                          ))}
                        </div>
                        <Quote className="w-5 h-5 text-[#c5a47e]/30 group-hover:text-[#c5a47e]/60 transition-colors flex-shrink-0" />
                      </div>

                      {/* Project Scope Tag */}
                      {t.project && (
                        <div className="mb-3">
                          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase text-[#c5a47e] font-medium">
                            {t.project}
                          </span>
                        </div>
                      )}

                      {/* Review Text */}
                      <p className="text-neutral-300 text-sm sm:text-[14.5px] leading-relaxed font-light flex-1 italic mb-6">
                        "{t.text}"
                      </p>
                    </div>

                    {/* Bottom: Client Details & Initials Avatar */}
                    <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#c5a47e]/15 border border-[#c5a47e]/35 flex items-center justify-center flex-shrink-0 group-hover:border-[#c5a47e] transition-colors shadow-[0_0_8px_rgba(197,164,126,0.15)]">
                          <span className="text-xs sm:text-sm font-bold text-[#c5a47e]">
                            {t.initials}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-xs sm:text-[13px] tracking-wide text-white">
                            {t.name}
                          </h4>
                          <p className="text-neutral-400 text-[11px] sm:text-xs">
                            {t.role}
                          </p>
                          <p className="text-[#c5a47e] text-[11px] sm:text-xs font-medium">
                            {t.company}
                          </p>
                        </div>
                      </div>

                      {t.verified && (
                        <span className="text-[9px] font-mono font-semibold text-[#c5a47e] bg-[#c5a47e]/10 border border-[#c5a47e]/30 px-2 py-0.5 rounded tracking-wider uppercase shadow-[0_0_6px_rgba(197,164,126,0.1)] flex-shrink-0">
                          VERIFIED
                        </span>
                      )}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Slider Controls: Prev/Next Buttons and Pagination Dots */}
          <div className="flex items-center justify-between gap-4 mt-8 sm:mt-10 pt-4">
            {/* Number Counter */}
            <div className="text-xs sm:text-sm font-mono tracking-widest text-neutral-400">
              <span className="text-white font-semibold">0{current + 1}</span>
              <span className="text-neutral-600 mx-1.5">/</span>
              <span>0{count || TESTIMONIALS.length}</span>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollTo(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === current
                      ? "w-8 bg-[#c5a47e] shadow-[0_0_8px_rgba(197,164,126,0.6)]"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={scrollPrev}
                className="w-10 h-10 rounded-full border border-white/15 bg-neutral-950/80 hover:bg-white/10 hover:border-white/30 flex items-center justify-center transition-all group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-neutral-300 group-hover:text-white transition-colors" />
              </button>
              <button
                onClick={scrollNext}
                className="w-10 h-10 rounded-full border border-[#c5a47e]/40 bg-[#c5a47e]/10 hover:bg-[#c5a47e]/25 hover:border-[#c5a47e] flex items-center justify-center transition-all group shadow-[0_0_12px_rgba(197,164,126,0.15)]"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-[#c5a47e] group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
