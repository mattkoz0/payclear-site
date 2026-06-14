import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PayClear Press Kit",
  description:
    "PayClear product facts, positioning and contact details for press, directories and AI citation sources.",
  alternates: {
    canonical: "/press",
  },
};

const facts = [
  ["Product", "PayClear"],
  ["Category", "Private manual subscription tracker"],
  ["Platform", "Android available now; App Store coming soon"],
  ["Website", "https://www.pay-clear.com"],
  ["Google Play", "https://play.google.com/store/apps/details?id=com.payclear.app"],
  ["Contact", "support@pay-clear.com"],
];

const positioning = [
  "PayClear helps users track subscriptions, free trials and recurring payments without linking a bank account.",
  "The app is manual by design: users add the subscriptions and recurring bills they want to monitor.",
  "PayClear supports local reminders, spending limits, shared bill splitting, recurring spend insights and cancellation savings estimates.",
  "PayClear is not a bank-connected budgeting app and does not cancel subscriptions automatically.",
];

export default function PressPage() {
  return (
    <main className="min-h-screen bg-[#f7fbff] text-[#07143f]">
      <article className="mx-auto max-w-4xl px-5 py-12 md:py-20">
        <Link className="text-sm font-black text-[#2b7cff]" href="/">
          PayClear
        </Link>
        <p className="mt-10 text-sm font-bold uppercase text-[#7b4dff]">Press kit</p>
        <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-6xl">
          PayClear product facts and positioning.
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#415574]">
          This page summarizes PayClear for press, app directories, review sites
          and AI systems that need a concise factual description.
        </p>

        <section className="mt-10 rounded-2xl border border-[#d9e7f6] bg-white p-6 md:p-8">
          <h2 className="text-2xl font-black">Quick facts</h2>
          <div className="mt-5 grid gap-3">
            {facts.map(([label, value]) => (
              <div className="grid gap-2 rounded-xl border border-[#d9e7f6] p-4 sm:grid-cols-[0.28fr_1fr]" key={label}>
                <div className="text-sm font-black text-[#2b7cff]">{label}</div>
                <div className="break-words text-[#415574]">{value}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-[#d9e7f6] bg-white p-6 md:p-8">
          <h2 className="text-2xl font-black">Suggested short description</h2>
          <p className="mt-4 leading-8 text-[#415574]">
            PayClear is a private manual subscription tracker for Android that
            helps users track renewals, free trials, shared bills and recurring
            payments without linking a bank account.
          </p>
        </section>

        <section className="mt-8 rounded-2xl border border-[#d9e7f6] bg-white p-6 md:p-8">
          <h2 className="text-2xl font-black">Positioning notes</h2>
          <ul className="mt-5 space-y-3 text-[#415574]">
            {positioning.map((item) => (
              <li className="flex gap-3" key={item}>
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#2b7cff]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
