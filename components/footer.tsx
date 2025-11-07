"use client"

import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              <span className="text-foreground">global</span>
              <span className="text-accent">.apex</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium Granite and Marble for luxury projects worldwide
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm tracking-widest font-bold text-foreground mb-6 uppercase">Products</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition">
                  Granite Collections
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition">
                  Marble Selection
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition">
                  Custom Fabrication
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm tracking-widest font-bold text-foreground mb-6 uppercase">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition">
                  Stone Selection
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition">
                  Delivery & Logistics
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition">
                  Professional Installation
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm tracking-widest font-bold text-foreground mb-6 uppercase">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-accent transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-xs text-muted-foreground tracking-widest">
              &copy; 2025 GLOBAL APEX. ALL RIGHTS RESERVED.
            </p>

            {/* Social Links */}
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-accent transition">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
