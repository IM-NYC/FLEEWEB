import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '@/components/fleeweb/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Triskele from '@/components/fleeweb/Triskele';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+1 (718) 710-8933', href: 'tel:+17187108933' },
  { icon: Phone, label: 'Phone', value: '+1 (929) 767-2727', href: 'tel:+19297672727' },
  { icon: Mail, label: 'Email', value: 'sales@fleeweb.com', href: 'mailto:sales@fleeweb.com' },
  { icon: MapPin, label: 'Location', value: 'New York, USA', href: null },
  { icon: Clock, label: 'Hours', value: 'Sat – Sun, 10AM – 7PM EST', href: null },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden" style={{ background: '#0A0E14' }}>
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #C0C0C0 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
      />

      {/* Cinematic top divider */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(192,192,192,0.2), transparent)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex justify-center mb-6">
            <Triskele size={40} color="rgba(192,192,192,0.4)" />
          </div>
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#555' }}>Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3" style={{ color: '#E8E8E8' }}>
            Let's Build Together
          </h2>
          <p className="mt-4 max-w-lg mx-auto text-sm" style={{ color: '#666' }}>
            Ready to start your project? Reach out and we'll respond within 24 hours.
          </p>
          <div className="mt-5 w-12 h-px mx-auto" style={{ background: 'rgba(192,192,192,0.3)' }} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div
            className="lg:col-span-2 space-y-3"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {contactInfo.map((item, i) => {
              const Wrapper = item.href ? 'a' : 'div';
              return (
                <Wrapper key={i} {...(item.href ? { href: item.href } : {})}
                  className="flex items-start gap-4 p-5 rounded-xl transition-all duration-300 group block"
                  style={{
                    background: '#0E1218',
                    border: '1px solid rgba(192,192,192,0.08)'
                  }}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:border-silver transition-all"
                    style={{ background: 'rgba(192,192,192,0.05)', border: '1px solid rgba(192,192,192,0.1)' }}>
                    <item.icon className="w-4 h-4" style={{ color: '#C0C0C0' }} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider mb-0.5 font-medium" style={{ color: '#555' }}>{item.label}</div>
                    <div className="text-sm font-medium" style={{ color: '#E8E8E8' }}>{item.value}</div>
                  </div>
                </Wrapper>
              );
            })}
          </motion.div>

          <motion.div
            className="lg:col-span-3 p-8 rounded-2xl flex flex-col items-center justify-center text-center"
            style={{
              background: '#0E1218',
              border: '1px solid rgba(192,192,192,0.08)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.5)'
            }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Mail className="w-10 h-10 mb-5" style={{ color: '#C0C0C0' }} />
            <h3 className="font-bold text-xl mb-3" style={{ color: '#E8E8E8' }}>Drop Us an Email</h3>
            <p className="text-sm mb-8 max-w-xs" style={{ color: '#666' }}>
              Ready to start your project? Email us directly and we'll get back to you within 24 hours.
            </p>
            <a
              href="mailto:sales@fleeweb.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ background: '#C0C0C0', color: '#080C10' }}
            >
              <Mail className="w-4 h-4" />
              sales@fleeweb.com
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}