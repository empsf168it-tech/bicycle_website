import React from 'react';
import { CLUB_RIDE_DETAILS } from '../data/workshopData';
import { Calendar, Clock, MapPin, Coffee, Users, AlertCircle, Compass } from 'lucide-react';

export const ClubRides: React.FC = () => {
  return (
    <section className="py-20 bg-[var(--background)] border-b border-[var(--border)] relative">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[var(--border)] pb-8">
          <div>
            <div className="eyebrow mb-2">SATURDAY SHOP RIDE · COMMUNITY</div>
            <h2 className="font-h2 text-white">SATURDAY MORNING ROLL OUT</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-[var(--muted-foreground)] mt-4 md:mt-0">
            <span className="flex items-center gap-1.5 text-[var(--primary)]">
              <Calendar className="w-4 h-4" /> Weekly
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5 text-white">
              <Clock className="w-4 h-4" /> Leaves 8:30am Sharp
            </span>
          </div>
        </div>

        {/* Highlight Main Box */}
        <div className="bg-[var(--card)] border border-[var(--border)] p-6 sm:p-10 mb-8">
          <p className="font-display text-2xl sm:text-3xl text-white uppercase tracking-wide leading-snug mb-6 max-w-3xl">
            Saturday shop ride, leaves 8:30am from outside the shop. Three pace groups: 15mph social, 17mph steady, and a fast group that we take no responsibility for. Route board in the window every Thursday, café stop always included, and nobody gets left behind in the first two groups.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[var(--border)] text-xs font-mono text-[var(--foreground)]">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[var(--primary)]" />
              <span>44 Chapel Street, Salford M3</span>
            </div>
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[var(--primary)]" />
              <span>Window route board posted Thursdays</span>
            </div>
            <div className="flex items-center gap-2">
              <Coffee className="w-4 h-4 text-[var(--primary)]" />
              <span>Halfway café stop guaranteed</span>
            </div>
          </div>
        </div>

        {/* 3 Pace Groups Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CLUB_RIDE_DETAILS.groups.map((grp, index) => (
            <div
              key={grp.name}
              className={`p-6 border transition-all ${
                index === 2
                  ? 'bg-[var(--card-elevated)] border-[var(--border)] hover:border-[var(--primary)]'
                  : 'bg-[var(--card)] border-[var(--border)] hover:border-[var(--steel)]'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--primary)]">
                  GROUP {index + 1}
                </span>
                <span className="price-num text-xl font-bold text-white">
                  {grp.pace}
                </span>
              </div>

              <h3 className="font-h3 text-2xl text-white uppercase mb-2">
                {grp.name}
              </h3>

              <p className="text-xs sm:text-sm text-[var(--muted-foreground)] leading-relaxed">
                {grp.rules}
              </p>

              {index === 2 && (
                <div className="mt-4 pt-3 border-t border-[var(--border)] flex items-center gap-1.5 text-[10px] font-mono text-[var(--steel)]">
                  <AlertCircle className="w-3.5 h-3.5 text-[var(--primary)] shrink-0" />
                  <span>Unruly drop-ride format. Self-sufficient riders only.</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
