import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import HeroNew from "@/components/hero-new"
import AboutNew from "@/components/about-new"
import ProjectsSection from "@/components/projects-section"
import Testimonials from "@/components/testimonals"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

// ✔ SEO Metadata for Home Page
export const metadata: Metadata = {
  title: "Global Apex Stone World | Premium Granite & Marble Supplier",
  description:
    "Global Apex Stone World supplies premium granite and marble for residential and commercial projects. Import, export & custom stone solutions for architects, builders, and interior designers.",
  alternates: {
    canonical: "https://www.globalapexs.com/",
  },
  openGraph: {
    title: "Global Apex Stone World | Granite & Marble Supplier",
    description:
      "Premium quality granite and marble for luxury interiors, countertops, flooring, and export supply. Your Vision, Carved in Stone.",
    url: "https://www.globalapexs.com/",
    siteName: "Global Apex Stone World",
    locale: "en_IN",
    type: "website",
  },
}

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
