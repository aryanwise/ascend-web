'use client';

import { AREAS } from '@/data/areas';
import type { AreaId } from '@/types';
import { ArrowRight } from 'lucide-react';

interface PickAreaScreenProps {
  selectedArea: AreaId | null;
  onPick: (area: AreaId) => void;
  onContinue: () => void;
}

export default function PickAreaScreen({ selectedArea, onPick, onContinue }: PickAreaScreenProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="mb-3">
        <div className="text-[10px] font-bold uppercase tracking-[1.5px] text-text-muted">Step 1 of 4</div>
        <h2 className="mt-1 font-serif text-xl font-bold tracking-tight text-ink">Pick a life area</h2>
        <p className="mt-1 text-[11px] text-text-muted">One goal per area keeps focus.</p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {AREAS.map((a) => {
          const selected = selectedArea === a.id;
          return (
            <button
              key={a.id}
              onClick={() => onPick(a.id)}
              className="flex items-center gap-2 rounded-xl border px-2.5 py-2.5 text-left transition-all"
              style={{
                background: selected ? a.soft : '#FFFFFF',
                borderColor: selected ? a.color : 'rgba(26, 24, 21, 0.08)',
                borderWidth: selected ? 2 : 1,
              }}
            >
              <span className="text-base">{a.emoji}</span>
              <span className="text-[11px] font-semibold" style={{ color: selected ? a.color : '#1A1815' }}>
                {a.label}
              </span>
            </button>
          );
        })}
      </div>

      <button
        onClick={onContinue}
        disabled={!selectedArea}
        className="mt-4 flex items-center justify-center gap-1.5 rounded-xl bg-accent px-4 py-3 text-xs font-bold text-white transition-opacity disabled:opacity-40"
      >
        Continue
        <ArrowRight size={14} />
      </button>
    </div>
  );
}
