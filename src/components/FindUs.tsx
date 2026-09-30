import React from 'react';
import { MapPin, Clock, Bike, Navigation, AlertTriangle, Phone, Mail } from 'lucide-react';
import { SHOP_LOCATION } from '../data/workshopData';

export const FindUs: React.FC = () => {
  return (
    <section id="find-us" className="py-20 bg-[var(--card)] border-b border-[var(--border)] relative">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[var(--border)] pb-8">
          <div>
            <div className="eyebrow mb-2">SALFORD / MANCHESTER WORKSHOP LOCATION</div>
            <h2 className="font-h2 text-white">FIND US & DROP-IN POLICY</h2>
          </div>
          <p className="text-sm sm:text-base text-[var(--muted-foreground)] max-w-md mt-4 md:mt-0">
            Conveniently situated on Chapel Street corridor. Ride straight in through the cobbled archway.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left 7 Columns: Practical details & drop-in guidelines */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Address & Contact Block */}
            <div className="bg-[var(--card-elevated)] border border-[var(--border)] p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[var(--primary)]/10 border border-[var(--primary)] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[var(--primary)]" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[var(--muted-foreground)]">
                    WORKSHOP ADDRESS
                  </span>
                  <p className="font-display text-2xl sm:text-3xl text-white uppercase font-bold tracking-wide mt-1">
                    {SHOP_LOCATION.address}
                  </p>
                  <p className="text-xs text-[var(--steel)] font-mono mt-1">
                    Directly opposite Salford Cathedral · 8 mins roll from Manchester Victoria
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 pt-4 border-t border-[var(--border)]">
                <a
                  href="tel:01615550173"
                  className="flex items-center gap-3 p-3 bg-[var(--background)] border border-[var(--border)] hover:border-[var(--primary)] transition-colors group min-w-0"
                >
                  <Phone className="w-4 h-4 text-[var(--primary)] shrink-0" />
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-mono text-[var(--muted-foreground)] block">DIRECT LINE</span>
                    <span className="font-mono text-xs sm:text-sm text-white font-bold group-hover:text-[var(--primary)] truncate block">0161 555 0173</span>
                  </div>
                </a>

                <a
                  href={`mailto:${SHOP_LOCATION.email}`}
                  className="flex items-center gap-3 p-3 bg-[var(--background)] border border-[var(--border)] hover:border-[var(--primary)] transition-colors group min-w-0"
                >
                  <Mail className="w-4 h-4 text-[var(--primary)] shrink-0" />
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-mono text-[var(--muted-foreground)] block">WORKSHOP ENQUIRIES</span>
                    <span className="font-mono text-xs sm:text-sm text-white font-bold group-hover:text-[var(--primary)] truncate block">{SHOP_LOCATION.email}</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Hours & Policy Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Hours */}
              <div className="bg-[var(--card-elevated)] border border-[var(--border)] p-6">
                <div className="flex items-center gap-2 mb-4 text-xs font-mono uppercase tracking-wider text-[var(--primary)]">
                  <Clock className="w-4 h-4" />
                  <span>Workshop Hours</span>
                </div>
                <div className="space-y-3 text-xs">
                  {SHOP_LOCATION.hours.map((h, i) => (
                    <div key={i} className="flex justify-between border-b border-[var(--border)]/50 pb-2">
                      <span className="text-white font-medium">{h.days}</span>
                      <span className="font-mono text-[var(--muted-foreground)]">{h.times}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Covered Parking */}
              <div className="bg-[var(--card-elevated)] border border-[var(--border)] p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-wider text-[var(--primary)]">
                    <Bike className="w-4 h-4" />
                    <span>Secure Bike Parking</span>
                  </div>
                  <p className="text-xs text-[var(--foreground)]/90 leading-relaxed font-light">
                    {SHOP_LOCATION.parking}
                  </p>
                  <p className="text-[11px] text-[var(--muted-foreground)] mt-2">
                    Heavy-duty Sheffield stands with ground anchors under our sheltered workshop canopy.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[var(--border)] flex items-center gap-2 text-[10px] font-mono text-[var(--steel)]">
                  <span>CCTV MONITORED YARD</span>
                </div>
              </div>

            </div>

            {/* Drop In Advice Callout */}
            <div className="p-5 bg-[var(--background)] border-l-4 border-l-[var(--primary)] border border-[var(--border)] text-xs">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-[var(--primary)] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white uppercase tracking-wider mb-1 font-mono text-xs">
                    Drop-In vs Booking Policy
                  </p>
                  <p className="text-[var(--muted-foreground)] leading-relaxed">
                    {SHOP_LOCATION.dropInPolicy}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right 5 Columns: Professional Map & Directions Card */}
          <div className="lg:col-span-5 bg-[var(--card-elevated)] border border-[var(--border)] p-6 sm:p-8 flex flex-col justify-between h-full space-y-6">
            
            {/* Map Container */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--primary)] flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5" /> WORKSHOP LOCATION
                </span>
                <span className="bg-black/60 px-2 py-0.5 border border-[var(--border)] text-[10px] font-mono text-[var(--steel)]">
                  GEO: 53.4839° N, 2.2536° W
                </span>
              </div>

              <div className="relative w-full h-72 sm:h-80 bg-black border border-[var(--border)] overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=44%20Chapel%20Street,%20Salford,%20Manchester%20M3%205DF&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter invert contrast-125 opacity-90 hover:opacity-100 transition-all duration-200"
                  title="Workshop Location Map"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Directions Links */}
            <div className="space-y-3 pt-2">
              <a
                href="https://maps.google.com/?q=44+Chapel+Street,+Salford,+Manchester+M3+5DF"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[var(--background)] hover:bg-[var(--primary)] text-white hover:text-black border border-[var(--border)] hover:border-[var(--primary)] font-display text-lg font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>

              <p className="text-[11px] text-center text-[var(--muted-foreground)] font-mono">
                Nearest cycle route: National Cycle Network Route 6 along the Irwell
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
