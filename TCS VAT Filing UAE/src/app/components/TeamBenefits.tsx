import { Check } from "lucide-react";

const benefits = [
  {
    title: "Accurate, Timely Bookkeeping",
    description:
      "Your records are maintained through the year, not assembled at year-end. Clean books mean filing is routine and your data holds up if the FTA asks to see it.",
  },
  {
    title: "On-Time Registration & Filing",
    description:
      "We track every deadline that applies to your entity and prepare each submission well ahead of it. The fines that catch businesses off-guard are all deadline fines.",
  },
  {
    title: "Your Position Reviewed, Not Just Filed",
    description:
      "We assess your tax position before preparing the return, so reliefs are identified rather than missed. Filing is the output. The review is the value.",
  },
  {
    title: "IFRS-Aligned Standards",
    description:
      "Records prepared to International Financial Reporting Standards and adapted for UAE requirements. That matters when you raise finance, onboard investors or go through audit.",
  },
  {
    title: "Reliefs and Exemptions Applied",
    description:
      "Free zone qualifying income, Small Business Relief and other treatments assessed against your actual structure — not assumed, and not overlooked.",
  },
  {
    title: "One Partner, One Invoice",
    description:
      "Accounting sits alongside your licences, payroll, visas and PRO work. Nothing falls between vendors, because there is only one vendor.",
  },
];

export function TeamBenefits() {
  return (
    <section className="bg-white px-6 py-20 md:px-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-[800px] text-center">
          <h2
            className="bg-clip-text text-[32px] font-semibold leading-[1.15] tracking-[-1.3px] md:text-[42px]"
            style={{
              backgroundImage:
                "linear-gradient(92deg, rgb(0, 191, 255), rgb(86, 219, 70))",
              WebkitTextFillColor: "transparent",
            }}
          >
            Why work with TASC Corporate Services' accounting team?
          </h2>
          <p className="mt-5 text-[15px] leading-[1.75] text-[#4a5568]">
            Full UAE compliance takes more than a bookkeeper. It takes a provider who understands how the local rules connect to the rest of your business. Here is what you get with our team:
          </p>
        </div>
        <div className="mt-11 grid gap-x-8 gap-y-9 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="flex gap-4">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#00bfff] to-[#56db46] text-white">
                <Check className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-[16px] font-semibold text-[#005f83]">{benefit.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-[#4a5568]">{benefit.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
