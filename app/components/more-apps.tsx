import Image from "next/image";

type MakerApp = {
  name: string;
  url: string;
  domain: string;
  icon: string;
  category: string;
  description: string;
  applicationCategory: string;
  operatingSystem: string;
};

export const makerApps: MakerApp[] = [
  {
    name: "Calma",
    url: "https://www.calmasounds.com/",
    domain: "calmasounds.com",
    icon: "/calma_icon_exact_upscale_512.png",
    category: "Sleep & focus sounds",
    description:
      "Mix nature sounds, white noise and ambient layers for sleep, relaxation and deep focus. Works fully offline with a one-time lifetime unlock.",
    applicationCategory: "HealthApplication",
    operatingSystem: "Android, iOS",
  },
  {
    name: "Sereo",
    url: "https://sereo.cc/",
    domain: "sereo.cc",
    icon: "/sereo_ikona_512.png",
    category: "Trading journal",
    description:
      "A private trading journal for stocks and options with performance analytics and position-size calculators. No account, no subscription.",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Android, iOS",
  },
];

const moreAppsStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "More apps from the maker of PayClear",
  itemListElement: makerApps.map((app, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SoftwareApplication",
      name: app.name,
      url: app.url,
      image: `https://www.pay-clear.com${app.icon}`,
      description: app.description,
      applicationCategory: app.applicationCategory,
      operatingSystem: app.operatingSystem,
    },
  })),
};

function AppCard({ app }: { app: MakerApp }) {
  return (
    <a
      className="group flex items-start gap-4 rounded-2xl border border-[#d9e7f6] bg-[#fbfdff] p-5 shadow-[0_12px_35px_rgba(7,20,63,0.05)] transition hover:border-[#2b7cff] hover:shadow-[0_16px_45px_rgba(43,120,255,0.12)]"
      href={app.url}
      target="_blank"
      rel="noopener"
      key={app.url}
    >
      <Image
        src={app.icon}
        alt={`${app.name} app icon`}
        width={56}
        height={56}
        className="shrink-0 rounded-xl shadow-[0_10px_28px_rgba(7,20,63,0.14)]"
      />
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-black text-[#07143f]">{app.name}</h3>
          <span className="rounded-full bg-[#eef9ff] px-2.5 py-0.5 text-xs font-bold text-[#2b7cff]">
            {app.category}
          </span>
        </div>
        <p className="mt-2 text-sm leading-6 text-[#53627a]">{app.description}</p>
        <p className="mt-3 text-xs font-bold text-[#2b7cff]">
          {app.domain}
          <span aria-hidden className="ml-1 inline-block transition group-hover:translate-x-0.5">
            ↗
          </span>
        </p>
      </div>
    </a>
  );
}

export function MoreApps({ variant = "band" }: { variant?: "band" | "compact" }) {
  if (variant === "compact") {
    return (
      <section className="mt-8 rounded-2xl border border-[#d9e7f6] bg-white p-6 md:p-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(moreAppsStructuredData) }}
        />
        <p className="text-sm font-black uppercase text-[#2dd4bf]">
          From the maker of PayClear
        </p>
        <h2 className="mt-2 text-2xl font-black tracking-tight md:text-3xl">
          More apps built the same way
        </h2>
        <p className="mt-3 max-w-3xl leading-7 text-[#53627a]">
          Private by design, useful offline and no extra subscription — the same
          philosophy as PayClear.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {makerApps.map((app) => (
            <AppCard app={app} key={app.url} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="more-apps" className="border-t border-[#d9e7f6] bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(moreAppsStructuredData) }}
      />
      <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase text-[#2dd4bf]">
            From the maker of PayClear
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
            More apps built the same way.
          </h2>
          <p className="mt-5 text-base leading-7 text-[#415574] sm:text-lg sm:leading-8">
            Private by design, useful offline and no extra subscription — the
            same philosophy behind PayClear, applied to sleep and to trading.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {makerApps.map((app) => (
            <AppCard app={app} key={app.url} />
          ))}
        </div>
      </div>
    </section>
  );
}
