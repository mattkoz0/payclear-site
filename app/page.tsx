import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Private Subscription Tracker",
  description:
    "PayClear helps you track subscriptions, trials and recurring payments privately without linking your bank or creating an account.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PayClear | Private Subscription Tracker",
    description:
      "Track renewals, free trials, recurring bills and subscription spending with a private, local-first mobile app.",
    url: "https://www.pay-clear.com",
    siteName: "PayClear",
    type: "website",
  },
};

const highlights = [
  "No account required",
  "No bank connection",
  "Local reminders",
  "Data stays on your device",
];

const featureCards = [
  {
    title: "Track every subscription",
    text: "See monthly recurring spend, upcoming renewals, due dates and active services in one focused dashboard.",
  },
  {
    title: "Stay ahead of free trials",
    text: "Track trial end dates, adjust the first charge and decide before a trial turns into regular spend.",
  },
  {
    title: "Set spending limits",
    text: "Create local weekly, monthly or yearly limits and get alerts as your active subscriptions approach them.",
  },
  {
    title: "Split shared bills",
    text: "Calculate each person's share for recurring costs and copy or share a clean payment card.",
  },
  {
    title: "Understand your spending",
    text: "Review recurring spend by currency, profile and category so you can see what needs attention.",
  },
  {
    title: "Simulate savings",
    text: "Estimate monthly, yearly and long-term savings from subscriptions you may want to cancel.",
  },
];

const screenshots = [
  {
    src: "/GPS - 1.jpg",
    alt: "PayClear dashboard with monthly recurring spend and next payment",
    title: "Dashboard",
  },
  {
    src: "/GPS - 2.jpg",
    alt: "PayClear reminder settings with local renewal reminders",
    title: "Reminders",
  },
  {
    src: "/GPS - 5.jpg",
    alt: "PayClear spending limit and cancellation savings simulator",
    title: "Limits",
  },
  {
    src: "/GPS - 6.jpg",
    alt: "PayClear recurring spending insights by currency, profile and category",
    title: "Insights",
  },
];

const freePlan = [
  "Up to 5 active services",
  "Dashboard and upcoming review",
  "Core local reminders",
  "Backup, restore and CSV export",
  "Light ads may appear",
];

const lifetimePlan = [
  "Unlimited active services",
  "No ads",
  "App Lock",
  "Savings Simulator",
  "Premium Reports",
  "One-time purchase",
];

const seoPages = [
  {
    href: "/subscription-tracker",
    title: "Subscription tracker",
    text: "Track subscriptions, renewals and recurring costs in one private place.",
  },
  {
    href: "/free-trial-reminder",
    title: "Free trial reminder",
    text: "Review free trial end dates before the first paid charge.",
  },
  {
    href: "/bill-reminder",
    title: "Bill reminder",
    text: "Remember repeating bills, shared subscriptions and upcoming renewals.",
  },
  {
    href: "/no-bank-subscription-tracker",
    title: "No-bank tracker",
    text: "Track recurring payments without linking your bank or creating an account.",
  },
];

const faqs = [
  {
    question: "Does PayClear connect to my bank?",
    answer:
      "No. PayClear is a manual subscription tracker. It does not connect to your bank, scan transactions or ask for bank credentials.",
  },
  {
    question: "Can PayClear remind me before free trials renew?",
    answer:
      "Yes. You can track free trial end dates and schedule local reminders before a trial turns into a paid charge.",
  },
  {
    question: "Is PayClear another subscription?",
    answer:
      "No. PayClear has a free plan and an optional one-time Lifetime unlock for premium features.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.pay-clear.com/#website",
      name: "PayClear",
      url: "https://www.pay-clear.com/",
      description:
        "PayClear is a private subscription tracker for recurring payments, renewals and free trials.",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.pay-clear.com/#app",
      name: "PayClear",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Android",
      url: "https://www.pay-clear.com/",
      downloadUrl: "https://play.google.com/store/apps/details?id=com.payclear.app",
      image: "https://www.pay-clear.com/PayClear_icon_512512.png",
      description:
        "Private subscription tracker and bill reminder for free trials, renewals and recurring payments without bank linking.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.pay-clear.com/#faq",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

function StoreButtons({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        className={`inline-flex items-center justify-center rounded-full bg-[#07143f] text-center font-bold text-white shadow-[0_18px_40px_rgba(7,20,63,0.2)] transition hover:bg-[#10245f] ${
          compact ? "px-5 py-3 text-sm" : "px-6 py-3 text-sm"
        }`}
        href="https://play.google.com/store/apps/details?id=com.payclear.app"
        rel="noopener noreferrer"
        target="_blank"
      >
        Get it on Google Play
      </a>
      <span
        className={`inline-flex items-center justify-center rounded-full border border-[#bcd0ef] bg-white/80 text-center font-bold text-[#415574] ${
          compact ? "px-5 py-3 text-sm" : "px-6 py-3 text-sm"
        }`}
      >
        App Store coming soon
      </span>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#d9e7f6] bg-white/88 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <Link className="relative block h-12 w-44 overflow-hidden" href="/" aria-label="PayClear home">
          <Image
            src="/payclear_icon_text.png"
            alt="PayClear"
            fill
            priority
            sizes="176px"
            className="object-contain"
          />
        </Link>
        <div className="hidden items-center gap-7 text-sm font-semibold text-[#415574] md:flex">
          <a href="#features">Features</a>
          <a href="#privacy">Privacy</a>
          <a href="#screens">Screens</a>
          <Link href="/support">Support</Link>
        </div>
        <Link
          className="rounded-full bg-[#07143f] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(43,120,255,0.2)]"
          href="/privacy"
        >
          Privacy
        </Link>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#d9e7f6] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-[#53627a] md:flex-row md:items-center md:justify-between">
          <p>© 2026 PayClear. Track. Control. Save.</p>
          <div className="flex flex-wrap gap-5 font-semibold">
          <Link href="/subscription-tracker">Subscription Tracker</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Use</Link>
          <Link href="/support">Support</Link>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7fbff] text-[#07143f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />

      <section className="relative isolate min-h-[calc(100svh-73px)] overflow-hidden">
        <Image
          src="/GPS - 1.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center] opacity-28 md:opacity-42"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#f7fbff_0%,rgba(247,251,255,0.94)_38%,rgba(247,251,255,0.58)_70%,rgba(247,251,255,0.18)_100%)]" />
        <div className="relative mx-auto grid min-h-[calc(100svh-73px)] max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-[0.94fr_0.72fr]">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-4">
              <Image
                src="/PayClear_icon_512512.png"
                alt=""
                width={72}
                height={72}
                className="rounded-2xl shadow-[0_18px_45px_rgba(43,120,255,0.18)]"
              />
              <p className="text-sm font-bold uppercase text-[#2b7cff]">Track. Control. Save.</p>
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] md:text-7xl">
              Track subscriptions without linking your bank.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#415574] md:text-xl">
              PayClear helps you organize subscriptions, trials and recurring
              bills with local reminders, spending limits, bill splits and clear
              recurring spend insights. No account, no bank sync and no PayClear
              subscription.
            </p>
            <div className="mt-8">
              <StoreButtons />
            </div>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <a className="text-center text-sm font-bold text-[#2b7cff]" href="#screens">
                View app screens
              </a>
              <a className="text-center text-sm font-bold text-[#415574]" href="#features">
                Explore features
              </a>
            </div>
            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div className="flex items-center gap-3 text-sm font-bold text-[#1d2c4f]" key={item}>
                  <span className="h-2.5 w-2.5 rounded-full bg-[#2dd4bf]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex md:justify-end">
            <div className="relative aspect-[9/16] w-full max-w-[360px] overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-[0_28px_90px_rgba(7,20,63,0.22)]">
              <Image
                src="/GPS - 1.jpg"
                alt="PayClear app dashboard showing monthly recurring spend"
                fill
                priority
                sizes="360px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="border-y border-[#d9e7f6] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-[#7b4dff]">Built for recurring costs</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
              Everything visible in the app is focused on clarity before money leaves.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((feature) => (
              <article
                className="rounded-2xl border border-[#d9e7f6] bg-[#fbfdff] p-6 shadow-[0_12px_35px_rgba(7,20,63,0.05)]"
                key={feature.title}
              >
                <h3 className="text-xl font-black">{feature.title}</h3>
                <p className="mt-3 leading-7 text-[#53627a]">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef9ff]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[0.88fr_1fr] md:items-center md:py-20">
          <div>
            <p className="text-sm font-bold uppercase text-[#2b7cff]">Trials and renewals</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
              Decide before a renewal becomes a surprise.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#415574]">
              Add the services you want to track, keep renewal dates visible and
              schedule one or more local reminders before a charge arrives.
              Trials can be reviewed, adjusted, marked as regular or canceled.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {["/GPS - 2.jpg", "/GPS - 3.jpg"].map((src, index) => (
              <div
                className="relative aspect-[9/16] overflow-hidden rounded-[1.8rem] border border-white bg-white shadow-[0_24px_70px_rgba(7,20,63,0.16)]"
                key={src}
              >
                <Image
                  src={src}
                  alt={
                    index === 0
                      ? "PayClear renewal reminder timing screen"
                      : "PayClear free trial review screen"
                  }
                  fill
                  sizes="(min-width: 768px) 300px, 45vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1fr_0.8fr] md:items-center md:py-20">
          <div className="order-2 grid gap-5 sm:grid-cols-2 md:order-1">
            {["/GPS - 4.jpg", "/GPS - 5.jpg"].map((src, index) => (
              <div
                className="relative aspect-[9/16] overflow-hidden rounded-[1.8rem] border border-[#d9e7f6] bg-white shadow-[0_24px_70px_rgba(7,20,63,0.14)]"
                key={src}
              >
                <Image
                  src={src}
                  alt={
                    index === 0
                      ? "PayClear bill split card screen"
                      : "PayClear spending limit and savings simulator screen"
                  }
                  fill
                  sizes="(min-width: 768px) 300px, 45vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="order-1 md:order-2">
            <p className="text-sm font-bold uppercase text-[#2dd4bf]">Control the spend</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
              Split shared bills and see what cancellation could save.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#415574]">
              PayClear includes practical tools for recurring costs: bill split
              cards for shared services, configurable limits, near-limit alerts
              and a cancellation savings view for active subscriptions.
            </p>
          </div>
        </div>
      </section>

      <section id="privacy" className="border-y border-[#d9e7f6] bg-[#07143f] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[0.9fr_1fr] md:items-center md:py-20">
          <div>
            <p className="text-sm font-bold uppercase text-[#69ead6]">Private by design</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
              No bank sync. No login flow. Local database.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#c7d7ef]">
              PayClear is built for manual tracking. It does not require an
              account, does not connect to your bank and keeps your tracker data
              on your device.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["No account", "No bank connection", "Local database"].map((item) => (
                <div className="rounded-2xl border border-white/14 bg-white/8 p-4 text-sm font-bold" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[1.8rem] border border-white/14 bg-white/8 shadow-[0_28px_80px_rgba(0,0,0,0.28)] md:ml-auto md:max-w-[380px]">
            <Image
              src="/GPS - 7.jpg"
              alt="PayClear privacy promise screen"
              fill
              sizes="380px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-[0.82fr_1fr] md:items-start md:py-20">
          <div>
            <p className="text-sm font-bold uppercase text-[#7b4dff]">Premium without another subscription</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
              Useful for free. One-time unlock when you want more.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#415574]">
              PayClear is built to reduce subscription stress, so premium is a
              Lifetime unlock instead of another monthly bill. Free users can
              track the core value first.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-[#d9e7f6] bg-[#fbfdff] p-6 shadow-[0_12px_35px_rgba(7,20,63,0.05)]">
              <h3 className="text-2xl font-black">Free</h3>
              <ul className="mt-5 space-y-3 text-[#415574]">
                {freePlan.map((item) => (
                  <li className="flex gap-3" key={item}>
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#2b7cff]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-2xl border border-[#a78bfa] bg-[#07143f] p-6 text-white shadow-[0_18px_50px_rgba(7,20,63,0.18)]">
              <h3 className="text-2xl font-black">Lifetime</h3>
              <ul className="mt-5 space-y-3 text-[#dce8ff]">
                {lifetimePlan.map((item) => (
                  <li className="flex gap-3" key={item}>
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#69ead6]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="screens" className="bg-[#f7fbff]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase text-[#7b4dff]">Real app screens</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
                A clearer view of recurring money.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[#53627a]">
              Screenshots show sample subscription data and the core PayClear
              flows for tracking, reminders, limits and insights.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {screenshots.map((screen) => (
              <article
                className="rounded-[1.8rem] border border-[#d9e7f6] bg-white p-3 shadow-[0_18px_55px_rgba(7,20,63,0.1)]"
                key={screen.src}
              >
                <div className="relative aspect-[9/16] overflow-hidden rounded-[1.35rem]">
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="px-2 pt-4 text-lg font-black">{screen.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#d9e7f6] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-[#2b7cff]">Guides</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
              Learn how PayClear helps with recurring payments.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {seoPages.map((page) => (
              <Link
                className="rounded-2xl border border-[#d9e7f6] bg-[#fbfdff] p-5 shadow-[0_12px_35px_rgba(7,20,63,0.05)] transition hover:border-[#2b7cff]"
                href={page.href}
                key={page.href}
              >
                <h3 className="text-lg font-black">{page.title}</h3>
                <p className="mt-3 leading-7 text-[#53627a]">{page.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#d9e7f6] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-14 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase text-[#2b7cff]">Start tracking</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">
              Take back control of recurring payments.
            </h2>
            <p className="mt-4 leading-7 text-[#53627a]">
              Download PayClear on Google Play. The Apple App Store version is coming soon.
            </p>
          </div>
          <StoreButtons compact />
        </div>
      </section>

      <section className="border-t border-[#d9e7f6] bg-[#f7fbff]">
        <div className="mx-auto max-w-4xl px-5 py-16">
          <p className="text-sm font-bold uppercase text-[#7b4dff]">FAQ</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
            Subscription tracking, without the usual trade-offs.
          </h2>
          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <article className="rounded-2xl border border-[#d9e7f6] bg-white p-6" key={faq.question}>
                <h3 className="text-lg font-black">{faq.question}</h3>
                <p className="mt-3 leading-7 text-[#53627a]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
