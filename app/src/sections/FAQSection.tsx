import { useState } from 'react';
import { ChevronDown, PlusCircle } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { ScrollReveal } from '@/components/ScrollReveal';

const faqs = [
  {
    question: 'Is Goloans a Lender?',
    answer: 'No. GoLoans is not a lender. GoLoans is a loan matching services, to help score leads for better indexing.',
  },
  {
    question: 'What Do Online Loans Really Mean?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'What is the easiest loan to get approved for?',
    answer: 'An Installment Loan is the easiest solution to get approved for as its application process is fast and easy. Among the primary qualification requirements are legal age and citizenship, valid bank account, and stable income source. Also, the funds may be obtained as soon as the next business day.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#F6F7F8] py-16 md:py-20">
      <div className="max-w-[700px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            heading="Frequently Asked Questions"
            subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            centered
            labelGreen={false}
          />
        </ScrollReveal>

        <ScrollReveal stagger={0.1} className="mt-10">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#E5E7EB]">
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between py-4 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A23] focus-visible:ring-offset-2 rounded"
                aria-expanded={openIndex === index}
              >
                <span className="text-base font-bold text-[#1F2937] pr-4">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-[#159A23] shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-[500px] pb-4' : 'max-h-0'
                }`}
              >
                <p className="text-base text-[#6B7280] leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </ScrollReveal>

        <ScrollReveal className="mt-8 text-center">
          <button className="inline-flex items-center gap-2 text-[#159A23] font-semibold text-base hover:underline transition-all duration-200 cursor-pointer">
            View all FAQs
            <PlusCircle size={18} />
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}
