import React from 'react';

interface ChainDividerProps {
  className?: string;
  label?: string;
}

export const ChainDivider: React.FC<ChainDividerProps> = ({ className = '', label }) => {
  return (
    <div className={`w-full overflow-hidden border-y border-[var(--border)] bg-black/40 py-2.5 relative flex items-center ${className}`}>
      {/* Repeating Chain SVG Strip */}
      <div 
        className="w-full h-5 chain-bg-anim opacity-80"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='20' viewBox='0 0 80 20' fill='none'%3E%3C!-- Chain outer link --%3E%3Crect x='6' y='4' width='36' height='12' rx='6' fill='%2322252a' stroke='%233a3f47' stroke-width='1.5'/%3E%3Ccircle cx='12' cy='10' r='3.5' fill='%23191b1f' stroke='%23cbf01c' stroke-width='1.5'/%3E%3Ccircle cx='36' cy='10' r='3.5' fill='%23191b1f' stroke='%23cbf01c' stroke-width='1.5'/%3E%3C!-- Inner link bridge --%3E%3Crect x='30' y='6' width='36' height='8' rx='4' fill='%23141619' stroke='%2330353c' stroke-width='1.5'/%3E%3Ccircle cx='36' cy='10' r='2' fill='%23cbf01c'/%3E%3Ccircle cx='60' cy='10' r='2' fill='%23cbf01c'/%3E%3C!-- Next outer link --%3E%3Crect x='54' y='4' width='36' height='12' rx='6' fill='%2322252a' stroke='%233a3f47' stroke-width='1.5'/%3E%3Ccircle cx='60' cy='10' r='3.5' fill='%23191b1f' stroke='%23cbf01c' stroke-width='1.5'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat-x',
          backgroundSize: '80px 20px',
        }}
        aria-hidden="true"
      />

      {label && (
        <div className="absolute left-1/2 -translate-x-1/2 px-4 py-0.5 bg-[var(--background)] border border-[var(--border)] text-[10px] font-mono tracking-widest uppercase text-[var(--primary)] shadow-sm">
          {label}
        </div>
      )}
    </div>
  );
};
