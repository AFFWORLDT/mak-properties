"use client";

import React from 'react';
import Image from 'next/image';

export default function ForGuestsSection() {
  const properties = [
    {
      src: "/images/property1.jpeg",
      alt: "Luxury apartment with city skyline view"
    },
    {
      src: "/images/property2.jpeg", 
      alt: "Opulent living space with high ceilings"
    },
    {
      src: "/images/property3.jpeg",
      alt: "Modern villa with contemporary design"
    },
    {
      src: "/images/property1.jpeg",
      alt: "Elegant living room with waterfront view"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            <span className="text-primary">For Guests:</span> Discover Unparalleled Holiday Homes. Luxury, Comfort, and Convenience
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore our handpicked selection of luxurious holiday homes across Dubai. Whether you desire an elegant apartment with panoramic views of the city skyline or a lavish villa steps away from the beach, our properties are designed to offer the ultimate comfort, privacy, and convenience. Perfect for travelers seeking a memorable and authentic Dubai experience, our holiday homes ensure your stay is nothing short of extraordinary.
          </p>
        </div>

        {/* Property Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src={property.src}
                alt={property.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
