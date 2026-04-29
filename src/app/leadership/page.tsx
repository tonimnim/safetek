import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { Reveal } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "Leadership — Safetek",
  description:
    "The people running Safetek. Founders and operators behind the products and engagements.",
};

type Member = {
  name: string;
  title: string;
  bio: string;
  photo: string;
  tags: string[];
  linkedin?: string;
};

const team: Member[] = [
  {
    name: "Samuel Ndegwa",
    title: "Founder & CEO",
    bio: "Founded Safetek in 2021. Leads strategy, partnerships, and the relationships behind every engagement.",
    photo: "https://i.pravatar.cc/600?img=12",
    tags: ["Strategy", "Partnerships"],
    linkedin: "#",
  },
  {
    name: "Millicent",
    title: "Project Manager",
    bio: "Runs delivery across every engagement. Turns client needs into shipped work and keeps the team focused on what's next.",
    photo: "https://i.pravatar.cc/600?img=49",
    tags: ["Delivery", "Process"],
    linkedin: "#",
  },
  {
    name: "Mary Lyne",
    title: "Head of Operations & Design",
    bio: "Owns operations and product design. Where the company's polish — internal and external — comes from.",
    photo: "https://i.pravatar.cc/600?img=26",
    tags: ["Operations", "Design"],
    linkedin: "#",
  },
  {
    name: "Eric",
    title: "Head of Engineering",
    bio: "Leads engineering. Owns architecture and the technical decisions behind every product Safetek ships.",
    photo: "https://i.pravatar.cc/600?img=33",
    tags: ["Backend", "Architecture"],
    linkedin: "#",
  },
  {
    name: "Anthony Mwangi",
    title: "Software Engineer (Mobile)",
    bio: "Builds mobile apps and contributes across backend and frontend systems. Closest to the device, where most users meet the work.",
    photo: "https://i.pravatar.cc/600?img=51",
    tags: ["Mobile", "Frontend"],
    linkedin: "#",
  },
];

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5v-9h3v9ZM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75ZM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19a.66.66 0 0 0 0 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66Z" />
    </svg>
  );
}

function LeadershipCard({ member, index }: { member: Member; index: number }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_30px_60px_-20px_rgba(232,90,39,0.25)]">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={member.photo}
          alt={member.name}
          className="h-full w-full object-cover saturate-[1.05] transition-all duration-[900ms] group-hover:scale-[1.06] group-hover:saturate-[1.15]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-brand/30 via-brand/0 to-transparent opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-100"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent"
        />
        <span className="absolute right-4 top-4 rounded-full bg-black/35 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur">
          / 0{index + 1}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-6 bg-brand" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand">
            {member.title}
          </p>
        </div>

        <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
          {member.name}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {member.bio}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-border/40 pt-4">
          <div className="flex flex-wrap gap-1.5">
            {member.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-foreground/[0.04] px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          {member.linkedin ? (
            <a
              href={member.linkedin}
              aria-label={`${member.name} on LinkedIn`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-brand/5 hover:text-brand"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function LeadershipPage() {
  return (
    <>
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

        <section className="bg-background">
          <div className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-8 md:px-12 md:py-20 lg:px-16">
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
