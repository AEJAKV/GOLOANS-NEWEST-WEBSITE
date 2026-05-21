import { useRef } from 'react';
import { Play, ChevronLeft, ChevronRight, HandCoins, RefreshCw, TrendingUp } from 'lucide-react';
import { InfoPill } from '@/components/InfoPill';
import { SectionHeader } from '@/components/SectionHeader';
import { ScrollReveal } from '@/components/ScrollReveal';

const lenders = ['SPRING', 'CoCash', 'Omni'];

const infoPills = [
  'Lender Deposits Funds as fast as 15 minutes after approval',
  'Qualify for Instant Rebates or Points',
  'No Credit Check Ever',
  'APR below 31%',
];

export function PartnersSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = 120;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-[#F6F7F8] py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            heading="Get the Best Rates from Our Trusted Partners"
            subheading="Spring, CoCash, OMNI, Bree and more"
            centered
            labelGreen={false}
          />
        </ScrollReveal>

        {/* Partner Showcase Card */}
        <ScrollReveal className="mt-10 md:mt-12">
          <div className="bg-white rounded-3xl shadow-sm p-4 md:p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Video Thumbnail */}
              <div
                className="relative rounded-2xl overflow-hidden flex items-center justify-center min-h-[240px] md:min-h-[300px] cursor-pointer"
                style={{
                  background: `repeating-linear-gradient(
                    -45deg,
                    #E8EAED,
                    #E8EAED 8px,
                    #F6F7F8 8px,
                    #F6F7F8 16px
                  )`,
                }}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#1F2937] flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Play size={28} className="text-[#1F2937] ml-1" />
                </div>
              </div>

              {/* Loan Matching Info */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4">
                  Get Matched for a Loan in Canada
                </h3>

                <div className="flex flex-wrap gap-2 mb-5">
                  {infoPills.map((pill) => (
                    <InfoPill key={pill} text={pill} />
                  ))}
                </div>

                {/* Lender Carousel */}
                <div className="flex items-center gap-3 mb-6">
                  <button
                    onClick={() => scroll('left')}
                    className="w-10 h-10 rounded-full border border-[#D1D5DB] flex items-center justify-center text-[#6B7280] hover:border-[#159A23] hover:text-[#159A23] transition-colors duration-200 cursor-pointer shrink-0"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <div
                    ref={scrollRef}
                    className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth"
                    style={{ scrollbarWidth: 'none' }}
                  >
                    {lenders.map((lender) => (
                      <span
                        key={lender}
                        className="inline-flex items-center gap-2 bg-[#E8EAED] rounded-full px-4 py-2 text-sm text-[#1F2937] font-medium whitespace-nowrap"
                      >
                        <TrendingUp size={14} className="text-[#159A23]" />
                        {lender}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => scroll('right')}
                    className="w-10 h-10 rounded-full border border-[#D1D5DB] flex items-center justify-center text-[#6B7280] hover:border-[#159A23] hover:text-[#159A23] transition-colors duration-200 cursor-pointer shrink-0"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 items-center">
                  <button className="bg-[#159A23] hover:bg-[#12801E] text-white font-semibold px-7 py-3 rounded-lg hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(21,154,35,0.3)] transition-all duration-300 cursor-pointer">
                    Get Cash Now
                  </button>
                  <button className="bg-[#F28C18] hover:bg-[#D97A14] text-white font-semibold px-6 py-3 rounded-full hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                    Express Sign up
                  </button>
                </div>
                <p className="mt-2 text-xs text-[#6B7280] flex items-center gap-1">
                  Express Deposit is 70% faster
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 2L6 10M6 2L3 5M6 2L9 5" stroke="#159A23" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* GoLoans Shops Around */}
        <div className="mt-12 md:mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <ScrollReveal>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#1F2937] leading-tight mb-3">
                  GoLoans Shops Around to Find Your Best Funding Match
                </h3>
                <p className="text-base text-[#6B7280] mb-6">
                  The Lender will reach out to you with offers
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#E8EAED] rounded-2xl p-5 flex items-start gap-4 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                    <HandCoins size={32} className="text-[#1F2937] shrink-0" />
                    <p className="text-sm text-[#1F2937]">
                      Most Lenders offer repayment terms from 3-6 months
                    </p>
                  </div>
                  <div className="bg-[#E8EAED] rounded-2xl p-5 flex items-start gap-4 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                    <RefreshCw size={32} className="text-[#1F2937] shrink-0" />
                    <p className="text-sm text-[#1F2937]">
                      Larger Loans may go up to 3+ years
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Image */}
            <ScrollReveal className="flex justify-center">
              <div className="relative w-full max-w-[360px] aspect-square">
                <div
                  className="absolute inset-0 rounded-full overflow-hidden"
                  style={{
                    background: `repeating-linear-gradient(
                      -45deg,
                      #E8EAED,
                      #E8EAED 8px,
                      transparent 8px,
                      transparent 16px
                    )`,
                  }}
                />
                <div className="absolute inset-4 md:inset-6 rounded-full overflow-hidden bg-[#E8EAED] flex items-center justify-center">
                  <img
                    src="/assets/partners-person.png"
                    alt="Trusted partner"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
