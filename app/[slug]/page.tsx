import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAdditionalSeoPage, additionalSeoPages } from "../additional-seo-pages";
import { SubscriptionCostCalculator } from "../components/subscription-cost-calculator";
import { SeoPageContent } from "../seo-page-content";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return additionalSeoPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getAdditionalSeoPage(slug);

  if (!page) return {};

  const path = `/${page.slug}`;
  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: path,
      languages: {
        "en-US": path,
        "en-CA": path,
        "x-default": path,
      },
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://www.pay-clear.com${path}`,
    },
  };
}

export default async function AdditionalSeoPage({ params }: Props) {
  const { slug } = await params;
  const page = getAdditionalSeoPage(slug);

  if (!page) notFound();

  return (
    <SeoPageContent
      breadcrumb={page.breadcrumb}
      cta={page.cta}
      eyebrow={page.eyebrow}
      faqs={page.faqs}
      intro={page.intro}
      path={`/${page.slug}`}
      sections={page.sections}
      title={page.title}
      tool={page.calculator ? <SubscriptionCostCalculator /> : undefined}
    />
  );
}
