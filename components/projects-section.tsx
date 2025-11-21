"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function ProjectsSection() {
  const router = useRouter()

  const projects = [
    {
      id: 1,
      title: "Finished Granite Material",
      category: "COMMERCIAL",
      image: "/premium-stone-retail-showroom-display.jpg",
      link: "/gallery"
    },
    
    {
      id: 2,
      title: "Granite Rough Blocks",
      category: "COMMERCIAL",
      image: "/raw blocks.jpg",
      link: "/gallery02"
    },
      {
      id: 3,
      title: "Luxury Stone Decors",
      category: "RESIDENTIAL",
      image: "/luxury-marble-granite-penthouse-interior.jpg",
      link: "/gallery04"
    },
    {
      id: 4,
      title: "Grand Marble Slabs",
      category: "COMMERCIAL",
      image: "/marble2.jpg",
      link: "/gallery03"
    },
  
  ]

  // Add type annotation to the link parameter
  const handleProjectClick = (link: string) => {
    router.push(link)
  }

  return (
    <section id="projects" className="bg-black">
      {/* Hero Banner */}
      <div className="relative h-64 sm:h-80 md:h-[400px] lg:h-[500px] xl:h-[600px] overflow-hidden">
        <img
          src="/premium-granite-marble-stone-texture-elegant.jpg"
          alt="Projects"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-black/40"></div>

        {/* Centered PRODUCTS heading */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-[0.1em] sm:tracking-[0.15em] text-white uppercase text-center">
            PRODUCTS
          </h1>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="bg-black py-0">
        <div className="max-w-full px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {projects.map((project) => (
              <motion.div 
                key={project.id} 
                className="group relative h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[500px] overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                onClick={() => handleProjectClick(project.link)}
              >
                {/* Project Image */}
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-700"></div>

                {/* Top left title */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 md:top-6 md:left-6 lg:top-8 lg:left-8 z-10">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white uppercase tracking-wide sm:tracking-widest leading-tight max-w-[90%]">
                    {project.title}
                  </h3>
                </div>

                {/* Vertical text on left edge - Hidden on mobile, visible on tablet and up */}
                <div className="hidden sm:flex absolute left-0 top-0 bottom-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white/60 text-xs tracking-[0.3em] uppercase transform -rotate-90 whitespace-nowrap">
                    {project.category}
                  </span>
                </div>

                {/* Mobile category badge - Visible only on mobile */}
                <div className="sm:hidden absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded">
                  <span className="text-white/80 text-xs tracking-wider uppercase">
                    {project.category}
                  </span>
                </div>

                {/* Hover overlay with additional info - Desktop only */}
                <div className="hidden lg:flex absolute inset-0 items-end justify-start p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white/80 text-sm mb-2">View Gallery</p>
                    <div className="w-8 h-px bg-[#c5a47e]"></div>
                  </div>
                </div>

                {/* Click instruction for mobile */}
                <div className="sm:hidden absolute bottom-4 right-4 bg-[#c5a47e] text-black px-3 py-1 rounded text-xs font-semibold uppercase tracking-wide">
                  Tap to View
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dots */}
      <div className="sm:hidden flex justify-center gap-2 py-6 bg-black">
        {projects.map((_, index) => (
          <div key={index} className="w-2 h-2 rounded-full bg-white/30"></div>
        ))}
      </div>
    </section>
  )
}