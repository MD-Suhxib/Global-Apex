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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
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