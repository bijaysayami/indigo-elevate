import { createFileRoute } from "@tanstack/react-router";
import { ProductRangeView } from "@/components/site/ProductRangeView";
import { PRODUCT_RANGES } from "@/lib/site-data";

const RANGE = PRODUCT_RANGES.find((r) => r.slug === "aquatics")!;

export const Route = createFileRoute("/aquatics")({
  head: () => ({
    meta: [
      { title: "Aquatic Management — Indigo Specialty Products" },
      { name: "description", content: "Reduce algae, weed, sludge and odour while improving water aesthetics." },
      { property: "og:title", content: "Aquatic Management — Indigo Specialty Products" },
      { property: "og:description", content: "Reduce algae, weed, sludge and odour while improving water aesthetics." },
      { property: "og:url", content: "/aquatics" },
    ],
    links: [{ rel: "canonical", href: "/aquatics" }],
  }),
  component: () => <ProductRangeView range={RANGE} />,
});
