import React from 'react';
import { Wrench, Clock, Phone } from 'lucide-react';
import { QUEUE_DAYS } from '../data/workshopData';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenBooking }) => {
  return (
    <aside aria-label="Quick booking actions" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[var(--card)]/95 backdrop-blur-md border-t-2 border-[var(--primary)] px-4 py-2.5 shadow-2xl flex items-center justify-between gap-3">
      {/* Live turnaround badge */}
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse shrink-0" />
        <div className="text-[11px] font-mono leading-tight">
          <span className="text-[var(--muted-foreground)] block">Turnaround</span>
          <span className="text-white font-bold">{QUEUE_DAYS} working days</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <a
          href="tel:01615550173"
          className="p-2.5 bg-[var(--card-elevated)] border border-[var(--border)] text-[var(--foreground)] hover:text-white"
          aria-label="Call Workshop"
        >
          <Phone className="w-4 h-4 text-[var(--primary)]" />
        </a>

        <button
          onClick={onOpenBooking}
          className="px-5 py-2.5 bg-[var(--primary)] text-[var(--primary-foreground)] font-display text-base font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-[0_0_12px_rgba(203,240,28,0.3)]"
        >
          <Wrench className="w-4 h-4 text-black" />
          <span>Book Service</span>
        </button>
      </div>
    </aside>
  );
};
