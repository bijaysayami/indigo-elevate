import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { TEAM } from "@/lib/site-data";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — Indigo Specialty Products" },
      {
        name: "description",
        content:
          "Meet the Indigo Specialty Products team — managing director, account managers, technical and marketing contacts across Australia.",
      },
      { property: "og:title", content: "Our Team — Indigo Specialty Products" },
      { property: "og:description", content: "The people behind Indigo Specialty Products." },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamPage,
});

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our team"
        title="The people behind Indigo Specialty Products."
        subtitle="Real growers, agronomists, and specialists — covering every state and every part of our business."
      />
      <section className="pb-24">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m, i) => (
              <Reveal key={m.email} delay={i * 40}>
                <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-[var(--brand-mid)]/50 hover:shadow-elegant">
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[var(--brand-deep)]/15 to-[var(--brand-mid)]/10">
                    {m.image ? (
                      <img src={m.image} alt={m.name} loading="lazy" className="size-full object-cover" />
                    ) : (
                      <div className="flex size-full items-center justify-center">
                        <span className="text-5xl font-semibold text-[var(--brand-deep)]/40">{initials(m.name)}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <h2 className="text-lg font-semibold tracking-tight">{m.name}</h2>
                    <p className="text-sm text-muted-foreground">{m.title}</p>
                    <div className="mt-auto flex flex-col gap-1.5 pt-3 text-sm">
                      {m.phone && (
                        <a href={`tel:${m.phone.replace(/\s+/g, "")}`} className="inline-flex items-center gap-2 text-foreground/85 hover:text-[var(--brand-mid)]">
                          <Phone className="size-3.5" />
                          {m.phone}
                        </a>
                      )}
                      <a href={`mailto:${m.email}`} className="inline-flex items-center gap-2 text-foreground/85 hover:text-[var(--brand-mid)]">
                        <Mail className="size-3.5" />
                        {m.email}
                      </a>
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