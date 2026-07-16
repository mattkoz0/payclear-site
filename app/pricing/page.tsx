import type { Metadata } from "next";
import Link from "next/link";
import { StoreBadges } from "../components/store-badges";

export const metadata: Metadata = {
  title: "PayClear Pricing — Free Plan & One-Time Lifetime Unlock",
  description:
    "PayClear is free to use with up to 5 subscriptions. Unlock unlimited tracking, no ads, app lock and premium reports with a one-time Lifetime purchase.",
  alternates: {
    canonical: "/pricing",
    languages: {
      "en-US": "/pricing",
      "en-CA": "/pricing",
      "x-default": "/pricing",
    },
  },
  openGraph: {
    title: "PayClear Pricing — Free Plan & One-Time Lifetime Unlock",
    description:
      "No monthly subscription. PayClear premium is a one-time purchase.",
    url: "https://www.pay-clear.com/pricing",
  },
};

const freePlan = [
  "Up to 5 active services",
  "Full dashboard with monthly and yearly costs",
  "Upcoming renewals and next payment dates",
  "Core local reminders",
  "Backup, restore and CSV export",
  "Multi-currency support",
  "Category and profile organization",
  "Light ads may appear",
];

const lifetimePlan = [
  "Unlimited active services",
  "No ads — ever",
  "App Lock for privacy",
  "Savings Simulator",
  "Premium Reports and insights",
  "All future premium features included",
  "One-time purchase — no recurring charge",
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PayClear",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Android, iOS",
  url: "https://www.pay-clear.com/pricing",
  offers: [
    {
      "@type": "Offer",
      name: "Free Plan",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      description: "Track up to 5 subscriptions with core features.",
    },
    {
      "@type": "Offer",
      name: "Lifetime Premium",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      description:
        "One-time purchase for unlimited tracking, no ads and premium features.",
    },
  ],
};

const faqs = [
  {
    question: "Is PayClear really free?",
    answer:
      "Yes. The free plan includes dashboard, reminders, backup, CSV export and up to 5 active services. No credit card required.",
  },
  {
    question: "Is the Lifetime plan a subscription?",
    answer:
      "No. The Lifetime plan is a one-time purchase. You pay once and own premium features permanently. No recurring charge.",
  },
  {
    question: "What happens if I uninstall?",
    answer:
      "Your Lifetime purchase is tied to the Google Play or Apple account used for the purchase. If you reinstall, restore premium through the same store account. Your subscription data should be backed up before uninstalling.",
  },
  {
    question: "Will premium get more expensive?",
    answer:
      "Lifetime purchasers get all future premium features included. The price may change for new buyers, but existing Lifetime owners are not affected.",
  },
];

export default function PricingPage() {
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

        <div className="mt-10 max-w-3xl">
          <p className="text-sm font-bold uppercase text-[#7b4dff]">Pricing</p>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-6xl">
            Useful for free. Premium without another subscription.
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#415574]">
            PayClear is built to reduce subscription stress — so premium is a
            one-time Lifetime unlock instead of another monthly bill. Start
            tracking for free and upgrade when you want more.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-[#d9e7f6] bg-white p-7 shadow-[0_12px_35px_rgba(7,20,63,0.05)]">
            <h2 className="text-2xl font-black">Free</h2>
            <p className="mt-2 text-3xl font-black text-[#2b7cff]">
              $0<span className="text-base font-bold text-[#8aa0bf]"> forever</span>
            </p>
            <ul className="mt-6 space-y-3 text-[#415574]">
              {freePlan.map((item) => (
                <li className="flex gap-3" key={item}>
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#2b7cff]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <StoreBadges campaign="pricing_free" className="mt-8 sm:flex-col" />
          </div>

          <div className="rounded-2xl border border-[#a78bfa] bg-[#07143f] p-7 text-white shadow-[0_18px_50px_rgba(7,20,63,0.18)]">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-black">Lifetime</h2>
              <span className="rounded-full bg-[#69ead6] px-3 py-1 text-xs font-black text-[#07143f]">
                Best value
              </span>
            </div>
            <p className="mt-2 text-3xl font-black text-[#69ead6]">
              One-time
              <span className="text-base font-bold text-[#c7d7ef]">
                {" "}
                purchase
              </span>
            </p>
            <ul className="mt-6 space-y-3 text-[#dce8ff]">
              {lifetimePlan.map((item) => (
                <li className="flex gap-3" key={item}>
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#69ead6]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <StoreBadges campaign="pricing_lifetime" className="mt-8 sm:flex-col" />
          </div>
        </div>

        <section className="mt-12 rounded-2xl border border-[#d9e7f6] bg-white p-6 md:p-8">
          <h2 className="text-2xl font-black">
            Frequently asked questions about pricing
          </h2>
          <div className="mt-5 grid gap-4">
            {faqs.map((faq) => (
              <article
                className="rounded-2xl border border-[#d9e7f6] bg-[#fbfdff] p-5"
                key={faq.question}
              >
                <h3 className="text-lg font-black">{faq.question}</h3>
                <p className="mt-3 leading-7 text-[#53627a]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
