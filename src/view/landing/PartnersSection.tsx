import React from 'react'

function PartnersSection() {
  const partners = [
    {
      name: "ANUBE PROPERTIES",
      logo: (
        <div className="flex flex-col items-center">
          <span className="text-red-600 font-bold text-lg">ANUBE</span>
          <span className="text-black font-medium text-sm">PROPERTIES</span>
        </div>
      )
    },
    {
      name: "DAMAC",
      logo: (
        <div className="text-black font-bold text-xl italic">DAMAC</div>
      )
    },
    {
      name: "EMAAR",
      logo: (
        <div className="text-black font-bold text-xl serif">EMAAR</div>
      )
    },
    {
      name: "MERAAS",
      logo: (
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 border-2 border-black flex items-center justify-center">
            <div className="w-3 h-3 bg-black"></div>
          </div>
          <span className="text-black font-bold text-lg">MERAAS</span>
        </div>
      )
    },
    {
      name: "SOBHA REALTY",
      logo: (
        <div className="flex flex-col items-center">
          <span className="text-black font-bold text-lg serif">SOBHA</span>
          <span className="text-black font-medium text-sm">REALTY</span>
        </div>
      )
    },
    {
      name: "NAKHEEL",
      logo: (
        <div className="text-black font-bold text-xl">NAKHEEL</div>
      )
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-1">
          {/* Header */}
          <div className="flex items-center justify-center w-1/2">
            <div className="flex items-center space-x-4">
              <h2 className="text-gray-500    text-lg">
              Partners with Dubai&apos;s leading developers
              </h2>
            </div>
          </div>

          {/* Auto-scrolling Partners */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              <div className="flex items-center space-x-16 min-w-max">
                {partners.map((partner, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 flex items-center justify-center h-16 px-8"
                  >
                    {partner.logo}
                  </div>
                ))}
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center space-x-16 min-w-max">
                {partners.map((partner, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 flex items-center justify-center h-16 px-8"
                  >
                    {partner.logo}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default PartnersSection