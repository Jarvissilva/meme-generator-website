export default function LegalPagesLayout({ children }) {
  return (
    <main className="px-[clamp(1.25rem,6vw,6rem)] py-[clamp(1.25rem,6vw,3rem)] lg:px-[clamp(6rem,16vw,16rem)] bg-sky-50">
      <div className="bg-white p-[clamp(1.25rem,5vw,2rem)] space-y-[clamp(1.25rem,5vw,1.5rem)] border border-gray-200 rounded-md">
        {children}
      </div>
    </main>
  );
}
