"use client"

import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready for Your Next Project?</h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Let us help you select the perfect stone for your luxury project. Contact our team today for personalized
          consultation and competitive quotes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg">Get a Quote</Button>
          <Button
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg bg-transparent"
          >
            Schedule Consultation
          </Button>
        </div>

        <div className="bg-primary-foreground/10 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-sm opacity-75 mb-2">Email</p>
              <p className="text-lg font-semibold">contact@globalapex.com</p>
            </div>
            <div>
              <p className="text-sm opacity-75 mb-2">Phone</p>
              <p className="text-lg font-semibold">+91 98765 43210</p>
            </div>
            <div>
              <p className="text-sm opacity-75 mb-2">Address</p>
              <p className="text-lg font-semibold">New Delhi, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
