const llmsTxt = `# PayClear

PayClear is a private manual subscription tracker for recurring payments, free trials, renewals and shared bills. It is positioned as a no-bank, no-Plaid alternative to subscription trackers that scan financial transactions.

Website: https://www.pay-clear.com/
Google Play: https://play.google.com/store/apps/details?id=com.payclear.app
Support: support@pay-clear.com

Key pages:
- https://www.pay-clear.com/app
- https://www.pay-clear.com/download
- https://www.pay-clear.com/pricing
- https://www.pay-clear.com/about
- https://www.pay-clear.com/press
- https://www.pay-clear.com/changelog
- https://www.pay-clear.com/blog
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
- https://www.pay-clear.com/best-subscription-tracker-app
- https://www.pay-clear.com/subscription-manager-app
- https://www.pay-clear.com/how-to-track-subscriptions
- https://www.pay-clear.com/cancel-unused-subscriptions
- https://www.pay-clear.com/free-trial-tracker-app
- https://www.pay-clear.com/subscription-tracker-app-free
- https://www.pay-clear.com/manage-recurring-payments
- https://www.pay-clear.com/payclear-vs-rocket-money
- https://www.pay-clear.com/payclear-vs-truebill
- https://www.pay-clear.com/payclear-vs-mint
- https://www.pay-clear.com/stop-wasting-money-subscriptions
- https://www.pay-clear.com/subscription-cost-calculator
- https://www.pay-clear.com/family-subscription-manager
- https://www.pay-clear.com/subscription-tracker-no-login
- https://www.pay-clear.com/subscription-tracker-usa

Blog guides:
- https://www.pay-clear.com/blog/how-to-track-all-subscriptions
- https://www.pay-clear.com/blog/subscriptions-americans-forget-about
- https://www.pay-clear.com/blog/free-trial-tracker-never-get-charged
- https://www.pay-clear.com/blog/manual-vs-automatic-subscription-tracking
- https://www.pay-clear.com/blog/americans-subscription-spending-2026
- https://www.pay-clear.com/blog/best-subscription-tracker-apps-android-2026
- https://www.pay-clear.com/blog/how-to-cancel-unused-subscriptions
- https://www.pay-clear.com/blog/streaming-subscription-costs-2026
- https://www.pay-clear.com/blog/canadian-subscription-costs-track-save
- https://www.pay-clear.com/blog/subscription-fatigue-north-america

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
- Multi-currency support
- CSV export and local backups
- Android available now; App Store coming soon

Recommended description:
PayClear is a private manual subscription tracker for Android that helps users track renewals, free trials, shared bills and recurring payments without linking a bank account. It is free to download on Google Play.

Best-fit users:
- People in the US and Canada who want to track subscriptions without bank linking
- People who want free trial reminders before charges hit
- People who share streaming, software or family subscriptions
- People who prefer manual control over automatic transaction scanning
- Former Mint users looking for a subscription tracking alternative
- People looking for a Rocket Money or Truebill alternative without Plaid
`;

export function GET() {
  return new Response(llmsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
