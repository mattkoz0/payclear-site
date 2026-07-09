import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GooglePlayBadge } from "../../components/google-play-badge";
import { blogPosts, getBlogPost } from "../posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) return {};

  const path = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: path,
      languages: {
        "en-US": path,
        "en-CA": path,
        "x-default": path,
      },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `https://www.pay-clear.com${path}`,
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const pageUrl = `https://www.pay-clear.com/blog/${post.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${pageUrl}#article`,
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    mainEntityOfPage: pageUrl,
    image: `${pageUrl}/opengraph-image`,
    author: {
      "@type": "Organization",
      name: "PayClear",
      url: "https://www.pay-clear.com/",
    },
    publisher: {
      "@id": "https://www.pay-clear.com/#organization",
    },
    isPartOf: {
      "@id": "https://www.pay-clear.com/blog/#blog",
    },
  };

  return (
    <main className="min-h-screen bg-[#f7fbff] text-[#07143f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <header className="border-b border-[#d9e7f6] bg-white">
        <nav className="mx-auto flex min-h-[72px] max-w-4xl items-center justify-between gap-4 px-5">
          <Link className="text-lg font-black text-[#07143f]" href="/">
            PayClear
          </Link>
          <div className="flex items-center gap-5 text-sm font-bold text-[#2b7cff]">
            <Link href="/blog">Blog</Link>
            <Link href="/subscription-tracker">Guides</Link>
          </div>
        </nav>
      </header>

      <article className="mx-auto max-w-4xl px-5 py-12 md:py-20">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm font-bold">
          <Link className="text-[#2b7cff]" href="/">
            Home
          </Link>
          <span className="text-[#8aa0bf]">/</span>
          <Link className="text-[#2b7cff]" href="/blog">
            Blog
          </Link>
          <span className="text-[#8aa0bf]">/</span>
          <span className="text-[#53627a]">{post.category}</span>
        </nav>

        <header className="mt-10">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-bold uppercase tracking-wide text-[#7b4dff]">
            <span>{post.category}</span>
            <span aria-hidden="true">•</span>
            <time dateTime={post.datePublished}>
              {new Intl.DateTimeFormat("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
                timeZone: "UTC",
              }).format(new Date(`${post.datePublished}T00:00:00Z`))}
            </time>
            <span aria-hidden="true">•</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight md:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#415574]">{post.description}</p>
        </header>

        <div className="mt-12 space-y-6">
          {post.sections.map((section) => (
            <section className="rounded-2xl border border-[#d9e7f6] bg-white p-6 md:p-8" key={section.title}>
              <h2 className="text-2xl font-black tracking-tight md:text-3xl">{section.title}</h2>
              <div className="mt-4 space-y-4 text-base leading-8 text-[#415574]">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <aside className="mt-8 rounded-2xl border border-[#d9e7f6] bg-white p-6 md:p-8">
          <p className="text-sm font-black uppercase text-[#7b4dff]">Related guides</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {post.relatedPages.map((page) => (
              <Link
                className="rounded-xl border border-[#d9e7f6] px-4 py-3 text-sm font-bold transition hover:border-[#2b7cff]"
                href={page.href}
                key={page.href}
              >
                {page.label}
              </Link>
            ))}
          </div>
        </aside>

        <section className="mt-8 rounded-2xl bg-[#07143f] p-6 text-white md:p-9">
          <h2 className="text-2xl font-black md:text-3xl">
            Keep the next renewal visible.
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-[#dce8ff]">
            PayClear helps you track subscriptions, trials, bills, and recurring
            spending privately on Android. No bank connection or account required.
          </p>
          <GooglePlayBadge campaign={`blog_${post.slug}`} className="mt-6" />
        </section>
      </article>
    </main>
  );
}
