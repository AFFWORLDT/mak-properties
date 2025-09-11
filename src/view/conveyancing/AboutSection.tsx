"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '../../components/ui/button';

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              About Conveyance with Provident
            </h2>
            
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Setting New Benchmarks in Industry Standards. Pioneering Excellence in Conveyancing.
            </h3>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Specializing in Property Conveyancing Services, we seamlessly collaborate with essential stakeholders in Dubai's property market. Our team possesses extensive transactional expertise and proficiency in both financial and cash-based transfers, ensuring your property transactions are handled with the highest level of professionalism and efficiency.
              </p>
              
              <p>
                Recognizing the intricacies of Dubai's real estate regulations, we have instituted a dedicated conveyancing department to simplify the buying and selling process, ensuring a smooth and hassle-free experience.
              </p>
            </div>

            <div className="mt-8">
              <Button className="bg-primary hover:bg-primary text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors duration-200">
                Enquire now →
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/building.jpg"
                alt="Professional conveyancing consultation"
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
