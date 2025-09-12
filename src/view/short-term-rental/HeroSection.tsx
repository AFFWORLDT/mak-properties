"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '../../components/ui/button';

export default function HeroSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
              From Finding Your Perfect
              <br />
              <span className="text-primary">Holiday Home</span> Or
              <br />
              Transforming it Into A
              <br />
              <span className="text-primary">Short-Term Rental,</span>
            </h1>

            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              We've Got You Covered!
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Exceptional Dubai Holiday Homes and Expert Short-Term Rental Services.
            </p>

            <Button className="bg-primary hover:bg-primary text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors duration-200">
              List your Property
            </Button>
          </div>

          {/* Right Image */}
          <div className="order-first lg:order-last">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/building.jpg"
                alt="Happy family in modern living room"
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
