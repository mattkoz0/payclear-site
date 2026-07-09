import type { Metadata } from "next";
import { SeoPageContent } from "../seo-page-content";

export const metadata: Metadata = {
  title: "PayClear vs Bobby App — Android Subscription Tracker Alternative",
  description:
    "Looking for a Bobby app alternative on Android? Compare PayClear's private manual subscription tracking, local reminders, and Google Play availability.",
  alternates: {
    canonical: "/payclear-vs-bobby-app",
    languages: {
      "en-US": "/payclear-vs-bobby-app",
      "en-CA": "/payclear-vs-bobby-app",
      "x-default": "/payclear-vs-bobby-app",
    },
  },
};

const sections = [
  {
    title: "Bobby and PayClear solve the same recurring-cost problem differently",
    body: [
      "Bobby is a subscription tracker that emphasizes fixed-cost insights and bill-due notifications. Its official product page currently promotes an App Store download path. PayClear is a focused subscription tracker available on Google Play for Android users who want to keep trial dates, bills, and renewal decisions visible.",
      "Both products are built around intentional subscription records rather than a broad budgeting dashboard. The practical question is which device and workflow you use. If you want a tracker on Android, PayClear provides manual entries, local reminders, recurring-spend views, shared-bill tools, and cancellation-savings planning in one app.",
    ],
  },
  {
    title: "An Android-first alternative to Bobby",
    body: [
      "Platform availability is the first difference to check. PayClear is distributed through Google Play and is designed around Android notifications. You can add a subscription, choose its billing cycle, record the next renewal, and set one or more local reminders before a trial converts or a plan renews.",
      "Manual tracking is useful when a recurring cost is paid through different cards, app stores, or payment wallets. You add only the services you want to monitor, rather than relying on a transaction feed to identify them. This makes the list clearer when you have shared plans, annual renewals, or subscriptions in more than one currency.",
    ],
  },
  {
    title: "Privacy and reminder workflow",
    body: [
      "PayClear does not require a PayClear account, a bank login, or a Plaid connection for core tracking. The app is manual by design: the tracker contains the subscriptions you choose to enter, not a scan of your full transaction history. That is a good fit for people who want a compact recurring-cost record.",
      "The value of a tracker is in the timing of its reminders. PayClear lets you plan ahead of free-trial end dates, monthly renewals, and annual charges, so you have time to decide whether a service still belongs in your budget. You still cancel with the provider; the app gives you the context before the charge occurs.",
    ],
  },
  {
    title: "Which subscription tracker should you choose?",
    body: [
      "Choose the product that supports your device and your privacy preferences. If you use the Apple ecosystem and prefer Bobby's design and workflow, its official site is the right place to confirm current availability. If you need an Android subscription tracker with local reminders and no bank connection, PayClear is the direct alternative.",
      "Before moving to any tracker, list the subscriptions you actively use, their current prices, and the next billing date. Add free trials as soon as you start them and review shared plans with the people who use them. A current list and timely reminders matter more than the number of services in the app's catalog.",
    ],
  },
];

const comparison = {
  caption: "PayClear and Bobby at a glance",
  headers: ["Feature", "PayClear", "Bobby"] as [string, string, string],
  rows: [
    ["Current public download path", "Google Play for Android", "Official site promotes App Store"],
    ["Tracking approach", "Manual subscription entries", "Subscription and fixed-cost tracking"],
    ["Bank or Plaid connection", "Not required", "Confirm current policy with Bobby"],
    ["Renewal planning", "Local reminders for trials and renewals", "Bill-due notifications"],
    ["Shared-plan tools", "Bill splits and payment cards", "Confirm current feature set with Bobby"],
  ] as Array<[string, string, string]>,
};

const faqs = [
  {
    question: "Is PayClear a Bobby app alternative for Android?",
    answer:
      "Yes. PayClear is available on Google Play and provides manual subscription tracking, local reminders, spending views, and shared-bill tools for Android users.",
  },
  {
    question: "Does PayClear need a bank connection to track subscriptions?",
    answer:
      "No. You manually add the subscriptions you want to track. PayClear does not require bank credentials, Plaid, or transaction scanning for core tracking.",
  },
  {
    question: "Can PayClear remind me before a free trial renews?",
    answer:
      "Yes. Add the trial end date and choose local reminder timing before the first paid charge.",
  },
];

export default function PayclearVsBobbyAppPage() {
  return (
    <SeoPageContent
      breadcrumb="PayClear vs Bobby"
      comparison={comparison}
      cta="Try PayClear — an Android subscription tracker without bank linking."
      eyebrow="Bobby app alternative"
      faqs={faqs}
      intro="Bobby is a well-known subscription tracker with an App Store-oriented product path. PayClear is the Android alternative for private, manual tracking of subscriptions, free trials, recurring bills, and shared plans."
      path="/payclear-vs-bobby-app"
      sections={sections}
      title="PayClear vs Bobby: an Android subscription tracker alternative."
    />
  );
}
