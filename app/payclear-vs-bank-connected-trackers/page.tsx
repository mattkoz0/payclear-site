import type { Metadata } from "next";
import { SeoPageContent } from "../seo-page-content";

export const metadata: Metadata = {
  title: "PayClear vs Bank-Connected Subscription Trackers",
  description:
    "Compare PayClear's manual private subscription tracking model with bank-connected recurring payment trackers.",
  alternates: {
    canonical: "/payclear-vs-bank-connected-trackers",
  },
};

const sections = [
  {
    title: "Two different ways to track subscriptions",
    body: [
      "Bank-connected subscription trackers try to detect recurring payments by reading transaction data. PayClear uses a different model: manual tracking. You enter the subscriptions, trials and recurring bills you want to monitor.",
      "Neither approach is perfect for every user. Automatic tracking can be convenient. Manual tracking can be more private, focused and predictable.",
    ],
  },
  {
    title: "When a bank-connected tracker may be better",
    body: [
      "A bank-connected tracker may be useful if you want automatic discovery and are comfortable sharing financial account access with another service.",
      "That approach can help find subscriptions you forgot about, but it depends on transaction access and may interpret data differently from how you personally think about subscriptions.",
    ],
  },
  {
    title: "When PayClear may be better",
    body: [
      "PayClear may be a better fit if you do not want bank linking, card linking, Plaid access or transaction scanning. It is designed for people who prefer to manually track recurring payments they choose to monitor.",
      "The app is especially useful for free trials, shared subscriptions, streaming plans, app subscriptions and recurring services where the next renewal date matters.",
    ],
  },
  {
    title: "Privacy trade-off",
    body: [
      "The key trade-off is convenience versus control. Bank-connected apps can reduce manual entry, while PayClear keeps the tracking model private and explicit.",
      "For users who want subscription clarity without giving another app access to financial accounts, PayClear is intentionally built around manual input and local-first organization.",
    ],
  },
];

export default function PayClearVsBankConnectedTrackersPage() {
  return (
    <SeoPageContent
      eyebrow="Comparison"
      title="PayClear vs bank-connected subscription trackers."
      intro="PayClear is a private manual alternative to subscription trackers that connect to bank accounts and scan transactions."
      path="/payclear-vs-bank-connected-trackers"
      breadcrumb="PayClear vs bank-connected trackers"
      sections={sections}
      cta="Choose private manual subscription tracking."
    />
  );
}
