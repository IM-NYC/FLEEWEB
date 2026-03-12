import React from 'react';
import HeroSection from '@/components/fleeweb/HeroSection';
import ReviewsCarousel from '@/components/fleeweb/ReviewsCarousel';
import ServicesSection from '@/components/fleeweb/ServicesSection';
import CTASection from '@/components/fleeweb/CTASection';
import ContactSection from '@/components/fleeweb/ContactSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ReviewsCarousel />
      <ServicesSection />
      <CTASection />
      <ContactSection />
    </div>
  );
}