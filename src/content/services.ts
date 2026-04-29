import type { LucideIcon } from "lucide-react";
import {
  Bus,
  Megaphone,
  Package,
  PiggyBank,
  Stethoscope,
  TrendingUp,
  Trophy,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  tag: "Product" | "Service";
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  highlights: string[];
  deliverables: { title: string; description: string }[];
  outcomes: { value: string; label: string }[];
  gradient: string;
  link?: { label: string; href: string };
};

export const services: Service[] = [
  {
    slug: "komiut",
    icon: Bus,
    tag: "Product",
    title: "Komiut",
    tagline: "Transit operations, digitized end to end",
    description:
      "End-to-end transport management system that digitizes fleets, ticketing, and operations for transit operators.",
    longDescription:
      "Komiut is the operating system for matatu and bus operators. It replaces paper logbooks, manual ticketing, and disconnected fleet trackers with one platform — drivers, conductors, dispatchers, and fleet owners all working from the same source of truth. Built for African transit, deployed across Nairobi.",
    highlights: [
      "Driver and conductor mobile apps",
      "Live fleet visibility for dispatchers",
      "Automated revenue reconciliation",
      "Compliance and SACCO reporting",
    ],
    deliverables: [
      {
        title: "Driver app",
        description:
          "Routes, passenger counts, and earnings in the driver's pocket — works offline and syncs when reconnected.",
      },
      {
        title: "Operations console",
        description:
          "Web dashboard for dispatchers to track every vehicle, ticket, and incident in real time.",
      },
      {
        title: "Owner reports",
        description:
          "Daily, weekly, and monthly performance and finance reports delivered automatically.",
      },
    ],
    outcomes: [
      { value: "40%", label: "Revenue leakage cut" },
      { value: "3×", label: "Faster reconciliation" },
      { value: "99.9%", label: "App uptime" },
    ],
    gradient: "from-orange-500 via-amber-500 to-rose-500",
  },
  {
    slug: "k-parcel",
    icon: Package,
    tag: "Product",
    title: "K~Parcel",
    tagline: "Live delivery tracking that customers actually trust",
    description:
      "GPS-powered delivery tracking with live route visibility, proof of delivery, and customer notifications.",
    longDescription:
      "K~Parcel is what happens when you treat delivery as a product surface, not a back-office concern. Couriers get a clean dispatch app, customers get a live map and ETA, and operations get the dashboard they actually need to run a courier business.",
    highlights: [
      "Live GPS tracking on every parcel",
      "Photo and signature proof of delivery",
      "Automated SMS and WhatsApp updates",
      "Route optimization for last-mile",
    ],
    deliverables: [
      {
        title: "Courier app",
        description:
          "Pickup, navigation, and proof-of-delivery in one flow. Tested on Android-go devices.",
      },
      {
        title: "Customer tracking page",
        description:
          "A branded live tracking page — no app install, just a link.",
      },
      {
        title: "Ops dashboard",
        description:
          "Live board view of every active delivery, late jobs flagged in red.",
      },
    ],
    outcomes: [
      { value: "92%", label: "On-time deliveries" },
      { value: "−60%", label: "WISMO support tickets" },
      { value: "12k+", label: "Parcels routed monthly" },
    ],
    gradient: "from-blue-500 via-sky-500 to-cyan-400",
  },
  {
    slug: "telemedicine",
    icon: Stethoscope,
    tag: "Product",
    title: "Telemedicine",
    tagline: "Secure clinical care, anywhere with a signal",
    description:
      "Connect patients to clinicians anywhere — secure video consults, prescriptions, and patient records.",
    longDescription:
      "TeleCare is a clinic in your pocket. Patients book, consult, and receive prescriptions without traveling. Clinicians get a proper EMR, structured notes, and a queue that respects their time. Designed with infection-control protocols and Kenyan health regulations in mind.",
    highlights: [
      "End-to-end encrypted video consults",
      "Digital prescriptions with audit trail",
      "Patient records that follow them",
      "Insurer-ready billing exports",
    ],
    deliverables: [
      {
        title: "Patient app",
        description:
          "Browse clinicians, book a slot, join a consult — works on 3G.",
      },
      {
        title: "Clinician portal",
        description:
          "Calendar, EMR, prescription pad, and billing all in one tab.",
      },
      {
        title: "Admin and compliance",
        description:
          "User management, audit logs, and exports built for regulatory review.",
      },
    ],
    outcomes: [
      { value: "<2 min", label: "Average wait time" },
      { value: "85%", label: "Repeat-consult rate" },
      { value: "HIPAA-aligned", label: "Data handling" },
    ],
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    slug: "cuesports-africa",
    icon: Trophy,
    tag: "Product",
    title: "Cuesports Africa",
    tagline: "A digital home for African cue sports",
    description:
      "Tournaments, rankings, players, and venues for the African snooker, pool, and billiards community — in one place.",
    longDescription:
      "Cuesports Africa brings the continent's cue sports community online. Organizers list tournaments, players register and track their rankings, and clubs get profile pages that make the scene navigable.",
    highlights: [
      "Tournament listings and registration",
      "Player profiles and head-to-head stats",
      "Continental and national rankings",
      "Venue and club directory",
    ],
    deliverables: [
      {
        title: "Tournament platform",
        description:
          "Organizers create tournaments, players register, brackets generate automatically.",
      },
      {
        title: "Rankings engine",
        description:
          "National and continental rankings updated as matches conclude.",
      },
      {
        title: "Community profiles",
        description:
          "Player profiles, club pages, and venue listings.",
      },
    ],
    outcomes: [
      { value: "Pan-African", label: "Reach" },
      { value: "Live", label: "Rankings" },
      { value: "All disciplines", label: "Cue sports" },
    ],
    gradient: "from-emerald-600 via-green-500 to-amber-400",
    link: { label: "Visit cuesports.africa", href: "https://cuesports.africa/" },
  },
  {
    slug: "digital-marketing",
    icon: Megaphone,
    tag: "Service",
    title: "Digital Marketing",
    tagline: "Performance marketing that respects your CAC",
    description:
      "Performance-driven campaigns, SEO, and content that turn visitors into customers across every channel.",
    longDescription:
      "We treat marketing like engineering — measurable, instrumented, iterative. We don't ship vanity reports. We ship customers, attached to a unit-economics spreadsheet you can defend in a board meeting.",
    highlights: [
      "Paid acquisition across Meta, Google, TikTok",
      "Programmatic SEO and content systems",
      "Conversion-rate optimization",
      "Attribution and dashboards built in",
    ],
    deliverables: [
      {
        title: "Acquisition engine",
        description:
          "Multi-channel paid funnel with shared creative testing and weekly performance reviews.",
      },
      {
        title: "SEO foundation",
        description:
          "Technical audit, content cluster strategy, and a publishing system your team can run.",
      },
      {
        title: "Reporting stack",
        description:
          "A live dashboard wired to your real revenue, not just clicks.",
      },
    ],
    outcomes: [
      { value: "−35%", label: "Blended CAC" },
      { value: "4.2×", label: "Organic traffic in 6 months" },
      { value: "Weekly", label: "Reporting cadence" },
    ],
    gradient: "from-violet-500 via-fuchsia-500 to-pink-500",
  },
  {
    slug: "growth-strategy",
    icon: TrendingUp,
    tag: "Service",
    title: "Growth Strategy",
    tagline: "Funnel work that compounds, not one-off hacks",
    description:
      "Data-led growth playbooks built around your funnel — onboarding, retention, and monetization.",
    longDescription:
      "Growth is plumbing. We map your funnel end-to-end, identify the leaks, and patch them in priority order. Onboarding, activation, retention, monetization, referral — measured, instrumented, and shipped as actual product or marketing changes.",
    highlights: [
      "Full-funnel audit with hard numbers",
      "Activation and onboarding redesign",
      "Retention and lifecycle programs",
      "Pricing and packaging consults",
    ],
    deliverables: [
      {
        title: "Growth audit",
        description:
          "A 30-day deep-dive with a prioritized list of bets and expected lift for each.",
      },
      {
        title: "Activation rebuild",
        description:
          "We redesign and ship the first-run experience that gets users to value, fast.",
      },
      {
        title: "Lifecycle program",
        description:
          "Email, push, and in-product nudges wired to behavioral triggers.",
      },
    ],
    outcomes: [
      { value: "+22%", label: "D7 retention lift" },
      { value: "+18%", label: "Activation rate" },
      { value: "30 days", label: "Audit to first ship" },
    ],
    gradient: "from-amber-500 via-orange-500 to-red-500",
  },
  {
    slug: "saving-strategy",
    icon: PiggyBank,
    tag: "Service",
    title: "Saving Strategy",
    tagline: "Cloud and tooling cost engineering",
    description:
      "Cost engineering for cloud, infra, and tooling — measurable savings without compromising velocity.",
    longDescription:
      "We audit your infra, your SaaS stack, and your build pipeline, and we find the line items quietly bleeding margin. Most clients see 25–45% reduction in monthly spend within the first quarter — without slowing the team down.",
    highlights: [
      "Cloud cost audit (AWS, GCP, Azure)",
      "SaaS rationalization",
      "Build and CI optimization",
      "Right-sizing and reserved-capacity strategy",
    ],
    deliverables: [
      {
        title: "Infra audit",
        description:
          "Line-by-line breakdown of every cloud line item with savings opportunities.",
      },
      {
        title: "Implementation sprint",
        description:
          "We do the boring work — right-size instances, clean up zombie resources, restructure pipelines.",
      },
      {
        title: "Ongoing review",
        description:
          "Monthly cost-trend review so the savings stick instead of drifting back up.",
      },
    ],
    outcomes: [
      { value: "−38%", label: "Average monthly spend" },
      { value: "0", label: "Velocity hit" },
      { value: "90 days", label: "Typical payback" },
    ],
    gradient: "from-emerald-500 via-lime-500 to-amber-400",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
