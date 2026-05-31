import { createFileRoute } from "@tanstack/react-router";
import { ProductRangeView } from "@/components/site/ProductRangeView";
import { PRODUCT_RANGES } from "@/lib/site-data";

const RANGE = PRODUCT_RANGES.find((r) => r.slug === "bioforce")!;

export const Route = createFileRoute("/bioforce")({
  head: () => ({
    meta: [
      { title: "BioForce — Indigo Specialty Products" },
      { name: "description", content: "Beneficial bacteria and fungi that build turf and amenity plant resilience." },
      { property: "og:title", content: "BioForce — Indigo Specialty Products" },
      { property: "og:description", content: "Beneficial bacteria and fungi that build turf and amenity plant resilience." },
      { property: "og:url", content: "/bioforce" },
    ],
    links: [{ rel: "canonical", href: "/bioforce" }],
  }),
  component: () => <ProductRangeView range={RANGE} />,
});
