import { createFileRoute } from "@tanstack/react-router";
import { ProductRangeView } from "@/components/site/ProductRangeView";
import { PRODUCT_RANGES } from "@/lib/site-data";

const RANGE = PRODUCT_RANGES.find((r) => r.slug === "duracote")!;

export const Route = createFileRoute("/duracote")({
  head: () => ({
    meta: [
      { title: "NutriForce Duracote — Indigo Specialty Products" },
      { name: "description", content: "Controlled-release fertilisers delivering predictable nutrient curves." },
      { property: "og:title", content: "NutriForce Duracote — Indigo Specialty Products" },
      { property: "og:description", content: "Controlled-release fertilisers delivering predictable nutrient curves." },
      { property: "og:url", content: "/duracote" },
    ],
    links: [{ rel: "canonical", href: "/duracote" }],
  }),
  component: () => <ProductRangeView range={RANGE} />,
});
