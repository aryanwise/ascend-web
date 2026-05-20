'use client';

import { Sparkles } from 'lucide-react';

interface IntroScreenProps {
  onStart: () => void;
}

export default function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center pt-8 px-2 text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1.5">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
        <span className="text-[9px] font-bold uppercase tracking-[1.5px] text-accent">Interactive demo</span>
      </div>

      <h2 className="mb-3 font-serif text-2xl font-bold leading-tight tracking-tight text-ink">
        Try the app, fully.
      </h2>

      <p className="mb-6 text-[13px] leading-relaxed text-text-muted">
        Walk through a real goal creation, a missed task, and an AI intervention — in under 90 seconds.
      </p>

      <button
        onClick={onStart}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-bold text-white transition-transform active:scale-95"
        style={{ boxShadow: '0 4px 20px rgba(217, 83, 30, 0.3)' }}
      >
        <Sparkles size={15} />
        Start the demo
      </button>

      <p className="mt-4 text-[10px] text-text-faint">No signup. No data saved. Just the experience.</p>
    </div>
  );
}
