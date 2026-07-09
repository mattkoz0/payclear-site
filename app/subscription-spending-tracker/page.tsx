import type { Metadata } from "next";
import { SeoPageContent } from "../seo-page-content";

export const metadata: Metadata = {
  title: "Subscription Spending Tracker",
  description:
    "Track recurring subscription spending, monthly costs, limits and cancellation savings with PayClear.",
  alternates: {
    canonical: "/subscription-spending-tracker",
    languages: { "en-US": "/subscription-spending-tracker", "en-CA": "/subscription-spending-tracker", "x-default": "/subscription-spending-tracker" },
  },
};

const sections = [
  {
    title: "See recurring spending in one place",
    body: [
      "Subscription spending can feel small service by service and still become a meaningful monthly total. PayClear helps you collect recurring costs in one place so the total is easier to understand.",
      "You can track weekly, monthly, yearly and custom billing cycles, then review what those services mean for monthly recurring spend and upcoming renewals.",
    ],
  },
  {
    title: "Use limits to spot subscription creep",
    body: [
      "PayClear supports spending limits so you can decide when recurring costs are getting too close to the number you care about. This is useful for streaming plans, work tools, apps, cloud storage and family subscriptions.",
      "The app is not financial advice. It gives you a clearer view of the recurring facts so you can decide what deserves another month.",
    ],
  },
  {
    title: "Estimate cancellation savings",
    body: [
      "Sometimes the most useful question is simple: what would I save if I cancelled this service? PayClear includes cancellation savings estimates to help you compare monthly, yearly and longer-term impact.",
      "That makes the tracker practical during subscription reviews, especially when several small services renew at different times.",
    ],
  },
  {
    title: "Spending context without bank linking",
    body: [
      "PayClear does not need transaction feeds to help you understand subscription spending. You enter the services you want to track, and the app organizes the recurring cost picture from that information.",
      "This manual model works well for users who want spending clarity without handing a third-party app access to their bank account.",
    ],
  },
];

export default function SubscriptionSpendingTrackerPage() {
  return (
    <SeoPageContent
      eyebrow="Subscription spending tracker"
      title="Understand what your subscriptions cost every month."
      intro="PayClear helps you track recurring subscription spending, review limits and estimate cancellation savings without linking your bank."
      path="/subscription-spending-tracker"
      breadcrumb="Subscription spending tracker"
      sections={sections}
      cta="Review recurring subscription spending."
    />
  );
}
