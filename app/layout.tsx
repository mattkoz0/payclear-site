import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "./components/google-analytics";
import { ResourceHints } from "./components/resource-hints";
import { WebVitals } from "./components/web-vitals";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pay-clear.com"),
  title: {
    default:
      "PayClear — Free Subscription Tracker App for Android & iPhone",
    template: "%s | PayClear",
  },
  description:
    "Track subscriptions, free trials & recurring bills privately. No bank login, no account needed. Download PayClear on Google Play or the App Store.",
  keywords: [
    "subscription tracker",
    "subscription tracker app",
    "private subscription tracker",
    "bill reminder app",
    "free trial reminder",
    "free trial tracker",
    "recurring payment tracker",
    "subscription manager app",
    "no bank subscription tracker",
    "subscription tracker android",
    "subscription tracker without plaid",
    "cancel unused subscriptions",
    "subscription cost calculator",
    "best subscription tracker app",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "en-CA": "/",
      "x-default": "/",
    },
  },
  icons: {
    icon: "/PayClear_icon_512512.png",
    apple: "/PayClear_icon_512512.png",
  },
  appLinks: {
    android: {
      package: "com.payclear.app",
      app_name: "PayClear",
    },
    web: {
      url: "https://www.pay-clear.com",
      should_fallback: true,
    },
  },
  other: {
    "google-play-app": "app-id=com.payclear.app",
    "apple-itunes-app": "app-id=6780266678",
  },
  openGraph: {
    title:
      "PayClear — Free Subscription Tracker App for Android & iPhone",
    description:
      "Track subscriptions, free trials & recurring bills privately. No bank login, no account needed. Download PayClear on Google Play or the App Store.",
    url: "https://www.pay-clear.com",
    siteName: "PayClear",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "PayClear — Free Subscription Tracker App for Android & iPhone",
    description:
      "Track subscriptions, free trials & recurring bills privately. No bank login, no account needed.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="PayClear Blog"
          href="/feed.xml"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ResourceHints />
        {gaMeasurementId ? (
          <>
            <GoogleAnalytics measurementId={gaMeasurementId} />
            <WebVitals />
          </>
        ) : null}
        {children}
        <Analytics />
      </body>
    </html>
  );
}
