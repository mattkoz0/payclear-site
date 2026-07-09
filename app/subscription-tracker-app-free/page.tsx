import type { Metadata } from "next";
import { SeoPageContent } from "../seo-page-content";

export const metadata: Metadata = {
  title: "Free Subscription Tracker App — Track Recurring Payments for Free",
  description:
    "Download a free subscription tracker app for Android. PayClear lets you track up to 5 subscriptions, set reminders and monitor spending — all for free.",
  alternates: {
    canonical: "/subscription-tracker-app-free",
    languages: {
      "en-US": "/subscription-tracker-app-free",
      "en-CA": "/subscription-tracker-app-free",
      "x-default": "/subscription-tracker-app-free",
    },
  },
};

const sections = [
  {
    title: "A truly free subscription tracker",
    body: [
      "Many subscription tracker apps advertise as free but quickly push you into a paid plan to use basic features. PayClear's free plan includes the core tracking experience: add up to 5 active services, see your dashboard with monthly and yearly costs, track upcoming renewals and set local reminders.",
      "The free plan also includes backup, restore and CSV export. You can track subscriptions in multiple currencies, organize by category and monitor upcoming renewal dates — all without paying a cent or creating an account.",
    ],
  },
  {
    title: "What you get for free vs premium",
    body: [
      "Free plan: up to 5 active services, full dashboard, upcoming renewals, core local reminders, backup and restore, CSV export. Light ads may appear.",
      "Lifetime premium (one-time purchase): unlimited active services, no ads, app lock, savings simulator, premium reports. The key difference from competitors like Rocket Money: premium is a one-time purchase, not another monthly subscription adding to the problem you are trying to solve.",
    ],
  },
  {
    title: "Why PayClear stays free without compromising privacy",
    body: [
      "Some free apps make money by selling your data or requiring bank access to monetize through financial product referrals. PayClear is different: the free plan is supported by light ads, and premium revenue comes from the optional Lifetime purchase.",
      "Your subscription data is never sold, shared or uploaded to PayClear servers. The app works locally on your device. This model means you get a genuinely useful free subscription tracker without the privacy trade-offs that come with bank-connected alternatives.",
    ],
  },
  {
    title: "Getting started with the free plan",
    body: [
      "Download PayClear from Google Play. No account creation is needed. Add your most important subscriptions — start with the ones that renew soonest. Set a reminder for each one. In 5 minutes you will have a clear view of your upcoming recurring payments.",
      "If you track more than 5 services regularly, the Lifetime unlock removes the limit permanently with a single purchase. But for many people, tracking the 5 most expensive or most forgotten subscriptions is enough to save real money.",
    ],
  },
];

export default function SubscriptionTrackerAppFreePage() {
  return (
    <SeoPageContent
      eyebrow="Free tracker"
      title="Track subscriptions for free — no bank access, no hidden costs."
      intro="PayClear is a free subscription tracker app for Android. Track up to 5 recurring payments, set renewal reminders and monitor your spending without an account or bank connection."
      path="/subscription-tracker-app-free"
      breadcrumb="Free subscription tracker app"
      sections={sections}
      cta="Download PayClear free on Google Play."
    />
  );
}
