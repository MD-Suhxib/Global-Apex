import type { Metadata } from "next"
import Gallery from "@/components/gallery"

export const metadata: Metadata = {
  title: "Granite Supplier | Premium Granite Slabs | Global Apex Stone World",
  description:
    "Premium granite slabs for countertops, flooring, and interior design. Discover top-quality granite varieties from Global Apex Stone World. Trusted supplier for architects & builders.",
  alternates: {
    canonical: "https://www.globalapexs.com/gallery",
  },
  openGraph: {
    title: "Granite Supplier | Premium Granite Slabs",
    description:
      "High-quality granite slabs for luxury homes and commercial projects. Import • Export • Wholesale • Custom stone solutions.",
    url: "https://www.globalapexs.com/gallery",
    siteName: "Global Apex Stone World",
    images: [
      {
        url: "https://www.globalapexs.com/og-granite.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Granite Slabs - Global Apex",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
}

export default function GalleryPage() {
  return (
    <main>
      <section aria-label="Granite Collection">
        <Gallery />
      </section>
    </main>
  )
}
