import { CalendarDays, Phone } from "lucide-react";

type CTASectionProps = {
  onBookConsultation: () => void;
};

export function CTASection({ onBookConsultation }: CTASectionProps) {
  return (
    <section className="relative overflow-hidden px-6 py-20 md:px-16" id="contact">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1726533765275-a69cfd7f9897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEdWJhaSUyMHNreWxpbmUlMjBjaXR5c2NhcGUlMjBtb2Rlcm58ZW58MXx8fHwxNzcxNDA1NDU3fDA&ixlib=rb-4.1.0&q=80&w=1600')" }}
        role="img"
        aria-label="Dubai skyline"
      />
      <div className="absolute inset-0 bg-[#003f59]/90" />
      <div className="relative mx-auto max-w-[1100px] text-center text-white">
        <h2 className="text-[32px] font-semibold leading-[1.15] tracking-[-1.3px] md:text-[42px]">
          Don't Wait for the Penalty Notice
        </h2>
        <p className="mx-auto mt-4 max-w-[850px] text-[14px] leading-[1.75] text-white/85 md:text-[16px]">
          Late registration costs <strong>AED 10,000</strong>. Late filing runs <strong>AED 500 a month</strong> in year one and <strong>AED 1,000 a month</strong> after that, with <strong>14% annual interest</strong> on unpaid tax. A nil return is still a mandatory return. Book a free compliance health check and find out where you stand.
        </p>
        <div className="mx-auto mt-8 grid max-w-[800px] gap-4 md:grid-cols-2">
          <a
            href="tel:+97143588500"
            className="flex items-center gap-4 rounded-[18px] border border-white/20 bg-white p-5 text-left text-[#005f83] shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFE102]"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[#e7f6ff]">
              <Phone className="h-5 w-5" aria-hidden="true" />
            </span>
            <span><strong className="block text-[14px]">Call us</strong><span className="text-[15px]">+971 4 358 8500</span></span>
          </a>
          <button
            type="button"
            onClick={onBookConsultation}
            className="flex items-center gap-4 rounded-[18px] border border-white/20 bg-white p-5 text-left text-[#005f83] shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFE102]"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[#e7f6ff]">
              <CalendarDays className="h-5 w-5" aria-hidden="true" />
            </span>
            <span><strong className="block text-[14px]">Book Free Consultation</strong><span className="text-[15px]">Online Meeting</span></span>
          </button>
        </div>
      </div>
    </section>
  );
}
