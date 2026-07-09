import type { Metadata } from "next";
import { SeoPageContent } from "../seo-page-content";

export const metadata: Metadata = {
  title: "Cancel Unused Subscriptions — Find and Stop Wasting Money",
  description:
    "Find and cancel unused subscriptions you forgot about. Use PayClear to identify subscriptions worth canceling and estimate how much you can save.",
  alternates: {
    canonical: "/cancel-unused-subscriptions",
    languages: {
      "en-US": "/cancel-unused-subscriptions",
      "en-CA": "/cancel-unused-subscriptions",
      "x-default": "/cancel-unused-subscriptions",
    },
  },
};

const sections = [
  {
    title: "How much are unused subscriptions costing you?",
    body: [
      "Americans waste an estimated $133 per month on subscriptions they do not use or have forgotten about. That is over $1,600 per year going to services you may not even remember signing up for. Streaming services, fitness apps, cloud storage, news sites and software trials all contribute to subscription waste.",
      "The problem is not signing up — it is forgetting to cancel. Free trials silently convert to paid plans. Services raise prices without obvious notifications. And the small monthly charges ($5-15 each) feel insignificant until you see the total.",
    ],
  },
  {
    title: "How to find subscriptions worth canceling",
    body: [
      "Start with a simple question for each subscription: Did I use this in the last 30 days? If the answer is no, it is a candidate for cancellation. Check your bank statements, credit card bills, Google Play subscriptions and app store settings.",
      "PayClear helps you identify cancellation candidates by showing all your subscriptions in one dashboard with last-use context, renewal dates and spending insights. The cancellation savings simulator shows exactly how much you would save monthly, yearly and long-term by dropping specific services.",
    ],
  },
  {
    title: "Common subscriptions Americans forget to cancel",
    body: [
      "Free trial conversions are the biggest source of forgotten subscriptions. Streaming services like Paramount+, Peacock or Apple TV+ often start with a 7-day free trial. Cloud storage upgrades on iCloud, Google One or Dropbox are easy to forget. Fitness apps, meditation apps and language learning tools frequently go unused after the initial enthusiasm fades.",
      "Software subscriptions are another common waste area: Adobe Creative Cloud, Microsoft 365, VPN services, password managers and AI tools like ChatGPT Plus all bill quietly. Check each one and ask if you are getting enough value to justify the recurring cost.",
    ],
  },
  {
    title: "Estimate your cancellation savings",
    body: [
      "Before canceling, use PayClear's savings simulator to see the impact. Select the subscriptions you are considering canceling and see the projected savings across different time periods — monthly, yearly, 2 years and 5 years. This makes the financial impact tangible.",
      "Even canceling just 2-3 unused subscriptions averaging $12 each saves $36 per month — that is $432 per year. Over 5 years, small subscription changes compound into thousands of dollars saved.",
    ],
  },
];

const faqs = [
  {
    question: "How much can I save by canceling unused subscriptions?",
    answer:
      "The average American can save $50-133 per month by canceling forgotten or unused subscriptions. That adds up to $600-1,600 per year.",
  },
  {
    question: "Does PayClear cancel subscriptions for me?",
    answer:
      "No. PayClear helps you identify subscriptions worth canceling and estimates your savings, but you cancel services directly with each provider. PayClear does not access your accounts.",
  },
  {
    question: "How do I stop forgetting to cancel free trials?",
    answer:
      "Add each free trial to PayClear with the trial end date and set a reminder 2-3 days before it converts to a paid plan. This gives you time to decide before the charge hits.",
  },
];

export default function CancelUnusedSubscriptionsPage() {
  return (
    <SeoPageContent
      eyebrow="Cancel and save"
      title="Find and cancel unused subscriptions to save hundreds per year."
      intro="Americans waste over $1,600 a year on forgotten subscriptions. Use PayClear to identify what to cancel, estimate your savings and stop paying for services you do not use."
      path="/cancel-unused-subscriptions"
      breadcrumb="Cancel unused subscriptions"
      sections={sections}
      cta="Find your unused subscriptions and start saving."
      faqs={faqs}
    />
  );
}
