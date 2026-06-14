const humansTxt = `PayClear

Site: https://www.pay-clear.com/
App: https://play.google.com/store/apps/details?id=com.payclear.app
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
