"use client"

export default function Gallery() {
  const graniteImages = [
    { id: 1, name: "Black Galaxy Granite", type: "Granite" },
    { id: 2, name: "White Sparkle Granite", type: "Granite" },
    { id: 3, name: "Red Dragon Granite", type: "Granite" },
    { id: 4, name: "Baltic Brown Granite", type: "Granite" },
    { id: 5, name: "Tan Brown Granite", type: "Granite" },
    { id: 6, name: "Absolute Black Granite", type: "Granite" },
  ]

  const marbleImages = [
    { id: 7, name: "Calacatta Marble", type: "Marble" },
    { id: 8, name: "Statuario Marble", type: "Marble" },
    { id: 9, name: "Emperador Dark Marble", type: "Marble" },
    { id: 10, name: "Crema Marfil Marble", type: "Marble" },
    { id: 11, name: "Black and Gold Marble", type: "Marble" },
    { id: 12, name: "Portoro Marble", type: "Marble" },
  ]

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Granite Gallery */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-4 text-primary">Premium Granite Collection</h2>
          <p className="text-center text-muted-foreground mb-12">Handpicked granite selections from around the world</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {graniteImages.map((img) => (
              <div
                key={img.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow h-64"
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <p className="text-lg font-semibold">{img.name}</p>
                    <p className="text-sm opacity-80">{img.type}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marble Gallery */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-4 text-primary">Luxurious Marble Collection</h2>
          <p className="text-center text-muted-foreground mb-12">Exquisite marble selections for premium projects</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {marbleImages.map((img) => (
              <div
                key={img.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow h-64"
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
                  <div className="text-center text-gray-800">
                    <p className="text-lg font-semibold">{img.name}</p>
                    <p className="text-sm opacity-80">{img.type}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
