import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  { name: 'Sarah Mitchell', role: 'CEO, BrightPath Inc.', text: 'FleeWeb completely transformed our online presence. The speed and quality of their work is unmatched.' },
  { name: 'James Rodriguez', role: 'Founder, UrbanEats', text: 'Professional, fast, and incredibly talented. Our e-commerce site loads in under 2 seconds now.' },
  { name: 'Emily Chen', role: 'Marketing Director, Pulse Media', text: 'The team delivered a stunning website on time and under budget. Highly recommend their services.' },
  { name: 'David Thompson', role: 'CTO, NexGen Solutions', text: 'Their full-stack expertise is the real deal. Security, performance, design — they nail everything.' },
  { name: 'Lauren Kim', role: 'Owner, Bloom Studio', text: 'From concept to launch in 3 days. FleeWeb made it effortless and the result is beautiful.' },
  { name: 'Michael Patel', role: 'VP Engineering, DataVault', text: 'We needed enterprise-grade security and performance. FleeWeb exceeded every expectation we had.' },
  { name: 'Rachel Foster', role: 'Founder, ClearView Analytics', text: 'The best investment we made this year. Our conversion rates doubled after the redesign.' },
  { name: 'Nathan Brooks', role: 'Director, Summit Financial', text: 'Responsive, reliable, and ridiculously good at what they do. A+ team all around.' },
];

function ReviewCard({ review }) {
  return (
    <div className="flex-shrink-0 w-[320px] mx-3 p-6 rounded-2xl"
      style={{ background: '#0E1218', border: '1px solid rgba(192,192,192,0.07)', boxShadow: '0 2px 20px rgba(0,0,0,0.4)' }}>
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5" style={{ fill: '#C0C0C0', color: '#C0C0C0' }} />
        ))}
      </div>
      <p className="text-sm leading-relaxed mb-5" style={{ color: '#777' }}>"{review.text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
          style={{ background: 'rgba(192,192,192,0.08)', color: '#C0C0C0', border: '1px solid rgba(192,192,192,0.15)' }}>
          {review.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <div className="text-sm font-semibold" style={{ color: '#E8E8E8' }}>{review.name}</div>
          <div className="text-xs" style={{ color: '#444' }}>{review.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function ReviewsCarousel() {
  const sectionRef = useRef(null);
  const doubled = [...reviews, ...reviews];

  // Heading slides in from the right as you scroll down to this section
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'center center'] });
  const headingX = useTransform(scrollYProgress, [0, 1], ['60px', '0px']);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <section ref={sectionRef} className="py-28 overflow-hidden" style={{ background: '#080C10' }}>
      {/* Heading — right-anchored, slides in from right */}
      <motion.div
        className="text-right mb-14 px-6 max-w-6xl mx-auto"
        style={{ x: headingX, opacity: headingOpacity }}
      >
        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#444' }}>Testimonials</span>
        <h2 className="text-4xl md:text-6xl font-bold mt-2" style={{ color: '#E8E8E8' }}>
          Trusted by<br /><span style={{ color: '#C0C0C0', fontWeight: 300 }}>Industry Leaders</span>
        </h2>
      </motion.div>

      <div className="mb-4">
        <div className="flex animate-scroll-left">
          {doubled.map((review, i) => <ReviewCard key={`r1-${i}`} review={review} />)}
        </div>
      </div>
      <div>
        <div className="flex animate-scroll-right">
          {[...doubled].reverse().map((review, i) => <ReviewCard key={`r2-${i}`} review={review} />)}
        </div>
      </div>

      <style>{`
        @keyframes scrollLeft { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scrollRight { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .animate-scroll-left { animation: scrollLeft 60s linear infinite; }
        .animate-scroll-right { animation: scrollRight 60s linear infinite; }
      `}</style>
    </section>
  );
}