"use client";

import React, { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Plus, ChevronRight } from 'lucide-react';

const faqs = [
  {
    question: "How do I choose the right property management company in Dubai?",
    answer: "When choosing a property management company in Dubai, consider their experience, track record, services offered, and client testimonials. Look for companies with local market knowledge and comprehensive service offerings."
  },
  {
    question: "Do property managers in Dubai handle legal compliance?",
    answer: "Yes, reputable property management companies in Dubai handle all legal compliance matters including tenancy agreements, RERA regulations, and local property laws to ensure your investment is protected."
  },
  {
    question: "How much does property management cost in Dubai?",
    answer: "Property management costs in Dubai typically range from 5-10% of monthly rental income, depending on the services included and the property type. Contact us for a personalized quote."
  }
];

const testimonials = [
  {
    name: "Ahmed M.",
    time: "1 year ago",
    rating: 5,
    title: "Finding Reliable Tenants Quickly",
    review: "I was having a hard time finding reliable tenants for my rental property. Provident stepped in and took over the tenant screening process. Within just...",
    avatar: "/placeholder-user.jpg"
  },
  {
    name: "Sarah L.",
    time: "1 year ago",
    rating: 5,
    title: "Overseas Property Management Made Easy",
    review: "Being an overseas property owner, managing maintenance issues was quite challenging. Provident's team managed everything, from",
    avatar: "/placeholder-user.jpg"
  },
  {
    name: "John D.",
    time: "1 year ago",
    rating: 5,
    title: "Stress-Free Tenant Eviction and New Tenants",
    review: "I had a difficult situation with a tenant that needed to be evicted. Provident's team expertly navigated the legal process and",
    avatar: "/placeholder-user.jpg"
  }
];

export default function FAQTestimonials() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 text-center mb-12">
            FAQs About Provident Property Management Service Dubai
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-blue-900">
                    {faq.question}
                  </span>
                  <Plus 
                    className={`w-6 h-6 text-blue-900 transition-transform duration-200 ${
                      openFAQ === index ? 'rotate-45' : ''
                    }`} 
                  />
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
                Why Our Clients Trust Us
              </h2>
              <p className="text-gray-600 mt-2">
                Discover what our customers are saying about their experiences.
              </p>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors duration-200">
              See all reviews
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.time}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-orange-500 text-lg">★</span>
                  ))}
                </div>
                
                <h5 className="font-semibold text-blue-900 mb-2">
                  {testimonial.title}
                </h5>
                
                <p className="text-gray-700 text-sm leading-relaxed">
                  {testimonial.review}
                  <span className="text-orange-500 cursor-pointer hover:underline ml-1">
                    more
                  </span>
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <button className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-200">
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
