import HowItWorksSection from "./_partials/howItWorks";
import LiveCasesSection from "./_partials/liveCases";
import FeaturesSection from "./_partials/features";
import FaqSection from "./_partials/faq";
import FinalCtaSection from "./_partials/finalCta";
import HeroSection from '@/screens/homePage/_partials/hero';


const HomePage = () => {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <LiveCasesSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
};

export default HomePage;
