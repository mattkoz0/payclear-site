import type { MetadataRoute } from "next";
import { additionalSeoPages } from "./additional-seo-pages";
import { blogPosts } from "./blog/posts";
import { seoLandingPages } from "./seo-pages";

const baseUrl = "https://www.pay-clear.com";
const lastModified = new Date("2026-07-10");
const homeImages = [
  `${baseUrl}/payclear-dashboard-subscription-tracker.avif`,
  `${baseUrl}/payclear-renewal-reminder-settings.avif`,
  `${baseUrl}/payclear-free-trial-review.avif`,
  `${baseUrl}/payclear-spending-limits-savings.avif`,
  `${baseUrl}/payclear-shared-bill-splitter.avif`,
  `${baseUrl}/payclear-privacy-local-tracker.avif`,
  `${baseUrl}/payclear-subscription-spending-insights.avif`,
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "daily",
      priority: 1,
      images: homeImages,
    },
    {
      url: `${baseUrl}/download`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [
        `${baseUrl}/PayClear_icon_512512.png`,
        `${baseUrl}/payclear-dashboard-subscription-tracker.avif`,
      ],
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${baseUrl}/PayClear_icon_512512.png`],
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
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
      url: `${baseUrl}/app`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/press`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/changelog`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
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
    ...additionalSeoPages.map((page) => ({
      url: `${baseUrl}/${page.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(`${post.dateModified}T00:00:00.000Z`),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
