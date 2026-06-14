import Image from "next/image";
import Link from "next/link";

type SeoPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Array<{
    title: string;
    body: string[];
  }>;
  cta: string;
};

const relatedPages = [
  { href: "/subscription-tracker", label: "Subscription tracker" },
  { href: "/free-trial-reminder", label: "Free trial reminder" },
  { href: "/bill-reminder", label: "Bill reminder" },
  { href: "/no-bank-subscription-tracker", label: "No-bank tracker" },
];

export function SeoPageContent({ eyebrow, title, intro, sections, cta }: SeoPageProps) {
  return (
    <main className="min-h-screen bg-[#f7fbff] text-[#07143f]">
      <header className="border-b border-[#d9e7f6] bg-white">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <Link className="relative block h-12 w-44 overflow-hidden" href="/" aria-label="PayClear home">
            <Image
              src="/payclear_icon_text.png"
              alt="PayClear"
              fill
              priority
              sizes="176px"
              className="object-contain"
            />
          </Link>
          <Link className="text-sm font-bold text-[#2b7cff]" href="/">
            Home
          </Link>
        </nav>
      </header>

      <article className="mx-auto max-w-5xl px-5 py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_0.42fr] md:items-start">
          <div>
            <p className="text-sm font-bold uppercase text-[#7b4dff]">{eyebrow}</p>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#415574]">{intro}</p>
          </div>
          <aside className="rounded-2xl border border-[#d9e7f6] bg-white p-5 shadow-[0_14px_40px_rgba(7,20,63,0.06)]">
            <p className="text-sm font-black uppercase text-[#2b7cff]">Explore PayClear</p>
            <div className="mt-4 grid gap-3">
              {relatedPages.map((page) => (
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

        <section className="mt-8 rounded-2xl bg-[#07143f] p-7 text-white md:p-9">
          <h2 className="text-2xl font-black md:text-3xl">{cta}</h2>
          <p className="mt-4 max-w-3xl leading-8 text-[#dce8ff]">
            PayClear is available on Google Play. The App Store version is coming soon.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-full bg-[#2b7cff] px-6 py-3 text-sm font-bold text-white"
              href="https://play.google.com/store/apps/details?id=com.payclear.app"
              rel="noopener noreferrer"
              target="_blank"
            >
              Get it on Google Play
            </a>
            <span className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-[#dce8ff]">
              App Store coming soon
            </span>
          </div>
        </section>
      </article>
    </main>
  );
}
