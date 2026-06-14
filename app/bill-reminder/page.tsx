import type { Metadata } from "next";
import { SeoPageContent } from "../seo-page-content";

export const metadata: Metadata = {
  title: "Bill Reminder for Recurring Payments",
  description:
    "PayClear is a private bill reminder for subscriptions, recurring payments, renewals and shared bills without bank linking.",
  alternates: {
    canonical: "/bill-reminder",
  },
};

const sections = [
  {
    title: "A bill reminder for payments that repeat",
    body: [
      "Many bill reminder apps are built around broad household finance. PayClear focuses on one specific problem: recurring payments that are easy to forget. That includes subscriptions, software tools, cloud storage, memberships, streaming services, app plans and other bills that renew on a schedule.",
      "Instead of connecting to your bank, PayClear lets you manually add the bill name, price, currency, renewal date, billing cycle and reminder settings. This keeps the experience private and focused while still giving you a clear view of what is coming next.",
    ],
  },
  {
    title: "Review upcoming bills before they renew",
    body: [
      "A useful recurring bill reminder should help before the charge happens. PayClear shows upcoming renewals and lets you review services that need attention. You can see what is due soon, what has become overdue and which services should have a reminder added.",
      "This makes PayClear useful for weekly review and monthly recurring cost checks. It is not trying to replace your bank, make payments or negotiate bills. It helps you remember and evaluate repeating costs before they become background noise.",
    ],
  },
  {
    title: "Split shared recurring bills",
    body: [
      "Shared subscriptions create another layer of friction. A streaming plan, cloud account, family membership or roommate bill may have one payer but several people sharing the cost. PayClear includes bill split support so you can calculate each person's share and keep payment details in a clean note.",
      "The goal is practical: split shared subscriptions without a spreadsheet. PayClear can help you see who pays, how many people share the service and what each person owes.",
    ],
  },
  {
    title: "Recurring bills, spending limits and savings",
    body: [
      "Bill reminders are more useful when they connect to the bigger picture. PayClear helps show recurring spend, set spending limits and estimate how much cancellation scenarios could save over time. That makes it easier to spot subscription creep before small monthly charges become a larger problem.",
      "PayClear is not financial advice. It is a private recurring payment tracker and bill reminder that helps you see the facts clearly enough to make your own decisions.",
    ],
  },
];

export default function BillReminderPage() {
  return (
    <SeoPageContent
      eyebrow="Bill reminder"
      title="A private bill reminder for recurring payments."
      intro="PayClear helps you remember subscriptions, renewals and repeating bills manually, without bank linking or account creation."
      path="/bill-reminder"
      breadcrumb="Bill reminder"
      sections={sections}
      cta="Track recurring bills before they renew."
    />
  );
}
