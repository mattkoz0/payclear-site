import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Download PayClear — Free Subscription Tracker for Android",
  description:
    "Download PayClear free on Google Play. Track subscriptions, free trials and recurring bills privately without bank access.",
  alternates: {
    canonical: "/download",
    languages: {
      "en-US": "/download",
      "en-CA": "/download",
      "x-default": "/download",
    },
  },
  openGraph: {
    title: "Download PayClear — Free Subscription Tracker for Android",
    description:
      "Track subscriptions, free trials and recurring payments privately. No bank login needed.",
    url: "https://www.pay-clear.com/download",
  },
};

const usps = [
  {
    icon: "🔒",
    title: "Private by design",
    text: "No bank connection, no account required. Data stays on your device.",
  },
  {
    icon: "⏰",
    title: "Never miss a renewal",
    text: "Local reminders before free trials convert and subscriptions renew.",
  },
  {
    icon: "💰",
    title: "See what you really spend",
    text: "Dashboard with monthly costs, spending limits and cancellation savings.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PayClear",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Android",
  url: "https://www.pay-clear.com/download",
  downloadUrl:
    "https://play.google.com/store/apps/details?id=com.payclear.app",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
};

export default function DownloadPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#07143f] px-5 py-12 text-center text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Image
        src="/PayClear_icon_512512.png"
        alt="PayClear app icon"
        width={96}
        height={96}
        priority
        className="rounded-3xl shadow-[0_20px_60px_rgba(43,120,255,0.3)]"
      />

      <h1 className="mt-8 max-w-md text-3xl font-black leading-tight tracking-tight sm:text-4xl">
        Track subscriptions privately. Download free.
      </h1>

      <p className="mt-5 max-w-sm text-base leading-7 text-[#c7d7ef]">
        No bank access. No account. No PayClear subscription. Just a clear view
        of what you pay and when it renews.
      </p>

      <a
        className="mt-8 inline-flex min-h-14 items-center justify-center rounded-full bg-[#2b7cff] px-8 py-4 text-lg font-black text-white shadow-[0_18px_50px_rgba(43,120,255,0.35)] transition hover:bg-[#3d8aff]"
        href="https://play.google.com/store/apps/details?id=com.payclear.app&utm_source=website&utm_medium=cta_button&utm_campaign=download"
        rel="noopener noreferrer"
        target="_blank"
      >
        Get it on Google Play
      </a>

      <p className="mt-3 text-sm font-semibold text-[#8aa0bf]">
        App Store coming soon
      </p>

      <div className="mt-12 grid w-full max-w-lg gap-4 sm:grid-cols-3">
        {usps.map((usp) => (
          <div
            className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left"
            key={usp.title}
          >
            <p className="text-2xl">{usp.icon}</p>
            <h2 className="mt-3 text-sm font-black">{usp.title}</h2>
            <p className="mt-2 text-xs leading-5 text-[#c7d7ef]">{usp.text}</p>
          </div>
        ))}
      </div>

      <div className="relative mt-12 aspect-[9/16] w-full max-w-[280px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_28px_80px_rgba(0,0,0,0.3)]">
        <Image
          src="/payclear-dashboard-subscription-tracker.avif"
          alt="PayClear subscription tracker dashboard"
          fill
          sizes="280px"
          className="object-cover"
        />
      </div>
    </main>
  );
}
