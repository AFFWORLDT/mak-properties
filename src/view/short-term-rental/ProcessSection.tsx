"use client";

import React from 'react';

export default function ProcessSection() {
  const steps = [
    {
      number: 1,
      title: "Connect With Us",
      description: "A simple call, email, or WhatsApp message starts your journey.",
      color: "bg-blue-900"
    },
    {
      number: 2,
      title: "Tailored Evaluation",
      description: "We assess your property to align with your financial goals.",
      color: "bg-primary"
    },
    {
      number: 3,
      title: "Seamless Transition",
      description: "Upon agreement, we manage every detail, from staging your home to professional photography.",
      color: "bg-blue-900"
    },
    {
      number: 4,
      title: "Global Exposure",
      description: "Our marketing expertise ensures your property stands out, featuring it on an extensive network of booking sites.",
      color: "bg-primary"
    },
    {
      number: 5,
      title: "High Investment",
      description: "Enjoy the benefits of increased bookings and higher revenue with minimal effort.",
      color: "bg-blue-900"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Simplified Process for <span className="text-primary">Maximum Return</span>
          </h2>
        </div>

        {/* Process Diagram */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Main arc container */}
            <div className="relative w-full h-[500px] flex items-center justify-center">
              
              {/* Colored arc segments */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="800" height="400" viewBox="0 0 800 400" className="overflow-visible">
                  {/* Full arc path with segments */}
                  <defs>
                    <linearGradient id="segment1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#1e3a8a" />
                      <stop offset="100%" stopColor="#ea580c" />
                    </linearGradient>
                    <linearGradient id="segment2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ea580c" />
                      <stop offset="100%" stopColor="#1e3a8a" />
                    </linearGradient>
                  </defs>
                  
                  {/* Segment 1 to 2 (Blue) */}
                  <path
                    d="M 100 350 A 300 300 0 0 1 250 150"
                    fill="none"
                    stroke="#1e3a8a"
                    strokeWidth="30"
                    strokeLinecap="round"
                  />
                  
                  {/* Segment 2 to 3 (Orange) */}
                  <path
                    d="M 250 150 A 300 300 0 0 1 400 100"
                    fill="none"
                    stroke="#ea580c"
                    strokeWidth="30"
                    strokeLinecap="round"
                  />
                  
                  {/* Segment 3 to 4 (Blue) */}
                  <path
                    d="M 400 100 A 300 300 0 0 1 550 150"
                    fill="none"
                    stroke="#1e3a8a"
                    strokeWidth="30"
                    strokeLinecap="round"
                  />
                  
                  {/* Segment 4 to 5 (Orange) */}
                  <path
                    d="M 550 150 A 300 300 0 0 1 700 350"
                    fill="none"
                    stroke="#ea580c"
                    strokeWidth="30"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              
              {/* Steps positioned on the arc */}
              {steps.map((step, index) => {
                // More accurate positions based on your image
                const positions = [
                  { x: -300, y: 50 },   // Step 1 - bottom left
                  { x: -150, y: -100 }, // Step 2 - top left
                  { x: 0, y: -150 },    // Step 3 - top center
                  { x: 150, y: -100 },  // Step 4 - top right
                  { x: 300, y: 50 }     // Step 5 - bottom right
                ];
                
                const position = positions[index];
                
                return (
                  <div
                    key={index}
                    className="absolute"
                    style={{
                      left: `calc(50% + ${position.x}px)`,
                      top: `calc(50% + ${position.y}px)`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    {/* Step content container */}
                    <div className="flex flex-col items-center">
                      {/* Step circle */}
                      <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg`}>
                        {step.number}
                      </div>
                      
                      {/* Step content */}
                      <div className="text-center max-w-48">
                        <h3 className="font-bold text-blue-900 mb-2 text-base">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Bottom CTA Button */}
          <div className="text-center mt-12">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-base font-semibold rounded-md transition-colors duration-200">
              List your Property
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
