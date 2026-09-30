import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorkshopStatus } from './components/WorkshopStatus';
import { ChainDivider } from './components/ChainDivider';
import { ServiceTiers } from './components/ServiceTiers';
import { IndividualRepairs } from './components/IndividualRepairs';
import { BikesWeSell } from './components/BikesWeSell';
import { SecondHandProgramme } from './components/SecondHandProgramme';
import { BikeFitting } from './components/BikeFitting';
import { Philosophy } from './components/Philosophy';
import { ClubRides } from './components/ClubRides';
import { FindUs } from './components/FindUs';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { BackToTop } from './components/BackToTop';

export function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedBookingTier, setSelectedBookingTier] = useState<string>('minor');

  const handleOpenBooking = (tierId: string = 'minor') => {
    setSelectedBookingTier(tierId);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--primary)] selection:text-[var(--primary-foreground)] bg-mesh-pattern relative">
      {/* Fixed Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section (88vh full bleed) */}
        <Hero onOpenBooking={() => handleOpenBooking('minor')} />

        {/* 2. Live Workshop Status Strip */}
        <WorkshopStatus />

        {/* Chain Link Animated Divider */}
        <ChainDivider label="CYTECH WORKSHOP TIERS" />

        {/* 3. Service Tiers (Effect 1: Live Turnaround Computation) */}
        <ServiceTiers onSelectTierForBooking={handleOpenBooking} />

        {/* Chain Link Animated Divider */}
        <ChainDivider label="COMMON REPAIRS & BENCH RATES" />

        {/* 4. Individual Repairs Price List */}
        <IndividualRepairs onBookRepair={() => handleOpenBooking('minor')} />

        {/* Chain Link Animated Divider */}
        <ChainDivider label="WORKSHOP BUILT BIKES" />

        {/* 5. Bikes We Sell */}
        <BikesWeSell onInquire={() => handleOpenBooking('custom')} />

        {/* 6. Second-Hand 6-Point Programme */}
        <SecondHandProgramme />

        {/* 7. Bike Fitting Studio */}
        <BikeFitting onBookFit={() => handleOpenBooking('safety')} />

        {/* Chain Link Animated Divider */}
        <ChainDivider label="OUR INTEGRITY CHARTER" />

        {/* 8. Workshop Philosophy */}
        <Philosophy />

        {/* 9. Saturday Club Rides */}
        <ClubRides />

        {/* 10. Find Us & Drop-in Guidelines */}
        <FindUs />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking('minor')} />

      {/* Interactive Service Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        initialTierId={selectedBookingTier}
      />

      {/* Floating Back to Top button visible in all sections */}
      <BackToTop />
    </div>
  );
}

export default App;
