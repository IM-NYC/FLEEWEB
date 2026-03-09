import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-28 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[120px]" />
      </div>

      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          Ready to Build Something
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent"> Extraordinary?</span>
        </h2>
        <p className="text-slate-400 mt-5 text-lg max-w-xl mx-auto leading-relaxed">
          Let's discuss your project. Our team is ready to turn your vision into a high-performance digital reality.
        </p>
        <Link
          to={createPageUrl('Contact')}
          className="group inline-flex items-center gap-3 mt-10 px-10 py-4 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]"
        >
          Start Your Project
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </section>
  );
}