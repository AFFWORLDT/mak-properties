"use client";

import React from 'react';
import HeroSection from '@/src/view/conveyancing/HeroSection';
import AboutSection from '@/src/view/conveyancing/AboutSection';
import QuoteSection from '@/src/view/conveyancing/QuoteSection';
import PrismAdvantage from '@/src/view/conveyancing/PrismAdvantage';
import NewsletterSection from '@/src/view/list-property/NewsletterSection';
import ClientTestimonials from '@/src/view/list-property/ClientTestimonials';
import FAQSection from '@/src/view/conveyancing/FAQSection';
import ContactForm from '@/src/view/conveyancing/ContactForm';

export default function ConveyancingPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <AboutSection />
      <QuoteSection />
      <PrismAdvantage />
      <ClientTestimonials />
      <FAQSection />
      <ContactForm />
      <NewsletterSection />
    </div>
  );
}
