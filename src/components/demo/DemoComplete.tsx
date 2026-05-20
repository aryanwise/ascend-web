'use client';

import { CheckCircle2, ArrowRight } from 'lucide-react';

interface DemoCompleteProps {
  onRestart: () => void;
  onWaitlist: () => void;
}

export default function DemoComplete({ onRestart, onWaitlist }: DemoCompleteProps) {
  return (
    <div className="flex flex-col items-center text-center px-2 pt-6" style={{ minHeight: 540 }}>
      <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-success-soft">
        <CheckCircle2 size={26} className="text-success" />
      </div>

      <h2 className="mb-2 font-serif text-2xl font-bold leading-tight tracking-tight text-ink">
        That's the loop.
      </h2>

      <p className="mb-5 text-[12px] leading-relaxed text-text-muted">
        Goal creation. Honest tracking. AI that re-engineers your plan when reality intervenes.
        <br />
        <br />
        The real app does this with your actual data — patterns from your history, not scripted responses.
      </p>

      <button
        onClick={onWaitlist}
        className="mb-2 flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-bold text-white"
        style={{ boxShadow: '0 4px 20px rgba(217, 83, 30, 0.3)' }}
      >
        Join the waitlist
        <ArrowRight size={14} />
      </button>

      <button
        onClick={onRestart}
        className="rounded-xl border border-default bg-transparent px-4 py-2 text-[11px] font-semibold text-text-muted"
      >
        Restart demo
      </button>

      <p className="mt-4 text-[9px] text-text-faint">No spam · Unsubscribe anytime</p>
    </div>
  );
}
