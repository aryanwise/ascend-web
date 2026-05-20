import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ascend — A Cognitive Partner, Not Another Tracker',
  description:
    'Ascend is an AI that learns why you slip, then re-engineers your goals into something realistic. The end of the shame cycle.',
  openGraph: {
    title: 'Ascend — A Cognitive Partner, Not Another Tracker',
    description: 'An AI that learns why you slip, then re-engineers your goals into something realistic.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700;9..144,800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
