## Goal

Rebuild indigospecialty.com.au with a premium, SaaS/agency-grade UI while preserving all existing content, branding (same logo), and business meaning. Tech-forward corporate aesthetic with subtle gradients, soft shadows, restrained glassmorphism, scroll reveals, and micro-interactions.

## Site map (TanStack Start routes)

```
/                    Home (hero, product ranges, "what makes us special", latest news, CTA)
/proforce            ProForce product range
/hydroforce          HydroForce soil surfactants
/duracote            NutriForce Duracote fertilisers
/bioforce            BioForce biologicals
/ivm                 Integrated Vegetation Management
/aquatics            Aquatic Management portfolio
/small-packs         Consumer small pack products
/products            Product search/index (filter by market segment)
/news                Blog / newsletter / testimonials index
/news/$slug          Article detail
/about               About Indigo Specialty
/downloads           Labels, SDS, tech sheets
/contact             Contact form + details
```

Each route gets its own `head()` with unique title, description, og tags. JSON-LD: Organization on root, Article on news posts, BreadcrumbList on deep routes.

## Design approach

After plan approval I will:
1. Capture the current live site for visual reference.
2. Ask 3 visual preference questions (palette, type pair, layout) — pre-picked to fit a premium AgTech/B2B Australian brand (palettes biased toward indigo/deep-blue + nature accents; type pairs like Sora+Manrope or Space Grotesk+DM Sans; layouts like hero-grid or full-width-sections).
3. Generate 3 rendered design directions using `design--create_directions` with the locked palette/type/layout, varying composition/density/motion. Present via `ask_questions` (prototype type).
4. Build the chosen direction faithfully — port composition verbatim, copy tokens into `src/styles.css`.

## Key UI components

- Sticky translucent header with blur, primary CTA, mobile drawer
- Hero with parallax background, headline, subhead, dual CTA (Search Products / Contact)
- Product range grid (8 cards) with hover lift + gradient borders
- "Three things that make us special" feature trio (Australian / Local / Specialised) with iconography
- News carousel/grid pulling latest 6 posts
- Trust band (markets served: Turf, Forestry, IVM, Nursery, Aquatics, Pest)
- Contact section with map embed, form, phone/email cards
- Footer with sitemap, socials, privacy

## Motion & interactions

- Tailwind keyframes already in template (fade-in, scale-in, slide). Add scroll-reveal via IntersectionObserver hook (no heavy lib).
- Subtle parallax via CSS transform on hero bg.
- Hover micro-interactions: card lift, gradient sheen on buttons, underline grow on links.
- Respect `prefers-reduced-motion`.

## SEO & performance

- Per-route head() with title/description/og tags; canonical on leaves only.
- Single `<h1>` per page; semantic landmarks; alt text on every image.
- Organization JSON-LD on root (name, logo, address Rocklea QLD, sameAs socials).
- Article JSON-LD on news posts; BreadcrumbList on inner pages.
- Lazy-loaded images, AVIF/WebP via `<img loading="lazy">`, responsive sizes.
- No heavy animation libs — pure CSS + Motion-light only if needed.

## Accessibility

- WCAG AA contrast via semantic tokens only (no arbitrary gray-400).
- Focus-visible rings, 44×44 tap targets, `aria-label` on icon buttons.
- `h-dvh` not `h-screen`.

## Technical notes

- Stack: TanStack Start + Tailwind v4 (already configured), shadcn primitives.
- All colors as oklch tokens in `src/styles.css` — no hardcoded hex in components.
- Logo: download from existing site, save to `src/assets/logo.svg` (or PNG) and import.
- Product/news content is hard-coded from the scraped site (no CMS / backend); copy lightly modernized without changing meaning.
- Image placeholders in chosen direction → generated via `imagegen` and saved under `src/assets/`.

## Out of scope

- No backend / CMS / database (no Lovable Cloud needed).
- Product search remains a static filterable list, not a live database.
- No e-commerce / cart.
- Forms are visual only unless you want a working contact endpoint (can add Lovable Cloud later).

## Open questions (will ask after approval)

1. Visual preferences (palette / type / layout) via `ask_questions`.
2. Then design direction pick via rendered prototype previews.
