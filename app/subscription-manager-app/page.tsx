import type { Metadata } from "next";
import { SeoPageContent } from "../seo-page-content";

export const metadata: Metadata = {
  title: "Subscription Manager App — Organize Recurring Payments Privately",
  description:
    "Use PayClear as your subscription manager app to organize Netflix, Spotify, Hulu and all recurring payments. Free, private and no bank connection required.",
  alternates: {
    canonical: "/subscription-manager-app",
    languages: {
      "en-US": "/subscription-manager-app",
      "en-CA": "/subscription-manager-app",
      "x-default": "/subscription-manager-app",
    },
  },
};

const sections = [
  {
    title: "A subscription manager app built for clarity",
    body: [
      "The average American has 12 or more active subscriptions. Streaming services, music apps, cloud storage, news sites, fitness apps, meal kits, AI tools and software licenses add up fast. A subscription manager app helps you see the full picture before renewal charges stack up.",
      "PayClear is designed as a focused subscription manager for Android. Instead of trying to be a full budgeting tool, it concentrates on recurring payments: what you are paying, when it renews, how much you spend monthly and yearly, and whether each service is still worth keeping.",
    ],
  },
  {
    title: "Organize subscriptions by category and profile",
    body: [
      "PayClear lets you organize subscriptions into categories like streaming, music, cloud, productivity, AI, gaming, fitness, news and shopping. You can also separate personal, family and work subscriptions using profiles.",
      "This organization helps answer practical questions: How much do all your streaming services cost each month? Which subscriptions belong to work? Which family plans are being shared? A good subscription manager makes these answers easy to find.",
    ],
  },
  {
    title: "Why not use a spreadsheet?",
    body: [
      "Many people start tracking subscriptions in a spreadsheet. It works at first, but spreadsheets do not send renewal reminders, calculate spending automatically, split bills, or show you cancellation savings. They also require manual updates that are easy to forget.",
      "PayClear replaces the subscription spreadsheet with a dedicated app that tracks billing cycles, sends local reminders, converts currencies and provides spending insights — without requiring a bank connection or an account.",
    ],
  },
  {
    title: "Manage subscriptions without bank access",
    body: [
      "Unlike subscription managers like Rocket Money or Trim that connect to your bank through Plaid, PayClear uses manual tracking. You add only the subscriptions you want to manage, keeping full control over what data exists in the app.",
      "This approach means no bank credentials shared, no transaction history scanned and no third-party access to your financial accounts. For anyone in the US or Canada concerned about financial data privacy, PayClear offers subscription management without the trade-offs.",
    ],
  },
];

export default function SubscriptionManagerAppPage() {
  return (
    <SeoPageContent
      eyebrow="Subscription manager"
      title="Manage all your subscriptions in one private app."
      intro="PayClear is a subscription manager app for Android that helps you organize recurring payments, track renewal dates and understand your monthly subscription costs — all without bank access or an account."
      path="/subscription-manager-app"
      breadcrumb="Subscription manager app"
      sections={sections}
      cta="Start managing your subscriptions privately."
    />
  );
}
