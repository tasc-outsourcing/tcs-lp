import { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { Services } from "./components/Services";
import { WhyChoose } from "./components/WhyChoose";
import { CTASection } from "./components/CTASection";
import { TeamBenefits } from "./components/TeamBenefits";
import { ConsultationDialog } from "./components/ConsultationDialog";
import { Footer } from "./components/Footer";

export default function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <div className="min-h-screen w-full font-['Poppins',sans-serif]">
      <Header />
      <main>
        <HeroSection onBookConsultation={() => setConsultationOpen(true)} />
        <Services />
        <WhyChoose />
        <CTASection onBookConsultation={() => setConsultationOpen(true)} />
        <TeamBenefits />
      </main>
      <Footer />
      <ConsultationDialog
        open={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </div>
  );
}
