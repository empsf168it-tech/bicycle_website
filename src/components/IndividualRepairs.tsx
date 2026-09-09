import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Zap, Wrench, ArrowRight } from 'lucide-react';
import { INDIVIDUAL_REPAIRS, IndividualRepair } from '../data/workshopData';

interface IndividualRepairsProps {
  onBookRepair?: () => void;
}

export const IndividualRepairs: React.FC<IndividualRepairsProps> = ({ onBookRepair }) => {
  const [filter, setFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Tyres & Wheels', 'Brakes', 'Drivetrain', 'Bearings', 'General'];

  const filteredRepairs = INDIVIDUAL_REPAIRS.filter((job) => {
    const matchesCat = filter === 'All' || job.category === filter;
    const matchesSearch = job.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="repairs" className="py-20 bg-[var(--card)] border-b border-[var(--border)] relative">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-[var(--border)] pb-6">
          <div>
            <div className="eyebrow mb-2">INDIVIDUAL WORKSHOP JOBS · CLEAR PRICING</div>
            <h2 className="font-h2 text-white">COMMON REPAIRS & LABOUR</h2>
          </div>
          <p className="text-sm sm:text-base text-[var(--muted-foreground)] max-w-md mt-4 md:mt-0">
            Transparent bench rates. Punctures and adjustments under 15 minutes can be dropped off without an appointment.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-all ${
                  filter === cat
                    ? 'bg-[var(--primary)] text-[var(--primary-foreground)] font-bold'
                    : 'bg-[var(--card-elevated)] text-[var(--muted-foreground)] hover:text-white border border-[var(--border)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-[var(--muted-foreground)] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search repairs (e.g. bleed, spoke)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[var(--card-elevated)] border border-[var(--border)] pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-[var(--primary)] placeholder:text-gray-500 font-mono"
            />
          </div>
        </div>

        {/* Repairs List: 2-column layout on mobile and desktop, hover shifts price 4px left */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
          {filteredRepairs.map((job: IndividualRepair, index: number) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.2,
                delay: Math.min(index * 0.03, 0.3),
                ease: 'linear',
              }}
              className="group flex items-center justify-between py-3.5 px-4 bg-[var(--background)] hover:bg-[var(--card-elevated)] border-b border-[var(--border)] transition-colors duration-150 cursor-pointer"
              onClick={onBookRepair}
            >
              <div className="flex items-center gap-3 pr-4">
                <div className="w-2 h-2 bg-[var(--border)] group-hover:bg-[var(--primary)] transition-colors shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white group-hover:text-[var(--primary)] transition-colors flex items-center gap-2">
                    <span>{job.name}</span>
                    {job.walkinEligible && (
                      <span className="inline-flex items-center gap-0.5 text-[9px] font-mono uppercase px-1.5 py-0.2 bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/40">
                        <Zap className="w-2.5 h-2.5" /> Walk-in
                      </span>
                    )}
                  </p>
                  <p className="text-[11px] text-[var(--muted-foreground)] font-mono">
                    {job.turnaroundNote}
                  </p>
                </div>
              </div>

              {/* Price: shifts 4px left on hover */}
              <div className="flex items-center gap-2 shrink-0">
                <div className="text-right transition-transform duration-150 group-hover:-translate-x-1">
                  <span className="price-num text-xl font-bold text-white group-hover:text-[var(--primary)]">
                    £{job.price}
                  </span>
                  {job.unit && (
                    <span className="text-[11px] font-mono text-[var(--muted-foreground)] ml-1">
                      {job.unit}
                    </span>
                  )}
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-[var(--primary)] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom notes on parts & walk-ins */}
        <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[var(--muted-foreground)] font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--primary)]" />
            <span>All prices include VAT. Consumables & replacement parts charged at RRP.</span>
          </div>
          <button
            onClick={onBookRepair}
            className="text-[var(--primary)] hover:underline flex items-center gap-1 uppercase tracking-wider"
          >
            <span>Have a job not listed? Contact our workshop mechanics</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

      </div>
    </section>
  );
};
