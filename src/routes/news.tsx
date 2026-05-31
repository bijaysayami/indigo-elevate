import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { NEWS } from "@/lib/site-data";
import droplet from "@/assets/droplet.jpg";
import turf from "@/assets/turf.jpg";
import aquatics from "@/assets/aquatics.jpg";
import forestry from "@/assets/forestry.jpg";
import nursery from "@/assets/nursery.jpg";

const IMG = { droplet, turf, aquatics, forestry, nursery } as const;

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News, Newsletters & Customer Stories — Indigo Specialty Products" },
      {
        name: "description",
        content:
          "Product releases, seasonal newsletters, and customer testimonials from across the Indigo Specialty Products network.",
      },
      { property: "og:title", content: "News & insights — Indigo Specialty Products" },
      {
        property: "og:description",
        content: "Product releases, newsletters and customer stories from Indigo Specialty Products.",
      },
      { property: "og:url", content: "/news" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: NewsPage,
});

function NewsPage() {
  const [feature, ...rest] = NEWS;
  return (
    <>
      <PageHero
        eyebrow="News & insights"
        title="Updates, research and customer stories from the field."
        subtitle="Newsletters, product releases, technical notes and testimonials from across the Indigo Specialty network."
      />
      <section className="pb-24">
        <Container>
          <Reveal>
            <article className="group grid overflow-hidden rounded-3xl border border-border bg-card md:grid-cols-2">
              <div className="aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[420px]">
                <img src={IMG[feature.image]} alt="" loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  <span>Featured</span>
                  <span className="size-1 rounded-full bg-muted-foreground/50" />
                  <span>{feature.category}</span>
                </div>
                <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight md:text-4xl">{feature.title}</h2>
                <p className="mt-4 text-muted-foreground">{feature.excerpt}</p>
              </div>
            </article>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((n, i) => (
              <Reveal key={n.slug} delay={i * 50}>
                <article className="group h-full overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-[var(--brand-mid)]/50">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={IMG[n.image]} alt="" loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
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
    </>
  );
}