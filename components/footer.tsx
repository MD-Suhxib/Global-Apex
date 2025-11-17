"use client"

import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center text-center mb-16">
          {/* Company Info */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-foreground mb-4">
              <span className="text-foreground">global</span>
              <span className="text-accent">.apex</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Premium Granite and Marble for luxury projects worldwide
            </p>
          </div>

          {/* Contact Information */}
          <div className="w-full max-w-md">
            <h4 className="text-lg font-bold text-foreground mb-8 tracking-wider uppercase">
              Contact
            </h4>
            
            <div className="space-y-6 bg-background/50 rounded-lg p-8 border border-border">
              <div className="text-center">
                <div className="font-semibold text-foreground mb-2 text-sm uppercase tracking-wider">
                  Email Us
                </div>
                <a 
                  href="mailto:info@globalapexs.com" 
                  className="text-muted-foreground hover:text-accent transition-colors duration-300 text-base"
                >
                  info@globalapexs.com
                </a>
              </div>
              
              <div className="text-center">
                <div className="font-semibold text-foreground mb-2 text-sm uppercase tracking-wider">
                  Call Us
                </div>
                <a 
                  href="tel:+919880050816" 
                  className="text-muted-foreground hover:text-accent transition-colors duration-300 text-base"
                >
                  +919880050816
                </a>
              </div>
              
              <div className="text-center">
                <div className="font-semibold text-foreground mb-2 text-sm uppercase tracking-wider">
                  Website
                </div>
                <a 
                  href="https://globalapexs.com" 
                  className="text-muted-foreground hover:text-accent transition-colors duration-300 text-base"
                >
                  globalapexs.com
                </a>
              </div>

              <div className="text-center pt-4 border-t border-border/50">
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  WhatsApp Available
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-xs text-muted-foreground tracking-widest">
              &copy; 2025 GLOBAL APEX. ALL RIGHTS RESERVED.
            </p>

            {/* Social Links */}
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-accent transition transform hover:scale-110 duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition transform hover:scale-110 duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition transform hover:scale-110 duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition transform hover:scale-110 duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}