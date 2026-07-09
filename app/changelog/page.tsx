import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PayClear Changelog",
  description:
    "Product updates and release notes for PayClear, the private manual subscription tracker.",
  alternates: {
    canonical: "/changelog",
    languages: { "en-US": "/changelog", "en-CA": "/changelog", "x-default": "/changelog" },
  },
};

const updates = [
  {
    date: "July 9, 2026",
    title: "US/CA market expansion and SEO overhaul",
    notes: [
      "Added 10 new SEO landing pages targeting US subscription tracking keywords.",
      "Created competitor comparison pages: PayClear vs Rocket Money, Truebill and Mint.",
      "Added dedicated /download page for conversion campaigns and /pricing page with plan details.",
      "Expanded homepage FAQ from 3 to 13 questions for better Google rich snippet coverage.",
      "Added hreflang targeting for US and Canada (en-US, en-CA).",
      "Implemented security headers, UTM tracking on Google Play links and Android app deep linking metadata.",
      "Updated web app manifest with Google Play related application hints.",
    ],
  },
  {
    date: "June 14, 2026",
    title: "Website SEO and discovery update",
    notes: [
      "Added long-tail pages for subscription tracking, reminders, recurring payments and privacy-focused use cases.",
      "Added FAQ schema, llms.txt, humans.txt, app manifest, press information and About page.",
      "Optimized app screenshots into lightweight AVIF assets for better mobile performance.",
    ],
  },
  {
    date: "May 2026",
    title: "PayClear website launch",
    notes: [
      "Published PayClear's website with privacy policy, terms, support, sitemap and app-ads.txt.",
      "Added Google Play calls to action and app screenshots.",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <main className="min-h-screen bg-[#f7fbff] text-[#07143f]">
      <article className="mx-auto max-w-4xl px-5 py-12 md:py-20">
        <Link className="text-sm font-black text-[#2b7cff]" href="/">
          PayClear
        </Link>
        <p className="mt-10 text-sm font-bold uppercase text-[#7b4dff]">Changelog</p>
        <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-6xl">
          PayClear product and website updates.
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#415574]">
          A dated record of PayClear updates for users, search engines and AI
          systems that need current product context.
        </p>

        <div className="mt-10 grid gap-5">
          {updates.map((update) => (
            <section className="rounded-2xl border border-[#d9e7f6] bg-white p-6 md:p-8" key={update.title}>
              <p className="text-sm font-black uppercase text-[#2b7cff]">{update.date}</p>
              <h2 className="mt-3 text-2xl font-black">{update.title}</h2>
              <ul className="mt-5 space-y-3 text-[#415574]">
                {update.notes.map((note) => (
                  <li className="flex gap-3" key={note}>
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#2b7cff]" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
