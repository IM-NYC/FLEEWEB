import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '@/components/fleeweb/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+1 (718) 710-8933', href: 'tel:+17187108933' },
  { icon: Phone, label: 'Phone', value: '+1 (929) 767-2727', href: 'tel:+19297672727' },
  { icon: Mail, label: 'Email', value: 'info@fleeweb.com', href: 'mailto:info@fleeweb.com' },
  { icon: MapPin, label: 'Location', value: 'New York, USA', href: null },
  { icon: Clock, label: 'Hours', value: 'Mon – Fri, 9AM – 6PM EST', href: null },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Header */}
      <div className="pt-32 pb-16 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-indigo-400">Get In Touch</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-3">
            Let's Build Together
          </h1>
          <p className="text-slate-500 mt-4 max-w-lg mx-auto">
            Ready to start your project? Reach out and we'll respond within 24 hours.
          </p>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {contactInfo.map((item, i) => {
              const Wrapper = item.href ? 'a' : 'div';
              return (
                <Wrapper
                  key={i}
                  {...(item.href ? { href: item.href } : {})}
                  className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300 block"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">{item.label}</div>
                    <div className="text-white text-sm font-medium">{item.value}</div>
                  </div>
                </Wrapper>
              );
            })}
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold text-lg mb-6">Send Us a Message</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
}