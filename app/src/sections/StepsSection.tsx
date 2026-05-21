import { SectionHeader } from '@/components/SectionHeader';
import { ScrollReveal } from '@/components/ScrollReveal';

const steps = [
  {
    number: '1',
    title: 'Tell Us What You Need',
    description: 'Fill out a request in as fast as 30 seconds.',
  },
  {
    number: '2',
    title: 'We Request Your Funds to Trusted Lenders',
    description: 'Lenders responds fast? get funds as quick as two hours.',
  },
  {
    number: '3',
    title: 'Complete IBV and Get a Decision 4x Faster',
    description: 'Instant Bank Verifications Technology is Secure and Allows Due Diligence Achieved in Record Time.',
  },
];

export function StepsSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-10 md:mb-12">
            <SectionHeader
              label="Microloans"
              heading="3 Simple Steps"
              subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              centered
            />
          </div>
        </ScrollReveal>

        <ScrollReveal stagger={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#E8EAED] rounded-2xl p-6 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#159A23] rounded-l-2xl" />
              <div className="flex items-start gap-4">
                <span className="text-5xl font-bold text-[#1F2937] leading-none shrink-0">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-[#1F2937] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
