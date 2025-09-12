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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-5xl font-bold">
              Dubai real estate solutions focused around
              <br />
              excellent customer service.
            </h2>
          </div>

          {/* Solutions Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
              >
                {/* Icon */}
                <div className="mb-4">{solution.icon}</div>

                {/* Title with Arrow */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-black font-bold text-lg">
                    {solution.title}
                  </h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {solution.arrow}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
