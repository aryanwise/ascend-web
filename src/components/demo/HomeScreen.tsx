'use client';

import { useState } from 'react';
import { Flame, Plus, CheckCircle2, Circle, X, AlertCircle, ChevronRight, MessageCircle } from 'lucide-react';
import type { Goal, Priority } from '@/types';
import { areaById } from '@/data/areas';
import { todayStr } from '@/lib/utils';

interface HomeScreenProps {
  goal: Goal;
  priorities: Priority[];
  completions: Record<string, string[]>;
  taskWithStrike: string | null;
  strikeProcessed: boolean;
  onAddPriority: (text: string) => void;
  onTogglePriority: (id: string) => void;
  onRemovePriority: (id: string) => void;
  onToggleTask: (taskId: string, date: string) => void;
  onOpenStrike: () => void;
  onOpenCoach: () => void;
}

export default function HomeScreen({
  goal,
  priorities,
  completions,
  taskWithStrike,
  strikeProcessed,
  onAddPriority,
  onTogglePriority,
  onRemovePriority,
  onToggleTask,
  onOpenStrike,
  onOpenCoach,
}: HomeScreenProps) {
  const [newPriority, setNewPriority] = useState('');
  const today = todayStr();
  const a = areaById(goal.area);

  const todaysTasks = goal.plan.dailyTasks.map((t) => ({
    task: t,
    done: (completions[t.id] ?? []).includes(today),
  }));

  const doneCount = todaysTasks.filter((t) => t.done).length;
  const strikeTask = taskWithStrike && !strikeProcessed
    ? goal.plan.dailyTasks.find((t) => t.id === taskWithStrike)
    : null;

  const handleAdd = () => {
    if (!newPriority.trim()) return;
    onAddPriority(newPriority.trim());
    setNewPriority('');
  };

  return (
    <div className="flex flex-col gap-3 pb-3" style={{ minHeight: 540 }}>
      {/* Greeting */}
      <div>
        <div className="text-[10px] text-text-muted">Good morning</div>
        <h1 className="font-serif text-[22px] font-bold tracking-tight text-ink">Recalibrate.</h1>
      </div>

      {/* Strike alert */}
      {strikeTask && (
        <button
          onClick={onOpenStrike}
          className="flex items-center gap-2.5 rounded-2xl border-2 border-accent bg-white p-2.5 text-left animate-pulse-border"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
            <AlertCircle size={14} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[9px] font-bold uppercase tracking-[0.5px] text-accent">
              Let's recalibrate · 2 misses
            </div>
            <div className="text-[11px] font-semibold text-ink mt-0.5 truncate">{strikeTask.name}</div>
          </div>
          <ChevronRight size={12} className="text-accent" />
        </button>
      )}

      {/* Streak */}
      <div className="flex items-center justify-between rounded-2xl bg-ink p-3 text-white">
        <div>
          <div className="text-[9px] font-bold uppercase tracking-[1.5px] opacity-50">Streak</div>
          <div className="mt-0.5 flex items-baseline">
            <span className="font-serif text-2xl font-bold">{doneCount > 0 ? '1' : '0'}</span>
            <span className="ml-1 text-[10px] opacity-50">day</span>
          </div>
          <div className="text-[10px] opacity-50">
            {doneCount} of {todaysTasks.length} tasks done
          </div>
        </div>
        <div className="rounded-xl bg-accent p-2">
          <Flame size={18} className="text-white" />
        </div>
      </div>

      {/* Priorities */}
      <div>
        <div className="text-[9px] font-bold uppercase tracking-[1.5px] text-text-muted mb-1.5">
          Today's Priorities
        </div>
        <div className="rounded-xl border border-default bg-card p-2.5">
          <div className="flex gap-1.5">
            <input
              value={newPriority}
              onChange={(e) => setNewPriority(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
              placeholder="What MUST happen today?"
              className="flex-1 rounded-lg bg-card-muted px-2.5 py-1.5 text-[11px] outline-none placeholder:text-text-faint"
            />
            <button
              onClick={handleAdd}
              disabled={!newPriority.trim()}
              className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent disabled:opacity-40"
            >
              <Plus size={12} className="text-white" />
            </button>
          </div>

          {priorities.length === 0 ? (
            <div className="mt-2 text-center text-[10px] italic text-text-faint">
              Pin 1–3 priorities. The rest is bonus.
            </div>
          ) : (
            <div className="mt-2">
              {priorities.map((p, i) => (
                <div
                  key={p.id}
                  className="flex items-center gap-2 py-1.5"
                  style={{ borderTop: i > 0 ? '1px solid rgba(26, 24, 21, 0.06)' : 'none' }}
                >
                  <button onClick={() => onTogglePriority(p.id)}>
                    {p.done ? (
                      <CheckCircle2 size={16} className="text-accent" fill="#FFE9DD" />
                    ) : (
                      <Circle size={16} className="text-text-faint" />
                    )}
                  </button>
                  <div
                    className="rounded px-1 py-0.5 text-[8px] font-bold text-white"
                    style={{ background: i === 0 ? '#D9531E' : i === 1 ? '#B8721C' : '#A8A095' }}
                  >
                    P{i + 1}
                  </div>
                  <div
                    className={`flex-1 text-[11px] font-medium ${p.done ? 'text-text-muted line-through' : 'text-ink'}`}
                  >
                    {p.text}
                  </div>
                  <button onClick={() => onRemovePriority(p.id)} className="p-1 opacity-40">
                    <X size={11} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Today's tasks */}
      <div>
        <div className="text-[9px] font-bold uppercase tracking-[1.5px] text-text-muted mb-1.5">
          Today's tasks
        </div>
        <div className="overflow-hidden rounded-xl border border-default bg-card">
          {todaysTasks.map(({ task, done }, i) => (
            <button
              key={task.id}
              onClick={() => onToggleTask(task.id, today)}
              className="flex w-full items-center gap-2 px-2.5 py-2 text-left"
              style={{ borderTop: i > 0 ? '1px solid rgba(26, 24, 21, 0.06)' : 'none' }}
            >
              {done ? (
                <CheckCircle2 size={16} style={{ color: a.color }} fill={a.soft} />
              ) : (
                <Circle size={16} className="text-text-faint" />
              )}
              <div className="flex-1 min-w-0">
                <div className={`text-[11px] font-semibold ${done ? 'text-text-muted line-through' : 'text-ink'}`}>
                  {task.name}
                  {task.intervened && (
                    <span className="ml-1 text-[8px] font-bold text-success">· ADAPTED</span>
                  )}
                </div>
                <div className="flex items-center gap-1 text-[8px] text-text-faint">
                  <span className="rounded px-1 font-bold" style={{ background: a.soft, color: a.color }}>
                    {a.label}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Coach button */}
      <button
        onClick={onOpenCoach}
        className="mt-1 flex items-center justify-center gap-2 rounded-xl border border-default bg-card-muted px-3 py-2.5 text-[11px] font-semibold text-ink"
      >
        <MessageCircle size={13} className="text-accent" />
        Ask the Coach a question
      </button>
    </div>
  );
}
