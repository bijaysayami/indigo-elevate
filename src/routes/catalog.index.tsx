import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Container } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { PRODUCTS } from "@/lib/site-data";

export const Route = createFileRoute("/catalog/")({
  head: () => ({
    meta: [
      { title: "ProForce Herbicide Portfolio — Indigo Specialty Products" },
      {
        name: "description",
        content:
          "Browse the ProForce herbicide portfolio. Download Label, SDS and TechNote PDFs for every herbicide in the Indigo Specialty Products range.",
      },
      { property: "og:title", content: "ProForce Herbicide Portfolio — Indigo Specialty Products" },
      {
        property: "og:description",
        content:
          "Pre-emergent, post-emergent and selective herbicides for turf, IVM and non-crop use. Label, SDS and TechNote PDFs for every product.",
      },
      { property: "og:url", content: "/catalog" },
    ],
    links: [{ rel: "canonical", href: "/catalog" }],
  }),
  component: HerbicideListing,
});

function HerbicideListing() {
  const [q, setQ] = useState("");

  const herbicides = useMemo(
    () => PRODUCTS.filter((p) => p.category === "Herbicides"),
    [],
  );

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return herbicides;
    return herbicides.filter(
      (p) =>
        p.name.toLowerCase().includes(needle) ||
        p.short.toLowerCase().includes(needle) ||
        p.description.some((d) => d.toLowerCase().includes(needle)),
    );
  }, [q, herbicides]);

  return (
    <>
      <PageHero
        eyebrow="Product portfolio"
        title={<>ProForce Herbicide Portfolio</>}
        subtitle={`${herbicides.length} herbicides for turf, IVM and non-crop use — each with Label, SDS and TechNote downloads.`}
      />
      <section className="pb-24">
        <Container>
          <Reveal>
            <div className="mx-auto flex max-w-xl items-center gap-3 rounded-2xl border border-border bg-card px-4 py-2.5 shadow-elegant">
              <Search className="size-4 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search herbicides by name or active ingredient…"
                aria-label="Search herbicides"
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((p, i) => (
              <Reveal key={p.slug} delay={i * 20}>
                <ProductCard product={p} />
              </Reveal>
            ))}
            {filtered.length === 0 && (
              <div className="col-span-full rounded-3xl border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
                No herbicides match your search.
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}

function ProductCard({ product }: { product: (typeof PRODUCTS)[number] }) {
  const [expanded, setExpanded] = useState(false);
  const body = product.description.join(" ") || product.short;

  return (
    <article className="flex h-full flex-col">
      <Link
        to="/catalog/$slug"
        params={{ slug: product.slug }}
        className="group block aspect-square overflow-hidden rounded-2xl bg-white p-6 ring-1 ring-border transition-all hover:ring-[var(--brand-mid)]/50"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="size-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </Link>

      <Link
        to="/catalog/$slug"
        params={{ slug: product.slug }}
        className="mt-5 text-lg font-bold leading-snug tracking-tight text-foreground hover:text-[var(--brand-violet)]"
      >
        {product.name}
      </Link>

      <p
        className={[
          "mt-3 text-sm leading-relaxed text-muted-foreground",
          expanded ? "" : "line-clamp-5",
        ].join(" ")}
      >
        {body}
      </p>
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="mt-2 self-start text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-mid)] hover:text-[var(--brand-violet)]"
      >
        {expanded ? "Show Less" : "Show More"}
      </button>

      <div className="mt-5 flex flex-wrap gap-2">
        {product.docs.label && (
          <DocButton href={product.docs.label} variant="violet">
            LABEL
          </DocButton>
        )}
        {product.docs.sds && (
          <DocButton href={product.docs.sds} variant="leaf">
            SDS
          </DocButton>
        )}
        {product.docs.technote && (
          <DocButton href={product.docs.technote} variant="violet">
            TECHNOTE
          </DocButton>
        )}
      </div>
    </article>
  );
}

function DocButton({
  href,
  variant,
  children,
}: {
  href: string;
  variant: "violet" | "leaf";
  children: React.ReactNode;
}) {
  const cls =
    variant === "violet"
      ? "bg-gradient-to-br from-[var(--brand-violet)] to-[var(--brand-deep)] hover:shadow-[0_8px_20px_-8px_var(--brand-violet)]"
      : "bg-gradient-to-br from-[var(--brand-leaf)] to-[var(--brand-mid)] hover:shadow-[0_8px_20px_-8px_var(--brand-leaf)]";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "inline-flex items-center justify-center rounded-lg px-4 py-2 text-[11px] font-bold tracking-[0.12em] text-white transition-all hover:-translate-y-0.5",
        cls,
      ].join(" ")}
    >
      {children}
    </a>
  );
}