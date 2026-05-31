import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Container, Eyebrow } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { COMPANY } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Indigo Specialty Products" },
      {
        name: "description",
        content:
          "Contact Indigo Specialty Products in Rocklea, QLD. Phone 0491 201 694, email enquiries@indigospecialty.com, orders at orders@indigospecialty.com.",
      },
      { property: "og:title", content: "Contact — Indigo Specialty Products" },
      {
        property: "og:description",
        content: "Reach our team for technical advice, orders or general enquiries.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Questions, orders, or technical advice — we’re here."
        subtitle="Reach our team and we’ll respond as soon as we can. For orders, email orders@indigospecialty.com directly."
      />
      <section className="pb-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
            <Reveal>
              <div className="space-y-3">
                <Tile icon={MapPin} title="Visit" body={COMPANY.address} />
                <Tile
                  icon={Phone}
                  title="Call or text"
                  body={
                    <a href={COMPANY.phoneHref} className="underline-offset-4 hover:underline">
                      {COMPANY.phone}
                    </a>
                  }
                />
                <Tile
                  icon={Mail}
                  title="General"
                  body={
                    <a href={`mailto:${COMPANY.email}`} className="underline-offset-4 hover:underline">
                      {COMPANY.email}
                    </a>
                  }
                />
                <Tile
                  icon={Mail}
                  title="Orders"
                  body={
                    <a href={`mailto:${COMPANY.ordersEmail}`} className="underline-offset-4 hover:underline">
                      {COMPANY.ordersEmail}
                    </a>
                  }
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="rounded-3xl border border-border bg-card p-6 shadow-elegant md:p-8"
              >
                <Eyebrow>Send a message</Eyebrow>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field id="name" label="Full name" required />
                  <Field id="email" label="Email" type="email" required />
                  <Field id="company" label="Company" />
                  <Field id="phone" label="Phone" type="tel" />
                </div>
                <div className="mt-4">
                  <Label htmlFor="message">How can we help?</Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-[var(--brand-mid)]/30"
                    placeholder="Tell us a bit about your project, market segment, or product question…"
                  />
                </div>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <p className="text-xs text-muted-foreground">
                    We’ll get back to you within one business day.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
                  >
                    <Send className="size-4" />
                    {sent ? "Thanks — we’ll be in touch" : "Send message"}
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}

function Tile({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
      <div className="inline-flex size-11 items-center justify-center rounded-xl bg-[var(--brand-mid)]/10 text-[var(--brand-mid)]">
        <Icon className="size-5" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{title}</div>
        <div className="mt-1 text-sm font-medium">{body}</div>
      </div>
    </div>
  );
}

function Label(props: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label {...props} className={["text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground", props.className].join(" ")} />;
}

function Field({
  id,
  label,
  type = "text",
  required,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label htmlFor={id}>{label}{required ? " *" : ""}</Label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-[var(--brand-mid)]/30"
      />
    </div>
  );
}