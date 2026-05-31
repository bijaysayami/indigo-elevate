import type { ReactNode } from "react";
import { Container, Eyebrow } from "./Container";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  actions,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-44 md:pb-24">
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-50" />
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-[480px] bg-radial-fade" />
      <Container>
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            {title}
          </h1>
        </Reveal>
        {subtitle ? (
          <Reveal delay={140}>
            <p className="mt-5 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
              {subtitle}
            </p>
          </Reveal>
        ) : null}
        {actions ? (
          <Reveal delay={200}>
            <div className="mt-8 flex flex-wrap gap-3">{actions}</div>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}