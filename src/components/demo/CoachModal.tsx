'use client';

import { useEffect, useRef, useState } from 'react';
import { X, Send, Sparkles, Loader2 } from 'lucide-react';
import { COACH_RESPONSES, classifyCoachInput } from '@/data/scripts';
import type { ChatMessage } from '@/types';

interface CoachModalProps {
  chat: ChatMessage[];
  onClose: () => void;
  onAddMessage: (msg: ChatMessage) => void;
}

const SUGGESTIONS = [
  "What pattern do you see in my misses?",
  "I'm too tired to do anything today.",
  "How do I stay motivated?",
];

export default function CoachModal({ chat, onClose, onAddMessage }: CoachModalProps) {
  const [input, setInput] = useState('');
  const [thinking, setThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chat, thinking]);

  const sendMessage = (text: string) => {
    if (!text.trim() || thinking) return;
    onAddMessage({ role: 'user', content: text.trim() });
    setInput('');
    setThinking(true);

    setTimeout(() => {
      const intent = classifyCoachInput(text);
      onAddMessage({ role: 'assistant', content: COACH_RESPONSES[intent] });
      setThinking(false);
    }, 1100);
  };

  return (
    <div className="absolute inset-0 z-50 flex items-end justify-center bg-black/40 rounded-[35px] overflow-hidden">
      <div className="w-full rounded-t-3xl bg-bg animate-slide-up flex flex-col" style={{ maxHeight: '92%', minHeight: '60%' }}>
        <div className="mx-auto my-2.5 h-1 w-10 rounded-full bg-text-faint/40" />

        <div className="flex items-center gap-2 px-4 pb-2 pt-1 border-b border-default">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
            <Sparkles size={14} className="text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-serif text-base font-bold text-ink leading-none">Coach</h3>
            <div className="text-[9px] text-text-muted mt-0.5">⚖️ Balanced</div>
          </div>
          <button onClick={onClose} className="flex h-7 w-7 items-center justify-center rounded-full bg-card-muted">
            <X size={12} />
          </button>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3">
          {chat.length === 0 && (
            <div>
              <div className="text-[10px] text-text-muted mb-2">Try asking:</div>
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => sendMessage(s)}
                  className="mb-1.5 w-full rounded-lg border border-default bg-card p-2 text-left text-[11px] text-ink hover:border-accent transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {chat.map((m, i) => (
            <div
              key={i}
              className={`mb-2 flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-3 py-2 text-[11px] leading-snug ${
                  m.role === 'user' ? 'bg-ink text-white' : 'border border-default bg-card text-ink'
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}

          {thinking && (
            <div className="flex items-center gap-2 py-2 text-[10px] text-text-muted">
              <Loader2 size={11} className="animate-spin" />
              Thinking...
            </div>
          )}
        </div>

        <div className="flex gap-1.5 border-t border-default p-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
            placeholder="Be honest. Ask anything."
            disabled={thinking}
            className="flex-1 rounded-full border border-default bg-card px-3 py-2 text-[11px] outline-none disabled:opacity-50"
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || thinking}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-accent disabled:opacity-40"
          >
            <Send size={12} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
