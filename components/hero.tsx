"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="bg-primary text-primary-foreground py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Premium Granite &<br />
              <span className="text-accent">Marble Selection</span>
            </h1>
            <p className="text-lg mb-8 opacity-90">
              Transform Your Space with Our Finest Quality Natural Stone. Expert sourcing, professional installation,
              and luxury finishes.
            </p>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 flex items-center gap-2 text-lg px-8 py-6">
              View Gallery
              <ArrowRight size={24} />
            </Button>
          </div>

          {/* Right Card */}
          <div className="bg-white text-primary rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Rahul Sharma</h3>
            <p className="text-sm text-muted-foreground mb-6">Managing Director</p>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:contact@globalapex.com" className="text-primary hover:text-accent">
                  contact@globalapex.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span>📱</span>
                <a href="tel:+919876543210" className="text-primary hover:text-accent">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+919876543211" className="text-primary hover:text-accent">
                  +91 98765 43211
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
