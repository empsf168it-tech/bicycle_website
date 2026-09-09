import React, { useState, useEffect } from 'react';
import { Menu, X, Wrench, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (tierId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Workshop', href: '#workshop-status' },
    { name: 'Repairs', href: '#repairs' },
    { name: 'Bikes', href: '#bikes' },
    { name: 'Second-hand', href: '#second-hand' },
    { name: 'Fitting', href: '#fitting' },
    { name: 'Find Us', href: '#find-us' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-[72px] z-40 transition-all duration-200 bg-[var(--background)]/90 backdrop-blur-md flex items-center justify-between px-4 sm:px-8 lg:px-12 ${
        scrolled
          ? 'border-b-2 border-[var(--primary)] shadow-lg shadow-black/40'
          : 'border-b border-[var(--border)]'
      }`}
    >
      {/* Brand Wordmark Left with Unique Geometric Hex-Torque Logo */}
      <a href="#home" className="flex items-center gap-2.5 group shrink-0">
        <div className="w-8 h-8 bg-[var(--card)] border border-[var(--border)] group-hover:border-[var(--primary)] flex items-center justify-center transition-colors shrink-0">
          <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5">
            <polygon points="16,2 29,9 29,23 16,30 3,23 3,9" stroke="#cbf01c" strokeWidth="2" fill="#141619" />
            <path d="M10 11 L16 22 L22 11" stroke="#cbf01c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="11" y1="11" x2="21" y2="11" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="16" cy="16" r="1.8" fill="#cbf01c" />
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="font-display font-bold text-2xl tracking-wider text-white uppercase leading-none group-hover:text-[var(--primary)] transition-colors whitespace-nowrap">
            VELO & TORQUE
          </span>
          <span className="text-[10px] font-mono tracking-wider text-[var(--muted-foreground)] uppercase whitespace-nowrap">
            Manchester · Workshop First
          </span>
        </div>
      </a>

      {/* Nav Links Centre (Desktop - Single Line) */}
      <div className="hidden lg:flex items-center gap-6 xl:gap-8 shrink-0">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm uppercase tracking-wider font-medium text-[var(--foreground)]/80 hover:text-[var(--primary)] transition-colors py-1 whitespace-nowrap relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--primary)] hover:after:w-full after:transition-all"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Action Buttons Right (Phone number removed) */}
      <div className="flex items-center gap-3 shrink-0">
        {/* Book a Service chartreuse square button */}
        <button
          onClick={() => onOpenBooking()}
          className="hidden sm:inline-flex items-center gap-2 px-5 h-11 bg-[var(--primary)] text-[var(--primary-foreground)] font-display text-base font-bold uppercase tracking-wider hover:brightness-110 active:scale-[0.98] transition-all rounded-none shadow-[0_0_15px_rgba(203,240,28,0.2)] whitespace-nowrap shrink-0"
        >
          <Wrench className="w-4 h-4 text-black" />
          <span>Book a Service</span>
        </button>

        {/* Mobile / Tablet Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile & Tablet Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[72px] left-0 w-full bg-[var(--card)] border-b border-[var(--border)] p-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg uppercase font-display tracking-wider text-white hover:text-[var(--primary)] border-b border-[var(--border)] pb-2 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full h-12 bg-[var(--primary)] text-[var(--primary-foreground)] font-display text-lg font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Wrench className="w-5 h-5 text-black" />
                Book a Service
              </button>

              <a
                href="tel:01615550173"
                className="flex items-center justify-center gap-2 text-sm text-[var(--muted-foreground)] py-2 border border-[var(--border)]"
              >
                <Phone className="w-4 h-4 text-[var(--primary)]" />
                0161 555 0173 · Workshop Line
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
