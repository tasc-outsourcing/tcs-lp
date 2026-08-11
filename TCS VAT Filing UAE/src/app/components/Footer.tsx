import { Mail, MapPin, Phone } from "lucide-react";
import imgLogo from "figma:asset/41e69c87d6d5db14d880a06ff62d5895911e23fc.png";

export function Footer() {
  return (
    <footer className="bg-[#003f59] px-6 py-10 text-white md:px-16">
      <div className="mx-auto grid max-w-[1200px] gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div className="space-y-4">
          <div className="h-[44px] w-[190px] md:w-[220px]">
            <img
              src={imgLogo}
              alt="TASC Corporate Services"
              className="h-full w-full object-contain object-left"
            />
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=1506%2C%20Tower%20A%2C%20Business%20Central%20Tower%2C%20Dubai%20Internet%20City%2C%20Dubai%2C%20UAE"
            target="_blank"
            rel="noreferrer"
            className="flex max-w-[520px] items-start gap-3 rounded-sm text-[13px] leading-[1.6] text-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#FFE102]"
          >
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#FFE102]" aria-hidden="true" />
            <span>Business Central Tower, Dubai Internet City</span>
          </a>
          <a href="tel:+97143588500" className="flex w-fit items-center gap-3 rounded-sm text-[13px] text-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#FFE102]">
            <Phone className="h-4 w-4 text-[#FFE102]" aria-hidden="true" />
            <span>+971 4 358 8500</span>
          </a>
          <a href="mailto:info@tascoutsourcing.com" className="flex w-fit items-center gap-3 rounded-sm text-[13px] text-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#FFE102]">
            <Mail className="h-4 w-4 text-[#FFE102]" aria-hidden="true" />
            <span>info@tascoutsourcing.com</span>
          </a>
        </div>
        <p className="text-[12px] text-white/65">© 2026 TASC Corporate Services</p>
      </div>
    </footer>
  );
}
