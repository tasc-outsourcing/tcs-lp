const builtForItems = [
  "Businesses that need consistent monthly finance execution",
  "Teams preparing for growth, funding, or tighter controls",
  "Companies that want one accountable operating partner",
  "Founders who need visibility without expanding headcount",
];

export function BuiltFor() {
  return (
    <section className="relative py-16 px-6 md:px-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgb(0, 95, 131) 0%, rgb(0, 140, 180) 50%, rgb(0, 95, 131) 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-8"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1726533765275-a69cfd7f9897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEdWJhaSUyMHNreWxpbmUlMjBjaXR5c2NhcGUlMjBtb2Rlcm58ZW58MXx8fHwxNzcxNDA1NDU3fDA&ixlib=rb-4.1.0&q=80&w=1080')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[960px] mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-['Poppins',sans-serif] font-semibold text-[32px] md:text-[42px] leading-[1.15] tracking-[-1.5px] text-white mb-4">
            Best Fit for TASC Corporate Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[720px] mx-auto">
          {builtForItems.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10"
            >
              <div className="shrink-0 w-2 h-2 rounded-full bg-white/60" />
              <p className="font-['Poppins',sans-serif] text-white leading-[1.5] text-[14px]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
