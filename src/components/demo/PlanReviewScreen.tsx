'use client';

import { CheckCircle2, Sparkle, Clock, Check } from 'lucide-react';
import type { Goal } from '@/types';
import { formatFrequency } from '@/lib/utils';

interface PlanReviewScreenProps {
  goal: Goal;
  onSave: () => void;
}

export default function PlanReviewScreen({ goal, onSave }: PlanReviewScreenProps) {
  const plan = goal.plan;

  return (
    <div className="flex flex-col h-full">
      <div className="mb-2 flex items-center gap-1.5">
        <CheckCircle2 size={14} className="text-success" />
        <span className="text-[10px] font-semibold text-success">Plan ready · built around your constraints</span>
      </div>

      <h2 className="mb-2 font-serif text-xl font-bold tracking-tight text-ink leading-tight">
        {plan.title}
      </h2>
      <p className="mb-3 text-[11px] italic leading-snug text-text-muted">"{plan.summary}"</p>

      <div className="mb-3 inline-flex w-fit items-center gap-1 rounded-full bg-accent-soft px-2.5 py-1">
        <Clock size={10} className="text-accent" />
        <span className="text-[10px] font-bold text-accent">{plan.duration}</span>
      </div>

      <div className="text-[9px] font-bold uppercase tracking-[1.5px] text-text-muted mb-2">Daily plan</div>
      <div className="mb-3 overflow-hidden rounded-xl border border-default bg-card">
        {plan.dailyTasks.map((t, i) => (
          <div
            key={t.id}
            className="flex items-center gap-2 px-2.5 py-2"
            style={{ borderTop: i > 0 ? '1px solid rgba(26, 24, 21, 0.08)' : 'none' }}
          >
            <div className="h-1.5 w-1.5 rounded-full bg-accent" />
            <div className="flex-1 min-w-0">
              <div className="text-[11px] font-semibold text-ink">{t.name}</div>
              <div className="text-[9px] text-text-muted">
                {formatFrequency(t.frequency)}
                {t.duration && ` · ${t.duration}`}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-[9px] font-bold uppercase tracking-[1.5px] text-text-muted mb-2">Constraint-aware tips</div>
      <div className="mb-3 rounded-xl bg-accent-soft p-2.5">
        {plan.tips.map((tip, i) => (
          <div key={i} className={`flex gap-1.5 ${i < plan.tips.length - 1 ? 'mb-1.5' : ''}`}>
            <Sparkle size={10} className="text-accent shrink-0 mt-0.5" />
            <span className="text-[10px] leading-snug">{tip}</span>
          </div>
        ))}
      </div>

      <button
        onClick={onSave}
        className="flex items-center justify-center gap-1.5 rounded-xl bg-accent px-4 py-2.5 text-xs font-bold text-white"
      >
        <Check size={13} />
        Save & continue
      </button>
    </div>
  );
}
