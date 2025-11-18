"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

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

  // Close mobile menu when scrolling
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }
  }, [pathname])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsMobileMenuOpen(false)
    }
  }

  // Check if we're on the home page for smooth scroll behavior
  const isHomePage = pathname === "/"

  const navLinks = [
    { name: "HOME", href: "#home", target: "home" },
    { name: "ABOUT US", href: "#about", target: "about" },
    { name: "PRODUCTS", href: "#projects", target: "projects" },
    { name: "WORK", href: "/work" },
    { name: "CONTACTS", href: "#contact", target: "contact" }, // Updated target to "contact"
  ]

  return (
    <nav 
      className={`bg-black/80 backdrop-blur-md border-b border-[#c5a47e]/20 fixed top-0 left-0 right-0 z-50 py-3 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold tracking-wider">
            <Link href="/" className="flex items-center">
              <span className="text-white">GLOBAL</span>
              <span className="text-[#c5a47e]">APEX</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 lg:space-x-12 items-center">
            {navLinks.map((link) => (
              isHomePage && link.target ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.target!)}
                  className="text-xs tracking-widest text-white hover:text-[#c5a47e] transition-colors duration-300 uppercase font-medium"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs tracking-widest text-white hover:text-[#c5a47e] transition-colors duration-300 uppercase font-medium"
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#c5a47e] p-2 hover:bg-[#c5a47e]/10 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}>
          <div className="bg-black/90 backdrop-blur-lg rounded-lg border border-[#c5a47e]/20 p-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link, index) => (
                isHomePage && link.target ? (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.target!)}
                    className="text-sm tracking-widest text-white hover:text-[#c5a47e] transition-colors duration-300 uppercase font-medium py-2 px-3 rounded hover:bg-[#c5a47e]/10"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm tracking-widest text-white hover:text-[#c5a47e] transition-colors duration-300 uppercase font-medium py-2 px-3 rounded hover:bg-[#c5a47e]/10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}