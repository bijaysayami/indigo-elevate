import { createFileRoute } from "@tanstack/react-router";
import { ProductRangeView } from "@/components/site/ProductRangeView";
import { PRODUCT_RANGES } from "@/lib/site-data";

const RANGE = PRODUCT_RANGES.find((r) => r.slug === "ivm")!;

export const Route = createFileRoute("/ivm")({
  head: () => ({
    meta: [
      { title: "Industrial Vegetation Management — Indigo Specialty Products" },
      { name: "description", content: "Herbicides, adjuvants, surfactants and PGRs for IVM programs." },
      { property: "og:title", content: "Industrial Vegetation Management — Indigo Specialty Products" },
      { property: "og:description", content: "Herbicides, adjuvants, surfactants and PGRs for IVM programs." },
      { property: "og:url", content: "/ivm" },
    ],
    links: [{ rel: "canonical", href: "/ivm" }],
  }),
  component: () => <ProductRangeView range={RANGE} />,
});
