import { CalendarClock, CheckCircle2, FileBarChart2, ShieldCheck, Workflow } from "lucide-react";

const deliverables = [
  {
    title: "Monthly Bookkeeping",
    description: "Categorized entries, reconciled ledgers, and a clean month-end foundation.",
    icon: CheckCircle2,
  },
  {
    title: "VAT Working File Preparation",
    description: "Structured VAT schedules prepared and reviewed before filing windows.",
    icon: Workflow,
  },
  {
    title: "Reconciliation Controls",
    description: "Output vs input VAT checks with variance flags for review before submission.",
    icon: ShieldCheck,
  },
  {
    title: "Management Reporting Pack",
    description: "Practical reports for visibility into performance, exposure, and cash flow.",
    icon: FileBarChart2,
  },
  {
    title: "Deadline Management",
    description: "Calendar-led reminders and process checkpoints to avoid last-minute filing stress.",
    icon: CalendarClock,
  },
];

export function ComplianceChecklist() {
  return (
    <section className="py-16 px-6 md:px-16 bg-[#f8fafc]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
          <div className="bg-white rounded-[18px] border border-[#d4e8f1] p-6 md:p-8 shadow-sm">
            <h2
              className="font-['Poppins',sans-serif] font-semibold text-[30px] md:text-[40px] leading-[1.15] tracking-[-1.2px] bg-clip-text mb-4"
              style={{
                backgroundImage:
                  "linear-gradient(92deg, rgb(0, 191, 255), rgb(86, 219, 70))",
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
              }}
            >
              What You Receive
            </h2>
            <p className="font-['Poppins',sans-serif] text-[#005f83] leading-[1.7] text-[15px] mb-5">
              Every delivery cycle is structured so your team knows exactly what is being completed, reviewed, and prepared for filing.
            </p>
            <div className="rounded-[14px] bg-[#f0f8fc] border border-[#cfe7f2] p-4">
              <p className="font-['Poppins',sans-serif] text-[#005f83] text-[14px] leading-[1.6]">
                TASC Corporate Services follows a repeatable model focused on accuracy, control, and predictability.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {deliverables.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`relative bg-white rounded-[16px] border border-[#e2e8f0] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                    index === 4 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[16px]"
                    style={{
                      backgroundImage:
                        "linear-gradient(91deg, rgb(0, 191, 255), rgb(86, 219, 70))",
                    }}
                  />
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 w-10 h-10 rounded-[10px] bg-[#e7f6ff] border border-[#bfe5f7] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#005f83]" />
                    </div>
                    <div>
                      <h3 className="font-['Poppins',sans-serif] font-semibold text-[#005f83] text-[16px] leading-[1.4] mb-1">
                        {item.title}
                      </h3>
                      <p className="font-['Poppins',sans-serif] text-[#4a5568] leading-[1.65] text-[14px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
