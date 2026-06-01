import { Link } from "@tanstack/react-router";
import { COMPANY, PRODUCT_RANGES } from "@/lib/site-data";
import logo from "@/assets/logo.png";
import soilBg from "@/assets/footer-soil.jpg";
import grassStrip from "@/assets/footer-grass.png";
import { Linkedin, Facebook, Instagram, Youtube, Twitter, AtSign } from "lucide-react";

const SOCIAL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  LinkedIn: Linkedin,
  Facebook: Facebook,
  Instagram: Instagram,
  YouTube: Youtube,
  Twitter: Twitter,
  Threads: AtSign,
};

export function Footer() {
  return (
    <footer className="relative mt-32 text-white">
      <img
        src={grassStrip}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-16 z-10 h-24 w-full object-cover object-bottom select-none"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: `url(${soilBg})` }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[color-mix(in_oklab,#1a0f08_45%,transparent)]"
      />
      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-8 md:py-20">
        <div>
          <Link to="/" aria-label="Indigo Specialty Products — home" className="inline-block">
            <img src={logo} alt="Indigo Specialty Products" width={160} height={62} className="h-10 w-auto" />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            Australian-manufactured plant protection, nutrition, soil surfactants, biologicals and aquatic management — engineered for specialty markets.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {COMPANY.socials.map((s) => {
              const Icon = SOCIAL_ICONS[s.label] ?? AtSign;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="inline-flex size-9 items-center justify-center rounded-full border border-white/15 text-white/75 transition-all hover:-translate-y-0.5 hover:border-[var(--brand-leaf)]/60 hover:bg-[color-mix(in_oklab,var(--brand-leaf)_18%,transparent)] hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
        </div>

        <FooterCol title="Products">
          {PRODUCT_RANGES.slice(0, 6).map((p) => (
            <FooterLink key={p.slug} to={`/${p.slug}`}>
              {p.name}
            </FooterLink>
          ))}
          <FooterLink to="/products">All products</FooterLink>
        </FooterCol>

        <FooterCol title="Company">
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/news">News & insights</FooterLink>
          <FooterLink to="/downloads">Labels & SDS</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterCol>

        <FooterCol title="Get in touch">
          <p className="text-sm text-white/70">{COMPANY.address}</p>
          <a className="block text-sm text-white/80 hover:text-white" href={COMPANY.phoneHref}>
            {COMPANY.phone}
          </a>
          <a className="block text-sm text-white/80 hover:text-white" href={`mailto:${COMPANY.email}`}>
            {COMPANY.email}
          </a>
          <a className="block text-sm text-white/80 hover:text-white" href={`mailto:${COMPANY.ordersEmail}`}>
            Orders: {COMPANY.ordersEmail}
          </a>
        </FooterCol>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-3 px-5 py-6 text-xs text-white/55 md:flex-row md:items-center md:px-8">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://indigospecialty.com.au/privacy-policy-2/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Privacy
            </a>
            <Link to="/contact" className="hover:text-white">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/55">{title}</h3>
      <ul className="flex flex-col gap-2">{Array.isArray(children) ? children.map((c, i) => <li key={i}>{c}</li>) : <li>{children}</li>}</ul>
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="text-sm text-white/75 transition-colors hover:text-white">
      {children}
    </Link>
  );
}