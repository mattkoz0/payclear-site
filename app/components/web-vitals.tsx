"use client";

import { useReportWebVitals } from "next/web-vitals";

type ReportWebVitalsCallback = Parameters<typeof useReportWebVitals>[0];

const reportWebVitals: ReportWebVitalsCallback = (metric) => {
  window.gtag?.("event", metric.name, {
    event_category: "Web Vitals",
    event_label: metric.id,
    metric_rating: metric.rating,
    non_interaction: "true",
    value: String(
      Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
    ),
  });
};

export function WebVitals() {
  useReportWebVitals(reportWebVitals);
  return null;
}
