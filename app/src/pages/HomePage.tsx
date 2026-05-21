import { HeroSection } from '@/sections/HeroSection';
import { StepsSection } from '@/sections/StepsSection';
import { PartnersSection } from '@/sections/PartnersSection';
import { SecuritySection } from '@/sections/SecuritySection';
import { TestimonialsSection } from '@/sections/TestimonialsSection';
import { FAQSection } from '@/sections/FAQSection';
import { CTABannerSection } from '@/sections/CTABannerSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <StepsSection />
      <PartnersSection />
      <SecuritySection />
      <TestimonialsSection />
      <FAQSection />
      <CTABannerSection />
    </>
  );
}
