import type { Metadata } from "next";
import { SeoPageContent } from "../seo-page-content";

export const metadata: Metadata = {
  title: "Track Streaming Subscriptions",
  description:
    "Track streaming subscriptions, free trials, shared plans and renewal dates privately with PayClear.",
  alternates: {
    canonical: "/track-streaming-subscriptions",
    languages: { "en-US": "/track-streaming-subscriptions", "en-CA": "/track-streaming-subscriptions", "x-default": "/track-streaming-subscriptions" },
  },
};

const sections = [
  {
    title: "Keep streaming plans visible",
    body: [
      "Streaming subscriptions are easy to add and easy to forget. PayClear helps you track services like video, music, sports, cloud gaming and creator memberships in one private subscription list.",
      "You can record the plan name, price, renewal date, billing cycle and notes so a streaming service does not disappear into background spending.",
    ],
  },
  {
    title: "Track trials before they renew",
    body: [
      "Streaming trials often start with a quick sign-up and renew automatically after the trial period ends. PayClear lets you add the trial date, first charge and local reminder timing so you can review the service before paying.",
      "The goal is not to cancel everything. The goal is to decide intentionally which streaming subscriptions still deserve a place in your budget.",
    ],
  },
  {
    title: "Useful for shared streaming subscriptions",
    body: [
      "Shared family or roommate plans can make the real cost less obvious. PayClear includes bill split tools so one payer can calculate each person's share and keep payment details in a clean record.",
      "That makes streaming subscription tracking useful for both personal plans and shared recurring costs.",
    ],
  },
  {
    title: "Streaming costs without bank linking",
    body: [
      "PayClear does not connect to your bank to detect streaming charges. You manually add the services you care about and keep the tracker under your control.",
      "This privacy-first model works well if you want a focused streaming subscription tracker instead of a full budgeting app.",
    ],
  },
];

export default function TrackStreamingSubscriptionsPage() {
  return (
    <SeoPageContent
      eyebrow="Streaming subscription tracker"
      title="Track streaming subscriptions before they renew."
      intro="PayClear helps you track streaming subscriptions, free trials and shared plans privately, without linking a bank account."
      path="/track-streaming-subscriptions"
      breadcrumb="Track streaming subscriptions"
      sections={sections}
      cta="Review streaming subscriptions privately."
    />
  );
}
