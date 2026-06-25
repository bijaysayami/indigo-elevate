import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Beaker, Droplets, Leaf, MapPin, Phone, Mail, Shield, Sparkles } from "lucide-react";
import { Container, Eyebrow } from "@/components/site/Container";
import { Reveal } from "@/components/site/Reveal";
import { COMPANY, MARKETS, NEWS, PRODUCT_RANGES } from "@/lib/site-data";
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
    document.body.classList.add("home-green-primary");
    return () => document.body.classList.remove("home-green-primary");
  }, []);

  return (
    <>
      <HeroSection />
      <MarketsStrip />
      <RangesSection />
      <ValuesSection />
      <NewsSection />
      <ContactCTA />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-20 md:pt-40 md:pb-32">
      <div aria-hidden className="absolute inset-0 -z-20">
        <img
          src={hero}
          alt=""
          className="size-full object-cover"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-deep)]/80 via-[var(--brand-deep)]/70 to-background" />
      </div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-20" />

      <Container>
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur">
            <span className="inline-block size-1.5 rounded-full bg-[var(--brand-accent)]" />
            Australian-manufactured · est. since the field
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-7xl">
            Plant protection,{" "}
            <span className="text-white">
              engineered for Australian conditions.
            </span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/80 md:text-lg">
            We manufacture and supply plant protection, nutrition, soil surfactants, biologicals and aquatic management — purpose-built for Australasian non-crop and specialty markets.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5"
            >
              Search all products
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Talk to our team
            </Link>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-16 grid max-w-3xl grid-cols-3 gap-4 md:gap-8">
            {[
              { k: "8", l: "Specialty ranges" },
              { k: "100%", l: "Australian formulated" },
              { k: "20+", l: "Years in market" },
            ].map((stat) => (
              <div key={stat.l} className="glass-dark rounded-2xl px-4 py-4 text-white">
                <div className="text-2xl font-semibold tracking-tight md:text-4xl">{stat.k}</div>
                <div className="mt-1 text-xs text-white/65 md:text-sm">{stat.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function MarketsStrip() {
  return (
    <section aria-label="Markets we serve" className="border-y border-border bg-secondary/40">
      <Container className="overflow-hidden py-6">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <span className="inline-block size-1.5 rounded-full bg-[var(--brand-mid)]" />
          Markets served
        </div>
        <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-foreground/80">
          {MARKETS.map((m) => (
            <span key={m} className="inline-flex items-center gap-2">
              <span className="inline-block size-1 rounded-full bg-foreground/30" /> {m}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}

function RangesSection() {
  return (
    <section id="products" className="relative py-24 md:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <Eyebrow>Products & market segments</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                Ranges built around the realities of Australian non-crop markets.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-secondary"
            >
              Browse all products
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCT_RANGES.map((r, i) => (
            <Reveal key={r.slug} delay={i * 60}>
              <Link
                to={`/${r.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-elegant transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-mid)]/50"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={IMG[r.image]}
                    alt=""
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-deep)]/70 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--brand-deep)] backdrop-blur">
                    {r.badge}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <h3 className="text-lg font-semibold tracking-tight">{r.name}</h3>
                  <p className="text-sm text-muted-foreground">{r.blurb}</p>
                  <div className="mt-auto pt-4 text-sm font-medium text-[var(--brand-mid)]">
                    Explore range
                    <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">→</span>
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

function ValuesSection() {
  const values = [
    {
      icon: MapPin,
      title: "Australian",
      body: "Formulated and manufactured in Australia, supporting local industry and supply chains.",
    },
    {
      icon: Leaf,
      title: "Local",
      body: "Developed and researched for Australian soils, climate and pressure profiles.",
    },
    {
      icon: Sparkles,
      title: "Specialised",
      body: "Focused exclusively on specialty non-crop markets, not consumer-grade compromise.",
    },
  ];
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden className="absolute inset-0 -z-10 bg-[var(--brand-deep)]" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-[0.08]" />
      <div aria-hidden className="absolute -top-40 left-1/2 -z-10 size-[600px] -translate-x-1/2 rounded-full bg-[var(--brand-accent)]/15 blur-3xl" />
      <Container>
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/70">
            <span className="inline-block size-1.5 rounded-full bg-[var(--brand-accent)]" />
            What makes us different
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Three things that make our products special.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 100}>
              <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-colors hover:bg-white/[0.07]">
                <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-[var(--brand-accent)]/15 text-[var(--brand-accent)]">
                  <v.icon className="size-5" aria-hidden />
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function NewsSection() {
  const items = NEWS.slice(0, 6);
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
              className="group inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-secondary"
            >
              View all
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((n, i) => (
            <Reveal key={n.slug} delay={i * 60}>
              <article className="group h-full overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-[var(--brand-mid)]/50 hover:shadow-elegant">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={IMG[n.image]}
                    alt=""
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-3 p-6">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    <span>{n.category}</span>
                    <span className="size-1 rounded-full bg-muted-foreground/50" />
                    <time dateTime={n.date}>
                      {new Date(n.date).toLocaleDateString("en-AU", { month: "short", year: "numeric" })}
                    </time>
                  </div>
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
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 md:p-14">
            <div aria-hidden className="absolute -right-24 -top-24 size-[420px] rounded-full bg-[var(--brand-accent)]/15 blur-3xl" />
            <div aria-hidden className="absolute -bottom-32 -left-24 size-[420px] rounded-full bg-[var(--brand-mid)]/15 blur-3xl" />
            <div className="relative grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center">
              <div>
                <Eyebrow>Contact us</Eyebrow>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                  Questions, orders, or technical advice — we’re here.
                </h2>
                <p className="mt-4 max-w-xl text-muted-foreground">
                  Reach out and our team will respond as soon as we can. For orders, email{" "}
                  <a href={`mailto:${COMPANY.ordersEmail}`} className="text-foreground underline underline-offset-4">
                    {COMPANY.ordersEmail}
                  </a>
                  .
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={COMPANY.phoneHref}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
                  >
                    <Phone className="size-4" /> Call or text {COMPANY.phone}
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold"
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
    <div className="flex items-start gap-3 rounded-2xl border border-border bg-background/60 p-4">
      <div className="inline-flex size-10 items-center justify-center rounded-xl bg-[var(--brand-mid)]/10 text-[var(--brand-mid)]">
        <Icon className="size-4" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{title}</div>
        <div className="text-sm font-medium">{body}</div>
      </div>
    </div>
  );
}
