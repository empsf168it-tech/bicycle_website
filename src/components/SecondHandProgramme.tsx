import React from 'react';
import { ShieldCheck, Calendar, Wrench, RefreshCw, FileText, CheckCircle2 } from 'lucide-react';

export const SecondHandProgramme: React.FC = () => {
  const processSteps = [
    {
      num: '01',
      title: 'Stripped to the frame',
      desc: 'Frame thoroughly cleaned, de-greased, checked for alignment, hairline cracks, and bottom bracket thread integrity.'
    },
    {
      num: '02',
      title: 'Bearings replaced or repacked',
      desc: 'Headset, bottom bracket, and front/rear wheel hubs are opened, flushed, inspected for pitting, and fitted with fresh waterproof grease or new sealed cartridges.'
    },
    {
      num: '03',
      title: 'New cables and housing',
      desc: 'Every refurbished bike gets brand-new stainless steel inner cables and compressionless outer housing to ensure crisp, drag-free shifting.'
    },
    {
      num: '04',
      title: 'New chain fitted',
      desc: 'We never sell a used bike with a stretched chain. A new KMC or Shimano chain is installed and paired against the cassette teeth.'
    },
    {
      num: '05',
      title: 'New bar tape or grips',
      desc: 'Clean contact points are non-negotiable. High-density cushioned bar tape or ergonomic locking grips installed fresh.'
    },
    {
      num: '06',
      title: 'Cytech mechanic sign-off',
      desc: 'Full 32-point safety check signed and dated by a Cytech Level 3 certified mechanic with torque wrench verification.'
    }
  ];

  return (
    <section id="second-hand" className="py-20 bg-[var(--card)] border-b border-[var(--border)] relative">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="eyebrow mb-2">THE VELO & TORQUE REFURBISHMENT BENCHMARK</div>
          <h2 className="font-h2 text-white text-3xl sm:text-4xl md:text-5xl">
            EVERY USED BIKE GETS THE SAME TREATMENT
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--foreground)]/90 font-light leading-relaxed border-l-2 border-[var(--primary)] pl-4">
            Stripped to the frame, bearings replaced or repacked, new cables and housing, new chain, new bar tape or grips, and a safety check signed off by a Cytech mechanic. We list the frame's age, the parts we replaced and the parts we did not. Every second-hand bike carries a six-month warranty on the work and a free service at six weeks.
          </p>
        </div>

        {/* 6 Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {processSteps.map((step) => (
            <div
              key={step.num}
              className="bg-[var(--card-elevated)] border border-[var(--border)] p-6 relative hover:border-[var(--steel)] transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-2xl font-bold text-[var(--primary)]">
                  {step.num}
                </span>
                <Wrench className="w-4 h-4 text-[var(--muted-foreground)]" />
              </div>
              <h3 className="font-h3 text-xl text-white uppercase mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--muted-foreground)] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Warranty & Transparency Guarantee Banner */}
        <div className="bg-[var(--background)] border-2 border-[var(--primary)] p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[var(--primary)]/10 border border-[var(--primary)] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[var(--primary)]" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-white uppercase">
                6-Month Workshop Warranty
              </h4>
              <p className="text-xs text-[var(--muted-foreground)] mt-1">
                Full coverage on all workshop labour and installed replacement components.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[var(--primary)]/10 border border-[var(--primary)] flex items-center justify-center shrink-0">
              <RefreshCw className="w-6 h-6 text-[var(--primary)]" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-white uppercase">
                Free 6-Week First Service
              </h4>
              <p className="text-xs text-[var(--muted-foreground)] mt-1">
                Drop back in after 6 weeks for cable stretch re-tensioning and safety bolt check.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[var(--primary)]/10 border border-[var(--primary)] flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6 text-[var(--primary)]" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-white uppercase">
                Complete Part Transparency
              </h4>
              <p className="text-xs text-[var(--muted-foreground)] mt-1">
                Written record showing estimated frame vintage, replaced components, and original untouched parts.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
