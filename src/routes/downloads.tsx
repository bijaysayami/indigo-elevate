import { createFileRoute } from "@tanstack/react-router";
import { FileText, Download, ExternalLink } from "lucide-react";
import { Container, Eyebrow } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { PRODUCT_RANGES } from "@/lib/site-data";

export const Route = createFileRoute("/downloads")({
  head: () => ({
    meta: [
      { title: "Labels, SDS & Tech Sheets — Indigo Specialty Products" },
      {
        name: "description",
        content:
          "Download product labels, Safety Data Sheets (SDS) and technical sheets for the Indigo Specialty Products range.",
      },
      { property: "og:title", content: "Labels, SDS & Tech Sheets — Indigo Specialty Products" },
      {
        property: "og:description",
        content: "Tech sheets, SDS and labels for every Indigo Specialty range.",
      },
      { property: "og:url", content: "/downloads" },
    ],
    links: [{ rel: "canonical", href: "/downloads" }],
  }),
  component: DownloadsPage,
});

function DownloadsPage() {
  return (
    <>
      <PageHero
        eyebrow="Downloads"
        title="Labels, SDS, and technical sheets."
        subtitle="Access the documentation you need for safe handling, application and compliance across every Indigo Specialty range."
        actions={
          <a
            href="https://indigospecialty.com.au/downloads/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background"
          >
            <ExternalLink className="size-4" /> Full document library
          </a>
        }
      />
      <section className="pb-24">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCT_RANGES.map((r, i) => (
              <Reveal key={r.slug} delay={i * 50}>
                <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-6">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex size-11 items-center justify-center rounded-xl bg-[var(--brand-mid)]/10 text-[var(--brand-mid)]">
                      <FileText className="size-5" />
                    </div>
                    <Eyebrow>{r.badge}</Eyebrow>
                  </div>
                  <h2 className="mt-5 text-lg font-semibold tracking-tight">{r.name}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{r.blurb}</p>
                  <div className="mt-6 grid gap-2 text-sm">
                    <DocLink>Product label (PDF)</DocLink>
                    <DocLink>Safety Data Sheet (SDS)</DocLink>
                    <DocLink>Technical sheet</DocLink>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-12 rounded-3xl border border-dashed border-border bg-secondary/40 p-6 text-sm text-muted-foreground">
              Looking for a specific document? Email <a className="font-medium text-foreground underline-offset-4 hover:underline" href="mailto:enquiries@indigospecialty.com">enquiries@indigospecialty.com</a> and we will send it through.
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

function DocLink({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="https://indigospecialty.com.au/downloads/"
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center justify-between gap-3 rounded-xl border border-border bg-background px-3 py-2 transition-colors hover:border-[var(--brand-mid)]/50"
    >
      <span>{children}</span>
      <Download className="size-4 text-muted-foreground transition-colors group-hover:text-foreground" />
    </a>
  );
}