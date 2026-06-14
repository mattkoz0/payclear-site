import type { Metadata } from "next";
import { SeoPageContent } from "../seo-page-content";

export const metadata: Metadata = {
  title: "Manual Subscription Tracker",
  description:
    "Use PayClear as a manual subscription tracker for renewals, trials and recurring bills without automatic bank scanning.",
  alternates: {
    canonical: "/manual-subscription-tracker",
  },
};

const sections = [
  {
    title: "A manual subscription tracker by design",
    body: [
      "PayClear is built for people who prefer to track subscriptions themselves instead of letting an app inspect bank transactions. You add each service manually, choose the billing cycle, set the renewal date and keep the recurring cost visible.",
      "Manual tracking is useful when you only want to track the services that matter: streaming plans, software tools, cloud storage, memberships, AI subscriptions, family plans and other recurring payments.",
    ],
  },
  {
    title: "No bank scanning or automatic detection",
    body: [
      "Automatic subscription detection can be convenient, but it also means giving another service access to financial data. PayClear takes the opposite approach. It does not connect to your bank, scan cards or read transaction history.",
      "That keeps the app focused. PayClear becomes a private checklist for recurring money instead of a broad financial account aggregator.",
    ],
  },
  {
    title: "Built for review habits",
    body: [
      "A manual tracker works best when it supports a regular review habit. PayClear helps you see upcoming renewals, trial endings, overdue services and spending totals so you can decide what deserves attention.",
      "You can use local reminders, spending limits, bill split tools and cancellation savings estimates to make manual tracking more useful than a plain note or spreadsheet.",
    ],
  },
  {
    title: "Private control over recurring costs",
    body: [
      "PayClear does not cancel subscriptions for you and does not give financial advice. It gives you a structured, private place to record the recurring payments you choose to monitor.",
      "For users who want control without bank linking, that is the point: simple manual input, clear renewal dates and practical subscription decisions.",
    ],
  },
];

export default function ManualSubscriptionTrackerPage() {
  return (
    <SeoPageContent
      eyebrow="Manual subscription tracker"
      title="Track subscriptions manually, without bank scanning."
      intro="PayClear is a manual subscription tracker for people who want recurring payment visibility without automatic transaction detection or bank access."
      path="/manual-subscription-tracker"
      breadcrumb="Manual subscription tracker"
      sections={sections}
      cta="Start a private manual subscription tracker."
    />
  );
}
