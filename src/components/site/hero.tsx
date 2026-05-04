import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroWave } from "./hero-wave";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section className="bg-hero-radial grain relative overflow-hidden text-white">
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
      <HeroWave />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-[500px] w-[500px] animate-drift rounded-full bg-[radial-gradient(circle,rgba(255,136,0,0.35),transparent_60%)] blur-3xl will-change-transform"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-30%] left-[-10%] h-[420px] w-[420px] animate-drift-reverse rounded-full bg-[radial-gradient(circle,rgba(232,90,39,0.4),transparent_60%)] blur-3xl will-change-transform"
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 pb-16 pt-28 text-center sm:px-8 md:px-12 md:pb-20 md:pt-32 lg:px-16">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/80 backdrop-blur">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-brand/70" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-brand" />
            </span>
            Software & AI · Since 2018
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="mt-6 text-[2.2rem] font-semibold uppercase leading-[0.98] tracking-tight md:text-6xl lg:text-7xl">
            We build software hundreds of operators{" "}
            <span className="text-gradient-brand">run on</span>.
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-5 max-w-2xl text-balance text-base text-white/70 md:text-lg">
            We build SaaS products for mobility, logistics, and healthcare,
            and we work with teams developing their own. AI baked in where it
            earns its keep.
          </p>
        </Reveal>

        <Reveal delay={280}>
          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="pulse-glow rounded-full bg-brand px-7 text-white hover:bg-brand/90"
            >
              <Link href="#services">
                Explore services
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/20 bg-white/5 px-7 text-white backdrop-blur hover:bg-white/10 hover:text-white"
            >
              <Link href="#contact">Talk to us</Link>
            </Button>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
