import {
  Building2,
  Calculator,
  ChevronRight,
  Landmark,
} from "lucide-react";

const clusters = [
  {
    label: "Corporate Tax",
    icon: Landmark,
    services: [
      {
        title: "Corporate Tax Registration",
        description:
          "We handle your registration with the Federal Tax Authority and track every deadline that follows it.",
      },
      {
        title: "Corporate Tax Filing",
        description:
          "We calculate your taxable income, prepare your annual return and manage the submission — accurately, and ahead of the due date.",
      },
      {
        title: "Corporate Tax Consultation",
        description:
          "Advice on exemptions, reliefs and structure, assessed against your actual setup rather than assumed to apply.",
      },
    ],
  },
  {
    label: "Accounting",
    icon: Calculator,
    services: [
      {
        title: "Bookkeeping",
        description:
          "Our accountants maintain your daily records, ledger entries and reconciliations, so your books are current rather than reconstructed at year-end.",
      },
      {
        title: "Financial Reporting",
        description:
          "Profit and loss, balance sheet, cash flow statement, trial balance and general ledger — prepared monthly so you can track performance as it happens.",
      },
      {
        title: "Audit Support",
        description:
          "We prepare you for year-end audit and keep your records aligned to International Financial Reporting Standards (IFRS).",
      },
      {
        title: "Accounting Setup",
        description:
          "We build your accounting system end to end, including chart of accounts and integration with QuickBooks, Xero or Zoho Books.",
      },
    ],
  },
  {
    label: "Value Added Tax",
    icon: Building2,
    services: [
      {
        title: "VAT Registration",
        description:
          "We complete your VAT registration and profile updates with the FTA from start to finish.",
      },
      {
        title: "VAT Filing",
        description:
          "We prepare and submit your quarterly returns, with input and output VAT reconciled before every submission.",
      },
      {
        title: "VAT Refunds",
        description:
          "We identify refunds you are eligible to claim and flag unexpected VAT payables before they reach your cash flow.",
      },
    ],
  },
];

export function Services() {
  return (
    <section className="bg-white px-6 py-20 md:px-16" id="services">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-[65ch]">
          <h2
            className="bg-clip-text text-[32px] font-semibold leading-[1.15] tracking-[-1.3px] md:text-[42px]"
            style={{
              backgroundImage:
                "linear-gradient(92deg, rgb(0, 191, 255), rgb(86, 219, 70))",
              WebkitTextFillColor: "transparent",
            }}
          >
            Award-winning corporate tax, accounting and VAT support — all under one roof
          </h2>
          <p className="mt-5 text-[15px] leading-[1.75] text-[#4a5568]">
            Corporate tax registration, accurate books, quarterly VAT, annual returns. We cover the full compliance cycle so nothing sits half-finished between vendors.
          </p>
          <p className="mt-3 text-[15px] leading-[1.75] text-[#4a5568]">
            UAE tax rules keep moving, and penalties start accruing from the first missed deadline. Our services scale with your transaction volume, at a fixed monthly fee.
          </p>
        </div>

        <div className="mt-12 border-t border-[#d9ebf3]">
          {clusters.map((cluster) => {
            const Icon = cluster.icon;
            return (
              <article
                key={cluster.label}
                className="grid gap-8 border-b border-[#d9ebf3] py-10 md:grid-cols-[240px_1fr] md:gap-12"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-[12px] border border-[#bfe5f7] bg-[#e7f6ff]">
                    <Icon className="h-6 w-6 text-[#005f83]" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-[22px] font-semibold leading-[1.25]">
                    <span className="block text-[#00a9e6]">{cluster.label}</span>
                    <span className="block text-[#005f83]">Services</span>
                  </h3>
                </div>
                <div>
                  {cluster.services.map((service, index) => (
                    <div
                      key={service.title}
                      className={`grid grid-cols-[1fr_auto] items-center gap-5 py-5 ${
                        index === 0 ? "pt-0" : "border-t border-[#e2e8f0]"
                      }`}
                    >
                      <div>
                        <h4 className="text-[16px] font-semibold text-[#005f83]">
                          {service.title}
                        </h4>
                        <p className="mt-1.5 text-[14px] leading-[1.7] text-[#4a5568]">
                          {service.description}
                        </p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-[#00a9e6]" aria-hidden="true" />
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
