import { createFileRoute } from "@tanstack/react-router";
import { ProductRangeView } from "@/components/site/ProductRangeView";
import { PRODUCT_RANGES } from "@/lib/site-data";

const RANGE = PRODUCT_RANGES.find((r) => r.slug === "proforce")!;

export const Route = createFileRoute("/proforce")({
  head: () => ({
    meta: [
      { title: "ProForce — Indigo Specialty Products" },
      { name: "description", content: "Australian-manufactured plant protection for non-crop and specialty markets." },
      { property: "og:title", content: "ProForce — Indigo Specialty Products" },
      { property: "og:description", content: "Australian-manufactured plant protection for non-crop and specialty markets." },
      { property: "og:url", content: "/proforce" },
    ],
    links: [{ rel: "canonical", href: "/proforce" }],
  }),
  component: () => <ProductRangeView range={RANGE} />,
});
