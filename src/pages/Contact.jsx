import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '@/components/fleeweb/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+1 (718) 710-8933', href: 'tel:+17187108933' },
  { icon: Phone, label: 'Phone', value: '+1 (929) 767-2727', href: 'tel:+19297672727' },
  { icon: Mail, label: 'Email', value: 'info@fleeweb.com', href: 'mailto:info@fleeweb.com' },
  { icon: MapPin, label: 'Location', value: 'New York, USA', href: null },
  { icon: Clock, label: 'Hours', value: 'Sat – Sun, 10AM – 7PM EST', href: null },
];

export default function Contact() {
  return (
    <div className="min-h-screen" style={{ background: '#E0F7FC' }}>
      {/* Header */}
      <div className="pt-32 pb-16 text-center px-6" style={{ background: '#CAF0F8' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#0077B6' }}>Get In Touch</span>
          <h1 className="text-3xl md:text-5xl font-bold mt-3" style={{ color: '#03045E' }}>
            Let's Build Together
          </h1>
          <p className="mt-4 max-w-lg mx-auto text-sm" style={{ color: '#023E8A' }}>
            Ready to start your project? Reach out and we'll respond within 24 hours.
          </p>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 pb-28">
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
                  className="flex items-start gap-4 p-5 rounded-xl transition-all duration-300 block"
                  style={{
                    background: '#fff',
                    border: '1.5px solid #90E0EF',
                    boxShadow: '0 2px 10px rgba(2,62,138,0.05)'
                  }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(144,224,239,0.25)' }}>
                    <item.icon className="w-5 h-5" style={{ color: '#023E8A' }} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider mb-1 font-medium" style={{ color: '#90E0EF' }}>{item.label}</div>
                    <div className="text-sm font-semibold" style={{ color: '#03045E' }}>{item.value}</div>
                  </div>
                </Wrapper>
              );
            })}
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3 p-8 rounded-2xl"
            style={{ background: '#fff', border: '1.5px solid #90E0EF', boxShadow: '0 4px 24px rgba(2,62,138,0.08)' }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-6" style={{ color: '#03045E' }}>Send Us a Message</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
}