import type { Metadata } from "next";
import { SeoPageContent } from "../seo-page-content";

export const metadata: Metadata = {
  title: "No-Bank Subscription Tracker",
  description:
    "PayClear is a no-bank subscription tracker for people who want to track renewals, trials and recurring bills without sharing bank access.",
  alternates: {
    canonical: "/no-bank-subscription-tracker",
    languages: { "en-US": "/no-bank-subscription-tracker", "en-CA": "/no-bank-subscription-tracker", "x-default": "/no-bank-subscription-tracker" },
  },
};

const sections = [
  {
    title: "Track subscriptions without bank access",
    body: [
      "PayClear is for people who want subscription visibility without handing a third-party app access to bank transactions. The app does not ask for bank credentials, does not connect through Plaid and does not scan your transaction history to detect subscriptions.",
      "That trade-off is intentional. PayClear is manual by design. You add the services you want to track, choose the billing cycle, set renewal dates and decide which reminders matter. The result is a no-bank subscription tracker that stays focused on recurring payments.",
    ],
  },
  {
    title: "No account required for the core tracker",
    body: [
      "A private tracker should not make onboarding feel like another financial product. PayClear does not require an account for the core subscription tracking experience. You can organize recurring payments, trials and bills without creating a profile just to see your own list.",
      "This makes PayClear a good fit for people who distrust bank-connected finance apps or simply prefer to keep recurring payment notes under their own control.",
    ],
  },
  {
    title: "Local-first data and manual backup",
    body: [
      "PayClear is local-first. Subscription tracker data is stored on your device instead of being uploaded to a PayClear backend as part of the core tracking model. When you want a backup or export, PayClear gives you tools such as JSON backup and CSV export so you can manage your own data.",
      "The app should not be described as automatic cloud sync or end-to-end encrypted cloud sync. The stronger and more accurate promise is simpler: your tracker stays under your control.",
    ],
  },
  {
    title: "Privacy without losing practical features",
    body: [
      "No-bank tracking does not mean a bare list. PayClear still supports local reminders, free trial tracking, spending limits, bill split tools, recurring spend insights and cancellation savings scenarios. Those features work from the information you choose to enter.",
      "For users who want visibility without bank linking, this is the core value: manual input, private organization and clear recurring cost decisions in one place.",
    ],
  },
];

export default function NoBankSubscriptionTrackerPage() {
  return (
    <SeoPageContent
      eyebrow="No-bank subscription tracker"
      title="A subscription tracker with no bank connection."
      intro="PayClear helps you track subscriptions, trials and recurring bills without bank linking, card linking or account creation."
      path="/no-bank-subscription-tracker"
      breadcrumb="No-bank subscription tracker"
      sections={sections}
      cta="Keep subscription tracking under your control."
    />
  );
}
