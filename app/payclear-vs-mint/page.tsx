import type { Metadata } from "next";
import { SeoPageContent } from "../seo-page-content";

export const metadata: Metadata = {
  title: "PayClear vs Mint — Subscription Tracker After Mint Shutdown",
  description:
    "Looking for a Mint alternative for subscription tracking? PayClear tracks recurring payments privately without bank linking. Compare PayClear with Mint.",
  alternates: {
    canonical: "/payclear-vs-mint",
    languages: {
      "en-US": "/payclear-vs-mint",
      "en-CA": "/payclear-vs-mint",
      "x-default": "/payclear-vs-mint",
    },
  },
};

const sections = [
  {
    title: "Mint is gone — what are the alternatives?",
    body: [
      "Intuit shut down Mint in early 2024, leaving millions of users looking for alternatives to track their finances and subscriptions. Many former Mint users are evaluating options like Credit Karma, YNAB, Rocket Money and Copilot. But not everyone wants another bank-connected app.",
      "PayClear is designed for the specific part of Mint that many users miss most: subscription tracking. Instead of trying to replace Mint's full budgeting capabilities, PayClear focuses exclusively on recurring payments, renewals and free trials — without requiring bank access.",
    ],
  },
  {
    title: "What Mint did for subscriptions",
    body: [
      "Mint automatically detected recurring charges by scanning linked bank and credit-card transactions. This could be convenient, but it relied on financial-account data aggregation. Former Mint users now need to choose whether their replacement should use a similar connected model or a manual approach.",
      "A connected financial app necessarily handles more data than a focused manual tracker, because it needs transaction information to identify recurring charges. For people who prefer to keep a smaller record, the shutdown is an opportunity to choose a tool that tracks only the subscriptions they enter.",
    ],
  },
  {
    title: "How PayClear compares",
    body: [
      "PayClear offers focused subscription tracking without the full budgeting scope of Mint. You manually add the subscriptions you want to track — streaming, software, memberships, bills — and PayClear gives you a dashboard with monthly costs, renewal dates, reminders and spending insights.",
      "The manual approach means no bank connection needed, no Plaid, no transaction history shared. Your data stays on your device. For former Mint users who specifically want subscription visibility without re-creating a bank-connected relationship, PayClear fills that need.",
    ],
  },
  {
    title: "Features for former Mint users",
    body: [
      "PayClear covers the subscription tracking use cases that Mint users relied on: recurring cost visibility, renewal reminders, multi-category organization and spending trends. It adds features Mint did not have: shared bill splitting, cancellation savings simulator, spending limits with alerts and CSV export.",
      "PayClear is free on Google Play with a free tier that includes core tracking for up to 5 services. Premium is a one-time Lifetime purchase — fitting for users who are wary of yet another monthly subscription after losing a free service like Mint.",
    ],
  },
];

const faqs = [
  {
    question: "Is PayClear a good Mint replacement?",
    answer:
      "PayClear replaces Mint's subscription tracking features specifically. It does not replace Mint's full budgeting, bill pay or credit score features. For focused subscription tracking without bank access, PayClear is a strong choice.",
  },
  {
    question: "Does PayClear connect to my bank like Mint did?",
    answer:
      "No. PayClear is intentionally manual. It does not connect to your bank, scan transactions or use Plaid. This is a feature, not a limitation, for users who want privacy.",
  },
  {
    question: "Is PayClear free like Mint was?",
    answer:
      "PayClear has a free tier with up to 5 active services. Unlike Mint (which was ad-supported with full financial data access), PayClear keeps your data private on your device.",
  },
];

const comparison = {
  caption: "PayClear for former Mint users",
  headers: ["Feature", "PayClear", "Mint (discontinued)"] as [string, string, string],
  rows: [
    ["Availability", "Android on Google Play", "Service discontinued"],
    ["Subscription model", "Manual entries", "Connected-account transaction analysis"],
    ["Bank connection", "Not required", "Required for connected financial views"],
    ["Primary focus", "Subscriptions, trials, and recurring bills", "Broad personal-finance management"],
    ["Data approach", "Local-first subscription record", "Historical connected financial app"],
  ] as Array<[string, string, string]>,
};

export default function PayclearVsMintPage() {
  return (
    <SeoPageContent
      eyebrow="Mint alternative"
      title="Track subscriptions after Mint: a private alternative without bank linking."
      intro="Mint is gone. PayClear offers focused subscription tracking for former Mint users who want recurring payment visibility without connecting another app to their bank account."
      path="/payclear-vs-mint"
      breadcrumb="PayClear vs Mint"
      sections={sections}
      comparison={comparison}
      cta="Try PayClear — subscription tracking without the Mint trade-offs."
      faqs={faqs}
    />
  );
}
