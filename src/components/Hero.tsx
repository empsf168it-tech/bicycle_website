import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Wrench, ShieldCheck, Zap, Sparkles, Check } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const shopFacts = [
    { label: '3 Cytech mechanics', icon: ShieldCheck },
    { label: 'Same-day punctures', icon: Zap },
    { label: 'Second-hand warrantied', icon: Sparkles },
    { label: 'Free first check-up', icon: Check },
  ];

  const headlineLines = [
    'WE FIX BIKES.',
    'WE ALSO SELL THEM.'
  ];

  return (
    <section id="home" className="relative min-h-[88vh] pt-[72px] flex flex-col justify-between overflow-hidden border-b border-[var(--border)] bg-[var(--background)]">
      {/* Background Photograph with Directional Workshop Work-lamp & Left Gradient */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat filter brightness-[0.78] contrast-[1.12]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=2400&q=85')`,
        }}
      >
        {/* Deep Graphite Left-to-Right Mechanical Vignette Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)] via-[var(--background)]/90 via-45% to-transparent" />
        {/* Top and Bottom soft fades */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/70 via-transparent to-[var(--background)]" />
        {/* Subtle work-lamp glow highlight in upper right */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-[130px] pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1240px] mx-auto w-full px-6 sm:px-10 lg:px-16 pt-12 md:pt-20 pb-12 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="eyebrow inline-flex items-center gap-2 mb-4 bg-black/50 border border-[var(--border)] px-3 py-1.5"
          >
            <span className="w-2 h-2 bg-[var(--primary)] animate-pulse inline-block" />
            <span>MANCHESTER · WORKSHOP FIRST · CYTECH ACCREDITED · SINCE 2011</span>
          </motion.div>

          {/* H1 with clipPath line wipe, 0.75s, staggered 0.08s */}
          <div className="space-y-1 mb-6">
            {headlineLines.map((line, index) => (
              <div key={line} className="overflow-hidden">
                <motion.h1
                  initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)', y: 30 }}
                  animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', y: 0 }}
                  transition={{
                    duration: 0.75,
                    delay: 0.1 + index * 0.08,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="font-h1 text-white tracking-tight leading-[0.92]"
                >
                  {index === 1 ? (
                    <span>
                      WE ALSO <span className="text-[var(--primary)]">SELL THEM.</span>
                    </span>
                  ) : (
                    line
                  )}
                </motion.h1>
              </div>
            ))}
          </div>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-base sm:text-lg md:text-xl text-[var(--foreground)]/90 leading-relaxed font-light max-w-2xl mb-8 border-l-2 border-[var(--primary)] pl-4"
          >
            A workshop with a shop attached rather than the other way round. Three Cytech mechanics, honest turnaround times, and we will tell you when a repair is not worth the money.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.45 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 bg-[var(--primary)] text-[var(--primary-foreground)] font-display text-xl font-bold uppercase tracking-wider hover:brightness-110 active:scale-[0.98] transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(203,240,28,0.25)]"
            >
              <Wrench className="w-5 h-5 text-black" />
              <span>Book a Service</span>
            </button>

            <a
              href="#repairs"
              className="px-7 py-4 bg-[var(--card)] hover:bg-[var(--card-elevated)] text-white border border-[var(--border)] hover:border-[var(--steel)] font-display text-xl font-bold uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <span>See Repair Prices</span>
              <ArrowRight className="w-4 h-4 text-[var(--primary)]" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* 4 Shop Facts Bar Bottom */}
      <div className="relative z-10 border-t border-[var(--border)] bg-black/60 backdrop-blur-md py-4">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {shopFacts.map((fact) => {
              const Icon = fact.icon;
              return (
                <div key={fact.label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-none bg-[var(--card-elevated)] border border-[var(--border)] flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-[var(--primary)]" />
                  </div>
                  <span className="font-display uppercase text-sm sm:text-base font-semibold tracking-wide text-white">
                    {fact.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
