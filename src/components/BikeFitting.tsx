import React from 'react';
import { Clock, Check, Video, Activity, FileSpreadsheet, ArrowRight } from 'lucide-react';
import { BIKE_FITTING_LEVELS, FitLevel } from '../data/workshopData';

interface BikeFittingProps {
  onBookFit?: (fitName: string) => void;
}

export const BikeFitting: React.FC<BikeFittingProps> = ({ onBookFit }) => {
  return (
    <section id="fitting" className="py-20 bg-[var(--background)] relative">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[var(--border)] pb-8">
          <div>
            <div className="eyebrow mb-2">ERGINOMICS & PAIN RESOLUTION · IN-WORKSHOP STUDIO</div>
            <h2 className="font-h2 text-white">BIKE FITTING SESSIONS</h2>
          </div>
          <p className="text-sm sm:text-base text-[var(--muted-foreground)] max-w-md mt-4 md:mt-0">
            A fast bike that hurts your back or numbs your fingers is a slow bike. We adjust your contact points using anatomical measurement and motion capture.
          </p>
        </div>

        {/* 2 Fit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {BIKE_FITTING_LEVELS.map((fit: FitLevel) => (
            <div
              key={fit.id}
              className="bg-[var(--card)] border border-[var(--border)] hover:border-[var(--steel)] p-6 sm:p-8 flex flex-col justify-between transition-all group h-full"
            >
              <div className="flex-1 flex flex-col">
                {/* Top header */}
                <div className="flex items-start justify-between mb-4 border-b border-[var(--border)] pb-4">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[var(--primary)]">
                      {fit.duration}
                    </span>
                    <h3 className="font-h3 text-3xl text-white uppercase mt-1">
                      {fit.name}
                    </h3>
                  </div>
                  <div className="price-num text-4xl font-bold text-white">
                    £{fit.price}
                  </div>
                </div>

                <p className="text-sm text-[var(--foreground)]/90 font-light mb-6 md:min-h-[72px]">
                  {fit.description}
                </p>

                {/* Best for */}
                <div className="p-3 bg-[var(--card-elevated)] border border-[var(--border)] mb-6 text-xs text-[var(--muted-foreground)] font-mono md:min-h-[64px] flex items-center">
                  <div>
                    <span className="text-[var(--primary)] font-bold uppercase">Best For: </span>
                    {fit.bestFor}
                  </div>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-3 mb-8 flex-1">
                  <span className="text-xs font-mono uppercase tracking-widest text-[var(--muted-foreground)] block">
                    What is measured & adjusted:
                  </span>
                  {fit.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-[var(--foreground)]">
                      <div className="w-5 h-5 bg-[var(--primary)]/10 border border-[var(--primary)] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[var(--primary)]" />
                      </div>
                      <span className="text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-auto pt-2">
                <button
                  onClick={() => onBookFit?.(fit.name)}
                  className="w-full min-h-[52px] sm:min-h-[56px] px-4 py-3.5 bg-[var(--card-elevated)] group-hover:bg-[var(--primary)] text-white group-hover:text-black border border-[var(--border)] group-hover:border-[var(--primary)] font-display text-base sm:text-lg font-bold uppercase tracking-normal sm:tracking-wider transition-all flex items-center justify-center gap-2 text-center"
                >
                  <Clock className="w-4 h-4 shrink-0" />
                  <span className="truncate sm:overflow-visible">Book {fit.name} ({fit.duration})</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
