"use client"

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Finished Granite Material",
      category: "COMMERCIAL",
      image: "/premium-stone-retail-showroom-display.jpg",
    },
    {
      id: 2,
      title: "Granite Raw Blocks",
      category: "COMMERCIAL",
      image: "/raw blocks.jpg",
    },
    {
      id: 3,
      title: "Grand Marble Slabs",
      category: "COMMERCIAL",
      image: "/marble2.jpg",
    },
    {
      id: 4,
      title: "Luxury Stone Decors",
      category: "RESIDENTIAL",
      image: "/luxury-marble-granite-penthouse-interior.jpg",
    },
  ]

  return (
    <section id="projects" className="bg-black">
      <div className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
        <img
          src="/premium-granite-marble-stone-texture-elegant.jpg"
          alt="Projects"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-black/40"></div>


        {/* Centered PROJECTS heading */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-[0.15em] text-white uppercase text-center">
            PRODUCTS
          </h1>
        </div>
      </div>

      <div className="bg-black py-0">
        <div className="max-w-full px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {projects.map((project) => (
              <div key={project.id} className="group relative h-80 md:h-96 lg:h-[500px] overflow-hidden cursor-pointer">
                {/* Project Image */}
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition duration-700"></div>

                {/* Top left title */}
                <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white uppercase tracking-widest leading-tight max-w-xs">
                    {project.title}
                  </h3>
                </div>

                {/* Vertical text on left edge */}
                <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                  <span className="text-white/60 text-xs tracking-[0.3em] uppercase transform -rotate-90 whitespace-nowrap">
                    {project.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
