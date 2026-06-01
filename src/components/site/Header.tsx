import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Search, ChevronDown, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { PRODUCT_RANGES, COMPANY } from "@/lib/site-data";

const NAV = [
  { to: "/news", label: "News" },
  { to: "/about", label: "About" },
  { to: "/downloads", label: "Downloads" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQ, setSearchQ] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  // On inner pages there's no hero banner behind the header, so always use the solid style.
  const solid = scrolled || !isHome;

  const openProducts = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setProductsOpen(true);
  };
  const scheduleCloseProducts = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setProductsOpen(false), 120);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  // Close any expanded UI when route changes.
  useEffect(() => {
    setSearchOpen(false);
    setOpen(false);
    setProductsOpen(false);
  }, [location.pathname]);

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQ.trim();
    navigate({ to: "/products", search: q ? { q } : {} });
    setSearchOpen(false);
  };

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-6 px-5 md:h-20 md:px-8">
        <Link
          to="/"
          aria-label="Indigo Specialty Products — home"
          className={[
            "flex items-center gap-2 rounded-2xl px-2.5 py-1.5 transition-colors",
            solid
              ? "bg-transparent"
              : "bg-white/92 ring-1 ring-white/40 backdrop-blur-sm shadow-[0_6px_22px_-12px_rgba(12,35,64,0.45)]",
          ].join(" ")}
        >
          <img
            src={logo}
            alt="Indigo Specialty Products"
            width={140}
            height={54}
            className="h-8 w-auto md:h-9"
          />
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          <div
            className="relative"
            onMouseEnter={openProducts}
            onMouseLeave={scheduleCloseProducts}
          >
            <Link
              to="/products"
              className={[
                "inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                solid
                  ? "text-foreground/80 hover:text-[var(--brand-violet)]"
                  : "text-white/90 hover:text-[var(--brand-glow)]",
              ].join(" ")}
              aria-haspopup="true"
              aria-expanded={productsOpen}
              onFocus={openProducts}
            >
              Products
              <ChevronDown
                className={[
                  "size-3.5 transition-transform duration-200",
                  productsOpen ? "rotate-180" : "rotate-0",
                ].join(" ")}
                aria-hidden="true"
              />
            </Link>
            <div
              className={[
                "absolute left-1/2 top-full z-50 w-[min(92vw,640px)] -translate-x-1/2 pt-3",
                "transition-all duration-200 ease-out",
                productsOpen
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-1 opacity-0",
              ].join(" ")}
              onMouseEnter={openProducts}
              onMouseLeave={scheduleCloseProducts}
            >
              <div className="overflow-hidden rounded-2xl border border-border bg-background/95 p-2 shadow-elegant backdrop-blur-xl">
                <div className="grid grid-cols-2 gap-1">
                  {PRODUCT_RANGES.map((p) => (
                    <Link
                      key={p.slug}
                      to={`/${p.slug}`}
                      onClick={() => setProductsOpen(false)}
                      className="group flex flex-col gap-0.5 rounded-xl px-3 py-2.5 transition-colors hover:bg-[color-mix(in_oklab,var(--brand-leaf)_12%,transparent)]"
                    >
                      <span className="text-sm font-semibold text-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[var(--brand-violet)]">
                        {p.name}
                      </span>
                      <span className="text-xs text-muted-foreground">{p.tagline}</span>
                    </Link>
                  ))}
                </div>
                <div className="mt-1 border-t border-border/60 px-3 py-2">
                  <Link
                    to="/products"
                    onClick={() => setProductsOpen(false)}
                    className="inline-flex items-center gap-1 text-xs font-medium text-foreground hover:opacity-80"
                  >
                    View all products →
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={[
                "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                solid
                  ? "text-foreground/80 hover:text-[var(--brand-violet)]"
                  : "text-white/90 hover:text-[var(--brand-glow)]",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          {/* Quick-call link — surfaces the company phone number directly in the header */}
          <a
            href={COMPANY.phoneHref}
            className={[
              "inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition-colors",
              solid
                ? "text-foreground/85 hover:text-[var(--brand-violet)]"
                : "text-white/90 hover:text-[var(--brand-glow)]",
            ].join(" ")}
          >
            <Phone className="size-4" aria-hidden="true" />
            <span className="hidden lg:inline">{COMPANY.phone}</span>
          </a>

          {/* Expandable product search */}
          <form
            onSubmit={submitSearch}
            className={[
              "group flex items-center gap-2 rounded-full bg-foreground text-background transition-[width,background-color,box-shadow] duration-300 ease-out",
              "hover:bg-[var(--brand-violet)] hover:shadow-[0_10px_30px_-12px_color-mix(in_oklab,var(--brand-violet)_60%,transparent)]",
              searchOpen ? "w-72 px-3 py-1.5" : "w-auto px-4 py-2",
            ].join(" ")}
          >
            <button
              type={searchOpen ? "submit" : "button"}
              onClick={() => {
                if (!searchOpen) setSearchOpen(true);
              }}
              aria-label={searchOpen ? "Submit search" : "Open search"}
              className="inline-flex items-center gap-2 text-sm font-medium"
            >
              <Search className="size-4" aria-hidden="true" />
              {!searchOpen && <span>Search products</span>}
            </button>
            <input
              ref={searchInputRef}
              type="text"
              value={searchQ}
              onChange={(e) => setSearchQ(e.target.value)}
              placeholder="Search ranges…"
              aria-label="Search products"
              className={[
                "min-w-0 flex-1 bg-transparent text-sm text-background placeholder:text-background/60 outline-none transition-opacity duration-200",
                searchOpen ? "opacity-100" : "w-0 opacity-0 pointer-events-none",
              ].join(" ")}
            />
            {searchOpen && (
              <button
                type="button"
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQ("");
                }}
                aria-label="Close search"
                className="rounded-full p-1 text-background/80 hover:text-background"
              >
                <X className="size-3.5" />
              </button>
            )}
          </form>
        </div>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-background/70 backdrop-blur md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={[
          "fixed inset-x-0 top-16 z-40 origin-top transform border-b border-border bg-background/95 backdrop-blur-xl transition md:hidden",
          open ? "scale-y-100 opacity-100" : "pointer-events-none scale-y-95 opacity-0",
        ].join(" ")}
        aria-hidden={!open}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-6">
          <button
            type="button"
            onClick={() => setMobileProductsOpen((v) => !v)}
            className="flex items-center justify-between rounded-2xl px-4 py-3 text-base font-medium text-foreground hover:bg-muted"
            aria-expanded={mobileProductsOpen}
          >
            Products
            <ChevronDown
              className={[
                "size-4 transition-transform duration-200",
                mobileProductsOpen ? "rotate-180" : "rotate-0",
              ].join(" ")}
            />
          </button>
          <div
            className={[
              "grid overflow-hidden transition-all duration-300 ease-out",
              mobileProductsOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
            ].join(" ")}
          >
            <div className="min-h-0">
              <div className="ml-3 flex flex-col gap-0.5 border-l border-border pl-3 py-1">
                {PRODUCT_RANGES.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/${p.slug}`}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    {p.name}
                  </Link>
                ))}
                <Link
                  to="/products"
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
                >
                  View all products →
                </Link>
              </div>
            </div>
          </div>
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-base font-medium text-foreground hover:bg-muted"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={COMPANY.phoneHref}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-3 text-base font-semibold text-foreground"
          >
            <Phone className="size-4" /> Call {COMPANY.phone}
          </a>
          <Link
            to="/products"
            onClick={() => setOpen(false)}
            className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-4 py-3 text-base font-medium text-background"
          >
            <Search className="size-4" /> Search products
          </Link>
        </nav>
      </div>
    </header>
  );
}