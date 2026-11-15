"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Preloader, { hasLoadedInitial } from "@/components/preloader"
import Navbar from "@/components/navbar"
import HeroNew from "@/components/hero-new"
import CollectionShowcase from "@/components/collection-showcase"
import ProjectsSection from "@/components/projects-section"
import Testimonials from "@/components/testimonals"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  const [isReady, setIsReady] = useState(hasLoadedInitial)

  useEffect(() => {
    // Prevent browser from auto-scrolling down to previous session position
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }
    window.scrollTo(0, 0)

    if (hasLoadedInitial) {
      setIsReady(true)
      return
    }

    const handleLoaded = () => {
      window.scrollTo(0, 0)
      setIsReady(true)
    }

    window.addEventListener("preloader-finished", handleLoaded)

    // Safety fallback: ensure content is revealed even if event fires early
    const timer = setTimeout(() => {
      window.scrollTo(0, 0)
      setIsReady(true)
    }, 4500)

    return () => {
      window.removeEventListener("preloader-finished", handleLoaded)
      clearTimeout(timer)
    }
  }, [])

  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden">
      <Preloader />

      {/* Navbar placed outside transforms to maintain true fixed top-0 viewport position */}
      <Navbar />

      {/* Website reveals in a smooth, seamless opacity flow with zero vertical jump */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: isReady ? 1 : 0,
        }}
        transition={{
          duration: 0.95,
          ease: "easeOut",
        }}
        className="w-full"
      >
        <HeroNew />

        {/* New About Section: Vertical Stone Process & Sourcing from Own Mines */}
        <CollectionShowcase />

        <section aria-label="Granite and Marble Projects">
          <ProjectsSection />
        </section>

        <section aria-label="Client Reviews and Testimonials">
          <Testimonials />
        </section>

        <CTA />

        <Footer />
      </motion.div>
    </main>
  )
}
