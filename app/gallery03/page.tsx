import type { Metadata } from "next"
import Gallery03 from "@/components/gallery03"

export const metadata: Metadata = {
  title: "Stone Decor | Wall Cladding Designs & Decorative Stone Tiles",
  description:
    "Explore premium stone décor for feature walls, cladding and interior design. Stylish patterns, textures and finishes for luxury homes and commercial spaces.",
  alternates: {
    canonical: "https://www.globalapexs.com/gallery03",
  },
  openGraph: {
    title: "Premium Stone Decor | Designer Wall Cladding",
    description:
      "Unique designer stone décor panels and cladding options for interior and exterior elevation designs. Elevate your spaces with Global Apex Stone World.",
    url: "https://www.globalapexs.com/gallery03",
    siteName: "Global Apex Stone World",
    images: [
      {
        url: "https://www.globalapexs.com/og-stone-decor.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury Stone Decor for Feature Walls - Global Apex",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
}

export default function Gallery03Page() {
  return (
    <main>
      <section aria-label="Stone Decor Collection">
        <Gallery03 />
      </section>
    </main>
  )
}
