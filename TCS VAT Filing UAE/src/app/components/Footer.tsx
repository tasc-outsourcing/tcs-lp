export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#003f59] text-white px-6 md:px-16 py-8">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <p className="font-['Poppins',sans-serif] text-[16px] font-semibold">
            TASC Corporate Services
          </p>
          <p className="font-['Poppins',sans-serif] text-[13px] text-white/75 mt-1">
            VAT, bookkeeping, and reporting support for UAE businesses.
          </p>
        </div>
        <p className="font-['Poppins',sans-serif] text-[12px] text-white/70">
          © {year} TASC Corporate Services. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
