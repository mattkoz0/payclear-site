import type { Metadata } from "next";
import { SeoPageContent } from "../seo-page-content";

export const metadata: Metadata = {
  title: "Subscription Cancellation Savings",
  description:
    "Estimate subscription cancellation savings and understand recurring costs with PayClear.",
  alternates: {
    canonical: "/subscription-cancellation-savings",
    languages: { "en-US": "/subscription-cancellation-savings", "en-CA": "/subscription-cancellation-savings", "x-default": "/subscription-cancellation-savings" },
  },
};

const sections = [
  {
    title: "See what cancelling a subscription could save",
    body: [
      "A single recurring charge may look small until you multiply it across months and years. PayClear helps estimate how much cancelling a subscription could save over time.",
      "This is useful during a subscription review, especially when several services renew quietly and the long-term cost is not obvious.",
    ],
  },
  {
    title: "Compare monthly and yearly impact",
    body: [
      "PayClear helps turn recurring prices into clearer context. A monthly plan, yearly plan or custom billing cycle can be reviewed against monthly and longer-term savings.",
      "The app does not give financial advice or cancel subscriptions for you. It helps you see the recurring math clearly enough to make your own decision.",
    ],
  },
  {
    title: "Connect savings to reminders and limits",
    body: [
      "Cancellation savings are more useful when they are connected to renewal dates. PayClear keeps active subscriptions, reminders, spending limits and savings estimates close together.",
      "That gives you a practical workflow: see what renews next, check the cost, estimate the savings and decide whether the service is still worth keeping.",
    ],
  },
  {
    title: "A private savings view",
    body: [
      "PayClear calculates from the subscriptions you manually enter. It does not need to inspect bank transactions or card statements to estimate recurring subscription savings.",
      "For people who want privacy and clarity, that makes it a focused cancellation savings tracker rather than another finance account connection.",
    ],
  },
];

export default function SubscriptionCancellationSavingsPage() {
  return (
    <SeoPageContent
      eyebrow="Subscription cancellation savings"
      title="Estimate how much cancelling subscriptions could save."
      intro="PayClear helps you understand monthly and long-term subscription cancellation savings without connecting your bank account."
      path="/subscription-cancellation-savings"
      breadcrumb="Subscription cancellation savings"
      sections={sections}
      cta="Review cancellation savings privately."
    />
  );
}
