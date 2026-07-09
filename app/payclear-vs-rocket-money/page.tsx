import type { Metadata } from "next";
import { SeoPageContent } from "../seo-page-content";

export const metadata: Metadata = {
  title:
    "PayClear vs Rocket Money — Subscription Tracker Without Bank Access",
  description:
    "Compare PayClear and Rocket Money (formerly Truebill). PayClear tracks subscriptions without Plaid, bank linking or transaction scanning.",
  alternates: {
    canonical: "/payclear-vs-rocket-money",
    languages: {
      "en-US": "/payclear-vs-rocket-money",
      "en-CA": "/payclear-vs-rocket-money",
      "x-default": "/payclear-vs-rocket-money",
    },
  },
};

const sections = [
  {
    title: "Rocket Money vs PayClear: two different approaches",
    body: [
      "Rocket Money (formerly Truebill) is a personal-finance app that can link financial accounts through Plaid, analyze linked transactions for recurring charges, and offer subscription-cancellation and bill-negotiation services. Its available features and plan details can change, so check Rocket Money directly before choosing a plan.",
      "PayClear takes the opposite approach. It is a manual subscription tracker that does not connect to your bank, does not scan transactions and does not require an account. You add only the subscriptions you want to track, keeping full control over your financial data.",
    ],
  },
  {
    title: "Why choose PayClear over Rocket Money?",
    body: [
      "Privacy is a key difference. Rocket Money's automatic tracking works from linked financial-account data. PayClear never asks for bank access, Plaid, or transaction scanning: you add only the subscriptions you choose to track, and the tracker is designed around local device data.",
      "Cost is another consideration. Rocket Money offers free and optional paid services, with pricing and included features that can vary. PayClear is free for up to 5 services, and its premium features are offered as a one-time Lifetime purchase rather than another monthly subscription.",
    ],
  },
  {
    title: "Feature comparison",
    body: [
      "Rocket Money: linked-account transaction analysis, budgeting, recurring-charge monitoring, and optional cancellation or bill-negotiation services. Its exact plan features and pricing should be checked directly with Rocket Money.",
      "PayClear: manual subscription tracking, free trial reminders, spending limits, shared bill splitting, cancellation savings simulator, multi-currency support, CSV export, local backups. No bank connection needed. Premium is a one-time purchase. PayClear focuses specifically on subscriptions rather than being a full budgeting tool.",
    ],
  },
  {
    title: "When to use each app",
    body: [
      "Choose Rocket Money if you want automatic transaction scanning, bill negotiation and do not mind sharing bank access with a third party. It is a powerful all-in-one finance app for people comfortable with Plaid connections.",
      "Choose PayClear if you want private, manual subscription tracking without bank access. PayClear is ideal for people who want to see what they pay for recurring services, set renewal reminders and make informed cancellation decisions — without giving any app access to their bank account.",
    ],
  },
];

const faqs = [
  {
    question: "Is PayClear a Rocket Money alternative?",
    answer:
      "Yes. PayClear is a privacy-focused alternative to Rocket Money for subscription tracking. Unlike Rocket Money, PayClear does not require bank access, Plaid or an account.",
  },
  {
    question: "Can PayClear cancel subscriptions like Rocket Money?",
    answer:
      "No. PayClear does not cancel subscriptions for you. It helps you identify what to cancel and estimates your savings, but you cancel directly with each provider.",
  },
  {
    question: "Is PayClear free like Rocket Money?",
    answer:
      "Both have free tiers. Rocket Money premium is $4-12/month. PayClear premium is a one-time Lifetime purchase, so it does not add another monthly bill.",
  },
];

const comparison = {
  caption: "PayClear and Rocket Money at a glance",
  headers: ["Feature", "PayClear", "Rocket Money"] as [string, string, string],
  rows: [
    ["Subscription detection", "Manual entries you choose", "Linked-account transaction analysis"],
    ["Bank or Plaid connection", "Not required", "Used for linked-account features"],
    ["Renewal reminders", "Local reminders", "Available features vary by plan"],
    ["Cancellation help", "You cancel with the provider", "Optional cancellation services"],
    ["Premium model", "One-time Lifetime purchase", "Free and optional paid services"],
  ] as Array<[string, string, string]>,
};

export default function PayclearVsRocketMoneyPage() {
  return (
    <SeoPageContent
      eyebrow="Comparison"
      title="PayClear vs Rocket Money: subscription tracking without bank access."
      intro="Rocket Money connects to your bank through Plaid to scan transactions automatically. PayClear is a manual subscription tracker that keeps your financial data private. Compare both approaches and decide which fits your needs."
      path="/payclear-vs-rocket-money"
      breadcrumb="PayClear vs Rocket Money"
      sections={sections}
      comparison={comparison}
      cta="Try PayClear — private subscription tracking without bank access."
      faqs={faqs}
    />
  );
}
