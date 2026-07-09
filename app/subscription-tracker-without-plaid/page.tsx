import type { Metadata } from "next";
import { SeoPageContent } from "../seo-page-content";

export const metadata: Metadata = {
  title: "Subscription Tracker Without Plaid",
  description:
    "PayClear is a subscription tracker without Plaid, bank sync or transaction scanning.",
  alternates: {
    canonical: "/subscription-tracker-without-plaid",
    languages: { "en-US": "/subscription-tracker-without-plaid", "en-CA": "/subscription-tracker-without-plaid", "x-default": "/subscription-tracker-without-plaid" },
  },
};

const sections = [
  {
    title: "Track subscriptions without Plaid",
    body: [
      "PayClear is built for people who want subscription visibility without connecting a bank account through Plaid or any other account aggregation service. You add subscriptions manually and decide what belongs in your tracker.",
      "That makes PayClear different from apps that scan transactions to detect recurring payments automatically. The app focuses on privacy, reminders and review habits rather than financial account access.",
    ],
  },
  {
    title: "Manual input instead of transaction scanning",
    body: [
      "Automatic subscription detection can be useful, but it requires a level of data access that not every user wants. PayClear takes the manual route: add the service name, price, renewal date, billing cycle and reminder timing yourself.",
      "Manual tracking also avoids false positives from transaction scanning. If a service is in PayClear, it is there because you chose to track it.",
    ],
  },
  {
    title: "Good fit for privacy-focused users",
    body: [
      "PayClear is useful if you want to track subscriptions, free trials, shared bills and recurring payments without sharing bank credentials or transaction history.",
      "The trade-off is simple: PayClear is not automatic. In return, the core tracker stays focused, private and under your control.",
    ],
  },
  {
    title: "What PayClear still helps you do",
    body: [
      "A subscription tracker without Plaid can still be practical. PayClear supports renewal reminders, free trial tracking, spending limits, shared bill splitting, recurring spend insights and cancellation savings estimates.",
      "Those features help you review what renews next and decide what to keep, without needing a bank-connected finance app.",
    ],
  },
];

export default function SubscriptionTrackerWithoutPlaidPage() {
  return (
    <SeoPageContent
      eyebrow="Subscription tracker without Plaid"
      title="Track subscriptions without Plaid or bank sync."
      intro="PayClear is a manual subscription tracker for people who want recurring payment clarity without Plaid, bank linking or transaction scanning."
      path="/subscription-tracker-without-plaid"
      breadcrumb="Subscription tracker without Plaid"
      sections={sections}
      cta="Track subscriptions without connecting a bank."
    />
  );
}
