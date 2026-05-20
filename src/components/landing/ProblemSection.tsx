export default function ProblemSection() {
  return (
    <section className="bg-ink text-white py-[120px] sm:py-20">
      <div className="container">
        <div className="section-label" style={{ color: '#D9531E' }}>
          The shame cycle
        </div>
        <h2 className="section-title" style={{ color: '#fff' }}>
          Every productivity app says the same thing.
        </h2>

        <div
          className="font-serif italic font-medium leading-[1.25] relative max-w-[880px] py-10 pl-14 text-white/90"
          style={{
            fontSize: 'clamp(22px, 4vw, 48px)',
            letterSpacing: '-1px',
            borderLeft: '4px solid #D9531E',
          }}
        >
          <span
            className="absolute font-serif text-accent leading-none"
            style={{ left: 8, top: -10, fontSize: 'clamp(60px, 8vw, 120px)' }}
          >
            "
          </span>
          Try harder. Just be consistent. Build the habit. As if I haven't tried. As if missing the gym twice means I'm
          broken. As if the plan can't be the thing that's wrong.
        </div>

        <div
          className="font-mono text-accent uppercase mt-6"
          style={{ fontSize: 12, letterSpacing: '2px' }}
        >
          — Everyone who's ever deleted Habitica
        </div>
      </div>
    </section>
  );
}
