import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Container, Eyebrow } from "./Container";
import { Reveal } from "./Reveal";
import { PRODUCT_RANGES, type ProductRange } from "@/lib/site-data";
import droplet from "@/assets/droplet.jpg";
import turf from "@/assets/turf.jpg";
import aquatics from "@/assets/aquatics.jpg";
import forestry from "@/assets/forestry.jpg";
import nursery from "@/assets/nursery.jpg";

const IMG = { droplet, turf, aquatics, forestry, nursery } as const;

export function ProductRangeView({ range }: { range: ProductRange }) {
  const related = PRODUCT_RANGES.filter((r) => r.slug !== range.slug).slice(0, 3);
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-44 md:pb-24">
        <div aria-hidden className="absolute inset-0 -z-20">
          <img src={IMG[range.image]} alt="" className="size-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-deep)]/85 to-background" />
        </div>
        <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-15" />
        <Container>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur">
              <span className="inline-block size-1.5 rounded-full bg-[var(--brand-accent)]" />
              {range.badge}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl">
              {range.name}
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 max-w-2xl text-pretty text-base text-white/80 md:text-lg">{range.tagline}</p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[var(--brand-deep)]"
              >
                Talk to our team
                <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/downloads"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur"
              >
                Labels & SDS
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <div>
                <Eyebrow>Overview</Eyebrow>
                <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight md:text-4xl">
                  {range.blurb}
                </h2>
                <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                  {range.description}
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="rounded-3xl border border-border bg-card p-6 shadow-elegant">
                <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Highlights</div>
                <ul className="mt-4 space-y-3">
                  {range.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 inline-flex size-5 items-center justify-center rounded-full bg-[var(--brand-mid)]/10 text-[var(--brand-mid)]">
                        <Check className="size-3" />
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
              Explore other ranges
            </h2>
            <Link to="/products" className="text-sm font-medium text-[var(--brand-mid)]">
              All products →
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                to={`/${r.slug}`}
                className="group overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-[var(--brand-mid)]/50"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={IMG[r.image]}
                    alt=""
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{r.badge}</div>
                  <div className="mt-2 text-lg font-semibold tracking-tight">{r.name}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{r.blurb}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}