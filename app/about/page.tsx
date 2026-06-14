import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About PayClear",
  description:
    "Learn what PayClear is, who it is for and how its private manual subscription tracking model works.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About PayClear",
    description:
      "PayClear is a private subscription tracker for renewals, trials and recurring payments without bank linking.",
    url: "https://www.pay-clear.com/about",
  },
};

const principles = [
  {
    title: "Manual by design",
    text: "PayClear does not try to read your financial life. You decide which subscriptions and recurring payments belong in your tracker.",
  },
  {
    title: "Private by default",
    text: "The core tracker does not require a PayClear account or bank connection, and app data is designed around local-first control.",
  },
  {
    title: "Built for decisions",
    text: "The app focuses on renewal dates, reminders, spending limits, bill splits and cancellation savings so you can review what to keep.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://www.pay-clear.com/about#webpage",
  url: "https://www.pay-clear.com/about",
  name: "About PayClear",
  description:
    "PayClear is a private manual subscription tracker for renewals, trials and recurring payments without bank linking.",
  about: {
    "@id": "https://www.pay-clear.com/#app",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7fbff] text-[#07143f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <article className="mx-auto max-w-5xl px-5 py-12 md:py-20">
        <Link className="text-sm font-black text-[#2b7cff]" href="/">
          PayClear
        </Link>

        <div className="mt-10 grid gap-10 md:grid-cols-[0.7fr_0.3fr] md:items-start">
          <div>
            <p className="text-sm font-bold uppercase text-[#7b4dff]">About PayClear</p>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-6xl">
              A private way to track subscriptions before they renew.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#415574]">
              PayClear is a manual subscription tracker for people who want
              recurring payment clarity without linking a bank account. It helps
              track subscriptions, free trials, shared bills and cancellation
              savings from the information you choose to enter.
            </p>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-[220px] overflow-hidden rounded-[2rem] border border-[#d9e7f6] bg-white p-5 shadow-[0_18px_55px_rgba(7,20,63,0.1)]">
            <Image
              src="/PayClear_icon_512512.png"
              alt="PayClear app icon"
              fill
              sizes="220px"
              className="object-contain p-6"
              priority
            />
          </div>
        </div>

        <section className="mt-12 grid gap-4 md:grid-cols-3">
          {principles.map((principle) => (
            <div className="rounded-2xl border border-[#d9e7f6] bg-white p-6" key={principle.title}>
              <h2 className="text-xl font-black">{principle.title}</h2>
              <p className="mt-3 leading-7 text-[#53627a]">{principle.text}</p>
            </div>
          ))}
        </section>

        <section className="mt-8 rounded-2xl border border-[#d9e7f6] bg-white p-6 md:p-8">
          <h2 className="text-2xl font-black">Who PayClear is for</h2>
          <p className="mt-4 leading-8 text-[#415574]">
            PayClear is useful for people who test free trials, share streaming
            or software subscriptions, manage family plans, use many app
            subscriptions or want a simple recurring payment review habit. It is
            not a bank-connected budgeting app and it does not cancel services
            for you.
          </p>
        </section>

        <section className="mt-8 rounded-2xl bg-[#07143f] p-6 text-white md:p-8">
          <h2 className="text-2xl font-black">Available on Google Play</h2>
          <p className="mt-4 max-w-3xl leading-8 text-[#dce8ff]">
            PayClear is available for Android. The App Store version is coming soon.
          </p>
          <a
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-[#2b7cff] px-6 py-3 text-sm font-bold text-white"
            href="https://play.google.com/store/apps/details?id=com.payclear.app"
            rel="noopener noreferrer"
            target="_blank"
          >
            Get it on Google Play
          </a>
        </section>
      </article>
    </main>
  );
}
