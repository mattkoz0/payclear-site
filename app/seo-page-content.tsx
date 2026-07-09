import Image from "next/image";
import Link from "next/link";
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
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
};

export function SeoPageContent({
  eyebrow,
  title,
  intro,
  path,
  breadcrumb,
  sections,
  cta,
  faqs,
}: SeoPageProps) {
  const pageUrl = `https://www.pay-clear.com${path}`;
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
          <Link className="shrink-0 text-sm font-bold text-[#2b7cff]" href="/">
            Home
          </Link>
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
            <a
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#2b7cff] px-6 py-3 text-center text-sm font-bold text-white sm:w-auto"
              href={`https://play.google.com/store/apps/details?id=com.payclear.app&utm_source=website&utm_medium=cta_button&utm_campaign=${path.replace("/", "")}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              Get it on Google Play
            </a>
            <span className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/20 px-6 py-3 text-center text-sm font-bold text-[#dce8ff] sm:w-auto">
              App Store coming soon
            </span>
          </div>
        </section>
      </article>
    </main>
  );
}
