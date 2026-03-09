import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 px-6" style={{ background: '#0A0908', borderTop: '1px solid rgba(198,172,143,0.15)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold tracking-tight" style={{ color: '#EAE0D5' }}>
              Flee<span style={{ color: '#C6AC8F' }}>Web</span>
            </div>
            <p className="text-sm mt-3 max-w-sm leading-relaxed" style={{ color: 'rgba(234,224,213,0.55)' }}>
              Elite full-stack development studio based in New York. We build high-performance digital experiences for businesses across the United States.
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm" style={{ color: 'rgba(234,224,213,0.4)' }}>
              <MapPin className="w-4 h-4" />
              New York, USA
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4" style={{ color: '#EAE0D5' }}>Quick Links</h4>
            <div className="space-y-3">
              {[
                { label: 'Home', page: 'Home' },
                { label: 'FAQ', page: 'FAQ' },
                { label: 'Contact', page: 'Contact' },
              ].map(link => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className="block text-sm transition-colors hover:opacity-100"
                  style={{ color: 'rgba(234,224,213,0.5)' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#C6AC8F'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(234,224,213,0.5)'}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4" style={{ color: '#EAE0D5' }}>Contact</h4>
            <div className="space-y-3">
              <a href="tel:+17187108933" className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: 'rgba(234,224,213,0.5)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#C6AC8F'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(234,224,213,0.5)'}>
                <Phone className="w-4 h-4 flex-shrink-0" />
                +1 (718) 710-8933
              </a>
              <a href="tel:+19297672727" className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: 'rgba(234,224,213,0.5)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#C6AC8F'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(234,224,213,0.5)'}>
                <Phone className="w-4 h-4 flex-shrink-0" />
                +1 (929) 767-2727
              </a>
              <a href="mailto:info@fleeweb.com" className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: 'rgba(234,224,213,0.5)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#C6AC8F'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(234,224,213,0.5)'}>
                <Mail className="w-4 h-4 flex-shrink-0" />
                info@fleeweb.com
              </a>
              <div className="flex items-center gap-2 text-sm" style={{ color: 'rgba(234,224,213,0.4)' }}>
                <Clock className="w-4 h-4 flex-shrink-0" />
                Sat – Sun, 10AM – 7PM EST
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(198,172,143,0.1)' }}>
          <p className="text-xs" style={{ color: 'rgba(234,224,213,0.25)' }}>© {new Date().getFullYear()} FleeWeb. All rights reserved.</p>
          <p className="text-xs" style={{ color: 'rgba(234,224,213,0.2)' }}>Crafted with precision in New York</p>
        </div>
      </div>
    </footer>
  );
}