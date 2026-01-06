'use client';

import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import WorksSection from '../components/WorksSection';
import NewsSection from '../components/NewsSection';
import TestimonialSection from '../components/TestimonialSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="w-full">
      </div>
      <div data-intro className="w-full animate-fade-in-up delay-100">
        <HeroSection />
      </div>
      <div data-intro className="w-full animate-fade-in-up delay-200">
        <ServicesSection />
      </div>
      <div data-intro className="w-full animate-fade-in-up delay-300">
        <WorksSection />
      </div>
      <div data-intro className="w-full animate-fade-in-up delay-200">
        <TestimonialSection />
      </div>
      <div data-intro className="w-full animate-fade-in-up delay-800">
        <NewsSection />
      </div>
      <div data-intro className="w-full animate-fade-in-up delay-300">
        <ContactSection />
      </div>
      <div data-intro className="w-full">
        <Footer />
      </div>
    </div>
  );
}
