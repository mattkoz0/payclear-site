# Cross-promotion: "From the maker" apps section

> **Instruction for AI coding agents (Claude Code, Codex, etc.):** This document is a complete,
> self-contained implementation brief. Implement it in THIS repository without asking for
> missing data — everything you need (copy, URLs, icon sources, SEO rules) is below.
> A reference implementation already ships in production on https://www.pay-clear.com
> (section "More apps built the same way." near the bottom of the homepage).

## Goal

All three apps below are built by the same indie developer and share one philosophy:
**private by design, useful offline, no extra subscription.** Each app's website must
tastefully cross-link to the other two. This is both a discovery feature for users and
an SEO measure: dofollow links between the developer's own domains plus machine-readable
structured data tying the apps together.

## Step 0 — Identify the current site

Determine which app THIS repository belongs to (check `package.json` name, domain in
metadata/config, or README). Then render cards for the **other two** apps only. Never
link a site to itself.

## The app catalog

Use this data verbatim (copy, categories, schema fields). Do not invent new descriptions.

### PayClear

| Field | Value |
|---|---|
| `name` | PayClear |
| `url` | `https://www.pay-clear.com/` |
| `domain` | `pay-clear.com` |
| `category` (chip label) | Subscription tracker |
| `description` | Track subscriptions, free trials and recurring bills privately. No bank login, no account — local reminders and a one-time lifetime unlock. |
| `applicationCategory` (schema.org) | `FinanceApplication` |
| `operatingSystem` (schema.org) | `Android, iOS` |
| Icon (512×512 PNG) | download from `https://www.pay-clear.com/PayClear_icon_512512.png` |

### Calma

| Field | Value |
|---|---|
| `name` | Calma |
| `url` | `https://www.calmasounds.com/` |
| `domain` | `calmasounds.com` |
| `category` (chip label) | Sleep & focus sounds |
| `description` | Mix nature sounds, white noise and ambient layers for sleep, relaxation and deep focus. Works fully offline with a one-time lifetime unlock. |
| `applicationCategory` (schema.org) | `HealthApplication` |
| `operatingSystem` (schema.org) | `Android, iOS` |
| Icon (512×512 PNG) | download from `https://www.pay-clear.com/calma_icon_exact_upscale_512.png` (or reuse the icon already in this repo if this is the Calma repo) |

### Sereo

| Field | Value |
|---|---|
| `name` | Sereo |
| `url` | `https://sereo.cc/` |
| `domain` | `sereo.cc` |
| `category` (chip label) | Trading journal |
| `description` | A private trading journal for stocks and options with performance analytics and position-size calculators. No account, no subscription. |
| `applicationCategory` (schema.org) | `FinanceApplication` |
| `operatingSystem` (schema.org) | `Android, iOS` |
| Icon (512×512 PNG) | download from `https://www.pay-clear.com/sereo_ikona_512.png` (or reuse the icon already in this repo if this is the Sereo repo) |

**Icons must be served from THIS site's own static assets** (e.g. `public/`). Download the
two needed icons once and commit them — do not hotlink images from the other domains.

## UX requirements

1. **Match this site's existing design system.** Do NOT copy PayClear's colors or fonts.
   Reuse the card style, border radius, shadows, spacing, hover states, and section
   heading pattern already used on this site so the section looks native, not bolted on.
2. **Full section on the homepage**, placed low in the page — after the main content/FAQ,
   directly above the footer. It must not compete with the site's primary download CTA.
   - Eyebrow/kicker: `From the maker of <CurrentAppName>`
   - Heading: `More apps built the same way.`
   - Subline: `Private by design, useful offline and no extra subscription — the same philosophy behind <CurrentAppName>.`
   - Below: a 2-column (1-column on mobile) grid with one card per sibling app.
3. **Card anatomy** (each card is a single `<a>` wrapping everything):
   - App icon, ~56 px, rounded corners, subtle shadow. `alt="<Name> app icon"`.
   - App name + small category chip on one line.
   - One-sentence description (from the catalog above).
   - Domain in small bold text with a `↗` glyph (mark the glyph `aria-hidden`).
   - Hover: subtle border/shadow accent consistent with this site's link hover style.
4. **Footer line** (sitewide if the site has a shared footer): a small
   `More from the maker: <App1> · <App2>` line with plain text links.
5. **Compact variant on secondary/SEO/content pages** (if this site has them): same cards
   in a smaller boxed section after the page's closing CTA. Skip if the site is a single page.
6. Keep all data in **one exported array** (e.g. `makerApps`) so adding a fourth app later
   is a one-object change.

## SEO requirements (non-negotiable)

1. **Dofollow links.** These are the developer's own domains — do NOT add `rel="nofollow"`
   or `rel="sponsored"`. Use `target="_blank" rel="noopener"`.
2. **Clean URLs.** Link exactly the canonical URLs from the catalog. No UTM or other query
   parameters — referral traffic is visible in analytics anyway, and clean links pass full
   value to the canonical page.
3. **JSON-LD structured data** rendered on every page that shows the section — an
   `ItemList` of `SoftwareApplication` items:

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "More apps from the maker of <CurrentAppName>",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": "<sibling app name>",
        "url": "<sibling app canonical url>",
        "image": "https://<this-site-domain>/<local-icon-path>",
        "description": "<description from catalog>",
        "applicationCategory": "<from catalog>",
        "operatingSystem": "Android, iOS"
      }
    }
  ]
}
```

   The `image` must point at the icon hosted on THIS site's domain. If the site already
   renders JSON-LD via a `@graph`, you may merge the `ItemList` into it instead of adding
   a second script tag — either is valid.
4. **Server-rendered / static HTML.** The links and JSON-LD must be present in the initial
   HTML response, not injected client-side after hydration.

## Reference implementation (Next.js App Router + Tailwind)

This is the production component from the PayClear repo (`app/components/more-apps.tsx`).
Port the structure and adapt all styling tokens to this site's design system. If this site
uses a different stack (plain HTML, Astro, Vue…), reproduce the same DOM structure,
attributes and JSON-LD semantically.

```tsx
import Image from "next/image";

type MakerApp = {
  name: string;
  url: string;
  domain: string;
  icon: string; // local /public path
  category: string;
  description: string;
  applicationCategory: string;
  operatingSystem: string;
};

// Populate with the OTHER two apps from the catalog above.
export const makerApps: MakerApp[] = [
  /* ... */
];

const moreAppsStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "More apps from the maker of <CurrentAppName>",
  itemListElement: makerApps.map((app, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SoftwareApplication",
      name: app.name,
      url: app.url,
      image: `https://<this-site-domain>${app.icon}`,
      description: app.description,
      applicationCategory: app.applicationCategory,
      operatingSystem: app.operatingSystem,
    },
  })),
};

function AppCard({ app }: { app: MakerApp }) {
  return (
    <a
      className="group flex items-start gap-4 rounded-2xl border p-5 transition" // adapt tokens
      href={app.url}
      target="_blank"
      rel="noopener"
    >
      <Image src={app.icon} alt={`${app.name} app icon`} width={56} height={56}
        className="shrink-0 rounded-xl" />
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-black">{app.name}</h3>
          <span className="rounded-full px-2.5 py-0.5 text-xs font-bold">{app.category}</span>
        </div>
        <p className="mt-2 text-sm leading-6">{app.description}</p>
        <p className="mt-3 text-xs font-bold">
          {app.domain}
          <span aria-hidden className="ml-1 inline-block transition group-hover:translate-x-0.5">↗</span>
        </p>
      </div>
    </a>
  );
}

export function MoreApps() {
  return (
    <section id="more-apps">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(moreAppsStructuredData) }}
      />
      <p>From the maker of {"<CurrentAppName>"}</p>
      <h2>More apps built the same way.</h2>
      <p>Private by design, useful offline and no extra subscription.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {makerApps.map((app) => <AppCard app={app} key={app.url} />)}
      </div>
    </section>
  );
}
```

## Acceptance checklist

Verify before finishing:

- [ ] Section renders on the homepage above the footer, styled natively for this site.
- [ ] Exactly two cards — the current site's own app is NOT listed.
- [ ] Both icons are committed to this repo's static assets and load from this domain.
- [ ] Links are `target="_blank" rel="noopener"`, dofollow, clean canonical URLs.
- [ ] JSON-LD `ItemList` is present in the prerendered/static HTML
      (e.g. `grep 'ItemList' <built-html>`), and validates on https://validator.schema.org.
- [ ] Footer contains the small "More from the maker" line (if the site has a shared footer).
- [ ] Production build passes; no layout shift (icon dimensions are explicit).
