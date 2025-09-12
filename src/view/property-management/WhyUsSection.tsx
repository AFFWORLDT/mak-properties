"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '../../components/ui/button';
import { Check } from 'lucide-react';

const benefits = [
  "Have tailored solutions for property management requirements",
  "Ensure the property maintains high standards & well maintained",
  "Ease the process of finding suitable tenants faster",
  "Provide clear and transparent financial reporting",
  "Foster open and ongoing communication with our clients"
];

export default function WhyUsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/team-awards.jpg"
                alt="Provident Team with Awards"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
              Why Us?
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Provident Estate is one of Dubai's best property management companies with a proven track record. We provide tailor-made services that ensure the best returns on investment.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors duration-200">
              Learn more →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
