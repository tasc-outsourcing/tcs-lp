import {
  FileText,
  Users,
  Shield,
  Stamp,
  Languages,
  Bell,
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Official Submissions & Follow-Up",
    description: "All submissions to UAE portals handled end to end.",
  },
  {
    icon: Users,
    title: "Workforce Documentation & Renewals",
    description:
      "Employee and family onboarding documents, status changes, ID coordination.",
  },
  {
    icon: Shield,
    title: "Workforce Records & Updates",
    description:
      "Workforce record processing, quota updates, renewals, and corrections.",
  },
  {
    icon: Stamp,
    title: "Company Record Support",
    description: "New records, renewals, amendments, and clearances.",
  },
  {
    icon: Languages,
    title: "Document Verification & Translation",
    description:
      "Certified verification and translations delivered with accuracy.",
  },
  {
    icon: Bell,
    title: "Ongoing Alerts & Deadline Monitoring",
    description: "We track deadlines so you are never caught off guard.",
  },
];

export function WhatWeSolve() {
  return (
    <section className="py-16 px-6 md:px-16 bg-white" id="services">
      <div className="max-w-[1200px] mx-auto">
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
            What We Solve
          </h2>
          <p className="font-['Poppins',sans-serif] text-[#005f83] mt-4 max-w-[550px] mx-auto leading-[1.6] text-[16px]">
            Every official interaction managed so you can focus on growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-white border border-[#e2e8f0] rounded-[16px] p-6 hover:shadow-xl hover:border-[#00bfff]/30 transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgb(0, 191, 255), rgb(86, 219, 70))",
                }}
              >
                <service.icon className="w-7 h-7 text-white" strokeWidth={1.8} />
              </div>
              <h3 className="font-['Poppins',sans-serif] font-semibold text-[17px] text-[#005f83] mb-2 leading-[1.35]">
                {service.title}
              </h3>
              <p className="font-['Poppins',sans-serif] text-[#4a5568] leading-[1.6] text-[14px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
