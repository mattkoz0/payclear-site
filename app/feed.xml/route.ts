import { blogPosts } from "../blog/posts";

const baseUrl = "https://www.pay-clear.com";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET() {
  const items = blogPosts
    .map((post) => {
      const url = `${baseUrl}/blog/${post.slug}`;
      return `<item>
  <title>${escapeXml(post.title)}</title>
  <link>${url}</link>
  <guid isPermaLink="true">${url}</guid>
  <description>${escapeXml(post.excerpt)}</description>
  <category>${escapeXml(post.category)}</category>
  <pubDate>${new Date(`${post.datePublished}T00:00:00Z`).toUTCString()}</pubDate>
</item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>PayClear Blog</title>
  <link>${baseUrl}/blog</link>
  <description>Practical guides for subscription tracking, trials, recurring bills, and savings.</description>
  <language>en-US</language>
  <lastBuildDate>${new Date("2026-07-09T00:00:00Z").toUTCString()}</lastBuildDate>
${items}
</channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
