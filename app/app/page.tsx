import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GooglePlayBadge } from "../components/google-play-badge";

export const metadata: Metadata = {
  title: "PayClear App",
  description:
    "Download PayClear for Android and track subscriptions, free trials and recurring payments privately.",
  alternates: {
    canonical: "/app",
    languages: { "en-US": "/app", "en-CA": "/app", "x-default": "/app" },
  },
  openGraph: {
    title: "PayClear App",
    description:
      "PayClear is a private subscription tracker for Android without bank linking.",
    url: "https://www.pay-clear.com/app",
  },
};

const facts = [
  "Android available on Google Play",
  "App Store coming soon",
  "Manual subscription tracking",
  "No bank connection",
  "No account required for core tracking",
  "Local reminders",
  "Spending limits and cancellation savings",
  "Shared subscription bill splitting",
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://www.pay-clear.com/#app",
  name: "PayClear",
  applicationCategory: "FinanceApplication",
  applicationSubCategory: "Subscription tracker",
  operatingSystem: "Android",
  url: "https://www.pay-clear.com/app",
  downloadUrl: "https://play.google.com/store/apps/details?id=com.payclear.app",
  image: "https://www.pay-clear.com/PayClear_icon_512512.png",
  description:
    "PayClear is a private manual subscription tracker for recurring payments, renewals and free trials without bank linking.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function AppPage() {
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
        <div className="mt-10 grid gap-10 md:grid-cols-[0.7fr_0.3fr] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase text-[#7b4dff]">PayClear app</p>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Download PayClear on Google Play.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#415574]">
              PayClear is an Android app for tracking subscriptions, free trials
              and recurring payments privately. It uses manual tracking instead
              of bank linking or transaction scanning.
            </p>
            <GooglePlayBadge campaign="app" className="mt-8" />
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-[220px] overflow-hidden rounded-[2rem] border border-[#d9e7f6] bg-white shadow-[0_18px_55px_rgba(7,20,63,0.1)]">
            <Image
              src="/PayClear_icon_512512.png"
              alt="PayClear app icon"
              fill
              priority
              sizes="220px"
              className="object-contain p-8"
            />
          </div>
        </div>

        <section className="mt-12 grid gap-4 sm:grid-cols-2">
          {facts.map((fact) => (
            <div className="rounded-2xl border border-[#d9e7f6] bg-white p-5 text-sm font-black" key={fact}>
              {fact}
            </div>
          ))}
        </section>
      </article>
    </main>
  );
}
