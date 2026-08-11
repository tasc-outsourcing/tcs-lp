import { useState, useEffect } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import imgLogo from "figma:asset/41e69c87d6d5db14d880a06ff62d5895911e23fc.png";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[60] min-h-10 bg-[#003f59] text-white">
        <div className="mx-auto flex min-h-10 max-w-[1400px] flex-wrap items-center justify-center gap-x-5 gap-y-1 px-4 py-2 text-[11px] sm:text-[12px] md:justify-end md:px-16">
          <a
            href="https://www.google.com/maps/search/?api=1&query=1506%2C%20Tower%20A%2C%20Business%20Central%20Tower%2C%20Dubai%20Internet%20City%2C%20Dubai%2C%20UAE"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFE102]"
          >
            <MapPin className="h-3.5 w-3.5 shrink-0 text-[#FFE102]" aria-hidden="true" />
            <span>Business Central Tower, Dubai Internet City</span>
          </a>
          <span className="hidden h-4 w-px bg-white/30 sm:block" aria-hidden="true" />
          <a
            href="tel:+97143588500"
            className="inline-flex items-center gap-2 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFE102]"
          >
            <Phone className="h-3.5 w-3.5 text-[#FFE102]" aria-hidden="true" />
            <span>+971 4 358 8500</span>
          </a>
          <span className="hidden h-4 w-px bg-white/30 sm:block" aria-hidden="true" />
          <a
            href="mailto:info@tascoutsourcing.com"
            className="inline-flex items-center gap-2 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFE102]"
          >
            <Mail className="h-3.5 w-3.5 text-[#FFE102]" aria-hidden="true" />
            <span>info@tascoutsourcing.com</span>
          </a>
        </div>
      </div>
      <header
        className={`fixed top-[88px] sm:top-10 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#005f83]/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center px-6 md:px-16">
          <div className="h-[36px] w-[140px] shrink-0">
            <img alt="TASC" className="object-contain size-full" src={imgLogo} />
          </div>
        </div>
      </header>
    </>
  );
}
