"use client"

export default function About() {
  return (
    <section id="about" className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-4">About Global Apex</h2>
        <p className="text-lg mb-12 max-w-3xl opacity-90">
          Global Apex is a leading supplier of premium granite and marble, serving luxury residential and commercial
          projects. With over 15 years of experience in the stone industry, we pride ourselves on exceptional quality,
          professional service, and attention to detail.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">10K+</div>
            <p className="text-lg opacity-90">Satisfied Clients</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">15+</div>
            <p className="text-lg opacity-90">Years of Experience</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">5K+</div>
            <p className="text-lg opacity-90">Projects Completed</p>
          </div>
        </div>

        <div className="bg-primary-foreground text-primary rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Why Choose Global Apex?</h3>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-accent text-2xl">✓</span>
              <span>Sourced from the finest quarries worldwide</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-2xl">✓</span>
              <span>Expert fabrication and installation services</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-2xl">✓</span>
              <span>Competitive pricing without compromising quality</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-2xl">✓</span>
              <span>Lifetime support and warranty on all products</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
