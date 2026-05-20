export default function HowItWorks() {
  return (
    <section id="how" className="py-[100px] sm:py-16">
      <div className="container">
        <div className="section-label">How it works</div>
        <h2 className="section-title">The plan flexes around you. Not the other way around.</h2>
        <p className="section-subtitle">
          Ascend treats failure as a signal, not a verdict. Five behaviors make it different from anything else you've
          tried.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Featured */}
          <div
            className="md:col-span-2 rounded-3xl p-8 sm:p-10 relative overflow-hidden transition-all hover:-translate-y-1"
            style={{
              background: 'linear-gradient(135deg, #FFE9DD 0%, #FFD9C2 100%)',
            }}
          >
            <div className="font-mono text-[13px] text-text-faint tracking-[1.5px] mb-4">PRINCIPLE 01</div>
            <h3 className="font-serif font-bold mb-3 text-accent-deep" style={{ fontSize: 'clamp(24px, 3vw, 36px)', letterSpacing: '-0.5px', lineHeight: 1.15 }}>
              The Two-Strike Rule
            </h3>
            <p className="leading-[1.55] mb-5" style={{ color: '#B33E0E', opacity: 0.85, fontSize: 15 }}>
              Miss the same task twice in a row? The AI stops the schedule and asks <em>why</em>. Then it proposes a
              real change — modify the task, pause the goal, or remove it entirely. No guilt. No retry. Just
              recalibration.
            </p>
            <div
              className="font-mono text-xs rounded-xl p-3.5 leading-relaxed"
              style={{ background: 'rgba(255,255,255,0.5)', color: '#B33E0E', borderLeft: '3px solid #D9531E' }}
            >
              → Day 1: Skipped morning workout
              <br />
              → Day 2: Skipped again
              <br />
              → Ascend: "Mornings aren't working. Want to try evenings, or pause this for the week?"
            </div>
          </div>

          {/* Regular cards */}
          <HowCard
            num="02"
            title="Honest Reasons"
            desc={`When you miss a task, tap "Couldn't?" Pick from real reasons — too tired, unexpected work, body said no. The AI builds a memory of why your plans actually break.`}
          />
          <HowCard
            num="03"
            title="Adaptive Voice"
            desc="Choose Drill Sergeant, Strategist, or Balanced. The AI's tone shifts everywhere — coaching, interventions, goal planning. It speaks the way you need to be spoken to."
          />
          <HowCard
            num="04"
            title="AI Goal Planning"
            desc="Tell Ascend what you want. It asks 5 sharp questions about your real constraints — health, time, past failures. Then builds a plan that fits your life, not a generic template."
          />
          <HowCard
            num="05"
            title="Facing a Problem?"
            desc="Stuck? Pick from 8 common blockers — procrastination, burnout, focus, overwhelm. Get a reframe + 3 micro-actions you can do today + a system change to try."
          />
        </div>
      </div>
    </section>
  );
}

function HowCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-default bg-card p-7 sm:p-8 transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className="font-mono text-[13px] text-text-faint tracking-[1.5px] mb-4">PRINCIPLE {num}</div>
      <h3 className="font-serif text-[26px] sm:text-[28px] font-bold leading-tight tracking-tight mb-3">{title}</h3>
      <p className="text-[15px] text-text-muted leading-[1.55]">{desc}</p>
    </div>
  );
}
