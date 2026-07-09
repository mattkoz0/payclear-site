import type { Metadata } from "next";
import { SeoPageContent } from "../seo-page-content";

export const metadata: Metadata = {
  title: "PayClear vs Trim — Private Android Subscription Manager Alternative",
  description:
    "Compare PayClear and Trim. PayClear is a private Android subscription tracker with manual entries, local reminders, and no bank linking.",
  alternates: {
    canonical: "/payclear-vs-trim",
    languages: {
      "en-US": "/payclear-vs-trim",
      "en-CA": "/payclear-vs-trim",
      "x-default": "/payclear-vs-trim",
    },
  },
};

const sections = [
  {
    title: "PayClear and Trim have different product models",
    body: [
      "Trim describes itself as an AI-powered subscription manager and automated savings product. Its current support materials direct subscription billing and cancellation through Apple App Store settings. PayClear is a Google Play Android app for people who want a clear, manual record of subscriptions and recurring bills.",
      "The most important comparison is not which app promises the most automation. It is whether you want a bank-connected or account-based financial product, or a private tracker where you add only the subscriptions you choose. PayClear is designed for the second model, with no bank login or transaction scanning for core tracking.",
    ],
  },
  {
    title: "Manual tracking gives you a deliberate subscription list",
    body: [
      "With PayClear, each item in the tracker is a service you intentionally added. Record the current price, currency, billing cycle, next renewal date, and reminder time. This is useful for streaming, software, memberships, shared household plans, and free trials that are paid through different sources.",
      "Manual does not mean complicated. Add a service when you start it, update the price when it changes, and mark it canceled when the provider confirms it. A short monthly review keeps the list accurate and makes it easier to see which recurring costs are still useful.",
    ],
  },
  {
    title: "Renewal reminders, limits, and savings planning",
    body: [
      "A subscription manager is most useful before a charge occurs. PayClear uses local reminders so you can review a trial, monthly plan, or annual renewal with enough time to act. For a shared plan, you can use the reminder as a prompt to check who still uses the service and how the bill should be split.",
      "PayClear also includes spending limits and a cancellation-savings view. These features are prompts for better decisions, not automatic cancellation promises. You remain in control of the subscription and manage any cancellation directly with the provider or the app store where it was purchased.",
    ],
  },
  {
    title: "Choose the alternative that fits your devices and data boundaries",
    body: [
      "Use the provider's own site to confirm Trim's current platform availability, pricing, and data policy before buying. Product features change, especially in personal finance. The important decision is whether the product's account and data model suits the information you are comfortable sharing.",
      "Choose PayClear when you want Android availability, manual subscription tracking, local reminders, and no bank connection requirement. It is a focused tool for making recurring payments visible rather than a broad financial service that needs to understand your complete transaction history.",
    ],
  },
];

const comparison = {
  caption: "PayClear and Trim at a glance",
  headers: ["Feature", "PayClear", "Trim"] as [string, string, string],
  rows: [
    ["Current public platform signal", "Google Play for Android", "Support references Apple App Store billing"],
    ["Core tracking", "Manual entries you choose", "AI-powered subscription-manager positioning"],
    ["Bank connection", "Not required", "Confirm current policy with Trim"],
    ["Reminders", "Local renewal and trial reminders", "Confirm current feature set with Trim"],
    ["Cancellation", "You cancel with the provider", "Confirm current workflow with Trim"],
  ] as Array<[string, string, string]>,
};

const faqs = [
  {
    question: "Is PayClear a Trim alternative for Android?",
    answer:
      "Yes. PayClear is available on Google Play and helps Android users manually track subscriptions, free trials, and recurring bills without bank linking.",
  },
  {
    question: "Will PayClear cancel subscriptions for me?",
    answer:
      "No. PayClear helps you plan renewals and estimate savings, but you cancel directly with the subscription provider or purchase platform.",
  },
  {
    question: "Does PayClear require an account?",
    answer:
      "No. The core tracking experience does not require a PayClear account.",
  },
];

export default function PayclearVsTrimPage() {
  return (
    <SeoPageContent
      breadcrumb="PayClear vs Trim"
      comparison={comparison}
      cta="Try PayClear — private subscription tracking for Android."
      eyebrow="Trim alternative"
      faqs={faqs}
      intro="Trim and PayClear approach subscription management differently. PayClear is an Android app for people who want manual tracking, local reminders, and a focused recurring-cost view without bank linking."
      path="/payclear-vs-trim"
      sections={sections}
      title="PayClear vs Trim: a private Android subscription manager alternative."
    />
  );
}
