import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-28 relative overflow-hidden" style={{ background: '#0D1B2A' }}>
      <div className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #C0C0C0 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[400px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(ellipse, #1E6FD9, transparent)' }} />
      </div>

      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold leading-tight" style={{ color: '#F4F4F4' }}>
          Ready to Build Something{' '}
          <span style={{ color: '#1E6FD9' }}>Extraordinary?</span>
        </h2>
        <p className="mt-5 text-lg max-w-xl mx-auto leading-relaxed" style={{ color: '#C0C0C0' }}>
          Let's discuss your project. Our team is ready to turn your vision into a high-performance digital reality.
        </p>
        <Link
          to={createPageUrl('Contact')}
          className="group inline-flex items-center gap-3 mt-10 px-10 py-4 text-sm font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
          style={{ background: '#1E6FD9', color: '#F4F4F4' }}
        >
          Start Your Project
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </section>
  );
}