import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PayClear | Private Subscription Tracker",
    short_name: "PayClear",
    description:
      "Track subscriptions, free trials and recurring payments privately without linking your bank.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f7fbff",
    theme_color: "#07143f",
    categories: ["finance", "productivity", "utilities"],
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
