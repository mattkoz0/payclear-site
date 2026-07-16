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
  priority?: boolean;
};

export function GooglePlayBadge({
  campaign,
  className = "",
  priority = false,
}: GooglePlayBadgeProps) {
  return (
    <a
      aria-label="Get PayClear on Google Play"
      className={`inline-flex min-h-14 shrink-0 items-center justify-center transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2b7cff] ${className}`}
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
      <span className="relative flex h-14 w-[166px] items-center justify-center overflow-hidden">
        <Image
          alt="Get it on Google Play"
          className="h-[74px] max-w-none"
          height={250}
          priority={priority || campaign === "homepage"}
          src="/google-play-badge.png"
          width={646}
        />
      </span>
    </a>
  );
}
