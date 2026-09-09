import React, { useState, useEffect } from 'react';
import { X, Calendar, Wrench, CheckCircle2, Clock, ShieldCheck, AlertTriangle } from 'lucide-react';
import { SERVICE_TIERS, QUEUE_DAYS, ServiceTier } from '../data/workshopData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTierId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialTierId = 'minor'
}) => {
  const [selectedTierId, setSelectedTierId] = useState<string>(initialTierId);
  const [bikeType, setBikeType] = useState('Commuter / Hybrid');
  const [preferredDate, setPreferredDate] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [bikeDetails, setBikeDetails] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (initialTierId) {
      setSelectedTierId(initialTierId);
    }
  }, [initialTierId]);

  // Generate tomorrow's date as minimum
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    setPreferredDate(dateStr);
  }, []);

  if (!isOpen) return null;

  const currentTier = SERVICE_TIERS.find(t => t.id === selectedTierId) || SERVICE_TIERS[1];
  const turnaroundDays = QUEUE_DAYS + Math.ceil(currentTier.hours / 6);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `VT-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(ref);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-[var(--card)] border border-[var(--border)] rounded-none p-6 md:p-8 shadow-2xl"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Header */}
        <div className="flex items-start justify-between border-b border-[var(--border)] pb-4 mb-6">
          <div>
            <div className="eyebrow flex items-center gap-2 mb-1">
              <span className="w-2 h-2 bg-[var(--primary)] inline-block"></span>
              Manchester Workshop Booking · Chapel St
            </div>
            <h2 className="font-h2 text-2xl md:text-3xl text-white tracking-tight uppercase">
              {isSubmitted ? 'SERVICE APPOINTMENT CONFIRMED' : 'BOOK WORKSHOP BENCH TIME'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[var(--muted-foreground)] hover:text-white hover:bg-[var(--card-elevated)] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="space-y-6 text-center py-4">
            <div className="w-16 h-16 bg-[var(--primary)]/10 border border-[var(--primary)] rounded-full flex items-center justify-center mx-auto text-[var(--primary)]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--muted-foreground)]">
                Workshop Job Ticket
              </span>
              <p className="font-display text-4xl text-[var(--primary)] font-bold tracking-wider mt-1">
                {bookingRef}
              </p>
            </div>

            <div className="bg-[var(--card-elevated)] border border-[var(--border)] p-5 text-left space-y-3 text-sm">
              <div className="flex justify-between border-b border-[var(--border)] pb-2">
                <span className="text-[var(--muted-foreground)]">Service Tier</span>
                <span className="font-semibold text-white">{currentTier.name} (£{currentTier.price})</span>
              </div>
              <div className="flex justify-between border-b border-[var(--border)] pb-2">
                <span className="text-[var(--muted-foreground)]">Estimated Turnaround</span>
                <span className="text-[var(--primary)] font-bold">{turnaroundDays} working days</span>
              </div>
              <div className="flex justify-between border-b border-[var(--border)] pb-2">
                <span className="text-[var(--muted-foreground)]">Drop-off Date</span>
                <span className="text-white">{preferredDate || 'Tomorrow morning'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--muted-foreground)]">Customer</span>
                <span className="text-white">{name} ({phone})</span>
              </div>
            </div>

            <div className="p-4 bg-black/40 border border-l-4 border-l-[var(--primary)] border-[var(--border)] text-left text-xs text-[var(--foreground)] space-y-1">
              <p className="font-semibold text-white flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[var(--primary)]" />
                Next Steps for Drop-off:
              </p>
              <p className="text-[var(--muted-foreground)]">
                Bring your bike to <strong>44 Chapel Street, Salford</strong> anytime from 9:00 AM on your drop-off day. Drop-off takes 5 minutes where a Cytech mechanic inspects the chain wear with you.
              </p>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3.5 bg-[var(--primary)] text-[var(--primary-foreground)] font-display text-lg uppercase tracking-wider font-bold hover:brightness-110 transition-all"
            >
              Done · Return to Workshop
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Tier Selection */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[var(--muted-foreground)] mb-2.5">
                1. Select Service Package
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {SERVICE_TIERS.map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setSelectedTierId(tier.id)}
                    className={`p-3 text-left border transition-all ${
                      selectedTierId === tier.id
                        ? 'border-[var(--primary)] bg-[var(--primary)]/10 text-white ring-1 ring-[var(--primary)]'
                        : 'border-[var(--border)] bg-[var(--card-elevated)] text-[var(--muted-foreground)] hover:border-[var(--steel)] hover:text-white'
                    }`}
                  >
                    <p className="font-display font-bold text-base leading-tight uppercase truncate">
                      {tier.name}
                    </p>
                    <p className="price-num text-lg font-bold text-white mt-1">
                      £{tier.price}
                    </p>
                    <p className="text-[10px] text-[var(--muted-foreground)] mt-0.5">
                      ~{tier.hours}h bench
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Live Turnaround Readout Box */}
            <div className="p-3.5 bg-black/40 border border-[var(--border)] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[var(--primary)] shrink-0" />
                <div>
                  <p className="text-xs text-[var(--muted-foreground)]">
                    Calculated from current workshop queue ({QUEUE_DAYS} day baseline):
                  </p>
                  <p className="font-display text-lg text-white font-bold tracking-wide">
                    Ready in approximately <span className="text-[var(--primary)]">{turnaroundDays} working days</span>
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-1 bg-[var(--card-elevated)] border border-[var(--border)] text-[var(--primary)] hidden sm:inline-block">
                LIVE QUEUE
              </span>
            </div>

            {/* Step 2: Bike Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[var(--muted-foreground)] mb-1.5">
                  2. Bicycle Category
                </label>
                <select
                  value={bikeType}
                  onChange={(e) => setBikeType(e.target.value)}
                  className="w-full bg-[var(--card-elevated)] border border-[var(--border)] px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[var(--primary)]"
                >
                  <option>Commuter / City Hybrid</option>
                  <option>Gravel / All-Road Bike</option>
                  <option>Road Race / Endurance</option>
                  <option>Mountain Bike (Hardtail/Full Sus)</option>
                  <option>Electric Bike (Bosch / Shimano Steps)</option>
                  <option>Cargo / Touring Rig</option>
                  <option>Vintage / Retro Steel Rebuild</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[var(--muted-foreground)] mb-1.5">
                  Make & Model (if known)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Genesis Croix de Fer, Brompton, Trek FX"
                  value={bikeDetails}
                  onChange={(e) => setBikeDetails(e.target.value)}
                  className="w-full bg-[var(--card-elevated)] border border-[var(--border)] px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[var(--primary)] placeholder:text-gray-600"
                />
              </div>
            </div>

            {/* Step 3: Preferred Drop-off Date */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[var(--muted-foreground)] mb-1.5">
                3. Preferred Drop-off Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  required
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full bg-[var(--card-elevated)] border border-[var(--border)] px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[var(--primary)]"
                />
              </div>
              <p className="text-[11px] text-[var(--muted-foreground)] mt-1">
                Workshop is open Tue–Sat from 9:00 AM. Same-day drop-off for pre-booked services.
              </p>
            </div>

            {/* Step 4: Contact info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[var(--muted-foreground)] mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Alex Mercer"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[var(--card-elevated)] border border-[var(--border)] px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[var(--primary)]"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[var(--muted-foreground)] mb-1.5">
                  Mobile Number (for SMS updates) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="07700 900123"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[var(--card-elevated)] border border-[var(--border)] px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[var(--primary)]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[var(--muted-foreground)] mb-1.5">
                Specific Symptoms or Requests
              </label>
              <textarea
                rows={2}
                placeholder="Any creaking from bottom bracket, rubbing discs, skipping in 7th gear, or parts you are supplying..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-[var(--card-elevated)] border border-[var(--border)] px-3 py-2 text-sm text-white focus:outline-none focus:border-[var(--primary)] resize-none"
              ></textarea>
            </div>

            {/* Workshop guarantee note */}
            <div className="flex items-start gap-2 text-xs text-[var(--muted-foreground)]">
              <AlertTriangle className="w-4 h-4 text-[var(--primary)] shrink-0 mt-0.5" />
              <span>
                <strong>No surprise bills:</strong> If parts need replacement, we call or WhatsApp you with exact costs before fitting. Replaced old parts are returned in your inspection tray.
              </span>
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 bg-[var(--primary)] text-[var(--primary-foreground)] font-display text-xl font-bold uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <Wrench className="w-5 h-5" />
                Confirm Booking · £{currentTier.price} Estimate
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
