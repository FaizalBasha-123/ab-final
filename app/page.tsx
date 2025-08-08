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
      <Header />
      <HeroSection />
      <ServicesSection />
      <WorksSection />
      <TestimonialSection />
      <NewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}