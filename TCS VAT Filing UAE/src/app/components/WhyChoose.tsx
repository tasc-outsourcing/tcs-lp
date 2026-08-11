import { Check } from "lucide-react";
import teamImage from "../../assets/9cff85db04090540342d0112773706cbba3d5dce.png";

const items = [
  {
    title: "Trusted by 675+ Clients",
    description:
      "From newly licensed startups to established groups across 10+ industries. That experience comes with your account.",
  },
  {
    title: "19+ Years in the UAE",
    description:
      "We have worked through VAT introduction, corporate tax introduction and every penalty framework revision since. Your account is handled by people who have seen the rules change.",
  },
  {
    title: "Comprehensive Tax & Accounting Services",
    description:
      "Corporate tax, VAT, bookkeeping, financial reporting, payroll and e-invoicing. One provider for the full compliance cycle.",
  },
  {
    title: "Scalable, Tailored Service Levels",
    description:
      "A single monthly fee covers up to 300 transactions. Whether you are pre-revenue or processing at volume, the service scales without overage charges.",
  },
  {
    title: "One Partner Across Your Whole Setup",
    description:
      "Your tax position stays connected to your licences, your payroll and your visas. One relationship, one invoice, no handovers between vendors.",
  },
];

export function WhyChoose() {
  return (
    <section className="bg-[#f8fafc] px-6 py-20 md:px-16">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <h2
            className="bg-clip-text text-[32px] font-semibold leading-[1.15] tracking-[-1.3px] md:text-[42px]"
            style={{
              backgroundImage:
                "linear-gradient(92deg, rgb(0, 191, 255), rgb(86, 219, 70))",
              WebkitTextFillColor: "transparent",
            }}
          >
            Why Choose TASC Corporate Services?
          </h2>
          <p className="mt-5 text-[15px] leading-[1.75] text-[#4a5568]">
            TASC Corporate Services has supported businesses across the UAE for over 19 years. We handle compliance for companies that would rather not build a finance department — and because we also handle their licences, payroll and visas, nothing falls between providers.
          </p>
          <ul className="mt-7 space-y-5">
            {items.map((item) => (
              <li key={item.title} className="flex gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#00bfff] to-[#56db46] text-white">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-[16px] font-semibold text-[#005f83]">{item.title}</h3>
                  <p className="mt-1 text-[14px] leading-[1.65] text-[#4a5568]">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mx-auto w-full max-w-[520px] pb-10 sm:pl-8">
          <div className="overflow-hidden rounded-[20px] border border-[#d9ebf3] bg-white shadow-[0_16px_40px_rgba(0,95,131,0.14)]">
            <img src={teamImage} alt="" className="aspect-[4/5] w-full object-cover object-center" />
          </div>
          <div className="absolute bottom-0 left-0 rounded-[16px] border border-white/20 bg-[#005f83] px-6 py-5 text-white shadow-xl">
            <strong className="block text-[28px] leading-none">19+ Years</strong>
            <span className="mt-2 block text-[13px] leading-[1.4] text-white/80">Supporting UAE<br />Businesses</span>
          </div>
        </div>
      </div>
    </section>
  );
}
