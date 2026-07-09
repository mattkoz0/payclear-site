import type { Metadata } from "next";
import { SeoPageContent } from "../seo-page-content";

export const metadata: Metadata = {
  title: "How to Track Subscriptions — Complete Guide 2026",
  description:
    "Learn how to track all your subscriptions in one place. Step-by-step guide to managing Netflix, Spotify, Hulu and all recurring payments with PayClear.",
  alternates: {
    canonical: "/how-to-track-subscriptions",
    languages: {
      "en-US": "/how-to-track-subscriptions",
      "en-CA": "/how-to-track-subscriptions",
      "x-default": "/how-to-track-subscriptions",
    },
  },
};

const sections = [
  {
    title: "Why tracking subscriptions matters",
    body: [
      "According to recent studies, the average American spends over $200 per month on subscriptions — and most underestimate their actual spending by 2-3x. Streaming services alone can cost $50-80 per month when you add up Netflix ($15.49), Hulu ($17.99), HBO Max ($15.99), Disney+ ($13.99), Amazon Prime ($14.99) and YouTube Premium ($13.99).",
      "Subscription creep is real. Services raise prices gradually, free trials convert to paid plans silently, and unused apps keep charging month after month. The first step to controlling subscription spending is knowing exactly what you are paying for.",
    ],
  },
  {
    title: "Step 1: List all your active subscriptions",
    body: [
      "Start by checking your bank and credit card statements for recurring charges over the last 3 months. Look for charges from streaming services, music apps, cloud storage providers, news sites, fitness apps, software tools, meal kits, gaming services and any other recurring payments.",
      "Common subscriptions to check: Netflix, Spotify, Apple Music, YouTube Premium, Hulu, HBO Max, Disney+, Amazon Prime, Paramount+, iCloud, Google One, Dropbox, Microsoft 365, Adobe Creative Cloud, ChatGPT Plus, gym memberships, meal kit services and app store subscriptions.",
    ],
  },
  {
    title: "Step 2: Record renewal dates and costs",
    body: [
      "For each subscription, note the billing amount, billing cycle (monthly, yearly, weekly), next renewal date and whether you are on a free trial. This information is critical for making informed decisions about what to keep.",
      "PayClear makes this step easy. Add each subscription to the app with its cost, billing cycle and renewal date. PayClear automatically calculates your total monthly and yearly spending and shows upcoming renewals in a clear dashboard.",
    ],
  },
  {
    title: "Step 3: Set up renewal reminders",
    body: [
      "The biggest subscription waste comes from forgotten renewals — especially free trial conversions. Set reminders 3-7 days before each renewal so you have time to decide whether to keep, downgrade or cancel.",
      "PayClear uses local device notifications for reminders. You can schedule multiple reminders per subscription at different intervals. These work without internet and without a PayClear account, so your reminder data stays on your device.",
    ],
  },
  {
    title: "Step 4: Review and optimize regularly",
    body: [
      "Set a monthly habit to review your subscriptions. Ask yourself: Did I use this service in the last 30 days? Is there a cheaper alternative? Can I share this subscription? Is the annual plan cheaper than monthly?",
      "PayClear helps with this review by showing spending insights by category and currency, cancellation savings estimates for each service, and a bill splitter for shared subscriptions. Download PayClear free on Google Play to start tracking today.",
    ],
  },
];

const faqs = [
  {
    question: "How many subscriptions does the average American have?",
    answer:
      "Studies show the average American has 12 or more active subscriptions, spending over $200 per month on recurring services.",
  },
  {
    question: "What is the easiest way to track subscriptions?",
    answer:
      "Use a dedicated subscription tracker app like PayClear. It is faster and more reliable than spreadsheets, and unlike bank-connected apps, it does not require sharing your financial credentials.",
  },
  {
    question: "How do I find forgotten subscriptions?",
    answer:
      "Check your bank and credit card statements for recurring charges over the last 3 months. Also check your Google Play and Apple App Store subscription settings for app-based subscriptions.",
  },
];

export default function HowToTrackSubscriptionsPage() {
  return (
    <SeoPageContent
      eyebrow="Subscription tracking guide"
      title="How to track all your subscriptions in one place."
      intro="A step-by-step guide to finding, organizing and managing every recurring payment. Learn how to stop subscription creep and take control of your monthly spending."
      path="/how-to-track-subscriptions"
      breadcrumb="How to track subscriptions"
      sections={sections}
      cta="Start tracking your subscriptions today."
      faqs={faqs}
    />
  );
}
