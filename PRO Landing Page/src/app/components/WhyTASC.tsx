import {
  AlertTriangle,
  Clock,
  Building2,
  ShieldAlert,
  ShieldCheck,
  Layers,
  MonitorSmartphone,
  BarChart3,
  Users,
} from "lucide-react";

const challenges = [
  {
    icon: AlertTriangle,
    title: "Costly Errors",
    desc: "Paperwork errors lead to delays, fines, and lost credibility.",
  },
  {
    icon: Clock,
    title: "Resource Drain",
    desc: "HR and admin teams consumed by follow-ups and paperwork.",
  },
  {
    icon: Building2,
    title: "Complex Navigation",
    desc: "Navigating multiple portals and departments.",
  },
  {
    icon: ShieldAlert,
    title: "Missed Deadlines",
    desc: "Service interruptions from missed renewals.",
  },
];

const solutions = [
  {
    num: "01",
    icon: ShieldCheck,
    title: "Always On Track",
    desc: "Real-time tracking and direct UAE portal integration — fewer delays and less back-and-forth.",
  },
  {
    num: "02",
    icon: Layers,
    title: "Everything After Company Setup, Done",
    desc: "Portal setup, workforce documentation, payroll, banking, and record renewals — all on one platform.",
  },
  {
    num: "03",
    icon: MonitorSmartphone,
    title: "Purpose-Built Digital Platform",
    desc: "End-to-end tech platform for company setup, onboarding, and PRO support in the UAE.",
  },
  {
    num: "04",
    icon: BarChart3,
    title: "Track Everything. Escalate Nothing.",
    desc: "Every submission timestamped, tracked, and visible via integrated dashboards.",
  },
  {
    num: "05",
    icon: Users,
    title: "PRO Officers with Portal Access",
    desc: "In-house PRO teams embedded in UAE processes for faster issue resolution.",
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
            Why TASC PRO Services
          </h2>
          <p className="font-['Poppins',sans-serif] text-[#005f83] mt-4 max-w-[550px] mx-auto leading-[1.6] text-[16px]">
            We handle the complexity so your team can focus on growth.
          </p>
        </div>

        {/* Challenges Section */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="h-[3px] w-10 rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(91deg, rgb(0, 191, 255), rgb(86, 219, 70))",
              }}
            />
            <h3 className="font-['Poppins',sans-serif] font-semibold text-[18px] text-[#005f83] tracking-[-0.3px]">
              Common Challenges
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {challenges.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative bg-white rounded-[14px] border border-[#e2e8f0] p-5 hover:shadow-lg hover:border-[#00bfff]/30 transition-all duration-300"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[14px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      backgroundImage:
                        "linear-gradient(91deg, rgb(0, 191, 255), rgb(86, 219, 70))",
                    }}
                  />
                  <div className="w-10 h-10 rounded-lg bg-[#005f83]/8 flex items-center justify-center mb-3">
                    <Icon className="w-[18px] h-[18px] text-[#005f83]" />
                  </div>
                  <p className="font-['Poppins',sans-serif] font-semibold text-[#005f83] text-[14px] mb-1">
                    {item.title}
                  </p>
                  <p className="font-['Poppins',sans-serif] text-[#4a5568] text-[13px] leading-[1.5]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Solutions Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div
              className="h-[3px] w-10 rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(91deg, rgb(0, 191, 255), rgb(86, 219, 70))",
              }}
            />
            <h3 className="font-['Poppins',sans-serif] font-semibold text-[18px] text-[#005f83] tracking-[-0.3px]">
              How TASC Solves Them
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-5">
            {solutions.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.num}
                  className="group relative bg-white rounded-[14px] border border-[#e2e8f0] p-5 hover:shadow-lg hover:border-[#00bfff]/30 transition-all duration-300 flex flex-col w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-white font-['Poppins',sans-serif] font-semibold text-[12px]"
                      style={{
                        backgroundImage:
                          "linear-gradient(135deg, rgb(0, 191, 255), rgb(86, 219, 70))",
                      }}
                    >
                      {item.num}
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-[#005f83]/8 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#005f83]" />
                    </div>
                  </div>
                  <p className="font-['Poppins',sans-serif] font-semibold text-[#005f83] text-[15px] leading-[1.35] mb-2">
                    {item.title}
                  </p>
                  <p className="font-['Poppins',sans-serif] text-[#4a5568] text-[13px] leading-[1.6] flex-1">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
