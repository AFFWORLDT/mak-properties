"use client";

import React from 'react';
import { 
  Building, 
  Users, 
  Lightbulb, 
  Settings 
} from 'lucide-react';

export default function PrismAdvantage() {
  const advantages = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Established Leader Since 2008",
      description: "PRISM has been a pioneer in conveyancing services, consistently delivering excellence for over a decade"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team of Conveyancing Specialists",
      description: "Our experts bring a wealth of knowledge and experience, ensuring top-tier expertise in every transaction."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Bespoke Conveyancing Solutions",
      description: "We tailor our services to meet the specific needs of each client, providing personalized and effective solutions"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Unmatched Efficiency and Speed",
      description: "At PRISM, we prioritize swift and streamlined processes, guaranteeing a fast and efficient conveyancing experience"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-8">
            Discover the PRISM Advantage for Dubai Property Conveyancing
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mb-6 mx-auto">
                {advantage.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {advantage.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
