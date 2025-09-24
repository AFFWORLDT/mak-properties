import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function HeroSection() {
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handlePriceChange = (field: "min" | "max", value: string) => {
    setPriceRange((prev) => ({ ...prev, [field]: value }));
  };


  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };


  const getPriceDisplayValue = () => {
    if (priceRange.min && priceRange.max) {
      return `${parseInt(priceRange.min).toLocaleString()} - ${parseInt(
        priceRange.max
      ).toLocaleString()}`;
    } else if (priceRange.min) {
      return `${parseInt(priceRange.min).toLocaleString()}`;
    } else if (priceRange.max) {
      return `Up to ${parseInt(priceRange.max).toLocaleString()} `;
    }
    return "Price";
  };

  // Price options starting from 250,000
  const priceOptions = [
    { value: "250000", label: "250,000" },
    { value: "500000", label: "500,000" },
    { value: "750000", label: "750,000" },
    { value: "1000000", label: "1,000,000" },
    { value: "1500000", label: "1,500,000" },
    { value: "2000000", label: "2,000,000" },
    { value: "2500000", label: "2,500,000" },
    { value: "3000000", label: "3,000,000" },
    { value: "4000000", label: "4,000,000" },
    { value: "5000000", label: "5,000,000" },
    { value: "7500000", label: "7,500,000" },
    { value: "10000000", label: "10,000,000" },
    { value: "15000000", label: "15,000,000" },
    { value: "20000000", label: "20,000,000" },
    { value: "30000000", label: "30,000,000" },
    { value: "40000000", label: "40,000,000" },
    { value: "50000000", label: "50,000,000" },
    { value: "60000000", label: "60,000,000" },
    { value: "70000000", label: "70,000,000" },
    { value: "80000000", label: "80,000,000" },
    { value: "90000000", label: "90,000,000" },
    { value: "100000000", label: "100,000,000" },
  ];


  return (
    <section 
      className="relative h-screen w-full flex items-center justify-center text-center bg-gradient-to-br from-[#F8F6F0] via-white to-[#F2EEE8] overflow-hidden"
      onMouseMove={handleMouseMove}
    >

      {/* Ultra-Rich Cinematic Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{
            filter: 'brightness(1.2) contrast(1.1) saturate(1.1)',
            transform: `scale(1.1) translate(${(mousePosition.x - 50) * 0.005}%, ${(mousePosition.y - 50) * 0.005}%)`,
            transformOrigin: 'center center',
            transition: 'transform 0.3s ease-out'
          }}
          onError={(e) => {
            console.log('Video failed to load:', e);
          }}
          onLoadStart={() => {
            console.log('Video loading started');
          }}
          onCanPlay={() => {
            console.log('Video can play');
          }}
          onLoadedData={() => {
            console.log('Video data loaded');
          }}
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Fallback image - only show if video fails */}
        <Image
          src="/images/bgImage.webp"
          alt="Luxury Living in Dubai"
          fill
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-0"
          style={{
            filter: 'brightness(1.2) contrast(1.1) saturate(1.1)'
          }}
          quality={80}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
      </div>

      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10 z-10" />
      
      {/* Cinematic Overlay Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 z-15" />
      
      {/* Luxury Glow Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#dbbb90]/3 via-transparent to-[#dbbb90]/3 z-12" />
      
      {/* Super Luxury Glass Effect */}
      <div className="absolute inset-0 z-25">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-[#dbbb90]/10 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-white/5 via-transparent to-transparent rounded-full blur-2xl" />
      </div>
      
      {/* Floating Particles Effect - Client Side Only */}
      {typeof window !== 'undefined' && (
        <div className="absolute inset-0 z-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#dbbb90]/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}



      {/* Search Form - Bottom */}
      <div className="absolute bottom-2 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-20 text-white px-2 sm:px-4 lg:px-6 container w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >

        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-1 sm:gap-2 p-1 sm:p-2 bg-white/95 sm:bg-black/20 backdrop-blur-md rounded-lg border border-white/20 shadow-2xl">
            {/* Location */}
            <div className="lg:col-span-1 relative">
              <div className="absolute top-1 left-3 text-xs text-white/70 max-sm:text-gray-500 z-10 font-serif">
                Location
              </div>
              <Select>
                <SelectTrigger className="w-full h-7 sm:h-8 text-white max-sm:text-black focus:ring-offset-0 focus:ring-transparent bg-white/10 max-sm:bg-white border border-white/30 max-sm:border-gray-300 rounded-lg pt-2 pb-1 hover:border-[#dbbb90]/50 transition-colors">
                  <SelectValue placeholder="Location" className="max-sm:hidden pt-1" />
                </SelectTrigger>
                <SelectContent className="bg-white text-gray-900">
                  <SelectItem value="dubai-marina">Dubai Marina</SelectItem>
                  <SelectItem value="downtown-dubai">Downtown Dubai</SelectItem>
                  <SelectItem value="palm-jumeirah">Palm Jumeirah</SelectItem>
                  <SelectItem value="business-bay">Business Bay</SelectItem>
                  <SelectItem value="jlt">JLT</SelectItem>
                  <SelectItem value="deira">Deira</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Type */}
            <div className="lg:col-span-1 relative">
              <div className="absolute top-1 left-3 text-xs text-white/70 max-sm:text-gray-500 z-10 font-serif">
                Type
              </div>
              <Select>
                <SelectTrigger className="w-full h-7 sm:h-8 text-white max-sm:text-black bg-white/10 max-sm:bg-white border border-white/30 max-sm:border-gray-300 rounded-lg focus:ring-offset-0 focus:ring-transparent pt-2 pb-1">
                  <SelectValue placeholder="Type" className="max-sm:hidden pt-1" />
                </SelectTrigger>
                <SelectContent className="bg-white text-gray-900">
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="penthouse">Penthouse</SelectItem>
                  <SelectItem value="townhouse">Townhouse</SelectItem>
                  <SelectItem value="studio">Studio</SelectItem>
                  <SelectItem value="Plot">Plot</SelectItem>
                  <SelectItem value="Office">Office</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Price */}
            <div className="lg:col-span-1 relative">
              <div className="absolute top-1 left-3 text-xs text-white/70 max-sm:text-gray-500 z-10 font-serif">
                Price
              </div>
              <div
                className="relative w-full h-7 sm:h-8 text-white max-sm:text-black bg-white/10 max-sm:bg-white border border-white/30 max-sm:border-gray-300 rounded-lg focus:ring-offset-0 focus:ring-transparent cursor-pointer flex items-center px-3 pt-2 pb-1"
                onClick={() => setIsPriceOpen(!isPriceOpen)}
              >
                <span className="text-white max-sm:text-black max-sm:hidden pt-1">
                  {getPriceDisplayValue()}
                </span>
              </div>

              {isPriceOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 shadow-lg z-50 p-4 w-72 max-sm:w-full">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-xs text-gray-500 mb-2">
                        Min Price
                      </label>
                      <Select
                        value={priceRange.min}
                        onValueChange={(value) =>
                          handlePriceChange("min", value)
                        }
                      >
                        <SelectTrigger className="w-full h-10 text-gray-900 border-gray-300 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 border">
                          <SelectValue placeholder="Any" />
                        </SelectTrigger>
                        <SelectContent className="bg-white text-gray-900 max-h-48 overflow-y-auto">
                          {priceOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex-1">
                      <label className="block text-xs text-gray-500 mb-2">
                        Max Price
                      </label>
                      <Select
                        value={priceRange.max}
                        onValueChange={(value) =>
                          handlePriceChange("max", value)
                        }
                      >
                        <SelectTrigger className="w-full h-10 text-gray-900 border-gray-300 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 border">
                          <SelectValue placeholder="Any" />
                        </SelectTrigger>
                        <SelectContent className="bg-white text-gray-900 max-h-48 overflow-y-auto">
                          {priceOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bedrooms */}
            <div className="lg:col-span-1 relative">
              <div className="absolute top-1 left-3 text-xs text-white/70 max-sm:text-gray-500 z-10 font-serif">
                Bedrooms
              </div>
              <Select>
                <SelectTrigger className="w-full h-7 sm:h-8 text-white max-sm:text-black bg-white/10 max-sm:bg-white border max-sm:border-gray-300 border-white/30 rounded-lg focus:ring-offset-0 focus:ring-transparent pt-2 pb-1">
                  <SelectValue placeholder="Bedrooms" className="max-sm:hidden pt-1" />
                </SelectTrigger>
                <SelectContent className="bg-white text-gray-900">
                  <SelectItem value="studio">Studio</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="6+">6+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Ref Number */}
            <div className="lg:col-span-1 relative">
              <div className="absolute top-1 left-3 text-xs text-white/70 max-sm:text-gray-500 z-10 font-serif">
                Ref Number
              </div>
              <Input
                type="text"
                placeholder=""
                className="w-full h-7 sm:h-8 text-white max-sm:text-black bg-white/10 max-sm:bg-white border max-sm:border-gray-300 border-white/30 rounded-lg placeholder:text-white/70 max-sm:placeholder:text-black/70 focus-visible:ring-offset-0 focus-visible:ring-transparent pt-2 pb-1"
              />
            </div>

            {/* Search Button */}
            <div className="lg:col-span-1 sm:col-span-2">
              <Button className="w-full bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] hover:from-[#C2A17B] hover:to-[#B8956A] text-white font-semibold py-1 px-3 rounded-lg transition-all duration-300 h-7 sm:h-8 uppercase tracking-wider text-xs shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Search
              </Button>
            </div>
          </div>
        </div>
        </motion.div>
      </div>


    </section>
  );
}
