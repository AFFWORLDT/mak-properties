"use client";

import React from 'react';
import { 
  Home, 
  Camera, 
  TrendingUp, 
  Check, 
  BarChart3, 
  FileCheck 
} from 'lucide-react';

export default function WhyWorkWithUs() {
  const features = [
    {
      icon: <Home className="w-6 h-6" />,
      title: "Smooth Process & Support",
      description: "The emphasis on ensuring a smooth process in obtaining finance aid, coupled with excellent customer support, makes the overall experience less stressful and more efficient for clients."
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Tailored Financial Solutions",
      description: "The company offers customized financial solutions to meet the unique needs of each client, ensuring a personalized approach to mortgage financing."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Decade of Experience",
      description: "With over 10 years of experience in the UAE market, Premier Property Finance possesses a deep understanding of local real estate and finance nuances, ensuring expert guidance."
    },
    {
      icon: <Check className="w-6 h-6" />,
      title: "Unbiased Financial Advice",
      description: "Premier Finance is committed to offering unbiased advice, prioritizing the client's needs and interests first, which is crucial for building trust and ensuring client satisfaction."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Access to Competitive Rates",
      description: "Clients benefit from access to low and competitive interest rates, making their financial commitments more manageable and cost-effective."
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Diverse Home Loan Programs",
      description: "The availability of a variety of home loan programs means that clients have more options to choose from, increasing their chances of finding a mortgage that suits their specific needs."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Why Work With Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start the effortless journey of listing your property with us, step by step.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white mb-6">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
