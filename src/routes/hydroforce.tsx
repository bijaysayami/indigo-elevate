import { createFileRoute } from "@tanstack/react-router";
import { ProductRangeView } from "@/components/site/ProductRangeView";
import { PRODUCT_RANGES } from "@/lib/site-data";

const RANGE = PRODUCT_RANGES.find((r) => r.slug === "hydroforce")!;

export const Route = createFileRoute("/hydroforce")({
  head: () => ({
    meta: [
      { title: "HydroForce — Indigo Specialty Products" },
      { name: "description", content: "Premium soil surfactants developed and researched for Australian growing conditions." },
      { property: "og:title", content: "HydroForce — Indigo Specialty Products" },
      { property: "og:description", content: "Premium soil surfactants developed and researched for Australian growing conditions." },
      { property: "og:url", content: "/hydroforce" },
    ],
    links: [{ rel: "canonical", href: "/hydroforce" }],
  }),
  component: () => <ProductRangeView range={RANGE} />,
});
