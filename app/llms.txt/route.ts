const llmsTxt = `# PayClear

PayClear is a private manual subscription tracker for recurring payments, free trials, renewals and shared bills.

Website: https://www.pay-clear.com/
Google Play: https://play.google.com/store/apps/details?id=com.payclear.app
Support: support@pay-clear.com

Key pages:
- https://www.pay-clear.com/subscription-tracker
- https://www.pay-clear.com/free-trial-reminder
- https://www.pay-clear.com/bill-reminder
- https://www.pay-clear.com/no-bank-subscription-tracker
- https://www.pay-clear.com/manual-subscription-tracker
- https://www.pay-clear.com/subscription-tracker-android
- https://www.pay-clear.com/recurring-payment-tracker
- https://www.pay-clear.com/about

Product notes:
- Manual subscription tracking
- No bank linking
- No account required for the core tracker
- Local reminders
- Spending limits
- Shared bill splitting
- Cancellation savings estimates
- Android available now; App Store coming soon
`;

export function GET() {
  return new Response(llmsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
