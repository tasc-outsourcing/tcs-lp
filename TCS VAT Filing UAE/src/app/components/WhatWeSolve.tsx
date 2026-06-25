import { AlertTriangle } from "lucide-react";

const complianceGaps = [
  {
    amount: "Fragmented Records",
    description: "Transactions spread across systems make month-end and VAT filing risky.",
  },
  {
    amount: "Last-Minute Filings",
    description: "Late data handovers create avoidable errors and deadline pressure.",
  },
  {
    amount: "Weak Visibility",
    description: "Without clear reporting, decisions are made on incomplete numbers.",
  },
  {
    amount: "Process Dependence",
    description: "Compliance often depends on one person instead of a repeatable process.",
  },
];

export function WhatWeSolve() {
  return (
    <section className="py-16 px-6 md:px-16 bg-white" id="services">
      <div className="max-w-[1200px] mx-auto">
        {/* Gaps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {complianceGaps.map((item) => (
            <div
              key={item.description}
              className="group relative bg-white rounded-[14px] border border-[#e2e8f0] p-5 hover:shadow-lg hover:border-[#00bfff]/30 transition-all duration-300 text-center"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[14px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundImage:
                    "linear-gradient(91deg, rgb(0, 191, 255), rgb(86, 219, 70))",
                }}
              />
              <div className="flex justify-center mb-3">
                <AlertTriangle className="w-8 h-8 text-[#005f83]" />
              </div>
              <p className="font-['Poppins',sans-serif] font-semibold text-[#005f83] text-[18px] mb-2">
                {item.amount}
              </p>
              <p className="font-['Poppins',sans-serif] text-[#4a5568] text-[13px] leading-[1.5]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Explanation Text */}
        <div className="max-w-[900px] mx-auto bg-[#f8fafc] rounded-[16px] border border-[#e2e8f0] p-6 md:p-8">
          <p className="font-['Poppins',sans-serif] text-[#005f83] leading-[1.7] text-[15px]">
            TASC Corporate Services is structured to solve these problems with clear ownership across bookkeeping, reconciliations, VAT return preparation, reporting, and submission support. You get one operating rhythm your team can rely on month after month.
          </p>
        </div>
      </div>
    </section>
  );
}
