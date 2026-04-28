"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  accent: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Safetek shipped our transport platform faster than any vendor we've worked with. They actually understood our operations.",
    name: "Aisha N.",
    role: "Operations Lead, Nation Media Group",
    initials: "AN",
    accent: "from-orange-400 to-amber-500",
  },
  {
    quote:
      "We replaced three legacy systems with Komiut. Driver onboarding now takes minutes — and revenue leakage is finally measurable.",
    name: "James K.",
    role: "Director, Neo Kenya Mpya",
    initials: "JK",
    accent: "from-blue-500 to-cyan-500",
  },
  {
    quote:
      "Their team takes design seriously. The dashboards are not only beautiful, they're the reason our analysts adopted the tool.",
    name: "Wanjiru M.",
    role: "Product, Business Daily",
    initials: "WM",
    accent: "from-rose-500 to-pink-500",
  },
  {
    quote:
      "From discovery to deployment, Safetek operated like an extension of our engineering team. Communication was first-class.",
    name: "Daniel O.",
    role: "Head of Digital, NCBA Group",
    initials: "DO",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    quote:
      "Their platform paid for itself in the first quarter. We finally have one source of truth across our regions.",
    name: "Ruth A.",
    role: "CTO, Umbrella Logistics",
    initials: "RA",
    accent: "from-violet-500 to-fuchsia-500",
  },
];

const ROTATE_MS = 5000;
const VISIBLE = 3; // up to 3 rendered; CSS hides extras on smaller screens

export function Testimonials() {
  const [start, setStart] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(
      () => setStart((s) => (s + 1) % testimonials.length),
      ROTATE_MS,
    );
    return () => window.clearInterval(id);
  }, [paused]);

  const visibleCards = Array.from({ length: VISIBLE }, (_, i) => {
    const index = (start + i) % testimonials.length;
    return { ...testimonials[index], index, slot: i };
  });

  const go = (next: number) => {
    setStart(((next % testimonials.length) + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="bg-section-cream">
      <div className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-8 md:px-12 md:py-20 lg:px-16">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Badge
                variant="outline"
                className="rounded-full border-brand/40 bg-brand/5 text-brand"
              >
                Testimonials
              </Badge>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                Our customers are our{" "}
                <span className="text-gradient-brand">biggest fans</span>
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous testimonials"
                onClick={() => go(start - 1)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-white/80 text-foreground/70 backdrop-blur transition hover:border-brand/40 hover:bg-white hover:text-brand"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Next testimonials"
                onClick={() => go(start + 1)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white shadow-[0_8px_20px_-8px_rgba(232,90,39,0.6)] transition hover:bg-brand/90"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div
            className="relative mt-10"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {visibleCards.map((card) => (
                <div
                  key={`${start}-${card.slot}`}
                  className={cn(
                    "animate-fade-up",
                    card.slot === 1 && "hidden md:block",
                    card.slot === 2 && "hidden lg:block",
                  )}
                  style={{ animationDelay: `${card.slot * 80}ms` }}
                >
                  <TestimonialCard t={card} />
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-2">
              {testimonials.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Show testimonial set starting at ${i + 1}`}
                  onClick={() => go(i)}
                  className={cn(
                    "relative h-1.5 overflow-hidden rounded-full transition-all duration-500",
                    start === i
                      ? "w-10 bg-foreground/15"
                      : "w-1.5 bg-foreground/20 hover:bg-foreground/40",
                  )}
                >
                  {start === i && (
                    <span
                      key={`${start}-${paused}`}
                      className="absolute inset-y-0 left-0 origin-left bg-brand"
                      style={{
                        width: "100%",
                        animation: paused
                          ? "none"
                          : `tm-progress ${ROTATE_MS}ms linear forwards`,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        @keyframes tm-progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article className="hover-lift relative h-full overflow-hidden rounded-3xl border border-border/60 bg-white/80 p-7 backdrop-blur">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-orange-200/60 to-transparent blur-2xl"
      />
      <div className="relative flex items-center justify-between">
        <Quote className="h-8 w-8 text-brand/40" />
        <div className="flex items-center gap-0.5 text-amber-500">
          {Array.from({ length: 5 }).map((_, j) => (
            <Star key={j} className="h-3.5 w-3.5 fill-current" />
          ))}
        </div>
      </div>

      <blockquote className="relative mt-5 text-base font-medium leading-relaxed text-foreground md:text-lg">
        &ldquo;{t.quote}&rdquo;
      </blockquote>

      <div className="relative mt-6 flex items-center gap-3 border-t border-border/60 pt-5">
        <div
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br text-sm font-semibold text-white",
            t.accent,
          )}
        >
          {t.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{t.name}</p>
          <p className="text-xs text-muted-foreground">{t.role}</p>
        </div>
      </div>
    </article>
  );
}
