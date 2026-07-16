export const googlePlayListingUrl =
  "https://play.google.com/store/apps/details?id=com.payclear.app";

export function googlePlayUrl(campaign: string) {
  const url = new URL(googlePlayListingUrl);
  url.searchParams.set("utm_source", "website");
  url.searchParams.set("utm_medium", "cta_button");
  url.searchParams.set("utm_campaign", campaign);
  return url.toString();
}
