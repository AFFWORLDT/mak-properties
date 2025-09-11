"use client";

import React from 'react';
import Image from 'next/image';

export default function MainContent() {
  return (
    <section className="py-20 bg-white">
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
              Why Mortgages With Provident?
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Premier Property Finance has over 10+ years of experience in the United Arab Emirates.
              </p>
              
              <p>
                If you're a property owner in the UAE or contemplating financing for new purchases or your existing property, you're in for a treat! Our service offers comprehensive research and top-notch financial solutions tailored to your unique needs.
              </p>
              
              <p>
                Whether you're expanding your property portfolio or seeking finance options for your current property, our expert insights and exceptional financial services are designed to ease your real estate journey. Premier Finance will provide you with tailored solutions from fully qualified advisors as well as access to low and competitive rates, transparent mortgage process and access to a number of Home Loan Programs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
