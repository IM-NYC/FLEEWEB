import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { base44 } from '@/api/base44Client';
import { Send, Loader2, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function generateCaptcha() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  return { question: `${a} + ${b}`, answer: a + b };
}

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (parseInt(captchaInput) !== captcha.answer) {
      setError('Incorrect verification answer. Please try again.');
      setCaptcha(generateCaptcha());
      setCaptchaInput('');
      return;
    }

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    setSending(true);
    await base44.integrations.Core.SendEmail({
      to: 'info@fleeweb.com',
      subject: `New Contact from ${form.name}`,
      body: `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    });
    setSending(false);
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setCaptchaInput('');
    setCaptcha(generateCaptcha());
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-8 h-8 text-emerald-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-slate-400">We'll get back to you within 24 hours.</p>
        <Button
          onClick={() => setSent(false)}
          variant="outline"
          className="mt-6 border-slate-700 text-slate-300 hover:bg-white/5"
        >
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <Label htmlFor="name" className="text-slate-300 text-sm mb-2 block">Full Name</Label>
        <Input
          id="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="John Doe"
          className="bg-white/[0.05] border-white/[0.08] text-white placeholder:text-slate-600 focus:border-indigo-500/50 h-12 rounded-xl"
        />
      </div>
      <div>
        <Label htmlFor="email" className="text-slate-300 text-sm mb-2 block">Email Address</Label>
        <Input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="john@company.com"
          className="bg-white/[0.05] border-white/[0.08] text-white placeholder:text-slate-600 focus:border-indigo-500/50 h-12 rounded-xl"
        />
      </div>
      <div>
        <Label htmlFor="message" className="text-slate-300 text-sm mb-2 block">Your Message</Label>
        <Textarea
          id="message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell us about your project..."
          rows={5}
          className="bg-white/[0.05] border-white/[0.08] text-white placeholder:text-slate-600 focus:border-indigo-500/50 rounded-xl resize-none"
        />
      </div>

      {/* Math CAPTCHA */}
      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
        <Label className="text-slate-400 text-xs uppercase tracking-wider mb-2 block">Human Verification</Label>
        <div className="flex items-center gap-3">
          <span className="text-white font-mono text-lg font-bold bg-white/[0.05] px-4 py-2 rounded-lg">
            {captcha.question} = ?
          </span>
          <Input
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value)}
            placeholder="Answer"
            className="bg-white/[0.05] border-white/[0.08] text-white placeholder:text-slate-600 focus:border-indigo-500/50 h-11 rounded-lg w-28"
          />
        </div>
      </div>

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-red-400 text-sm"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>

      <Button
        type="submit"
        disabled={sending}
        className="w-full h-12 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
      >
        {sending ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <span className="flex items-center gap-2">
            <Send className="w-4 h-4" />
            Send Message
          </span>
        )}
      </Button>
    </form>
  );
}