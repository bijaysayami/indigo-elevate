import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Container } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { NEWS } from "@/lib/site-data";
import droplet from "@/assets/droplet.jpg";
import turf from "@/assets/turf.jpg";
import aquatics from "@/assets/aquatics.jpg";
import forestry from "@/assets/forestry.jpg";
import nursery from "@/assets/nursery.jpg";

const IMG: Record<string, string> = { droplet, turf, aquatics, forestry, nursery };

export const Route = createFileRoute("/news/$slug")({
  head: ({ params }) => {
    const item = NEWS.find((n) => n.slug === params.slug);
    const title = item ? `${item.title} — Indigo Specialty Products` : "News — Indigo Specialty Products";
    const description = item?.excerpt ?? "News from Indigo Specialty Products.";
    const image = item ? IMG[item.image] : undefined;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(image ? [{ property: "og:image", content: image }, { name: "twitter:image", content: image }] : []),
      ],
      links: [{ rel: "canonical", href: `/news/${params.slug}` }],
    };
  },
  loader: ({ params }) => {
    const item = NEWS.find((n) => n.slug === params.slug);
    if (!item) throw notFound();
    return { item };
  },
  notFoundComponent: () => (
    <section className="pt-40 pb-24">
      <Container>
        <Eyebrow>Not found</Eyebrow>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">We couldn’t find that story.</h1>
        <p className="mt-4 text-muted-foreground">It may have moved or been retired.</p>
        <Link to="/news" className="mt-6 inline-block text-[var(--brand-mid)] underline-offset-4 hover:underline">
          ← Back to all news
        </Link>
      </Container>
    </section>
  ),
  errorComponent: ({ reset }) => (
    <section className="pt-40 pb-24">
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">Something went wrong.</h1>
        <button onClick={() => reset()} className="mt-6 inline-block text-[var(--brand-mid)] underline-offset-4 hover:underline">
          Try again
        </button>
      </Container>
    </section>
  ),
  component: NewsDetailPage,
});

function NewsDetailPage() {
  const { item } = Route.useLoaderData();
  const related = NEWS.filter((n) => n.slug !== item.slug).slice(0, 3);
  const dateLabel = new Date(item.date).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <PageHero
        eyebrow={item.category}
        title={item.title}
        subtitle={item.excerpt}
      />
      <section className="pb-24">
        <Container>
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border bg-card">
              <img
                src={IMG[item.image]}
                alt=""
                loading="lazy"
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={80}>
            <article className="mx-auto mt-12 max-w-3xl">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                <span>{item.category}</span>
                <span className="size-1 rounded-full bg-muted-foreground/50" />
                <time dateTime={item.date}>{dateLabel}</time>
              </div>
              <div className="prose prose-neutral mt-6 max-w-none text-base leading-relaxed text-foreground/90 md:text-lg">
                <p>{item.excerpt}</p>
                <p>
                  For more detail on this update, get in touch with the Indigo
                  Specialty Products team — we’re happy to share trial data,
                  application guidance, and stocking information for your region.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/news"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium hover:border-[var(--brand-mid)]/50"
                >
                  ← All news
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-mid)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
                >
                  Contact us
                </Link>
              </div>
            </article>
          </Reveal>

          {related.length ? (
            <div className="mt-20">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">More from the newsroom</h2>
              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((n, i) => (
                  <Reveal key={n.slug} delay={i * 50}>
                    <Link
                      to="/news/$slug"
                      params={{ slug: n.slug }}
                      className="group block h-full overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-[var(--brand-mid)]/50"
                    >
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
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          ) : null}
        </Container>
      </section>
    </>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
      <span className="inline-block size-1.5 rounded-full bg-[var(--brand-mid)]" />
      {children}
    </span>
  );
}