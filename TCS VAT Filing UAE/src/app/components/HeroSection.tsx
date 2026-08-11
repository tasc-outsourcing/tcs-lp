import { HubSpotForm } from "./HubSpotForm";
import { ChevronRight } from "lucide-react";

type HeroSectionProps = {
  onBookConsultation: () => void;
};

export function HeroSection({ onBookConsultation }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#005f83]">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1726533765275-a69cfd7f9897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEdWJhaSUyMHNreWxpbmUlMjBjaXR5c2NhcGUlMjBtb2Rlcm58ZW58MXx8fHwxNzcxNDA1NDU3fDA&ixlib=rb-4.1.0&q=80&w=1080')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#005f83]/80 via-transparent to-[#004a66]/60" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 pt-36 pb-20 lg:pt-32 lg:pb-12 flex flex-col lg:flex-row items-center gap-10 xl:gap-14">
        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-5 text-white max-w-[680px]">
          <p className="w-fit rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[12px] font-semibold tracking-[0.3px]">
            Complete Finance Function
          </p>
          <h1 className="font-['Poppins',sans-serif] font-semibold text-[34px] md:text-[48px] xl:text-[54px] leading-[1.08] tracking-[-1.6px]">
            Your full UAE finance function for{" "}
            <span className="relative inline-block whitespace-nowrap">
              AED 7,500
              <span className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full bg-[#FFE102]" aria-hidden="true" />
            </span>{" "}
            a month
          </h1>
          <p className="font-['Poppins',sans-serif] leading-[1.7] text-white/90 text-[15px] md:text-[16px] max-w-[65ch]">
            Bookkeeping, VAT, financial reporting and corporate tax filing. Up to 300 transactions a month, one fixed fee, one invoice.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onBookConsultation}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#00bfff] to-[#56db46] px-6 py-3.5 text-[14px] font-semibold text-white shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFE102]"
            >
              Book free consultation
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={onBookConsultation}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 px-6 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFE102]"
            >
              View service fees
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
          <dl className="grid grid-cols-3 gap-4 border-t border-white/25 pt-5 sm:gap-7">
            {[
              ["675+", "Clients served"],
              ["19+", "Years in the UAE"],
              ["25+", "Industry awards"],
            ].map(([number, label]) => (
              <div key={label}>
                <dt className="mb-1 text-[27px] font-semibold leading-none sm:text-[34px]">{number}</dt>
                <dd className="text-[11px] leading-[1.35] text-white/75 sm:text-[12px]">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right Form */}
        <div className="w-full max-w-[440px] bg-white rounded-[20px] p-6 md:p-7 flex flex-col gap-3 border border-[#c8e6f0] shadow-2xl">
          <h2 className="font-['Poppins',sans-serif] font-semibold text-[23px] leading-[1.3] text-[#005f83] text-center tracking-[-0.8px]">
            Book your free consultation
          </h2>
          <p className="text-center text-[13px] leading-[1.55] text-[#4a5568]">
            Share your details and our team will be in touch within one working day.
          </p>
          <HubSpotForm containerId="hubspot-form-hero" theme="dark" />
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 30C240 60 480 60 720 30C960 0 1200 0 1440 30V60H0V30Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
