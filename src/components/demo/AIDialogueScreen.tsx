'use client';

import { useEffect, useRef, useState } from 'react';
import { Send, Sparkles, Loader2 } from 'lucide-react';
import { DIALOGUE_SCRIPTS, PLAN_TEMPLATES } from '@/data/scripts';
import type { AreaId, DialogueMessage, Goal } from '@/types';

interface AIDialogueScreenProps {
  area: AreaId;
  goalText: string;
  messages: DialogueMessage[];
  currentAnswer: string;
  onAnswerChange: (value: string) => void;
  onAddMessage: (msg: DialogueMessage) => void;
  onAdvance: () => void;
  onPlanReady: (goal: Goal) => void;
  dialogueIndex: number;
}

export default function AIDialogueScreen({
  area,
  goalText,
  messages,
  currentAnswer,
  onAnswerChange,
  onAddMessage,
  onAdvance,
  onPlanReady,
  dialogueIndex,
}: AIDialogueScreenProps) {
  const [thinking, setThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const questions = DIALOGUE_SCRIPTS[area];

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, thinking]);

  // Add first question on mount
  useEffect(() => {
    if (messages.length === 0) {
      setThinking(true);
      const t = setTimeout(() => {
        onAddMessage({ role: 'assistant', content: questions[0] });
        setThinking(false);
      }, 800);
      return () => clearTimeout(t);
    }
  }, []);

  const handleSubmit = () => {
    if (!currentAnswer.trim() || thinking) return;

    onAddMessage({ role: 'user', content: currentAnswer.trim() });
    onAdvance();
    setThinking(true);

    const nextIndex = dialogueIndex + 1;

    setTimeout(() => {
      if (nextIndex < questions.length) {
        // Ask next question
        onAddMessage({ role: 'assistant', content: questions[nextIndex] });
      } else {
        // Generate plan
        const plan = PLAN_TEMPLATES[area];
        const goal: Goal = {
          id: `goal-${Date.now()}`,
          area,
          title: plan.title,
          plan,
          createdAt: new Date().toISOString(),
        };
        onPlanReady(goal);
      }
      setThinking(false);
    }, 1200);
  };

  const userAnswerCount = messages.filter((m) => m.role === 'user').length;

  return (
    <div className="flex flex-col h-full" style={{ minHeight: 540 }}>
      <div className="mb-3">
        <div className="text-[10px] font-bold uppercase tracking-[1.5px] text-text-muted">Step 3 of 4</div>
        <h2 className="mt-1 font-serif text-xl font-bold tracking-tight text-ink">Honest dialogue</h2>
      </div>

      <div className="mb-3 flex items-center justify-center gap-1.5 rounded-lg bg-accent-soft px-3 py-2">
        <Sparkles size={11} className="text-accent" />
        <span className="text-[10px] font-semibold text-accent">
          Question {Math.min(userAnswerCount + 1, 5)} of 5
        </span>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto pr-1" style={{ maxHeight: 320 }}>
        {messages.map((m, i) => (
          <div
            key={i}
            className={`mb-2 flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-3 py-2 text-[12px] leading-snug ${
                m.role === 'user' ? 'bg-ink text-white' : 'border border-default bg-card text-ink'
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}
        {thinking && (
          <div className="flex items-center gap-2 px-3 py-2 text-[11px] text-text-muted">
            <Loader2 size={12} className="animate-spin" />
            {userAnswerCount >= 4 ? 'Building your plan...' : 'Thinking...'}
          </div>
        )}
      </div>

      <div className="mt-3 flex gap-2">
        <input
          value={currentAnswer}
          onChange={(e) => onAnswerChange(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          placeholder="Your honest answer..."
          disabled={thinking}
          className="flex-1 rounded-full border border-default bg-card px-3 py-2 text-[12px] outline-none disabled:opacity-50"
        />
        <button
          onClick={handleSubmit}
          disabled={!currentAnswer.trim() || thinking}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-accent disabled:opacity-40"
        >
          <Send size={13} className="text-white" />
        </button>
      </div>
    </div>
  );
}
