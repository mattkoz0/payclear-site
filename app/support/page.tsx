import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description: "Contact PayClear support for help with the app.",
  alternates: {
    canonical: "/support",
    languages: { "en-US": "/support", "en-CA": "/support", "x-default": "/support" },
  },
  openGraph: {
    title: "Support | PayClear",
    description: "Need help with PayClear? Contact support@pay-clear.com.",
    url: "https://www.pay-clear.com/support",
  },
};

const details = [
  "Device model",
  "Operating system version",
  "App version",
  "Short description of the issue",
];

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#f7faff] text-[#0f172a]">
      <div className="mx-auto max-w-3xl px-5 py-12 md:py-16">
        <Link className="text-sm font-semibold text-[#2563eb]" href="/">
          PayClear
        </Link>
        <section className="mt-8 rounded-[2rem] border border-[#dbe4f0] bg-white p-7 shadow-[0_16px_50px_rgba(15,23,42,0.06)] md:p-10">
          <h1 className="text-4xl font-semibold tracking-tight">PayClear Support</h1>
          <p className="mt-5 text-lg leading-8 text-[#53627a]">
            Need help with PayClear? Contact us and we will do our best to help.
          </p>
          <a
            className="mt-7 inline-flex rounded-xl bg-[#0f172a] px-5 py-3 text-sm font-semibold text-white"
            href="mailto:support@pay-clear.com"
          >
            support@pay-clear.com
          </a>
        </section>

        <section className="mt-6 rounded-2xl border border-[#dbe4f0] bg-white p-6">
          <h2 className="text-xl font-semibold">When contacting support, please include:</h2>
          <ul className="mt-4 space-y-3 text-[#53627a]">
            {details.map((detail) => (
              <li className="flex gap-3" key={detail}>
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#2563eb]" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-10 flex flex-wrap gap-5 text-sm font-medium text-[#53627a]">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Use</Link>
        </div>
      </div>
    </main>
  );
}
