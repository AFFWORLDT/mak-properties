import { ArrowRight, User, Building, Download, MapPin } from "lucide-react";

function Solutions() {
  const solutions = [
    {
      icon: <User className="h-8 w-8 text-black" />,
      title: "Connect with a Specialist",
      description:
        "Access our dedicated team of over 400+ expert agents ready to assist you.",
      arrow: <ArrowRight className="h-4 w-4 text-black" />,
    },
    {
      icon: <Building className="h-8 w-8 text-black" />,
      title: "List Your Property",
      description:
        "Achieve optimal value by listing your property with our expert marketing strategies.",
      arrow: <ArrowRight className="h-4 w-4 text-black" />,
    },
    {
      icon: <Download className="h-8 w-8 text-black" />,
      title: "Download Report",
      description:
        "Download the latest Comprehensive Dubai Real Estate Market Report Q1 2025",
      arrow: <ArrowRight className="h-4 w-4 text-black" />,
    },
    {
      icon: <MapPin className="h-8 w-8 text-black" />,
      title: "Explore Dubai Projects",
      description:
        "Browse and find your ideal property from our extensive portfolio of Dubai projects.",
      arrow: <ArrowRight className="h-4 w-4 text-black" />,
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Luxury Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#dbbb90]/5 via-transparent to-[#dbbb90]/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
      
      {/* Floating Luxury Particles - Client Side Only */}
      {typeof window !== 'undefined' && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#dbbb90]/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight font-serif">
              Dubai real estate solutions focused around
              <br />
              <span className="text-[#dbbb90] font-light">excellent customer service</span>.
            </h2>
          </div>

          {/* Solutions Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
              >
                <div className="relative backdrop-blur-[10px] bg-white/80 border border-white/20 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-2 overflow-hidden">
                  {/* Inner Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#dbbb90]/10 via-transparent to-[#dbbb90]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon */}
                  <div className="mb-6 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#dbbb90] to-[#C2A17B] rounded-2xl flex items-center justify-center shadow-lg">
                      <div className="text-white">
                        {solution.icon}
                      </div>
                    </div>
                  </div>

                  {/* Title with Arrow */}
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <h3 className="text-gray-900 font-semibold text-xl font-serif">
                      {solution.title}
                    </h3>
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <div className="w-8 h-8 bg-[#dbbb90] rounded-full flex items-center justify-center">
                        {solution.arrow}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-base leading-relaxed font-serif relative z-10">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
