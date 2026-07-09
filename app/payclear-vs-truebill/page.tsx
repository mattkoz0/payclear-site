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
      "Truebill was rebranded to Rocket Money after being acquired by Rocket Companies. The core product remains the same: a bank-connected finance app that scans your transactions through Plaid to find and manage subscriptions. It can negotiate bills and cancel services on your behalf.",
      "PayClear offers a fundamentally different approach. It is a manual subscription tracker that does not connect to your bank, does not require Plaid and does not scan your transactions. You choose which subscriptions to track, keeping complete privacy over your financial data.",
    ],
  },
  {
    title: "Privacy differences",
    body: [
      "Truebill (Rocket Money) requires you to connect your bank accounts through Plaid. This means sharing your bank login credentials with a third-party service that accesses your full transaction history. While Plaid is widely used, it creates a data access point that privacy-conscious users may want to avoid.",
      "PayClear stores subscription data locally on your device. There is no Plaid connection, no transaction scanning and no server-side storage of your financial information. If you uninstall the app, your data is gone — because it was never uploaded anywhere.",
    ],
  },
  {
    title: "Cost comparison",
    body: [
      "Truebill (Rocket Money) uses a \"name your price\" model for premium features: $4-12 per month. Over a year, that is $48-144 for subscription tracking. The irony of paying a monthly subscription to track your subscriptions is not lost on many users.",
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

export default function PayclearVsTruebillPage() {
  return (
    <SeoPageContent
      eyebrow="Comparison"
      title="PayClear vs Truebill: why manual tracking beats transaction scanning for privacy."
      intro="Truebill (now Rocket Money) scans your bank transactions through Plaid. PayClear uses manual tracking with zero bank access. Compare both approaches and choose the right subscription tracker for your needs."
      path="/payclear-vs-truebill"
      breadcrumb="PayClear vs Truebill"
      sections={sections}
      cta="Try PayClear — subscription tracking without bank access."
    />
  );
}
