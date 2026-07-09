import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "./posts";

export const metadata: Metadata = {
  title: "PayClear Blog — Subscription Tracking, Trials and Savings Guides",
  description:
    "Practical guides for tracking subscriptions, free trials, recurring bills, and household spending privately.",
  alternates: {
    canonical: "/blog",
    languages: {
      "en-US": "/blog",
      "en-CA": "/blog",
      "x-default": "/blog",
    },
  },
  openGraph: {
    title: "PayClear Blog — Subscription Tracking Guides",
    description:
      "Practical guides for tracking subscriptions, free trials, recurring bills, and household spending privately.",
    url: "https://www.pay-clear.com/blog",
  },
};

const blogStructuredData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://www.pay-clear.com/blog/#blog",
  url: "https://www.pay-clear.com/blog",
  name: "PayClear Blog",
  description:
    "Practical guides for tracking subscriptions, free trials, recurring bills, and household spending privately.",
  publisher: {
    "@id": "https://www.pay-clear.com/#organization",
  },
  blogPost: blogPosts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    url: `https://www.pay-clear.com/blog/${post.slug}`,
  })),
};

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-[#f7fbff] text-[#07143f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogStructuredData) }}
      />
      <header className="border-b border-[#d9e7f6] bg-white">
        <nav className="mx-auto flex min-h-[72px] max-w-6xl items-center justify-between gap-4 px-5">
          <Link className="text-lg font-black text-[#07143f]" href="/">
            PayClear
          </Link>
          <div className="flex items-center gap-5 text-sm font-bold text-[#2b7cff]">
            <Link href="/subscription-tracker">Guides</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/download">Download</Link>
          </div>
        </nav>
      </header>

      <section className="border-b border-[#d9e7f6] bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="text-sm font-bold uppercase text-[#7b4dff]">PayClear Blog</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Subscription tracking guides for clearer recurring costs.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#415574]">
            Practical, privacy-first guides for free trials, recurring bills,
            shared plans, and subscription decisions in the United States and Canada.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <div className="grid gap-5 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              className="flex flex-col rounded-2xl border border-[#d9e7f6] bg-white p-6 shadow-[0_12px_35px_rgba(7,20,63,0.05)]"
              key={post.slug}
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold uppercase tracking-wide text-[#7b4dff]">
                <span>{post.category}</span>
                <span aria-hidden="true">•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="mt-4 text-2xl font-black tracking-tight">
                <Link className="transition hover:text-[#2b7cff]" href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              <p className="mt-4 flex-1 leading-7 text-[#53627a]">{post.excerpt}</p>
              <Link
                className="mt-6 text-sm font-black text-[#2b7cff]"
                href={`/blog/${post.slug}`}
              >
                Read guide <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
