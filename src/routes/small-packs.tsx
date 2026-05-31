import { createFileRoute } from "@tanstack/react-router";
import { ProductRangeView } from "@/components/site/ProductRangeView";
import { PRODUCT_RANGES } from "@/lib/site-data";

const RANGE = PRODUCT_RANGES.find((r) => r.slug === "small-packs")!;

export const Route = createFileRoute("/small-packs")({
  head: () => ({
    meta: [
      { title: "Consumer Small Pack Products — Indigo Specialty Products" },
      { name: "description", content: "Professional-grade formulations in retail-ready pack sizes." },
      { property: "og:title", content: "Consumer Small Pack Products — Indigo Specialty Products" },
      { property: "og:description", content: "Professional-grade formulations in retail-ready pack sizes." },
      { property: "og:url", content: "/small-packs" },
    ],
    links: [{ rel: "canonical", href: "/small-packs" }],
  }),
  component: () => <ProductRangeView range={RANGE} />,
});
