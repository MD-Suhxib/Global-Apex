import Navbar from "@/components/navbar"
import HeroNew from "@/components/hero-new"
import AboutNew from "@/components/about-new"
import ProjectsSection from "@/components/projects-section"
import Testimonials from "@/components/testimonals"
import CTA from "@/components/cta"
import Footer from "@/components/footer"


export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <HeroNew />

      <section aria-label="About Global Apex Stone World">
        <AboutNew />
      </section>

      <section aria-label="Granite and Marble Projects">
        <ProjectsSection />
      </section>

      <section aria-label="Client Reviews and Testimonials">
        <Testimonials />
      </section>

      <CTA />

      <Footer />
    </main>
  )
}
