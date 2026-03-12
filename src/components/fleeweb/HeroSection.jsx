import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Triskele from '@/components/fleeweb/Triskele';

export default function HeroSection() {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePos({ x, y });
    };
    const el = containerRef.current;
    if (el) el.addEventListener('mousemove', handleMouseMove);
    return () => { if (el) el.removeEventListener('mousemove', handleMouseMove); };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at ${mousePos.x}% ${mousePos.y}%, rgba(192,192,192,0.08) 0%, transparent 60%),
          linear-gradient(170deg, #0A0E14 0%, #080C10 60%, #050709 100%)
        `,
        transition: 'background 0.4s ease'
      }}
    >
      {/* Subtle grain overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #C0C0C0 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
      />

      {/* Cinematic light streak */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: '1px',
          height: '40%',
          top: '0',
          left: '50%',
          background: 'linear-gradient(to bottom, transparent, rgba(192,192,192,0.15), transparent)',
        }}
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Triskele icon */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.5, rotate: -120 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            <Triskele size={64} color="#C0C0C0" />
          </motion.div>
        </motion.div>

        {/* Logo wordmark */}
        <motion.div
          className="text-2xl font-bold tracking-[0.3em] uppercase mb-10"
          style={{ color: '#E8E8E8', letterSpacing: '0.35em' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Flee<span style={{ color: '#C0C0C0' }}>Web</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{ color: '#C0C0C0', background: 'rgba(192,192,192,0.07)', border: '1px solid rgba(192,192,192,0.2)' }}>
            New York · Full-Stack Excellence
          </span>
        </motion.div>

        <motion.h1
          className="mt-7 text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.08] tracking-tight"
          style={{ color: '#F0F0F0' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          We Build Digital
          <br />
          <span style={{ color: '#C0C0C0', fontWeight: 300 }}>
            Experiences That Perform
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          style={{ color: '#888' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
        >
          A team of elite full-stack developers crafting high-performance websites,
          web applications, and digital platforms for businesses across the United States —
          delivered in days, not weeks.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ background: '#C0C0C0', color: '#080C10' }}
          >
            Contact Us
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold rounded-xl transition-all duration-300 hover:scale-105"
            style={{ color: '#C0C0C0', background: 'rgba(192,192,192,0.05)', border: '1.5px solid rgba(192,192,192,0.2)' }}
          >
            View Services
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-3 gap-8 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          {[
            { value: '3–5', label: 'Days Delivery' },
            { value: '99.9%', label: 'Uptime' },
            { value: '150+', label: 'Projects' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold" style={{ color: '#E8E8E8' }}>{stat.value}</div>
              <div className="text-xs mt-1 uppercase tracking-wider font-medium" style={{ color: '#666' }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-20 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <span className="text-xs tracking-widest uppercase" style={{ color: '#444' }}>Scroll</span>
          <motion.div
            className="w-px h-12"
            style={{ background: 'linear-gradient(to bottom, #555, transparent)' }}
            animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </div>
  );
}