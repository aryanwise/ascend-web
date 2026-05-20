'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-[140px] pb-[100px] sm:pt-[100px] sm:pb-10">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent-soft px-3.5 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              <span className="text-[11px] font-bold uppercase tracking-[1.5px] text-accent">
                In active development · v1.0
              </span>
            </div>

            <h1
              className="mb-7 font-serif font-bold text-ink"
              style={{ fontSize: 'clamp(40px, 8vw, 96px)', lineHeight: 0.95, letterSpacing: '-3px' }}
            >
              Not another{' '}
              <span className="relative inline-block text-text-faint">
                tracker
                <span
                  className="absolute left-[-4px] right-[-4px] top-1/2 h-1.5 bg-accent"
                  style={{ transform: 'rotate(-2deg) translateY(-50%)' }}
                />
              </span>
              .
              <br />A <em className="text-accent">cognitive partner</em>.
            </h1>

            <p
              className="mb-10 max-w-[620px] leading-[1.55] text-text-muted"
              style={{ fontSize: 'clamp(17px, 2vw, 21px)' }}
            >
              Ascend is the goal app that doesn't shame you for missing tasks. It learns <em>why</em> you slip — then
              re-engineers your plan to fit your real life, your real energy, your real constraints.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#demo"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-7 py-4 font-bold text-white transition-all hover:-translate-y-0.5"
                style={{ boxShadow: '0 4px 20px rgba(217, 83, 30, 0.3)', fontSize: 15 }}
              >
                Try the demo
                <ArrowRight size={16} />
              </Link>
              <a
                href="#how"
                className="inline-flex items-center justify-center rounded-2xl border-[1.5px] border-strong bg-transparent px-6 py-4 font-semibold text-ink hover:bg-card"
                style={{ fontSize: 15 }}
              >
                See how it works
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <HeroPhone />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroPhone() {
  return (
    <div
      className="relative mx-auto bg-ink rounded-[42px] p-2"
      style={{
        maxWidth: '320px',
        boxShadow: '0 30px 80px -20px rgba(0,0,0,0.35), 0 0 0 1px rgba(0,0,0,0.4)',
        transform: 'perspective(1200px) rotateY(-8deg) rotateX(3deg)',
      }}
    >
      <div className="relative rounded-[35px] bg-bg overflow-hidden px-4 pb-4 pt-8" style={{ minHeight: 580 }}>
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[90px] h-[26px] rounded-[18px] bg-black" />

        <div className="pt-2">
          <div className="text-[11px] text-text-muted mb-1">Good morning</div>
          <h3 className="font-serif text-2xl font-bold text-ink mb-3.5 tracking-tight">Recalibrate.</h3>

          <div className="bg-white border-2 border-accent rounded-2xl p-2.5 mb-3 flex items-center gap-2.5 animate-pulse-border">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white text-sm font-bold">!</div>
            <div className="flex-1">
              <div className="text-[9px] font-bold uppercase tracking-[0.5px] text-accent">
                Let's recalibrate · 2 misses
              </div>
              <div className="text-[11px] font-semibold text-ink mt-0.5">Morning workout</div>
            </div>
            <span className="text-accent text-base">›</span>
          </div>

          <div className="bg-ink text-white rounded-2xl p-3.5 mb-3 flex justify-between items-center">
            <div>
              <div className="text-[9px] font-bold uppercase tracking-[1.5px] opacity-50">STREAK</div>
              <div className="font-serif text-[26px] font-bold mt-1">
                7 <span className="text-xs opacity-50 font-medium">days</span>
              </div>
              <div className="text-[10px] opacity-50 mt-1">3 of 5 tasks done</div>
            </div>
            <div className="bg-accent rounded-xl w-9 h-9 flex items-center justify-center text-lg">🔥</div>
          </div>

          <div className="text-[8px] font-bold uppercase tracking-[1.5px] text-text-muted mt-3.5 mb-2">
            Today's tasks
          </div>
          <div className="bg-card rounded-xl border border-default p-2.5 space-y-2">
            <TaskRow done name="Practice Python logic" badge="Study" badgeColor="#3D4D8A" badgeSoft="#E3E7F4" />
            <TaskRow name="Drink 2L water" badge="Fitness" badgeColor="#1B7A5C" badgeSoft="#D9F0E5" />
            <TaskRow name="Active study breaks" badge="Study" badgeColor="#3D4D8A" badgeSoft="#E3E7F4" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TaskRow({ done = false, name, badge, badgeColor, badgeSoft }: { done?: boolean; name: string; badge: string; badgeColor: string; badgeSoft: string }) {
  return (
    <div className="flex items-center gap-2.5 pb-2" style={{ borderBottom: '1px solid rgba(26, 24, 21, 0.05)' }}>
      <div
        className={`w-[18px] h-[18px] rounded-full ${done ? 'bg-success' : 'border-[1.5px]'} relative`}
        style={done ? {} : { borderColor: '#A8A095' }}
      >
        {done && <span className="absolute inset-0 flex items-center justify-center text-white text-[11px]">✓</span>}
      </div>
      <div className="flex-1">
        <div className={`text-[11px] font-semibold ${done ? 'text-text-muted line-through' : 'text-ink'}`}>{name}</div>
        <div className="mt-0.5">
          <span
            className="text-[8px] font-bold px-1 py-0.5 rounded"
            style={{ background: badgeSoft, color: badgeColor }}
          >
            {badge}
          </span>
        </div>
      </div>
    </div>
  );
}
