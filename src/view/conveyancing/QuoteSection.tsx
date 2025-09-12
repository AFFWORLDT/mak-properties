"use client";

import React from 'react';
import Image from 'next/image';

export default function QuoteSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-6xl text-gray-400 mb-4 font-serif">"</div>
          <h2 className="text-4xl font-bold text-gray-800 max-w-4xl mx-auto leading-relaxed">
            We don't just create transactions, we build relationships.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/building.jpg"
                alt="Professional team collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h3 className="text-4xl font-bold text-blue-900 mb-8">
              Our Solutions
            </h3>
            
            <div className="space-y-4 mb-8">
              {[
                "Gifting",
                "Power of Attorney",
                "Legal Documents Translation",
                "Will (Property investment)",
                "Legal Eviction Notice",
                "Online POA Cancellation",
                "Document Attestation MOFA",
                "General Consulting for property transfer"
              ].map((solution, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700 font-medium">
                    {solution}
                  </span>
                </div>
              ))}
            </div>

            <button className="bg-primary hover:bg-primary text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors duration-200">
              Find out more →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
