"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ZoomIn } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

// Define the type for gallery images
interface GalleryImage {
  id: number
  name: string
  type: string
  image: string
}

export default function Gallery() {
  const router = useRouter()
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const graniteImages: GalleryImage[] = [
    { id: 1, name: "Black Galaxy Granite", type: "Granite", image: "/granite-black-galaxy.jpg" },
    { id: 2, name: "White Sparkle Granite", type: "Granite", image: "/granite-white-sparkle.jpg" },
    { id: 3, name: "Red Dragon Granite", type: "Granite", image: "/granite-red-dragon.jpg" },
    { id: 4, name: "Baltic Brown Granite", type: "Granite", image: "/granite-baltic-brown.jpg" },
    { id: 5, name: "Tan Brown Granite", type: "Granite", image: "/granite-tan-brown.jpg" },
    { id: 6, name: "Absolute Black Granite", type: "Granite", image: "/granite-absolute-black.jpg" },
  ]

  const marbleImages: GalleryImage[] = [
    { id: 7, name: "Calacatta Marble", type: "Marble", image: "/marble-calacatta.jpg" },
    { id: 8, name: "Statuario Marble", type: "Marble", image: "/marble-statuario.jpg" },
    { id: 9, name: "Emperador Dark Marble", type: "Marble", image: "/marble-emperador.jpg" },
    { id: 10, name: "Crema Marfil Marble", type: "Marble", image: "/marble-crema-marfil.jpg" },
    { id: 11, name: "Black and Gold Marble", type: "Marble", image: "/marble-black-gold.jpg" },
    { id: 12, name: "Portoro Marble", type: "Marble", image: "/marble-portoro.jpg" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-black text-white py-4 px-6 md:px-12 lg:px-20 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <motion.button
            onClick={() => router.back()}
            className="flex items-center gap-3 text-[#c5a47e] hover:text-[#b8966d] transition-colors group"
            whileHover={{ x: -5 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronLeft size={24} />
            <span className="font-semibold tracking-wide">BACK TO PRODUCTS</span>
          </motion.button>
          
          <div className="text-xl md:text-2xl font-bold tracking-wider">GLOBAL APEX</div>
        </div>
      </header>

      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Granite Gallery */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
                PREMIUM <span className="text-[#c5a47e]">GRANITE</span> COLLECTION
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Handpicked granite selections from around the world
              </p>
              <div className="w-20 h-1 bg-[#c5a47e] mx-auto mt-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {graniteImages.map((img, index) => (
                <motion.div
                  key={img.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedImage(img)}
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={img.image || "/placeholder.svg"}
                      alt={img.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/70 text-white p-4 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <ZoomIn size={32} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{img.name}</h3>
                    <p className="text-muted-foreground text-sm uppercase tracking-widest">{img.type}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Marble Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
                LUXURIOUS <span className="text-[#c5a47e]">MARBLE</span> COLLECTION
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Exquisite marble selections for premium projects
              </p>
              <div className="w-20 h-1 bg-[#c5a47e] mx-auto mt-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {marbleImages.map((img, index) => (
                <motion.div
                  key={img.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedImage(img)}
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={img.image || "/placeholder.svg"}
                      alt={img.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/70 text-white p-4 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <ZoomIn size={32} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{img.name}</h3>
                    <p className="text-muted-foreground text-sm uppercase tracking-widest">{img.type}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image || "/placeholder.svg"}
              alt={selectedImage.name}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.name}</h3>
              <p className="text-white/80 uppercase tracking-widest">{selectedImage.type}</p>
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-[#c5a47e] transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}