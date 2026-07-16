import { AppStoreBadge } from "./app-store-badge";
import { GooglePlayBadge } from "./google-play-badge";

type StoreBadgesProps = {
  campaign: string;
  className?: string;
  priority?: boolean;
};

export function StoreBadges({
  campaign,
  className = "",
  priority = false,
}: StoreBadgesProps) {
  return (
    <div
      className={`flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row ${className}`}
    >
      <GooglePlayBadge campaign={campaign} priority={priority} />
      <AppStoreBadge campaign={campaign} />
    </div>
  );
}

