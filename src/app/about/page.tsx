import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Compass,
  Cpu,
  Globe,
  MapPin,
  Rocket,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { Reveal } from "@/components/site/reveal";
import { AboutNumberCard } from "@/components/site/about-number-card";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Safetek — Software & AI company in Nairobi, Kenya",
  description:
    "Safetek is a software and AI company headquartered in Nairobi, Kenya. Founded in 2021. We build SaaS products for mobility, logistics, and healthcare across Africa, and partner with teams developing their own. Specialists in M-Pesa integration, fleet management, telemedicine, and AI engineering.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Safetek — Software & AI company in Nairobi, Kenya",
    description:
      "Safetek is a software and AI company headquartered in Nairobi, Kenya. Founded in 2021. We build SaaS products for mobility, logistics, and healthcare across Africa.",
    url: "/about",
    type: "website",
  },
};

const stats = [
  { end: 2021, label: "Founded in" },
  { end: 15, suffix: "+", label: "Products shipped" },
  { end: 200, suffix: "+", label: "Clients served" },
  { end: 7, label: "Industries served" },
];

const milestones = [
  {
    year: "2021",
    title: "Two engineers, one room",
    body: "Started in a Nairobi co-working space with a stubborn belief: African software shouldn't be a port of something built for somewhere else.",
  },
  {
    year: "2022",
    title: "First product live",
    body: "Komiut went into production with a single transit operator. We rebuilt it three times in eighteen months. The fourth version is what's in the field today.",
  },
  {
    year: "2024",
    title: "Three products, three industries",
    body: "K~Parcel and TeleCare joined the lineup. Mobility, logistics, healthcare — all running on the same engineering muscle.",
  },
  {
    year: "2026",
    title: "AI-native, intentionally",
    body: "Routing intelligence, demand prediction, clinical co-pilots — AI baked into the products we already ship, plus a consultancy practice for teams new to the discipline.",
  },
];

const principles = [
  {
    icon: BrainCircuit,
    title: "AI is leverage, not magic.",
    body: "We ship AI where it moves a number — better routes, better forecasts, better support — and we measure the lift. We do not ship AI as a marketing badge.",
  },
  {
    icon: Globe,
    title: "Built for African networks first.",
    body: "Unstable 3G, $40 phones, erratic power. Designed for those constraints, our software runs cleanly anywhere. The reverse is rarely true.",
  },
  {
    icon: Cpu,
    title: "Boring infrastructure earns its keep.",
    body: "A small, well-tuned VM has saved more clients more money than any framework migration. We optimize for outcomes, not for the resume of the engineer who built it.",
  },
  {
    icon: Rocket,
    title: "Ship every quarter. Learn every month.",
    body: "Plans are guesses; data is real. We instrument early, ship often, and let the numbers tell us where to go next.",
  },
];

const aiPillars = [
  {
    icon: Sparkles,
    title: "AI Engineering",
    body: "We build AI into production systems — embeddings, retrieval, agent orchestration, evaluation, and safety rails. Done right, AI is just another piece of infrastructure.",
    capabilities: [
      "LLM integration & fine-tuning",
      "RAG and vector pipelines",
      "Agent orchestration",
      "Eval frameworks & guardrails",
    ],
  },
  {
    icon: Compass,
    title: "AI Consultancy",
    body: "Strategy and architecture for teams new to AI. We help you choose models, design evaluations, and avoid the well-trodden traps before you spend a quarter learning them yourself.",
    capabilities: [
      "Model selection & costing",
      "Build vs. buy strategy",
      "Architecture review",
      "Eval & observability design",
    ],
  },
  {
    icon: Cpu,
    title: "AI-Native Products",
    body: "Intelligence baked into the software we already ship — Komiut's predictive routing, K~Parcel's adaptive ETAs, TeleCare's clinical co-pilot. AI that earns its place in the product.",
    capabilities: [
      "Predictive routing",
      "Demand forecasting",
      "Anomaly detection",
      "Conversational interfaces",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <AboutHero />
        <NumbersBand />
        <StoryTimeline />
        <Manifesto />
        <AiBand />
        <ClosingCTA />
      </main>
      <SiteFooter />
    </>
  );
}

function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#100806] text-white">
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image
          src="/about-team.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="scale-110 object-cover object-center blur-2xl"
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/55 to-[#100806]/90"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_80%_20%,rgba(232,90,39,0.32),transparent_60%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.10]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-6 pb-24 pt-32 text-center sm:px-8 md:px-12 md:pb-32 md:pt-40 lg:px-16">
        <Reveal>
          <Badge
            variant="outline"
            className="rounded-full border-white/20 bg-white/10 text-white/85 backdrop-blur"
          >
            Our story
          </Badge>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-[4.5rem]">
            Building <span className="text-gradient-brand">software</span>{" "}
            since 2021.
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-white/80 md:text-lg">
            Safetek is a software and AI company. We build SaaS products for
            businesses across mobility, logistics, and healthcare, and we work
            with teams developing their own. Our software is used by hundreds
            of operators every day.
          </p>
        </Reveal>
        <Reveal delay={280}>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="pulse-glow rounded-full bg-brand px-7 text-white hover:bg-brand/90"
            >
              <Link href="/#contact">
                Work with us
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/20 bg-white/5 px-7 text-white backdrop-blur hover:bg-white/10 hover:text-white"
            >
              <Link href="/#projects">See our work</Link>
            </Button>
          </div>
        </Reveal>
        <Reveal delay={360}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-brand" />
              <span>Nairobi, Kenya</span>
            </div>
            <span className="hidden h-4 w-px bg-white/20 sm:block" />
            <span>
              <span className="font-semibold text-white">Since 2021</span> ·
              independent
            </span>
            <span className="hidden h-4 w-px bg-white/20 sm:block" />
            <span>
              <span className="font-semibold text-white">Remote-friendly</span>{" "}
              · ships globally
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function NumbersBand() {
  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <AboutNumberCard
                end={s.end}
                suffix={"suffix" in s ? (s as { suffix?: string }).suffix : undefined}
                label={s.label}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StoryTimeline() {
  return (
    <section className="bg-section-cream">
      <div className="mx-auto w-full max-w-3xl px-6 py-14 sm:px-8 md:px-12 md:py-20 lg:px-16">
        <Reveal>
          <div className="text-center">
            <Badge
              variant="outline"
              className="rounded-full border-brand/40 bg-brand/5 text-brand"
            >
              The journey
            </Badge>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
              From two engineers to a{" "}
              <span className="text-gradient-brand">platform</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Five years, four products, one stubborn idea: that the next
              generation of African software should be built here, not imported
              from somewhere else.
            </p>
          </div>
        </Reveal>

        <ol className="relative mt-14 space-y-10 border-l border-brand/30 pl-8">
          {milestones.map((m, i) => (
            <Reveal key={m.year} delay={i * 100}>
              <li className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[2.4rem] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand text-white shadow-[0_8px_20px_-8px_rgba(232,90,39,0.6)]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
                  {m.year}
                </p>
                <h3 className="mt-1 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                  {m.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{m.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="grain relative overflow-hidden bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/3 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(232,90,39,0.10),transparent_60%)] blur-3xl"
      />
      <div className="relative mx-auto w-full max-w-6xl px-6 py-14 sm:px-8 md:px-12 md:py-20 lg:px-16">
        <Reveal>
          <div className="max-w-2xl">
            <Badge
              variant="outline"
              className="rounded-full border-brand/40 bg-brand/5 text-brand"
            >
              What we believe
            </Badge>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
              Four ideas we <span className="text-gradient-brand">refuse</span>{" "}
              to compromise on.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <PrincipleCard
                icon={p.icon}
                index={i}
                title={p.title}
                body={p.body}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PrincipleCard({
  icon: Icon,
  index,
  title,
  body,
}: {
  icon: typeof Sparkles;
  index: number;
  title: string;
  body: string;
}) {
  return (
    <div className="group hover-lift relative h-full overflow-hidden rounded-2xl border border-border/60 bg-white p-7">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gradient-to-br from-orange-200/70 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="relative flex items-center justify-between">
        <span
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-xl ring-1 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
            index % 2 === 0
              ? "bg-brand/10 text-brand ring-brand/20"
              : "bg-foreground/[0.04] text-foreground ring-border",
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          / 0{index + 1}
        </span>
      </div>
      <h3 className="relative mt-6 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
        {title}
      </h3>
      <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
        {body}
      </p>
    </div>
  );
}

function AiBand() {
  return (
    <section className="relative overflow-hidden bg-[#100806] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-[500px] w-[500px] animate-float rounded-full bg-[radial-gradient(circle,rgba(255,136,0,0.28),transparent_60%)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] animate-float rounded-full bg-[radial-gradient(circle,rgba(232,90,39,0.32),transparent_60%)] blur-3xl"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-14 sm:px-8 md:px-12 md:py-20 lg:px-16">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <Badge
                variant="outline"
                className="rounded-full border-white/20 bg-white/5 text-white/80"
              >
                AI Solutions
              </Badge>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl">
                Built for the{" "}
                <span className="text-gradient-brand">AI era</span>, not bolted
                onto it.
              </h2>
              <p className="mt-4 max-w-xl text-white/70">
                We treat AI as a discipline, not a press release. Three lanes —
                engineering, consultancy, and AI-native products — each backed
                by the same rule: ship something that moves a number, or don&apos;t
                ship at all.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-brand text-white hover:bg-brand/90"
            >
              <Link href="/#contact">
                Talk to our AI team
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {aiPillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <AiCard
                icon={p.icon}
                title={p.title}
                body={p.body}
                capabilities={p.capabilities}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AiCard({
  icon: Icon,
  title,
  body,
  capabilities,
}: {
  icon: typeof Sparkles;
  title: string;
  body: string;
  capabilities: string[];
}) {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur transition-all duration-500 hover:border-brand/40 hover:bg-white/[0.04]">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-brand/15 text-brand ring-1 ring-brand/30">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="relative mt-6 text-xl font-semibold tracking-tight text-white md:text-2xl">
        {title}
      </h3>
      <p className="relative mt-3 text-sm leading-relaxed text-white/70">
        {body}
      </p>
      <ul className="relative mt-6 space-y-2 border-t border-white/10 pt-5 text-sm text-white/80">
        {capabilities.map((c) => (
          <li key={c} className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand" />
            <span>{c}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ClosingCTA() {
  return (
    <section className="relative overflow-hidden bg-section-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(232,90,39,0.18),transparent_60%)] blur-3xl"
      />
      <div className="relative mx-auto w-full max-w-4xl px-6 py-16 text-center sm:px-8 md:px-12 md:py-24 lg:px-16">
        <Reveal>
          <Badge
            variant="outline"
            className="rounded-full border-brand/40 bg-brand/5 text-brand"
          >
            Let&apos;s build
          </Badge>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Have a problem worth{" "}
            <span className="text-gradient-brand">solving?</span>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground md:text-lg">
            We take on a small number of engagements a quarter — engineering,
            AI, or both. Tell us what you&apos;re trying to ship and we&apos;ll
            come back within a business day.
          </p>
        </Reveal>
        <Reveal delay={280}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="pulse-glow rounded-full bg-brand px-7 text-white hover:bg-brand/90"
            >
              <Link href="/#contact">
                Talk to us
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-border/70 bg-white px-7 text-foreground hover:bg-foreground/[0.04]"
            >
              <Link href="/blog">Read the journal</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
