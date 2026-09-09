import React from 'react';
import { Clock, Zap, Bike, Activity } from 'lucide-react';
import { QUEUE_DAYS, QUEUE_BIKES_COUNT, SAME_DAY_CUTOFF } from '../data/workshopData';

export const WorkshopStatus: React.FC = () => {
  return (
    <section id="workshop-status" className="bg-[var(--card)] border-b border-[var(--border)] py-4 relative z-20">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Desktop / Tablet Single Line */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs sm:text-sm">
          
          {/* Main Status Items */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[var(--foreground)]">
            {/* Live Indicator */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--primary)]"></span>
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--primary)] font-semibold">
                LIVE WORKSHOP QUEUE
              </span>
            </div>

            {/* Turnaround */}
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[var(--primary)] shrink-0" />
              <span>
                Current turnaround: <strong className="font-display text-base text-white">{QUEUE_DAYS} days</strong>
              </span>
            </div>

            <span className="hidden sm:inline text-[var(--border)]">·</span>

            {/* Same-day info */}
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[var(--primary)] shrink-0" />
              <span>Same-day punctures and brake fixes until <strong>{SAME_DAY_CUTOFF}</strong></span>
            </div>

            <span className="hidden lg:inline text-[var(--border)]">·</span>

            {/* In queue */}
            <div className="flex items-center gap-2">
              <Bike className="w-4 h-4 text-[var(--steel)] shrink-0" />
              <span>
                <strong className="font-display text-base text-white">{QUEUE_BIKES_COUNT} bikes</strong> in the queue today
              </span>
            </div>
          </div>

          {/* Quick status badge */}
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--muted-foreground)] pt-1 md:pt-0 border-t md:border-t-0 border-[var(--border)]/50">
            <Activity className="w-3.5 h-3.5 text-[var(--primary)] animate-pulse" />
            <span>Updated today 08:30 · 3 stands active</span>
          </div>

        </div>
      </div>
    </section>
  );
};
