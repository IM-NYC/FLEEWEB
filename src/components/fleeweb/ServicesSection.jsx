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
    <section id="services" className="py-28 relative" style={{ background: '#F5F0EA' }}>
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #5E503F 1px, transparent 0)',
          backgroundSize: '36px 36px'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#5E503F' }}>What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3" style={{ color: '#0A0908' }}>Services Built for Growth</h2>
          <p className="mt-3 max-w-lg mx-auto text-sm" style={{ color: '#22333B' }}>
            End-to-end web solutions designed to scale with your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: '#fff',
                border: '1.5px solid #C6AC8F',
                boxShadow: '0 2px 12px rgba(10,9,8,0.05)'
              }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{ background: '#EAE0D5' }}>
                <service.icon className="w-5 h-5" style={{ color: '#5E503F' }} />
              </div>
              <h3 className="font-bold text-base mb-2" style={{ color: '#0A0908' }}>{service.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#22333B' }}>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}