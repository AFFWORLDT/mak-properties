"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const faqs = [
    {
      question: "What is the meaning of conveyancing in law?",
      answer: "The meaning of conveyancing in law is the set of procedures required to transfer the ownership of a property from one party to another."
    },
    {
      question: "Is a conveyancer a lawyer?",
      answer: "A conveyancer is a legal professional who specializes in property law and the transfer of property ownership. While they may not always be qualified lawyers, they have specific expertise in conveyancing procedures and property transactions."
    },
    {
      question: "How long should conveyancing take?",
      answer: "The conveyancing process typically takes between 8-12 weeks, but this can vary depending on various factors such as property type, complexity of the transaction, and any issues that may arise during the process."
    },
    {
      question: "What documents are required for conveyancing?",
      answer: "Common documents required include property title deeds, survey reports, mortgage documents, insurance certificates, and various legal forms depending on the type of transaction."
    },
    {
      question: "What are the costs involved in conveyancing?",
      answer: "Conveyancing costs typically include legal fees, search fees, stamp duty, and other administrative costs. The total cost varies depending on the property value and complexity of the transaction."
    },
    {
      question: "Can I do conveyancing myself?",
      answer: "While it's technically possible to handle conveyancing yourself, it's highly recommended to use a qualified conveyancer or solicitor due to the complex legal requirements and potential risks involved."
    },
    {
      question: "What happens if there are problems during conveyancing?",
      answer: "If problems arise, your conveyancer will work to resolve them. Common issues include property defects, legal complications, or financing problems. Your conveyancer will guide you through the resolution process."
    },
    {
      question: "What is the difference between buying and selling conveyancing?",
      answer: "Buying conveyancing focuses on protecting the buyer's interests, including property searches and legal checks. Selling conveyancing involves preparing the property for sale and handling the legal transfer to the buyer."
    }
  ];

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className=" mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="bg-white rounded-lg shadow-lg border border-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className={index !== faqs.length - 1 ? "border-b border-gray-200" : ""}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-medium text-blue-900 pr-4">
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
