import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";

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
    <footer className="bg-black text-white py-6 md:py-8 px-4 md:px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Newsletter Section */}
        <div className="md:col-span-2 flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 w-full bg-gray-900/50 p-3 md:p-4 rounded-lg md:rounded-xl border border-gray-700/50">
          <h3 className="text-lg md:text-xl font-light tracking-wide leading-relaxed w-full md:flex-none md:w-[40%] text-white font-serif">
            Receive our exceptional real estate listings delivered straight to
            your inbox.
          </h3>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full md:flex-1">
            <label htmlFor="email-subscribe" className="sr-only">
              Email address for newsletter subscription
            </label>
            <Input
              id="email-subscribe"
              type="email"
              placeholder="Enter your email address"
              className="flex-grow bg-gray-800/50 text-white border-gray-600/50 placeholder:text-white/60 focus-visible:ring-offset-0 focus-visible:ring-gray-500 focus:border-gray-500 rounded-lg md:w-1/2 w-full h-12 backdrop-blur-sm"
            />
            <Button className="bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] hover:from-[#C2A17B] hover:to-[#B8956A] text-white font-medium tracking-wider py-3 px-6 transition-all duration-300 uppercase h-12 rounded-lg md:w-1/3 w-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-serif">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Sitemap */}
        <div>
          <h4 className="text-lg  mb-4 font-serif">Sitemap</h4>
          <ul className="space-y-2 text-sm font-serif">
            {sitemapLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="relative inline-block hover:text-gray-300 transition-colors
                             after:content-[''] after:absolute after:left-0 after:bottom-0
                             after:h-[2px] after:w-0 after:bg-[#dbbb90]
                             after:transition-all after:duration-300 hover:after:w-full font-serif"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="font-serif">
          <h4 className="text-lg  mb-4 font-serif">Contact</h4>
          <address className="not-italic space-y-2 text-sm font-serif leading-relaxed">
            <p>123, Victory Heights, Dubai Sports City</p>
            <p>Dubai, UAE</p>
            <p>
              <span className="font-serif">P</span>{" "}
              <a
                href="tel:+971508050394"
                className="relative inline-block hover:text-gray-300 transition-colors
                           after:content-[''] after:absolute after:left-0 after:bottom-0
                           after:h-[2px] after:w-0 after:bg-[#dbbb90]
                           after:transition-all after:duration-300 hover:after:w-full font-serif"
              >
                +971 50 805 0394
              </a>
            </p>
            <p>
              <span className="font-sans">E</span>{" "}
              <a
                href="mailto:info@makproperties.ae"
                className="relative inline-block hover:text-gray-300 transition-colors
                           after:content-[''] after:absolute after:left-0 after:bottom-0
                           after:h-[2px] after:w-0 after:bg-[#dbbb90]
                           after:transition-all after:duration-300 hover:after:w-full font-serif"
              >
                info@makproperties.ae
              </a>
            </p>
          </address>
        </div>

      </div>

      {/* Legal Links */}
      <div className="container mx-auto border-t border-white/20 mt-8 pt-8">
        <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70 mb-4">
          <a href="/privacy-policy" className="hover:text-white transition-colors font-serif">
            Privacy Policy
          </a>
          <a href="/terms-conditions" className="hover:text-white transition-colors font-serif">
            Terms & Conditions
          </a>
          <a href="/cookie-policy" className="hover:text-white transition-colors font-serif">
            Cookie Policy
          </a>
          <a href="/disclaimer" className="hover:text-white transition-colors font-serif">
            Disclaimer
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container mx-auto border-t border-white/20 pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-white/70">
        <p className="font-serif">
          &copy; {"2025 MAK Properties. All Rights Reserved."}
        </p>
      </div>
    </footer>
  );
}
