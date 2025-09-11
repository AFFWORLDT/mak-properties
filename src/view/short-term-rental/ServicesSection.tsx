"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '../../components/ui/button';

export default function ServicesSection() {
  const services = [
    "Custom interior design and furnishing",
    "Professional maintenance and guest management",
    "Strategic marketing for maximum occupancy",
    "Access to Global Platforms for high exposure"
  ];

  const images = [
    {
      src: "/images/property1.jpeg",
      alt: "Modern living room interior",
      className: "transform rotate-3 hover:rotate-0 transition-transform duration-300"
    },
    {
      src: "/images/property2.jpeg",
      alt: "Property investment dashboard",
      className: "transform -rotate-2 hover:rotate-0 transition-transform duration-300"
    },
    {
      src: "/images/property3.jpeg",
      alt: "Happy couple with keys",
      className: "transform rotate-1 hover:rotate-0 transition-transform duration-300"
    },
    {
      src: "/images/property1.jpeg",
      alt: "Property transaction",
      className: "transform -rotate-1 hover:rotate-0 transition-transform duration-300"
    },
    {
      src: "/images/property2.jpeg",
      alt: "Property management",
      className: "transform rotate-2 hover:rotate-0 transition-transform duration-300"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Top Button */}
        <div className="text-center mb-16">
          <Button className="bg-primary hover:bg-primary text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors duration-200">
            List your Property
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-8">
              Our Comprehensive
              <br />
              Services For Homeowners
              <br />
              Include
            </h2>
            
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-lg text-gray-700 font-medium">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`relative h-48 rounded-lg overflow-hidden shadow-lg ${image.className}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
