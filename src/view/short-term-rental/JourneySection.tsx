"use client";

import React from 'react';
import Image from 'next/image';

export default function JourneySection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="order-2 lg:order-1">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/building.jpg"
                alt="Happy family with smartphone"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-blue-900 mb-8">
              Begin Your Journey With Us!
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Whether you're seeking the perfect holiday home for your next Dubai adventure or looking to transform your property into a lucrative short-term rental, our real estate company is here to ensure your aspirations are realized with excellence and ease.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
