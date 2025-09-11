"use client";

import React from 'react';
import { Button } from '../../components/ui/button';
import { Star, ChevronRight } from 'lucide-react';

export default function ClientTestimonials() {
  const testimonials = [
    {
      name: "David E",
      time: "1 year ago",
      title: "Amazing Rental Experience",
      review: "Renting my property on a short-term basis with Provident has been a fantastic experience. They handled everything, ensuring high occupancy and satisfied guests."
    },
    {
      name: "Fatima A.",
      time: "1 year ago", 
      title: "Best Short-Term Rental Services",
      review: "Provident's short-term rental service has been amazing. They handled everything, from marketing my property to managing guest stays. I'm thrilled with the results."
    },
    {
      name: "Omar F.",
      time: "1 year ago",
      title: "The Team has it all Handled", 
      review: "I couldn't be happier with Provident's short-term rental service. They maximise the rental income, take care of maintenance, and ensure a smooth guest experience.",
      rating: 4
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Why Our Clients Trust Us
            </h2>
            <p className="text-xl text-gray-600">
              Discover what our customers are saying about their experiences.
            </p>
          </div>
          
          <Button className="bg-primary hover:bg-primary text-white px-6 py-3 font-semibold rounded-lg transition-colors duration-200 mt-6 lg:mt-0">
            See all reviews
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-gray-400 rounded-full"></div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.time}</div>
                </div>
              </div>
              
              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-current" />
                ))}
                {testimonial.rating === 4 && (
                  <Star key={4} className="w-4 h-4 text-gray-300" />
                )}
              </div>
              
              <h3 className="font-bold text-gray-900 mb-3">
                {testimonial.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {testimonial.review}
              </p>
            </div>
          ))}
        </div>

        {/* Carousel Navigation */}
        <div className="flex justify-center mt-8">
          <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-200">
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
