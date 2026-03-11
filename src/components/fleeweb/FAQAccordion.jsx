import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'How much does a custom website cost?',
    a: 'Our projects typically range from $3,000 to $25,000+ depending on complexity, features, and scale. We provide a detailed, transparent quote after understanding your requirements during a free consultation — no hidden fees, no surprises.'
  },
  {
    q: 'How long does it take to build a website?',
    a: "Most standard websites are delivered in just a few days — often within 3–5 business days. Complex web applications with custom features, integrations, and backends typically take 1–2 weeks. We work in agile sprints and provide regular progress updates throughout, so you're never left in the dark."
  },
  {
    q: 'Do you provide hosting services?',
    a: 'Yes. We offer managed cloud hosting on enterprise-grade infrastructure with 99.9% uptime guarantee, automatic backups, SSL certificates, and auto-scaling. Our hosting plans start at $29/month and include 24/7 monitoring.'
  },
  {
    q: 'Will my website be mobile-friendly?',
    a: 'Absolutely. Every website we build is fully responsive and mobile-optimized from the ground up. We follow a mobile-first development approach and test across all major devices and browsers.'
  },
  {
    q: 'Do you offer ongoing maintenance and support?',
    a: 'Yes. We offer flexible maintenance plans that include security updates, performance monitoring, content updates, bug fixes, and priority support. Plans start at $99/month and can be customized to your needs.'
  },
  {
    q: 'How do you handle website security?',
    a: 'Security is built into every layer of our development process. We implement SSL encryption, input sanitization, CSRF protection, rate limiting, secure authentication, and regular vulnerability scanning. We follow OWASP best practices.'
  },
  {
    q: 'Can you redesign or improve my existing website?',
    a: "Definitely. We specialize in website redesigns and performance overhauls. We'll audit your current site, identify bottlenecks and UX issues, and deliver a modern, high-performing upgrade while preserving your SEO rankings."
  },
  {
    q: 'What technologies do you work with?',
    a: 'Our stack includes React, Next.js, Angular, Vue.js, Node.js, Python, PostgreSQL, MongoDB, AWS, and more. We select the best technology for each project based on performance requirements, scalability needs, and long-term maintainability.'
  },
  {
    q: 'Do you help with SEO and search rankings?',
    a: 'Yes. Every website we build includes on-page SEO optimization — semantic HTML, meta tags, schema markup, performance tuning, and mobile optimization. We also offer dedicated SEO strategy packages for ongoing growth.'
  },
  {
    q: "What if I'm not satisfied with the design?",
    a: 'Your satisfaction is guaranteed. We include up to 3 rounds of design revisions in every project. We collaborate closely with you throughout the process, sharing mockups and prototypes before writing a single line of production code.'
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-300"
      style={{
        background: isOpen ? '#fff' : 'rgba(255,255,255,0.6)',
        border: `1.5px solid ${isOpen ? '#90E0EF' : 'rgba(144,224,239,0.4)'}`,
        boxShadow: isOpen ? '0 4px 20px rgba(2,62,138,0.08)' : 'none'
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        <span className="font-semibold text-sm md:text-base pr-4" style={{ color: '#03045E' }}>{faq.q}</span>
        <ChevronDown
          className="w-5 h-5 flex-shrink-0 transition-transform duration-300"
          style={{ color: isOpen ? '#023E8A' : '#90E0EF', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-5 text-sm leading-relaxed" style={{ color: '#0077B6' }}>
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {faqs.map((faq, i) => (
        <FAQItem
          key={i}
          faq={faq}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
        />
      ))}
    </div>
  );
}