import type { Metadata } from "next";
import { SeoPageContent } from "../seo-page-content";

export const metadata: Metadata = {
  title: "Free Trial Tracker App — Never Get Charged After a Trial",
  description:
    "Track free trial end dates and set reminders before they convert to paid subscriptions. PayClear is a free trial tracker app for Android.",
  alternates: {
    canonical: "/free-trial-tracker-app",
    languages: {
      "en-US": "/free-trial-tracker-app",
      "en-CA": "/free-trial-tracker-app",
      "x-default": "/free-trial-tracker-app",
    },
  },
};

const sections = [
  {
    title: "Why you need a free trial tracker",
    body: [
      "Free trials are designed to convert. Services like Hulu, HBO Max, Paramount+, Apple TV+, YouTube Premium and dozens of apps offer 7-day or 30-day free trials. The business model depends on you forgetting to cancel before the trial ends.",
      "A free trial tracker app solves this problem by recording each trial start date, calculating the end date and sending you a reminder before the first paid charge. Instead of relying on memory or calendar entries, you have a dedicated system that keeps trial deadlines visible.",
    ],
  },
  {
    title: "How PayClear tracks free trials",
    body: [
      "When you add a subscription in PayClear, you can mark it as a free trial and set the trial end date. PayClear shows the trial in your dashboard with the days remaining and calculates what the first paid charge will be.",
      "You can schedule one or more local reminders before the trial ends — for example, 3 days before and 1 day before. When the reminder fires, you decide: convert to a paid subscription, or cancel before the charge. PayClear does not cancel for you, but it makes sure you never miss the deadline.",
    ],
  },
  {
    title: "Common free trials that catch people off guard",
    body: [
      "Streaming services are the most common trial traps: Hulu with Live TV ($76.99/month after trial), YouTube Premium ($13.99/month), Paramount+ ($12.99/month) and Apple TV+ ($9.99/month). Cloud storage upgrades like iCloud+ and Google One also start with promotional trials.",
      "App subscriptions from the Google Play Store and Apple App Store frequently offer 3-day or 7-day trials. Fitness apps, meditation apps, productivity tools and AI assistants use trials to hook users. Without a tracker, these small charges add up quickly.",
    ],
  },
  {
    title: "Free trial tracking without bank access",
    body: [
      "Some apps track free trials by scanning your bank transactions for trial-related charges. This requires sharing your bank credentials through services like Plaid. PayClear takes the opposite approach: you manually add each trial with its end date and cost.",
      "Manual tracking means no bank access, no transaction scanning and no financial data shared with third parties. Your trial data stays on your device. Download PayClear free on Google Play to start tracking your active trials today.",
    ],
  },
];

export default function FreeTrialTrackerAppPage() {
  return (
    <SeoPageContent
      eyebrow="Free trial tracker"
      title="Track every free trial so you never pay for something you did not want."
      intro="Free trials convert to paid subscriptions silently. PayClear helps you track trial end dates, set reminders and decide before the first charge hits your account."
      path="/free-trial-tracker-app"
      breadcrumb="Free trial tracker app"
      sections={sections}
      cta="Start tracking your free trials before they convert."
    />
  );
}
