import type { Metadata } from "next";
import { SeoPageContent } from "../seo-page-content";

export const metadata: Metadata = {
  title: "Shared Subscription Bill Splitter",
  description:
    "Split shared subscription bills, recurring plans and family memberships with PayClear.",
  alternates: {
    canonical: "/shared-subscription-bill-splitter",
  },
};

const sections = [
  {
    title: "Split shared subscription costs",
    body: [
      "A shared subscription can be simple at first and messy later. One person pays for a streaming plan, cloud account, software tool or membership, while several people use it. PayClear helps calculate each person's share.",
      "Instead of keeping the split in a spreadsheet or chat thread, you can store the recurring cost, number of people and payment note close to the subscription record.",
    ],
  },
  {
    title: "Useful for family plans and roommates",
    body: [
      "PayClear's bill split tools are useful for family subscriptions, roommate services, shared software and small group plans. The app keeps the cost attached to the service that creates it.",
      "This makes recurring bill splitting easier to review when a price changes, a person leaves the plan or a subscription renews.",
    ],
  },
  {
    title: "Combine bill splitting with reminders",
    body: [
      "A shared bill is still a renewal. PayClear lets you track the next payment date and use local reminders so you can review the service before the charge arrives.",
      "That helps with practical decisions: who still uses the plan, whether the price is still fair and whether the subscription should continue.",
    ],
  },
  {
    title: "Private and manual",
    body: [
      "PayClear does not need bank access to split shared subscription bills. You enter the details yourself and keep the tracker focused on the recurring payments you choose to organize.",
      "The result is a private bill splitter for subscriptions, not a broad payment app or financial account aggregator.",
    ],
  },
];

export default function SharedSubscriptionBillSplitterPage() {
  return (
    <SeoPageContent
      eyebrow="Shared subscription bill splitter"
      title="Split shared subscriptions without a spreadsheet."
      intro="PayClear helps you calculate shared subscription costs, track renewal dates and keep recurring bill details in one private place."
      path="/shared-subscription-bill-splitter"
      breadcrumb="Shared subscription bill splitter"
      sections={sections}
      cta="Split shared subscription bills clearly."
    />
  );
}
