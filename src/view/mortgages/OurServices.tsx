"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '../../components/ui/button';
import { Check } from 'lucide-react';

export default function OurServices() {
  const services = [
    "Resident Mortgages",
    "Non-Resident Mortgages", 
    "Commercial Finance",
    "Equity Release / Buyouts"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/building.jpg"
                alt="Professional mortgage consultation"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Our Services
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              Explore a range of tailored mortgage solutions designed to meet your diverse needs:
            </p>

            <div className="space-y-4 mb-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-
                  ry rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-gray-700 font-medium">
                    {service}
                  </span>
                </div>
              ))}
            </div>

              <Button className="bg-primary hover:bg-primary text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors duration-200">
              Get a free consultation →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
