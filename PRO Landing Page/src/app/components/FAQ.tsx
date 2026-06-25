import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do I still need internal HR staff?",
    answer:
      "Yes. We work alongside your team. We take over PRO responsibilities that consume time and slow down operations, allowing your HR staff to focus on strategic priorities.",
  },
  {
    question: "Can TASC manage workforce documentation and company records together?",
    answer:
      "Yes. We handle every routine and ongoing official interaction your business needs, all under one roof.",
  },
  {
    question: "How fast will requests be completed?",
    answer:
      "Timing depends on external processing cycles. Our experience and consistent follow-up help shorten delays and reduce rejections.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 px-6 md:px-16 bg-white" id="faq">
      <div className="max-w-[800px] mx-auto">
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
            Frequently Asked Questions
          </h2>
          <p className="font-['Poppins',sans-serif] text-[#005f83] mt-4 max-w-[450px] mx-auto leading-[1.6] text-[16px]">
            Common questions about our PRO services.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`border rounded-[16px] overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "border-[#00bfff]/40 bg-white shadow-md"
                  : "border-[#e2e8f0] bg-[#f8fafc] hover:border-[#00bfff]/20"
              }`}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
              >
                <span className="font-['Poppins',sans-serif] font-semibold text-[17px] text-[#005f83] leading-[1.45] pr-6">
                  {faq.question}
                </span>
                <div
                  className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? "bg-[#005f83] rotate-180"
                      : "bg-[#e2e8f0]"
                  }`}
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-colors ${
                      openIndex === index ? "text-white" : "text-[#005f83]"
                    }`}
                    strokeWidth={2.5}
                  />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-[300px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-6 font-['Poppins',sans-serif] text-[#4a5568] leading-[1.7]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
