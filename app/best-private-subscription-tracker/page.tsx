import type { Metadata } from "next";
import { SeoPageContent } from "../seo-page-content";

export const metadata: Metadata = {
  title: "Best Private Subscription Tracker",
  description:
    "Learn what to look for in a private subscription tracker and how PayClear helps track renewals without bank linking.",
  alternates: {
    canonical: "/best-private-subscription-tracker",
    languages: { "en-US": "/best-private-subscription-tracker", "en-CA": "/best-private-subscription-tracker", "x-default": "/best-private-subscription-tracker" },
  },
};

const sections = [
  {
    title: "What makes a subscription tracker private",
    body: [
      "A private subscription tracker should make its data model easy to understand. Users should know whether the app reads bank transactions, requires an account, uploads tracker data or works from manual input.",
      "PayClear is designed around manual input and no bank linking. That means you choose what to track instead of giving a finance app broad access to financial accounts.",
    ],
  },
  {
    title: "What to look for",
    body: [
      "A useful private subscription tracker should support renewal dates, free trial endings, reminders, recurring spend context, export options and clear privacy language.",
      "It should also avoid overstating what it can do. PayClear does not cancel subscriptions for you and does not provide financial advice. It helps organize recurring payment information so you can make decisions yourself.",
    ],
  },
  {
    title: "Where PayClear fits",
    body: [
      "PayClear is a good fit for users who want a focused subscription tracker without bank sync. It is especially relevant for people tracking streaming services, app subscriptions, AI tools, software plans, memberships and shared recurring bills.",
      "The app includes local reminders, spending limits, bill splitting, cancellation savings estimates and backup/export tools.",
    ],
  },
  {
    title: "Best for manual control",
    body: [
      "PayClear is not the best choice for someone who wants fully automatic subscription detection. It is best for someone who values privacy, manual control and a clear recurring payment review habit.",
      "That makes it a practical private subscription tracker for Android users who do not want to link a bank account.",
    ],
  },
];

export default function BestPrivateSubscriptionTrackerPage() {
  return (
    <SeoPageContent
      eyebrow="Private subscription tracker"
      title="What to look for in a private subscription tracker."
      intro="PayClear is a private manual subscription tracker for users who want renewal visibility without bank linking, card linking or transaction scanning."
      path="/best-private-subscription-tracker"
      breadcrumb="Best private subscription tracker"
      sections={sections}
      cta="Try private subscription tracking on Android."
    />
  );
}
