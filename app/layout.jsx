import "./globals.css";

export const metadata = {
  title: "AuraEvents Enterprise AI",
  description: "Next-Gen SaaS Event & Fiscal Orchestrator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#07080c] text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}