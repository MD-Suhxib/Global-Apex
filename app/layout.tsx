import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: {
    default: "Global Apex Stone World | Premium Granite & Marble Supplier",
    template: "%s | Global Apex Stone World",
  },
  description: "Premium Granite and Marble for luxury construction and interior design. Import, export & custom stone solutions for architects, builders, and interior designers.",
  keywords: [
    "granite",
    "marble",
    "premium stone",
    "luxury construction",
    "interior design",
    "countertops",
    "slabs",
    "granite supplier",
    "marble supplier",
    "stone import export",
  ],
  verification: {
    google: "PyqurmSvzmctsx50WLzvSLKGR34AppyCnUYgjvQaPZI",
  },
  metadataBase: new URL("https://www.globalapexs.com"),
  openGraph: {
    title: "Global Apex Stone World | Premium Granite & Marble Supplier",
    description: "Premium Granite and Marble for luxury construction and interior design. Import, export & custom stone solutions.",
    url: "https://www.globalapexs.com",
    siteName: "Global Apex Stone World",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Global Apex Granite and Marble",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Apex Stone World | Premium Granite & Marble Supplier",
    description: "Premium Granite and Marble for luxury construction and interior design.",
    images: ["/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.globalapexs.com/" />

        {/* Theme */}
        <meta name="theme-color" content="#ffffff" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Global Apex Stone World",
              url: "https://www.globalapexs.com",
              logo: "https://www.globalapexs.com/logo.png",
              description: "Premium Granite and Marble supplier for luxury construction and interior design",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
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

        {/* Elfsight */}
        <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
        <div
          className="elfsight-app-867d9541-0b11-4cab-b0c4-533541e21e61"
          data-elfsight-app-lazy
        />

        <Analytics />
      </body>
    </html>
  )
}
