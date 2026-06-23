import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, FileText, ArrowRight } from "lucide-react";
import { Container } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { PRODUCTS, PRODUCT_CATEGORIES, type ProductCategory } from "@/lib/site-data";

export const Route = createFileRoute("/catalog/")({
  head: () => ({
    meta: [
      { title: "Product Catalog — Indigo Specialty Products" },
      {
        name: "description",
        content:
          "Browse the full Indigo Specialty Products catalog — herbicides, insecticides, fungicides, PGRs and more. Label, SDS and TechNote PDFs available for every product.",
      },
      { property: "og:title", content: "Product Catalog — Indigo Specialty Products" },
      {
        property: "og:description",
        content:
          "Search every Indigo Specialty product. Download Label, SDS and TechNote PDFs.",
      },
      { property: "og:url", content: "/catalog" },
    ],
    links: [{ rel: "canonical", href: "/catalog" }],
  }),
  component: CatalogIndex,
});

function CatalogIndex() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<ProductCategory | "All">("All");

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      if (cat !== "All" && p.category !== cat) return false;
      if (!needle) return true;
      return (
        p.name.toLowerCase().includes(needle) ||
        p.short.toLowerCase().includes(needle)
      );
    });
  }, [q, cat]);

  const tabs: (ProductCategory | "All")[] = ["All", ...PRODUCT_CATEGORIES];

  return (
    <>
      <PageHero
        eyebrow="Product catalog"
        title={<>Every Indigo Specialty product — Label, SDS &amp; TechNote.</>}
        subtitle="Search and download the technical documents for every product in our range. More categories are added as our portfolio grows."
      />
      <section className="pb-24">
        <Container>
          <Reveal>
            <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-4 shadow-elegant md:flex-row md:items-center">
              <div className="flex flex-1 items-center gap-3 rounded-2xl bg-background px-4 py-2.5">
                <Search className="size-4 text-muted-foreground" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search products by name or active ingredient…"
                  aria-label="Search catalog"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {tabs.map((t) => {
                  const count = t === "All" ? PRODUCTS.length : PRODUCTS.filter((p) => p.category === t).length;
                  const disabled = count === 0;
                  return (
                    <button
                      key={t}
                      type="button"
                      disabled={disabled}
                      onClick={() => setCat(t)}
                      className={[
                        "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                        cat === t
                          ? "bg-foreground text-background"
                          : disabled
                          ? "border border-border/60 text-muted-foreground/50 cursor-not-allowed"
                          : "border border-border text-muted-foreground hover:text-foreground",
                      ].join(" ")}
                    >
                      {t} {count > 0 && <span className="opacity-60">({count})</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <Reveal key={p.slug} delay={i * 30}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-[var(--brand-mid)]/50 hover:shadow-elegant">
                  <Link
                    to="/catalog/$slug"
                    params={{ slug: p.slug }}
                    className="block aspect-square overflow-hidden bg-[color-mix(in_oklab,var(--brand-mid)_6%,white)]"
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="size-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-mid)]">
                      {p.category}
                    </div>
                    <Link
                      to="/catalog/$slug"
                      params={{ slug: p.slug }}
                      className="text-base font-semibold leading-snug tracking-tight hover:text-[var(--brand-violet)]"
                    >
                      {p.name}
                    </Link>
                    <p className="text-sm text-muted-foreground">{p.short}</p>
                    <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
                      {p.docs.label && (
                        <DocChip href={p.docs.label} label="Label" />
                      )}
                      {p.docs.sds && <DocChip href={p.docs.sds} label="SDS" />}
                      {p.docs.technote && (
                        <DocChip href={p.docs.technote} label="TechNote" />
                      )}
                    </div>
                    <Link
                      to="/catalog/$slug"
                      params={{ slug: p.slug }}
                      className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--brand-mid)]"
                    >
                      View product
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
            {filtered.length === 0 && (
              <div className="col-span-full rounded-3xl border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
                No products match your search.
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}

function DocChip({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-semibold text-foreground hover:border-[var(--brand-mid)]/50 hover:text-[var(--brand-mid)]"
    >
      <FileText className="size-3" />
      {label}
    </a>
  );
}