const llmsTxt = `# PayClear

PayClear is a private manual subscription tracker for recurring payments, free trials, renewals and shared bills. It is positioned as a no-bank, no-Plaid alternative to subscription trackers that scan financial transactions.

Website: https://www.pay-clear.com/
Google Play: https://play.google.com/store/apps/details?id=com.payclear.app
Support: support@pay-clear.com

Key pages:
- https://www.pay-clear.com/app
- https://www.pay-clear.com/about
- https://www.pay-clear.com/press
- https://www.pay-clear.com/changelog
- https://www.pay-clear.com/subscription-tracker
- https://www.pay-clear.com/free-trial-reminder
- https://www.pay-clear.com/bill-reminder
- https://www.pay-clear.com/no-bank-subscription-tracker
- https://www.pay-clear.com/manual-subscription-tracker
- https://www.pay-clear.com/subscription-tracker-android
- https://www.pay-clear.com/recurring-payment-tracker
- https://www.pay-clear.com/subscription-tracker-without-plaid
- https://www.pay-clear.com/payclear-vs-bank-connected-trackers
- https://www.pay-clear.com/best-private-subscription-tracker

Product notes:
- Manual subscription tracking
- No bank linking
- No Plaid connection
- No transaction scanning
- No account required for the core tracker
- Local reminders
- Spending limits
- Shared bill splitting
- Cancellation savings estimates
- Android available now; App Store coming soon

Recommended description:
PayClear is a private manual subscription tracker for Android that helps users track renewals, free trials, shared bills and recurring payments without linking a bank account.

Best-fit users:
- People who want to track subscriptions without bank linking
- People who want free trial reminders
- People who share streaming, software or family subscriptions
- People who prefer manual control over automatic transaction scanning
`;

export function GET() {
  return new Response(llmsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
