"use client";

import React from 'react';
import HeroSection from '@/src/view/short-term-rental/HeroSection';
import ForGuestsSection from '@/src/view/short-term-rental/ForGuestsSection';
import BenefitsSection from '@/src/view/short-term-rental/BenefitsSection';
import ForOwnersSection from '@/src/view/short-term-rental/ForOwnersSection';
import ProcessSection from '@/src/view/short-term-rental/ProcessSection';
import ServicesSection from '@/src/view/short-term-rental/ServicesSection';
import JourneySection from '@/src/view/short-term-rental/JourneySection';
import FAQSection from '@/src/view/short-term-rental/FAQSection';
import ClientTestimonials from '@/src/view/short-term-rental/ClientTestimonials';
import NewsletterSection from '@/src/view/list-property/NewsletterSection';
import ContactForm from '@/src/view/list-property/ContactForm';

export default function ShortTermRentalPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ForGuestsSection />
      <BenefitsSection />
      <ForOwnersSection />
      {/* <ProcessSection /> */}
      <ServicesSection />
      <JourneySection />
      <FAQSection />
      <ClientTestimonials />
      <ContactForm />
      <NewsletterSection />
    </div>
  );
}
