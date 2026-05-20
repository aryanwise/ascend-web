'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import DemoContainer from '../demo/DemoContainer';

export default function DemoSection() {
  return (
    <section id="demo" className="py-[120px] sm:py-20 relative overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
          <div>
            <div className="section-label">Try it now</div>
            <h2 className="section-title">See the loop in your hand.</h2>
            <p className="section-subtitle">
              No signup. No data saved. Walk through real goal creation, a missed task, and an AI intervention — exactly
              how the app behaves on your phone.
            </p>

            <div className="bg-accent-soft rounded-2xl p-6 max-w-[520px]">
              <div className="font-mono text-[11px] uppercase tracking-[1.5px] text-accent mb-3 font-bold">
                What you'll experience
              </div>
              <ul className="space-y-2.5 text-sm text-ink">
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">01</span>
                  <span>Pick a life area and describe a real goal</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">02</span>
                  <span>Answer 5 honest questions from the AI coach</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">03</span>
                  <span>Watch your plan get built around your constraints</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold">04</span>
                  <span>Experience the Two-Strike intervention firsthand</span>
                </li>
              </ul>
            </div>

            <Link
              href="/demo"
              className="inline-flex items-center gap-2 mt-8 text-accent font-bold text-sm hover:gap-3 transition-all"
            >
              Open in fullscreen
              <ArrowRight size={14} />
            </Link>
          </div>

          <div>
            <DemoContainer embedded />
          </div>
        </div>
      </div>
    </section>
  );
}
