import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-28 relative overflow-hidden" style={{ background: '#22333B' }}>
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #EAE0D5 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[400px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(ellipse, #C6AC8F, transparent)' }} />
      </div>

      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold leading-tight" style={{ color: '#EAE0D5' }}>
          Ready to Build Something{' '}
          <span style={{ color: '#C6AC8F' }}>Extraordinary?</span>
        </h2>
        <p className="mt-5 text-lg max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(234,224,213,0.7)' }}>
          Let's discuss your project. Our team is ready to turn your vision into a high-performance digital reality.
        </p>
        <Link
          to={createPageUrl('Contact')}
          className="group inline-flex items-center gap-3 mt-10 px-10 py-4 text-sm font-bold rounded-xl transition-all duration-300 hover:scale-105"
          style={{ background: '#C6AC8F', color: '#0A0908' }}
        >
          Start Your Project
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </section>
  );
}