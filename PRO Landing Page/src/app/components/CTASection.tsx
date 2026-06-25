import { useEffect, useState } from "react";
import { HubSpotForm } from "./HubSpotForm";

export function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isModalOpen]);

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
            Ready to Simplify Your Operations?
          </h2>
          <p className="font-['Poppins',sans-serif] text-[#005f83] mt-3 text-[16px] leading-[1.6]">
            Get in touch and let us handle the complexity.
          </p>
          <div className="mt-6">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-10 py-3.5 rounded-full text-white font-['Kumbh_Sans',sans-serif] font-bold hover:opacity-90 transition-opacity text-[16px] shadow-lg"
              style={{
                backgroundImage:
                  "linear-gradient(91deg, rgb(0, 191, 255), rgb(86, 219, 70))",
              }}
            >
              Get in touch
            </button>
          </div>
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
              Speak to an Expert
            </h3>
            <p className="font-['Poppins',sans-serif] text-[#4a5568] mt-2 leading-[1.6] max-w-[460px] mx-auto text-[14px]">
              Fill out the form and our PRO specialists will guide you through the process.
            </p>
          </div>

          <div className="max-w-[560px] mx-auto">
            <HubSpotForm
              portalId="20309062"
              formId="e84c7c2d-2428-4670-8c27-1949ef29a365"
              region="na1"
              targetId="hubspot-form-cta"
              className="hubspot-form-embed hubspot-form-cta"
            />
          </div>
        </div>
      </div>

      {isModalOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 bg-black/60"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="w-full max-w-[640px] bg-white rounded-[20px] border border-[#c8e6f0] p-6 md:p-8 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="font-['Poppins',sans-serif] text-[22px] md:text-[26px] leading-[1.3] tracking-[-0.8px] text-[#005f83]">
                  Speak to an Expert
                </h3>
                <p className="font-['Poppins',sans-serif] text-[#4a5568] mt-2 leading-[1.6] text-[14px]">
                  Fill out the form and our PRO specialists will guide you through the process.
                </p>
              </div>
              <button
                type="button"
                aria-label="Close form"
                onClick={() => setIsModalOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c8e6f0] text-[#005f83] hover:bg-[#f0f6f9] transition-colors"
              >
                ✕
              </button>
            </div>
            <HubSpotForm
              portalId="20309062"
              formId="e84c7c2d-2428-4670-8c27-1949ef29a365"
              region="na1"
              targetId="hubspot-form-cta-modal"
              className="hubspot-form-embed hubspot-form-cta"
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
