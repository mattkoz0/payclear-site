import type { Metadata } from "next";
import { SeoPageContent } from "../seo-page-content";

export const metadata: Metadata = {
  title: "Subscription Tracker Without Bank Linking",
  description:
    "Use PayClear as a private subscription tracker for renewals, free trials, recurring bills and monthly subscription costs without linking your bank.",
  alternates: {
    canonical: "/subscription-tracker",
  },
};

const sections = [
  {
    title: "A private subscription tracker for recurring costs",
    body: [
      "PayClear is built for people who want a clear subscription tracker without giving a finance app access to their bank account. Instead of scanning your transactions, PayClear lets you manually add the services you care about: streaming, music, cloud storage, AI tools, software, gaming, fitness, memberships and other recurring payments.",
      "Manual tracking is intentional. You decide what belongs in your tracker, what counts as active, what should be paused and what should be cancelled. That makes PayClear a focused subscription organizer rather than a broad budgeting app trying to interpret your entire financial life.",
    ],
  },
  {
    title: "See monthly and yearly subscription costs",
    body: [
      "Small recurring charges are easy to ignore until they become a larger monthly total. PayClear helps you see recurring spend in one place, including monthly costs, yearly pace, next payment dates and active service counts. The goal is simple: open the app and understand what renews next before money leaves.",
      "You can track different billing cycles, including weekly, monthly, yearly and custom recurring schedules. PayClear converts those services into a clearer view of ongoing commitments so you can compare subscriptions that do not bill on the same rhythm.",
    ],
  },
  {
    title: "Organize subscriptions by category, profile and tags",
    body: [
      "A useful subscription tracker should do more than store a list. PayClear helps organize services by categories such as streaming, music, cloud storage, productivity, AI, gaming, fitness, news and shopping. Profiles can separate personal, family and business recurring costs.",
      "This matters when you want to answer practical questions: how much do streaming services cost each month, which tools belong to work, which family subscriptions are shared, and which recurring bills deserve a review before renewal.",
    ],
  },
  {
    title: "Designed for decisions, not just storage",
    body: [
      "PayClear is built around the moments when you need to act. A renewal is coming soon. A free trial is about to become paid. A service has no reminder. A subscription is now too expensive. Instead of leaving those decisions scattered across email and app store receipts, PayClear gives them one private place.",
      "You can review upcoming payments, track trial dates, use local reminders, split shared subscriptions and estimate cancellation savings. PayClear does not cancel services for you or give financial advice. It gives you the information you need to decide what to keep.",
    ],
  },
];

export default function SubscriptionTrackerPage() {
  return (
    <SeoPageContent
      eyebrow="Subscription tracker"
      title="Track subscriptions without linking your bank."
      intro="PayClear is a private subscription tracker for recurring payments, renewals and free trials. Add services manually, see what renews next and understand what your subscriptions really cost."
      path="/subscription-tracker"
      breadcrumb="Subscription tracker"
      sections={sections}
      cta="Start tracking subscriptions privately."
    />
  );
}
