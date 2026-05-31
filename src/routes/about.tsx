import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Leaf, Sparkles, Shield, Beaker, Droplets } from "lucide-react";
import { Container, Eyebrow } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { MARKETS } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Indigo Specialty Products" },
      {
        name: "description",
        content:
          "Indigo Specialty Products manufactures and supplies plant protection, nutrition, soil surfactants, biologicals and aquatic management for Australasian non-crop markets.",
      },
      { property: "og:title", content: "About — Indigo Specialty Products" },
      {
        property: "og:description",
        content:
          "An Australian business focused on specialty non-crop markets — IVM, forestry, turf, nursery, landscape, pest control and aquatics.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const pillars = [
    { icon: MapPin, title: "Australian", body: "Formulated and manufactured locally for local accountability." },
    { icon: Leaf, title: "Local research", body: "Trials run under Australian climate, soil and pressure profiles." },
    { icon: Sparkles, title: "Specialised", body: "We do not compete in commodity ag — only non-crop specialty markets." },
    { icon: Beaker, title: "Plant protection", body: "Herbicides, insecticides, fungicides and PGRs for specialty markets." },
    { icon: Droplets, title: "Soil & water", body: "Surfactants, wetting agents and aquatic management portfolios." },
    { icon: Shield, title: "Backed locally", body: "Technical and agronomic support from our Queensland team." },
  ];
  return (
    <>
      <PageHero
        eyebrow="About"
        title={<>Engineering inputs for Australian non-crop and specialty markets.</>}
        subtitle="Indigo Specialty Products is an Australian business focused on the manufacturing and supply of plant protection, nutrition, soil surfactants, biologicals and aquatic management."
      />
      <section className="pb-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1.3fr_1fr]">
            <Reveal>
              <div className="space-y-5 text-pretty leading-relaxed text-muted-foreground">
                <p>
                  We specialise in Australasian non-crop markets — Industrial Vegetation Management, Forestry, Amenity Turf & Sports Turf, Nursery Production, Landscape & Ornamentals, Consumer Home Garden and Pest Management, and Professional Pest Control.
                </p>
                <p>
                  Across every range, our work is grounded in a simple commitment: build products that perform under Australian conditions, support the people who use them, and stay focused on the specialty segments where deep expertise matters most.
                </p>
                <p>
                  Our team operates from Rocklea, Queensland, supporting customers and distribution partners across Australia and New Zealand.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="rounded-3xl border border-border bg-card p-6 shadow-elegant">
                <Eyebrow>Markets served</Eyebrow>
                <ul className="mt-4 grid grid-cols-1 gap-2 text-sm">
                  {MARKETS.map((m) => (
                    <li key={m} className="flex items-start gap-2">
                      <span className="mt-1.5 inline-block size-1.5 rounded-full bg-[var(--brand-mid)]" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <div className="h-full rounded-3xl border border-border bg-card p-6">
                  <div className="inline-flex size-11 items-center justify-center rounded-2xl bg-[var(--brand-mid)]/10 text-[var(--brand-mid)]">
                    <p.icon className="size-5" aria-hidden />
                  </div>
                  <h2 className="mt-5 text-lg font-semibold tracking-tight">{p.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}