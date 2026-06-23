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

export const NEWS: NewsItem[] = [
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
];

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

// ---------------------------------------------------------------------------
// Individual product catalog (single SKUs with label/SDS/technote PDFs)
// ---------------------------------------------------------------------------

export type ProductCategory =
  | "Herbicides"
  | "Insecticides"
  | "Fungicides"
  | "PGRs"
  | "Adjuvants & Surfactants"
  | "Aquatics"
  | "Nutrition";

export type ProductDoc = { label?: string; sds?: string; technote?: string; calibration?: string; usage?: string };

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  range: string; // ProForce, HydroForce, etc.
  image: string; // external URL
  short: string;
  description: string[];
  docs: ProductDoc;
};

const HERB = "Herbicides" as const;
const IMG_BASE = "https://indigospecialty.com.au/wp-content/uploads";

export const PRODUCTS: Product[] = [
  {
    slug: "array-500-sc",
    name: "ProForce Array 500 SC Herbicide",
    category: HERB,
    range: "ProForce",
    image: `${IMG_BASE}/2025/04/Array-500-SC.png`,
    short: "Pre and post-emergent herbicide (500 g/L Ethofumesate) for Wintergrass control in a range of turfgrasses.",
    description: [
      "ProForce Array 500 SC Herbicide is a pre and post-emergent herbicide containing 500 g/L of the active ingredient Ethofumesate. It is registered for the pre-emergent control of Wintergrass in a variety of turfgrasses including Bentgrass, Kentucky Bluegrass, Kikuyu, Queensland Blue Couch and Ryegrass.",
      "ProForce Array 500 SC is also registered for the control of a range of grass and broadleaf weed species in non-crop situations including fencelines and tree plantations.",
    ],
    docs: {
      label: `${IMG_BASE}/2025/05/ProForce-Array-500-SC-16pp-Leaflet.pdf`,
      sds: `${IMG_BASE}/2025/02/ProForce-Array-500SC-SDS-FEB25.pdf`,
      technote: `${IMG_BASE}/2025/02/Array-500-SC-TG_Website.pdf`,
    },
  },
  {
    slug: "battalia-435",
    name: "ProForce Battalia 435 Herbicide",
    category: HERB,
    range: "ProForce",
    image: `${IMG_BASE}/2021/08/Battalia-435-20L.png`,
    short: "Pre-emergent herbicide (435 g/L Pendimethalin) for Summergrass, Crowsfoot and Wintergrass control.",
    description: [
      "Battalia 435 Herbicide is a pre-emergent herbicide containing 435 g/L of the active ingredient Pendimethalin. It is registered for the control of Summergrass, Crowsfoot Grass and Wintergrass in a range of warm and cool season turfgrass species.",
    ],
    docs: {
      label: `${IMG_BASE}/2025/09/ProForce-Battalia-435-20L-LabelLeaflet-2025.pdf`,
      sds: `${IMG_BASE}/2024/11/Proforce-Battalia-June-24-SDS.pdf`,
      technote: `${IMG_BASE}/2024/10/Battalia-435-TG_Website.pdf`,
    },
  },
  {
    slug: "checkpoint-500-sc",
    name: "ProForce Checkpoint 500SC Herbicide",
    category: HERB,
    range: "ProForce",
    image: `${IMG_BASE}/2021/08/Checkpoint-500-5L.png`,
    short: "Selective herbicide (500 g/L Propyzamide) for Wintergrass (Poa annua) control in established turf.",
    description: [
      "ProForce Checkpoint 500SC Herbicide is a selective herbicide containing 500 g/L of the active ingredient Propyzamide. It is specifically registered for the pre and post-emergent control of Wintergrass (Poa annua) in established turf, with excellent safety on a range of warm season turf varieties.",
    ],
    docs: {
      label: `${IMG_BASE}/2025/09/ProForce-Checkpoint-500-SC-5L-Label-Booklet-2025.pdf`,
      sds: `${IMG_BASE}/2024/06/MSDS-ProForce-Checkpoint-500-SC-Herbicide.pdf`,
      technote: `${IMG_BASE}/2024/10/Checkpoint-500SC-TG_Website.pdf`,
    },
  },
  {
    slug: "contra-m-duo",
    name: "ProForce Contra M Duo Herbicide",
    category: HERB,
    range: "ProForce",
    image: `${IMG_BASE}/2021/08/Contra-M-20L.png`,
    short: "Broadleaf herbicide combining 340 g/L MCPA + 80 g/L Dicamba for turf and non-crop sites.",
    description: [
      "ProForce Contra M herbicide is a broadleaf herbicide containing 340 g/L MCPA and 80 g/L Dicamba. Both active ingredients are present in the form of Dimethylamine salt. It is registered for the control of a very broad range of dicot weeds in all turf management situations and several herbaceous weeds in general non-crop situations.",
    ],
    docs: {
      label: `${IMG_BASE}/2025/09/ProForce-Contra-M-Duo-20L-Label-Leaflet-2025.pdf`,
      sds: `${IMG_BASE}/2024/06/MSDS-CONTRA-M-DUO-HERBICIDE.pdf`,
      technote: `${IMG_BASE}/2024/10/Contra-M-TG_Website.pdf`,
    },
  },
  {
    slug: "cortex-duo",
    name: "ProForce Cortex Duo Herbicide",
    category: HERB,
    range: "ProForce",
    image: `${IMG_BASE}/2025/11/300x300-Cortex-Duo-10L-and-1L.png`,
    short: "Non-selective knockdown + residual herbicide with Dual Control technology (525 g/L Nonanoic Acid + 15 g/L Oxyfluorfen).",
    description: [
      "ProForce Cortex Duo is a non-selective knockdown and residual herbicide featuring 'Dual Control Herbicide Technology' to provide control of seedling and young broadleaf and grass weeds and suppression of established weeds and perennial species. It contains 525 g/L Nonanoic Acid and 15 g/L Oxyfluorfen. Now available in 10L and 1L pack sizes.",
    ],
    docs: {
      label: `${IMG_BASE}/2023/08/ProForce-Cortex-Duo-10L-Label-Leaflet.pdf`,
      sds: `${IMG_BASE}/2024/11/Proforce-CortexDuo-SDS-1.pdf`,
      technote: `${IMG_BASE}/2022/09/Cortex-Duo-TG_F290822.pdf`,
    },
  },
  {
    slug: "destro-375",
    name: "ProForce Destro 375 Herbicide",
    category: HERB,
    range: "ProForce",
    image: `${IMG_BASE}/2025/09/300x300-Destro-Trio.png`,
    short: "Grass-specific herbicide (375 g/L Diclofop-methyl) for Crowsfoot Grass control in warm season turf.",
    description: [
      "ProForce Destro 375 Herbicide is a grass specific herbicide containing 375 g/L Diclofop-methyl. It is registered for the control of Crowsfoot Grass (Eleusine indica) in a range of warm season turfgrasses including Kikuyu, Hybrid Couch, Common Couch, Buffalo, Carpetgrass and Saltwater Couch. Pack sizes: 2.5L, 5L, 20L.",
    ],
    docs: {
      label: `${IMG_BASE}/2025/08/Destro-375-Combined-Labels-2.5520.pdf`,
      sds: `${IMG_BASE}/2025/05/Destro-375-EC-Herbi-Jan-2025.pdf`,
      technote: `${IMG_BASE}/2025/05/Destro-375-TG_Website-1.pdf`,
    },
  },
  {
    slug: "duke-100-wg",
    name: "ProForce Duke 100WG Herbicide",
    category: HERB,
    range: "ProForce",
    image: `${IMG_BASE}/2025/07/Duke-100g-and-50g-unboxed-scaled.png`,
    short: "Selective herbicide (100 g/kg Iodosulfuron methyl sodium) for grass and broadleaf weed control.",
    description: [
      "ProForce Duke 100WG Herbicide contains 100 g/kg of the active ingredient Iodosulfuron methyl sodium and is registered for the control of a range of grass and broadleaf weeds. Now available in 100g and 50g packs.",
    ],
    docs: {
      label: `${IMG_BASE}/2025/09/ProForce-Duke-100-WG-100g-4pp-Booklet-140x135mm106924-003-2025.pdf`,
      sds: `${IMG_BASE}/2025/05/MSDS-PROFORCE-DUKE-100-Jan-2025.pdf`,
      technote: `${IMG_BASE}/2025/09/Duke-100WG-TG_Website.pdf`,
      calibration: `${IMG_BASE}/2024/11/Duke-100WG-Calibration-Guide_FINAL_7.11.24.pdf`,
    },
  },
  {
    slug: "echelon-duo",
    name: "ProForce Echelon Duo Advanced Herbicide + Insecticide and Fertiliser",
    category: HERB,
    range: "ProForce",
    image: `${IMG_BASE}/2022/11/Echelon-Duo-1200.png`,
    short: "Dual-use Oxadiazon + Thiamethoxam on a 15:1:17 fertiliser carrier for pre-emergent weed and insect control.",
    description: [
      "Echelon Duo Advanced Herbicide + Insecticide is a dual use product featuring both Oxadiazon, a highly effective pre-emergent herbicide which controls Summergrass, Crowsfoot, Wintergrass, and Creeping Oxalis combined with Thiamethoxam, a residual insecticide for the control of African Black Beetle, Argentinian Scarab and Billbug on an homogenous fertiliser (15:1:17) to enhance turf growth and overall performance.",
    ],
    docs: {
      label: `${IMG_BASE}/2022/04/ProForce-Echelon-Duo-Label-Leaflet.pdf`,
      sds: `${IMG_BASE}/2022/04/Indigo-ProForce-Echelon-Duo.pdf`,
      technote: `${IMG_BASE}/2022/04/Echelon-Duo-Advanced-TG_Website.pdf`,
    },
  },
  {
    slug: "echelon-g",
    name: "ProForce Echelon G Herbicide & Fertiliser",
    category: HERB,
    range: "ProForce",
    image: `${IMG_BASE}/2024/02/300x300-Echelon-G-002.png`,
    short: "Granular pre-emergent herbicide + fertiliser blend for Summergrass, Crowsfoot, Wintergrass and Creeping Oxalis.",
    description: [
      "ProForce Echelon G Herbicide & Fertiliser features a unique combination of herbicide and fertiliser technology for effective pre-emergent control of Summergrass (Digitaria ciliaris), Crowsfoot (Eleusine indica), Wintergrass (Poa annua) and Creeping Oxalis (Oxalis corniculata).",
    ],
    docs: {
      label: `${IMG_BASE}/2024/02/ProForce-Echelon-G-20kg-Bag-Label-300x240mm.pdf`,
      sds: `${IMG_BASE}/2024/11/Proforce-Echelon-G-June-24-SDS.pdf`,
      technote: `${IMG_BASE}/2024/02/Echelon-G-Fertiliser-TG_Website.pdf`,
    },
  },
  {
    slug: "fast-draw-100-ec",
    name: "ProForce FastDraw 100EC Herbicide",
    category: HERB,
    range: "ProForce",
    image: `${IMG_BASE}/2024/08/FastDraw_300x300.png`,
    short: "Emulsifiable concentrate (100 g/L Butafenacil) — broad-spectrum control in industrial and non-crop areas.",
    description: [
      "ProForce Fast Draw 100EC Herbicide contains the active ingredient 100 g/L Butafenacil. It is registered for the control of a wide range of environmental, perennial and annual weeds in a range of situations including commercial, industrial and public service areas, around agricultural buildings and yards.",
      "ProForce Fast Draw 100EC Herbicide is to be used to improve and extend weed control in combination with knockdown herbicide chemistry such as glyphosate. ProForce Fast Draw 100EC Herbicide is an emulsifiable concentrate formulation.",
    ],
    docs: {
      label: `${IMG_BASE}/2024/08/FastDraw_Combined-leaflet-and-10L-label.pdf`,
      sds: `${IMG_BASE}/2024/02/FastDraw-100EC-SDS-2024.pdf`,
      technote: `${IMG_BASE}/2024/07/Fast-Draw-100EC-TG_F070724_Website.pdf`,
    },
  },
  {
    slug: "geronimo-800-sl",
    name: "ProForce Geronimo 800SL Herbicide",
    category: HERB,
    range: "ProForce",
    image: `${IMG_BASE}/2024/03/MagicEraser_230814_173741-e16919.png`,
    short: "Broad-spectrum post-emergent (800 g/L MSMA) — controls Crabgrass, Summergrass and Paspalum in Couch turf.",
    description: [
      "Geronimo 800SL is a broad spectrum post emergent herbicide, containing 800 g/L of the active ingredient MSMA. It is registered for the control of Crabgrass (Eleusine indica), Summergrass and Paspalum in common and hybrid Couch turf types. Geronimo 800SL is also registered for the control of Prickly Pear, Bathurst Burr, Noogoora Burr, Johnson Grass, Nutgrass, Spiny Burrgrass and Summergrasses in non-crop areas including roadsides, fencelines and storage areas.",
    ],
    docs: {
      label: `${IMG_BASE}/2023/08/ProForce-Geronimo-800-SL-10L-Label-Leaflet.pdf`,
      sds: `${IMG_BASE}/2023/08/Indigo-Proforce-Geronimo-800-SL-MSDS.pdf`,
      technote: `${IMG_BASE}/2023/08/Geronimo-800SL-TG_Website.pdf`,
    },
  },
  {
    slug: "numchuk-quad",
    name: "ProForce Numchuk Quad Herbicide",
    category: HERB,
    range: "ProForce",
    image: `${IMG_BASE}/2026/06/300x300-Numchuck-Quad-20L.png`,
    short: "Non-selective knockdown + residual herbicide with Quad Control Technology — up to 12 months of weed control.",
    description: [
      "Numchuk Quad is a non-selective knockdown and residual herbicide featuring 'Quad Control Herbicide Technology' to provide effective post and pre emergence weed control for up to 12 months.",
      "Numchuk Quad contains 100 g/L Glyphosate, 60 g/L Amitrole, 15 g/L Oxyfluorfen and 350 g/L Terbuthylazine.",
    ],
    docs: {
      label: `${IMG_BASE}/2025/09/ProForce-Numchuk-Quad-20L-Label-Leaflet-2025.pdf`,
      sds: `${IMG_BASE}/2022/10/Numchuk-Quad-Herbicide-SDS-2022.pdf`,
      technote: `${IMG_BASE}/2026/04/Numchuck-Quad-TG_Website.pdf`,
    },
  },
  {
    slug: "onset-10-gr",
    name: "ProForce Onset 10GR Herbicide",
    category: HERB,
    range: "ProForce",
    image: `${IMG_BASE}/2024/02/300x300-Onset-no-background-1.png`,
    short: "Granular pre-emergent (10 g/kg Prodiamine) — broad-spectrum grass weed control for turf.",
    description: [
      "ProForce Onset 10GR is a granular pre-emergent herbicide containing the active ingredient Prodiamine (10 g/kg). It is registered for the pre-emergent herbicidal control of a broad range of grass weeds including Barnyard Grass, Crabgrass & Summergrass, Parramatta Grass, Rats Tail Fescue, Crowsfoot, African Love Grass, Bahiagrass, Kentucky Bluegrass, Paspalum and Wintergrass in a range of turfgrass situations.",
    ],
    docs: {
      label: `${IMG_BASE}/2022/05/ProForce-ONSET-10-GR-Label-Leaflet.pdf`,
      sds: `${IMG_BASE}/2022/11/ProForce-Onset-10-GR.pdf`,
      technote: `${IMG_BASE}/2022/05/Onset-10GR-TG_Website.pdf`,
    },
  },
  {
    slug: "prosedge-750-df",
    name: "ProForce ProSedge 750DF Herbicide",
    category: HERB,
    range: "ProForce",
    image: `${IMG_BASE}/2024/02/300x300-Prosedge-500g-no-background-1.png`,
    short: "Systemic herbicide (Halosulfuron methyl) for Mullumbimby Couch and Nutgrass control in a wide range of turf.",
    description: [
      "ProSedge 750DF is a systemic herbicide containing the active ingredients Halosulfuron methyl. It is registered for the control of Mullumbimby Couch (Green Kyllinga) and Nutgrass in a broad range of turfgrasses including Common Couch, Hybrid Couch, Bentgrass, Buffalograss, Kikuyu, Queensland Blue Couch, Perennial Ryegrass, Tall Fescue, Durban grass and Carpetgrass. Pack sizes = 25g, 500g.",
    ],
    docs: {
      label: `${IMG_BASE}/2020/02/ProForce-ProSedge-750-DF-500g-Label-Leaflet.pdf`,
      sds: `${IMG_BASE}/2024/06/ProForce-ProSedge-750-DF-Herbicide.pdf`,
      technote: `${IMG_BASE}/2024/10/ProSedge-750DF-TG_Website.pdf`,
      usage: `${IMG_BASE}/2025/10/ProSedge-750-DF-with-button-added_-TG_Website.pdf`,
    },
  },
  {
    slug: "rapid-fire-510",
    name: "ProForce Rapid Fire 510 Herbicide",
    category: HERB,
    range: "ProForce",
    image: `${IMG_BASE}/2024/02/300x300-Rapid-Fire-510-20L-no-background.png`,
    short: "Non-selective herbicide (510 g/kg Glyphosate, isopropylamine salt) for broad-acre and non-ag use.",
    description: [
      "Rapid Fire 510 is a non-selective herbicide containing 510 g/kg of the active ingredient glyphosate present in the form of an isopropylamine salt. It is registered for the control a wide range of perennial and annual weeds in a range of situations including general weed control, non-agricultural, brush and woody weeds, aquatic and forestry uses.",
    ],
    docs: {
      label: `${IMG_BASE}/2025/09/ProForce-Rapid-Fire-510-20L-Label-Leaflet-2025.pdf`,
      sds: `${IMG_BASE}/2024/11/ProForce-Rapid-Fire-510-June-24-SDS-.pdf`,
      technote: `${IMG_BASE}/2024/10/Rapid-Fire-510-SL-TG_Website.pdf`,
    },
  },
  {
    slug: "rapid-fire-800-sg",
    name: "ProForce Rapid Fire 800SG Herbicide",
    category: HERB,
    range: "ProForce",
    image: `${IMG_BASE}/2024/10/ProForce_Rapid_Fire_800SG_10kg_background-removed.png`,
    short: "Non-selective glyphosate granule (800 g/kg) — broad-spectrum perennial and annual weed control.",
    description: [
      "Rapid Fire 800 SG is a non-selective herbicide containing 800 g/kg of the active ingredient glyphosate present in the form of the acid and ammonium salt. It is registered for the control a wide range of perennial and annual weeds in a range of situations including general weed control, non-agricultural, brush and woody weed, aquatic and forestry uses.",
    ],
    docs: {
      label: `${IMG_BASE}/2025/09/ProForce-Rapid-Fire-800-SG-10kg_Label-Leaflet-2025.pdf`,
      sds: `${IMG_BASE}/2024/10/ProForce-Rapid-Fire-800-SG-Herbicide.pdf`,
      technote: `${IMG_BASE}/2024/10/Rapid-Fire-800SG-TG_Website.pdf`,
    },
  },
  {
    slug: "recondo-100-wg",
    name: "ProForce Recondo 100WG Herbicide",
    category: HERB,
    range: "ProForce",
    image: `${IMG_BASE}/2024/02/300x300-Recondo-no-background-low-res.png`,
    short: "Broad-spectrum selective herbicide (100 g/kg Trifloxysulfuron sodium) for grass, sedge and broadleaf weeds.",
    description: [
      "ProForce Recondo 100WG is a broad spectrum selective herbicide containing the active ingredients Trifloxysulfuron sodium (100 g/kg). It is registered for the control of a broad range of key grass, sedge and broadleaf weeds in a number of turfgrasses including Bermudagrass, Zoysia, Durban Grass and Queensland Blue Couch. Recondo 100WG is a 100 g/kg Water Dispersible Granule formulation.",
    ],
    docs: {
      label: `${IMG_BASE}/2023/06/ProForce-Recondo-100-WG-500g-Label-Leaflet.pdf`,
      sds: `${IMG_BASE}/2025/05/SDS-RECONDO-100-WG-HERBICIDE-update-1.pdf`,
      technote: `${IMG_BASE}/2023/05/Recondo-100WG-TG_Website.pdf`,
    },
  },
  {
    slug: "rejuvenate",
    name: "ProForce Rejuvenate Herbicide",
    category: HERB,
    range: "ProForce",
    image: `${IMG_BASE}/2025/02/300x300-Rejuvenate.png`,
    short: "Aqueous concentrate (745 g/L Flupropanate) for grass weed control in industrial, urban and non-crop sites.",
    description: [
      "ProForce Rejuvenate Herbicide contains 745 g/L of the active ingredient Flupropanate and is registered for the control of grass weeds in a range of situations including industrial, urban open space, woodlands, roadsides, nature reserves and non-crop situations.",
      "Registered to control Parramatta Grasses, Rats Tail Fescue, Needle grasses, Serrated Tussock, Coolotai grass, Paspalum, Kikuyu, Couch, Columbus Grass, African Feathergrass, African Lovegrass, Rats Tail Grasses and Johnson Grass. Available in a 10L pack size.",
    ],
    docs: {
      label: `${IMG_BASE}/2025/02/ProForce-Rejuvenate-Herbicide-16pp-Leaflets.pdf`,
      sds: `${IMG_BASE}/2025/02/Indigo-Proforce-Rejuvenate-SDS.pdf`,
      technote: `${IMG_BASE}/2024/11/Rejuvenate-TG_Website.pdf`,
    },
  },
  {
    slug: "renegade-800-wg",
    name: "ProForce Renegade 800WG Herbicide",
    category: HERB,
    range: "ProForce",
    image: `${IMG_BASE}/2024/10/300x300-Renegade-new.png`,
    short: "Pre-emergent soil residual (800 g/kg Bromacil) — extended grass and broadleaf control in industrial sites.",
    description: [
      "ProForce Renegade 800WG is a preemergent soil residual herbicide that can be used for extended control of both grass and broadleaf weeds in industrial areas, commercial areas and rights-of-way situations. Renegade is particularly strong on grass weed species. The product contains 800 g/kg Bromacil and is ideal for use where control of hard-to-kill and resistant weeds are present. Highly compatible with non-selective knockdown herbicides allowing immediate control of existing weeds.",
    ],
    docs: {
      label: `${IMG_BASE}/2024/07/ProForce-Renegade-800-WG-16pp-Leaflet.pdf`,
      sds: `${IMG_BASE}/2024/07/Renegade-800-WG-Herbicide-SDS.pdf`,
      technote: `${IMG_BASE}/2024/07/Renegade-800WG-TG_Website.pdf`,
    },
  },
  {
    slug: "slinger-240",
    name: "ProForce Slinger 240 Industrial Herbicide",
    category: HERB,
    range: "ProForce",
    image: `${IMG_BASE}/2024/10/300x300-Slinger-new.png`,
    short: "Industrial herbicide (240 g/L Picloram, K-salt) for environmental, noxious, perennial and annual weeds.",
    description: [
      "ProForce Slinger 240 Industrial Herbicide contains the active ingredient 240 g/L Picloram present in the form of Potassium salt. It is registered for the control a wide range of environmental, noxious, perennial and annual weeds in a range of situations including agricultural non-crop areas, commercial and industrial areas, forests, pastures and rights of way.",
    ],
    docs: {
      label: `${IMG_BASE}/2025/09/ProForce-Solitaire-240-ME-1L-Combo-4pp-booklet-2025.pdf`,
      sds: `${IMG_BASE}/2025/05/Proforce-Slinger-240-MSDS-Jan-2025.pdf`,
      technote: `${IMG_BASE}/2024/10/Slinger-240-TG_Website.pdf`,
    },
  },
  {
    slug: "scuba-300",
    name: "ProForce Scuba 300 Herbicide",
    category: HERB,
    range: "ProForce",
    image: `${IMG_BASE}/2025/06/300x300-Scuba-300-5L.png`,
    short: "Emulsifiable concentrate (300 g/L 2,4-D) for broadleaf weeds and aquatic Water Hyacinth / Water Lettuce.",
    description: [
      "ProForce Scuba 300 is an Emulsifiable Concentrate Formulation, containing 300 g/L of 2,4-D active ingredient as a Phenoxy Acid. ProForce Scuba 300 is effective against broadleaf weeds and is registered in non-crop and pasture for the integrated control of Groundsel Bush, Mother-of-Millions, Noogoora Burr and Bathurst Burr.",
      "ProForce Scuba 300 is registered for use in waterways, non-potable water, drains, dam margins, lakes & streams for the control of Water Hyacinth and Water Lettuce in specified states.",
    ],
    docs: {
      label: `${IMG_BASE}/2025/04/ProForce-Scuba-300-5L-Label-Leaflet-Apr-25.pdf`,
      sds: `${IMG_BASE}/2025/04/ProForce-Scuba-300-Herbicide-SDS-Apr-25.pdf`,
      technote: `${IMG_BASE}/2025/04/Scuba-300-TG_F120325.pdf`,
    },
  },
  {
    slug: "simforce-500-sc",
    name: "SimForce 500 SC Industrial Herbicide",
    category: HERB,
    range: "ProForce",
    image: `${IMG_BASE}/2024/10/300x300-Sim-Force.png`,
    short: "500 g/L Simazine for annual grass and broadleaf weeds in non-agricultural areas and nursery stock.",
    description: [
      "SimForce 500 SC Industrial Herbicide contains 500 g/L of the active ingredient Simazine and is registered for the control of annual grasses and broadleaf weeds in non-agricultural areas including footpaths, factory sites, road shoulders, headlands, railway tracks, public utilities, aerodromes and fence lines. Also registered for control of weeds in nursery stock (non-food) — seedlings, plugs, potted colour, trees, shrubs, foliage plants, palms, grasses, fruit trees (non-bearing), cut flowers including wildflowers and foliage, and in established roses.",
    ],
    docs: {
      label: `${IMG_BASE}/2024/10/Sim-Force-500SC-20L-LabelLeaflet_Website-1.pdf`,
      sds: `${IMG_BASE}/2024/10/Sim-Force-500SC-Industrial-Herbicide-SDS.pdf`,
      technote: `${IMG_BASE}/2024/10/Sim-Force-500SC-TG_Website_final.pdf`,
    },
  },
  {
    slug: "wallop-600",
    name: "ProForce Wallop 600 Industrial Herbicide",
    category: HERB,
    range: "ProForce",
    image: `${IMG_BASE}/2024/10/300x300-Wallop-600-new.png`,
    short: "Industrial herbicide (600 g/L Clopyralid) for environmental, noxious, perennial and annual weeds.",
    description: [
      "ProForce Wallop 600 Industrial Herbicide contains the active ingredient 600 g/L Clopyralid present in the form of the acid and Triisopropanolamine salt. It is registered for the control of a wide range of environmental, noxious, perennial and annual weeds in a range of situations including rights of way, industrial areas, fallow land, forests and pastures.",
    ],
    docs: {
      label: `${IMG_BASE}/2024/08/ProForce-Wallop-600-24pp-Leaflet.pdf`,
      sds: `${IMG_BASE}/2024/10/ISP-Wallop-600-Herbicide-SDS.pdf`,
      technote: `${IMG_BASE}/2024/08/Wallop-600-TG_F220822.pdf`,
    },
  },
  {
    slug: "warhead-trio",
    name: "ProForce Warhead Trio Herbicide",
    category: HERB,
    range: "ProForce",
    image: `${IMG_BASE}/2024/10/300x300-Warhead-Trio.png`,
    short: "Broadleaf herbicide (300 g/L MCPA K-salt + 15 g/L Diflufenican + 20 g/L Clopyralid) for recreational turf.",
    description: [
      "ProForce Warhead Trio Herbicide is a broadleaf weed targeted herbicide containing 300 g/L MCPA (Potassium Salt), 15 g/L Diflufenican and 20 g/L Clopyralid. It is registered for the control of a range of dicot weeds in all recreational turf situations. Warhead Trio Herbicide can be used on a wide variety of established turf species, including Common Couch, Qld Blue Couch, Kikuyu, Buffalo, Paspalum, Fescue and Ryegrass. Warhead Trio herbicide contains a dual mode of action for improved performance and resistance management.",
    ],
    docs: {
      label: `${IMG_BASE}/2025/09/ProForce-Warhead-Trio-10L_LabelLeaflet-2025.pdf`,
      sds: `${IMG_BASE}/2024/02/ProForce-Warhead-Trio-Selective-Herbicide-SDS_1.02.24.pdf`,
      technote: `${IMG_BASE}/2024/10/Warhead-Trio-TG_Website.pdf`,
    },
  },
  {
    slug: "weed-blast-ma",
    name: "ProForce Weedblast MA Herbicide",
    category: HERB,
    range: "ProForce",
    image: `${IMG_BASE}/2024/05/300x300-Weedblast-MA.png`,
    short: "Post-emergent broadleaf herbicide (200 g/L Bromoxynil + 200 g/L MCPA) — contact + systemic action.",
    description: [
      "ProForce Weed Blast MA is a post-emergent broadleaf weed herbicide, registered for use on a range of established turfgrass species including Couch, Qld Blue Couch, Kikuyu, Paspalum, Buffalo, Fescue, Bent and Ryegrass. Contains 200 g/L Bromoxynil and 200 g/L MCPA. Both contact and systemic activity to provide more effective weed control.",
      "ProForce Weed Blast MA controls broadleaf weeds quickly, with visible results achieved in 7–14 days.",
    ],
    docs: {
      label: `${IMG_BASE}/2025/10/ProForce-Weed-Blast-MA-Combined-Files-Dangerous-Poison.pdf`,
      sds: `${IMG_BASE}/2024/05/Proforce-Weed-Blast-MA-Herbicide-002-1.pdf`,
      technote: `${IMG_BASE}/2024/05/Weed-Blast-MA-TG_Website.pdf`,
    },
  },
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  "Herbicides",
  "Insecticides",
  "Fungicides",
  "PGRs",
  "Adjuvants & Surfactants",
  "Aquatics",
  "Nutrition",
];

// ---------------------------------------------------------------------------
// Team
// ---------------------------------------------------------------------------

export type TeamMember = {
  name: string;
  title: string;
  phone?: string;
  email: string;
  image?: string;
};

export const TEAM: TeamMember[] = [
  {
    name: "Peter Kirby",
    title: "Managing Director & General Manager",
    phone: "+61 402 735 887",
    email: "peterk@indigospecialty.com",
    image: `${IMG_BASE}/2024/01/Peter_website-1.jpg`,
  },
  {
    name: "Andrew Bull",
    title: "Operations Manager / New Markets Lead",
    phone: "+61 408 744 014",
    email: "andrewb@indigospecialty.com",
    image: `${IMG_BASE}/2024/01/Andrew_website_pic.jpg`,
  },
  {
    name: "Tim Kennedy",
    title: "Business Development Manager — International Sales & NutriForce Duracote",
    phone: "+61 460 628 602",
    email: "timk@indigospecialty.com",
    image: `${IMG_BASE}/2024/01/Tim_website2-1.png`,
  },
  {
    name: "Andrew Melville",
    title: "Regional Account Manager — NSW, QLD, WA",
    phone: "+61 418 146 810",
    email: "andrewm@indigospecialty.com",
    image: `${IMG_BASE}/2024/06/new_Andy_website.jpg`,
  },
  {
    name: "Richard Herzina",
    title: "Regional Account Manager — VIC, NT, SA & TAS",
    phone: "+61 459 256 884",
    email: "richardh@indigospecialty.com",
  },
  {
    name: "Caine James",
    title: "Market Manager — Turf Production",
    phone: "+61 461 423 116",
    email: "cainej@indigospecialty.com",
  },
  {
    name: "Penny Bale",
    title: "Accountant",
    phone: "+61 491 201 694",
    email: "accounts@indigospecialty.com",
    image: `${IMG_BASE}/2024/01/Penny_website-2.jpg`,
  },
  {
    name: "Lesley Pepperell",
    title: "Brand Communications Manager",
    phone: "+61 439 093 285",
    email: "lesleyp@indigospecialty.com",
    image: `${IMG_BASE}/2024/02/Lel_website.png`,
  },
  {
    name: "Helen Yeo",
    title: "Marketing & Administration",
    phone: "+61 491 201 694",
    email: "helen@indigospecialty.com",
  },
  {
    name: "Todd Beckett",
    title: "Warehouse Manager",
    phone: "+61 458 821 806",
    email: "logistics@indigospecialty.com",
  },
];

// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------

export type Testimonial = {
  name: string;
  role: string;
  product?: string;
  quote: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Anthony Kennedy",
    role: "City of Casey (Casey Fields)",
    product: "Scarlet Trio Insecticide",
    quote:
      "Indigo's Scarlet Trio has been an exceptional addition to our insecticide program. Post renovation, and at times under tough mite/fly pressure, it delivers reliable, peace of mind results knowing we are covered, and gives our couch the best chance to bounce back and recover. Low rates and tank mixable with nutrition, I now find our turf is ready for play and back to the high standard quickly.",
  },
  {
    name: "Steve Konkolics",
    role: "Superior Turf Services",
    product: "Curatol 120 SC",
    quote:
      "I manage two sites in Western Sydney that have historically struggled with Argentine Stem Weevil. This season, I added Curatol 120 SC to my preventative program during the peak activity period of December and January and had no issues. I'll continue using it and would recommend it to others.",
  },
  {
    name: "Anthony Kennedy",
    role: "City of Casey (Casey Fields)",
    product: "Agritec Algaecide",
    quote:
      "Being reliant on highly nutritious Class A/Stormwater to irrigate our site, we periodically get algae blooms in our water bodies. Indigo's Agritec Algaecide has been used with great success to improve our water quality and clarity, with no impact on our ecosystem or wildlife. The product works quickly, restoring our water resources back to normal.",
  },
  {
    name: "Bethany Wakefield",
    role: "Conservation Manager, ArborCare QLD",
    product: "ProForce Fast Draw 100 EC",
    quote:
      "ProForce Fast Draw has proven to be a highly effective solution for broad-scale herbicide treatment across the diverse environments we manage at ArborCare Queensland. Its performance on hard-to-control weed species has been particularly impressive — Fleabane, Sow Thistle and multiple Rumex species. One of the standout benefits of Fast Draw is how quickly it works.",
  },
  {
    name: "Grant Rolston",
    role: "Statewide Turf Services",
    product: "Numchuk Quad",
    quote:
      "Numchuk Quad applied to an embankment approximately 5½ months ago. Zero off-target damage at the bottom of this steep embankment. No tree death and minimal weed re-population. A fantastic advertisement for the longevity and efficacy of Numchuk Quad for weed and pre-emergent control over Glyphosate-only application.",
  },
  {
    name: "Colin McPherson",
    role: "Club Tweed — President, QLD Bowling Greenkeepers Assoc.",
    product: "ProForce Scarlet Trio",
    quote:
      "Mid-season results from the targeted program of ProForce Scarlet Trio Insecticide applications conducted to date at Club Tweed have shown great promise. We have seen a large reduction in Ground Pearl numbers in treated greens which have been monitored since July.",
  },
  {
    name: "Pete Dunn",
    role: "Federal Golf Club, Canberra",
    product: "HydroForce Ultra",
    quote:
      "HydroForce Ultra wetting agent is actually 'the best product' I've ever seen by a country mile! Third day of 35 degrees in summer in Canberra and haven't had to put any hand watering on greens.",
  },
  {
    name: "Ben Hartley",
    role: "Rowville Lakes Golf Course, Victoria",
    product: "HydroForce Ultra",
    quote:
      "I have been using HydroForce Ultra monthly, at an application rate of between 10–12 L/Ha. It has vastly improved the profile, by improving water penetration, moisture holding capacity and the ability to re-wet throughout the entire rootzone. Extremely impressive result!",
  },
  {
    name: "Philip Collins",
    role: "Toowoomba, Queensland",
    product: "Duke 100 WG",
    quote:
      "I had a big problem with Onion Weed and after trying other methods with no success, I used Duke 100 WG Herbicide and the results are incredible! In just 3 weeks, the Onion Weed is completely gone and my plants are happier than ever!",
  },
  {
    name: "Darren Turner",
    role: "Twin Peaks Golf & Country Club, Queensland",
    product: "Agritec",
    quote:
      "I have used Indigo Specialty Products' Agritec and had great results. I would have no hesitation in using it again.",
  },
];