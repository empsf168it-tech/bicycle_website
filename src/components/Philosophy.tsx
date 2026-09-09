import React from 'react';
import { PHILOSOPHY_POINTS } from '../data/workshopData';
import { AlertOctagon, Scale, Eye, ThumbsDown } from 'lucide-react';

export const Philosophy: React.FC = () => {
  const icons = [Scale, AlertOctagon, Scale, Eye];

  return (
    <section className="py-20 bg-[var(--card)] border-b border-[var(--border)] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="eyebrow mb-2">OPINIONATED WORKSHOP CODE · NO FLUFF</div>
          <h2 className="font-h2 text-white text-3xl sm:text-4xl md:text-5xl">
            THINGS WE WILL AND WILL NOT DO
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--muted-foreground)] font-light leading-relaxed">
            Most bike shops chase commission and sell accessories you don't need. Here is how we run our workshop stands, every single day.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PHILOSOPHY_POINTS.map((point, index) => {
            const Icon = icons[index] || Scale;
            return (
              <div
                key={point.num}
                className="bg-[var(--card-elevated)] border border-[var(--border)] p-8 relative flex flex-col justify-between hover:border-[var(--primary)]/60 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-[var(--primary)] font-bold">
                      RULE {point.num}
                    </span>
                    <span className="w-2 h-2 bg-[var(--primary)]" />
                  </div>

                  <h3 className="font-h3 text-2xl text-white uppercase mb-3 leading-snug">
                    {point.statement}
                  </h3>

                  <p className="text-sm text-[var(--muted-foreground)] font-light leading-relaxed">
                    {point.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--border)]/70 flex items-center justify-between text-[11px] font-mono text-[var(--steel)]">
                  <span>CYTECH INTEGRITY CODE</span>
                  <span>MANCHESTER M3</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
