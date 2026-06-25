import { useState, useEffect } from "react";
import imgLogo from "../../assets/41e69c87d6d5db14d880a06ff62d5895911e23fc.png";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
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
  );
}
