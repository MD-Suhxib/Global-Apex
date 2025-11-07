"use client"
import Navbar from "@/components/navbar"
import HeroNew from "@/components/hero-new"
import AboutNew from "@/components/about-new"
import ProjectsSection from "@/components/projects-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroNew />
      <AboutNew />
      <ProjectsSection />
      <Footer />
    </main>
  )
}
