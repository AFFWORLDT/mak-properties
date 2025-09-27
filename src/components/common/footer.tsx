import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { Phone, Mail, Instagram } from "lucide-react";

const sitemapLinks = [
  { href: "/buy", label: "Buy" },
  { href: "/offPlans", label: "Off-Plan" },
  { href: "/rent", label: "Rent" },
  { href: "/communities", label: "Communities" },
  { href: "/whyDubai", label: "Why Dubai" },
  { href: "/service", label: "Services" },
  { href: "/contactUs", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-12 md:py-16 px-4 md:px-6 overflow-hidden">
      {/* Luxury Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#dbbb90]/5 via-transparent to-[#dbbb90]/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      
      {/* Floating Luxury Particles - Client Side Only */}
      {typeof window !== 'undefined' && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#dbbb90]/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Newsletter Section */}
        <div className="md:col-span-2 relative z-10">
          <div className="relative backdrop-blur-[20px] bg-gradient-to-br from-white/10 via-white/5 to-white/10 p-6 md:p-8 rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
            {/* Inner Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#dbbb90]/10 via-transparent to-[#dbbb90]/10 rounded-2xl" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-light tracking-wide leading-relaxed w-full md:flex-none md:w-[45%] text-white font-serif">
                Receive our exceptional real estate listings delivered straight to
                your inbox.
              </h3>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full md:flex-1">
                <label htmlFor="email-subscribe" className="sr-only">
                  Email address for newsletter subscription
                </label>
                <Input
                  id="email-subscribe"
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-grow bg-white/10 text-white border-white/30 placeholder:text-white/70 focus-visible:ring-offset-0 focus-visible:ring-[#dbbb90] focus:border-[#dbbb90] rounded-xl md:w-1/2 w-full h-14 backdrop-blur-sm text-lg px-4"
                />
                <Button className="bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] hover:from-[#C2A17B] hover:to-[#B8956A] text-white font-semibold tracking-wider py-4 px-8 transition-all duration-300 uppercase h-14 rounded-xl md:w-1/3 w-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 font-serif text-lg">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Sitemap */}
        <div className="relative z-10">
          <div className="relative backdrop-blur-[10px] bg-white/5 p-6 rounded-xl border border-white/10 shadow-xl">
            <h4 className="text-xl md:text-2xl mb-6 font-serif text-[#dbbb90] font-light">Sitemap</h4>
            <ul className="space-y-3 text-base font-serif">
              {sitemapLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="relative inline-block hover:text-[#dbbb90] transition-all duration-300 text-white/90 hover:text-white
                               after:content-[''] after:absolute after:left-0 after:bottom-0
                               after:h-[2px] after:w-0 after:bg-[#dbbb90]
                               after:transition-all after:duration-300 hover:after:w-full font-serif
                               hover:transform hover:translate-x-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="relative z-10 font-serif">
          <div className="relative backdrop-blur-[10px] bg-white/5 p-6 rounded-xl border border-white/10 shadow-xl">
            <h4 className="text-xl md:text-2xl mb-6 font-serif text-[#dbbb90] font-light">Contact</h4>
            <address className="not-italic space-y-4 text-base font-serif leading-relaxed">
              <p className="text-white/90">123, Victory Heights, Dubai Sports City</p>
              <p className="text-white/90">Dubai, UAE</p>
              <p className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#dbbb90] flex-shrink-0" />
                <a
                  href="tel:+971508050394"
                  className="relative inline-block hover:text-[#dbbb90] transition-all duration-300 text-white/90 hover:text-white
                             after:content-[''] after:absolute after:left-0 after:bottom-0
                             after:h-[2px] after:w-0 after:bg-[#dbbb90]
                             after:transition-all after:duration-300 hover:after:w-full font-serif
                             hover:transform hover:translate-x-1"
                >
                  +971 50 805 0394
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#dbbb90] flex-shrink-0" />
                <a
                  href="mailto:info@makproperties.ae"
                  className="relative inline-block hover:text-[#dbbb90] transition-all duration-300 text-white/90 hover:text-white
                             after:content-[''] after:absolute after:left-0 after:bottom-0
                             after:h-[2px] after:w-0 after:bg-[#dbbb90]
                             after:transition-all after:duration-300 hover:after:w-full font-serif
                             hover:transform hover:translate-x-1"
                >
                  info@makproperties.ae
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-[#dbbb90] flex-shrink-0" />
                <a
                  href="https://www.instagram.com/makproperties.ae/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block hover:text-[#dbbb90] transition-all duration-300 text-white/90 hover:text-white
                             after:content-[''] after:absolute after:left-0 after:bottom-0
                             after:h-[2px] after:w-0 after:bg-[#dbbb90]
                             after:transition-all after:duration-300 hover:after:w-full font-serif
                             hover:transform hover:translate-x-1"
                >
                  @makproperties.ae
                </a>
              </p>
            </address>
          </div>
        </div>

      </div>

      {/* Legal Links */}
      <div className="container mx-auto border-t border-white/20 mt-12 pt-8 relative z-10">
        <div className="flex flex-wrap justify-center gap-8 text-base text-white/80 mb-6">
          <a href="/privacy-policy" className="hover:text-[#dbbb90] transition-all duration-300 font-serif hover:transform hover:translate-y-[-2px]">
            Privacy Policy
          </a>
          <a href="/terms-conditions" className="hover:text-[#dbbb90] transition-all duration-300 font-serif hover:transform hover:translate-y-[-2px]">
            Terms & Conditions
          </a>
          <a href="/cookie-policy" className="hover:text-[#dbbb90] transition-all duration-300 font-serif hover:transform hover:translate-y-[-2px]">
            Cookie Policy
          </a>
          <a href="/disclaimer" className="hover:text-[#dbbb90] transition-all duration-300 font-serif hover:transform hover:translate-y-[-2px]">
            Disclaimer
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container mx-auto border-t border-white/20 pt-6 flex flex-col md:flex-row items-center justify-between text-base text-white/80 relative z-10">
        <p className="font-serif text-lg">
          &copy; {"2025 MAK Properties. All Rights Reserved."}
        </p>
        <div className="mt-4 md:mt-0">
          <p className="text-white/60 font-serif text-sm">
            Crafted with luxury in mind
          </p>
        </div>
      </div>
    </footer>
  );
}
