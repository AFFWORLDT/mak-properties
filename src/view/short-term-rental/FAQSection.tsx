"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const faqs = [
    {
      question: "Are short-term rentals allowed in Dubai?",
      answer: "Yes, short-term rentals are legal in Dubai. However, it's important to adhere to local regulations and obtain necessary permits for renting properties on a short-term basis."
    },
    {
      question: "Can you rent for 3 months in Dubai?",
      answer: "Yes, you can rent properties for 3 months in Dubai. This falls under short-term rental regulations and requires proper documentation and permits."
    },
    {
      question: "Are utilities included in the short-term rental price?",
      answer: "This varies by property and rental agreement. Some properties include utilities in the rental price, while others may charge separately. Always check the rental terms before booking."
    },
    {
      question: "How can I book a short-term rental in Dubai?",
      answer: "You can book through our website, contact us directly, or use our partner platforms. We provide multiple booking options for your convenience."
    },
    {
      question: "Are short-term rentals fully furnished?",
      answer: "Yes, our short-term rentals are fully furnished with modern amenities, furniture, and all necessary household items for a comfortable stay."
    },
    {
      question: "What amenities are commonly offered in short-term rentals?",
      answer: "Common amenities include WiFi, air conditioning, kitchen facilities, laundry access, parking, and 24/7 customer support. Specific amenities vary by property."
    }
  ];

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
            FAQs About Short-Term Rentals in Dubai
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-medium text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  {expandedIndex === index ? (
                    <Minus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                
                {expandedIndex === index && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
