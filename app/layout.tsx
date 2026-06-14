import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pay-clear.com"),
  title: {
    default: "PayClear | Private Subscription Tracker Without Bank Linking",
    template: "%s | PayClear",
  },
  description:
    "Track subscriptions, free trials and recurring payments privately without linking your bank or creating an account.",
  keywords: [
    "subscription tracker",
    "private subscription tracker",
    "bill reminder",
    "free trial reminder",
    "recurring payment tracker",
    "subscription manager",
    "no bank subscription tracker",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/PayClear_icon_512512.png",
    apple: "/PayClear_icon_512512.png",
  },
  openGraph: {
    title: "PayClear | Private Subscription Tracker Without Bank Linking",
    description:
      "A private subscription tracker for renewals, free trials, shared bills and recurring spending insights without bank linking.",
    url: "https://www.pay-clear.com",
    siteName: "PayClear",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PayClear | Private Subscription Tracker Without Bank Linking",
    description:
      "Track subscriptions, free trials and recurring payments privately without linking your bank.",
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
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
