import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { WhatWeSolve } from "./components/WhatWeSolve";
import { ComplianceChecklist } from "./components/ComplianceChecklist";
import { WhoThisIsFor } from "./components/WhoThisIsFor";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen w-full font-['Poppins',sans-serif]">
      <Header />
      <HeroSection />
      <WhatWeSolve />
      <ComplianceChecklist />
      <WhoThisIsFor />
      <CTASection />
      <Footer />
    </div>
  );
}
