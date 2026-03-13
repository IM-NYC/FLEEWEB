import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Triskele from '@/components/fleeweb/Triskele';

export default function Footer() {
  return (
    <footer className="py-14 px-6" style={{ background: '#050709', borderTop: '1px solid rgba(192,192,192,0.06)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <Triskele size={24} color="rgba(192,192,192,0.5)" />
              <div className="text-xl font-bold tracking-[0.2em] uppercase" style={{ color: '#E8E8E8' }}>
                Flee<span style={{ color: '#C0C0C0' }}>Web</span>
              </div>
            </div>
            <p className="text-sm mt-2 max-w-sm leading-relaxed" style={{ color: '#444' }}>
              Elite full-stack development studio based in New York. High-performance digital experiences for businesses across the United States.
            </p>
            <div className="flex items-center gap-2 mt-4 text-xs" style={{ color: '#333' }}>
              <MapPin className="w-3 h-3" />
              New York, USA
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-xs mb-4 tracking-widest uppercase" style={{ color: '#555' }}>Navigation</h4>
            <div className="space-y-3">
              {[
                { label: 'Home', page: 'Home' },
                { label: 'FAQ', page: 'FAQ' },
                { label: 'Contact', page: 'Contact' },
              ].map(link => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className="block text-sm transition-colors duration-200"
                  style={{ color: '#444' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#C0C0C0'}
                  onMouseLeave={e => e.currentTarget.style.color = '#444'}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-xs mb-4 tracking-widest uppercase" style={{ color: '#555' }}>Contact</h4>
            <div className="space-y-3">
              {[
                { href: 'tel:+17187108933', icon: Phone, text: '+1 (718) 710-8933' },
                { href: 'tel:+19297672727', icon: Phone, text: '+1 (929) 767-2727' },
                { href: 'mailto:sales@fleeweb.com', icon: Mail, text: 'sales@fleeweb.com' },
              ].map((item, i) => (
                <a key={i} href={item.href} className="flex items-center gap-2 text-sm transition-colors duration-200"
                  style={{ color: '#444' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#C0C0C0'}
                  onMouseLeave={e => e.currentTarget.style.color = '#444'}>
                  <item.icon className="w-3 h-3 flex-shrink-0" />
                  {item.text}
                </a>
              ))}
              <div className="flex items-center gap-2 text-xs" style={{ color: '#333' }}>
                <Clock className="w-3 h-3 flex-shrink-0" />
                Sat – Sun, 10AM – 7PM EST
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderTop: '1px solid rgba(192,192,192,0.05)' }}>
          <p className="text-xs" style={{ color: '#333' }}>© {new Date().getFullYear()} FleeWeb. All rights reserved.</p>
          <p className="text-xs" style={{ color: '#2a2a2a' }}>Crafted with precision in New York</p>
        </div>
      </div>
    </footer>
  );
}