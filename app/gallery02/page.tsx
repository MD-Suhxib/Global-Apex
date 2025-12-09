import type { Metadata } from "next"
import Gallery02 from "@/components/gallery02"

export const metadata: Metadata = {
  title: "Marble Supplier | Premium Marble Slabs | Global Apex Stone World",
  description:
    "Discover premium marble slabs for luxury interiors, countertops, flooring and wall designs. Trusted marble supplier for architects, traders & designers.",
  alternates: {
    canonical: "https://www.globalapexs.com/gallery02",
  },
  openGraph: {
    title: "Premium Marble Supplier | Global Apex Stone World",
    description:
      "Exclusive imported and premium marble slabs for high-end projects. Explore elegant marble selections.",
    url: "https://www.globalapexs.com/gallery02",
    siteName: "Global Apex Stone World",
    images: [
      {
        url: "https://www.globalapexs.com/og-marble.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Marble Slabs - Global Apex",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
}

export default function MarbleGalleryPage() {
  return (
    <main>
      <section aria-label="Marble Collection">
        <Gallery02 />
      </section>
    </main>
  )
}
