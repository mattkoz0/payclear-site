import type { Metadata } from "next";
import { SeoPageContent } from "../seo-page-content";

export const metadata: Metadata = {
  title: "PayClear vs Copilot Money — Android Subscription Tracker Alternative",
  description:
    "Compare PayClear and Copilot Money. PayClear is a private Android subscription tracker without linked accounts, bank access, or a monthly premium requirement.",
  alternates: {
    canonical: "/payclear-vs-copilot-money",
    languages: {
      "en-US": "/payclear-vs-copilot-money",
      "en-CA": "/payclear-vs-copilot-money",
      "x-default": "/payclear-vs-copilot-money",
    },
  },
};

const sections = [
  {
    title: "Copilot Money and PayClear are built for different scopes",
    body: [
      "Copilot Money is a broad personal-finance product for accounts, spending, budgets, investments, and net worth. Its official site currently lists iPhone, iPad, Mac, and Web. It can automatically track linked financial information and surface subscriptions as part of that larger money-management view.",
      "PayClear is narrower by design. It is an Android app for tracking subscriptions, free trials, recurring bills, spending limits, and shared plan splits. You enter the services you want to monitor, without connecting a bank account or turning the tracker into a complete picture of your finances.",
    ],
  },
  {
    title: "An Android option without linked financial accounts",
    body: [
      "If you use Android, platform fit is a practical first filter. PayClear is available through Google Play and uses the subscription details you add manually. This works whether you pay through an app store, several cards, a payment wallet, or a shared household arrangement.",
      "Manual tracking also creates a different privacy boundary. PayClear does not require a Plaid connection, bank login, or transaction feed for core tracking. You can keep the record limited to service names, billing dates, prices, currencies, and reminders instead of linking broader account and investment data.",
    ],
  },
  {
    title: "Recurring-cost clarity versus all-in-one finance management",
    body: [
      "An all-in-one finance app can make sense if you want budgets, cash flow, investments, and net worth in the same place. A focused subscription tracker can make more sense if your immediate goal is to catch a free trial, review annual renewals, share a streaming bill fairly, or see the recurring commitments you have chosen to keep.",
      "PayClear's dashboard and local reminders are designed around that recurring-cost workflow. Add a service when it starts, set notice before it renews, and decide whether to keep, downgrade, rotate, or cancel it. You still manage the subscription directly with its provider, with more time and context before the next charge.",
    ],
  },
  {
    title: "Pricing and product choice",
    body: [
      "Copilot's official site presents a paid personal-finance subscription with a trial, while plan options and platform availability can change. Check its current offering directly if you need its broader linked-account features. A comparison is useful only when it reflects the product you need today, not an old price page.",
      "PayClear has a free plan for up to five active services and an optional one-time Lifetime unlock for premium features. Choose it when an Android-first, private, manual subscription tracker matches your needs better than a broader account-connected personal-finance product.",
    ],
  },
];

const comparison = {
  caption: "PayClear and Copilot Money at a glance",
  headers: ["Feature", "PayClear", "Copilot Money"] as [string, string, string],
  rows: [
    ["Current public platforms", "Android via Google Play", "iPhone, iPad, Mac, and Web"],
    ["Product scope", "Subscriptions and recurring bills", "Broad personal-finance management"],
    ["Core tracking model", "Manual entries", "Automatic linked-account tracking"],
    ["Bank or Plaid connection", "Not required", "Linked financial accounts are central to its scope"],
    ["Premium model", "Free tier plus one-time Lifetime unlock", "Paid plan with trial; check current terms"],
  ] as Array<[string, string, string]>,
};

const faqs = [
  {
    question: "Is PayClear a Copilot Money alternative for Android?",
    answer:
      "Yes, for subscription tracking. PayClear is available on Google Play and focuses on manual tracking of renewals, trials, recurring bills, and shared plans.",
  },
  {
    question: "Does PayClear replace Copilot's budgeting and investment features?",
    answer:
      "No. Copilot is a broader personal-finance product. PayClear is focused on subscriptions and recurring costs without linked financial accounts.",
  },
  {
    question: "Does PayClear need access to my bank account?",
    answer:
      "No. PayClear is manual by design and does not require bank access, Plaid, or transaction scanning for core tracking.",
  },
];

export default function PayclearVsCopilotMoneyPage() {
  return (
    <SeoPageContent
      breadcrumb="PayClear vs Copilot Money"
      comparison={comparison}
      cta="Try PayClear — private subscription tracking on Android."
      eyebrow="Copilot Money alternative"
      faqs={faqs}
      intro="Copilot Money is a broad personal-finance product for Apple devices and the web. PayClear is the focused Android alternative for private subscription tracking without a bank connection."
      path="/payclear-vs-copilot-money"
      sections={sections}
      title="PayClear vs Copilot Money: an Android subscription tracker alternative."
    />
  );
}
