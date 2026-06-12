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
  author?: string;
  readMinutes?: number;
  body: string[];
  highlights?: string[];
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
    author: "Indigo Specialty Products",
    readMinutes: 6,
    highlights: [
      "New ProForce releases for the autumn program",
      "Agronomy notes for transitioning turf",
      "Customer stories from across QLD and NSW",
    ],
    body: [
      "Welcome to the Autumn 2026 edition of the Indigo Specialty Products newsletter. As temperatures ease across the country, our team has put together a snapshot of the products, programs and people shaping the season ahead.",
      "Inside this issue you'll find launch notes on two new ProForce formulations, updated agronomy guidance for cool-season transitions, and a behind-the-scenes look at how three of our long-term customers are using Indigo products in their day-to-day operations.",
      "We've also included a refreshed compatibility chart for our most-requested tank mixes, plus a printable application calendar you can pin in the shed. As always, reach out to your local Indigo representative for region-specific advice — we're here to help you get the most out of every application.",
    ],
  },
  {
    slug: "proforce-scarlet-trio",
    title: "ProForce Scarlet Trio Advanced Insecticide",
    excerpt:
      "A new triple-action insecticide engineered for tough turf pest pressure in Australian conditions.",
    category: "Product",
    date: "2026-03-22",
    image: "turf",
    readMinutes: 4,
    highlights: [
      "Three modes of action in a single formulation",
      "Targets surface and sub-surface turf pests",
      "Low odour, low residue — suitable for high-traffic sites",
    ],
    body: [
      "ProForce Scarlet Trio is a new triple-action insecticide developed for the unique pressure of Australian sports turf, golf courses and amenity sites. By combining three complementary modes of action in one easy-to-handle pack, Scarlet Trio gives turf managers broader spectrum control with fewer applications.",
      "Field trials across QLD, NSW and VIC have shown strong knockdown of surface-feeding caterpillars and sub-surface scarab larvae, with a residual window that fits neatly into a typical four-to-six week IPM program.",
      "Scarlet Trio is available now in 5 L and 10 L pack sizes. Talk to your Indigo Specialty representative for stewardship guidance, resistance management notes, and a starter program tailored to your site.",
    ],
  },
  {
    slug: "curatol-customer-testimonial",
    title: "ProForce Curatol 120 SC — Glenmore Heritage GC",
    excerpt:
      "How Glenmore Heritage Golf Course uses Curatol 120 SC as part of a season-long fungal program.",
    category: "Testimonial",
    date: "2026-03-05",
    image: "turf",
    author: "Glenmore Heritage GC Superintendent Team",
    readMinutes: 5,
    body: [
      "Glenmore Heritage Golf Course sits on a sandy belt that, while excellent for playability, exposes greens and approaches to consistent fungal pressure right through summer and into early autumn.",
      "\"Curatol 120 SC has become the backbone of our preventative program,\" says the Glenmore superintendent team. \"We've been able to stretch our spray intervals without sacrificing turf quality, and the curative window gives us confidence when weather windows tighten.\"",
      "The team rotates Curatol 120 SC with two complementary modes of action across the playing surfaces, and credits the program with a noticeable reduction in disease breakthrough events compared to the previous two seasons.",
    ],
  },
  {
    slug: "agritec-algaecide-testimonial",
    title: "Agritec Algaecide — Casey Fields",
    excerpt:
      "A practical look at integrated algae control on a major Australian sports field complex.",
    category: "Testimonial",
    date: "2026-02-18",
    image: "aquatics",
    readMinutes: 4,
    body: [
      "Casey Fields is one of Victoria's busiest community sports complexes, and its central ornamental lake plays a key role in both stormwater management and the visitor experience.",
      "Persistent late-summer algal blooms had begun to affect water clarity and odour around the pavilion. After a site assessment, the Indigo Aquatics team introduced Agritec Algaecide as part of an integrated water quality program — combining targeted treatment with monitoring and aeration adjustments.",
      "Within two treatment cycles the visible bloom had cleared, and ongoing low-rate maintenance applications have kept the lake in good condition through the peak season without disrupting community events.",
    ],
  },
  {
    slug: "fast-draw-arborcare",
    title: "ProForce Fast Draw 100 EC — ArborCare QLD",
    excerpt:
      "ArborCare QLD shares results from Fast Draw 100 EC across their vegetation management programs.",
    category: "Testimonial",
    date: "2026-02-01",
    image: "forestry",
    author: "ArborCare QLD",
    readMinutes: 4,
    body: [
      "ArborCare QLD manages vegetation along powerline easements, rail corridors and rural roadsides — sites where access windows are narrow and re-treatment is costly.",
      "After a 12-month evaluation, the team has rolled ProForce Fast Draw 100 EC into their core program. \"The speed of knockdown is the standout for us,\" says the ArborCare operations lead. \"Crews can see the result inside a few days, which makes route planning and client reporting a lot easier.\"",
      "Used as part of a balanced selective and non-selective program, Fast Draw 100 EC has helped reduce the number of return visits required across high-pressure sections of their network.",
    ],
  },
  {
    slug: "caine-james-appointment",
    title: "New Appointment — Caine James, Market Manager (Turf Production)",
    excerpt:
      "Caine James joins Indigo Specialty Products as Market Manager — Turf Production.",
    category: "People",
    date: "2026-01-20",
    image: "nursery",
    readMinutes: 2,
    body: [
      "We're delighted to welcome Caine James to the Indigo Specialty Products team as Market Manager — Turf Production.",
      "Caine brings more than 15 years of hands-on experience across commercial turf production, sports turf and golf, and will work closely with growers across Australia to develop programs tailored to their specific operations.",
      "If you'd like to connect with Caine about your turf production program, get in touch with our team and we'll make the introduction.",
    ],
  },
  {
    slug: "miticor-980-g",
    title: "ProForce Miticor® 980 G — Precision Granular Fumigant",
    excerpt:
      "A new precision granular fumigant designed for turf, horticulture and non-crop markets.",
    category: "Product",
    date: "2025-12-12",
    image: "turf",
    readMinutes: 4,
    highlights: [
      "Granular formulation for precise application",
      "Suitable for turf, horticulture and non-crop sites",
      "Lower volatility profile than traditional fumigants",
    ],
    body: [
      "ProForce Miticor® 980 G is a new precision granular fumigant developed for use across turf, horticulture and non-crop markets where targeted soil treatment is required.",
      "The granular format gives operators a cleaner, more controlled application than traditional liquid fumigants, with reduced drift potential and a more predictable distribution pattern.",
      "Miticor 980 G is available through Indigo Specialty Products and our authorised distribution partners. Please speak with your Indigo representative about site assessment, application equipment and stewardship requirements before first use.",
    ],
  },
  {
    slug: "padre-270-pgr",
    title: "New ProForce Padre® 270 Plant Growth Regulator",
    excerpt:
      "Simplified vegetation management for hard-to-maintain areas with the new Padre 270 PGR.",
    category: "Product",
    date: "2025-11-28",
    image: "forestry",
    readMinutes: 4,
    highlights: [
      "Reduces mowing and slashing frequency",
      "Ideal for embankments, easements and roadsides",
      "Compatible with most selective herbicide programs",
    ],
    body: [
      "ProForce Padre® 270 is a new plant growth regulator built for the realities of industrial vegetation management — large, often difficult-to-access sites where every reduction in mechanical maintenance translates directly to cost and safety improvements.",
      "Applied as part of a planned program, Padre 270 slows vegetative growth and extends the interval between mowing or slashing events, freeing crews to focus on higher-value work along the corridor.",
      "Padre 270 is fully compatible with most selective herbicide programs, making it easy to integrate into existing tank mixes. Reach out to the Indigo IVM team for application timing, rate selection and program design support.",
    ],
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