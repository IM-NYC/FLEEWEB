import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  { name: 'Sarah Mitchell', role: 'CEO, BrightPath Inc.', text: 'FleeWeb completely transformed our online presence. The speed and quality of their work is unmatched.' },
  { name: 'James Rodriguez', role: 'Founder, UrbanEats', text: 'Professional, fast, and incredibly talented. Our e-commerce site loads in under 2 seconds now.' },
  { name: 'Emily Chen', role: 'Marketing Director, Pulse Media', text: 'The team delivered a stunning website on time and under budget. Highly recommend their services.' },
  { name: 'David Thompson', role: 'CTO, NexGen Solutions', text: 'Their full-stack expertise is the real deal. Security, performance, design — they nail everything.' },
  { name: 'Lauren Kim', role: 'Owner, Bloom Studio', text: 'From concept to launch in 3 weeks. FleeWeb made it effortless and the result is beautiful.' },
  { name: 'Michael Patel', role: 'VP Engineering, DataVault', text: 'We needed enterprise-grade security and performance. FleeWeb exceeded every expectation we had.' },
  { name: 'Rachel Foster', role: 'Founder, ClearView Analytics', text: 'The best investment we made this year. Our conversion rates doubled after the redesign.' },
  { name: 'Nathan Brooks', role: 'Director, Summit Financial', text: 'Responsive, reliable, and ridiculously good at what they do. A+ team all around.' },
];

function ReviewCard({ review }) {
  return (
    <div className="flex-shrink-0 w-[340px] mx-3 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-slate-300 text-sm leading-relaxed mb-5">"{review.text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-xs font-bold">
          {review.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <div className="text-white text-sm font-medium">{review.name}</div>
          <div className="text-slate-500 text-xs">{review.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function ReviewsCarousel() {
  const doubledReviews = [...reviews, ...reviews];

  return (
    <section className="py-24 bg-[#0a0a0f] overflow-hidden">
      <div className="text-center mb-14 px-6">
        <span className="text-xs font-medium tracking-widest uppercase text-indigo-400">Testimonials</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Trusted by Industry Leaders</h2>
        <p className="text-slate-500 mt-3 max-w-lg mx-auto">
          Don't just take our word for it — hear from the businesses we've helped grow.
        </p>
      </div>

      {/* Row 1 - scrolls left */}
      <div className="relative mb-4">
        <div className="flex animate-scroll-left">
          {doubledReviews.map((review, i) => (
            <ReviewCard key={`r1-${i}`} review={review} />
          ))}
        </div>
      </div>

      {/* Row 2 - scrolls right */}
      <div className="relative">
        <div className="flex animate-scroll-right">
          {[...doubledReviews].reverse().map((review, i) => (
            <ReviewCard key={`r2-${i}`} review={review} />
          ))}
        </div>
      </div>

      {/* Edge fades */}
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scrollLeft 60s linear infinite;
        }
        .animate-scroll-right {
          animation: scrollRight 60s linear infinite;
        }
      `}</style>
    </section>
  );
}