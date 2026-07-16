const humansTxt = `PayClear

Site: https://www.pay-clear.com/
Google Play: https://play.google.com/store/apps/details?id=com.payclear.app
Apple App Store: https://apps.apple.com/us/app/payclear-subscription-tracker/id6780266678
Contact: support@pay-clear.com

PayClear helps people track subscriptions, free trials and recurring payments privately without linking a bank account.
`;

export function GET() {
  return new Response(humansTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
