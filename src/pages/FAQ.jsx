import React from 'react';
import { motion } from 'framer-motion';
import FAQAccordion from '@/components/fleeweb/FAQAccordion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight } from 'lucide-react';

export default function FAQ() {
  return (
    <div className="min-h-screen" style={{ background: '#F5F0EA' }}>
      {/* Header */}
      <div className="pt-32 pb-16 text-center px-6" style={{ background: '#EAE0D5' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#5E503F' }}>Support</span>
          <h1 className="text-3xl md:text-5xl font-bold mt-3" style={{ color: '#0A0908' }}>
            Frequently Asked Questions
          </h1>
          <p className="mt-4 max-w-lg mx-auto text-sm" style={{ color: '#22333B' }}>
            Everything you need to know before starting your project with FleeWeb.
          </p>
        </motion.div>
      </div>

      {/* FAQ Content */}
      <div className="py-16 px-6">
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
        <p className="mb-4" style={{ color: '#22333B' }}>Still have questions?</p>
        <Link
          to={createPageUrl('Contact')}
          className="inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-md"
          style={{ background: '#22333B', color: '#EAE0D5' }}
        >
          Get In Touch
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}