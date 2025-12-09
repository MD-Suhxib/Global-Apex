import type { Metadata } from "next"
import Work from "@/components/work"

export const metadata: Metadata = {
  title: "How We Work | Stone Supply Process | Global Apex Stone World",
  description:
    "Learn how Global Apex Stone World sources, supplies and delivers premium granite, marble and stone materials for residential and commercial projects. Simple and transparent process for architects and builders.",
  alternates: {
    canonical: "https://www.globalapexs.com/work",
  },
  openGraph: {
    title: "How We Work | Global Apex Stone World",
    description:
      "Stone sourcing, supply and delivery process explained. Import, export and wholesale support for construction and interior projects.",
    url: "https://www.globalapexs.com/work",
    siteName: "Global Apex Stone World",
    locale: "en_IN",
    type: "website",
  },
}

export default function WorkPage() {
  return (
    <main>
      <section aria-label="How We Work Process">
        <Work />
      </section>
    </main>
  )
}
