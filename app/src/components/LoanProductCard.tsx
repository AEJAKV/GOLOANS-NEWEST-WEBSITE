import type { ReactNode } from 'react';

interface LoanProductCardProps {
  icon: ReactNode;
  title: string;
  subtitle?: string;
}

export function LoanProductCard({ icon, title, subtitle }: LoanProductCardProps) {
  return (
    <div className="bg-[#159A23] rounded-2xl p-5 text-white flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(21,154,35,0.25)] transition-all duration-300 cursor-pointer min-w-[100px]">
      <div className="mb-2">{icon}</div>
      <h3 className="text-base md:text-lg font-bold">{title}</h3>
      {subtitle && <p className="text-sm text-white/80 mt-1">{subtitle}</p>}
    </div>
  );
}
