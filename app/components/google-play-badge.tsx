"use client";

import Image from "next/image";
import { googlePlayUrl } from "../google-play";

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      parameters?: Record<string, string>,
    ) => void;
  }
}

type GooglePlayBadgeProps = {
  campaign: string;
  className?: string;
};

export function GooglePlayBadge({
  campaign,
  className = "",
}: GooglePlayBadgeProps) {
  return (
    <a
      aria-label="Get PayClear on Google Play"
      className={`inline-flex min-h-12 shrink-0 items-center justify-center transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2b7cff] ${className}`}
      href={googlePlayUrl(campaign)}
      onClick={() => {
        window.gtag?.("event", "click_google_play", {
          event_category: "conversion",
          event_label: campaign,
          transport_type: "beacon",
        });
      }}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Image
        alt="Get it on Google Play"
        height={250}
        priority={campaign === "homepage"}
        src="/google-play-badge.png"
        width={646}
        className="h-12 w-auto"
      />
    </a>
  );
}
