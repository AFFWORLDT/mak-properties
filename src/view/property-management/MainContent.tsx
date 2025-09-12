"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '../../components/ui/button';

export default function MainContent() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
              Do you need Property Management Services?
            </h2>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Owning a lucrative rental property requires significant time, expertise, and know-how. Let Provident alleviate the burden and hassle associated with property management.
              </p>
              
              <p>
                As a leading property management company in Dubai, we provide comprehensive, professional services, handling all aspects of rental property management.
              </p>
              
              <p>
                We protect your property, deposits, and tenants for rentals in Dubai, handling rental collection, condition reports, and maintenance oversight. Our collaborative approach ensures faster, higher-quality service, and greater transparency, setting us apart.
              </p>
            </div>

            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors duration-200">
              Learn more →
            </Button>

            <div className="pt-8">
              <h3 className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
                Explore what we do as your trusted property manager
              </h3>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/team-consultation.jpg"
                alt="Property Management Team Consultation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
