import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { WhatWeSolve } from "./components/WhatWeSolve";
import { WhyTASC } from "./components/WhyTASC";
import { WhoThisIsFor } from "./components/WhoThisIsFor";
import { HowItWorks } from "./components/HowItWorks";
import { FAQ } from "./components/FAQ";
import { CTASection } from "./components/CTASection";

export default function App() {
  return (
    <div className="min-h-screen w-full font-['Poppins',sans-serif]">
      <Header />
      <HeroSection />
      <WhatWeSolve />
      <WhyTASC />
      <WhoThisIsFor />
      <HowItWorks />
      <FAQ />
      <CTASection />
    </div>
  );
}