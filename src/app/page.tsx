"use client";
import Header from "@/src/components/common/header";
import HeroSection from "@/src/view/landing/hero-section";
import Footer from "@/src/components/common/footer";
import Feature from "@/src/view/landing/feature";
import Communities from "@/src/view/landing/Communities";
import Property from "@/src/view/landing/property";
import { InsightsInspiration } from "@/src/view/landing/blog";
import { CallToAction } from "@/src/view/landing/call-to-action";
import PartnersSection from "../view/landing/PartnersSection";
import Solutions from "../view/landing/solutions";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fff]">
      <HeroSection />
      <PartnersSection />
      <Solutions/>
      <Feature />
      <Communities />
      <Property />
      <InsightsInspiration />
      <CallToAction />
    </main>
  );
}
