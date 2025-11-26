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
  generator: "v0.app",
  icons: {
    icon: [
      // Main favicon
      { url: "/favicon.ico" },
      // PNG versions for different sizes
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      // Apple touch icon
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      // Safari pinned tab icon
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#c5a47e" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Search Console Verification */}
        <meta 
          name="google-site-verification" 
          content="PyqurmSvzmctsx50WLzvSLKGR34AppyCnUYgjvQaPZI" 
        />
        
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-BE23N743ZX`} // Replace with your Measurement ID
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BE23N743ZX'); // Replace with your Measurement ID
            `,
          }}
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