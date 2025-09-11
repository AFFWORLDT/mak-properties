"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const faqs = [
    {
      question: "How to calculate mortgage affordability?",
      answer: "Need a mortgage to buy property in Dubai? Your mortgage loan eligibility primarily depends on the bank's policies and your monthly and annual income. Some banks impose a cap on mortgages in Dubai, allowing you to borrow no more than 7 times your annual income (equivalent to 84 months), with total liability repayments not exceeding 50% of your monthly salary. Other factors influencing mortgage affordability include age, nationality, employment type, and credit history. It is best to seek guidance from mortgage brokers in Dubai, as they can offer personalized advice tailored to your circumstances."
    },
    {
      question: "What is the difference between a flat rate and a reducing rate of interest?",
      answer: "A Flat Rate is the interest rate that remains the same throughout the mortgage repayment duration as it is calculated against the total principal amount. Meanwhile, a Reduced Interest Rate, also called a diminishing interest rate, is calculated monthly on the outstanding balance rather than the original amount. It is best to confirm with your mortgage advisor which rate structure works best for your financial situation."
    },
    {
      question: "Why do banks require a security check when getting a mortgage?",
      answer: "Banks require security checks to assess the borrower's creditworthiness and financial stability. This helps them determine the risk level and appropriate interest rates for the mortgage loan."
    },
    {
      question: "What is a security check?",
      answer: "A security check is a comprehensive review of your financial background, including credit history, employment verification, and income assessment to evaluate your ability to repay the mortgage loan."
    },
    {
      question: "Can my housing allowance be taken into account for my mortgage?",
      answer: "Yes, in many cases, housing allowances can be considered as part of your income when calculating mortgage affordability. However, this depends on the specific bank's policies and the stability of your housing allowance."
    },
    {
      question: "Can my bonus be taken into account for my mortgage?",
      answer: "Some banks may consider bonuses as part of your income, but typically only if they are regular and documented. The percentage of bonus income that can be considered varies by bank."
    },
    {
      question: "What is an NOC?",
      answer: "NOC stands for No Objection Certificate. It's a document that may be required by some banks or authorities to confirm that there are no legal objections to the property transaction."
    },
    {
      question: "Is it possible to get insurance to cover my mortgage payments in the event of an accident, sickness or unemployment?",
      answer: "Yes, mortgage protection insurance is available in the UAE. This type of insurance can help cover your mortgage payments if you become unable to work due to accident, sickness, or unemployment."
    },
    {
      question: "Can non-resident investors get mortgage loans on properties in Dubai?",
      answer: "Yes, non-resident investors can obtain mortgage loans in Dubai, but the terms and conditions may differ from those available to residents. Typically, higher down payments and different interest rates may apply."
    },
    {
      question: "Can I get a loan for an off-plan property in Dubai?",
      answer: "Yes, many banks offer financing for off-plan properties in Dubai. However, the terms and conditions may be different from completed properties, and you may need to meet specific criteria."
    },
    {
      question: "Are there insurance requirements for mortgages in the UAE?",
      answer: "Yes, most banks require property insurance and may also require life insurance as part of the mortgage agreement. The specific requirements vary by bank and loan amount."
    }
  ];

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
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
