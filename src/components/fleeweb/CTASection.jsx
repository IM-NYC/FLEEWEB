import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function CTASection() {
  return (
    <motion.section
      className="py-20 relative overflow-hidden flex flex-col items-center justify-center text-center px-6"
      style={{ background: '#080C10' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="text-2xl md:text-3xl font-light tracking-widest uppercase" style={{ color: '#555' }}>
          Ready to work together?
        </h2>
        <motion.div
          className="mt-6 flex flex-col items-center gap-3"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6" style={{ color: '#444' }} />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}