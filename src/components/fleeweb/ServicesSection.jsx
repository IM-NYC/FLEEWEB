import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield, Server, Zap, Code, Palette, Search, Smartphone } from 'lucide-react';

const services = [
  { icon: Globe, title: 'Website Development', desc: 'Custom-built, responsive websites using cutting-edge frameworks tailored to your business goals.', color: 'from-blue-500 to-cyan-400' },
  { icon: Shield, title: 'Security Hardening', desc: 'Enterprise-grade security audits, SSL implementation, and vulnerability patching for total protection.', color: 'from-emerald-500 to-green-400' },
  { icon: Server, title: 'Managed Hosting', desc: 'Blazing-fast cloud hosting with 99.9% uptime guarantee, daily backups, and auto-scaling infrastructure.', color: 'from-violet-500 to-purple-400' },
  { icon: Zap, title: 'Performance Optimization', desc: 'Sub-second load times through advanced caching, CDN integration, and code-level optimizations.', color: 'from-amber-500 to-orange-400' },
  { icon: Code, title: 'Full-Stack Applications', desc: 'Complex web applications with robust backends, real-time features, and seamless API integrations.', color: 'from-rose-500 to-pink-400' },
  { icon: Palette, title: 'UI/UX Design', desc: 'Pixel-perfect interfaces designed for conversion, accessibility, and an exceptional user experience.', color: 'from-indigo-500 to-blue-400' },
  { icon: Search, title: 'SEO & Analytics', desc: 'Data-driven SEO strategies and comprehensive analytics to maximize your online visibility.', color: 'from-teal-500 to-cyan-400' },
  { icon: Smartphone, title: 'Mobile-First Development', desc: 'Progressive web apps and mobile-optimized experiences that perform flawlessly on every device.', color: 'from-fuchsia-500 to-pink-400' },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-28 bg-[#07070c] relative">
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-indigo-400">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Services Built for Growth</h2>
          <p className="text-slate-500 mt-3 max-w-lg mx-auto">
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
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.12] transition-all duration-500 hover:bg-white/[0.04]"
            >
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white font-semibold text-base mb-2">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}