const comparisons = [
  {
    vendor: "General accounting assistance",
    tcs: "Defined delivery rhythm with named ownership",
  },
  {
    vendor: "Reports delivered without context",
    tcs: "Reporting explained with practical action points",
  },
  {
    vendor: "Task-based support only",
    tcs: "End-to-end workflow from records to filing support",
  },
  {
    vendor: "Reactive communication",
    tcs: "Proactive reminders and escalation before deadlines",
  },
];

export function WhyTASC() {
  return (
    <section className="py-16 px-6 md:px-16 bg-[#f8fafc]" id="why-tasc">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2
            className="font-['Poppins',sans-serif] font-semibold text-[32px] md:text-[42px] leading-[1.15] tracking-[-1.5px] bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(92deg, rgb(0, 191, 255), rgb(86, 219, 70))",
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
            }}
          >
            Why TASC Corporate Services
          </h2>
        </div>

        {/* Comparison Table */}
        <div className="max-w-[900px] mx-auto bg-white rounded-[16px] border border-[#e2e8f0] overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-2 border-b border-[#e2e8f0]">
            <div className="p-5 border-r border-[#e2e8f0]">
              <h3 className="font-['Poppins',sans-serif] font-semibold text-[#005f83] text-[16px] text-center">
                Another vendor
              </h3>
            </div>
            <div className="p-5">
              <h3 className="font-['Poppins',sans-serif] font-semibold text-[#005f83] text-[16px] text-center">
                TASC Corporate Services
              </h3>
            </div>
          </div>

          {/* Table Rows */}
          {comparisons.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-2 ${
                index !== comparisons.length - 1 ? "border-b border-[#e2e8f0]" : ""
              }`}
            >
              <div className="p-5 border-r border-[#e2e8f0]">
                <p className="font-['Poppins',sans-serif] text-[#4a5568] text-[14px] leading-[1.6] text-center">
                  {item.vendor}
                </p>
              </div>
              <div className="p-5 bg-[#f8fafc]">
                <p className="font-['Poppins',sans-serif] text-[#005f83] font-medium text-[14px] leading-[1.6] text-center">
                  {item.tcs}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
