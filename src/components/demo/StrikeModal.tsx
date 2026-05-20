'use client';

import { useState } from 'react';
import { Shield, ArrowRight, Check, Sparkles, X, Loader2 } from 'lucide-react';
import { REASON_TAGS } from '@/data/areas';
import { STRIKE_PROPOSAL } from '@/data/scripts';
import type { Task } from '@/types';
import { formatFrequency } from '@/lib/utils';

interface StrikeModalProps {
  task: Task;
  onClose: () => void;
  onLogReason: (tags: string[], note: string) => void;
  onApply: () => void;
}

export default function StrikeModal({ task, onClose, onLogReason, onApply }: StrikeModalProps) {
  const [step, setStep] = useState<0 | 1 | 2>(0);
  const [tags, setTags] = useState<string[]>([]);
  const [note, setNote] = useState('');
  const [loading, setLoading] = useState(false);

  const toggleTag = (id: string) => {
    setTags((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));
  };

  const fetchProposal = () => {
    setLoading(true);
    onLogReason(tags, note);
    // Simulate AI thinking
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 1400);
  };

  return (
    <div className="absolute inset-0 z-50 flex items-end justify-center bg-black/40 rounded-[35px] overflow-hidden">
      <div className="w-full rounded-t-3xl bg-bg animate-slide-up" style={{ maxHeight: '92%' }}>
        <div className="mx-auto my-2.5 h-1 w-10 rounded-full bg-text-faint/40" />

        <div className="flex items-center justify-between px-4 pb-1 pt-2">
          <h3 className="font-serif text-base font-bold text-ink">Let's recalibrate</h3>
          <button onClick={onClose} className="flex h-7 w-7 items-center justify-center rounded-full bg-card-muted">
            <X size={12} />
          </button>
        </div>

        <div className="overflow-y-auto px-4 pb-6" style={{ maxHeight: 'calc(92vh - 60px)' }}>
          {step === 0 && (
            <div className="animate-fade-in">
              <div className="mb-3 flex items-start gap-2 rounded-xl bg-accent-soft p-3">
                <Shield size={14} className="text-accent shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-bold text-accent">This isn't failure.</div>
                  <div className="mt-0.5 text-[10px] leading-snug text-ink">
                    <strong>"{task.name}"</strong> got missed twice. That's a <strong>signal</strong> — the plan
                    needs to flex around your reality, not the other way around.
                  </div>
                </div>
              </div>

              <div className="text-[9px] font-bold uppercase tracking-[1.5px] text-text-muted mb-1.5">
                What's been getting in the way?
              </div>
              <div className="grid grid-cols-2 gap-1.5 mb-3">
                {REASON_TAGS.map((t) => {
                  const selected = tags.includes(t.id);
                  return (
                    <button
                      key={t.id}
                      onClick={() => toggleTag(t.id)}
                      className={`flex items-center gap-1.5 rounded-lg border border-default px-2 py-2 text-left ${selected ? 'bg-ink' : 'bg-card'}`}
                    >
                      <span className="text-[12px]">{t.icon}</span>
                      <span className={`text-[10px] font-semibold ${selected ? 'text-white' : 'text-ink'}`}>
                        {t.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => setStep(1)}
                disabled={tags.length === 0}
                className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-accent px-4 py-3 text-[12px] font-bold text-white disabled:opacity-40"
              >
                Continue
                <ArrowRight size={13} />
              </button>
            </div>
          )}

          {step === 1 && (
            <div className="animate-fade-in">
              <div className="text-[9px] font-bold uppercase tracking-[1.5px] text-text-muted mb-1.5">
                Anything else? (optional)
              </div>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="What was actually happening?"
                rows={4}
                className="w-full rounded-xl border border-default bg-card p-2.5 text-[11px] outline-none placeholder:text-text-faint"
              />

              <button
                onClick={fetchProposal}
                disabled={loading}
                className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl bg-accent px-4 py-3 text-[12px] font-bold text-white disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 size={13} className="animate-spin" />
                    Thinking...
                  </>
                ) : (
                  <>
                    Get proposal
                    <Sparkles size={13} />
                  </>
                )}
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in">
              <div className="mb-2 flex items-center gap-1.5">
                <span className="text-base">⚖️</span>
                <span className="text-[9px] font-bold uppercase tracking-[0.5px] text-text-muted">Balanced Coach</span>
              </div>

              <div className="mb-2.5 rounded-xl border border-default bg-card p-3">
                <p className="text-[11px] leading-relaxed text-ink">{STRIKE_PROPOSAL.message}</p>
              </div>

              <div className="mb-3 rounded-xl bg-accent-soft p-3">
                <div className="text-[9px] font-bold uppercase tracking-[1px] text-accent mb-1.5">
                  Proposed change
                </div>
                <div className="text-[10px] text-ink mb-0.5">
                  <strong>New name:</strong> {STRIKE_PROPOSAL.changes.name}
                </div>
                <div className="text-[10px] text-ink mb-0.5">
                  <strong>Frequency:</strong> {formatFrequency(STRIKE_PROPOSAL.changes.frequency)}
                </div>
                <div className="text-[10px] text-ink">
                  <strong>Duration:</strong> {STRIKE_PROPOSAL.changes.duration}
                </div>
                <div className="mt-2 text-[9px] italic text-text-muted">{STRIKE_PROPOSAL.rationale}</div>
              </div>

              <button
                onClick={onApply}
                className="mb-1.5 flex w-full items-center justify-center gap-1.5 rounded-xl bg-accent px-4 py-3 text-[12px] font-bold text-white"
              >
                <Check size={13} />
                Accept change
              </button>
              <button
                onClick={onClose}
                className="w-full rounded-xl border border-default bg-transparent px-4 py-2.5 text-[10px] font-semibold text-text-muted"
              >
                Not now
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
