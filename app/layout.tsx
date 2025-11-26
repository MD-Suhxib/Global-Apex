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
  verification: {
    google: "PyqurmSvzmctsx50WLzvSLKGR34AppyCnUYgjvQaPZI", // ✔ Correct location for GSC tag
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
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
