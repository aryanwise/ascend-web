export default function Footer() {
  return (
    <footer className="border-t border-default py-12 sm:py-16">
      <div className="container flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div className="text-sm text-text-muted">© 2026 Ascend · Built with care, not shame.</div>
        <div className="flex gap-6 flex-wrap">
          <a
            href="mailto:aryanmishraa12@gmail.com"
            className="text-sm font-medium text-text-muted hover:text-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
          <a href="#how" className="text-sm font-medium text-text-muted hover:text-accent">
            How it works
          </a>
          <a href="#demo" className="text-sm font-medium text-text-muted hover:text-accent">
            Try demo
          </a>
          {/* <a href="#waitlist" className="text-sm font-medium text-text-muted hover:text-accent">
            Waitlist
          </a> */}
        </div>
      </div>
    </footer>
  );
}
