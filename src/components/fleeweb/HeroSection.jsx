import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TRISKELION_URL = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69ae38c191a1a1d5925fd401/41f84d60e_99389_triskelion.png';

function GhostTriskele() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <img
        src={TRISKELION_URL}
        alt=""
        className="w-full h-full object-contain"
        style={{ filter: 'brightness(0) invert(1)' }}
      />
    </div>
  );
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1.4, ease: 'easeOut' } }
};

export default function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });

  // Parallax & scroll-driven effects
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const triScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const triOpacity = useTransform(scrollYProgress, [0, 0.6], [0.07, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#080C10' }}
    >
      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #C0C0C0 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
      />

      {/* Ghost triskelion lurking behind — parallax scaled */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ y: bgY }}
      >
        <motion.div
          style={{ scale: triScale, opacity: triOpacity }}
          className="w-[700px] h-[700px] md:w-[900px] md:h-[900px]"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
          style={{ originX: '50%', originY: '50%' }}
        >
          <GhostTriskele />
        </motion.div>
      </motion.div>

      {/* Cinematic vignette */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, transparent 30%, #080C10 80%)' }} />

      {/* Content — scrolls up and fades on scroll */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 w-full"
        style={{ y: textY, opacity: textOpacity }}
      >
        {/* Top badge — horizontal */}
        <motion.div
          className="flex items-center gap-4 mb-10"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeIn} className="h-px flex-1 max-w-[80px]"
            style={{ background: 'rgba(192,192,192,0.2)' }} />
          <motion.span variants={fadeIn}
            className="text-xs font-semibold tracking-[0.3em] uppercase"
            style={{ color: '#555' }}>
            New York · Full-Stack Excellence
          </motion.span>
          <motion.div variants={fadeIn} className="h-px flex-1 max-w-[80px]"
            style={{ background: 'rgba(192,192,192,0.2)' }} />
        </motion.div>

        {/* Main heading — split layout: large left, accent right */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col md:flex-row md:items-end md:gap-10"
        >
          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl md:text-8xl font-bold leading-[0.95] tracking-tight flex-shrink-0"
            style={{ color: '#F0F0F0' }}
          >
            We Build<br />Digital
          </motion.h1>

          <motion.div variants={fadeUp} className="mt-6 md:mt-0 md:pb-3 flex flex-col gap-4">
            <span
              className="text-3xl md:text-5xl font-light tracking-tight leading-tight"
              style={{ color: '#C0C0C0' }}
            >
              Experiences<br />That Perform
            </span>
            <p className="text-sm max-w-xs leading-relaxed" style={{ color: '#555' }}>
              Elite developers. Delivered in days, not weeks.
            </p>
          </motion.div>
        </motion.div>

        {/* Stats row — horizontal spread */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mt-16 flex flex-col sm:flex-row gap-0 sm:gap-0 border-t border-b"
          style={{ borderColor: 'rgba(192,192,192,0.08)' }}
        >
          {[
            { value: '3–5', label: 'Day Delivery' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '150+', label: 'Projects Shipped' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="flex-1 py-6 flex flex-col items-center text-center border-b sm:border-b-0 last:border-0"
              style={{ borderColor: 'rgba(192,192,192,0.08)', borderRight: i < 2 ? '1px solid rgba(192,192,192,0.08)' : 'none' }}
            >
              <span className="text-3xl md:text-4xl font-bold" style={{ color: '#E8E8E8' }}>{stat.value}</span>
              <span className="text-xs mt-1 tracking-widest uppercase" style={{ color: '#444' }}>{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA row */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <motion.a
            variants={fadeUp}
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ background: '#C0C0C0', color: '#080C10' }}
          >
            Start Your Project
          </motion.a>
          <motion.a
            variants={fadeUp}
            href="#services"
            className="text-sm font-medium transition-all duration-200 flex items-center gap-2 group"
            style={{ color: '#555' }}
          >
            <span className="group-hover:text-[#C0C0C0] transition-colors">View Services</span>
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll line indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        style={{ opacity: textOpacity }}
      >
        <motion.div
          className="w-px h-14"
          style={{ background: 'linear-gradient(to bottom, rgba(192,192,192,0.5), transparent)' }}
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </div>
  );
}