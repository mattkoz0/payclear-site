import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "PayClear Privacy Policy explaining how information is collected, used and protected.",
  openGraph: {
    title: "Privacy Policy | PayClear",
    description:
      "How PayClear collects, uses and protects information on the website and in the app.",
    url: "https://www.pay-clear.com/privacy",
  },
};

const uses = [
  "To provide and maintain our Service.",
  "To notify you about changes to our Service.",
  "To provide customer care and support.",
  "To monitor usage of our Service and improve its performance.",
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f7faff] text-[#0f172a]">
      <article className="mx-auto max-w-3xl px-5 py-12 md:py-16">
        <Link className="text-sm font-semibold text-[#2563eb]" href="/">
          PayClear
        </Link>

        <p className="mt-8 text-sm font-medium text-[#64748b]">Last updated: May 18, 2026</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Privacy Policy</h1>

        <section className="mt-10 rounded-2xl border border-[#dbe4f0] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
          <h2 className="text-xl font-semibold">Introduction</h2>
          <p className="mt-3 leading-7 text-[#53627a]">
            At PayClear, we care about protecting your privacy. This Privacy
            Policy explains how we collect, use and protect your information
            when you visit our website (pay-clear.com) and when you use the
            PayClear app.
          </p>
        </section>

        <section className="mt-4 rounded-2xl border border-[#dbe4f0] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
          <h2 className="text-xl font-semibold">Information We Collect</h2>

          <h3 className="mt-5 text-lg font-semibold">Personal Data</h3>
          <p className="mt-2 leading-7 text-[#53627a]">
            By default, we do not collect any personal data. If you contact our
            support team by email, we will use your email address only to respond
            to your inquiry.
          </p>

          <h3 className="mt-5 text-lg font-semibold">Usage Data and Analytics</h3>
          <p className="mt-2 leading-7 text-[#53627a]">
            We use Google Analytics to understand how visitors interact with our
            website. This service collects anonymous information such as an
            anonymized IP address, browser type and pages visited. This data
            helps us improve the user experience and the clarity of our content.
          </p>

          <h3 className="mt-5 text-lg font-semibold">Cookies</h3>
          <p className="mt-2 leading-7 text-[#53627a]">
            Cookies are small text files stored on your device that help us
            analyze website traffic and optimize your experience. We use
            performance and analytics cookies provided by Google Analytics. You
            can accept or reject cookies through the consent banner on our
            website.
          </p>
        </section>

        <section className="mt-4 rounded-2xl border border-[#dbe4f0] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
          <h2 className="text-xl font-semibold">How We Use Your Information</h2>
          <ul className="mt-4 space-y-3 text-[#53627a]">
            {uses.map((use) => (
              <li className="flex gap-3" key={use}>
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#2563eb]" />
                <span>{use}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-4 rounded-2xl border border-[#dbe4f0] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
          <h2 className="text-xl font-semibold">Data Security</h2>
          <p className="mt-3 leading-7 text-[#53627a]">
            The security of your data is important to us, but please remember
            that no method of transmission over the Internet or method of
            electronic storage is 100% secure. Although we strive to use
            commercially acceptable means to protect your information, we cannot
            guarantee its absolute security.
          </p>
        </section>

        <section className="mt-4 rounded-2xl border border-[#dbe4f0] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
          <h2 className="text-xl font-semibold">Children&apos;s Privacy</h2>
          <p className="mt-3 leading-7 text-[#53627a]">
            Our Service is not directed to anyone under the age of 13. We do not
            knowingly collect personally identifiable information from anyone
            under 13.
          </p>
        </section>

        <section className="mt-4 rounded-2xl border border-[#dbe4f0] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="mt-3 leading-7 text-[#53627a]">
            If you have any questions about this Privacy Policy, please contact
            us:
          </p>
          <a
            className="mt-4 inline-flex rounded-xl bg-[#0f172a] px-5 py-3 text-sm font-semibold text-white"
            href="mailto:support@pay-clear.com"
          >
            support@pay-clear.com
          </a>
        </section>

        <div className="mt-10 flex flex-wrap gap-5 text-sm font-medium text-[#53627a]">
          <Link href="/terms">Terms of Use</Link>
          <Link href="/support">Support</Link>
        </div>
      </article>
    </main>
  );
}
