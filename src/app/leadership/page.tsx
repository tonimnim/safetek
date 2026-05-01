import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { Reveal } from "@/components/site/reveal";
import { LeadershipCard } from "@/components/site/leadership-card";
import { team } from "@/content/leadership";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Leadership — Founders and operators behind Safetek",
  description:
    "Meet the team running Safetek. Founder Samuel Ndegwa and the engineers, project managers, and designers building software products and AI for businesses across Africa.",
  alternates: { canonical: "/leadership" },
  openGraph: {
    title: "Safetek leadership — Founders and operators",
    description:
      "Founder Samuel Ndegwa and the team building Safetek's software products and AI services for businesses across Africa.",
    url: "/leadership",
    type: "website",
  },
};

const leadershipLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: team.map((m, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Person",
      name: m.name,
      jobTitle: m.title,
      description: m.bio,
      worksFor: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      image: m.photo.startsWith("http")
        ? m.photo
        : `${siteConfig.url}${m.photo}`,
      knowsAbout: m.tags,
    },
  })),
};

export default function LeadershipPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(leadershipLd) }}
      />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <section className="relative overflow-hidden bg-section-cream">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 right-[-10%] h-[360px] w-[360px] animate-float rounded-full bg-[radial-gradient(circle,rgba(255,136,0,0.18),transparent_60%)] blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[-30%] left-[-10%] h-[320px] w-[320px] animate-float rounded-full bg-[radial-gradient(circle,rgba(232,90,39,0.16),transparent_60%)] blur-3xl"
            style={{ animationDelay: "1.4s" }}
          />

          <div className="relative mx-auto w-full max-w-3xl px-6 pb-14 pt-28 sm:px-8 md:px-12 md:pb-16 md:pt-32 lg:px-16">
            <Reveal>
              <Badge
                variant="outline"
                className="rounded-full border-brand/40 bg-brand/5 text-brand"
              >
                Leadership
              </Badge>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                The team behind{" "}
                <span className="text-gradient-brand">Safetek</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-5 max-w-xl text-muted-foreground md:text-lg">
                Founders and operators who pick the work, ship the work, and
                stand by it after it ships.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-brand" />
                  <span>Headquartered in Nairobi</span>
                </div>
                <span className="hidden h-4 w-px bg-border sm:block" />
                <span>
                  <span className="font-semibold text-foreground">5</span>{" "}
                  builders, one operating principle
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#100806] text-white">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.10]"
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
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 right-[-10%] h-[500px] w-[500px] animate-drift rounded-full bg-[radial-gradient(circle,rgba(255,136,0,0.22),transparent_60%)] blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] animate-drift-reverse rounded-full bg-[radial-gradient(circle,rgba(232,90,39,0.28),transparent_60%)] blur-3xl"
          />

          <div className="relative mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 md:px-12 md:py-24 lg:px-16">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {team.map((member, i) => (
                <Reveal key={member.name} delay={i * 70}>
                  <LeadershipCard member={member} index={i} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-section-cream">
          <div className="mx-auto w-full max-w-3xl px-6 py-14 text-center sm:px-8 md:px-12 md:py-20 lg:px-16">
            <Reveal>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Want to{" "}
                <span className="text-gradient-brand">join</span> them?
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                We hire infrequently and carefully. If our work looks like the
                kind you want to do, send a CV and a paragraph on what
                you&apos;ve shipped.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-7 flex justify-center">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-brand text-white hover:bg-brand/90"
                >
                  <Link href="/careers">
                    See careers
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
