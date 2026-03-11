import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

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
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at ${mousePos.x}% ${mousePos.y}%, rgba(144,224,239,0.45) 0%, transparent 55%),
          radial-gradient(ellipse at ${100 - mousePos.x}% ${100 - mousePos.y}%, rgba(2,62,138,0.12) 0%, transparent 55%),
          linear-gradient(160deg, #CAF0F8 0%, #AEE6F5 50%, #CAF0F8 100%)
        `,
        transition: 'background 0.3s ease'
      }}
    >
      {/* Decorative floating blobs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #90E0EF, transparent)', top: '5%', left: '0%' }}
        animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #0077B6, transparent)', bottom: '8%', right: '5%' }}
        animate={{ y: [0, 20, 0], x: [0, -12, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #0077B6 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{ color: '#023E8A', background: 'rgba(2,62,138,0.08)', border: '1px solid rgba(2,62,138,0.2)' }}>
            New York · Full-Stack Excellence
          </span>
        </motion.div>

        <motion.h1
          className="mt-7 text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.08] tracking-tight"
          style={{ color: '#03045E' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
        >
          We Build Digital
          <br />
          <span style={{ color: '#0077B6' }}>
            Experiences That Perform
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          style={{ color: '#023E8A' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          A team of elite full-stack developers crafting high-performance websites,
          web applications, and digital platforms for businesses across the United States —
          delivered in days, not weeks.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
        >
          <Link
            to={createPageUrl('Contact')}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ background: '#023E8A', color: '#CAF0F8' }}
          >
            Contact Us
          </Link>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-md"
            style={{ color: '#023E8A', background: 'rgba(2,62,138,0.07)', border: '1.5px solid rgba(2,62,138,0.2)' }}
          >
            View Services
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-3 gap-8 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          {[
            { value: '3–5', label: 'Days Delivery' },
            { value: '99.9%', label: 'Uptime' },
            { value: '150+', label: 'Projects' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold" style={{ color: '#03045E' }}>{stat.value}</div>
              <div className="text-xs mt-1 uppercase tracking-wider font-medium" style={{ color: '#0077B6' }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}