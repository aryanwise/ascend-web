'use client';

import { ArrowRight, ChevronLeft } from 'lucide-react';
import type { AreaId } from '@/types';

const PLACEHOLDERS: Record<AreaId, string> = {
  fitness: 'e.g. Get to 85kg from 95kg by August. Autoimmune issues — heavy lifting flares.',
  study: 'e.g. Pass AWS Solutions Architect in 3 months. Full-time job, ~1hr/day.',
  diet: 'e.g. Cut sugar without going extreme. Family dinners are non-negotiable.',
  career: 'e.g. Land a senior role in 6 months. Currently mid-level, want more impact.',
  mind: 'e.g. Build a meditation habit. Have tried apps but quit after 2 weeks every time.',
  money: 'e.g. Build 6-month emergency fund. Have $300/mo I can save, no discipline.',
  health: 'e.g. Fix my sleep. Going to bed at 1am, waking exhausted. Need to reset.',
  habits: 'e.g. Read 20 minutes daily. Last attempt lasted 5 days.',
  custom: 'Describe what you want, including the real constraints...',
};

interface GoalTextScreenProps {
  selectedArea: AreaId;
  goalText: string;
  onChange: (text: string) => void;
  onBack: () => void;
  onContinue: () => void;
}

export default function GoalTextScreen({ selectedArea, goalText, onChange, onBack, onContinue }: GoalTextScreenProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="mb-3">
        <div className="text-[10px] font-bold uppercase tracking-[1.5px] text-text-muted">Step 2 of 4</div>
        <h2 className="mt-1 font-serif text-xl font-bold tracking-tight text-ink">What do you actually want?</h2>
        <p className="mt-1 text-[11px] text-text-muted">Include constraints — they make the plan real.</p>
      </div>

      <textarea
        value={goalText}
        onChange={(e) => onChange(e.target.value)}
        placeholder={PLACEHOLDERS[selectedArea]}
        className="w-full rounded-xl border border-default bg-card p-3 text-[12px] leading-relaxed text-ink placeholder:text-text-faint focus:border-accent focus:outline-none"
        rows={6}
      />

      <div className="mt-4 flex gap-2">
        <button
          onClick={onBack}
          className="flex items-center gap-1 rounded-xl border border-default bg-transparent px-3 py-2.5 text-xs font-semibold text-text-primary"
        >
          <ChevronLeft size={13} />
          Back
        </button>
        <button
          onClick={onContinue}
          disabled={!goalText.trim()}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-accent px-3 py-2.5 text-xs font-bold text-white disabled:opacity-40"
        >
          Continue
          <ArrowRight size={13} />
        </button>
      </div>
    </div>
  );
}
