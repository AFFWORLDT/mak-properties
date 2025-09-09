"use client";

import React from 'react';
import HeroSection from '@/src/view/property-management/HeroSection';
import MainContent from '@/src/view/property-management/MainContent';
import ServicesGrid from '@/src/view/property-management/ServicesGrid';
import WhyUsSection from '@/src/view/property-management/WhyUsSection';
import FAQTestimonials from '@/src/view/property-management/FAQTestimonials';
import ContactForm from '@/src/view/list-property/ContactForm';
import ClientTestimonials from '@/src/view/list-property/ClientTestimonials';
import NewsletterSection from '@/src/view/list-property/NewsletterSection';

export default function PropertyManagementPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <MainContent />
      <ServicesGrid />
      <WhyUsSection />
      <FAQTestimonials />
      <ClientTestimonials />
      <ContactForm />
      <NewsletterSection />
    </div>
  );
}
