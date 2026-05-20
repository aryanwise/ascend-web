'use client';

import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PhoneFrameProps {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
}

export default function PhoneFrame({ children, className, tilt = false }: PhoneFrameProps) {
  return (
    <div
      className={cn(
        'relative mx-auto rounded-[42px] bg-[#1A1815] p-2 transition-transform duration-500',
        tilt && 'lg:[transform:perspective(1200px)_rotateY(-8deg)_rotateX(3deg)] lg:hover:[transform:perspective(1200px)_rotateY(-4deg)_rotateX(1deg)]',
        className
      )}
      style={{
        maxWidth: '320px',
        boxShadow: '0 30px 80px -20px rgba(0,0,0,0.35), 0 0 0 1px rgba(0,0,0,0.4)',
      }}
    >
      <div className="relative overflow-hidden rounded-[35px] bg-bg px-[18px] pb-[18px] pt-8" style={{ minHeight: 580 }}>
        {/* Notch */}
        <div className="absolute left-1/2 top-2 z-10 h-[26px] w-[90px] -translate-x-1/2 rounded-[18px] bg-black" />
        <div className="relative pt-2">{children}</div>
      </div>
    </div>
  );
}
