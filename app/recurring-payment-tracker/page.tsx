import type { Metadata } from "next";
import { SeoPageContent } from "../seo-page-content";

export const metadata: Metadata = {
  title: "Recurring Payment Tracker",
  description:
    "Track recurring payments, subscriptions, renewals and free trials privately with PayClear.",
  alternates: {
    canonical: "/recurring-payment-tracker",
  },
};

const sections = [
  {
    title: "Track payments that repeat",
    body: [
      "Recurring payments are easy to miss because they arrive on different schedules. PayClear helps you track subscriptions, app plans, memberships, shared bills and other repeating costs in one private place.",
      "You can add each payment manually with its amount, currency, renewal date and billing cycle, then review what is coming next.",
    ],
  },
  {
    title: "Built around renewals",
    body: [
      "A recurring payment tracker should be useful before the charge happens. PayClear keeps renewal dates, free trial endings and reminder settings visible so you can review upcoming costs in time.",
      "This makes the app useful for weekly or monthly review habits, not just storing a list of services.",
    ],
  },
  {
    title: "Understand recurring spend",
    body: [
      "PayClear helps organize recurring payments into monthly cost context, spending limits, categories and profiles. That makes it easier to understand which payments are personal, shared, family-related or work-related.",
      "The app also includes cancellation savings estimates so you can compare what keeping or cancelling a recurring payment might mean over time.",
    ],
  },
  {
    title: "No bank connection required",
    body: [
      "PayClear is a manual recurring payment tracker. It does not connect to your bank, scan transactions or require an account for core tracking.",
      "That privacy-first approach is useful when you want recurring payment clarity without handing another app access to financial accounts.",
    ],
  },
];

export default function RecurringPaymentTrackerPage() {
  return (
    <SeoPageContent
      eyebrow="Recurring payment tracker"
      title="Track recurring payments before they renew."
      intro="PayClear helps you track recurring payments, subscriptions, trials and bills manually, without bank linking."
      path="/recurring-payment-tracker"
      breadcrumb="Recurring payment tracker"
      sections={sections}
      cta="Track recurring payments privately."
    />
  );
}
