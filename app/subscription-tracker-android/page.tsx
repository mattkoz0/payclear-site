import type { Metadata } from "next";
import { SeoPageContent } from "../seo-page-content";

export const metadata: Metadata = {
  title: "Subscription Tracker for Android",
  description:
    "Download PayClear on Google Play and track subscriptions, free trials and recurring bills privately on Android.",
  alternates: {
    canonical: "/subscription-tracker-android",
    languages: { "en-US": "/subscription-tracker-android", "en-CA": "/subscription-tracker-android", "x-default": "/subscription-tracker-android" },
  },
};

const sections = [
  {
    title: "An Android subscription tracker on Google Play",
    body: [
      "PayClear is available for Android on Google Play. It is built for people who want a focused subscription tracker for renewals, free trials, shared bills and recurring spending without bank linking.",
      "The Android app lets you add services manually, review upcoming payments and keep recurring costs organized in a private, local-first tracker.",
    ],
  },
  {
    title: "Track free trials and recurring bills",
    body: [
      "PayClear supports the common subscription moments that happen on a phone: starting a free trial, remembering a renewal, reviewing a monthly total or deciding whether a service is still worth keeping.",
      "You can track trial end dates, set local reminders, organize subscriptions by category or profile and review active services from the dashboard.",
    ],
  },
  {
    title: "Private tracking without account setup",
    body: [
      "The core tracking experience does not require a PayClear account or bank connection. You enter the subscription details yourself and keep the tracker focused on the recurring payments you want to monitor.",
      "That makes PayClear a practical Android option for users who want subscription visibility without automatic transaction scanning.",
    ],
  },
  {
    title: "Built for subscription reviews",
    body: [
      "PayClear is not just a list of apps you pay for. It includes spending limits, insights, shared bill splitting, backup and export tools, and cancellation savings estimates.",
      "Those tools help turn a subscription tracker into a review habit: see what renews next, understand the cost and decide what stays.",
    ],
  },
];

export default function SubscriptionTrackerAndroidPage() {
  return (
    <SeoPageContent
      eyebrow="Android subscription tracker"
      title="Track subscriptions privately on Android."
      intro="PayClear is an Android subscription tracker for renewals, free trials and recurring bills, available now on Google Play."
      path="/subscription-tracker-android"
      breadcrumb="Subscription tracker for Android"
      sections={sections}
      cta="Download PayClear on Google Play."
    />
  );
}
