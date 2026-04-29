export type Project = {
  slug: string;
  title: string;
  category: string;
  blurb: string;
  longDescription: string;
  client: string;
  year: string;
  role: string;
  link?: { label: string; href: string };
  technologies: string[];
  outcomes: { value: string; label: string }[];
  gradient: string;
  emoji: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "komiut-driver",
    title: "Komiut Driver",
    category: "Mobility",
    blurb:
      "Operator app for matatu and bus drivers — routes, passengers, and earnings in one place.",
    longDescription:
      "We rebuilt the driver experience from scratch. Old flow: a paper trip sheet, a feature phone, and a clipboard. New flow: a single app that handles route assignment, passenger manifests, fare collection, and end-of-shift reconciliation, all offline-first because driver phones spend half the day on flaky 3G.",
    client: "Komiut Holdings",
    year: "2024",
    role: "Product, design, and full-stack engineering",
    link: { label: "View on Play Store", href: "#" },
    technologies: [
      "React Native",
      "Expo",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "MapBox",
    ],
    outcomes: [
      { value: "40%", label: "Revenue leakage reduced" },
      { value: "1,200+", label: "Active drivers" },
      { value: "99.9%", label: "Sync reliability" },
    ],
    highlights: [
      "Offline-first sync engine",
      "Live route assignment",
      "Daily earnings ledger",
      "M-Pesa fare integration",
    ],
    gradient: "from-orange-500 via-amber-500 to-rose-500",
    emoji: "🚌",
  },
  {
    slug: "k-parcel-live",
    title: "K~Parcel Live",
    category: "Logistics",
    blurb:
      "Real-time delivery dashboard with live GPS, ETAs, and proof of delivery for couriers.",
    longDescription:
      "A dispatcher's command center. Every active parcel rendered as a live dot on a Nairobi map, color-coded by SLA, with one-click escalation to the courier. We obsessed over the at-a-glance feedback loop — which parcels need attention, which are on track — so a single dispatcher can run a fleet of 80 couriers without losing the thread.",
    client: "K~Parcel",
    year: "2024",
    role: "Product engineering and dashboard design",
    link: { label: "Visit kparcel.co.ke", href: "#" },
    technologies: [
      "Next.js",
      "WebSockets",
      "PostgreSQL",
      "MapBox",
      "Twilio",
      "Cloudflare Workers",
    ],
    outcomes: [
      { value: "92%", label: "On-time delivery" },
      { value: "−60%", label: "Where-is-my-order tickets" },
      { value: "12k+", label: "Parcels per month" },
    ],
    highlights: [
      "Live map with second-resolution updates",
      "SLA-aware alert system",
      "Branded customer tracking page",
      "Photo + signature PoD",
    ],
    gradient: "from-blue-500 via-sky-500 to-cyan-400",
    emoji: "📦",
  },
  {
    slug: "telecare",
    title: "TeleCare",
    category: "Healthcare",
    blurb:
      "Secure video consults, prescriptions, and digital records for clinicians and patients.",
    longDescription:
      "A telehealth platform built for low-bandwidth Kenyan networks. End-to-end encrypted video that gracefully degrades to audio, structured clinical notes that don't slow doctors down, and an EMR that respects how clinicians actually think. Built with one of Nairobi's largest private clinic networks.",
    client: "TeleCare Health",
    year: "2025",
    role: "Platform engineering and clinical UX",
    technologies: [
      "Next.js",
      "WebRTC",
      "PostgreSQL",
      "AWS",
      "FHIR-compatible schema",
    ],
    outcomes: [
      { value: "<2 min", label: "Patient wait time" },
      { value: "4.8/5", label: "Clinician satisfaction" },
      { value: "85%", label: "Repeat consult rate" },
    ],
    highlights: [
      "E2E encrypted WebRTC video",
      "Auto audio fallback on weak signal",
      "Structured prescription pad",
      "Audit-ready clinical records",
    ],
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    emoji: "🩺",
  },
  {
    slug: "komiut-admin",
    title: "Komiut Admin",
    category: "Mobility",
    blurb:
      "Operations console for fleet owners — performance, finances, and compliance at a glance.",
    longDescription:
      "If the driver app is the cockpit, this is the tower. Fleet owners log in to see every vehicle, every shift, every shilling — with finance, compliance, and performance views that match how SACCO operations actually work.",
    client: "Komiut Holdings",
    year: "2024",
    role: "Web product engineering",
    technologies: ["Next.js", "tRPC", "PostgreSQL", "Recharts"],
    outcomes: [
      { value: "3×", label: "Faster reconciliation" },
      { value: "100%", label: "Compliance automation" },
      { value: "Daily", label: "Auto reports" },
    ],
    highlights: [
      "Live fleet performance dashboard",
      "SACCO compliance exports",
      "Driver league tables",
      "Automated daily P&L",
    ],
    gradient: "from-violet-500 via-fuchsia-500 to-pink-500",
    emoji: "📊",
  },
  {
    slug: "saferoute",
    title: "Saferoute",
    category: "Mapping",
    blurb:
      "Routing engine that ranks paths by safety, traffic, and time — built for African cities.",
    longDescription:
      "Most routing engines optimize for time. Saferoute optimizes for survival. We built a routing layer on top of OSM that incorporates incident data, road condition reports, and time-of-day risk profiles to suggest paths that don't end with you on a forum thread.",
    client: "Internal R&D",
    year: "2025",
    role: "Engine design and crowdsourced data pipeline",
    technologies: [
      "OSRM",
      "PostGIS",
      "Rust",
      "Cloudflare Workers",
      "Mapbox GL",
    ],
    outcomes: [
      { value: "−45%", label: "Reported incidents" },
      { value: "+8 min", label: "Avg time tradeoff" },
      { value: "4 cities", label: "Live coverage" },
    ],
    highlights: [
      "Custom safety-weighted routing graph",
      "Crowdsourced incident reporting",
      "Time-of-day risk modeling",
      "Mapbox GL visualization layer",
    ],
    gradient: "from-amber-500 via-orange-500 to-red-500",
    emoji: "🗺️",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
