import { Check } from "lucide-react";

const benefits = [
  "Reliable workforce documentation without internal resource drain",
  "Company records and renewals handled professionally",
  "Clear ownership of every required task",
  "Less risk and reduced follow-up overhead",
];

export function WhoThisIsFor() {
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
            Who This Is For
          </h2>
          <p className="font-['Poppins',sans-serif] text-white/85 text-[16px] leading-[1.6] max-w-[580px] mx-auto">
            Ideal for HR leaders, operations heads, founders, and UAE business owners who want:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[720px] mx-auto">
          {benefits.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10"
            >
              <div className="shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                <Check className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
              </div>
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
