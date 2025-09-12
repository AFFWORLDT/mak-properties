import React from 'react';
import { Building, FileText, Globe, Wallet } from 'lucide-react';

function HowItWorks() {
  const steps = [
    {
      icon: <Building className="w-8 h-8" />,
      step: "STEP 1",
      title: "Valuation Visit",
      description: "Property valuation within 24 hours, backed by data-driven analysis."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      step: "STEP 2",
      title: "Paper Signing",
      description: "Homeowner's consent to property listing; all essential papers are executed and submitted for listing."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      step: "STEP 3",
      title: "Global Reach",
      description: "Now sit back while our marketing team lists your property on top Dubai property portals."
    },
    {
      icon: <Wallet className="w-8 h-8" />,
      step: "STEP 4",
      title: "Return on Investments",
      description: "Experience the convenience of receiving your investment returns from the comfort of your home."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                {step.icon}
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-2">{step.step}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Client Trust Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Why Our Clients Trust Us
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Discover what our customers are saying about their experiences.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            See all reviews
          </button>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
