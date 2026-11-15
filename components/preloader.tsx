"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

// In-memory session tracking: resets on page refresh or browser start, persists across client-side navigation
export let hasLoadedInitial = false

export default function Preloader() {
  const [loading, setLoading] = useState(!hasLoadedInitial)
  const [progress, setProgress] = useState(hasLoadedInitial ? 100 : 0)

  useEffect(() => {
    if (hasLoadedInitial) {
      setLoading(false)
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("preloader-finished"))
      }
      return
    }

    // Lock scroll while preloader is active
    document.body.style.overflow = "hidden"

    let interval: NodeJS.Timeout
    const startDelay = setTimeout(() => {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            return 100
          }
          // Steady cinematic pacing
          let step = 1
          if (prev < 30) {
            step = Math.floor(Math.random() * 2) + 2 // 2-3
          } else if (prev < 80) {
            step = Math.floor(Math.random() * 2) + 1 // 1-2
          } else if (prev < 95) {
            step = 1
          } else {
            step = 1
          }
          return Math.min(prev + step, 100)
        })
      }, 35)
    }, 150)

    return () => {
      clearTimeout(startDelay)
      if (interval) clearInterval(interval)
      document.body.style.overflow = ""
    }
  }, [])

  useEffect(() => {
    if (progress === 100 && !hasLoadedInitial) {
      const timer = setTimeout(() => {
        hasLoadedInitial = true
        setLoading(false)
        document.body.style.overflow = ""
        if (typeof window !== "undefined") {
          window.scrollTo(0, 0)
          window.dispatchEvent(new CustomEvent("preloader-finished"))
        }
      }, 400)
      return () => clearTimeout(timer)
    }
  }, [progress])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="global-apex-preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            transition: { duration: 0.85, ease: [0.77, 0, 0.175, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black select-none pointer-events-auto overflow-hidden"
        >
          {/* Subtle Ambient Golden Glow */}
          <div className="absolute w-[400px] h-[400px] rounded-full bg-[#c5a47e]/12 blur-[120px] pointer-events-none" />

          {/* Vignette overlay */}
          <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black pointer-events-none" />

          {/* Logo & Content Container - Refined, Tasteful & Balanced Size */}
          <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-sm sm:max-w-md">
            {/* Refined Stone Apex Emblem (Smaller & Elegant) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-4"
            >
              <div className="relative">
                {/* Soft ambient back-glow */}
                <div className="absolute inset-0 bg-[#c5a47e]/20 blur-lg rounded-full scale-105" />
                <img
                  src="/emblem-gold.png"
                  alt="Global Apex Emblem"
                  className="relative w-16 sm:w-20 md:w-24 h-auto object-contain drop-shadow-[0_0_20px_rgba(197,164,126,0.5)]"
                />
              </div>
            </motion.div>

            {/* Brand Title: GLOBAL APEX (Refined Size) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 sm:gap-2.5 text-xl sm:text-2xl md:text-3xl font-semibold tracking-[0.25em] sm:tracking-[0.3em]"
            >
              <span className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">GLOBAL</span>
              <span className="gold-shine">APEX</span>
            </motion.div>

            {/* Subtitle: NATURAL STONE . WORLDWIDE */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
              className="text-[10px] sm:text-xs tracking-[0.35em] sm:tracking-[0.4em] text-[#c5a47e]/80 uppercase mt-2.5 mb-8 font-light"
            >
              NATURAL STONE &bull; WORLDWIDE
            </motion.div>

            {/* Animated Loading Bar Container */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-52 sm:w-64 flex flex-col items-center"
            >
              {/* Outer Track */}
              <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden relative border border-[#c5a47e]/25">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#8e6d42] via-[#fef7ee] to-[#c5a47e] rounded-full shadow-[0_0_14px_rgba(197,164,126,0.9)] transition-all duration-75 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Status Row with Live Pulse and Percentage */}
              <div className="mt-3 flex items-center justify-between w-full text-[10px] sm:text-[11px] font-mono tracking-widest text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c5a47e] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c5a47e]"></span>
                  </span>
                  <span className="uppercase tracking-[0.2em] text-[#c5a47e]/90 text-[10px] font-medium">
                    {progress < 100 ? "LOADING" : "COMPLETE"}
                  </span>
                </div>
                <span className="text-[#c5a47e] font-semibold text-[11px]">
                  {progress}%
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
