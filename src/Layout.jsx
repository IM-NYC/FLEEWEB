import React, { useState } from 'react';
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
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <style>{`
        * { font-family: 'Inter', system-ui, -apple-system, sans-serif; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0a0a0f; }
        ::-webkit-scrollbar-thumb { background: #1e1e2e; border-radius: 3px; }
        html { scroll-behavior: smooth; }
      `}</style>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to={createPageUrl('Home')} className="text-xl font-bold tracking-tight">
            Flee<span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Web</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.hash ? createPageUrl(link.page) + link.hash : createPageUrl(link.page)}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to={createPageUrl('Contact')}
              className="px-5 py-2 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 transition-all duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-slate-400 hover:text-white transition-colors"
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
              className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/[0.04] overflow-hidden"
            >
              <div className="px-6 py-4 space-y-3">
                {navLinks.map(link => (
                  <Link
                    key={link.label}
                    to={link.hash ? createPageUrl(link.page) + link.hash : createPageUrl(link.page)}
                    onClick={() => setMobileOpen(false)}
                    className="block text-slate-400 hover:text-white text-sm py-2 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to={createPageUrl('Contact')}
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-5 py-3 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 mt-2"
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