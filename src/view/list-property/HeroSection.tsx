import React from 'react';
import { Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bgImage.webp"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Background Awards */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-8 opacity-20">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-32 h-40 bg-gray-700 rounded-lg shadow-2xl">
              <div className="p-4 h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-gray-600 rounded-full mb-2 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div className="text-center">
                  <p className="text-white text-xs font-bold">PROVIDENT</p>
                  <p className="text-white text-xs">BROKER</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4">
        <div className="max-w-4xl">
          {/* Navigation */}
          <div className="mb-8">
            <nav className="flex items-center space-x-2 text-white">
              <Link href="/" className="hover:text-gray-300 transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="underline">List Your Property</span>
            </nav>
          </div>

          {/* Main Heading */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Sell or Rent Out Your Property in
              <br />
              <span className="text-orange-500">Dubai</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              With the most awarded Real Estate Agency in the UAE
            </p>
          </div>

          {/* CTA Button */}
          <div className="mb-12">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200">
              List Your Property
            </button>
          </div>

          {/* Ratings */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-white font-semibold">Google 4.8</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-white font-semibold">Trustpilot 4.9/5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
