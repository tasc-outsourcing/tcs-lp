import { HubSpotForm } from "./HubSpotForm";

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
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

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 pt-28 pb-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-5 text-white max-w-[620px]">
          <h1 className="font-['Poppins',sans-serif] font-semibold text-[32px] md:text-[46px] leading-[1.1] tracking-[-1.5px]">
            Accounting, VAT, and
            <br />
            Bookkeeping Support for UAE Businesses
          </h1>
          <p className="font-['Poppins',sans-serif] leading-[1.65] text-white/90 text-[15px]">
            TASC Corporate Services helps you run cleaner books, file VAT on time, and maintain reliable financial records with a practical outsourced finance workflow.
          </p>
          <p className="font-['Poppins',sans-serif] leading-[1.65] text-white/90 text-[15px]">
            No inflated promises. Just structured monthly execution, clear communication, and dependable support your team can plan around.
          </p>
        </div>

        {/* Right Form */}
        <div className="w-full max-w-[440px] bg-white rounded-[20px] p-7 md:p-8 flex flex-col gap-5 border border-[#c8e6f0] shadow-2xl">
          <h2 className="font-['Poppins',sans-serif] text-[24px] leading-[1.3] text-[#005f83] text-center tracking-[-0.8px]">
            Speak to an Expert
          </h2>
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
