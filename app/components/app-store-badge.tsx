"use client";

import Image from "next/image";
import { appStoreListingUrl } from "../app-store";

type AppStoreBadgeProps = {
  campaign: string;
  className?: string;
};

export function AppStoreBadge({
  campaign,
  className = "",
}: AppStoreBadgeProps) {
  return (
    <a
      aria-label="Download PayClear on the App Store"
      className={`inline-flex min-h-14 shrink-0 items-center justify-center transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2b7cff] ${className}`}
      href={appStoreListingUrl}
      onClick={() => {
        window.gtag?.("event", "click_app_store", {
          event_category: "conversion",
          event_label: campaign,
          transport_type: "beacon",
        });
      }}
      rel="noopener noreferrer"
      target="_blank"
    >
      <span className="relative h-14 w-[166px] overflow-hidden">
        <Image
          alt="Download on the App Store"
          className="h-14 w-auto"
          height={80}
          src="/App_Store_Badge_EN_b.png"
          width={239}
        />
      </span>
    </a>
  );
}

