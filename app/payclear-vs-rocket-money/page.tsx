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
      "Rocket Money (formerly Truebill) is an automatic subscription tracker that connects to your bank account through Plaid. It scans your transactions, identifies recurring charges and can negotiate bills or cancel services on your behalf. It is one of the most popular finance apps in the US.",
      "PayClear takes the opposite approach. It is a manual subscription tracker that does not connect to your bank, does not scan transactions and does not require an account. You add only the subscriptions you want to track, keeping full control over your financial data.",
    ],
  },
  {
    title: "Why choose PayClear over Rocket Money?",
    body: [
      "Privacy is the biggest reason. Rocket Money requires Plaid access to your bank accounts, which means sharing your bank login credentials with a third party. Your entire transaction history becomes accessible. PayClear never asks for bank access — your subscription data stays on your device.",
      "Cost is another factor. Rocket Money offers a free tier but charges $4-12 per month (you choose your price) for premium features like bill negotiation and cancellation. PayClear is free for up to 5 services, and premium features are a one-time Lifetime purchase — not another monthly subscription.",
    ],
  },
  {
    title: "Feature comparison",
    body: [
      "Rocket Money: automatic transaction scanning, bill negotiation, subscription cancellation, budget tracking, credit score monitoring, savings accounts. Requires bank connection and Plaid. Premium costs $4-12/month.",
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

export default function PayclearVsRocketMoneyPage() {
  return (
    <SeoPageContent
      eyebrow="Comparison"
      title="PayClear vs Rocket Money: subscription tracking without bank access."
      intro="Rocket Money connects to your bank through Plaid to scan transactions automatically. PayClear is a manual subscription tracker that keeps your financial data private. Compare both approaches and decide which fits your needs."
      path="/payclear-vs-rocket-money"
      breadcrumb="PayClear vs Rocket Money"
      sections={sections}
      cta="Try PayClear — private subscription tracking without bank access."
      faqs={faqs}
    />
  );
}
