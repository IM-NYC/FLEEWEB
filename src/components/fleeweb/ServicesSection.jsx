import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield, Server, Zap, Code, Palette, Search, Smartphone } from 'lucide-react';

const services = [
  { icon: Globe, title: 'Website Development', desc: 'Custom-built, responsive websites using cutting-edge frameworks tailored to your business goals.' },
  { icon: Shield, title: 'Security Hardening', desc: 'Enterprise-grade security audits, SSL implementation, and vulnerability patching for total protection.' },
  { icon: Server, title: 'Managed Hosting', desc: 'Blazing-fast cloud hosting with 99.9% uptime guarantee, daily backups, and auto-scaling infrastructure.' },
  { icon: Zap, title: 'Performance Optimization', desc: 'Sub-second load times through advanced caching, CDN integration, and code-level optimizations.' },
  { icon: Code, title: 'Full-Stack Applications', desc: 'Complex web applications with robust backends, real-time features, and seamless API integrations.' },
  { icon: Palette, title: 'UI/UX Design', desc: 'Pixel-perfect interfaces designed for conversion, accessibility, and an exceptional user experience.' },
  { icon: Search, title: 'SEO & Analytics', desc: 'Data-driven SEO strategies and comprehensive analytics to maximize your online visibility.' },
  { icon: Smartphone, title: 'Mobile-First Development', desc: 'Progressive web apps and mobile-optimized experiences that perform flawlessly on every device.' },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-28 relative" style={{ background: '#0A0E14' }}>
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #C0C0C0 1px, transparent 0)',
          backgroundSize: '36px 36px'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#555' }}>What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3" style={{ color: '#E8E8E8' }}>Services Built for Growth</h2>
          <div className="mt-4 w-12 h-px mx-auto" style={{ background: 'rgba(192,192,192,0.3)' }} />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group p-6 rounded-2xl transition-all duration-500 hover:-translate-y-2"
              style={{
                background: '#0E1218',
                border: '1px solid rgba(192,192,192,0.07)',
                boxShadow: '0 2px 20px rgba(0,0,0,0.3)'
              }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{ background: 'rgba(192,192,192,0.06)', border: '1px solid rgba(192,192,192,0.1)' }}>
                <service.icon className="w-5 h-5" style={{ color: '#C0C0C0' }} />
              </div>
              <h3 className="font-bold text-base mb-2" style={{ color: '#E8E8E8' }}>{service.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#666' }}>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}