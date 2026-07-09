import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "PayClear Terms of Use for the personal recurring payment organization app.",
  alternates: {
    canonical: "/terms",
    languages: { "en-US": "/terms", "en-CA": "/terms", "x-default": "/terms" },
  },
  openGraph: {
    title: "Terms of Use | PayClear",
    description: "Simple terms for using PayClear.",
    url: "https://www.pay-clear.com/terms",
  },
};

const terms = [
  {
    title: "Use of PayClear",
    body: "PayClear is a tool for personal organization of recurring payments, subscriptions, bills and free trials.",
  },
  {
    title: "User-entered information",
    body: "Users are responsible for the accuracy of the data they enter into PayClear, including subscription names, prices, renewal dates, categories, notes and reminders.",
  },
  {
    title: "No professional advice",
    body: "PayClear does not provide financial, legal, tax or investment advice. Information shown in the app is for personal organization only.",
  },
  {
    title: "Notifications and reminders",
    body: "PayClear does not guarantee that reminders will always be delivered because mobile operating systems may restrict, delay or disable notifications.",
  },
  {
    title: "Ads and purchases",
    body: "The app may include ads, premium features or in-app purchases. App store purchases are handled by Apple App Store or Google Play under their respective terms and policies.",
  },
  {
    title: "Contact",
    body: "Questions about these terms can be sent to support@pay-clear.com.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f7faff] text-[#0f172a]">
      <div className="mx-auto max-w-3xl px-5 py-12 md:py-16">
        <Link className="text-sm font-semibold text-[#2563eb]" href="/">
          PayClear
        </Link>
        <p className="mt-8 text-sm font-medium text-[#64748b]">Last updated: May 18, 2026</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Terms of Use</h1>
        <p className="mt-5 text-lg leading-8 text-[#53627a]">
          These terms describe the basic rules for using PayClear.
        </p>

        <div className="mt-10 space-y-4">
          {terms.map((term) => (
            <section
              className="rounded-2xl border border-[#dbe4f0] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
              key={term.title}
            >
              <h2 className="text-xl font-semibold">{term.title}</h2>
              <p className="mt-3 leading-7 text-[#53627a]">{term.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-5 text-sm font-medium text-[#53627a]">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/support">Support</Link>
        </div>
      </div>
    </main>
  );
}
