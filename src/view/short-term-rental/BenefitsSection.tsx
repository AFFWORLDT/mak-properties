"use client";

import React from 'react';
import { Button } from '../../components/ui/button';
import { 
  Home, 
  Camera, 
  MousePointer, 
  Check, 
  BarChart3, 
  Briefcase 
} from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Home className="w-6 h-6" />,
      title: "Diverse Selection",
      description: "Choose from a wide range of centrally located properties to suit any preference."
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Strategic Locations",
      description: "Easy access to Dubai's main attractions, shopping, and cultural landmarks."
    },
    {
      icon: <MousePointer className="w-6 h-6" />,
      title: "Luxurious Amenities",
      description: "Enjoy fully furnished homes with high-end amenities and personalized services."
    },
    {
      icon: <Check className="w-6 h-6" />,
      title: "Seamless Experience",
      description: "Benefit from straightforward booking processes and dedicated customer support."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Authentic Local Feel",
      description: "Experience the vibrant energy of Dubai with the tranquility of a private residence."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Professional Management",
      description: "Trust in our commitment to excellence for an stress-free and memorable stay."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-8">
            Why <span className="text-primary">holiday homes</span> in Dubai are a good <span className="text-primary">option?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mb-6 mx-auto">
                {benefit.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-primary hover:bg-primary text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors duration-200">
            Book Now
          </Button>
        </div>
      </div>
    </section>
  );
}
