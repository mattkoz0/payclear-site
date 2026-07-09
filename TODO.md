# PayClear Website — TODO: SEO, Growth & Google Play Conversion

> **Cel**: Maksymalne pozycjonowanie strony pay-clear.com, zwiększenie wyświetleń/kliknięć w Google, prowadzenie ruchu do Google Play Store (a w przyszłości Apple App Store).
>
> **🎯 Target market: USA + Kanada (anglojęzyczny rynek północnoamerykański)**

> **Kontekst techniczny**: Next.js 16.2.6, React 19, TailwindCSS 4, hosting Vercel, domena `pay-clear.com`

## Status wdrożenia — 9 lipca 2026

### Wdrożone w kodzie

- Oficjalny badge Google Play, responsywne CTA, spójne UTM-y i zdarzenie `click_google_play`.
- Mobilny sticky CTA po wyjściu z hero oraz preconnect do Google Play.
- Metadata strony głównej, 13 pytań FAQ ze schemą, canonicale i `hreflang` dla `en-US`, `en-CA` oraz `x-default`.
- Wszystkie brakujące landing pages z tabeli long-tail: waste reduction, calculator, family manager, no-login i USA.
- Blog z 10 poradnikami, Article schema, statycznym generowaniem, wewnętrznym linkowaniem, sitemapą, RSS i dynamicznymi obrazami OG dla artykułów.
- Tabele porównawcze i ostrożniejsze, zaktualizowane copy dla Rocket Money/Truebill/Mint.
- Konfigurowalny GA4 (`NEXT_PUBLIC_GA_MEASUREMENT_ID`) i endpoint Digital Asset Links, który aktywuje się po podaniu prawidłowego fingerprintu produkcyjnego.

### Wymaga działania poza repozytorium lub danych właściciela aplikacji

- Utworzenie property GA4, wpisanie `NEXT_PUBLIC_GA_MEASUREMENT_ID` na Vercel i połączenie GA4 z Google Search Console.
- Wpisanie `ANDROID_APP_SHA256_CERT_FINGERPRINT` na Vercel — SHA-256 musi pochodzić z certyfikatu Google Play App Signing, nie z debug APK.
- Konfiguracja Android App Links również po stronie manifestu aplikacji oraz jej publikacja.
- GSC, Google Play Console, Product Hunt, katalogi, outreach, testy PageSpeed/Rich Results i realne opinie Google Play.
- Rating/testimonials dopiero po zebraniu prawdziwych, weryfikowalnych danych; nie dodawać wymyślonych ocen ani liczby pobrań.

---

## 📊 ANALIZA OBECNEGO STANU (dane GSC — ostatnie 3 miesiące)

### Wyniki
| Metryka | Wartość |
|---|---|
| Łączne kliknięcia | 3 |
| Łączne wyświetlenia | ~125 |
| Średni CTR | ~2.4% |
| Średnia pozycja | ~7.4 |

### Zapytania (queries)
| Zapytanie | Kliknięcia | Wyświetlenia | CTR | Pozycja |
|---|---|---|---|---|
| payclear | 2 | 64 | 3.12% | 5.81 |
| payclear services | 0 | 5 | 0% | 8.8 |
| payclear service | 0 | 3 | 0% | 7.33 |
| pay clear | 0 | 1 | 0% | 50 |
| all payment clear | 0 | 1 | 0% | 64 |

### Strony
| Strona | Kliknięcia | Wyświetlenia | Pozycja |
|---|---|---|---|
| / (home) | 3 | 107 | 7.27 |
| /subscription-reminder-app | 0 | 15 | 6.13 |
| /free-trial-reminder | 0 | 13 | 5.69 |
| /terms | 0 | 6 | 11.83 |

### Urządzenia
| Urządzenie | Kliknięcia | Wyświetlenia |
|---|---|---|
| Desktop | 3 | 72 |
| Mobile | 0 | 51 |
| Tablet | 0 | 2 |

### Kluczowe obserwacje
1. **Brak ruchu generycznego** — strona pojawia się prawie wyłącznie na zapytania brandowe ("payclear")
2. **Brak kliknięć z mobile** — 0 kliknięć z urządzeń mobilnych mimo 51 wyświetleń → CTA muszą być lepiej widoczne
3. **SEO landing pages zaczynają się indeksować** — `/subscription-reminder-app` i `/free-trial-reminder` mają po 13-15 wyświetleń i pozycje ~6 → potencjał do wzrostu
4. **Główne rynki**: UK (35 wyświetleń), USA (24), Niemcy (11), Indie (6), Kanada (4)
5. **Zero kliknięć z target markets (US, CA)** → krytyczny problem do rozwiązania — USA ma 24 wyświetlenia i 0 kliknięć, Kanada ma 4 wyświetlenia i 0 kliknięć
6. **UK ma ruch ale nie jest targetem** — 35 wyświetleń, ale priorytet to US + CA

---

## 🔴 PRIORYTET 1 — Krytyczne (natychmiast)

### 1.1 Dodać Google Play badge z oficjalnym asset'em
**Plik**: `app/page.tsx` (linia ~189-211, komponent `StoreButtons`)
**Opis**: Zastąpić tekstowe przyciski "Get it on Google Play" oficjalnym badgem Google Play (SVG/PNG). Google Play badges zwiększają CTR i zaufanie.
**Kroki**:
- [ ] Pobrać oficjalny badge z https://play.google.com/intl/en_us/badges/
- [ ] Zapisać jako `/public/google-play-badge.png` (lub SVG)
- [ ] W `StoreButtons` zastąpić tekst elementem `<Image>` z badgem
- [ ] Dodać `aria-label="Get PayClear on Google Play"` do linku
- [ ] Badge powinien mieć min. 48px wysokości (min-h-12 ok) i być responsywny

### 1.2 Deep link / Smart App Banner
**Plik**: `app/layout.tsx`
**Opis**: Dodać metatagi, które automatycznie pokażą banner "Open in app" na urządzeniach Android i (w przyszłości) iOS.
**Kroki**:
- [ ] Dodać w `<head>` (przez metadata export lub `<meta>` w layout):
  ```html
  <!-- Android Smart Banner / Digital Asset Links -->
  <meta name="google-play-app" content="app-id=com.payclear.app">
  ```
- [ ] Utworzyć plik `public/.well-known/assetlinks.json` z Digital Asset Links (weryfikacja app<->website):
  ```json
  [{
    "relation": ["delegate_permission/common.handle_all_urls"],
    "target": {
      "namespace": "android_app",
      "package_name": "com.payclear.app",
      "sha256_cert_fingerprints": ["<SHA256_FINGERPRINT>"]
    }
  }]
  ```
  (Wymaga SHA256 fingerprint certyfikatu release APK)
- [ ] W przyszłości: dodać Apple Smart Banner: `<meta name="apple-itunes-app" content="app-id=XXXXXXX">`

### 1.3 Poprawić title/meta na stronie głównej pod kluczowe frazy
**Plik**: `app/page.tsx` (linia 6-21) oraz `app/layout.tsx` (linia 15-53)
**Opis**: Obecny title jest zbyt ogólny. Powinien zawierać primary keyword + brand + benefit.
**Kroki**:
- [ ] Zmienić title strony głównej na:
  `"PayClear — Free Subscription Tracker App for Android | No Bank Linking"`
- [ ] Meta description powinien zawierać action-oriented copy z CTA (US-focused język):
  `"Track subscriptions, free trials & recurring bills privately. No bank login, no account needed. Download PayClear free on Google Play."`
- [ ] Używać amerykańskiego angielskiego ("canceled" nie "cancelled", "organize" nie "organise") we WSZYSTKICH treściach
- [ ] Upewnić się, że `<h1>` na stronie głównej zawiera primary keyword ("subscription tracker")

### 1.4 Zaktualizować `lastModified` w sitemap.ts
**Plik**: `app/sitemap.ts` (linia 5)
**Opis**: Data `2026-06-14` jest stara. Sitemap powinien odzwierciedlać rzeczywistą datę ostatniej modyfikacji.
**Kroki**:
- [ ] Zmienić `lastModified` na `new Date()` lub na aktualną datę
- [ ] Rozważyć dynamiczne generowanie dat per-strona (np. różne daty dla content pages vs utility pages)

### 1.5 Dodać hreflang dla rynków docelowych (US + CA)
**Plik**: `app/layout.tsx` (metadata)
**Opis**: Strona musi jasno sygnalizować Google, że celuje w rynki US i CA.
**Kroki**:
- [ ] Dodać w metadata:
  ```ts
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "en-CA": "/",
      "x-default": "/",
    },
  }
  ```
- [ ] To samo powtórzyć w metadata każdej landing page (canonical + languages)

### 1.6 Ustawić geo-targeting w Google Search Console
**Opis**: GSC pozwala na international targeting — ustawić docelowo USA.
**Kroki**:
- [ ] W GSC → Settings → International Targeting → ustawić USA jako target
- [ ] Alternatywnie: jeśli domena `.com` — GSC nie wymusza geo, ale hreflang w kodzie jest kluczowy

---

## 🟠 PRIORYTET 2 — Wysokie (1-2 tygodnie)

### 2.1 Nowe SEO landing pages na brakujące long-tail keywords
**Pliki**: Nowe foldery w `app/` + wpisy w `app/seo-pages.ts` + `app/sitemap.ts`
**Opis**: Obecne 15 landing pages celują w dość wąskie frazy. Brakuje kluczowych fraz z dużym wolumenem.
**Kroki**:
- [ ] Dodać nowe strony (wzorować się na strukturze z `app/subscription-tracker/page.tsx` + `seo-page-content.tsx`):

| Slug | Target keyword | Szacowany wolumen |
|---|---|---|
| `/best-subscription-tracker-app` | best subscription tracker app | wysoki (US) |
| `/subscription-manager-app` | subscription manager app | wysoki (US) |
| `/how-to-track-subscriptions` | how to track subscriptions | średni (US/CA) |
| `/cancel-unused-subscriptions` | cancel unused subscriptions | średni (US) |
| `/stop-wasting-money-subscriptions` | stop wasting money on subscriptions | średni (US) |
| `/free-trial-tracker-app` | free trial tracker app | średni (US/CA) |
| `/subscription-tracker-app-free` | subscription tracker app free | średni (US) |
| `/manage-recurring-payments` | manage recurring payments | średni (US/CA) |
| `/subscription-cost-calculator` | subscription cost calculator | niski-średni |
| `/family-subscription-manager` | family subscription manager | niski-średni |
| `/subscription-tracker-no-login` | subscription tracker no login | niski |
| `/subscription-tracker-usa` | subscription tracker app USA | niski (geo) |

> **WAŻNE**: Cały content pisać w **American English** ("canceled", "organize", "color"). Kwoty w USD ($). Przykłady subskrypcji: Netflix US, Spotify US, Hulu, HBO Max, Disney+, Apple TV+, Amazon Prime, YouTube Premium — serwisy popularne w US/CA.

- [ ] Każda strona musi mieć:
  - Unikalny `title` i `description` z target keyword
  - `canonical` URL
  - Min. 4 sekcje content (600+ słów łącznie)
  - FAQ section (3+ pytania) z FAQ schema (już wbudowane w `SeoPageContent`)
  - CTA z linkiem do Google Play
- [ ] Dodać nowe strony do `seoLandingPages` array w `seo-pages.ts`
- [ ] Sitemap automatycznie je doda (jest zrobiony dynamicznie z `seoLandingPages`)

### 2.2 Blog / Poradniki (Content Hub)
**Pliki**: `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`
**Opis**: Strona nie ma blogu. Content marketing jest kluczowy dla organic growth. Blog z poradnikami i listami przyciąga ruch informacyjny.
**Kroki**:
- [ ] Utworzyć strukturę blogową:
  ```
  app/blog/
  ├── page.tsx                     # lista artykułów
  ├── [slug]/
  │   └── page.tsx                 # pojedynczy artykuł
  └── posts.ts                     # dane artykułów (lub MDX w przyszłości)
  ```
- [ ] Stworzyć pierwsze artykuły (min. 800-1200 słów każdy, **US/CA focus**):
  1. "How to Track All Your Subscriptions in One Place"
  2. "10 Subscriptions Americans Are Paying For (And Forgot About)" ← US-specific
  3. "Free Trial Tracker: How to Never Get Charged After a Trial"
  4. "Manual vs Automatic Subscription Tracking: Which Is Better for Privacy?"
  5. "How Much Do Americans Spend on Subscriptions in 2026? (Average Stats)" ← US data
  6. "Best Subscription Tracker Apps for Android in 2026"
  7. "How to Cancel Subscriptions You Don't Use Anymore"
  8. "Streaming Subscription Costs 2026: Netflix, Hulu, HBO Max, Disney+ and More" ← US services
  9. "Canadian Subscription Costs: How to Track and Save" ← CA-specific
  10. "Subscription Fatigue in North America: Why You Need a Tracker"
- [ ] Każdy artykuł powinien mieć:
  - Schema.org Article markup
  - Internal links do landing pages i strony głównej
  - CTA do Google Play na końcu
  - Open Graph metadata
  - Naturalnie wplecione keywords
- [ ] Dodać link "Blog" do nawigacji w `Header` i `Footer`
- [ ] Dodać blog do sitemap

### 2.3 Rozbudować FAQ na stronie głównej
**Plik**: `app/page.tsx` (linia 97-113)
**Opis**: Tylko 3 FAQ. Więcej pytań = więcej szans na rich snippets w Google.
**Kroki**:
- [ ] Dodać minimum 7-10 dodatkowych FAQ:
  - "What subscriptions can I track with PayClear?"
  - "Is PayClear really free?"
  - "How does PayClear remind me about renewals?"
  - "Can I track subscriptions in different currencies?"
  - "Does PayClear sell my data?"
  - "How do I split a shared subscription with PayClear?"
  - "What is the difference between PayClear and Truebill/Rocket Money?"
  - "Can I export my subscription data?"
  - "How do I set spending limits for subscriptions?"
  - "Is PayClear available for iPhone?"
- [ ] Upewnić się, że nowe FAQ są w `structuredData` (FAQPage schema, jest już automatycznie)

### 2.4 Dodać strony porównawcze (vs competitors popularne w US/CA)
**Pliki**: `app/payclear-vs-*/page.tsx`
**Opis**: Strony porównawcze celują w branded keywords konkurencji popularnych na rynku US/CA.
**Kroki**:
- [ ] Stworzyć strony (priorytet wg popularności w US):
  - `/payclear-vs-rocket-money` (target: "rocket money alternative without bank") ← **#1 priority, najpopularniejszy w US**
  - `/payclear-vs-truebill` (target: "truebill alternative") ← wciąż szukany choć Truebill → Rocket Money
  - `/payclear-vs-mint` (target: "mint subscription tracker alternative") ← Mint zamknięty, ludzie szukają zamienników
  - `/payclear-vs-bobby-app` (target: "bobby app alternative android")
  - `/payclear-vs-trim` (target: "trim app alternative") ← popularny w US
  - `/payclear-vs-copilot-money` (target: "copilot money alternative") ← rośnie w US
- [ ] Każda strona: tabela porównawcza, USPs PayClear (privacy, no bank, **no US bank account required**), CTA
- [ ] Podkreślać: "Unlike Rocket Money, PayClear doesn't need access to your Plaid-connected bank account"
- [ ] Dodać do `seo-pages.ts` i sitemap
- [ ] Użyć `SeoPageContent` jako template

### 2.5 Optymalizacja mobile CTA (0 kliknięć z mobile!)
**Plik**: `app/page.tsx` (komponent `StoreButtons` + hero section)
**Opis**: GSC pokazuje 0 kliknięć z mobile mimo 51 wyświetleń. Mobile UX wymaga poprawy.
**Kroki**:
- [ ] Dodać sticky bottom bar na mobile z CTA "Download on Google Play" (widoczny po scrollu poniżej hero)
- [ ] Upewnić się, że Google Play badge jest w pełni tapable (min 48x48px)
- [ ] Przetestować stronę na małych ekranach (375px, 390px, 412px)
- [ ] Dodać CSS:
  ```css
  @media (max-width: 640px) {
    .mobile-sticky-cta {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 50;
      padding: 12px 16px;
      background: rgba(7, 20, 63, 0.96);
      backdrop-filter: blur(8px);
    }
  }
  ```

### 2.6 Dodać structured data — Review/Rating (gdy będą opinie)
**Plik**: `app/page.tsx` (structuredData)
**Opis**: Gdy pojawią się recenzje w Google Play, dodać aggregateRating do SoftwareApplication schema.
**Kroki**:
- [ ] Po uzyskaniu min. 5+ recenzji w Google Play, dodać do schema:
  ```json
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "12",
    "bestRating": "5"
  }
  ```
- [ ] Aktualizować rating ręcznie co tydzień lub dodać automatyczne pobieranie z Google Play

---

## 🟡 PRIORYTET 3 — Średnie (2-4 tygodnie)

### 3.1 Dodać stronę `/pricing` (lub `/plans`)
**Plik**: `app/pricing/page.tsx`
**Opis**: Osobna strona pricing z frazą "subscription tracker app free" / "free subscription tracker". Kluczowy keyword.
**Kroki**:
- [ ] Stworzyć dedykowaną stronę z:
  - Tabelą porównawczą Free vs Lifetime
  - FAQ o cenach
  - CTA do Google Play
  - Schema.org Offer
- [ ] Dodać do nawigacji (Header/Footer)
- [ ] Dodać do sitemap

### 3.2 Dodać Google Analytics 4 (GA4) + Google Tag Manager
**Plik**: `app/layout.tsx`
**Opis**: Brak analityki = brak danych o zachowaniu użytkowników. Kluczowe do optymalizacji konwersji.
**Kroki**:
- [ ] Założyć property GA4 w Google Analytics
- [ ] Dodać tag GTM/GA4 do `layout.tsx`:
  ```tsx
  // W <head> przez metadata lub Script component
  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
    strategy="afterInteractive"
  />
  <Script id="ga4" strategy="afterInteractive">
    {`window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');`}
  </Script>
  ```
- [ ] Skonfigurować events:
  - `click_google_play` — kliknięcie w Google Play CTA
  - `click_app_store_soon` — kliknięcie w "App Store coming soon"
  - `scroll_to_features` — scroll do sekcji features
  - `page_view` (automatycznie)
- [ ] Połączyć GA4 z Google Search Console

### 3.3 Tracking eventów konwersji Google Play
**Plik**: `app/page.tsx` i `app/seo-page-content.tsx`
**Opis**: Mierzyć ile osób klika w Google Play link ze strony.
**Kroki**:
- [ ] Dodać `onClick` handler do wszystkich linków Google Play:
  ```tsx
  onClick={() => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'click_google_play', {
        event_category: 'conversion',
        event_label: 'google_play_cta',
        transport_type: 'beacon'
      });
    }
  }}
  ```
- [ ] Albo użyć UTM parametrów w linku GP:
  `https://play.google.com/store/apps/details?id=com.payclear.app&utm_source=website&utm_medium=cta&utm_campaign=homepage`

### 3.4 Optymalizacja obrazów — WebP/AVIF + lazy loading
**Pliki**: wszystkie pliki `page.tsx` używające `<Image>`
**Opis**: Część obrazów jest już AVIF (dobrze!), ale obrazy w `/public/` jak screenshoty GPS (`.jpg`, 700-930 KB każdy) są zbyt ciężkie.
**Kroki**:
- [ ] Skonwertować `GPS - *.jpg` do AVIF (lub usunąć jeśli nie są używane na stronie — sprawdzić)
- [ ] Dodać `loading="lazy"` do obrazów poniżej fold (Next.js Image robi to automatycznie dla non-priority)
- [ ] Upewnić się, że `priority` jest ustawione TYLKO dla above-the-fold images
- [ ] Rozważyć dodanie `placeholder="blur"` z `blurDataURL` do kluczowych obrazów

### 3.5 Dodać dedykowaną stronę mobilną / App Landing Page
**Plik**: `app/download/page.tsx`
**Opis**: Krótka, mobile-first strona specjalnie pod linki z social media, reklam, QR kodów.
**Kroki**:
- [ ] Stworzyć `/download` z:
  - Minimalistyczny design, mobile-first
  - Duży Google Play badge
  - 3 USPs (ikona + tekst)
  - Jeden screenshot
  - Zero nawigacji — czysta konwersja
- [ ] URL do użycia w kampaniach: `pay-clear.com/download`
- [ ] Dodać do sitemap

### 3.6 Open Graph images per-strona
**Pliki**: SEO landing pages w `app/*/page.tsx`
**Opis**: Obecnie jest jeden globalny OG image. Każda landing page powinna mieć unikalny OG image z tytułem.
**Kroki**:
- [ ] Stworzyć `opengraph-image.tsx` w każdym folderze landing page LUB
- [ ] Stworzyć dynamiczny OG image generator oparty o tytuł strony
- [ ] Upewnić się, że OG images mają wymiary 1200x630px
- [ ] Testować w [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) i [Twitter Card Validator](https://cards-dev.twitter.com/validator)

---

## 🟢 PRIORYTET 4 — Niższe (miesiąc+)

### 4.1 Międzynarodowe wersje językowe (i18n) — NISKI PRIORYTET
**Opis**: Target to US + CA (anglojęzyczne). i18n nie jest priorytetem na tym etapie.
**Kroki**:
- [ ] **NA RAZIE POMINĄĆ** — skupić się na anglojęzycznym contencie dla US/CA
- [ ] W przyszłości (po osiągnięciu 1000+ kliknięć/msc z US/CA): rozważyć `/fr-ca/` (francuski kanadyjski) jako pierwszy i18n target
- [ ] Wersje DE/PL/ES dopiero gdy ruch z US/CA będzie stabilny

### 4.2 Stworzyć PWA (Progressive Web App) experience
**Plik**: `app/manifest.ts` (częściowo gotowe)
**Opis**: Manifest jest, ale brak service workera i offline page.
**Kroki**:
- [ ] Dodać service worker z cache-first strategy dla statycznych assets
- [ ] Dodać offline fallback page
- [ ] Upewnić się, że manifest jest kompletny (shortcuts, prefer_related_applications)
- [ ] Dodać `prefer_related_applications: true` z linkiem do Google Play:
  ```ts
  prefer_related_applications: true,
  related_applications: [{
    platform: "play",
    url: "https://play.google.com/store/apps/details?id=com.payclear.app",
    id: "com.payclear.app"
  }]
  ```

### 4.3 Dodać social proof / testimonials
**Plik**: `app/page.tsx` (nowa sekcja)
**Opis**: Brak jakiejkolwiek formy social proof. Google i użytkownicy cenią recenzje.
**Kroki**:
- [ ] Dodać sekcję z cytatami z recenzji Google Play (gdy będą)
- [ ] Alternatywnie: "Used by X+ people tracking subscriptions"
- [ ] Dodać licznik pobrań (gdy przekroczy próg)
- [ ] W przyszłości: integracja z Trustpilot lub Product Hunt

### 4.4 Link building / Off-page SEO (ręczne) — US/CA focus
**Opis**: Zero backlinków = słaba authority domeny. Skupić się na US/CA-relevant directories i communities.
**Kroki**:
- [ ] Zgłosić PayClear do katalogów (US-based):
  - Product Hunt (launch) ← **#1 priority, duży US audience**
  - AlternativeTo.net
  - G2.com / Capterra (US-dominant review platforms)
  - SaaSHub
  - AppBrain
  - BetaList / BetaPage
- [ ] Stworzyć press release na ProductHunt / Indie Hackers / Hacker News
- [ ] Outreach do blogów US tech/personal finance:
  - NerdWallet-style "best subscription tracker" listicles
  - The Verge, Lifehacker, MakeUseOf, XDA Developers
  - Guest posts na US personal finance blogach
- [ ] Reddit (US-dominant communities):
  - /r/androidapps, /r/personalfinance, /r/frugal, /r/subscriptions
  - /r/PersonalFinanceCanada ← **CA-specific!**
  - Organic participation, nie spam
- [ ] Quora: odpowiadać na pytania o subscription tracking
- [ ] Rozważyć wpis na AppSumo (popularny w US/CA)

### 4.5 Performance / Core Web Vitals
**Opis**: Google rankuje na podstawie CWV. Trzeba upewnić się, że strona jest szybka.
**Kroki**:
- [ ] Przetestować w PageSpeed Insights (mobile + desktop)
- [ ] Zoptymalizować LCP — upewnić się, że hero image ładuje się szybko (preload)
- [ ] Zoptymalizować CLS — upewnić się, że layout nie przesuwa się podczas ładowania
- [ ] Zoptymalizować INP — interaktywność
- [ ] Dodać `<link rel="preconnect" href="https://play.google.com" />` w head
- [ ] Rozważyć font subsetting (Geist Sans — ładować tylko potrzebne glyphs)

### 4.6 Dodać breadcrumbs do strony głównej
**Plik**: `app/page.tsx`
**Opis**: Strona główna nie ma breadcrumb schema (SEO pages mają). Dodać BreadcrumbList do structuredData.
**Kroki**:
- [ ] Dodać do `structuredData["@graph"]`:
  ```json
  {
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.pay-clear.com/"
    }]
  }
  ```

### 4.7 Security headers
**Plik**: `next.config.ts`
**Opis**: Dodać security headers (CSP, X-Frame, HSTS) — nie wpływa bezpośrednio na SEO, ale wpływa na zaufanie i Chrome warnings.
**Kroki**:
- [ ] Dodać w `next.config.ts`:
  ```ts
  headers: async () => [{
    source: "/(.*)",
    headers: [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "DENY" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
    ],
  }]
  ```

---

## 🔵 PRIORYTET 5 — Techniczne ulepszenia SEO

### 5.1 Poprawić internal linking
**Pliki**: Wszystkie `page.tsx`
**Opis**: Internal links pomagają w crawlowaniu i dystrybucji authority.
**Kroki**:
- [ ] Każda SEO landing page powinna linkować do:
  - Strony głównej (`/`)
  - Strony `/app` (lub `/download`)
  - Min. 2-3 innych landing pages (powiązane tematycznie)
- [ ] Strona główna powinna linkować do WSZYSTKICH kluczowych landing pages (sekcja Guides częściowo to robi ✓)
- [ ] Dodać sekcję "Related guides" na dole każdej landing page (seoPageContent.tsx sidebar częściowo to robi, ale tylko 6 linków)
- [ ] Blog posty powinny linkować do landing pages i odwrotnie

### 5.2 Canonical URLs — audit
**Pliki**: Każda `page.tsx`
**Opis**: Upewnić się, że każda strona ma poprawny canonical URL.
**Kroki**:
- [ ] Sprawdzić, że każda strona w `app/` ma `alternates: { canonical: "/path" }` w metadata export
- [ ] Sprawdzić, że nie ma zduplikowanych canonical
- [ ] Upewnić się, że canonical pasuje do URL w sitemap

### 5.3 Dodać `next/script` dla external scripts
**Opis**: Upewnić się, że wszelkie external scripts (GA, GTM) używają `next/script` z odpowiednią strategią.
**Kroki**:
- [ ] GA4: `strategy="afterInteractive"`
- [ ] GTM: `strategy="afterInteractive"`
- [ ] Nie dodawać żadnych scripts z `strategy="beforeInteractive"` chyba, że krytyczne

### 5.4 Implementować `generateStaticParams` (jeśli strony blogowe)
**Plik**: `app/blog/[slug]/page.tsx` (gdy będzie blog)
**Opis**: Pre-renderować strony blogowe na etapie build.
**Kroki**:
- [ ] Użyć `generateStaticParams()` w dynamic route blogu
- [ ] Zwracać wszystkie slugi z posts.ts

### 5.5 RSS Feed
**Plik**: `app/feed.xml/route.ts` (nowy)
**Opis**: RSS pozwala Google News i czytnikom RSS na śledzenie contentu.
**Kroki**:
- [ ] Stworzyć endpoint `/feed.xml` generujący RSS z blog postów i changelog
- [ ] Dodać `<link rel="alternate" type="application/rss+xml">` do layout

### 5.6 Dodać `rel="noopener noreferrer"` audit
**Pliki**: Wszystkie `page.tsx`
**Opis**: Upewnić się, że WSZYSTKIE external links mają `rel="noopener noreferrer"` i `target="_blank"`.
**Kroki**:
- [ ] Grep po wszystkich `href="https://` i upewnić się, że każdy ma `rel` i `target`

---

## 📱 PRIORYTET 6 — Google Play Store Optimization (ASO)

> Te kroki dotyczą samego listingu w Google Play, nie strony. Ale strona może wspierać ASO.

### 6.1 Linkować do strony z Google Play listing
- [ ] W opisie Google Play dodać link do `pay-clear.com`
- [ ] Dodać `pay-clear.com/support` jako support URL

### 6.2 Deep links z Google Play do strony
- [ ] W Google Play Developer Console → Store Listing → dodać website URL
- [ ] Upewnić się, że Digital Asset Links (assetlinks.json) jest poprawny

### 6.3 Strona wspierająca ASO keywords
- [ ] Upewnić się, że strona zawiera te same keywords co Google Play listing:
  - subscription tracker
  - bill reminder
  - free trial tracker
  - recurring payment
  - subscription manager
  - private subscription app

### 6.4 UTM tracking dla Google Play linków
- [ ] Zmienić WSZYSTKIE linki do Google Play na stronie na wersję z UTM:
  ```
  https://play.google.com/store/apps/details?id=com.payclear.app
  &utm_source=website
  &utm_medium=cta_button
  &utm_campaign={page_name}
  ```
- [ ] Pliki do zmiany:
  - `app/page.tsx` (StoreButtons + other CTAs)
  - `app/seo-page-content.tsx` (CTA section)
  - `app/about/page.tsx`
  - `app/app/page.tsx`

---

## 📝 NOTATKI DLA WYKONAWCY (inny model AI / developer)

### Architektura projektu
```
app/
├── layout.tsx           # Root layout, metadata, fonts (Geist)
├── page.tsx             # Strona główna (~675 linii, dużo inline content)
├── globals.css          # TailwindCSS v4 import + CSS vars
├── seo-pages.ts         # Array z definicjami SEO landing pages
├── seo-page-content.tsx # Shared component/template dla SEO landing pages
├── sitemap.ts           # Dynamiczny sitemap (automatycznie importuje seo-pages)
├── robots.ts            # robots.txt
├── manifest.ts          # PWA manifest
├── opengraph-image.tsx  # Dynamiczny OG image (satori/ImageResponse)
├── about/page.tsx       # O aplikacji
├── app/page.tsx         # Strona aplikacji / download
├── press/page.tsx       # Press kit
├── changelog/page.tsx   # Historia zmian
├── llms.txt/route.ts    # LLMs.txt endpoint
├── ads.txt/route.ts     # Ads.txt (AdMob)
├── humans.txt/route.ts  # humans.txt
├── subscription-tracker/page.tsx   # SEO landing page (wzorzec)
├── free-trial-reminder/page.tsx    # SEO landing page
├── ... (15 SEO landing pages)
```

### Wzorzec tworzenia nowej SEO landing page
1. Utwórz folder `app/{slug}/page.tsx`
2. Import `SeoPageContent` z `../seo-page-content`
3. Export `metadata: Metadata` z `title`, `description`, `alternates.canonical`
4. Definiuj `sections` array (min. 3-4 sekcji, każda z `title` i `body[]`)
5. Opcjonalnie: custom `faqs` array (domyślne FAQ są w `SeoPageContent`)
6. Dodaj wpis do `seoLandingPages` w `seo-pages.ts`
7. Sitemap zostanie zaktualizowany automatycznie

### Kluczowe zmienne/stałe
- Base URL: `https://www.pay-clear.com`
- Google Play ID: `com.payclear.app`
- Google Play URL: `https://play.google.com/store/apps/details?id=com.payclear.app`
- AdMob publisher: `pub-2896107661771277`
- Support email: `support@pay-clear.com`
- Główne kolory: `#07143f` (navy), `#2b7cff` (blue), `#7b4dff` (purple), `#2dd4bf` (teal), `#69ead6` (mint)
- Tło: `#f7fbff`

### Ograniczenia
- Apple App Store NIE jest jeszcze dostępny → nie linkować, pisać "coming soon"
- Strona jest SSR/SSG przez Next.js 16 — uważać na client components (jeśli potrzebne, dodać `"use client"` na początku)
- TailwindCSS v4 (konfiguracja w CSS, nie tailwind.config.js)
- Brak CMS — cały content jest hardcoded w TSX, co jest OK na obecnym etapie

### Weryfikacja zmian
Po implementacji sprawdzić:
- [ ] `npm run build` — brak błędów
- [ ] Sprawdzić sitemap.xml w przeglądarce
- [ ] Sprawdzić robots.txt
- [ ] Google Rich Results Test — schema validation
- [ ] Mobile Friendly Test
- [ ] PageSpeed Insights (mobile score > 90)
- [ ] Zwalidować OG images: Facebook Sharing Debugger
- [ ] Zresubmitować sitemap w Google Search Console
