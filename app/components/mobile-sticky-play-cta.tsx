"use client";

import { useEffect, useState } from "react";
import { GooglePlayBadge } from "./google-play-badge";

export function MobileStickyPlayCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.55);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/15 bg-[#07143f]/96 px-4 py-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] shadow-[0_-12px_32px_rgba(7,20,63,0.22)] backdrop-blur-md sm:hidden">
      <div className="mx-auto flex max-w-sm items-center justify-between gap-3">
        <span className="text-sm font-bold text-white">Track for free</span>
        <GooglePlayBadge campaign="homepage_mobile_sticky" />
      </div>
    </div>
  );
}
