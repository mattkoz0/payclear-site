import type { Metadata } from "next";
import { SeoPageContent } from "../seo-page-content";

export const metadata: Metadata = {
  title: "Subscription Reminder App",
  description:
    "PayClear is a subscription reminder app for renewals, free trials and recurring bills without bank linking or account creation.",
  alternates: {
    canonical: "/subscription-reminder-app",
  },
};

const sections = [
  {
    title: "Reminders for subscriptions and renewals",
    body: [
      "PayClear helps you keep renewal dates visible before a recurring payment arrives. Add the subscription, choose the billing cycle and set reminder timing that fits how you review upcoming charges.",
      "The app is useful for services that renew quietly: streaming plans, cloud storage, software tools, memberships, app subscriptions and shared recurring bills.",
    ],
  },
  {
    title: "Free trial reminders before the first paid charge",
    body: [
      "Free trials often become paid subscriptions because the end date is easy to miss. PayClear lets you record trial details and review them before the first paid charge.",
      "You can adjust trial records, mark them as regular subscriptions or archive them when you cancel. That keeps trial decisions close to the rest of your recurring cost picture.",
    ],
  },
  {
    title: "Local-first reminders",
    body: [
      "PayClear uses a privacy-first manual tracking model. It does not need bank access or an account just to remind you about a renewal date you entered yourself.",
      "As with any mobile reminder, operating systems can affect notification delivery. PayClear keeps the important dates visible in the app so upcoming renewals remain easy to review.",
    ],
  },
  {
    title: "More than a reminder list",
    body: [
      "A useful subscription reminder app should also help you understand the cost. PayClear connects reminders to spending limits, recurring spend insights, shared bill splitting and cancellation savings estimates.",
      "That makes it easier to decide whether a reminder is simply informational or a signal to pause, cancel or renegotiate a service.",
    ],
  },
];

export default function SubscriptionReminderAppPage() {
  return (
    <SeoPageContent
      eyebrow="Subscription reminder app"
      title="Remember renewals before subscriptions charge again."
      intro="PayClear helps you track subscription reminders, renewal dates and free trial endings privately, without connecting a bank account."
      path="/subscription-reminder-app"
      breadcrumb="Subscription reminder app"
      sections={sections}
      cta="Set up private subscription reminders."
    />
  );
}
