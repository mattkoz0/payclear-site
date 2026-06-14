import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    default: "PayClear | Private Subscription Tracker",
    template: "%s | PayClear",
  },
  description:
    "Track subscriptions, trials and recurring payments privately without linking your bank or creating an account.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/PayClear_icon_512512.png",
    apple: "/PayClear_icon_512512.png",
  },
  openGraph: {
    title: "PayClear | Private Subscription Tracker",
    description:
      "A private subscription tracker for renewals, free trials, shared bills and recurring spending insights without bank linking.",
    url: "https://www.pay-clear.com",
    siteName: "PayClear",
    type: "website",
    images: [
      {
        url: "/payclear_icon_text.png",
        width: 1672,
        height: 941,
        alt: "PayClear",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PayClear | Private Subscription Tracker",
    description:
      "Track subscriptions, trials and recurring payments privately without linking your bank.",
    images: ["/payclear_icon_text.png"],
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
