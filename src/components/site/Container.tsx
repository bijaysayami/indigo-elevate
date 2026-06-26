import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={["mx-auto w-full max-w-7xl px-5 md:px-8", className].join(" ")}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-secondary-foreground">
      <span className="inline-block size-1.5 rounded-full bg-[var(--brand-mid)]" />
      {children}
    </span>
  );
}