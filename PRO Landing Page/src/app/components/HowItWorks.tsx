const steps = [
  {
    number: "01",
    title: "Get Aligned",
    description:
      "We start with a clear intake to understand your company and needs.",
  },
  {
    number: "02",
    title: "Document Prep",
    description: "We prepare everything required before submission.",
  },
  {
    number: "03",
    title: "Submission & Follow-Up",
    description: "We submit and handle all official touchpoints.",
  },
  {
    number: "04",
    title: "Delivery & Tracking",
    description:
      "Outputs delivered. We track expiry dates and manage renewals.",
  },
  {
    number: "05",
    title: "Ongoing Support",
    description: "We keep you aligned as requirements and processes change.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 px-6 md:px-16 bg-[#f8fafc]" id="process">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-10">
          <h2
            className="font-['Poppins',sans-serif] font-semibold text-[32px] md:text-[42px] leading-[1.15] tracking-[-1.5px] bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(96deg, rgb(0, 191, 255), rgb(86, 219, 70))",
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
            }}
          >
            How It Works
          </h2>
          <p className="font-['Poppins',sans-serif] text-[#005f83] mt-4 max-w-[500px] mx-auto leading-[1.6] text-[16px]">
            A streamlined process to keep your business on track.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-[36px] left-[10%] right-[10%] h-[2px]">
            <div
              className="absolute inset-0 h-full rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgb(0, 191, 255), rgb(86, 219, 70))",
              }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-5">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center text-center relative"
              >
                <div
                  className="w-[72px] h-[72px] rounded-full flex items-center justify-center mb-4 relative z-10 border-4 border-[#f8fafc] shadow-lg"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, rgb(0, 191, 255), rgb(86, 219, 70))",
                  }}
                >
                  <span className="font-['Poppins',sans-serif] font-semibold text-[20px] text-white">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-['Poppins',sans-serif] font-semibold text-[15px] text-[#005f83] mb-1">
                  {step.title}
                </h3>
                <p className="font-['Poppins',sans-serif] text-[#4a5568] leading-[1.5] text-[13px] max-w-[180px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
