import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Globe, Shield, Server, Zap, Code, Palette, Search, Smartphone } from 'lucide-react';

const services = [
  { icon: Globe, title: 'Website Development', desc: 'Custom-built, responsive websites using cutting-edge frameworks.' },
  { icon: Shield, title: 'Security Hardening', desc: 'Enterprise-grade audits, SSL, and vulnerability patching.' },
  { icon: Server, title: 'Managed Hosting', desc: '99.9% uptime, daily backups, and auto-scaling infrastructure.' },
  { icon: Zap, title: 'Performance', desc: 'Sub-second load times via caching, CDN, and code optimization.' },
  { icon: Code, title: 'Full-Stack Apps', desc: 'Robust backends, real-time features, seamless API integrations.' },
  { icon: Palette, title: 'UI/UX Design', desc: 'Pixel-perfect interfaces built for conversion and accessibility.' },
  { icon: Search, title: 'SEO & Analytics', desc: 'Data-driven strategies to maximize your online visibility.' },
  { icon: Smartphone, title: 'Mobile-First', desc: 'PWAs and optimized experiences across every device.' },
];

// Horizontal scroll track — services slide in from the side as you scroll
export default function ServicesSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], ['8%', '-8%']);

  return (
    <section id="services" ref={sectionRef} className="py-32 relative overflow-hidden" style={{ background: '#0A0E14' }}>
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #C0C0C0 1px, transparent 0)',
          backgroundSize: '36px 36px'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading — left-anchored, not centered */}
        <motion.div
          className="mb-16 flex items-end justify-between"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#444' }}>What We Do</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-2 leading-tight" style={{ color: '#E8E8E8' }}>
              Services Built<br /><span style={{ color: '#C0C0C0', fontWeight: 300 }}>for Growth</span>
            </h2>
          </div>
          <div className="hidden md:block h-px w-32 mb-4" style={{ background: 'rgba(192,192,192,0.15)' }} />
        </motion.div>

        {/* Cards — parallax horizontal drift on scroll */}
        <motion.div
          style={{ x }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.8, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="group p-6 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                background: '#0E1218',
                border: '1px solid rgba(192,192,192,0.07)',
              }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{ background: 'rgba(192,192,192,0.05)', border: '1px solid rgba(192,192,192,0.1)' }}>
                <service.icon className="w-5 h-5" style={{ color: '#C0C0C0' }} />
              </div>
              <h3 className="font-bold text-base mb-2" style={{ color: '#E8E8E8' }}>{service.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#555' }}>{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}