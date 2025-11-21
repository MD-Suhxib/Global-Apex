"use client"
import Navbar from "@/components/navbar"
import HeroNew from "@/components/hero-new"
import AboutNew from "@/components/about-new"
import ProjectsSection from "@/components/projects-section"
import Testimonials from "@/components/testimonals"
import CTA from "@/components/cta" // Add this import
import Work from "@/components/work"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroNew />
      <AboutNew />
      <ProjectsSection />
      <Testimonials /> 
      <CTA /> {/* Add this line - it will appear after Projects and before Footer */}
      {/* <Work/> */}
      <Footer />
    </main>
  )
}