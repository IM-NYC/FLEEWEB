import React from 'react';
import { motion } from 'framer-motion';
import FAQAccordion from '@/components/fleeweb/FAQAccordion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight } from 'lucide-react';

export default function FAQ() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Header */}
      <div className="pt-32 pb-16 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-indigo-400">Support</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-3">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-500 mt-4 max-w-lg mx-auto">
            Everything you need to know before starting your project with FleeWeb.
          </p>
        </motion.div>
      </div>

      {/* FAQ Content */}
      <div className="pb-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FAQAccordion />
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <div className="pb-28 text-center px-6">
        <p className="text-slate-400 mb-4">Still have questions?</p>
        <Link
          to={createPageUrl('Contact')}
          className="inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 transition-all duration-300 hover:scale-105"
        >
          Get In Touch
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}