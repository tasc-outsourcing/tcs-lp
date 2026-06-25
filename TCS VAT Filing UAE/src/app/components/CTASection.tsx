import { HubSpotForm } from "./HubSpotForm";

export function CTASection() {
  return (
    <section className="py-16 px-6 md:px-16 bg-[#f8fafc]" id="contact">
      <div className="max-w-[900px] mx-auto">
        {/* CTA Header */}
        <div className="text-center mb-8">
          <h2
            className="font-['Poppins',sans-serif] font-semibold text-[32px] md:text-[42px] leading-[1.15] tracking-[-1.4px] bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(96deg, rgb(0, 191, 255), rgb(86, 219, 70))",
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
            }}
          >
            Let TASC Corporate Services Build Your Monthly Finance Workflow
          </h2>
          <p className="font-['Poppins',sans-serif] text-[#005f83] mt-3 text-[16px] leading-[1.6]">
            Tell us where you are today, and we will map the right accounting and VAT support model for your business.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-[20px] border border-[#c8e6f0] p-8 md:p-10 shadow-sm">
          <div className="text-center mb-8">
            <h3
              className="font-['Poppins',sans-serif] text-[24px] md:text-[28px] leading-[1.3] tracking-[-1px] bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(96deg, rgb(0, 191, 255), rgb(86, 219, 70))",
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
              }}
            >
              Book a Consultation
            </h3>
            <p className="font-['Poppins',sans-serif] text-[#4a5568] mt-2 leading-[1.6] max-w-[460px] mx-auto text-[14px]">
              Submit your details and our team will contact you with scope, deliverables, and onboarding steps.
            </p>
          </div>

          <HubSpotForm containerId="hubspot-form-cta" theme="light" className="max-w-[560px] mx-auto" />
        </div>
      </div>
    </section>
  );
}
