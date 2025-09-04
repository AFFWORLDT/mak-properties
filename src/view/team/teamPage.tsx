"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import { getAllAgents, Agent } from "@/src/api/agents";

export default function TeamPage() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

  // Utility function to parse nationality
  const parseNationality = (nationality: string) => {
    try {
      if (typeof nationality === 'string' && nationality.startsWith('{')) {
        const parsed = JSON.parse(nationality);
        return parsed.label || nationality;
      }
      return nationality;
    } catch (error) {
      return nationality;
    }
  };

  useEffect(() => {
    async function fetchAgents() {
      try {
        const response = await getAllAgents();
        setAgents(response || []);
      } catch (error) {
        console.error('Error fetching agents:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchAgents();
  }, []);


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F8F6F0] via-white to-[#F2EEE8] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#dbbb90] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-light">Loading our luxury team...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen luxury-bg">
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-24 lg:pb-32 px-4 md:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8F6F0] via-white to-[#F2EEE8]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/3 via-transparent to-black/3"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#dbbb90]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#dbbb90]/8 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-12 md:mb-20"
          >
            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-gray-800 mb-6 md:mb-8 leading-[0.9] tracking-tight font-serif"
            >
              Our <span className="text-[#dbbb90] font-normal relative">
                Luxury
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] rounded-full"
                />
              </span> Team
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 font-light max-w-5xl mx-auto leading-relaxed px-4 font-serif"
            >
              Meet the exceptional professionals who make luxury real estate dreams come true in Dubai
            </motion.p>
            
            {/* Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#dbbb90] to-transparent mx-auto mt-8 md:mt-12"
            />
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-12 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 mb-4">
              Meet Our <span className="text-[#dbbb90] font-normal">Experts</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Dedicated professionals committed to delivering exceptional real estate experiences
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10"
          >
            <AnimatePresence>
              {agents.map((agent) => (
                <motion.div
                  key={agent.id}
                  variants={cardVariants}
                  layout
                  className="group cursor-pointer"
                  onClick={() => setSelectedAgent(agent)}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-5 md:p-7 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/60 hover:border-[#dbbb90]/30 group">
                    {/* Agent Avatar */}
                    <div className="relative mb-4 md:mb-6">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-auto rounded-full overflow-hidden border-3 md:border-4 border-[#dbbb90] shadow-lg group-hover:shadow-xl group-hover:border-[#C2A17B] transition-all duration-300 relative">
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#dbbb90]/20 to-[#C2A17B]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                        {agent.avatar ? (
                          <Image
                            src={agent.avatar}
                            alt={agent.name}
                            width={128}
                            height={128}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 relative z-0"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-[#dbbb90] to-[#C2A17B] flex items-center justify-center relative z-0">
                            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                              {agent.name?.charAt(0) || 'A'}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 w-6 h-6 md:w-8 md:h-8 bg-green-500 rounded-full border-2 md:border-4 border-white flex items-center justify-center">
                        <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full"></div>
                      </div>
                    </div>

                    {/* Agent Info */}
                    <div className="text-center mb-4 md:mb-6">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 leading-tight">
                        {agent.name}
                      </h3>
                      {agent.team_name && agent.team_name !== 'No team assigned' && (
                        <p className="text-[#dbbb90] font-medium text-xs sm:text-sm uppercase tracking-wider mb-2 md:mb-3">
                          {agent.team_name}
                        </p>
                      )}
                      {agent.experience_years && (
                        <p className="text-gray-600 text-xs sm:text-sm">
                          {agent.experience_years} Years Experience
                        </p>
                      )}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-2 md:gap-4 mb-4 md:mb-6">
                      {agent.experience_years && (
                        <div className="text-center">
                          <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#dbbb90]">
                            {agent.experience_years}+
                          </div>
                          <div className="text-xs text-gray-600 uppercase tracking-wider">
                            Years Exp
                          </div>
                        </div>
                      )}
                      {agent.specialities && agent.specialities.length > 0 && (
                        <div className="text-center">
                          <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#dbbb90]">
                            {agent.specialities.length}
                          </div>
                          <div className="text-xs text-gray-600 uppercase tracking-wider">
                            Specialties
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Contact Buttons */}
                    <div className="flex justify-center gap-3 md:gap-4">
                      <a
                        href={`https://wa.me/${agent.phone?.replace(/[^0-9]/g, '')}?text=Hi ${agent.name}, I'm interested in luxury properties in Dubai`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Icon icon="iconoir:whatsapp-solid" className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </a>
                      <a
                        href={`tel:${agent.phone}`}
                        className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-gradient-to-br from-[#dbbb90] to-[#C2A17B] hover:from-[#C2A17B] hover:to-[#B8956A] rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Icon icon="line-md:phone-call-filled" className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </a>
                      <a
                        href={`mailto:${agent.email}?subject=Luxury Property Inquiry`}
                        className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Icon icon="material-symbols:mail-outline" className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-[#F8F6F0] to-[#F2EEE8]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 mb-6">
              Ready to Start Your <span className="text-[#dbbb90] font-normal">Luxury Journey</span>?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Connect with our expert team and discover the perfect property that matches your dreams
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contactUs"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#dbbb90] hover:bg-[#C2A17B] text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get In Touch
              </a>
              <a
                href="/buy"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#dbbb90] text-[#dbbb90] hover:bg-[#dbbb90] hover:text-white font-medium rounded-full transition-all duration-300"
              >
                Browse Properties
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agent Detail Modal */}
      <AnimatePresence>
        {selectedAgent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedAgent(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4 md:mb-6">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-3 md:border-4 border-[#dbbb90]">
                    {selectedAgent.avatar ? (
                      <Image
                        src={selectedAgent.avatar}
                        alt={selectedAgent.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#dbbb90] to-[#C2A17B] flex items-center justify-center">
                        <span className="text-xl md:text-2xl font-bold text-white">
                          {selectedAgent.name?.charAt(0) || 'A'}
                        </span>
                      </div>
                    )}
                  </div>
                  <div>
                    <h2 className="text-lg md:text-2xl font-semibold text-gray-800 leading-tight">
                      {selectedAgent.name}
                    </h2>
                    {selectedAgent.team_name && selectedAgent.team_name !== 'No team assigned' && (
                      <p className="text-[#dbbb90] font-medium text-sm md:text-base uppercase tracking-wider">
                        {selectedAgent.team_name}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedAgent(null)}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <Icon icon="material-symbols:close" className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {selectedAgent.remarks && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">About</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedAgent.remarks}</p>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                {selectedAgent.experience_years && (
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">Experience</h4>
                    <p className="text-gray-600 text-sm md:text-base">{selectedAgent.experience_years} Years</p>
                  </div>
                )}
                {selectedAgent.nationality && (
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">Nationality</h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      {parseNationality(selectedAgent.nationality)}
                    </p>
                  </div>
                )}
                {selectedAgent.kyc_verification && (
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">Verification</h4>
                    <p className="text-green-600 text-sm md:text-base">✓ KYC Verified</p>
                  </div>
                )}
              </div>

              {selectedAgent.languages && selectedAgent.languages.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedAgent.languages.map((lang, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#dbbb90]/10 text-[#dbbb90] rounded-full text-sm"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedAgent.specialities && selectedAgent.specialities.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedAgent.specialities.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                <a
                  href={`https://wa.me/${selectedAgent.phone?.replace(/[^0-9]/g, '')}?text=Hi ${selectedAgent.name}, I'm interested in luxury properties in Dubai`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 md:px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm md:text-base"
                >
                  <Icon icon="iconoir:whatsapp-solid" className="w-4 h-4 md:w-5 md:h-5" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`tel:${selectedAgent.phone}`}
                  className="flex items-center justify-center gap-2 bg-[#dbbb90] hover:bg-[#C2A17B] text-white px-4 md:px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm md:text-base"
                >
                  <Icon icon="line-md:phone-call-filled" className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Call</span>
                </a>
                <a
                  href={`mailto:${selectedAgent.email}?subject=Luxury Property Inquiry`}
                  className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-4 md:px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm md:text-base"
                >
                  <Icon icon="material-symbols:mail-outline" className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Email</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
