import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { Container } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { PRODUCT_RANGES } from "@/lib/site-data";
import droplet from "@/assets/droplet.jpg";
import turf from "@/assets/turf.jpg";
import aquatics from "@/assets/aquatics.jpg";
import forestry from "@/assets/forestry.jpg";
import nursery from "@/assets/nursery.jpg";

const IMG = { droplet, turf, aquatics, forestry, nursery } as const;

export const Route = createFileRoute("/products")({
  validateSearch: (search: Record<string, unknown>) => ({
    q: typeof search.q === "string" ? search.q : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Products & Ranges — Indigo Specialty Products" },
      {
        name: "description",
        content:
          "Browse Indigo Specialty Products ranges: ProForce, HydroForce, NutriForce Duracote, BioForce, IVM, Aquatic Management, Small Packs and Turf Production.",
      },
      { property: "og:title", content: "Products & Ranges — Indigo Specialty Products" },
      {
        property: "og:description",
        content:
          "Browse all Indigo Specialty Products ranges across plant protection, nutrition, biologicals and aquatic management.",
      },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

const FILTERS = ["All", "Turf", "IVM", "Soil & water", "Biologicals", "Nutrition", "Aquatics", "Consumer", "Flagship"] as const;

function ProductsPage() {
  const { q: initialQ } = Route.useSearch();
  const [q, setQ] = useState(initialQ ?? "");
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  useEffect(() => {
    if (typeof initialQ === "string") setQ(initialQ);
  }, [initialQ]);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return PRODUCT_RANGES.filter((p) => {
      if (filter !== "All" && p.badge !== filter) return false;
      if (!needle) return true;
      return (
        p.name.toLowerCase().includes(needle) ||
        p.tagline.toLowerCase().includes(needle) ||
        p.blurb.toLowerCase().includes(needle)
      );
    });
  }, [q, filter]);

  return (
    <>
      <PageHero
        eyebrow="All products"
        title={<>Search the full Indigo Specialty range.</>}
        subtitle="Eight specialty ranges across plant protection, nutrition, biologicals, soil & water, and aquatics — all engineered for Australian conditions."
      />
      <section className="pb-4">
        <Container>
          <Reveal>
            <Link
              to="/catalog"
              className="group inline-flex items-center justify-between gap-4 rounded-2xl border border-[var(--brand-mid)]/30 bg-[color-mix(in_oklab,var(--brand-mid)_5%,white)] px-5 py-4 text-sm transition-all hover:border-[var(--brand-mid)]/60 hover:shadow-elegant"
            >
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-mid)]">ProForce Herbicide Portfolio</span>
                <span className="mt-0.5 block font-semibold text-foreground">Browse every herbicide with Label, SDS &amp; TechNote PDFs →</span>
              </span>
              <ArrowRight className="size-4 text-[var(--brand-mid)] transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </Container>
      </section>
      <section className="pb-24">
        <Container>
          <Reveal>
            <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-4 shadow-elegant md:flex-row md:items-center">
              <div className="flex flex-1 items-center gap-3 rounded-2xl bg-background px-4 py-2.5">
                <Search className="size-4 text-muted-foreground" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search ranges, markets, applications…"
                  aria-label="Search products"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {FILTERS.map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFilter(f)}
                    className={[
                      "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                      filter === f
                        ? "bg-foreground text-background"
                        : "border border-border text-muted-foreground hover:text-foreground",
                    ].join(" ")}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((r, i) => (
              <Reveal key={r.slug} delay={i * 50}>
                <Link
                  to={`/${r.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-[var(--brand-mid)]/50 hover:shadow-elegant"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={IMG[r.image]} alt="" loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--brand-deep)]">{r.badge}</span>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <h2 className="text-lg font-semibold tracking-tight">{r.name}</h2>
                    <p className="text-sm text-muted-foreground">{r.blurb}</p>
                    <div className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--brand-mid)]">
                      Explore range
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
            {filtered.length === 0 && (
              <div className="col-span-full rounded-3xl border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
                No ranges match that search. Try a different keyword or clear the filter.
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}