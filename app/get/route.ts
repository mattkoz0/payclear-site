import { NextResponse } from "next/server";
import { appStoreListingUrl } from "../app-store";
import { googlePlayUrl } from "../google-play";

export function GET(request: Request) {
  const userAgent = request.headers.get("user-agent")?.toLowerCase() ?? "";
  const isAndroid = userAgent.includes("android");
  const isAppleMobile =
    /iphone|ipad|ipod/.test(userAgent) ||
    (userAgent.includes("macintosh") && userAgent.includes("mobile"));

  const destination = isAndroid
    ? googlePlayUrl("qr_code")
    : isAppleMobile
      ? appStoreListingUrl
      : new URL("/download", request.url).toString();

  const response = NextResponse.redirect(destination);
  response.headers.set("Cache-Control", "private, no-store");
  response.headers.set("Vary", "User-Agent");
  return response;
}

