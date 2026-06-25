import { ArrowRight, Check } from "lucide-react";

const scopeCards = [
  {
    label: "Core",
    title: "VAT Compliance",
    outcome: "Lower filing risk with a controlled submission process.",
    items: [
      "VAT registration and profile updates",
      "VAT return preparation and filing support",
      "Output and input VAT reconciliation",
      "Submission planning and deadline tracking",
    ],
  },
  {
    label: "Operations",
    title: "Bookkeeping",
    outcome: "Clean monthly records your team can trust.",
    items: [
      "Transaction recording and categorization",
      "Bank and ledger reconciliation",
      "Month-end close support",
      "Cleanup of inconsistent historical entries",
    ],
  },
  {
    label: "Visibility",
    title: "Reporting & Payroll",
    outcome: "Clear reporting for better financial decisions.",
    items: [
      "Management reporting packs",
      "Payroll processing support",
      "Accounting system setup and cleanup",
      "Operational handover and process documentation",
    ],
  },
];

export function WhoThisIsFor() {
  return (
    <section className="py-16 px-6 md:px-16 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-8">
          <p className="inline-flex items-center rounded-full border border-[#c9e7f5] bg-[#f2faff] px-4 py-1.5 text-[#005f83] font-['Poppins',sans-serif] text-[12px] font-medium tracking-[0.2px]">
            Service Scope
          </p>
          <h2
            className="font-['Poppins',sans-serif] font-semibold text-[32px] md:text-[42px] leading-[1.12] tracking-[-1.4px] bg-clip-text mt-4 mb-3"
            style={{
              backgroundImage:
                "linear-gradient(92deg, rgb(0, 191, 255), rgb(86, 219, 70))",
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
            }}
          >
            Our Services Include.
          </h2>
          <p className="font-['Poppins',sans-serif] text-[#005f83] max-w-[800px] mx-auto leading-[1.6] text-[15px]">
            We work with foreign companies entering the UAE, startups and SMEs, companies without in-house finance teams, and businesses that want one partner for VAT, bookkeeping, and reporting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
          {scopeCards.map((card) => (
            <article
              key={card.title}
              className="group relative overflow-hidden rounded-[18px] border border-[#d9ebf3] bg-white p-6 shadow-[0_6px_20px_rgba(0,95,131,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,95,131,0.12)]"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[4px]"
                style={{
                  backgroundImage:
                    "linear-gradient(91deg, rgb(0, 191, 255), rgb(86, 219, 70))",
                }}
              />
              <p className="inline-flex items-center rounded-full bg-[#eaf8ff] px-3 py-1 text-[11px] font-semibold tracking-[0.3px] text-[#0077a3] font-['Poppins',sans-serif]">
                {card.label}
              </p>
              <h3 className="mt-4 font-['Poppins',sans-serif] font-semibold text-[#005f83] text-[20px] leading-[1.3]">
                {card.title}
              </h3>
              <p className="mt-2 font-['Poppins',sans-serif] text-[#4a5568] text-[14px] leading-[1.6]">
                {card.outcome}
              </p>
              <ul className="mt-5 space-y-3">
                {card.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 font-['Poppins',sans-serif] text-[#355265] text-[13px] leading-[1.5]"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#00a9e6]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-[18px] border border-[#cde9f5] bg-gradient-to-r from-[#f3fbff] to-[#edf9f3] p-5 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-['Poppins',sans-serif] text-[#005f83] text-[14px] md:text-[15px] leading-[1.6]">
            Need a custom scope? TASC Corporate Services can phase delivery by priority: cleanup, control, then scale.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#005f83] px-5 py-2.5 text-white font-['Poppins',sans-serif] text-[13px] font-semibold hover:bg-[#004b68] transition-colors"
          >
            Discuss Your Scope
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
