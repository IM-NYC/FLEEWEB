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
    <div className="min-h-screen" style={{ background: '#CAF0F8', color: '#03045E' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Inter', system-ui, -apple-system, sans-serif; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #CAF0F8; }
        ::-webkit-scrollbar-thumb { background: #90E0EF; border-radius: 3px; }
        html { scroll-behavior: smooth; }
        input::placeholder, textarea::placeholder { color: #7EC8E3 !important; }
      `}</style>

      {/* Navbar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(202,240,248,0.92)' : 'rgba(202,240,248,0.7)',
          backdropFilter: 'blur(16px)',
          borderBottom: scrolled ? '1px solid rgba(144,224,239,0.5)' : '1px solid transparent',
          boxShadow: scrolled ? '0 2px 20px rgba(2,62,138,0.08)' : 'none'
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to={createPageUrl('Home')} className="text-xl font-bold tracking-tight" style={{ color: '#03045E' }}>
            Flee<span style={{ color: '#0077B6' }}>Web</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.hash ? createPageUrl(link.page) + link.hash : createPageUrl(link.page)}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: '#0077B6' }}
                onMouseEnter={e => e.currentTarget.style.color = '#023E8A'}
                onMouseLeave={e => e.currentTarget.style.color = '#0077B6'}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to={createPageUrl('Contact')}
              className="px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
              style={{ background: '#023E8A', color: '#CAF0F8' }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden transition-colors"
            style={{ color: '#0077B6' }}
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
              style={{ background: 'rgba(202,240,248,0.97)', borderBottom: '1px solid rgba(144,224,239,0.4)' }}
            >
              <div className="px-6 py-4 space-y-2">
                {navLinks.map(link => (
                  <Link
                    key={link.label}
                    to={link.hash ? createPageUrl(link.page) + link.hash : createPageUrl(link.page)}
                    onClick={() => setMobileOpen(false)}
                    className="block text-sm font-medium py-2.5 transition-colors"
                    style={{ color: '#0077B6' }}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to={createPageUrl('Contact')}
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-5 py-3 text-sm font-semibold rounded-lg mt-2"
                  style={{ background: '#023E8A', color: '#CAF0F8' }}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Page content */}
      <main className="pt-16">
        {children}
      </main>

      <Footer />
    </div>
  );
}