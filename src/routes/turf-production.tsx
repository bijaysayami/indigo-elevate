import { createFileRoute } from "@tanstack/react-router";
import { ProductRangeView } from "@/components/site/ProductRangeView";
import { PRODUCT_RANGES } from "@/lib/site-data";

const RANGE = PRODUCT_RANGES.find((r) => r.slug === "turf-production")!;

export const Route = createFileRoute("/turf-production")({
  head: () => ({
    meta: [
      { title: "Turf Production — Indigo Specialty Products" },
      { name: "description", content: "Inputs and agronomy tailored to large-scale Australian turf production." },
      { property: "og:title", content: "Turf Production — Indigo Specialty Products" },
      { property: "og:description", content: "Inputs and agronomy tailored to large-scale Australian turf production." },
      { property: "og:url", content: "/turf-production" },
    ],
    links: [{ rel: "canonical", href: "/turf-production" }],
  }),
  component: () => <ProductRangeView range={RANGE} />,
});
