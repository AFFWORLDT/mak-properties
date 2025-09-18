"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Globe,
  ChevronDown,
  User,
  Settings,
  Home,
  DollarSign,
  Scale,
  Bed,
  Wrench,
  Users,
  Bitcoin,
  TrendingUp,
  Building2,
} from "lucide-react";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { cn } from "@/src/lib/utils";
import { Icon } from "@iconify/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/src/components/ui/hover-card";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOverlayOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOverlayOpen]);

  const navLinks = [
    { href: "/buy", label: "Buy" },
    { href: "/rent", label: "Rent" },
    { href: "/offPlans", label: "Projects" },
    { href: "/team", label: "Teams" },
    { href: "/communities", label: "Areas" },
    { href: "/service", label: "Services" },
    { href: "/blog", label: "Blogs" },
    { href: "/contactUs", label: "More" },
  ];
  const services = [
    {
      icon: <Settings className="h-4 w-4 text-gray-500" />,
      name: "Property Management"
    },
    {
      icon: <Home className="h-4 w-4 text-gray-500" />,
      name: "List Your Property"
    },
    {
      icon: <DollarSign className="h-4 w-4 text-gray-500" />,
      name: "Mortgages"
    },
    {
      icon: <Scale className="h-4 w-4 text-gray-500" />,
      name: "Conveyancing"
    },
    {
      icon: <Bed className="h-4 w-4 text-gray-500" />,
      name: "Short Term Rentals"
    },
    {
      icon: <Wrench className="h-4 w-4 text-gray-500" />,
      name: "Property Snagging"
    },
    {
      icon: <Users className="h-4 w-4 text-gray-500" />,
      name: "Partner Program"
    },
    
  ];

  const headerLink = [
    { href: "/buy", label: "Buy" },
    { href: "/rent", label: "Rent" },
    { href: "/offPlans", label: "Projects" },
    { href: "/team", label: "Teams" },
    { href: "/communities", label: "Areas" },
    { href: "/service", label: "Services", hasDropdown: true },
    { href: "/blog", label: "Blogs" },
    { href: "/contactUs", label: "More" },
  ];
  useEffect(() => {
    if (!isOverlayOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      // Don't close if clicking inside the mobile overlay
      if (target.closest('[data-mobile-overlay]')) {
        return;
      }
      setIsOverlayOpen(false);
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOverlayOpen]);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <nav
        className={cn(
          "container mx-auto flex items-center justify-between px-3 md:px-6",
          isScrolled ? "h-16 md:h-20" : "h-18 md:h-24"
        )}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link href={"/"}>
            <Image
              src="/images/logo.webp"
              alt="MAK PROPERTIES Logo"
              width={100}
              height={32}
              className="object-contain w-20 h-6 md:w-24 md:h-8"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {headerLink.map((link, i) => {
            if (link.hasDropdown) {
              return (
                <HoverCard key={i} openDelay={200} closeDelay={100}>
                  <HoverCardTrigger asChild>
                    <Link
                      href={link.href}
                      className={cn(
                        "relative pb-1 transition-all duration-300 font-sans text-[17px]",
                        isScrolled && pathname === "/" ? "text-black" : "text-gray-800",
                        "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0",
                        "after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
                        pathname === link.href && "after:w-full"
                      )}
                      style={{
                        letterSpacing: "1.5px",
                      }}
                    >
                      {link.label}
                    </Link>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-[500px] p-0" sideOffset={10}>
                    <div className="bg-white rounded-lg shadow-xl border border-gray-200">
                      {/* Header */}
                      <div className="p-4 border-b border-gray-100">
                        <h3 className="text-gray-500 text-sm font-light">Our Services</h3>
                      </div>
                      
                      {/* Services Grid */}
                      <div className="p-4">
                        <div className="grid grid-cols-2 gap-3">
                          {/* Left Column */}
                          <div className="space-y-2">
                            {services.slice(0, 5).map((service, index) => (
                              <Link
                                key={index}
                                href={
                                  service.name === "List Your Property" ? "/list-your-property" :
                                  service.name === "Property Management" ? "/property-management" :
                                  service.name === "Mortgages" ? "/mortgages" :
                                  service.name === "Conveyancing" ? "/conveyancing" :
                                  service.name === "Short Term Rentals" ? "/short-term-rental" :
                                  "/service"
                                }
                                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer group"
                              >
                                <div className="flex-shrink-0 transition-colors duration-200 group-hover:text-blue-600">
                                  {service.icon}
                                </div>
                                <span className="text-blue-900 font-medium text-sm group-hover:text-blue-700 transition-colors duration-200">
                                  {service.name}
                                </span>
                              </Link>
                            ))}
                          </div>

                          {/* Right Column */}
                          <div className="space-y-2">
                            {services.slice(5, 10).map((service, index) => (
                              <Link
                                key={index + 5}
                                href={
                                  service.name === "List Your Property" ? "/list-your-property" :
                                  service.name === "Property Management" ? "/property-management" :
                                  service.name === "Mortgages" ? "/mortgages" :
                                  service.name === "Conveyancing" ? "/conveyancing" :
                                  service.name === "Short-Term Rental" ? "/short-term-rental" :
                                  "/service"
                                }
                                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer group"
                              >
                                <div className="flex-shrink-0 transition-colors duration-200 group-hover:text-blue-600">
                                  {service.icon}
                                </div>
                                <span className="text-blue-900 font-medium text-sm group-hover:text-blue-700 transition-colors duration-200">
                                  {service.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              );
            }
            
            return (
            <Link
              key={i}
              href={link.href}
              className={cn(
                  "relative pb-1 transition-all duration-300 font-sans text-[17px]",
                  isScrolled && pathname === "/" ? "text-black" : "text-gray-800",
                "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0",
                "after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
                pathname === link.href && "after:w-full"
              )}
              style={{
                letterSpacing: "1.5px",
              }}
            >
              {link.label}
            </Link>
            );
          })}
        </div>

        {/* Right Side - Mobile Optimized */}
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Currency Selector - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-2">
            <div
              className={`w-px h-6 ${
                isScrolled ? "bg-black/30" : "bg-black/30"
              }`}
            ></div>
            <DropdownMenu>
              <DropdownMenuTrigger
                className={cn(
                  "flex items-center space-x-1 transition-colors",
                  isScrolled
                    ? "text-black hover:text-black/80"
                    : "text-black hover:text-black/80"
                )}
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm font-medium underline">USD</span>
                <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>USD</DropdownMenuItem>
                <DropdownMenuItem>AED</DropdownMenuItem>
                <DropdownMenuItem>EUR</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Login Button - Hidden on mobile */}
          <Link href="/login">
            <Button
              variant="outline"
              className={cn(
                "hidden lg:flex items-center space-x-2 bg-transparent h-8 px-3 text-xs transition-all duration-200",
                isScrolled
                  ? "border-black text-black hover:bg-black/10"
                  : "border-black text-black hover:bg-black/10"
              )}
            >
              <User className="h-3 w-3" />
              <span>Login</span>
            </Button>
          </Link>

          {/* List Your Property Button - Responsive */}
          <Link href="/list-your-property">
            <Button
              className={cn(
                "border h-8 px-2 md:px-3 text-xs md:text-sm transition-all duration-200",
                isScrolled
                  ? "bg-slate-200/20 border-black text-black hover:bg-slate-200/30"
                  : "bg-slate-300/20 border-black text-black hover:bg-slate-300/30"
              )}
            >
              <span className="hidden sm:inline">List Your Property</span>
              <span className="sm:hidden">List</span>
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <div
            className={cn(
              "lg:hidden cursor-pointer transition-colors duration-200 p-1",
              isScrolled ? "text-black" : "text-black"
            )}
            onClick={() => setIsOverlayOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        data-mobile-overlay
        className={`fixed top-0 bottom-0 right-0 w-full sm:w-80 bg-white text-gray-900 z-[100] transform transition-transform duration-300 ease-in-out ${
          isOverlayOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
          onClick={() => setIsOverlayOpen(false)}
            className="text-gray-500 hover:text-gray-700 p-1"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-col p-6 space-y-4">
          {navLinks.map((link, i) => {
            if (link.href === "/service") {
              return (
                <div key={i} className="space-y-2">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={cn(
                      "flex items-center justify-between w-full text-left text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2",
                      pathname === link.href && "text-gray-900 font-medium"
                    )}
                  >
                    <span>{link.label}</span>
                    <ChevronDown className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      isServicesOpen && "rotate-180"
                    )} />
                  </button>
                  
                  {/* Services Dropdown */}
                  <div className={cn(
                    "overflow-hidden transition-all duration-300",
                    isServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}>
                    <div className="pl-4 space-y-2 border-l-2 border-gray-200">
                      {services.map((service, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          href={
                            service.name === "List Your Property" ? "/list-your-property" :
                            service.name === "Property Management" ? "/property-management" :
                            "/service"
                          }
                          onClick={() => setIsOverlayOpen(false)}
                          className="flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer group"
                        >
                          <div className="flex-shrink-0 transition-colors duration-200 group-hover:text-blue-600">
                            {service.icon}
                          </div>
                          <span className="text-blue-900 font-medium text-sm group-hover:text-blue-700 transition-colors duration-200">
                            {service.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            
            return (
            <Link
              key={i}
              href={link.href}
              className={cn(
                  "text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2",
                  pathname === link.href && "text-gray-900 font-medium"
              )}
                onClick={() => setIsOverlayOpen(false)}
            >
              {link.label}
            </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-gray-200 space-y-4">
          {/* Mobile Currency Selector */}
          <div className="flex items-center space-x-2">
            <Globe className="h-4 w-4 text-gray-500" />
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700">
                <span className="text-sm font-medium">USD</span>
                <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>USD</DropdownMenuItem>
                <DropdownMenuItem>AED</DropdownMenuItem>
                <DropdownMenuItem>EUR</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Buttons */}
          <div className="space-y-3">
            <Link href="/login" onClick={() => setIsOverlayOpen(false)}>
              <Button
                variant="outline"
                className="w-full flex items-center justify-center space-x-2"
              >
                <User className="h-4 w-4" />
                <span>Login</span>
              </Button>
            </Link>
            <Link href="/list-your-property" onClick={() => setIsOverlayOpen(false)}>
              <Button className="w-full bg-slate-600 hover:bg-slate-700">
                List Your Property
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
