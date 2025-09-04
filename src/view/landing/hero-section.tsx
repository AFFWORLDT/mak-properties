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
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getAllProperties } from "@/src/api/offPlans";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function HeroSection() {
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [offPlanProjects, setOffPlanProjects] = useState<any[]>([]);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  const handlePriceChange = (field: "min" | "max", value: string) => {
    setPriceRange((prev) => ({ ...prev, [field]: value }));
  };

  // Fetch off-plan projects
  useEffect(() => {
    const fetchOffPlanProjects = async () => {
      try {
        setIsLoading(true);
        const data = await getAllProperties();
        if (data?.projects && data.projects.length > 0) {
          setOffPlanProjects(data.projects);
        }
      } catch (error) {
        console.error("Error fetching off-plan projects:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOffPlanProjects();
  }, []);

  // Auto-slide through projects
  useEffect(() => {
    if (offPlanProjects.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentProjectIndex((prevIndex) => 
        (prevIndex + 1) % offPlanProjects.length
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [offPlanProjects]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const goToProject = (index: number) => {
    setCurrentProjectIndex(index);
  };

  const nextProject = () => {
    setCurrentProjectIndex((prev) => 
      prev === offPlanProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => 
      prev === 0 ? offPlanProjects.length - 1 : prev - 1
    );
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

  const currentProject = offPlanProjects[currentProjectIndex];

  return (
    <section 
      className="relative h-screen md:h-[115vh] w-full flex items-center justify-center text-center bg-gradient-to-br from-[#F8F6F0] via-white to-[#F2EEE8] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Luxury Loading Overlay */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute inset-0 z-50 bg-gradient-to-br from-[#F8F6F0] via-white to-[#F2EEE8] flex items-center justify-center"
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-[#dbbb90]/30 border-t-[#dbbb90] rounded-full mx-auto mb-4"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-[#dbbb90] font-light text-lg tracking-wider"
            >
              EVID PROPERTIES
            </motion.p>
          </div>
        </motion.div>
      )}

      {/* Ultra-Rich Cinematic Background */}
      <div className="absolute inset-0 w-full h-full">
        {isLoading ? (
          <Image
            src="/images/bgImage.webp"
            alt="Luxury Living in Dubai"
            fill
            className="object-cover z-0 animate-zoomInOut"
            quality={80}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
        ) : (
          <div className="relative w-full h-full">
            {offPlanProjects.map((project, index) => (
              <div key={project.id || index} className="absolute inset-0">
                {project.photos && project.photos.length > 0 ? (
                  <Image
                    src={project.photos[0]}
                    alt={project.name || "Luxury Project"}
                    fill
                    className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
                      index === currentProjectIndex
                        ? "opacity-100 z-10"
                        : "opacity-0 z-0"
                    }`}
                    style={{
                      transform: index === currentProjectIndex 
                        ? `scale(1.1) translate(${(mousePosition.x - 50) * 0.005}%, ${(mousePosition.y - 50) * 0.005}%)`
                        : 'scale(1)',
                      transformOrigin: 'center center'
                    }}
                    quality={85}
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  />
                ) : (
                  <Image
                    src="/images/bgImage.webp"
                    alt="Luxury Living in Dubai"
                    fill
                    className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
                      index === currentProjectIndex
                        ? "opacity-100 z-10"
                        : "opacity-0 z-0"
                    }`}
                    quality={80}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10 z-10" />
      
      {/* Cinematic Overlay Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 z-15" />

      {/* Project Information Overlay - Center */}
      {!isLoading && currentProject && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 text-white max-w-xs sm:max-w-sm w-full px-4">
          <motion.div
            key={currentProjectIndex}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/20 text-center shadow-sm"
          >
            <h2 className="text-lg sm:text-2xl font-light mb-2 leading-tight font-serif text-gray-900">
              {currentProject.name || "Luxury Project"}
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4 font-serif">
              {currentProject.location?.community}, {currentProject.location?.city}
            </p>
            
            {/* Hero Title Below Project */}
            <motion.div
              key={`hero-title-${currentProjectIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
              <h1 className="text-lg sm:text-2xl lg:text-3xl font-light mb-2 sm:mb-3 text-[#dbbb90] font-serif">
                Luxury Living Reimagined
              </h1>
              <p className="text-xs sm:text-sm uppercase max-w-2xl mx-auto text-gray-800 leading-tight tracking-wider font-serif">
                EMBRACE TO A JOURNEY OF PURE SOPHISTICATION
              </p>
            </motion.div>
          </motion.div>
        </div>
      )}

      {/* Search Form - Bottom */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white px-2 sm:px-6 lg:px-8 container w-full">
        <motion.div
          key={`search-${currentProjectIndex}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >

        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4 p-4 sm:p-6 bg-white/95 sm:bg-black/20 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/20 shadow-2xl">
            {/* Location */}
            <div className="lg:col-span-1 relative">
              <div className="absolute top-2 left-3 text-xs text-white/70 max-sm:text-gray-500 z-10 font-serif">
                Location
              </div>
              <Select>
                <SelectTrigger className="w-full h-12 sm:h-14 text-white max-sm:text-black focus:ring-offset-0 focus:ring-transparent bg-white/10 max-sm:bg-white border border-white/30 max-sm:border-gray-300 rounded-lg pt-5 pb-2 hover:border-[#dbbb90]/50 transition-colors">
                  <SelectValue placeholder="Any" className="max-sm:hidden pt-2" />
                </SelectTrigger>
                <SelectContent className="bg-white text-gray-900">
                  <SelectItem value="any">Any</SelectItem>
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
              <div className="absolute top-2 left-3 text-xs text-white/70 max-sm:text-gray-500 z-10 font-serif">
                Type
              </div>
              <Select>
                <SelectTrigger className="w-full h-12 sm:h-14 text-white max-sm:text-black bg-white/10 max-sm:bg-white border border-white/30 max-sm:border-gray-300 rounded-none  focus:ring-offset-0 focus:ring-transparent pt-5 pb-2">
                  <SelectValue placeholder="Any" className="max-sm:hidden pt-2" />
                </SelectTrigger>
                <SelectContent className="bg-white text-gray-900">
                  <SelectItem value="any">Any</SelectItem>
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
              <div className="absolute top-2 left-3 text-xs text-white/70 max-sm:text-gray-500 z-10 font-serif">
                Price
              </div>
              <div
                className="relative w-full h-12 sm:h-14 text-white max-sm:text-black bg-white/10 max-sm:bg-white border border-white/30 max-sm:border-gray-300 rounded-none  focus:ring-offset-0 focus:ring-transparent cursor-pointer flex items-center px-3 pt-5 pb-2"
                onClick={() => setIsPriceOpen(!isPriceOpen)}
              >
                <span className="text-white max-sm:text-black max-sm:hidden pt-2">
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
                          <SelectItem value="any">Any</SelectItem>
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
                          <SelectItem value="any">Any</SelectItem>
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
              <div className="absolute top-2 left-3 text-xs text-white/70 max-sm:text-gray-500 z-10 font-serif">
                Bedrooms
              </div>
              <Select>
                <SelectTrigger className="w-full h-12 sm:h-14 text-white max-sm:text-black bg-white/10 max-sm:bg-white border max-sm:border-gray-300 border-white/30 rounded-none  focus:ring-offset-0 focus:ring-transparent pt-5 pb-2">
                  <SelectValue placeholder="Any" className="max-sm:hidden pt-2" />
                </SelectTrigger>
                <SelectContent className="bg-white text-gray-900">
                  <SelectItem value="any">Any</SelectItem>
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
              <div className="absolute top-2 left-3 text-xs text-white/70 max-sm:text-gray-500 z-10 font-serif">
                Ref Number
              </div>
              <Input
                type="text"
                placeholder=""
                className="w-full h-12 sm:h-14 text-white max-sm:text-black bg-white/10 max-sm:bg-white border max-sm:border-gray-300 border-white/30 rounded-none  placeholder:text-white/70 max-sm:placeholder:text-black/70 focus-visible:ring-offset-0 focus-visible:ring-transparent pt-5 pb-2"
              />
            </div>

            {/* Search Button */}
            <div className="lg:col-span-1 sm:col-span-2">
              <Button className="w-full bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] hover:from-[#C2A17B] hover:to-[#B8956A] text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 h-12 sm:h-14 uppercase tracking-wider text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Search
              </Button>
            </div>
          </div>
        </div>
        </motion.div>
      </div>


      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-black/50 z-40 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-white text-center"
          >
            <div className="w-16 h-16 border-4 border-white/20 border-t-[#dbbb90] rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-lg font-light">Loading Luxury Projects...</p>
          </motion.div>
        </div>
      )}
    </section>
  );
}
