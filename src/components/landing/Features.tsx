export default function Features() {
  const features = [
    { icon: '🎯', bg: '#FFE9DD', title: 'Multi-Area Goals', desc: 'Track fitness, study, career, mind, money, health — 9 life areas. One goal per area to protect focus.' },
    { icon: '📋', bg: '#E3E7F4', title: 'Daily Priorities', desc: 'Pin 1-3 things that must happen today. Separate from goal tasks. The rest is bonus.' },
    { icon: '💬', bg: '#D9F0E5', title: 'Coach Chat', desc: 'Talk to an AI that knows your goals, your reflections, and your patterns. No generic motivational fluff.' },
    { icon: '📊', bg: '#F8E6CB', title: 'Insights Dashboard', desc: 'See goal health, the top reasons things slip, your strongest days of the week. Data that actually helps.' },
    { icon: '🔋', bg: '#FFE9DD', title: 'Energy Check-In', desc: 'Log your energy each day. The AI day planner uses it to schedule heavy work when you\'re sharpest.' },
    { icon: '⏸️', bg: '#E3E7F4', title: 'Guilt-Free Pause', desc: 'Life happens. Pause a goal for a week without resetting progress. Resume when you\'re ready.' },
  ];

  return (
    <section id="features" className="bg-bg-deep py-[120px] sm:py-20">
      <div className="container">
        <div className="section-label">What's inside</div>
        <h2 className="section-title">Built for people who plan ambitiously and live messily.</h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-default bg-card p-7 transition-all hover:-translate-y-1 hover:border-accent"
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl text-2xl mb-4"
                style={{ background: f.bg }}
              >
                {f.icon}
              </div>
              <h3 className="font-serif text-[22px] font-bold mb-2.5 tracking-tight">{f.title}</h3>
              <p className="text-sm leading-[1.6] text-text-muted">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
