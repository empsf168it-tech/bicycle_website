import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 px-3.5 py-2.5 bg-[var(--card-elevated)] hover:bg-[var(--primary)] text-white hover:text-black border border-[var(--border)] hover:border-[var(--primary)] shadow-2xl transition-all duration-200 group flex items-center gap-2 text-xs font-mono uppercase tracking-wider active:scale-95"
    >
      <span className="hidden sm:inline">Back to top</span>
      <ArrowUp className="w-4 h-4 text-[var(--primary)] group-hover:text-black transition-colors shrink-0" />
    </button>
  );
};
