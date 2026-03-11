import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Footer from '@/components/fleeweb/Footer';

const navLinks = [
  { label: 'Home', page: 'Home' },
  { label: 'Services', page: 'Home', hash: '#services' },
  { label: 'FAQ', page: 'FAQ' },
  { label: 'Contact', page: 'Contact' },
];

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: '#F4F4F4', color: '#0D1B2A' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Inter', system-ui, -apple-system, sans-serif; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #F4F4F4; }
        ::-webkit-scrollbar-thumb { background: #1E6FD9; border-radius: 3px; }
        html { scroll-behavior: smooth; }
        input::placeholder, textarea::placeholder { color: #9CA3AF !important; }
      `}</style>

      {/* Navbar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(13,27,42,0.96)' : 'rgba(13,27,42,0.85)',
          backdropFilter: 'blur(16px)',
          borderBottom: scrolled ? '1px solid rgba(30,111,217,0.3)' : '1px solid transparent',
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.25)' : 'none'
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to={createPageUrl('Home')} className="text-xl font-bold tracking-tight" style={{ color: '#F4F4F4' }}>
            Flee<span style={{ color: '#1E6FD9' }}>Web</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.hash ? createPageUrl(link.page) + link.hash : createPageUrl(link.page)}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: '#C0C0C0' }}
                onMouseEnter={e => e.currentTarget.style.color = '#F4F4F4'}
                onMouseLeave={e => e.currentTarget.style.color = '#C0C0C0'}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to={createPageUrl('Contact')}
              className="px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
              style={{ background: '#1E6FD9', color: '#F4F4F4' }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden transition-colors"
            style={{ color: '#C0C0C0' }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
              style={{ background: 'rgba(13,27,42,0.98)', borderBottom: '1px solid rgba(30,111,217,0.2)' }}
            >
              <div className="px-6 py-4 space-y-2">
                {navLinks.map(link => (
                  <Link
                    key={link.label}
                    to={link.hash ? createPageUrl(link.page) + link.hash : createPageUrl(link.page)}
                    onClick={() => setMobileOpen(false)}
                    className="block text-sm font-medium py-2.5 transition-colors"
                    style={{ color: '#C0C0C0' }}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to={createPageUrl('Contact')}
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-5 py-3 text-sm font-semibold rounded-lg mt-2"
                  style={{ background: '#1E6FD9', color: '#F4F4F4' }}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-16">
        {children}
      </main>

      <Footer />
    </div>
  );
}