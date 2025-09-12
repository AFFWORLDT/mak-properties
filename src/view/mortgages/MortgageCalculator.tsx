"use client";

import React, { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';

export default function MortgageCalculator() {
  const [totalPrice, setTotalPrice] = useState(816771);
  const [downPayment, setDownPayment] = useState(25);
  const [interestRate, setInterestRate] = useState(3.75);
  const [loanPeriod, setLoanPeriod] = useState(25);

  const calculateMonthlyPayment = () => {
    const loanAmount = totalPrice * (1 - downPayment / 100);
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanPeriod * 12;
    
    if (monthlyRate === 0) {
      return loanAmount / numberOfPayments;
    }
    
    const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                          (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    return monthlyPayment;
  };

  const monthlyPayment = calculateMonthlyPayment();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Bank Partners */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 uppercase tracking-wide">
            CONNECTING YOU WITH OVER 20 MAJOR BANKS IN DUBAI AND THE UAE
          </h2>
          
          {/* Bank Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-white px-6 py-4 rounded-lg shadow-sm">
              <div className="text-red-600 font-bold text-lg">ADCB</div>
              <div className="text-xs text-gray-500">بنك أبوظبي التجاري</div>
            </div>
            <div className="bg-white px-6 py-4 rounded-lg shadow-sm">
              <div className="text-blue-600 font-bold text-lg">Emirates NBD</div>
            </div>
            <div className="bg-white px-6 py-4 rounded-lg shadow-sm">
              <div className="text-blue-600 font-bold text-lg">ADIB</div>
              <div className="text-xs text-gray-500">مصرف أبوظبي الإسلامي</div>
            </div>
            <div className="bg-white px-6 py-4 rounded-lg shadow-sm">
              <div className="text-blue-600 font-bold text-lg">Mashreq</div>
              <div className="text-xs text-gray-500">المشرق</div>
            </div>
            <div className="bg-white px-6 py-4 rounded-lg shadow-sm">
              <div className="text-red-600 font-bold text-lg">FAB</div>
              <div className="text-xs text-gray-500">بنك أبوظبي الأول</div>
            </div>
          </div>
        </div>

        {/* Mortgage Calculator */}
        <div className="">
          <div className="bg-blue-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-blue-900 mb-4">
              Mortgage Calculator
            </h3>
            <p className="text-gray-600 mb-8">
              Start the effortless journey of listing your property with us, step by step.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Total Price (USD)
                </label>
                <Input
                  type="number"
                  value={totalPrice}
                  onChange={(e) => setTotalPrice(Number(e.target.value))}
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Down Payment (%)
                </label>
                <Input
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Interest Rate (%)
                </label>
                <Input
                  type="number"
                  step="0.01"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Period Yearly
                </label>
                <Input
                  type="number"
                  value={loanPeriod}
                  onChange={(e) => setLoanPeriod(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>

            {/* Monthly Payment Display */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-2">Monthly Payments</div>
                <div className="text-3xl font-bold text-blue-900">
                  USD {monthlyPayment.toFixed(2)} /month
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                  Apply For Home Loan
                </button>
                <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 flex items-center">
                  Contact us to get started with your mortgage..
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              <Button className="bg-primary hover:bg-primary text-white px-8 py-3 font-semibold rounded-lg transition-colors duration-200">
                Get a free consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
