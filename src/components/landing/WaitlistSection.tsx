'use client';

import { useState } from 'react';

// IMPORTANT: replace this with your real Formspree endpoint
const FORMSPREE_URL = 'https://formspree.io/f/mnjrjbag';

export default function WaitlistSection() {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || submitting) return;

    setSubmitting(true);
    setError(false);

    try {
      const formData = new FormData();
      formData.append('email', email);

      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="bg-ink text-white py-[120px] sm:py-20 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 20% 20%, rgba(217, 83, 30, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 80%, rgba(217, 83, 30, 0.1) 0%, transparent 40%)',
        }}
      />
      <div className="container relative z-10 text-center">
        <div className="section-label" style={{ color: '#D9531E' }}>
          Limited beta
        </div>
        <h2
          className="font-serif font-bold mb-6"
          style={{ fontSize: 'clamp(36px, 6vw, 72px)', lineHeight: 1, letterSpacing: '-2px' }}
        >
          Stop tracking. <em className="text-accent">Start recalibrating.</em>
        </h2>
        <p className="text-lg text-white/65 max-w-[580px] mx-auto mb-10 leading-[1.55]">
          Ascend is in active development. We're inviting people who've been burned by traditional productivity apps
          and want something genuinely different.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-2 max-w-[480px] mx-auto p-2 rounded-2xl border"
            style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="flex-1 bg-transparent border-none outline-none px-4 py-3.5 text-white text-[15px] placeholder:text-white/40"
            />
            <button
              type="submit"
              disabled={submitting}
              className="bg-accent text-white border-none px-6 py-3.5 rounded-xl font-bold text-[15px] cursor-pointer hover:-translate-y-0.5 transition-all disabled:opacity-50"
            >
              {submitting ? 'Sending...' : 'Join waitlist →'}
            </button>
          </form>
        ) : (
          <div className="max-w-[480px] mx-auto p-5 rounded-2xl border border-success bg-success/15 text-success-soft animate-fade-in">
            <strong>You're in.</strong> We'll email you when early access opens.
          </div>
        )}

        {error && (
          <div className="mt-4 text-sm text-accent">Something went wrong. Please try again.</div>
        )}

        <div className="mt-7 font-mono text-xs text-white/40 tracking-[1.5px] uppercase">
          No spam · Unsubscribe anytime
        </div>
      </div>
    </section>
  );
}
