import React from 'react';
import { ShieldCheck, Phone, MapPin, Wrench, ArrowUp } from 'lucide-react';
import { SHOP_LOCATION } from '../data/workshopData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111316] text-[var(--foreground)] border-t-2 border-[var(--primary)] pt-16 pb-24 md:pb-16 relative">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Three Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-[var(--border)]">
          
          {/* Column 1: Brand & Cytech accreditation */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black border border-[var(--primary)] flex items-center justify-center">
                <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5">
                  <polygon points="16,2 29,9 29,23 16,30 3,23 3,9" stroke="#cbf01c" strokeWidth="2" fill="#141619" />
                  <path d="M10 11 L16 22 L22 11" stroke="#cbf01c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="11" y1="11" x2="21" y2="11" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="16" cy="16" r="1.8" fill="#cbf01c" />
                </svg>
              </div>
              <span className="font-display font-bold text-2xl tracking-wider text-white uppercase">
                VELO & TORQUE
              </span>
            </div>

            <p className="font-display text-xl text-white uppercase tracking-wide">
              We fix bikes. We also sell them.
            </p>

            <p className="text-xs text-[var(--muted-foreground)] leading-relaxed font-light">
              Independent workshop-first bicycle workshop and studio based in Salford, Manchester. Specialising in honest turnaround times, mechanical transparency, and custom all-weather builds.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-2 bg-black border border-[var(--border)] text-xs text-[var(--primary)] font-mono">
              <ShieldCheck className="w-4 h-4 text-[var(--primary)] shrink-0" />
              <span>Cytech Level 3 accredited workshop</span>
            </div>
          </div>

          {/* Column 2: Workshop Sections */}
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--primary)] block">
              WORKSHOP BENCH & DIRECTORY
            </span>

            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="text-[var(--muted-foreground)] hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#workshop-status" className="text-[var(--muted-foreground)] hover:text-white transition-colors">
                  Workshop Status & Turnaround
                </a>
              </li>
              <li>
                <a href="#services" className="text-[var(--muted-foreground)] hover:text-white transition-colors">
                  Service Tiers (Safety, Minor, Major, Custom)
                </a>
              </li>
              <li>
                <a href="#repairs" className="text-[var(--muted-foreground)] hover:text-white transition-colors">
                  Individual Repairs Price List
                </a>
              </li>
              <li>
                <a href="#bikes" className="text-[var(--muted-foreground)] hover:text-white transition-colors">
                  Bikes We Sell (Commuter, Gravel, Used)
                </a>
              </li>
              <li>
                <a href="#second-hand" className="text-[var(--muted-foreground)] hover:text-white transition-colors">
                  Second-Hand 6-Point Programme
                </a>
              </li>
              <li>
                <a href="#fitting" className="text-[var(--muted-foreground)] hover:text-white transition-colors">
                  Bike Fitting Sessions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Booking Action */}
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--primary)] block">
              VISIT OR CALL
            </span>

            <div className="space-y-2 text-xs font-mono text-[var(--foreground)]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[var(--primary)] shrink-0 mt-0.5" />
                <span>44 Chapel Street, Salford, Manchester M3 5DF</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[var(--primary)] shrink-0" />
                <a href="tel:01615550173" className="text-white hover:text-[var(--primary)] text-sm font-bold">
                  0161 555 0173
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-3 bg-[var(--primary)] text-[var(--primary-foreground)] font-display text-base font-bold uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <Wrench className="w-4 h-4 text-black" />
                <span>Book a Service</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Line Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--muted-foreground)]">
          <p>© 2026 VELO & TORQUE · Registered in England · Cytech Accredited</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
