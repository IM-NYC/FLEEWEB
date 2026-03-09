import React from 'react';
import HeroSection from '@/components/fleeweb/HeroSection';
import ReviewsCarousel from '@/components/fleeweb/ReviewsCarousel';
import ServicesSection from '@/components/fleeweb/ServicesSection';
import CTASection from '@/components/fleeweb/CTASection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ReviewsCarousel />
      <ServicesSection />
      <CTASection />
    </div>
  );
}