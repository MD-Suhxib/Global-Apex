import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] })

export const metadata: Metadata = {
  title: "GLOBAL APEX — Premium Granite & Marble",
  description: "Global Apex — premium granite & marble collections for architects, designers and luxury projects. Handpicked stones, custom solutions and worldwide sourcing.",
  generator: "Next.js",
  keywords: "granite, marble, premium stones, luxury construction, interior design, India granite",
  authors: [{ name: "Global Apex" }],
  creator: "Global Apex",
  publisher: "Global Apex",
  metadataBase: new URL('https://globalapexs.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    title: "GLOBAL APEX — Premium Granite & Marble",
    description: "Discover our curated granite and marble collections — premium stones for residential and commercial luxury projects.",
    url: "https://globalapexs.com",
    siteName: "GLOBAL APEX",
    images: [
      {
        url: "/og-image.jpg", // Make sure this file exists in /public
        width: 1200,
        height: 630,
        alt: "Premium granite and marble slabs",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "GLOBAL APEX — Premium Granite & Marble",
    description: "Discover curated granite and marble collections for luxury projects.",
    images: ["/og-image.jpg"], // Make sure this file exists in /public
    creator: "@globalapex",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#c5a47e" },
    ],
  },
  other: {
    'msapplication-TileColor': '#c5a47e',
    'theme-color': '#c5a47e',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GLOBAL APEX',
    url: 'https://globalapexs.com/',
    logo: 'https://globalapexs.com/logo.png',
    description: 'Premium Granite and Marble for luxury construction and interior design.',
    sameAs: [
      'https://www.instagram.com/global.apex_',
      'https://twitter.com/yourprofile',
      'https://www.facebook.com/yourpage'
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91 8618271718',
        contactType: 'customer service',
        areaServed: 'Worldwide',
        availableLanguage: ['English']
      }
    ]
  }

  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Search Console Verification */}
        <meta 
          name="google-site-verification" 
          content="PyqurmSvzmctsx50WLzvSLKGR34AppyCnUYgjvQaPZI" 
        />
        
        {/* Google Analytics - Fixed */}
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

        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <Script 
          src="https://elfsightcdn.com/platform.js" 
          strategy="lazyOnload"
        />
      </head>
      <body className={`${poppins.className} antialiased`}>
        {children}
        
        {/* Elfsight WhatsApp Chat Widget */}
        <div 
          className="elfsight-app-867d9541-0b11-4cab-b0c4-533541e21e61" 
          data-elfsight-app-lazy
        />
        
        <Analytics />
      </body>
    </html>
  )
}