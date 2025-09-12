"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '../../components/ui/button';

const services = [
  {
    id: 1,
    title: "Dedicated Account Manager",
    description: "Our dedicated account manager service provides a single point of contact for all your property needs. Contact us today to simplify your property management experience.",
    image: "/images/account-manager.jpg"
  },
  {
    id: 2,
    title: "Tenant Management",
    description: "Let us take the hassle out of tenant management. We will manage everything from tenant communications to rent collection, ensuring a smooth and efficient rental process.",
    image: "/images/tenant-management.jpg"
  },
  {
    id: 3,
    title: "Legal Guidance",
    description: "Navigating property laws can be daunting. Our legal guidance service provides you with expert advice to ensure compliance and protect your investments.",
    image: "/images/legal-guidance.jpg"
  },
  {
    id: 4,
    title: "Smart Portal Integration",
    description: "Our smart portal integration offers a seamless property management experience. It allows you to track rent payments, maintenance requests, and more from any device.",
    image: "/images/smart-portal.jpg"
  },
  {
    id: 5,
    title: "Maintenance and Complaints Resolution",
    description: "We promptly address maintenance needs, resolve tenant complaints and make sure your tenants are satisfied. Contact us for reliable property upkeep!",
    image: "/images/maintenance.jpg"
  },
  {
    id: 6,
    title: "Regular Inspection",
    description: "Our inspection service helps maintain your property's value by identifying and addressing issues early. Schedule your inspection today to ensure everything stays in top condition!",
    image: "/images/inspection.jpg"
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Service Image */}
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {service.description}
                </p>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition-colors duration-200">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
