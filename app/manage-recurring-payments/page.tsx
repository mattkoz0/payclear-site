import type { Metadata } from "next";
import { SeoPageContent } from "../seo-page-content";

export const metadata: Metadata = {
  title: "Manage Recurring Payments — Track Bills and Subscriptions",
  description:
    "Manage all your recurring payments in one place. Track bills, subscriptions, memberships and regular charges with PayClear — no bank access needed.",
  alternates: {
    canonical: "/manage-recurring-payments",
    languages: {
      "en-US": "/manage-recurring-payments",
      "en-CA": "/manage-recurring-payments",
      "x-default": "/manage-recurring-payments",
    },
  },
};

const sections = [
  {
    title: "Take control of recurring payments",
    body: [
      "Recurring payments go far beyond streaming subscriptions. Rent, utilities, insurance premiums, gym memberships, phone plans, internet service, cloud storage, software licenses, meal kits, pet food deliveries and subscription boxes all create a web of regular charges that can be hard to track.",
      "PayClear helps you organize all these recurring payments in one private dashboard. See your total monthly commitments, track which payments come due next and set reminders so nothing catches you off guard.",
    ],
  },
  {
    title: "Different billing cycles, one clear view",
    body: [
      "Not all recurring payments follow the same schedule. Some are weekly, some monthly, some quarterly, some yearly. PayClear handles all billing cycles and normalizes them into a clear monthly and yearly view so you can understand the true cost of your recurring commitments.",
      "This matters especially for annual payments that feel less expensive when billed once per year but add significant ongoing cost. A $120/year software license is $10/month — easy to forget until renewal day arrives with no warning.",
    ],
  },
  {
    title: "Recurring payment management without bank linking",
    body: [
      "Bank-connected apps like Rocket Money, Trim and Copilot automatically scan your transactions to find recurring charges. This is convenient but requires sharing your bank credentials through services like Plaid, giving third parties access to your full transaction history.",
      "PayClear is for people who want recurring payment visibility without that trade-off. You manually add the payments you want to track, keeping complete control over what data exists in the app and where it is stored (locally on your device).",
    ],
  },
  {
    title: "Set limits and track spending",
    body: [
      "PayClear lets you set weekly, monthly or yearly spending limits for your recurring payments. As your active subscriptions and bills approach these limits, you receive alerts. This helps you make intentional decisions about new services rather than discovering overspending after the fact.",
      "The spending insights view breaks down recurring costs by category, currency and profile, giving you a clear picture of where your recurring money goes each month.",
    ],
  },
];

export default function ManageRecurringPaymentsPage() {
  return (
    <SeoPageContent
      eyebrow="Recurring payments"
      title="Manage recurring payments without sharing bank access."
      intro="From streaming subscriptions to utility bills, PayClear helps you track and manage all your recurring payments in one private dashboard. No bank connection, no account required."
      path="/manage-recurring-payments"
      breadcrumb="Manage recurring payments"
      sections={sections}
      cta="Start managing your recurring payments today."
    />
  );
}
