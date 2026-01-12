import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] })

export const metadata: Metadata = {
  title: "Global Apex | Premium Granite & Marble",
  description: "Premium Granite slabs, tiles and marble supplied from Karnataka’s best quarries and factories.",
  keywords: ["granite supplier", "granite slabs", "marble", "stone trader", "Bangalore granite", "Karnataka granite"],
  verification: {
    google: "PyqurmSvzmctsx50WLzvSLKGR34AppyCnUYgjvQaPZI",
  },
  openGraph: {
    title: "Global Apex | Premium Granite & Marble",
    description: "Premium Granite slabs, tiles and marble supplied from Karnataka’s best quarries and factories.",
    url: "https://globalapexs.com",
    siteName: "Global Apex",
    images: [
      {
        url: "https://globalapexs.com/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Global Apex Granite and Marble",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Apex | Premium Granite & Marble",
    description: "Premium Granite slabs, tiles and marble supplied from Karnataka’s best quarries and factories.",
    images: ["https://globalapexs.com/hero.jpg"],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Canonical */}
        <link rel="canonical" href="https://globalapexs.com/" />

        {/* Theme */}
        <meta name="theme-color" content="#0b132b" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Global Apex",
              url: "https://globalapexs.com",
              logo: "https://globalapexs.com/logo.png",
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className={`${poppins.className} antialiased`}>
        {children}

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-BE23N743ZX"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BE23N743ZX');
            `,
          }}
        />

        <Analytics />
      </body>
    </html>
  )
}
