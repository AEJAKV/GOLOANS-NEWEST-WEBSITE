import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, Banknote, CreditCard, Calendar, CheckCircle } from 'lucide-react';
import { LoanProductCard } from '@/components/LoanProductCard';

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          once: true,
        },
      });

      tl.from('.hero-label', { opacity: 0, y: 20, duration: 0.5, ease: 'power2.out' })
        .from('.hero-heading', { opacity: 0, y: 30, duration: 0.6, ease: 'power2.out' }, '-=0.3')
        .from('.hero-loan-card', { opacity: 0, y: 30, duration: 0.5, stagger: 0.1, ease: 'power2.out' }, '-=0.3')
        .from('.hero-banner', { opacity: 0, y: 30, duration: 0.5, ease: 'power2.out' }, '-=0.3')
        .from('.hero-badges', { opacity: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3')
        .from('.hero-image-container', { opacity: 0, scale: 0.95, duration: 0.7, ease: 'power2.out' }, '-=0.6');
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F6F7F8] pt-28 md:pt-32 pb-16 md:pb-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Column */}
          <div>
            <p className="hero-label text-sm font-semibold text-[#159A23] mb-2">Goloans Canada</p>
            <h1 className="hero-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] leading-tight mb-6">
              Find the Best No Credit Check Loans in Canada
            </h1>

            {/* Loan Product Cards */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 mb-4">
              <div className="hero-loan-card">
                <LoanProductCard
                  icon={<TrendingUp size={28} className="text-white" />}
                  title="Microloans"
                  subtitle="$40-$400"
                />
              </div>
              <div className="hero-loan-card">
                <LoanProductCard
                  icon={<Banknote size={28} className="text-white" />}
                  title="Loans $7,500+"
                />
              </div>
              <div className="hero-loan-card">
                <LoanProductCard
                  icon={<CreditCard size={28} className="text-white" />}
                  title="Credit Card"
                  subtitle="Coming Soon"
                />
              </div>
            </div>

            {/* Installment Banner */}
            <div className="hero-banner bg-[#159A23] rounded-2xl p-4 md:p-5 flex items-center gap-3 mb-4">
              <Calendar size={28} className="text-white shrink-0" />
              <p className="text-white font-bold text-base md:text-lg">
                90+ Days Installment Loan $250 - $1500
              </p>
            </div>

            {/* Trust Badges */}
            <div className="hero-badges flex flex-wrap gap-3 md:gap-5 text-sm text-[#6B7280]">
              <span className="flex items-center gap-1.5">
                <CheckCircle size={16} className="text-[#159A23]" />
                Since 2020
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle size={16} className="text-[#159A23]" />
                Trusted by over 342,234+ Applicants
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle size={16} className="text-[#159A23]" />
                338 Reviews on Facebook - 98% Recommended
              </span>
            </div>
          </div>

          {/* Right Column - Decorative Image */}
          <div className="hero-image-container flex justify-center">
            <div className="relative w-full max-w-[400px] aspect-square">
              {/* Diagonal stripe background */}
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
              {/* Portrait */}
              <div className="absolute inset-4 md:inset-6 rounded-full overflow-hidden bg-[#E8EAED] flex items-center justify-center">
                <img
                  src="/assets/hero-person.png"
                  alt="Happy customer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
