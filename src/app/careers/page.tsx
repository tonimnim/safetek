import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { Reveal } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "Careers — Engineering, AI, and product roles at Safetek",
  description:
    "Build with Safetek in Nairobi. Engineering, AI, mobile, product, and operations roles for builders who want to ship software used by hundreds of operators across Africa.",
  alternates: { canonical: "/careers" },
  keywords: [
    "Safetek careers",
    "software engineer jobs Nairobi",
    "AI engineer jobs Kenya",
    "tech jobs Nairobi",
    "developer jobs Kenya",
    "mobile engineer Nairobi",
    "remote engineering jobs Africa",
    "tech careers Kenya",
  ],
  openGraph: {
    title: "Careers at Safetek — Build with us",
    description:
      "Engineering, AI, and product roles at a Nairobi-based software & AI company shipping products used across Africa.",
    url: "/careers",
    type: "website",
  },
};

const principles = [
  {
    title: "We hire generalists",
    body: "Your job title is a starting point. The work crosses lines — engineering, design, product, ops — and we look for people who like that.",
  },
  {
    title: "We pay fairly, in cash",
    body: "We do not run on equity-as-promise. Compensation is at the upper end of Nairobi market rates, paid in cash, reviewed annually.",
  },
  {
    title: "We work in person",
    body: "Most of the team is in Nairobi and works from the office. Remote arrangements happen when the role calls for it, but the default is co-located.",
  },
  {
    title: "We promise honesty, not certainty",
    body: "We will tell you what we know and what we do not know, including about your interview, your performance, and the state of the business.",
  },
];

export default function CareersPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <section className="relative overflow-hidden bg-section-cream">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 right-[-10%] h-[360px] w-[360px] animate-float rounded-full bg-[radial-gradient(circle,rgba(255,136,0,0.18),transparent_60%)] blur-3xl"
          />
          <div className="relative mx-auto w-full max-w-3xl px-6 pb-12 pt-28 sm:px-8 md:px-12 md:pb-16 md:pt-32 lg:px-16">
            <Reveal>
              <Badge
                variant="outline"
                className="rounded-full border-brand/40 bg-brand/5 text-brand"
              >
                Careers
              </Badge>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                Build with{" "}
                <span className="text-gradient-brand">Safetek</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-5 max-w-xl text-muted-foreground md:text-lg">
                We hire infrequently and carefully. There are no roles open
                today, but we keep a list. If our work is the kind you want to
                do, send us a CV and a paragraph on what you have shipped.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-brand px-7 text-white hover:bg-brand/90"
                >
                  <a href="mailto:careers@safetek.co.ke">
                    <Mail className="mr-1 h-4 w-4" />
                    careers@safetek.co.ke
                  </a>
                </Button>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-brand" />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-8 md:px-12 md:py-20 lg:px-16">
            <Reveal>
              <div className="max-w-2xl">
                <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  How we hire
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Four things we will not compromise on, in case they help you
                  decide whether we are a fit.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {principles.map((p, i) => (
                <Reveal key={p.title} delay={i * 90}>
                  <div className="hover-lift rounded-2xl border border-border/60 bg-white p-7">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      / 0{i + 1}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-section-cream">
          <div className="mx-auto w-full max-w-3xl px-6 py-14 text-center sm:px-8 md:px-12 md:py-20 lg:px-16">
            <Reveal>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Open roles
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Nothing public right now. The fastest way in is to email us
                with what you have built. We read every message and reply
                within a week.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-7 flex justify-center">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-foreground px-7 text-background hover:bg-foreground/90"
                >
                  <Link href="/#contact">
                    Reach out
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
