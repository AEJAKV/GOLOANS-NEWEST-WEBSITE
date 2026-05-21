import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, FileCheck, Home, MapPin } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';

gsap.registerPlugin(ScrollTrigger);

const securityFeatures = [
  { icon: <ShieldCheck size={32} />, label: 'Industry Grade Security' },
  { icon: <FileCheck size={32} />, label: 'Quick Online Application' },
  { icon: <Home size={32} />, label: 'No Collateral Needed' },
];

const provinces = [
  { name: 'Alberta', abbr: 'AB' },
  { name: 'British Columbia', abbr: 'BC' },
  { name: 'New Brunswick', abbr: 'NB' },
  { name: 'Ontario', abbr: 'ON' },
  { name: 'Newfoundland and Labrador', abbr: 'NL' },
  { name: 'Prince Edward Island', abbr: 'PEI' },
];

export function SecuritySection() {
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

      tl.from('.sec-heading', { opacity: 0, y: 30, duration: 0.6, ease: 'power2.out' })
        .from('.sec-shield', { opacity: 0, scale: 0.8, duration: 0.6, ease: 'power2.out' }, '-=0.4')
        .from('.sec-desc', { opacity: 0, x: 30, duration: 0.6, ease: 'power2.out' }, '-=0.4')
        .from('.sec-feature', { opacity: 0, y: 20, duration: 0.4, stagger: 0.1, ease: 'power2.out' }, '-=0.3')
        .from('.sec-province-heading', { opacity: 0, y: 20, duration: 0.5, ease: 'power2.out' }, '-=0.2')
        .from('.sec-province-card', { opacity: 0, y: 30, duration: 0.5, ease: 'power2.out' }, '-=0.3')
        .from('.sec-province-item', { opacity: 0, y: 15, duration: 0.3, stagger: 0.08, ease: 'power2.out' }, '-=0.3');
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Security Heading */}
        <div className="sec-heading mb-8">
          <SectionHeader heading="Your Security Comes First!" centered />
        </div>

        {/* Shield + Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center mb-10">
          {/* Shield */}
          <div className="sec-shield flex justify-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-green-50 flex items-center justify-center">
              <ShieldCheck size={80} className="text-[#159A23]" />
            </div>
          </div>

          {/* Description Box */}
          <div className="sec-desc border border-[#D1D5DB] rounded-2xl p-5 md:p-6">
            <p className="text-base text-[#1F2937] leading-relaxed mb-4">
              At GoLoans the security of your personal information is our top priority. We have many systems in place to protect the security and privacy of your personal information. It is important for us that you know we integrate a lot of security checks and technology on everything we do.
            </p>
            <p className="text-base text-[#1F2937] leading-relaxed">
              We believe that online privacy is key for the successful running of our business and to make sure your information is safe and prevent it from exploitation.
            </p>
          </div>
        </div>

        {/* 3 Security Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {securityFeatures.map((feature) => (
            <div
              key={feature.label}
              className="sec-feature flex items-center gap-3 justify-center"
            >
              <span className="text-[#159A23]">{feature.icon}</span>
              <span className="text-base font-semibold text-[#1F2937]">{feature.label}</span>
            </div>
          ))}
        </div>

        {/* Serving These Areas */}
        <div className="sec-province-heading mb-8">
          <h3 className="text-3xl md:text-4xl font-bold text-[#1F2937] text-center">
            Serving these Areas
          </h3>
        </div>

        <div className="sec-province-card rounded-3xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #159A23 0%, #12801E 100%)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 p-6 md:p-10 lg:p-12">
            {/* Left */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#159A23] bg-white" />
                <span className="text-xs font-semibold uppercase tracking-wider text-white/90">SELECTED PROVINCES</span>
              </div>
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Apply for GoLoans.ca in Canada
              </h4>
              <p className="text-base text-white/90 mb-6 leading-relaxed">
                Fast, simple access to cosigner and lender matching services across supported Canadian provinces.
              </p>
              <button className="bg-[#F28C18] hover:bg-[#D97A14] text-white font-bold text-lg px-8 py-4 rounded-full hover:scale-[1.02] transition-all duration-300 cursor-pointer mb-4">
                CLAIM YOUR CASH!
              </button>
              <p className="text-xs text-white/70">
                Coverage is limited to selected provinces and subject to lender match availability.
              </p>
            </div>

            {/* Right - Province Grid */}
            <div>
              <p className="text-sm font-semibold text-white/90 mb-4 uppercase tracking-wider">AVAILABLE PROVINCES</p>
              <div className="grid grid-cols-2 gap-3">
                {provinces.map((province) => (
                  <div
                    key={province.abbr}
                    className="sec-province-item bg-white/20 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3 hover:bg-white/30 transition-colors duration-200 cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/30 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white leading-tight">{province.name}</p>
                      <p className="text-xs text-white/70">{province.abbr}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
