import { createFileRoute } from "@tanstack/react-router";
import { Quote, Star } from "lucide-react";
import { Container } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { TESTIMONIALS } from "@/lib/site-data";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Customer Testimonials — Indigo Specialty Products" },
      {
        name: "description",
        content:
          "What turf managers, agronomists and vegetation specialists across Australia say about Indigo Specialty Products.",
      },
      { property: "og:title", content: "Customer Testimonials — Indigo Specialty Products" },
      { property: "og:description", content: "Real stories from the people who use our products every day." },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: TestimonialsPage,
});

function initials(name: string) {
  return name.split(/\s+/).map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Real results, in our customers' words."
        subtitle="From golf courses and sports fields to vegetation management programs across Australia."
      />
      <section className="pb-24">
        <Container>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={`${t.name}-${i}`} delay={i * 40}>
                <article className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-6 shadow-elegant transition-all hover:-translate-y-1 hover:border-[var(--brand-mid)]/40 md:p-7">
                  <div className="flex items-center justify-between">
                    <Quote className="size-7 text-[var(--brand-mid)]/40" />
                    <div className="flex items-center gap-0.5 text-[var(--brand-accent)]">
                      {Array.from({ length: 5 }).map((_, k) => (
                        <Star key={k} className="size-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-base leading-relaxed text-foreground/90">“{t.quote}”</p>
                  <div className="mt-auto flex items-center gap-3 border-t border-border/60 pt-4">
                    <div className="inline-flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--brand-deep)] to-[var(--brand-mid)] text-sm font-semibold text-white">
                      {initials(t.name)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                      {t.product && (
                        <div className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--brand-mid)]">
                          {t.product}
                        </div>
                      )}
                    </div>
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