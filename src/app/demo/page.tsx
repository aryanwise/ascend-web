import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import DemoContainer from '@/components/demo/DemoContainer';

export default function DemoPage() {
  return (
    <main className="min-h-screen">
      <div className="fixed top-4 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-1.5 rounded-full bg-card border border-default px-4 py-2 text-sm font-semibold text-ink hover:bg-card-muted transition-colors"
        >
          <ChevronLeft size={14} />
          Back to site
        </Link>
      </div>

      <DemoContainer />
    </main>
  );
}
