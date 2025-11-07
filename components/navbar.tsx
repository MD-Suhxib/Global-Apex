"use client"

import { useState, useEffect } from "react"

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setIsVisible(false)
      } else {
        // Scrolling up
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.querySelector(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <nav 
      className={`bg-primary/5 border-b border-border fixed top-0 left-0 right-0 z-50 py-4 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wider">
            <span className="text-foreground">Global</span>
            <span className="text-foreground brightness-125 contrast-125">.Apex</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12 items-center">
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, "#home")}
              className="text-xs tracking-widest text-foreground brightness-110 hover:text-accent transition uppercase"
            >
              HOME
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleSmoothScroll(e, "#about")}
              className="text-xs tracking-widest text-foreground brightness-110 hover:text-accent transition uppercase"
            >
              ABOUT US
            </a>
            <a
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, "#projects")}
              className="text-xs tracking-widest text-foreground brightness-110 hover:text-accent transition uppercase"
            >
              PRODUCTS
            </a>
            <a
              href="#gallery"
              onClick={(e) => handleSmoothScroll(e, "#gallery")}
              className="text-xs tracking-widest text-foreground brightness-110 hover:text-accent transition uppercase"
            >
              WORK
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="text-xs tracking-widest text-foreground brightness-110 hover:text-accent transition uppercase"
            >
              CONTACTS
            </a>
          </div>

          {/* Contact */}
          {/* <div className="hidden md:block text-xs tracking-widest text-muted-foreground">+7 (212) 674-25-10</div> */}
        </div>
      </div>
    </nav>
  )
}