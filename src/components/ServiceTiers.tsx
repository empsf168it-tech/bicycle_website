import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Clock, Wrench, ShieldCheck, ArrowRight, Info } from 'lucide-react';
import { SERVICE_TIERS, QUEUE_DAYS } from '../data/workshopData';

interface ServiceTiersProps {
  onSelectTierForBooking: (tierId: string) => void;
}

export const ServiceTiers: React.FC<ServiceTiersProps> = ({ onSelectTierForBooking }) => {
  const [sel, setSel] = useState<string>('minor');
  const t = SERVICE_TIERS.find((x) => x.id === sel) || SERVICE_TIERS[1];
  const turnaroundDays = QUEUE_DAYS + Math.ceil(t.hours / 6);

  return (
    <section id="services" className="py-20 bg-[var(--background)] relative">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[var(--border)] pb-8">
          <div>
            <div className="eyebrow mb-2">WORKSHOP TIERS · LIVE QUEUE COMPUTED</div>
            <h2 className="font-h2 text-white">SERVICE PACKAGES & REAL TURNAROUND</h2>
          </div>
          <p className="text-sm sm:text-base text-[var(--muted-foreground)] max-w-md mt-4 md:mt-0">
            Select a tier to inspect bench tasks and real-time completion estimates calculated directly from our current workshop load.
          </p>
        </div>

        {/* Tier Cards Grid (Horizontally scrollable on small mobile, 2x2 tablet, 4-col desktop) */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto pb-4 md:pb-0 scrollbar-none snap-x">
          {SERVICE_TIERS.map((tier) => {
            const isSelected = tier.id === sel;
            const cardTurnaround = QUEUE_DAYS + Math.ceil(tier.hours / 6);

            return (
              <div
                key={tier.id}
                onClick={() => setSel(tier.id)}
                className={`flex-shrink-0 w-[280px] md:w-auto snap-center cursor-pointer transition-all duration-200 p-6 flex flex-col justify-between relative ${
                  isSelected
                    ? 'bg-[var(--card-elevated)] border-2 border-[var(--primary)] -translate-y-[3px] shadow-[0_10px_25px_rgba(0,0,0,0.5)]'
                    : 'bg-[var(--card)] border border-[var(--border)] hover:border-[var(--steel)] opacity-85 hover:opacity-100'
                }`}
                style={{
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted-foreground)]">
                    {tier.durationLabel}
                  </span>
                  {tier.badge && (
                    <span className="px-2 py-0.5 bg-[var(--primary)]/15 border border-[var(--primary)] text-[var(--primary)] text-[10px] font-mono uppercase font-bold tracking-wider">
                      {tier.badge}
                    </span>
                  )}
                </div>

                {/* Tier Name & Price */}
                <div>
                  <h3 className="font-h3 text-2xl text-white uppercase mb-1">
                    {tier.name}
                  </h3>
                  <div className="price-num text-3xl font-bold text-white flex items-baseline gap-1">
                    <span>£{tier.price}</span>
                    {tier.id === 'custom' && <span className="text-sm font-sans font-normal text-[var(--muted-foreground)]">from</span>}
                  </div>
                </div>

                {/* Turnaround Pill */}
                <div className="mt-4 pt-4 border-t border-[var(--border)]/60 flex items-center justify-between text-xs">
                  <span className="text-[var(--muted-foreground)]">Turnaround:</span>
                  <span className={`font-mono font-bold ${isSelected ? 'text-[var(--primary)]' : 'text-white'}`}>
                    ~{cardTurnaround} days
                  </span>
                </div>

                {/* Selection state marker */}
                {isSelected && (
                  <div className="absolute -top-[2px] -right-[2px] w-0 h-0 border-t-[14px] border-t-[var(--primary)] border-l-[14px] border-l-transparent" />
                )}
              </div>
            );
          })}
        </div>

        {/* Selected Tier Inspection Detail Panel */}
        <div className="mt-8 bg-[var(--card)] border border-[var(--border)] p-6 sm:p-8 relative overflow-hidden">
          {/* Subtle grid accent */}
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <Wrench className="w-48 h-48 text-[var(--primary)]" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 7 cols: Included Checklist swapped with AnimatePresence (0.25s) */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[var(--primary)]">
                  INCLUDED IN BENCH SERVICE
                </span>
                <span className="text-[var(--border)]">|</span>
                <span className="text-xs text-[var(--muted-foreground)]">
                  {t.recommendedFor}
                </span>
              </div>

              <h3 className="font-h2 text-3xl text-white uppercase mb-3">
                {t.name} Detail
              </h3>
              
              <p className="text-sm sm:text-base text-[var(--foreground)]/90 mb-6 font-light">
                {t.description}
              </p>

              <AnimatePresence mode="wait">
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25, ease: 'linear' }}
                  className="space-y-3"
                >
                  {t.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-sm text-[var(--foreground)] bg-[var(--card-elevated)]/50 border border-[var(--border)]/70 p-3"
                    >
                      <div className="w-5 h-5 rounded-none bg-[var(--primary)]/10 border border-[var(--primary)] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[var(--primary)]" />
                      </div>
                      <span className="font-medium text-white/95">{item}</span>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right 5 cols: Live Price & Turnaround Readout Box */}
            <div className="lg:col-span-5 bg-[var(--card-elevated)] border border-[var(--border)] p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted-foreground)]">
                    CURRENT WORKSHOP ESTIMATE
                  </span>
                  <span className="px-2 py-0.5 bg-black/60 border border-[var(--border)] text-[10px] font-mono text-[var(--primary)]">
                    3 CYTECH MECHANICS
                  </span>
                </div>

                {/* Animated Turnaround line (Re-mounts & fades up on change 0.2s) */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={t.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="font-display text-3xl sm:text-4xl text-white font-bold leading-tight">
                      £{t.price} <span className="text-base sm:text-lg font-sans font-light text-[var(--muted-foreground)]">· ready in about</span>
                    </p>
                    <p className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--primary)] mt-1">
                      {turnaroundDays} working days
                    </p>
                    <p className="text-xs text-[var(--muted-foreground)] mt-2 font-mono">
                      Queue baseline: {QUEUE_DAYS} days + {Math.ceil(t.hours / 6)} day bench allocation ({t.hours} hrs)
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-6 pt-6 border-t border-[var(--border)] space-y-2 text-xs text-[var(--muted-foreground)]">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[var(--primary)] shrink-0" />
                    <span>6-week free follow-up adjustment included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-[var(--steel)] shrink-0" />
                    <span>Old components kept in your named tray</span>
                  </div>
                </div>
              </div>

              {/* Book button */}
              <div className="mt-8">
                <button
                  onClick={() => onSelectTierForBooking(t.id)}
                  className="w-full px-4 py-3.5 sm:py-4 bg-[var(--primary)] text-[var(--primary-foreground)] font-display text-lg sm:text-xl font-bold uppercase tracking-normal sm:tracking-wider hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 sm:gap-3 shadow-[0_0_20px_rgba(203,240,28,0.2)] text-center"
                >
                  <Wrench className="w-5 h-5 text-black shrink-0" />
                  <span className="truncate sm:overflow-visible">Book {t.name}</span>
                  <ArrowRight className="w-5 h-5 text-black shrink-0" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
