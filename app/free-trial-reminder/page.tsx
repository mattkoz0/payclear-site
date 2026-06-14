import type { Metadata } from "next";
import { SeoPageContent } from "../seo-page-content";

export const metadata: Metadata = {
  title: "Free Trial Reminder App",
  description:
    "Track free trial end dates with PayClear and get local reminders before a trial turns into a paid subscription.",
  alternates: {
    canonical: "/free-trial-reminder",
  },
};

const sections = [
  {
    title: "Track free trial end dates before the first charge",
    body: [
      "Free trials are useful until the first paid charge arrives by surprise. PayClear helps you track trial end dates, first payment amounts and renewal timing in one private place. Instead of relying on memory, you can add the trial when you start it and review it before it becomes regular spend.",
      "PayClear is careful about what it promises. It helps you track and review trials; it does not guarantee that every system notification will always appear, because mobile operating systems can restrict notifications. The practical value is still strong: your trial dates are visible, organized and ready for review.",
    ],
  },
  {
    title: "Local reminders for trials and renewals",
    body: [
      "PayClear supports local reminders before renewals and trial endings. You can use reminder timing such as one day before, two days before or seven days before, depending on how you want to review upcoming charges.",
      "Local reminders fit the privacy-first design of the app. PayClear does not need a bank connection or account to help you remember what is coming. You enter the details, keep the tracker on your device and decide what to do before the first paid charge lands.",
    ],
  },
  {
    title: "Convert, adjust or cancel trial records",
    body: [
      "A trial is not always a simple yes-or-no decision. Sometimes you want to keep the service, adjust the first charge date, change the price or mark the trial as a regular paid subscription. Sometimes you want to cancel or archive it.",
      "PayClear is designed for those small decision points. The app keeps trial tracking close to the rest of your recurring costs, so a free trial is not isolated from your broader subscription picture.",
    ],
  },
  {
    title: "A trial tracker for subscription-heavy users",
    body: [
      "PayClear is especially useful if you test streaming services, AI tools, productivity apps, software trials or membership offers. These services often start with low friction and renew quietly. A dedicated free trial reminder helps you slow that process down and decide on purpose.",
      "Because PayClear is also a subscription tracker and bill reminder, trial tracking connects naturally to monthly cost visibility, renewal review, spending limits and cancellation savings.",
    ],
  },
];

export default function FreeTrialReminderPage() {
  return (
    <SeoPageContent
      eyebrow="Free trial reminder"
      title="Stay ahead of free trials before they turn into paid subscriptions."
      intro="PayClear helps you track free trial end dates, first paid charges and renewal reminders without linking your bank or creating an account."
      path="/free-trial-reminder"
      breadcrumb="Free trial reminder"
      sections={sections}
      cta="Review free trials before the first charge."
    />
  );
}
