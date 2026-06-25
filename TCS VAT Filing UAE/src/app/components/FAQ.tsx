import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What does your VAT filing service include?",
    answer:
      "TASC Corporate Services covers VAT registration support (where needed), transaction review, reconciliations, return preparation, and filing coordination based on your reporting cycle.",
  },
  {
    question: "Can you work with our current accounting system?",
    answer:
      "Yes. We work with your existing accounting setup and help standardize your workflows across accounting tools and spreadsheets where required.",
  },
  {
    question: "Do you provide audit support services?",
    answer:
      "No. We do not provide audit support services. Our focus is VAT and accounting compliance support to help you maintain cleaner records and more reliable filing processes.",
  },
  {
    question: "Do you provide FTA-certified expert services?",
    answer:
      "No. We do not position this service as FTA-certified expert support. TASC Corporate Services provides practical, process-driven VAT and accounting assistance tailored to your operations.",
  },
  {
    question: "What happens after I submit the form?",
    answer:
      "Our team reviews your current setup, discusses pain points, and recommends a practical service scope with delivery timelines and a clear handover plan.",
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
            Common questions about our VAT and accounting support.
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
