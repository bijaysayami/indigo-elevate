import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Leaf,
  MapPin,
  Phone,
  Mail,
  Sparkles,
  ShieldCheck,
  FlaskConical,
  Sprout,
  Droplets,
  TreePine,
  Bug,
  Fish,
  Home as HomeIcon,
  Quote,
} from "lucide-react";
import { Container, Eyebrow } from "@/components/site/Container";
import { Reveal } from "@/components/site/Reveal";
import { COMPANY, NEWS, PRODUCT_RANGES, PRODUCTS, TESTIMONIALS } from "@/lib/site-data";
import hero from "@/assets/hero.jpg";
import droplet from "@/assets/droplet.jpg";
import turf from "@/assets/turf.jpg";
import aquatics from "@/assets/aquatics.jpg";
import forestry from "@/assets/forestry.jpg";
import nursery from "@/assets/nursery.jpg";

const IMG = { droplet, turf, aquatics, forestry, nursery } as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Indigo Specialty Products — Plant protection, made in Australia" },
      {
        name: "description",
        content:
          "Australian-manufactured plant protection, nutrition, soil surfactants, biologicals and aquatic management — engineered for non-crop specialty markets.",
      },
      { property: "og:title", content: "Indigo Specialty Products" },
      {
        property: "og:description",
        content:
          "Plant protection, nutrition, soil surfactants, biologicals and aquatic management — engineered in Australia for specialty markets.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  useEffect(() => {
    document.body.classList.add("home-all-green");
    return () => document.body.classList.remove("home-all-green");
  }, []);

  return (
    <>
      <HeroSection />
      <MarqueeMarkets />
      <RangesSection />
      <FeaturedProductsSection />
      <ValuesSection />
      <TestimonialsSection />
      <MapSection />
      <NewsSection />
      <ContactCTA />
    </>
  );
}

function HeroSection() {
  const bgRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 800);
        el.style.transform = `translate3d(0, ${y * 0.25}px, 0) scale(1.08)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-24 md:pt-40 md:pb-36">
      <div aria-hidden ref={bgRef} className="absolute inset-0 -z-20 will-change-transform">
        <img
          src={hero}
          alt=""
          className="size-full object-cover"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
      </div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-[oklch(0.20_0.08_150)]/85 via-[oklch(0.25_0.10_148)]/70 to-background" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-15" />
      <div aria-hidden className="absolute -top-40 left-1/3 -z-10 size-[600px] rounded-full bg-[var(--brand-accent)]/25 blur-[120px]" />

      <Container>
        <div className="grid gap-12 md:grid-cols-[1.15fr_1fr] md:items-center">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/85 backdrop-blur">
                <span className="inline-block size-1.5 rounded-full bg-[var(--brand-accent)]" />
                TRUSTED AGRICULTURAL SOLUTIONS PARTNER IN AUSTRALIA
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.03] tracking-tight text-white md:text-6xl lg:text-7xl">
                Plant protection,{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">grown</span>
                  <span aria-hidden className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-[var(--brand-accent)]/60 md:h-4" />
                </span>{" "}
                for Australian conditions.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/85 md:text-lg">
                We manufacture and supply plant protection, nutrition, soil surfactants, biologicals and aquatic management — purpose‑built for Australasian non‑crop and specialty markets.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  to="/products"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[oklch(0.28_0.08_150)] shadow-elegant transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-10px_oklch(0.78_0.19_135_/_.6)]"
                >
                  Search all products
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
                >
                  Talk to our team
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={280}>
            <div className="relative">
              <div aria-hidden className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-[var(--brand-accent)]/40 to-transparent blur-2xl" />
              <div className="relative grid gap-4 rounded-[2rem] border border-white/15 bg-white/[0.06] p-6 backdrop-blur-xl md:p-8">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/70">
                  <span className="inline-block size-1.5 rounded-full bg-[var(--brand-accent)]" />
                  By the numbers
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { k: "8", l: "Specialty ranges" },
                    { k: "100%", l: "AU formulated" },
                    { k: "20+", l: "Years in market" },
                  ].map((s) => (
                    <div key={s.l} className="rounded-2xl border border-white/10 bg-black/25 p-4">
                      <div className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{s.k}</div>
                      <div className="mt-1 text-[11px] text-white/70 md:text-xs">{s.l}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-2 grid grid-cols-2 gap-3">
                  {[
                    { i: Leaf, t: "Locally researched" },
                    { i: ShieldCheck, t: "APVMA registered" },
                    { i: FlaskConical, t: "Purpose formulated" },
                    { i: Sprout, t: "Specialty focused" },
                  ].map(({ i: Icon, t }) => (
                    <div key={t} className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white/85">
                      <span className="inline-flex size-7 items-center justify-center rounded-lg bg-[var(--brand-accent)]/25 text-[var(--brand-glow)]">
                        <Icon className="size-3.5" />
                      </span>
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function MarqueeMarkets() {
  const items = [
    { i: TreePine, t: "Forestry" },
    { i: Sprout, t: "Amenity Turf" },
    { i: Leaf, t: "Nursery Production" },
    { i: Fish, t: "Aquatic Management" },
    { i: Bug, t: "Pest Control" },
    { i: HomeIcon, t: "Home Garden" },
    { i: Droplets, t: "Soil & Water" },
    { i: ShieldCheck, t: "IVM" },
  ];
  const loop = [...items, ...items];
  return (
    <section aria-label="Markets we serve" className="relative border-y border-border/70 bg-[color:var(--muted)]/50 py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="overflow-hidden">
        <div className="flex min-w-max animate-[marquee_38s_linear_infinite] gap-10 whitespace-nowrap px-6 text-sm font-medium text-muted-foreground">
          {loop.map(({ i: Icon, t }, idx) => (
            <div key={`${t}-${idx}`} className="inline-flex items-center gap-2.5">
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-[var(--brand-accent)]/15 text-[oklch(0.35_0.12_148)]">
                <Icon className="size-4" />
              </span>
              <span className="uppercase tracking-[0.14em]">{t}</span>
              <span aria-hidden className="ml-8 size-1 rounded-full bg-border" />
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </section>
  );
}

function RangesSection() {
  return (
    <section id="products" className="relative py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-radial-fade opacity-60" />
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <Eyebrow>Products & market segments</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                Ranges built around the realities of Australian non‑crop markets.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary"
            >
              Browse all products
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCT_RANGES.map((r, i) => (
            <Reveal key={r.slug} delay={i * 50}>
              <Link
                to={`/${r.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--brand-mid)]/60 hover:shadow-elegant"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={IMG[r.image]}
                    alt=""
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.20_0.08_150)]/85 via-[oklch(0.20_0.08_150)]/20 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[oklch(0.28_0.08_150)] backdrop-blur">
                    {r.badge}
                  </span>
                  <div className="absolute inset-x-4 bottom-4">
                    <h3 className="text-lg font-semibold tracking-tight text-white">{r.name}</h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <p className="text-sm leading-relaxed text-muted-foreground">{r.blurb}</p>
                  <div className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-[oklch(0.42_0.14_145)]">
                    Explore range
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FeaturedProductsSection() {
  const featured = PRODUCTS.slice(0, 6);
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden className="absolute inset-0 -z-10 bg-[color:var(--muted)]/40" />
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <Eyebrow>Featured products</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                Trusted formulations, ready for the field.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-secondary"
            >
              View catalog
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <Link
                to="/catalog/$slug"
                params={{ slug: p.slug }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--brand-mid)]/60 hover:shadow-elegant"
              >
                <div aria-hidden className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[var(--brand-accent)] via-[var(--brand-mid)] to-[var(--brand-accent)] transition-transform duration-500 group-hover:scale-x-100" />
                <div className="flex items-start gap-4">
                  <div className="relative flex size-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border bg-[color:var(--muted)]/60">
                    <img
                      src={p.image}
                      alt=""
                      loading="lazy"
                      className="max-h-[85%] max-w-[85%] object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[oklch(0.42_0.14_145)]">
                      {p.range} · {p.category}
                    </div>
                    <div className="mt-1.5 line-clamp-2 text-base font-semibold tracking-tight">{p.name}</div>
                  </div>
                </div>
                <p className="mt-5 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{p.short}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[oklch(0.35_0.12_148)]">
                  View product
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ValuesSection() {
  const values = [
    { icon: MapPin, title: "Australian", body: "Formulated and manufactured in Australia, supporting local industry and supply chains." },
    { icon: Leaf, title: "Local", body: "Developed and researched for Australian soils, climate and pressure profiles." },
    { icon: Sparkles, title: "Specialised", body: "Focused exclusively on specialty non‑crop markets, not consumer‑grade compromise." },
  ];
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-[oklch(0.22_0.09_150)] via-[oklch(0.28_0.11_145)] to-[oklch(0.20_0.08_150)]" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-[0.12]" />
      <div aria-hidden className="absolute -top-40 right-1/4 -z-10 size-[520px] rounded-full bg-[var(--brand-accent)]/25 blur-[120px]" />
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur">
              <span className="inline-block size-1.5 rounded-full bg-[var(--brand-accent)]" />
              What makes us different
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Three things that make our products special.
            </h2>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 100}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[var(--brand-accent)]/40 hover:bg-white/[0.07]">
                <div aria-hidden className="absolute -right-8 -top-8 size-40 rounded-full bg-[var(--brand-accent)]/10 blur-2xl transition-opacity duration-500 group-hover:opacity-70" />
                <div className="relative inline-flex size-12 items-center justify-center rounded-2xl bg-[var(--brand-accent)]/20 text-[var(--brand-glow)] ring-1 ring-inset ring-white/10">
                  <v.icon className="size-5" aria-hidden />
                </div>
                <div className="relative mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-glow)]">
                  0{i + 1}
                </div>
                <h3 className="relative mt-2 text-2xl font-semibold tracking-tight text-white">{v.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-white/75">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function TestimonialsSection() {
  const items = TESTIMONIALS.slice(0, 6);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setActive((a) => (a + 1) % items.length), 6000);
    return () => window.clearInterval(id);
  }, [items.length]);
  const t = items[active];
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1fr_1.3fr] md:items-center">
          <div>
            <Reveal>
              <Eyebrow>In the field</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                Results our customers can measure.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 max-w-md text-muted-foreground">
                Superintendents, agronomists and vegetation managers across Australia use our formulations every day.
              </p>
            </Reveal>
            <div className="mt-8 flex items-center gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${i === active ? "w-8 bg-[oklch(0.42_0.14_145)]" : "w-3 bg-border hover:bg-[oklch(0.55_0.16_142)]/60"}`}
                />
              ))}
            </div>
          </div>
          <Reveal delay={120}>
            <figure
              key={active}
              className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-elegant animate-fade-in md:p-12"
            >
              <Quote aria-hidden className="absolute right-8 top-8 size-16 text-[var(--brand-accent)]/25" />
              <blockquote className="relative text-lg leading-relaxed text-foreground md:text-xl">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-border/70 pt-6">
                <div className="inline-flex size-11 items-center justify-center rounded-full bg-[var(--brand-accent)]/20 text-sm font-semibold text-[oklch(0.28_0.08_150)]">
                  {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {t.role} · <span className="text-[oklch(0.35_0.12_148)]">{t.product}</span>
                  </div>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function MapSection() {
  const locations = [
    { name: "Rocklea (HQ)", state: "QLD", top: "58%", left: "78%" },
    { name: "Sydney", state: "NSW", top: "72%", left: "82%" },
    { name: "Melbourne", state: "VIC", top: "84%", left: "72%" },
    { name: "Adelaide", state: "SA", top: "78%", left: "58%" },
    { name: "Perth", state: "WA", top: "70%", left: "18%" },
    { name: "Darwin", state: "NT", top: "22%", left: "48%" },
  ];
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-center">
          <div>
            <Reveal>
              <Eyebrow>National coverage</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                Delivered across Australia.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 max-w-md text-muted-foreground">
                Manufactured in Queensland and shipped nationwide — with local technical support in every major growing region.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <ul className="mt-8 grid grid-cols-2 gap-3 text-sm">
                {locations.map((l) => (
                  <li key={l.name} className="flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2">
                    <span className="inline-block size-2 rounded-full bg-[oklch(0.55_0.16_142)] shadow-[0_0_0_4px_oklch(0.55_0.16_142_/_0.15)]" />
                    <span className="font-medium">{l.name}</span>
                    <span className="ml-auto text-xs text-muted-foreground">{l.state}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-[oklch(0.96_0.03_140)] to-[oklch(0.92_0.06_140)] p-6 shadow-elegant">
              <svg
                viewBox="0 0 500 400"
                className="absolute inset-0 size-full"
                aria-label="Map of Australia showing coverage points"
              >
                <defs>
                  <linearGradient id="auFill" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="oklch(0.55 0.16 142)" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="oklch(0.32 0.09 150)" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                <path
                  d="M90,180 C80,150 100,110 140,105 C170,80 220,75 260,90 C300,80 350,90 380,110 C420,115 445,155 435,195 C450,225 435,265 405,285 C395,320 355,340 315,335 C280,350 235,345 210,320 C175,325 135,310 115,285 C85,275 75,235 90,205 Z"
                  fill="url(#auFill)"
                  stroke="oklch(0.42 0.14 145)"
                  strokeWidth="1.5"
                />
              </svg>
              {locations.map((l, i) => (
                <div
                  key={l.name}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ top: l.top, left: l.left, animationDelay: `${i * 250}ms` }}
                >
                  <span className="relative flex size-3">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-[oklch(0.55_0.16_142)] opacity-60" />
                    <span className="relative inline-flex size-3 rounded-full bg-[oklch(0.35_0.12_148)] ring-2 ring-white" />
                  </span>
                  <div className="mt-1.5 -translate-x-1/2 whitespace-nowrap rounded-md bg-white/90 px-1.5 py-0.5 text-[10px] font-semibold text-[oklch(0.28_0.08_150)] shadow-sm">
                    {l.name}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function NewsSection() {
  const items = NEWS.slice(0, 3);
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <Eyebrow>From the field</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 max-w-xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                Latest news, product releases and customer stories.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <Link
              to="/news"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-secondary"
            >
              View all
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {items.map((n, i) => (
            <Reveal key={n.slug} delay={i * 80}>
              <article className="group h-full overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-[var(--brand-mid)]/50 hover:shadow-elegant">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={IMG[n.image]}
                    alt=""
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[oklch(0.28_0.08_150)]">
                    {n.category}
                  </span>
                </div>
                <div className="flex flex-col gap-3 p-6">
                  <time className="text-xs uppercase tracking-[0.16em] text-muted-foreground" dateTime={n.date}>
                    {new Date(n.date).toLocaleDateString("en-AU", { month: "short", day: "numeric", year: "numeric" })}
                  </time>
                  <h3 className="text-lg font-semibold leading-snug tracking-tight">{n.title}</h3>
                  <p className="text-sm text-muted-foreground">{n.excerpt}</p>
                </div>
              </article>
            </Reveal>
          ))}
          </div>
      </Container>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="pb-24 md:pb-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[oklch(0.28_0.11_148)] via-[oklch(0.34_0.13_145)] to-[oklch(0.22_0.09_150)] p-8 md:p-14">
            <div aria-hidden className="absolute -right-24 -top-24 size-[420px] rounded-full bg-[var(--brand-accent)]/25 blur-3xl" />
            <div aria-hidden className="absolute -bottom-32 -left-24 size-[420px] rounded-full bg-[var(--brand-glow)]/20 blur-3xl" />
            <div aria-hidden className="absolute inset-0 bg-grid opacity-10" />
            <div className="relative grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur">
                  <span className="inline-block size-1.5 rounded-full bg-[var(--brand-accent)]" />
                  Contact us
                </div>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
                  Questions, orders, or technical advice — we’re here.
                </h2>
                <p className="mt-4 max-w-xl text-white/80">
                  Reach out and our team will respond as soon as we can. For orders, email{" "}
                  <a href={`mailto:${COMPANY.ordersEmail}`} className="text-white underline underline-offset-4">
                    {COMPANY.ordersEmail}
                  </a>
                  .
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={COMPANY.phoneHref}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[oklch(0.28_0.08_150)] transition-transform hover:-translate-y-0.5"
                  >
                    <Phone className="size-4" /> Call or text {COMPANY.phone}
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/10"
                  >
                    <Mail className="size-4" /> Send a message
                  </Link>
                </div>
              </div>
              <div className="grid gap-3">
                <InfoTile icon={MapPin} title="Address" body={COMPANY.address} />
                <InfoTile icon={Phone} title="Phone" body={COMPANY.phone} />
                <InfoTile icon={Mail} title="Email" body={COMPANY.email} />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function InfoTile({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur">
      <div className="inline-flex size-10 items-center justify-center rounded-xl bg-[var(--brand-accent)]/25 text-[var(--brand-glow)]">
        <Icon className="size-4" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-[0.16em] text-white/70">{title}</div>
        <div className="text-sm font-medium text-white">{body}</div>
      </div>
    </div>
  );
}
