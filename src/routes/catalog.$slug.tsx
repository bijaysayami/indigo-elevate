import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, FileText, Phone } from "lucide-react";
import { Container } from "@/components/site/Container";
import { Reveal } from "@/components/site/Reveal";
import { PRODUCTS, COMPANY } from "@/lib/site-data";

export const Route = createFileRoute("/catalog/$slug")({
  loader: ({ params }) => {
    const product = PRODUCTS.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    const title = p ? `${p.name} — Indigo Specialty Products` : "Product — Indigo Specialty Products";
    const desc = p?.short ?? "";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        ...(p?.image ? [{ property: "og:image", content: p.image }] : []),
      ],
    };
  },
  notFoundComponent: () => (
    <Container>
      <div className="py-32 text-center">
        <h1 className="text-2xl font-semibold">Product not found</h1>
        <Link to="/catalog" className="mt-4 inline-block text-sm text-[var(--brand-mid)]">← Back to catalog</Link>
      </div>
    </Container>
  ),
  errorComponent: ({ error, reset }) => (
    <Container>
      <div className="py-32 text-center">
        <h1 className="text-2xl font-semibold">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">{(error as Error).message}</p>
        <button onClick={reset} className="mt-4 text-sm text-[var(--brand-mid)]">Try again</button>
      </div>
    </Container>
  ),
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const related = PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <section className="pt-28 pb-12 md:pt-36">
        <Container>
          <Reveal>
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              Back to catalog
            </Link>
          </Reveal>

          <div className="mt-8 grid gap-10 md:grid-cols-[1fr_1.1fr] md:gap-14">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-border bg-[color-mix(in_oklab,var(--brand-mid)_6%,white)] p-8 shadow-elegant">
                <img src={product.image} alt={product.name} className="mx-auto aspect-square w-full max-w-md object-contain" />
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-mid)]">
                  {product.category} · {product.range}
                </div>
                <h1 className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                  {product.name}
                </h1>
                <p className="mt-4 text-pretty text-base text-muted-foreground md:text-lg">{product.short}</p>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground/85">
                  {product.description.map((para: string, i: number) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-border bg-card p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Downloads
                  </div>
                  <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {product.docs.label && <DocLink href={product.docs.label} label="Label / Leaflet" />}
                    {product.docs.sds && <DocLink href={product.docs.sds} label="Safety Data Sheet (SDS)" />}
                    {product.docs.technote && <DocLink href={product.docs.technote} label="Technical Note" />}
                    {product.docs.calibration && <DocLink href={product.docs.calibration} label="Calibration Guide" />}
                    {product.docs.usage && <DocLink href={product.docs.usage} label="Usage Card" />}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background"
                  >
                    Talk to our team
                  </Link>
                  <a
                    href={COMPANY.phoneHref}
                    className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold"
                  >
                    <Phone className="size-4" />
                    {COMPANY.phone}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {related.length > 0 && (
            <div className="mt-20">
              <h2 className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
                Other {product.category.toLowerCase()}
              </h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to="/catalog/$slug"
                    params={{ slug: r.slug }}
                    className="group overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-[var(--brand-mid)]/50"
                  >
                    <div className="aspect-square overflow-hidden bg-[color-mix(in_oklab,var(--brand-mid)_6%,white)]">
                      <img src={r.image} alt="" loading="lazy" className="size-full object-contain p-6 transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-5">
                      <div className="text-sm font-semibold tracking-tight">{r.name}</div>
                      <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{r.short}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}

function DocLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-between gap-3 rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition-all hover:border-[var(--brand-mid)]/50 hover:text-[var(--brand-mid)]"
    >
      <span className="inline-flex items-center gap-2">
        <FileText className="size-4" />
        {label}
      </span>
      <span aria-hidden className="text-xs text-muted-foreground">PDF ↗</span>
    </a>
  );
}