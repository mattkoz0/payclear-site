import type { MetadataRoute } from "next";
import { seoLandingPages } from "./seo-pages";

const baseUrl = "https://www.pay-clear.com";
const lastModified = new Date("2026-06-14");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/support`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    ...seoLandingPages.map((page, index) => ({
      url: `${baseUrl}${page.href}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: index === 0 ? 0.9 : 0.85,
    })),
  ];
}
