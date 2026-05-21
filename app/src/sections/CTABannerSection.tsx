import { ScrollReveal } from '@/components/ScrollReveal';

export function CTABannerSection() {
  return (
    <section className="py-8 md:py-12">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div
            className="rounded-3xl p-8 md:p-12"
            style={{ background: 'linear-gradient(135deg, #159A23 0%, #12801E 100%)' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-3">
                  Apply Now and a Preferred Lender will reach out to you.
                </h3>
                <p className="text-base text-white/85">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
              <div className="lg:pl-6">
                <button className="bg-[#F28C18] hover:bg-[#D97A14] text-white font-bold text-lg px-8 py-4 rounded-full hover:scale-[1.02] transition-all duration-300 cursor-pointer whitespace-nowrap">
                  Claim Your Cash
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
