import React from 'react';
import Footer from '@/components/fleeweb/Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen" style={{ background: '#080C10', color: '#E8E8E8' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        * { font-family: 'Inter', system-ui, -apple-system, sans-serif; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #080C10; }
        ::-webkit-scrollbar-thumb { background: #C0C0C0; border-radius: 3px; }
        html { scroll-behavior: smooth; }
        input::placeholder, textarea::placeholder { color: #555 !important; }
      `}</style>

      <main>
        {children}
      </main>

      <Footer />
    </div>
  );
}