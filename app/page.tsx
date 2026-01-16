import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustMetrics from "@/components/TrustMetrics";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import IndustriesSystems from "@/components/IndustriesSystems";
import FrameworksTools from "@/components/FrameworksTools";
import AIAutomation from "@/components/AIAutomation";
import HowWeWork from "@/components/HowWeWork";
import QAPackages from "@/components/QAPackages";
import WhyDexQA from "@/components/WhyDexQA";
import ContactDexQA from "@/components/ContactDexQA";
import SecurityAssurance from "@/components/SecurityAssurance";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

export default function Home() {
  return (
    <main className="min-h-screen pb-20 md:pb-0">
      <Header />
      <Hero />
      <TrustMetrics />
      <AboutUs />
      <Services />
      <IndustriesSystems />
      <FrameworksTools />
      <AIAutomation />
      <HowWeWork />
      <QAPackages />
      <WhyDexQA />
      <ContactDexQA />
      <SecurityAssurance />
      <ContactCTA />
      <Footer />
      <MobileStickyCTA />
    </main>
  );
}

