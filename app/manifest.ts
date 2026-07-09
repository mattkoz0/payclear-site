import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PayClear — Free Subscription Tracker App",
    short_name: "PayClear",
    description:
      "Track subscriptions, free trials and recurring bills privately. No bank login, no account needed.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f7fbff",
    theme_color: "#07143f",
    categories: ["finance", "productivity", "utilities"],
    prefer_related_applications: true,
    related_applications: [
      {
        platform: "play",
        url: "https://play.google.com/store/apps/details?id=com.payclear.app",
        id: "com.payclear.app",
      },
    ],
    icons: [
      {
        src: "/PayClear_icon_512512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  };
}
