import { PlusCircle } from 'lucide-react';
import { StarRating } from '@/components/StarRating';
import { SectionHeader } from '@/components/SectionHeader';
import { ScrollReveal } from '@/components/ScrollReveal';

const testimonials = [
  {
    quote: 'Great company they go the distance to make sure you get your loan and have amazing rates as well.',
    name: 'TJay G',
    location: 'Brooks, AB',
    initials: 'TJ',
  },
  {
    quote: 'Great company they go the distance to make sure you get your loan and have amazing rates as well.',
    name: 'TJay G',
    location: 'Brooks, AB',
    initials: 'TJ',
  },
  {
    quote: 'Great company they go the distance to make sure you get your loan and have amazing rates as well.',
    name: 'TJay G',
    location: 'Brooks, AB',
    initials: 'TJ',
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-[#F6F7F8] py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            heading="What our Customer Say About Our Loan Matching Service"
            subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            centered
            labelGreen={false}
          />
        </ScrollReveal>

        <ScrollReveal stagger={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-10 md:mt-12">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#E8EAED] rounded-2xl p-6 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
            >
              <StarRating count={5} />
              <p className="mt-4 text-base text-[#1F2937] italic leading-relaxed">
                {t.quote}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#159A23] flex items-center justify-center text-white text-sm font-bold">
                  {t.initials}
                </div>
                <div>
                  <p className="text-base font-bold text-[#1F2937]">{t.name}</p>
                  <p className="text-sm text-[#6B7280]">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </ScrollReveal>

        <ScrollReveal className="mt-8 text-center">
          <button className="inline-flex items-center gap-2 text-[#159A23] font-semibold text-base hover:underline transition-all duration-200 cursor-pointer">
            View More
            <PlusCircle size={18} />
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}
