import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] })

export const metadata: Metadata = {
  title: "Global Apex | Premium Granite & Marble",
  description: "Premium Granite and Marble for luxury construction and interior design.",
  keywords: ["granite", "marble", "premium stone", "luxury construction", "interior design", "countertops", "slabs"],
  generator: "",
  verification: {
    google: "PyqurmSvzmctsx50WLzvSLKGR34AppyCnUYgjvQaPZI",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Global Apex | Premium Granite & Marble",
    description: "Premium Granite and Marble for luxury construction and interior design.",
    url: "https://www.globalapexs.com",
    siteName: "Global Apex",
    images: [
      {
        url: "/hero.jpg",
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
    description: "Premium Granite and Marble for luxury construction and interior design.",
    images: ["/hero.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico?v=1" />
        <link rel="shortcut icon" href="/favicon.ico?v=1" />
        <link rel="icon" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://globalapexs.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Global Apex",
              "url": "https://globalapexs.com",
              "logo": "https://globalapexs.com/placeholder-logo.png"
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
        <Script 
          src="https://elfsightcdn.com/platform.js" 
          strategy="lazyOnload"
        />

        <div 
          className="elfsight-app-867d9541-0b11-4cab-b0c4-533541e21e61" 
          data-elfsight-app-lazy
        />

        <Analytics />
      </body>
    </html>
  )
}
