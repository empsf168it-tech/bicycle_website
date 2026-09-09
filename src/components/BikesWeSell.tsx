import React from 'react';
import { ArrowUpRight, CheckCircle2, Shield } from 'lucide-react';
import { BIKES_WE_SELL, BikeCategory } from '../data/workshopData';

interface BikesWeSellProps {
  onInquire?: (category: string) => void;
}

export const BikesWeSell: React.FC<BikesWeSellProps> = ({ onInquire }) => {
  return (
    <section id="bikes" className="py-20 bg-[var(--background)] relative">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[var(--border)] pb-8">
          <div>
            <div className="eyebrow mb-2">CURATED BUILDS · NOT A WAREHOUSE CATALOGUE</div>
            <h2 className="font-h2 text-white">BIKES WE ASSEMBLE & SELL</h2>
          </div>
          <p className="text-sm sm:text-base text-[var(--muted-foreground)] max-w-md mt-4 md:mt-0">
            We don't sell 400 models online that arrive half-assembled in cardboard. Every bike we sell is built, tuned, and fitted on our workshop stands.
          </p>
        </div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BIKES_WE_SELL.map((cat: BikeCategory) => (
            <div
              key={cat.id}
              className="bg-[var(--card)] border border-[var(--border)] hover:border-[var(--steel)] flex flex-col justify-between transition-all duration-200 group"
            >
              {/* Photo Banner with subtle overlay */}
              <div className="relative h-56 overflow-hidden bg-black/40">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500 opacity-80"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] via-transparent to-black/30" />
                
                {/* Price Range Pill */}
                <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm border border-[var(--border)] px-3 py-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--muted-foreground)] block">
                    Typical Range
                  </span>
                  <span className="price-num text-lg font-bold text-[var(--primary)]">
                    {cat.priceRange}
                  </span>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-h3 text-2xl text-white uppercase mb-2 group-hover:text-[var(--primary)] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-[var(--foreground)]/90 font-light leading-relaxed mb-6">
                    {cat.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6 border-t border-[var(--border)]/70 pt-4">
                    {cat.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[var(--foreground)]/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--primary)] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer specs & action */}
                <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between">
                  <div className="text-[11px] font-mono text-[var(--muted-foreground)]">
                    <span className="text-[var(--steel)] font-semibold">Riding: </span>
                    {cat.idealFor}
                  </div>
                </div>
              </div>

              {/* Card Bottom Strip */}
              <div className="px-6 py-3 bg-[var(--card-elevated)] border-t border-[var(--border)] flex items-center justify-between text-xs font-mono text-[var(--foreground)]">
                <span className="flex items-center gap-1.5 text-[var(--muted-foreground)]">
                  <Shield className="w-3.5 h-3.5 text-[var(--primary)]" />
                  Workshop-prepped
                </span>
                <a
                  href="#find-us"
                  className="text-[var(--primary)] font-semibold flex items-center gap-1 group-hover:underline"
                >
                  <span>Test Ride in Yard</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
