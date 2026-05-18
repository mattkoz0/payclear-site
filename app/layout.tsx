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
    default: "PayClear | Private subscription tracker",
    template: "%s | PayClear",
  },
  description:
    "Track subscriptions, recurring payments, bills and free trials privately. No login. No bank connection. Offline-first.",
  openGraph: {
    title: "PayClear | Private subscription tracker",
    description:
      "A clean, premium subscription tracker built for privacy, clarity and control.",
    url: "https://www.pay-clear.com",
    siteName: "PayClear",
    type: "website",
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
