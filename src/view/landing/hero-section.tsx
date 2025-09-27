import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

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





    </section>
  );
}
