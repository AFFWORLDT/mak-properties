"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '../../components/ui/button';

export default function ForOwnersSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="order-2 lg:order-1">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/building.jpg"
                alt="Happy couple with property keys"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Looking to transform your home into A <span className="text-primary">short-term rental in Dubai?</span>
            </h2>
            
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              For Property Owners
            </h3>
            
            <h4 className="text-lg font-semibold text-gray-800 mb-6">
              Transform Your Property into a High-Yield Short-Term Rental Elevate Your Property's Potential
            </h4>
            
            <p className="text-gray-600 leading-relaxed mb-8">
              Leverage our expertise in converting properties into profitable short-term rentals. Our dedicated team specializes in managing every aspect of the transformation process, ensuring your property not only attracts guests but also generates significant returns. From comprehensive property management to global marketing, we position your home on the world stage, listing it across more than 150 platforms, including Airbnb, Booking.com, and Expedia.
            </p>

            <Button className="bg-primary hover:bg-primary text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors duration-200">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
