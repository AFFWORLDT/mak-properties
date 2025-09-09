import React from 'react';
import { Check } from 'lucide-react';

function WhyProvident() {
  const benefits = [
    "Most awarded real estate agency in the UAE",
    "Our agents speak more than 45 languages",
    "Achieved 50+ billion AED sales in our career",
    "0% Zero fees to you",
    "Get listed on local & global portals"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-8">
              Why list your property with Provident?
            </h2>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 text-lg">{benefit}</p>
                </div>
              ))}
            </div>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center">
              List Your Property
              <span className="ml-2">→</span>
            </button>
          </div>

          {/* Right Content - 3D House Graphic */}
          <div className="relative">
            <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-gray-100 rounded-2xl flex items-center justify-center">
              {/* House */}
              <div className="relative">
                <div className="w-48 h-32 bg-white border-4 border-gray-300 rounded-lg shadow-lg">
                  <div className="grid grid-cols-3 gap-1 p-2">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="w-full h-8 bg-blue-200 rounded"></div>
                    ))}
                  </div>
                </div>
                
                {/* Roof */}
                <div className="absolute -top-4 left-0 w-0 h-0 border-l-[60px] border-r-[60px] border-b-[30px] border-l-transparent border-r-transparent border-b-gray-400"></div>
                
                {/* Grass */}
                <div className="absolute -bottom-2 left-0 w-full h-4 bg-green-400 rounded-full"></div>
              </div>

              {/* Handshake */}
              <div className="absolute -top-8 -left-8">
                <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                </div>
              </div>

              {/* Sign */}
              <div className="absolute -right-8 bottom-8">
                <div className="bg-white border-2 border-gray-300 rounded-lg p-3 shadow-lg">
                  <p className="text-gray-800 font-bold text-sm text-center">
                    LIST YOUR<br />PROPERTY
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How does it work section */}
        <div className="mt-20 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            How does it work?
          </h2>
          <p className="text-xl text-gray-600">
            Start the effortless journey of listing your property with us, step by step.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyProvident;
