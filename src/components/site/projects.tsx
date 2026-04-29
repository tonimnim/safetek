"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

type Project = {
  title: string;
  category: string;
  blurb: string;
  gradient: string;
  emoji: string;
};

const projects: Project[] = [
  {
    title: "Komiut Driver",
    category: "Mobility",
    blurb:
      "Operator app for matatu and bus drivers — routes, passengers, and earnings in one place.",
    gradient: "from-orange-500 via-amber-500 to-rose-500",
    emoji: "🚌",
  },
  {
    title: "K~Parcel Live",
    category: "Logistics",
    blurb:
      "Real-time delivery dashboard with live GPS, ETAs, and proof of delivery for couriers.",
    gradient: "from-blue-500 via-sky-500 to-cyan-400",
    emoji: "📦",
  },
  {
    title: "TeleCare",
    category: "Healthcare",
    blurb:
      "Secure video consults, prescriptions, and digital records for clinicians and patients.",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    emoji: "🩺",
  },
  {
    title: "Komiut Admin",
    category: "Mobility",
    blurb:
      "Operations console for fleet owners — performance, finances, and compliance at a glance.",
    gradient: "from-violet-500 via-fuchsia-500 to-pink-500",
    emoji: "📊",
  },
  {
    title: "Saferoute",
    category: "Mapping",
    blurb:
      "Routing engine that ranks paths by safety, traffic, and time — built for African cities.",
    gradient: "from-amber-500 via-orange-500 to-red-500",
    emoji: "🗺️",
  },
];

export function Projects() {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    const node = track?.children[active] as HTMLElement | undefined;
    if (!track || !node) return;
    const left = node.offsetLeft - (track.clientWidth - node.clientWidth) / 2;
    track.scrollTo({ left, behavior: "smooth" });
  }, [active]);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#0e0907] py-14 text-white md:py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,136,0,0.18),transparent_60%)]"
      />
      <div className="relative mx-auto w-full max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <Badge
                variant="outline"
                className="rounded-full border-white/20 bg-white/5 text-white/80"
              >
                Latest work
              </Badge>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl">
                See our latest{" "}
                <span className="text-gradient-brand">projects</span>
              </h2>
              <p className="mt-4 max-w-md text-white/70">
                A glimpse at the products we&apos;re shipping for clients across
                mobility, logistics, and healthcare.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous project"
                onClick={() =>
                  setActive((a) => (a - 1 + projects.length) % projects.length)
                }
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur transition hover:bg-white/10"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Next project"
                onClick={() => setActive((a) => (a + 1) % projects.length)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand transition hover:bg-brand/90"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div
            ref={trackRef}
            className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 scrollbar-hide [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none" }}
          >
            {projects.map((p, i) => (
              <article
                key={p.title}
                className={cn(
                  "snap-center transition-all duration-500",
                  "flex w-[80%] flex-none flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur md:w-[420px]",
                  active === i ? "scale-100 opacity-100" : "scale-95 opacity-70",
                )}
              >
                <div
                  className={cn(
                    "relative flex h-56 items-center justify-center bg-gradient-to-br text-6xl",
                    p.gradient,
                  )}
                >
                  <span className="animate-float">{p.emoji}</span>
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                    {p.category}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{p.blurb}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            {projects.map((p, i) => (
              <button
                key={p.title}
                aria-label={`Go to ${p.title}`}
                onClick={() => setActive(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  active === i ? "w-8 bg-brand" : "w-1.5 bg-white/30",
                )}
              />
            ))}
          </div>
          <Button className="rounded-full bg-white px-6 text-black hover:bg-white/90">
            <Download className="mr-1 h-4 w-4" />
            Download our app
          </Button>
        </div>
      </div>
    </section>
  );
}
