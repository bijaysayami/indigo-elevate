export type ProductRange = {
  slug: string;
  name: string;
  tagline: string;
  blurb: string;
  description: string;
  highlights: string[];
  image: "droplet" | "turf" | "aquatics" | "forestry" | "nursery";
  badge: string;
};

export const PRODUCT_RANGES: ProductRange[] = [
  {
    slug: "proforce",
    name: "ProForce",
    tagline: "Plant protection, engineered in Australia",
    blurb:
      "Australian-manufactured plant protection focused on non-crop and specialty markets.",
    description:
      "The ProForce range is purpose-built for Australian conditions — formulated, manufactured, and quality-controlled locally. From herbicides and insecticides through to PGRs, every product is engineered for the realities of specialty turf, IVM, and amenity programs.",
    highlights: [
      "Australian manufactured",
      "Specialty turf, IVM and amenity formulations",
      "Backed by local technical support",
    ],
    image: "turf",
    badge: "Flagship",
  },
  {
    slug: "hydroforce",
    name: "HydroForce",
    tagline: "Premium soil surfactants",
    blurb:
      "Premium soil surfactants researched and developed for Australian growing conditions.",
    description:
      "HydroForce is a soil surfactant range developed and trialled for Australian soils and climates. Improve infiltration, manage localised dry spot, and get more out of every irrigation event.",
    highlights: [
      "Locally researched for Australian soils",
      "Improves water use efficiency",
      "Trusted by leading turf managers",
    ],
    image: "droplet",
    badge: "Soil & water",
  },
  {
    slug: "small-packs",
    name: "Small Pack Products",
    tagline: "Consumer home garden & pest",
    blurb:
      "Right-sized formulations designed specifically for Consumer Home Garden and Pest Management.",
    description:
      "Our consumer small pack range brings professional formulations into convenient retail sizes — easy to use, easy to store, and built on the same quality standards as our commercial products.",
    highlights: [
      "Retail-ready pack sizes",
      "Home garden and pest categories",
      "Professional-grade formulations",
    ],
    image: "nursery",
    badge: "Consumer",
  },
  {
    slug: "ivm",
    name: "Vegetation Management",
    tagline: "Industrial Vegetation Management",
    blurb:
      "Herbicides, adjuvants, surfactants and PGRs for hard-to-maintain and industrial sites.",
    description:
      "Our IVM range gives vegetation managers a complete toolkit — selective and non-selective herbicides, performance adjuvants and surfactants, and plant growth regulators for hard-to-access infrastructure corridors.",
    highlights: [
      "Herbicides, adjuvants and surfactants",
      "Plant Growth Regulators (PGRs)",
      "Tailored to Australian IVM programs",
    ],
    image: "forestry",
    badge: "IVM",
  },
  {
    slug: "duracote",
    name: "NutriForce Duracote",
    tagline: "Controlled-release fertiliser technology",
    blurb:
      "Consistent, predictable nutrient delivery through controlled-release coating technology.",
    description:
      "NutriForce Duracote uses a coated, controlled-release technology to feed plants evenly across the season. Predictable nutrition, fewer applications, and less waste.",
    highlights: [
      "Controlled-release coating",
      "Predictable nutrient curve",
      "Reduced labour and waste",
    ],
    image: "nursery",
    badge: "Nutrition",
  },
  {
    slug: "bioforce",
    name: "BioForce",
    tagline: "Beneficial biology for turf & amenity",
    blurb:
      "Unique combinations of beneficial bacteria and fungi that build plant resilience.",
    description:
      "BioForce uses carefully selected beneficial bacteria and fungi to give turf and amenity plants more resistance to adverse conditions — heat, salinity, drought, and biotic stress.",
    highlights: [
      "Beneficial bacteria + fungi",
      "Builds stress resilience",
      "Complements conventional inputs",
    ],
    image: "turf",
    badge: "Biologicals",
  },
  {
    slug: "aquatics",
    name: "Aquatic Management",
    tagline: "Water bodies, made manageable",
    blurb:
      "A portfolio that reduces algae, weed, sludge and odour while improving water aesthetics.",
    description:
      "Our aquatic management portfolio is highly effective at reducing algae, aquatic weed, sludge and odour issues while improving the overall appearance and health of dams, lakes and ornamental waterbodies.",
    highlights: [
      "Algae, weed and sludge control",
      "Odour reduction",
      "Improved water aesthetics",
    ],
    image: "aquatics",
    badge: "Aquatics",
  },
  {
    slug: "turf-production",
    name: "Turf Production",
    tagline: "Programs built for large-scale producers",
    blurb:
      "Products and agronomy support tailored to large-scale Australian turf production.",
    description:
      "We know your success depends on reliable inputs, sound agronomy, and partners who understand the realities of large-scale turf production under Australian conditions — that is exactly what our turf production program is built around.",
    highlights: [
      "Tailored agronomy support",
      "Programs for large-scale producers",
      "Australian-condition tested",
    ],
    image: "turf",
    badge: "Turf",
  },
];

export const MARKETS = [
  "Industrial Vegetation Management",
  "Forestry",
  "Amenity Turf & Sports Turf",
  "Nursery Production",
  "Landscape & Ornamentals",
  "Consumer Home Garden",
  "Professional Pest Control",
  "Aquatic Management",
];

export type NewsItem = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Newsletter" | "Product" | "Testimonial" | "People";
  date: string;
  image: ProductRange["image"];
};

export const NEWS: NewsItem[] = ([
  {
    slug: "autumn-newsletter-2026",
    title: "Autumn Newsletter 2026",
    excerpt:
      "Seasonal product updates, agronomy notes and customer stories from across the Indigo network.",
    category: "Newsletter",
    date: "2026-04-10",
    image: "forestry",
  },
  {
    slug: "proforce-scarlet-trio",
    title: "ProForce Scarlet Trio Advanced Insecticide",
    excerpt:
      "A new triple-action insecticide engineered for tough turf pest pressure in Australian conditions.",
    category: "Product",
    date: "2026-03-22",
    image: "turf",
  },
  {
    slug: "curatol-customer-testimonial",
    title: "ProForce Curatol 120 SC — Glenmore Heritage GC",
    excerpt:
      "How Glenmore Heritage Golf Course uses Curatol 120 SC as part of a season-long fungal program.",
    category: "Testimonial",
    date: "2026-03-05",
    image: "turf",
  },
  {
    slug: "agritec-algaecide-testimonial",
    title: "Agritec Algaecide — Casey Fields",
    excerpt:
      "A practical look at integrated algae control on a major Australian sports field complex.",
    category: "Testimonial",
    date: "2026-02-18",
    image: "aquatics",
  },
  {
    slug: "fast-draw-arborcare",
    title: "ProForce Fast Draw 100 EC — ArborCare QLD",
    excerpt:
      "ArborCare QLD shares results from Fast Draw 100 EC across their vegetation management programs.",
    category: "Testimonial",
    date: "2026-02-01",
    image: "forestry",
  },
  {
    slug: "caine-james-appointment",
    title: "New Appointment — Caine James, Market Manager (Turf Production)",
    excerpt:
      "Caine James joins Indigo Specialty Products as Market Manager — Turf Production.",
    category: "People",
    date: "2026-01-20",
    image: "nursery",
  },
  {
    slug: "miticor-980-g",
    title: "ProForce Miticor® 980 G — Precision Granular Fumigant",
    excerpt:
      "A new precision granular fumigant designed for turf, horticulture and non-crop markets.",
    category: "Product",
    date: "2025-12-12",
    image: "turf",
  },
  {
    slug: "padre-270-pgr",
    title: "New ProForce Padre® 270 Plant Growth Regulator",
    excerpt:
      "Simplified vegetation management for hard-to-maintain areas with the new Padre 270 PGR.",
    category: "Product",
    date: "2025-11-28",
    image: "forestry",
  },
] as const).map((n) => ({ ...n })) as NewsItem[];

export const COMPANY = {
  name: "Indigo Specialty Products",
  phone: "0491 201 694",
  phoneHref: "tel:+61491201694",
  email: "enquiries@indigospecialty.com",
  ordersEmail: "orders@indigospecialty.com",
  address: "3/49 Donaldson Road, Rocklea, QLD 4106",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/99134999" },
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100076193619084" },
    { label: "Instagram", href: "https://www.instagram.com/indigospecialtyproducts/" },
    { label: "YouTube", href: "https://www.youtube.com/@indigospecialtyproducts3187/videos" },
    { label: "Threads", href: "https://www.threads.com/@indigospecialtyproducts" },
    { label: "Twitter", href: "https://twitter.com/IndigoSpecialty" },
  ],
} as const;