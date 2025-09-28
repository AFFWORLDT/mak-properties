"use client";
import { getAllBuyProperties } from "@/src/api/buy";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog";
import { cn } from "@/src/lib/utils";
import { RentCard } from "@/src/view/rent/rentCard";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Loader, Filter, X, Search } from "lucide-react";
import PropertyCardSkeleton from "@/src/components/common/property-card-skeleton";
import React, { useCallback, useMemo, Suspense } from "react";
import { api } from "@/src/lib/axios";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

// Constants
const COMPLETION_STATUS_OPTIONS = [
  { label: "Completion Status", value: "all" },
  { label: "Completed Secondary", value: "completed" },
  { label: "Off Plan Secondary", value: "off_plan" },
  { label: "Completed Primary", value: "completed_primary" },
  { label: "Off Plan Primary", value: "off_plan_primary" },
];

const PROPERTY_TYPES = [
  "APARTMENT",
  "PENTHOUSE",
  "TOWNHOUSE",
  "VILLA",
];

const RENT_PRICE_OPTIONS = [
  "5000", "10000", "15000", "20000", "25000", "30000", "35000", "40000",
  "45000", "50000", "60000", "70000", "80000", "90000", "100000", "120000",
  "150000", "200000", "250000", "300000", "400000", "500000"
];

const BEDROOM_OPTIONS = ["any", "1", "2", "3", "4", "5+"];
const BATHROOM_OPTIONS = ["any", "1", "2", "3", "4", "5+"];
const HANDOVER_YEAR_OPTIONS = [
  "any", "2024", "2025", "2026", "2027", "2028", "2029", "2030", "2031", "2032", "2033", "2034", "2035"
];

// Component that uses useSearchParams - needs to be wrapped in Suspense
function RentWithSearchParams() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [property, setProperty] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [showFilters, setShowFilters] = React.useState(false);
  const [developers, setDevelopers] = React.useState([]);
  const [developerSearch, setDeveloperSearch] = React.useState("");
  const [searchingDevelopers, setSearchingDevelopers] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [totalProperties, setTotalProperties] = React.useState(0);
  
  // Filter states - initialize with URL parameters
  const [filters, setFilters] = React.useState({
    listing_type: searchParams.get("listing_type") || "RENT",
    title: searchParams.get("title") || "",
    property_type: searchParams.get("property_type") || "any",
    min_price: searchParams.get("min_price") || "any",
    max_price: searchParams.get("max_price") || "any",
    completion_status: searchParams.get("completion_status") || "all",
    developer_id: searchParams.get("developer_id") || "any",
    bedrooms: searchParams.get("bedrooms") || "any",
    bathrooms: searchParams.get("bathrooms") || "any",
    handover_year: searchParams.get("handover_year") || "any"
  });

  const fetchproperty = useCallback(async (page = 1) => {
    setLoading(true);
    
    const queryParams = new URLSearchParams({
      sort_by: "total_count",
      sort_order: "desc",
      page: page.toString(),
      size: "24",
      status:"ACTIVE"
    });
    
    // Add filter parameters
    Object.entries(filters).forEach(([key, value]) => {
      if (value && value !== "any" && value !== "all") {
        queryParams.append(key, value);
      }
    });
    
    try {
      const res = await getAllBuyProperties(queryParams.toString());
      setProperty(res?.properties || []);
      setTotalPages(Math.ceil((res?.total || 0) / 24));
      setTotalProperties(res?.total || 0);
    } catch (error) {
      console.error("Error fetching properties:", error);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  // Debounced developer search
  const searchDevelopers = useCallback((searchTerm: string) => {
    if (searchTerm.length < 2) {
      setDevelopers([]);
      return;
    }

    setSearchingDevelopers(true);
    const timeoutId = setTimeout(async () => {
      try {
        const response = await api.get(`/properties/get_developers?name=${searchTerm}`);
        setDevelopers(response.data?.developers || response.data || []);
      } catch (error) {
        console.error("Error searching developers:", error);
        setDevelopers([]);
      } finally {
        setSearchingDevelopers(false);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleFilterChange = useCallback((key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    
    // Navigate when listing_type changes
    if (key === "listing_type") {
      if (value === "SELL") {
        router.push("/buy");
      } else if (value === "RENT") {
        router.push("/rent");
      }
    }
  }, [router]);

  const handleSearch = useCallback(() => {
    fetchproperty();
    if (showFilters) setShowFilters(false);
  }, [fetchproperty, showFilters]);

  const handleDeveloperSelect = useCallback((developer: any) => {
    handleFilterChange("developer_id", developer.id);
    setDeveloperSearch(developer.name);
    setDevelopers([]);
  }, [handleFilterChange]);

  const toggleFilters = useCallback(() => {
    setShowFilters(prev => !prev);
  }, []);

  React.useEffect(() => {
    fetchproperty(currentPage);
  }, [fetchproperty, currentPage]);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  React.useEffect(() => {
    searchDevelopers(developerSearch);
  }, [developerSearch, searchDevelopers]);

  // Close developer dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.developer-search')) {
        setDevelopers([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleFavorite = useCallback((item: any) => {
    console.log("Added to favorites:", item);
    // Add your favorite logic here
  }, []);

  // Memoized components
  const FilterButton = useMemo(() => (
    <div className="block md:hidden py-20">
      <div className="flex items-center gap-3 p-4 backdrop-blur-md">
        <div className="flex-1">
          <Input
            placeholder="Location or Project"
            value={filters.title}
            onChange={(e) => handleFilterChange("title", e.target.value)}
                          className="w-full text-gray-800 bg-white/90 border border-[#dbbb90]/30 placeholder:text-gray-600 hover:border-[#dbbb90]/50 transition-colors font-serif h-12"
          />
        </div>
        <Button
          onClick={toggleFilters}
          size="lg"
          variant="outline"
          className="h-12 w-12 bg-white hover:bg-gray-50 border border-gray-300 flex items-center justify-center"
        >
          <Icon icon="lucide:sliders-horizontal" className="text-gray-600 text-xl" />
        </Button>
        <Button
          onClick={handleSearch}
          size="lg"
          className="h-12 w-12 bg-primary hover:bg-primary/90 flex items-center justify-center shadow-lg"
        >
          <Icon icon="iconamoon:search-fill" className="text-white text-xl" />
        </Button>
      </div>
    </div>
  ), [filters.title, handleFilterChange, toggleFilters, handleSearch]);

  const PropertyTypeSelect = useMemo(() => (
    <Select value={filters.property_type} onValueChange={(value) => handleFilterChange("property_type", value)}>
      <SelectTrigger className="w-full sm:w-40 bg-white border-0 rounded-md h-12 text-gray-900 focus:ring-0 focus:ring-offset-0 px-4">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <SelectItem value="any">Property Type</SelectItem>
        {PROPERTY_TYPES.map(type => (
          <SelectItem key={type} value={type}>{type}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  ), [filters.property_type, handleFilterChange]);

  const PriceSelect = useMemo(() => {
    const MinPriceSelect = () => (
      <Select 
        value={filters.min_price} 
        onValueChange={(value) => handleFilterChange("min_price", value)}
      >
        <SelectTrigger className="w-full sm:w-28 bg-white border-0 rounded-md h-12 text-gray-900 focus:ring-0 focus:ring-offset-0 px-4">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectItem value="any">Min Price</SelectItem>
          {RENT_PRICE_OPTIONS.map(price => (
            <SelectItem key={price} value={price}>
              {parseInt(price).toLocaleString()}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );

    const MaxPriceSelect = () => (
      <Select 
        value={filters.max_price} 
        onValueChange={(value) => handleFilterChange("max_price", value)}
      >
        <SelectTrigger className="w-full sm:w-28 bg-white border-0 rounded-md h-12 text-gray-900 focus:ring-0 focus:ring-offset-0 px-4">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectItem value="any">Max Price</SelectItem>
          {RENT_PRICE_OPTIONS.map(price => (
            <SelectItem key={price} value={price}>
              {parseInt(price).toLocaleString()}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );

    return { MinPriceSelect, MaxPriceSelect };
  }, [filters.min_price, filters.max_price, handleFilterChange]);

  return (
    <div>
      <section className="relative bg-gradient-to-br from-[#F8F6F0] via-white to-[#F2EEE8] py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Mobile Filter */}
          {FilterButton}

          {/* Ultra Compact Luxury Desktop Filter */}
          <div className="hidden md:block">
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-4">
              {/* Filter Header */}
              <div className="text-center mb-4">
                <h2 className="text-lg font-light text-gray-800 mb-1 font-serif">
                  Refine Your <span className="text-[#dbbb90] font-normal">Search</span>
                </h2>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#dbbb90] to-transparent mx-auto"></div>
              </div>

              {/* Compact Filter Form */}
              <div className="space-y-3">
                {/* First Row - Main Filters */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {/* Transaction Type */}
                  <div className="relative">
                    <Select value={filters.listing_type} onValueChange={(value) => handleFilterChange("listing_type", value)}>
                      <SelectTrigger className="w-full h-10 bg-white border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#dbbb90]/20 focus:border-[#dbbb90] transition-all duration-300 text-sm">
                        <SelectValue placeholder="Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="SELL">Buy</SelectItem>
                        <SelectItem value="RENT">Rent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Location */}
                  <div className="relative col-span-2 sm:col-span-1">
                    <Input
                      type="text"
                      placeholder="Location"
                      value={filters.title}
                      onChange={(e) => handleFilterChange("title", e.target.value)}
                      className="w-full h-10 pl-3 pr-3 bg-white border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#dbbb90]/20 focus:border-[#dbbb90] transition-all duration-300 text-sm"
                    />
                  </div>

                  {/* Property Type */}
                  <div className="relative">
                    <Select value={filters.property_type} onValueChange={(value) => handleFilterChange("property_type", value)}>
                      <SelectTrigger className="w-full h-10 bg-white border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#dbbb90]/20 focus:border-[#dbbb90] transition-all duration-300 text-sm">
                        <SelectValue placeholder="Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Property Type</SelectItem>
                        {PROPERTY_TYPES.map(type => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Bedrooms */}
                  <div className="relative">
                    <Select value={filters.bedrooms} onValueChange={(value) => handleFilterChange("bedrooms", value)}>
                      <SelectTrigger className="w-full h-10 bg-white border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#dbbb90]/20 focus:border-[#dbbb90] transition-all duration-300 text-sm">
                        <SelectValue placeholder="Beds" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Beds</SelectItem>
                        {BEDROOM_OPTIONS.slice(1).map(bed => (
                          <SelectItem key={bed} value={bed}>{bed === "5+" ? "5+ Beds" : `${bed} Bed`}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Min Price */}
                  <div className="relative">
                    <Select value={filters.min_price} onValueChange={(value) => handleFilterChange("min_price", value)}>
                      <SelectTrigger className="w-full h-10 bg-white border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#dbbb90]/20 focus:border-[#dbbb90] transition-all duration-300 text-sm">
                        <SelectValue placeholder="Min Price" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Min Price</SelectItem>
                        {RENT_PRICE_OPTIONS.slice(0, 8).map(price => (
                          <SelectItem key={price} value={price}>
                            {parseInt(price) >= 100000 ? `${parseInt(price)/1000}K AED` : `${parseInt(price).toLocaleString()} AED`}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Search Button */}
                  <div className="relative">
                    <Button
                      onClick={handleSearch}
                      className="w-full h-10 bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] hover:from-[#C2A17B] hover:to-[#B8956A] text-white rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 text-sm"
                    >
                      <Search className="w-3 h-3 mr-1" />
                      Search
                    </Button>
                  </div>
                </div>

                {/* Second Row - Additional Filters */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {/* Max Price */}
                  <div className="relative">
                    <Select value={filters.max_price} onValueChange={(value) => handleFilterChange("max_price", value)}>
                      <SelectTrigger className="w-full h-10 bg-white border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#dbbb90]/20 focus:border-[#dbbb90] transition-all duration-300 text-sm">
                        <SelectValue placeholder="Max Price" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Max Price</SelectItem>
                        {RENT_PRICE_OPTIONS.slice(4, 12).map(price => (
                          <SelectItem key={price} value={price}>
                            {parseInt(price) >= 100000 ? `${parseInt(price)/1000}K AED` : `${parseInt(price).toLocaleString()} AED`}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Completion Status */}
                  <div className="relative">
                    <Select value={filters.completion_status} onValueChange={(value) => handleFilterChange("completion_status", value)}>
                      <SelectTrigger className="w-full h-10 bg-white border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#dbbb90]/20 focus:border-[#dbbb90] transition-all duration-300 text-sm">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        {COMPLETION_STATUS_OPTIONS.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* More Filters Button */}
                  <div className="relative">
                    <Button
                      onClick={toggleFilters}
                      variant="outline"
                      className="w-full h-10 border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-300 text-sm"
                    >
                      <Icon icon="lucide:sliders-horizontal" className="w-3 h-3 mr-1" />
                      More Filters
                    </Button>
                  </div>

                  {/* Results Count */}
                  <div className="relative flex items-center justify-center">
                    <span className="text-sm text-gray-600 font-medium">
                      {totalProperties.toLocaleString()} Properties
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Filter Modal */}
      <Dialog open={showFilters} onOpenChange={setShowFilters}>
        <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <span className="text-xl font-semibold">Search Filters</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowFilters(false)}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            {/* Search Input - Hidden on large screens since it's shown in desktop form */}
            <div className="space-y-2 md:hidden">
              <label className="text-sm font-medium text-gray-700">Location</label>
              <div className="relative">
                <Input
                  placeholder="City, building or community"
                  value={filters.title}
                  onChange={(e) => handleFilterChange("title", e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-md h-14 text-gray-900 placeholder:text-gray-600 focus-visible:ring-2 focus-visible:ring-primary"
                />
                <Icon 
                  icon="heroicons:magnifying-glass" 
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                />
              </div>
            </div>

            {/* Listing Type Filter - Hidden on large screens since it's shown in desktop form */}
            <div className="space-y-2 md:hidden">
              <label className="text-sm font-medium text-gray-700">Type</label>
              <Select value={filters.listing_type} onValueChange={(value) => handleFilterChange("listing_type", value)}>
                <SelectTrigger className="w-full bg-white border border-gray-300 rounded-md h-14 text-gray-900 focus:ring-2 focus:ring-primary">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="SELL">Buy</SelectItem>
                  <SelectItem value="RENT">Rent</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Property Type - Hidden on large screens since it's shown in desktop form */}
            <div className="space-y-2 md:hidden">
              <label className="text-sm font-medium text-gray-700">Property Type</label>
              <Select value={filters.property_type} onValueChange={(value) => handleFilterChange("property_type", value)}>
                <SelectTrigger className="w-full bg-white border border-gray-300 rounded-md h-14 text-gray-900 focus:ring-2 focus:ring-primary">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white max-h-60">
                  <SelectItem value="any">Any Property Type</SelectItem>
                  {PROPERTY_TYPES.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Completion Status */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Completion Status</label>
              <Select value={filters.completion_status} onValueChange={(value) => handleFilterChange("completion_status", value)}>
                <SelectTrigger className="w-full bg-white border border-gray-300 rounded-md h-14 text-gray-900 focus:ring-2 focus:ring-primary">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {COMPLETION_STATUS_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Developer Search */}
            <div className="space-y-2 developer-search">
              <label className="text-sm font-medium text-gray-700">Developer</label>
              <div className="relative">
                <Input
                  placeholder="Search developers..."
                  value={developerSearch}
                  onChange={(e) => setDeveloperSearch(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-md h-14 text-gray-900 placeholder:text-gray-600 focus-visible:ring-2 focus-visible:ring-primary pr-10"
                />
                {searchingDevelopers && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <Loader className="w-5 h-5 animate-spin text-gray-400" />
                  </div>
                )}
              </div>
              {developers.length > 0 && (
                <div className="max-h-40 overflow-y-auto border border-gray-200 rounded-md bg-white">
                  {developers.map((developer: any) => (
                    <div
                      key={developer.id}
                      className="px-3 py-2 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                      onClick={() => handleDeveloperSelect(developer)}
                    >
                      <div className="text-sm font-medium text-gray-900">{developer.name}</div>
                      {developer.location && (
                        <div className="text-xs text-gray-500">{developer.location}</div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Price Range - Hidden on large screens since it's shown in desktop form */}
            <div className="grid grid-cols-2 gap-4 md:hidden">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Min Price</label>
                <Select value={filters.min_price} onValueChange={(value) => handleFilterChange("min_price", value)}>
                  <SelectTrigger className="w-full bg-white border border-gray-300 rounded-md h-14 text-gray-900 focus:ring-2 focus:ring-primary">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white max-h-60">
                    <SelectItem value="any">Any</SelectItem>
                    {RENT_PRICE_OPTIONS.map(price => (
                      <SelectItem key={price} value={price}>
                        {parseInt(price).toLocaleString()}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Max Price</label>
                <Select value={filters.max_price} onValueChange={(value) => handleFilterChange("max_price", value)}>
                  <SelectTrigger className="w-full bg-white border border-gray-300 rounded-md h-14 text-gray-900 focus:ring-2 focus:ring-primary">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white max-h-60">
                    <SelectItem value="any">Any</SelectItem>
                    {RENT_PRICE_OPTIONS.map(price => (
                      <SelectItem key={price} value={price}>
                        {parseInt(price).toLocaleString()}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Bedrooms - Hidden on large screens since it's shown in desktop form */}
            <div className="space-y-2 md:hidden">
              <label className="text-sm font-medium text-gray-700">Bedrooms</label>
              <Select value={filters.bedrooms} onValueChange={(value) => handleFilterChange("bedrooms", value)}>
                <SelectTrigger className="w-full bg-white border border-gray-300 rounded-md h-14 text-gray-900 focus:ring-2 focus:ring-primary">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="any">Any Bedrooms</SelectItem>
                  {BEDROOM_OPTIONS.slice(1).map((bed) => (
                    <SelectItem key={bed} value={bed}>
                      {bed === "5+" ? "5+ Beds" : `${bed} Bed`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Bathrooms */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Bathrooms</label>
              <Select value={filters.bathrooms} onValueChange={(value) => handleFilterChange("bathrooms", value)}>
                <SelectTrigger className="w-full bg-white border border-gray-300 rounded-md h-14 text-gray-900 focus:ring-2 focus:ring-primary">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="any">Any Bathrooms</SelectItem>
                  {BATHROOM_OPTIONS.slice(1).map((bath) => (
                    <SelectItem key={bath} value={bath}>
                      {bath === "5+" ? "5+ Baths" : `${bath} Bath`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Handover Year */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Handover Year</label>
              <Select value={filters.handover_year} onValueChange={(value) => handleFilterChange("handover_year", value)}>
                <SelectTrigger className="w-full bg-white border border-gray-300 rounded-md h-14 text-gray-900 focus:ring-2 focus:ring-primary">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="any">Any Year</SelectItem>
                  {HANDOVER_YEAR_OPTIONS.slice(1).map((year) => (
                    <SelectItem key={year} value={year}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Search Button */}
            <Button 
              onClick={handleSearch}
              className="w-full bg-primary hover:bg-primary/90 text-white font-medium h-14 rounded-md"
            >
              <Search className="w-5 h-5 mr-2" />
              Search Properties
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="mx-auto px-4 py-7 mt-11 max-w-5xl">
        <h1 className="text-center text-5xl font-mono">
          Dubai&apos;s most exquisite rental properties
        </h1>
        <p className="text-center text-gray-600 mt-4">
          Find your perfect rental home in Dubai&apos;s most prestigious locations
          with world-class amenities and unmatched lifestyle.
        </p>
      </div>
      <p className="text-center mb-11">
      <Link href={"/whyDubai#rent-investment"}>
      <span
          className={cn(
            "relative pb-1 transition-all duration-300 text-primary uppercase font-thin",
            "after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0",
            "after:-translate-x-1/2 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
          )}
        >
          Learn More
        </span>
      </Link>
      </p>

      {loading || property.length === 0 ? (
        <div className="text-center py-12">
          {Array.from({ length: 6 }).map((_, i) => (
              <PropertyCardSkeleton key={i} />
            ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 container my-4 mx-auto">
          {property?.map((item: any, index: number) => (
            <RentCard
              key={item.id ?? index}
              data={item}
              onFavorite={handleFavorite}
            />
          ))}
        </div>
      )}

      {/* Pagination */}
      {!loading && property.length > 0 && totalPages > 1 && (
        <div className="flex justify-center items-center mt-12 mb-8">
          <div className="flex items-center space-x-2">
            {/* Previous Button */}
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>

            {/* Page Numbers */}
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }

              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    currentPage === pageNum
                      ? 'bg-[#dbbb90] text-white'
                      : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            {/* Next Button */}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>

          {/* Results Info */}
          <div className="ml-8 text-sm text-gray-600">
            Showing {((currentPage - 1) * 24) + 1} to {Math.min(currentPage * 24, totalProperties)} of {totalProperties} properties
          </div>
        </div>
      )}
    </div>
  );
}

// Main component that wraps RentWithSearchParams in Suspense
function Rent() {
  return (
    <Suspense fallback={
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 container my-4 mx-auto">
        {Array.from({ length: 6 }).map((_, i) => (
          <PropertyCardSkeleton key={i} />
        ))}
      </div>
    }>
      <RentWithSearchParams />
    </Suspense>
  );
}

export default Rent;