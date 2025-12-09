import type { Metadata } from "next"
import Gallery04 from "@/components/gallery04"

export const metadata: Metadata = {
  title: "Rough Granite Blocks | Export Quality Blocks Supplier",
  description:
    "Buy high-quality rough granite blocks for cutting, processing and export. Reliable supply of raw granite blocks for factories, wholesalers and global trade.",
  alternates: {
    canonical: "https://www.globalapexs.com/gallery04",
  },
  openGraph: {
    title: "Rough Granite Blocks Supplier | Global Apex Stone World",
    description:
      "Export-grade rough granite blocks for cutting and fabrication industries. Trusted supplier for global trade and bulk purchase.",
    url: "https://www.globalapexs.com/gallery04",
    siteName: "Global Apex Stone World",
    images: [
      {
        url: "https://www.globalapexs.com/og-granite-blocks.jpg",
        width: 1200,
        height: 630,
        alt: "Rough Granite Blocks - Global Apex Supplier",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
}

export default function Gallery04Page() {
  return (
    <main>
      <section aria-label="Rough Granite Blocks Collection">
        <Gallery04 />
      </section>
    </main>
  )
}
