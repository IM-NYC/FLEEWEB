import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#060609] border-t border-white/[0.05] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-white tracking-tight">
              Flee<span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Web</span>
            </div>
            <p className="text-slate-500 text-sm mt-3 max-w-sm leading-relaxed">
              Elite full-stack development studio based in New York. We build high-performance digital experiences for businesses across the United States.
            </p>
            <div className="flex items-center gap-2 mt-4 text-slate-500 text-sm">
              <MapPin className="w-4 h-4" />
              New York, USA
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <div className="space-y-3">
              {[
                { label: 'Home', page: 'Home' },
                { label: 'FAQ', page: 'FAQ' },
                { label: 'Contact', page: 'Contact' },
              ].map(link => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className="block text-slate-500 text-sm hover:text-indigo-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+17187108933" className="flex items-center gap-2 text-slate-500 text-sm hover:text-indigo-400 transition-colors">
                <Phone className="w-4 h-4" />
                +1 (718) 710-8933
              </a>
              <a href="tel:+19297672727" className="flex items-center gap-2 text-slate-500 text-sm hover:text-indigo-400 transition-colors">
                <Phone className="w-4 h-4" />
                +1 (929) 767-2727
              </a>
              <a href="mailto:info@fleeweb.com" className="flex items-center gap-2 text-slate-500 text-sm hover:text-indigo-400 transition-colors">
                <Mail className="w-4 h-4" />
                info@fleeweb.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.05] mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs">© {new Date().getFullYear()} FleeWeb. All rights reserved.</p>
          <p className="text-slate-700 text-xs">Crafted with precision in New York</p>
        </div>
      </div>
    </footer>
  );
}