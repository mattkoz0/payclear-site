import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PayClear | Private subscription tracker",
  description:
    "Track subscriptions, recurring payments, bills and free trials privately. No login. No bank connection. Offline-first.",
  openGraph: {
    title: "PayClear | Private subscription tracker",
    description:
      "Stop losing money to forgotten subscriptions with a clean, offline-first tracker.",
    url: "https://www.pay-clear.com",
    siteName: "PayClear",
    type: "website",
  },
};

const trustItems = [
  "No login required",
  "No bank connection",
  "Data stays on your device",
  "Built for clarity and control",
];

const features = [
  {
    title: "Track recurring payments",
    text: "Keep subscriptions, bills and memberships in one clean place.",
  },
  {
    title: "Never miss a renewal",
    text: "See what is coming up before it becomes a surprise charge.",
  },
  {
    title: "Trial reminders",
    text: "Add free trials manually and remember when they are about to renew.",
  },
  {
    title: "Private by design",
    text: "No account, no bank credentials and no transaction scanning.",
  },
  {
    title: "No bank connection",
    text: "PayClear works from the information you choose to enter.",
  },
  {
    title: "Offline-first",
    text: "Your subscription list is stored locally on your device.",
  },
];

const subscriptions = [
  { name: "Netflix", price: "$15.49", date: "Renews May 24", tone: "bg-[#eff6ff]" },
  { name: "Spotify", price: "$10.99", date: "Renews May 28", tone: "bg-[#ecfdf5]" },
  { name: "iCloud", price: "$2.99", date: "Renews Jun 2", tone: "bg-[#f8fafc]" },
  { name: "Notion", price: "$8.00", date: "Trial ends Jun 7", tone: "bg-[#fff7ed]" },
];

function Header() {
  return (
    <header className="border-b border-[#dbe4f0] bg-white/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link className="text-xl font-semibold tracking-tight text-[#0f172a]" href="/">
          PayClear
        </Link>
        <div className="hidden items-center gap-7 text-sm font-medium text-[#53627a] md:flex">
          <a href="#features">Features</a>
          <Link href="/privacy">Privacy</Link>
          <Link href="/support">Support</Link>
        </div>
        <span className="rounded-full bg-[#0f172a] px-4 py-2 text-sm font-semibold text-white">
          Coming soon
        </span>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#dbe4f0] bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-[#53627a] md:flex-row md:items-center md:justify-between">
        <p>© 2026 PayClear. All rights reserved.</p>
        <div className="flex flex-wrap gap-5 font-medium">
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
    <main className="min-h-screen bg-[#f7faff] text-[#0f172a]">
      <Header />

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1fr_0.82fr] md:py-24">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#2563eb]">
            Private subscription tracking
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Stop losing money to forgotten subscriptions.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#53627a]">
            Track recurring payments, subscriptions and trials privately. No
            login. No bank connection. Offline-first.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <span className="rounded-xl bg-[#0f172a] px-5 py-3 text-center text-sm font-semibold text-white shadow-sm">
              Coming soon
            </span>
            <Link
              className="rounded-xl border border-[#c8d4e3] bg-white px-5 py-3 text-center text-sm font-semibold text-[#0f172a] transition hover:border-[#9fb0c4]"
              href="/privacy"
            >
              Read privacy policy
            </Link>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {trustItems.map((item) => (
              <div className="flex items-center gap-3 text-sm font-medium text-[#334155]" key={item}>
                <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e]" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <section
          aria-label="Illustrative PayClear app dashboard"
          className="rounded-[2rem] border border-[#dbe4f0] bg-white p-4 shadow-[0_24px_90px_rgba(15,23,42,0.12)]"
        >
          <div className="rounded-[1.5rem] border border-[#e6edf6] bg-[#f8fbff] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-[#64748b]">Monthly total</p>
                <p className="mt-1 text-3xl font-semibold">$37.47</p>
              </div>
              <span className="rounded-full bg-[#dbeafe] px-3 py-1 text-xs font-semibold text-[#1d4ed8]">
                Example data
              </span>
            </div>

            <div className="mt-6 space-y-3">
              {subscriptions.map((subscription) => (
                <div
                  className="flex items-center justify-between rounded-2xl border border-[#e6edf6] bg-white p-4"
                  key={subscription.name}
                >
                  <div className="flex items-center gap-3">
                    <span className={`h-11 w-11 rounded-2xl ${subscription.tone}`} />
                    <div>
                      <p className="font-semibold">{subscription.name}</p>
                      <p className="text-sm text-[#64748b]">{subscription.date}</p>
                    </div>
                  </div>
                  <p className="font-semibold">{subscription.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>

      <section id="features" className="border-y border-[#dbe4f0] bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2563eb]">
              Built for calm control
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              A focused utility for recurring expenses.
            </h2>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                className="rounded-2xl border border-[#dbe4f0] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
                key={feature.title}
              >
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-3 leading-7 text-[#53627a]">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="rounded-[2rem] border border-[#dbe4f0] bg-white p-8 shadow-[0_16px_50px_rgba(15,23,42,0.06)] md:p-10">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2563eb]">
                Privacy first
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                No finance super app. No banking access. Just your list.
              </h2>
            </div>
            <p className="text-lg leading-8 text-[#53627a]">
              PayClear is designed for people who want a simple way to remember
              what renews next. You enter subscriptions manually, keep them
              organized, and stay in control without handing over bank access.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
