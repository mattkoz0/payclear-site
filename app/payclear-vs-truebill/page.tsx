import type { Metadata } from "next";
import { SeoPageContent } from "../seo-page-content";

export const metadata: Metadata = {
  title: "PayClear vs Truebill — Private Subscription Tracker Alternative",
  description:
    "Compare PayClear and Truebill (now Rocket Money). PayClear tracks subscriptions without Plaid, bank linking or creating an account.",
  alternates: {
    canonical: "/payclear-vs-truebill",
    languages: {
      "en-US": "/payclear-vs-truebill",
      "en-CA": "/payclear-vs-truebill",
      "x-default": "/payclear-vs-truebill",
    },
  },
};

const sections = [
  {
    title: "Truebill became Rocket Money — but the model stayed the same",
    body: [
      "Truebill was rebranded to Rocket Money after Rocket Companies acquired it. Rocket Money is a linked-account personal-finance app that can analyze transactions for recurring charges and offers optional cancellation or bill-negotiation services. Check Rocket Money directly for current availability, pricing, and features.",
      "PayClear offers a fundamentally different approach. It is a manual subscription tracker that does not connect to your bank, does not require Plaid and does not scan your transactions. You choose which subscriptions to track, keeping complete privacy over your financial data.",
    ],
  },
  {
    title: "Privacy differences",
    body: [
      "Rocket Money's automatic tracking uses linked financial-account data through Plaid. While that model can be convenient, it is a data-sharing choice that privacy-conscious users may prefer to avoid. PayClear uses a manual model, so it does not need a bank connection or transaction feed for core tracking.",
      "PayClear stores subscription data locally on your device. There is no Plaid connection, no transaction scanning and no server-side storage of your financial information. If you uninstall the app, your data is gone — because it was never uploaded anywhere.",
    ],
  },
  {
    title: "Cost comparison",
    body: [
      "Rocket Money offers free and optional paid services, and its premium pricing and feature availability can change. Check its current plan details directly before signing up. PayClear keeps its own pricing simple: a free tier for up to 5 active services and a one-time Lifetime purchase for premium features.",
      "PayClear offers a free tier with up to 5 active services. Premium features — unlimited services, no ads, app lock, savings simulator and premium reports — are a one-time Lifetime purchase. You pay once and own the upgrade permanently.",
    ],
  },
  {
    title: "Which is right for you?",
    body: [
      "If you want automatic transaction scanning, bill negotiation and do not mind sharing bank access, Truebill (Rocket Money) is a solid choice with millions of users.",
      "If you want private manual subscription tracking, no bank access required, no monthly premium fee and data that stays on your device, PayClear is the better fit. Download PayClear free on Google Play and start tracking privately.",
    ],
  },
];

const comparison = {
  caption: "PayClear and Truebill (now Rocket Money) at a glance",
  headers: ["Feature", "PayClear", "Truebill / Rocket Money"] as [string, string, string],
  rows: [
    ["Tracking model", "Manual subscription entries", "Linked-account personal-finance app"],
    ["Bank or Plaid connection", "Not required", "Used for linked-account features"],
    ["Transaction scanning", "No", "Used to find recurring charges"],
    ["Data focus", "Subscriptions you enter", "Broader personal-finance information"],
    ["Premium model", "One-time Lifetime purchase", "Free and optional paid services"],
  ] as Array<[string, string, string]>,
};

export default function PayclearVsTruebillPage() {
  return (
    <SeoPageContent
      eyebrow="Comparison"
      title="PayClear vs Truebill: why manual tracking beats transaction scanning for privacy."
      intro="Truebill (now Rocket Money) scans your bank transactions through Plaid. PayClear uses manual tracking with zero bank access. Compare both approaches and choose the right subscription tracker for your needs."
      path="/payclear-vs-truebill"
      breadcrumb="PayClear vs Truebill"
      sections={sections}
      comparison={comparison}
      cta="Try PayClear — subscription tracking without bank access."
    />
  );
}
