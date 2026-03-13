import React, { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { base44 } from '@/api/base44Client';
import { Send, Loader2, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const RECAPTCHA_SITE_KEY = '6LcwSoQsAAAAADuOY2u-f8au27l95OHHXdpQ6_EP';

function useRecaptcha() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (window.grecaptcha) { setLoaded(true); return; }
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js`;
    script.async = true;
    script.defer = true;
    script.onload = () => setLoaded(true);
    document.head.appendChild(script);
    return () => { try { document.head.removeChild(script); } catch {} };
  }, []);
  return loaded;
}

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const recaptchaRef = useRef(null);
  const recaptchaRendered = useRef(false);
  const recaptchaLoaded = useRecaptcha();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in all fields.');
      return;
    }
    const token = window.grecaptcha?.getResponse(recaptchaRef.current);
    if (!token) {
      setError('Please complete the reCAPTCHA verification.');
      return;
    }
    setSending(true);
    await base44.functions.invoke('sendContactEmail', { name: form.name, email: form.email, message: form.message });
    setSending(false);
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    if (window.grecaptcha) window.grecaptcha.reset(recaptchaRef.current);
  };

  useEffect(() => {
    if (recaptchaLoaded && window.grecaptcha && !recaptchaRendered.current) {
      window.grecaptcha.ready(() => {
        if (!recaptchaRendered.current && document.getElementById('recaptcha-container')?.childElementCount === 0) {
          recaptchaRendered.current = true;
          recaptchaRef.current = window.grecaptcha.render('recaptcha-container', {
            sitekey: RECAPTCHA_SITE_KEY,
            theme: 'dark',
          });
        }
      });
    }
  }, [recaptchaLoaded]);

  const inputStyle = {
    background: '#080C10',
    borderColor: 'rgba(192,192,192,0.15)',
    color: '#E8E8E8'
  };

  if (sent) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
        <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
          style={{ background: 'rgba(192,192,192,0.07)', border: '1px solid rgba(192,192,192,0.2)' }}>
          <CheckCircle className="w-7 h-7" style={{ color: '#C0C0C0' }} />
        </div>
        <h3 className="text-2xl font-bold mb-2" style={{ color: '#E8E8E8' }}>Message Sent!</h3>
        <p style={{ color: '#666' }}>We'll get back to you within 24 hours.</p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:opacity-80"
          style={{ border: '1px solid rgba(192,192,192,0.2)', color: '#C0C0C0', background: 'transparent' }}
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <Label htmlFor="name" className="text-xs mb-2 block font-medium tracking-wider uppercase" style={{ color: '#555' }}>Full Name</Label>
        <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="John Doe" className="h-12 rounded-xl text-sm border" style={inputStyle} />
      </div>
      <div>
        <Label htmlFor="email" className="text-xs mb-2 block font-medium tracking-wider uppercase" style={{ color: '#555' }}>Email Address</Label>
        <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="john@company.com" className="h-12 rounded-xl text-sm border" style={inputStyle} />
      </div>
      <div>
        <Label htmlFor="message" className="text-xs mb-2 block font-medium tracking-wider uppercase" style={{ color: '#555' }}>Your Message</Label>
        <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell us about your project..." rows={5}
          className="rounded-xl text-sm resize-none border" style={inputStyle} />
      </div>

      <div>
        <div id="recaptcha-container" className="mt-1" />
        {!recaptchaLoaded && (
          <div className="flex items-center gap-2 text-sm" style={{ color: '#555' }}>
            <Loader2 className="w-4 h-4 animate-spin" /> Loading verification...
          </div>
        )}
      </div>

      <AnimatePresence>
        {error && (
          <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="text-red-400 text-sm">{error}</motion.p>
        )}
      </AnimatePresence>

      <button type="submit" disabled={sending}
        className="w-full h-12 rounded-xl text-sm font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl flex items-center justify-center gap-2"
        style={{ background: '#C0C0C0', color: '#080C10' }}>
        {sending ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Send className="w-4 h-4" /> Send Message</>}
      </button>
    </form>
  );
}