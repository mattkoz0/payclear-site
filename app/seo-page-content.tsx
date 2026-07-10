import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { blogPosts } from "./blog/posts";
import { GooglePlayBadge } from "./components/google-play-badge";
import { seoLandingPages } from "./seo-pages";

type SeoPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  path: string;
  breadcrumb: string;
  sections: Array<{
    title: string;
    body: string[];
  }>;
  cta: string;
  tool?: ReactNode;
  comparison?: {
    caption: string;
    headers: [string, string, string];
    rows: Array<[string, string, string]>;
  };
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
};

function relatedBlogPosts(path: string) {
  const slugs = path.includes("trial") || path.includes("reminder")
    ? [
        "free-trial-tracker-never-get-charged",
        "how-to-track-all-subscriptions",
        "how-to-cancel-unused-subscriptions",
      ]
    : path.includes("streaming") || path.includes("family") || path.includes("split")
      ? [
          "streaming-subscription-costs-2026",
          "canadian-subscription-costs-track-save",
          "subscription-fatigue-north-america",
        ]
      : path.includes("spending") || path.includes("calculator") || path.includes("cancel") || path.includes("wasting")
        ? [
            "americans-subscription-spending-2026",
            "how-to-cancel-unused-subscriptions",
            "subscriptions-americans-forget-about",
          ]
        : path.includes("plaid") || path.includes("bank") || path.includes("private") || path.includes("login") || path.includes("vs-")
          ? [
              "manual-vs-automatic-subscription-tracking",
              "best-subscription-tracker-apps-android-2026",
              "how-to-track-all-subscriptions",
            ]
          : [
              "how-to-track-all-subscriptions",
              "subscriptions-americans-forget-about",
              "best-subscription-tracker-apps-android-2026",
            ];

  return slugs.flatMap((slug) => {
    const post = blogPosts.find((item) => item.slug === slug);
    return post ? [post] : [];
  });
}

export function SeoPageContent({
  eyebrow,
  title,
  intro,
  path,
  breadcrumb,
  sections,
  cta,
  tool,
  comparison,
  faqs,
}: SeoPageProps) {
  const pageUrl = `https://www.pay-clear.com${path}`;
  const relatedPosts = relatedBlogPosts(path);
  const pageFaqs = faqs ?? [
    {
      question: `Can I use PayClear as a ${breadcrumb.toLowerCase()} without linking my bank?`,
      answer:
        "Yes. PayClear is designed for manual subscription and recurring payment tracking. It does not connect to your bank, scan transactions or ask for bank credentials.",
    },
    {
      question: "Does PayClear require an account?",
      answer:
        "No. The core tracking experience does not require a PayClear account. You can add subscriptions, trials and recurring bills manually.",
    },
    {
      question: "Is PayClear available on Android and iPhone?",
      answer:
        "PayClear is available on Google Play for Android. The Apple App Store version is planned, but it is not available yet.",
    },
  ];
  const pageData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: title,
        description: intro,
        isPartOf: {
          "@id": "https://www.pay-clear.com/#website",
        },
        about: {
          "@id": "https://www.pay-clear.com/#app",
        },
        breadcrumb: {
          "@id": `${pageUrl}#breadcrumb`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.pay-clear.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: breadcrumb,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: pageFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7fbff] text-[#07143f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageData) }}
      />
      <header className="border-b border-[#d9e7f6] bg-white">
        <nav className="mx-auto flex min-h-[78px] max-w-5xl items-center justify-between gap-3 px-4 py-2 sm:min-h-[102px] sm:px-5 sm:py-4">
          <Link className="relative block h-[62px] w-[229px] max-w-[68vw] shrink overflow-hidden sm:h-[86px] sm:w-[317px] sm:max-w-[62vw]" href="/" aria-label="PayClear home">
            <Image
              src="/payclear-logo-text-header.png"
              alt="PayClear"
              fill
              priority
              sizes="(max-width: 640px) 229px, 317px"
              className="object-contain"
            />
          </Link>
          <div className="flex shrink-0 items-center gap-4 text-sm font-bold text-[#2b7cff]">
            <Link href="/blog">Blog</Link>
            <Link href="/">Home</Link>
          </div>
        </nav>
      </header>

      <article className="mx-auto max-w-5xl px-5 py-10 md:py-20">
        <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm font-bold">
          <Link className="text-[#2b7cff]" href="/">
            Home
          </Link>
          <span className="text-[#8aa0bf]">/</span>
          <span className="text-[#53627a]">{breadcrumb}</span>
        </nav>

        <div className="grid gap-10 md:grid-cols-[1fr_0.42fr] md:items-start">
          <div>
            <p className="text-sm font-bold uppercase text-[#7b4dff]">{eyebrow}</p>
            <h1 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-base leading-7 text-[#415574] sm:text-lg sm:leading-8">{intro}</p>
          </div>
          <aside className="rounded-2xl border border-[#d9e7f6] bg-white p-5 shadow-[0_14px_40px_rgba(7,20,63,0.06)]">
            <p className="text-sm font-black uppercase text-[#2b7cff]">Explore PayClear</p>
            <div className="mt-4 grid gap-3">
              <Link
                className="rounded-xl bg-[#07143f] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#10245f]"
                href="/download"
              >
                Download PayClear for Android
              </Link>
              {seoLandingPages.filter((page) => page.href !== path).slice(0, 6).map((page) => (
                <Link
                  className="rounded-xl border border-[#d9e7f6] px-4 py-3 text-sm font-bold text-[#07143f] transition hover:border-[#2b7cff]"
                  href={page.href}
                  key={page.href}
                >
                  {page.label}
                </Link>
              ))}
            </div>
          </aside>
        </div>

        {tool ? <div className="mt-8">{tool}</div> : null}

        <div className="mt-12 grid gap-5">
          {sections.map((section) => (
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

        <section className="mt-8 rounded-2xl border border-[#d9e7f6] bg-white p-6 md:p-8">
          <p className="text-sm font-black uppercase text-[#7b4dff]">Further reading</p>
          <h2 className="mt-2 text-2xl font-black tracking-tight md:text-3xl">
            Practical subscription tracking guides
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {relatedPosts.map((post) => (
              <Link
                className="rounded-xl border border-[#d9e7f6] bg-[#fbfdff] p-5 transition hover:border-[#2b7cff]"
                href={`/blog/${post.slug}`}
                key={post.slug}
              >
                <p className="text-xs font-bold uppercase tracking-wide text-[#7b4dff]">
                  {post.category}
                </p>
                <h3 className="mt-2 text-base font-black leading-6">{post.title}</h3>
              </Link>
            ))}
          </div>
        </section>

        {comparison ? (
          <section className="mt-8 overflow-hidden rounded-2xl border border-[#d9e7f6] bg-white">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-black tracking-tight md:text-3xl">
                {comparison.caption}
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-left text-sm">
                <thead className="bg-[#eef9ff] text-[#07143f]">
                  <tr>
                    {comparison.headers.map((header) => (
                      <th className="px-6 py-4 font-black" key={header} scope="col">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-[#415574]">
                  {comparison.rows.map((row) => (
                    <tr className="border-t border-[#d9e7f6]" key={row[0]}>
                      {row.map((cell, index) => (
                        <td className="px-6 py-4 align-top leading-6" key={`${row[0]}-${index}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ) : null}

        <section className="mt-8 rounded-2xl border border-[#d9e7f6] bg-white p-6 md:p-8">
          <h2 className="text-2xl font-black tracking-tight md:text-3xl">
            Frequently asked questions
          </h2>
          <div className="mt-5 grid gap-4">
            {pageFaqs.map((faq) => (
              <article className="rounded-2xl border border-[#d9e7f6] bg-[#fbfdff] p-5" key={faq.question}>
                <h3 className="text-lg font-black">{faq.question}</h3>
                <p className="mt-3 leading-7 text-[#53627a]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-[#07143f] p-6 text-white md:p-9">
          <h2 className="text-2xl font-black md:text-3xl">{cta}</h2>
          <p className="mt-4 max-w-3xl leading-8 text-[#dce8ff]">
            PayClear is available on Google Play. The App Store version is coming soon.
          </p>
          <div className="mt-6 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <GooglePlayBadge campaign={`${path.replace("/", "")}_article`} />
            <span className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/20 px-6 py-3 text-center text-sm font-bold text-[#dce8ff] sm:w-auto">
              App Store coming soon
            </span>
          </div>
        </section>
      </article>
    </main>
  );
}
