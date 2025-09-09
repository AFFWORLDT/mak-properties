"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Heart,
  MessageCircle,
  Phone,
  Menu,
  X,
  Facebook,
  Instagram,
  Linkedin,
  Globe,
  ChevronDown,
  User,
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

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
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
    { href: "/team", label: "Developers" },
    { href: "/communities", label: "Areas" },
    { href: "/service", label: "Services" },
    { href: "/blog", label: "Blogs" },
    { href: "/contactUs", label: "More" },
  ];
  const headerLink = [
    { href: "/buy", label: "Buy" },
    { href: "/rent", label: "Rent" },
    { href: "/offPlans", label: "Projects" },
    { href: "/team", label: "Developers" },
    { href: "/communities", label: "Areas" },
    { href: "/service", label: "Services" },
    { href: "/blog", label: "Blogs" },
    { href: "/contactUs", label: "More" },
  ];
  useEffect(() => {
    if (!isOverlayOpen) return;

    const handleClickOutside = () => {
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
          "container mx-auto flex items-center justify-between px-4 md:px-6",
          isScrolled ? "h-24" : "h-28"
        )}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link href={"/"}>
            <Image
              src="/images/logo.png"
              alt="EVIDPROPERTIES Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {headerLink.map((link, i) => (
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
          ))}
        </div>

        {/* Right Side - Currency, Login, Signup */}
        <div className="flex items-center space-x-4">
          {/* Currency Selector */}
          <div className="hidden md:flex items-center space-x-2">
            <div
              className={`w-px h-6 ${
                isScrolled ? "bg-black/30" : "bg-white/30"
              }`}
            ></div>
            <DropdownMenu>
              <DropdownMenuTrigger
                className={cn(
                  "flex items-center space-x-1 transition-colors",
                  isScrolled
                    ? "text-black hover:text-black/80"
                    : "text-white hover:text-white/80"
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

          {/* Login Button */}
          <Button
            variant="outline"
            className={cn(
              "hidden sm:flex items-center space-x-2 bg-transparent h-9 px-4 transition-all duration-200",
              isScrolled
                ? "border-black text-black hover:bg-black/10"
                : "border-white text-white hover:bg-white/10"
            )}
          >
            <User className="h-4 w-4" />
            <span className="text-sm">Login</span>
          </Button>

          {/* List Your Property Button */}
          <Button
            className={cn(
              "border h-9 px-4 text-sm transition-all duration-200",
              isScrolled
                ? "bg-slate-200/20 border-black text-black hover:bg-slate-200/30"
                : "bg-slate-300/20 border-white text-white hover:bg-slate-300/30"
            )}
          >
            List Your Property
          </Button>

          {/* Mobile Menu Button */}
          <div
            className={cn(
              "lg:hidden cursor-pointer transition-colors duration-200",
              isScrolled ? "text-black" : "text-white"
            )}
            onClick={() => setIsOverlayOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed top-0 bottom-0 right-0 w-full md:w-1/3 bg-white text-gray-900 z-[100] transform transition-transform duration-300 ease-in-out ${
          isOverlayOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={() => setIsOverlayOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col p-6 space-y-4">
          {navLinks.map((link, i) => (
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
          ))}
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
            <Button
              variant="outline"
              className="w-full flex items-center justify-center space-x-2"
            >
              <User className="h-4 w-4" />
              <span>Login</span>
            </Button>
            <Button className="w-full bg-slate-600 hover:bg-slate-700">
              List Your Property
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-start space-x-4 pt-4">
            <Link
              href="https://www.facebook.com/profile.php?id=61555781408625"
              target="_blank"
              aria-label="Facebook"
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100"
            >
              <Facebook className="h-4 w-4" />
            </Link>
            <Link
              href="https://www.instagram.com/jnapropertiesofficial/"
              target="_blank"
              aria-label="Instagram"
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100"
            >
              <Instagram className="h-4 w-4" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/j-a-properties/"
              target="_blank"
              aria-label="LinkedIn"
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
