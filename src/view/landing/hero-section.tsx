import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const [filters, setFilters] = useState({
    transactionType: "buy",
    location: "",
    propertyType: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
  });

  // Set client flag after component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);


  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const handleSearch = () => {
    // Map transaction type to the correct page and listing type
    let targetPage = "/buy";
    let listingType = "SELL";
    
    switch (filters.transactionType) {
      case "buy":
        targetPage = "/buy";
        listingType = "SELL";
        break;
      case "rent":
        targetPage = "/rent";
        listingType = "RENT";
        break;
      case "off-plan":
        targetPage = "/offPlans";
        listingType = "SELL"; // Off-plan uses SELL listing type
        break;
      default:
        targetPage = "/buy";
        listingType = "SELL";
    }

    // Build query parameters
    const queryParams = new URLSearchParams();
    
    // Add listing type for buy/rent pages
    if (filters.transactionType !== "off-plan") {
      queryParams.append("listing_type", listingType);
    }
    
    // Add other filters if they have values
    if (filters.location) {
      queryParams.append("title", filters.location);
    }
    
    if (filters.propertyType) {
      // Map property types to match the existing system
      const propertyTypeMap: { [key: string]: string } = {
        "apartment": "APARTMENT",
        "villa": "VILLA", 
        "penthouse": "PENTHOUSE",
        "townhouse": "TOWNHOUSE",
        "studio": "APARTMENT", // Studio maps to apartment
        "duplex": "APARTMENT", // Duplex maps to apartment
        "maisonette": "APARTMENT" // Maisonette maps to apartment
      };
      queryParams.append("property_type", propertyTypeMap[filters.propertyType] || filters.propertyType.toUpperCase());
    }
    
    if (filters.minPrice) {
      queryParams.append("min_price", filters.minPrice);
    }
    
    if (filters.maxPrice) {
      queryParams.append("max_price", filters.maxPrice);
    }
    
    if (filters.bedrooms) {
      queryParams.append("bedrooms", filters.bedrooms);
    }

    // Navigate to the target page with query parameters
    const queryString = queryParams.toString();
    const finalUrl = queryString ? `${targetPage}?${queryString}` : targetPage;
    
    router.push(finalUrl);
  };


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
            transform: isClient 
              ? `scale(1.1) translate(${(mousePosition.x - 50) * 0.005}%, ${(mousePosition.y - 50) * 0.005}%)`
              : 'scale(1.1)',
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
      {isClient && (
        <div className="absolute inset-0 z-20">
          {[...Array(20)].map((_, i) => {
            // Use deterministic positioning based on index to avoid hydration mismatch
            const left = (i * 7.3) % 100;
            const top = (i * 11.7) % 100;
            const duration = 3 + (i % 3) * 0.5;
            const delay = (i % 4) * 0.5;
            
            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#dbbb90]/30 rounded-full"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration,
                  repeat: Infinity,
                  delay,
                }}
              />
            );
          })}
        </div>
      )}





      {/* Ultra Compact Property Filter Section */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 w-full max-w-5xl px-3">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 p-3 md:p-4"
        >
          {/* Compact Filter Header */}
          <div className="text-center mb-3">
            <h2 className="text-lg md:text-xl font-light text-gray-800 mb-1 font-serif">
              Find Your <span className="text-[#dbbb90] font-normal">Dream Property</span>
            </h2>
            <div className="w-10 md:w-12 h-px bg-gradient-to-r from-transparent via-[#dbbb90] to-transparent mx-auto"></div>
          </div>

          {/* Ultra Compact Filter Form */}
          <div className="space-y-3">
            {/* Single Row - All Filters */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
              {/* Transaction Type */}
              <div className="relative">
                <Select
                  value={filters.transactionType}
                  onValueChange={(value) => setFilters(prev => ({ ...prev, transactionType: value }))}
                >
                  <SelectTrigger className="w-full h-9 md:h-10 bg-white border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#dbbb90]/20 focus:border-[#dbbb90] transition-all duration-300 text-xs md:text-sm">
                    <SelectValue placeholder="Buy" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="buy">Buy</SelectItem>
                    <SelectItem value="rent">Rent</SelectItem>
                    <SelectItem value="off-plan">Off-Plan</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Location */}
              <div className="relative col-span-2 sm:col-span-1">
                <Input
                  type="text"
                  placeholder="Location"
                  value={filters.location}
                  onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
                  className="w-full h-9 md:h-10 pl-2 md:pl-3 pr-3 bg-white border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#dbbb90]/20 focus:border-[#dbbb90] transition-all duration-300 text-xs md:text-sm"
                />
              </div>

              {/* Property Type */}
              <div className="relative">
                <Select
                  value={filters.propertyType}
                  onValueChange={(value) => setFilters(prev => ({ ...prev, propertyType: value }))}
                >
                  <SelectTrigger className="w-full h-9 md:h-10 bg-white border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#dbbb90]/20 focus:border-[#dbbb90] transition-all duration-300 text-xs md:text-sm">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="penthouse">Penthouse</SelectItem>
                    <SelectItem value="townhouse">Townhouse</SelectItem>
                    <SelectItem value="studio">Studio</SelectItem>
                    <SelectItem value="duplex">Duplex</SelectItem>
                    <SelectItem value="maisonette">Maisonette</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Bedrooms */}
              <div className="relative">
                <Select
                  value={filters.bedrooms}
                  onValueChange={(value) => setFilters(prev => ({ ...prev, bedrooms: value }))}
                >
                  <SelectTrigger className="w-full h-9 md:h-10 bg-white border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#dbbb90]/20 focus:border-[#dbbb90] transition-all duration-300 text-xs md:text-sm">
                    <SelectValue placeholder="Beds" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="studio">Studio</SelectItem>
                    <SelectItem value="1">1 Bed</SelectItem>
                    <SelectItem value="2">2 Beds</SelectItem>
                    <SelectItem value="3">3 Beds</SelectItem>
                    <SelectItem value="4">4 Beds</SelectItem>
                    <SelectItem value="5">5+ Beds</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range */}
              <div className="relative">
                <Select
                  value={filters.minPrice}
                  onValueChange={(value) => setFilters(prev => ({ ...prev, minPrice: value }))}
                >
                  <SelectTrigger className="w-full h-9 md:h-10 bg-white border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#dbbb90]/20 focus:border-[#dbbb90] transition-all duration-300 text-xs md:text-sm">
                    <SelectValue placeholder="Min Price" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="250000">250K AED</SelectItem>
                    <SelectItem value="500000">500K AED</SelectItem>
                    <SelectItem value="750000">750K AED</SelectItem>
                    <SelectItem value="1000000">1M AED</SelectItem>
                    <SelectItem value="1500000">1.5M AED</SelectItem>
                    <SelectItem value="2000000">2M AED</SelectItem>
                    <SelectItem value="3000000">3M AED</SelectItem>
                    <SelectItem value="5000000">5M AED</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Search Button */}
              <div className="relative">
                <Button
                  onClick={handleSearch}
                  className="w-full h-9 md:h-10 bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] hover:from-[#C2A17B] hover:to-[#B8956A] text-white rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 text-xs md:text-sm"
                >
                  <Search className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                  <span className="hidden sm:inline">Search</span>
                  <span className="sm:hidden">🔍</span>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
