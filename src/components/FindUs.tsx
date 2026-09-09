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
              <div className="flex items-start gap-4 mb-6">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[var(--border)]">
                <a
                  href="tel:01615550173"
                  className="flex items-center gap-3 p-3 bg-[var(--background)] border border-[var(--border)] hover:border-[var(--primary)] transition-colors group"
                >
                  <Phone className="w-4 h-4 text-[var(--primary)]" />
                  <div>
                    <span className="text-[10px] font-mono text-[var(--muted-foreground)] block">DIRECT LINE</span>
                    <span className="font-mono text-sm text-white font-bold group-hover:text-[var(--primary)]">0161 555 0173</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 bg-[var(--background)] border border-[var(--border)]">
                  <Mail className="w-4 h-4 text-[var(--primary)]" />
                  <div>
                    <span className="text-[10px] font-mono text-[var(--muted-foreground)] block">WORKSHOP ENQUIRIES</span>
                    <span className="font-mono text-sm text-white font-bold">{SHOP_LOCATION.email}</span>
                  </div>
                </div>
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

          {/* Right 5 Columns: Stylized Mechanical Map & Directions Card */}
          <div className="lg:col-span-5 bg-[var(--card-elevated)] border border-[var(--border)] p-6 flex flex-col justify-between relative overflow-hidden">
            
            {/* Map Visual Graphic */}
            <div className="relative w-full h-72 bg-black border border-[var(--border)] overflow-hidden flex items-center justify-center">
              {/* Grid Background */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'radial-gradient(#cbf01c 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}
              />

              {/* Stylized Street Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" fill="none">
                {/* River Irwell curve */}
                <path d="M 20 280 Q 150 180 380 120" stroke="#323b46" strokeWidth="18" strokeLinecap="round" />
                <path d="M 20 280 Q 150 180 380 120" stroke="#1f2730" strokeWidth="12" strokeLinecap="round" />
                <text x="70" y="245" fill="#4d5b6a" fontSize="10" fontFamily="monospace" transform="rotate(-25 70 245)">River Irwell</text>

                {/* Chapel Street Main Road */}
                <path d="M 40 80 L 360 210" stroke="#505a66" strokeWidth="10" strokeLinecap="square" />
                <path d="M 40 80 L 360 210" stroke="#cbf01c" strokeWidth="2" strokeDasharray="6 6" />
                <text x="180" y="130" fill="#a0abb8" fontSize="11" fontFamily="monospace" fontWeight="bold" transform="rotate(22 180 130)">CHAPEL STREET (A6)</text>

                {/* Cross street */}
                <path d="M 120 20 L 260 280" stroke="#3a434d" strokeWidth="6" />
                <text x="130" y="50" fill="#6d7a88" fontSize="9" fontFamily="monospace">Blackfriars Rd</text>

                {/* Workshop Pin Indicator */}
                <g transform="translate(200, 145)">
                  <circle cx="0" cy="0" r="16" fill="#cbf01c" fillOpacity="0.2" className="animate-ping" />
                  <circle cx="0" cy="0" r="10" fill="#191b1f" stroke="#cbf01c" strokeWidth="3" />
                  <circle cx="0" cy="0" r="3" fill="#cbf01c" />
                  <rect x="16" y="-12" width="110" height="24" fill="#191b1f" stroke="#cbf01c" strokeWidth="1" />
                  <text x="22" y="4" fill="#cbf01c" fontSize="9" fontFamily="monospace" fontWeight="bold">VELO & TORQUE M3</text>
                </g>
              </svg>

              <div className="absolute top-3 left-3 bg-black/80 px-2 py-1 border border-[var(--border)] text-[9px] font-mono text-[var(--steel)]">
                GEO: 53.4839° N, 2.2536° W
              </div>
            </div>

            {/* Directions Links */}
            <div className="mt-6 space-y-3">
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
