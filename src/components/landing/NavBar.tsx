'use client';

export default function NavBar() {
  return (
    <nav
      className="fixed left-0 right-0 top-0 z-50 border-b py-4"
      style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', background: 'rgba(248, 245, 239, 0.85)' }}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 no-underline">
          <span
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent font-serif text-base font-bold text-white transition-transform hover:scale-105"
            style={{ boxShadow: '0 8px 20px rgba(232, 93, 31, 0.18)' }}
          >
            A
          </span>
          <span className="text-base font-bold tracking-wide text-ink">ASCEND</span>
        </a>

        <div className="flex items-center gap-7">
          <a href="#how" className="hidden text-[13px] font-medium text-text-muted hover:text-ink md:block">
            How it works
          </a>
          <a href="#features" className="hidden text-[13px] font-medium text-text-muted hover:text-ink md:block">
            Features
          </a>
          <a href="#demo" className="hidden text-[13px] font-medium text-text-muted hover:text-ink md:block">
            Try demo
          </a>
          <a
            href="#waitlist"
            className="rounded-xl bg-ink px-4 py-2 text-xs font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Join waitlist
          </a>
        </div>
      </div>
    </nav>
  );
}
