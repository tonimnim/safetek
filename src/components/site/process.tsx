import { Lightbulb, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "./reveal";

const steps = [
  {
    title: "Develop ideas into applications",
    description:
      "We turn whiteboard sketches into shipped products — from prototype to production-grade software.",
  },
  {
    title: "Focus on real problem solving",
    description:
      "We dig into the workflow, the user, and the data before writing a single line of code.",
  },
  {
    title: "Customize software for your business",
    description:
      "Off-the-shelf is rarely a fit. We tailor every system to the way your team actually operates.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-background"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(232,90,39,0.12),transparent_60%)] blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-14 sm:px-8 md:grid-cols-2 md:px-12 md:py-20 lg:px-16">
        <Reveal>
          <div>
            <Badge
              variant="outline"
              className="rounded-full border-brand/40 bg-brand/5 text-brand"
            >
              Our approach
            </Badge>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
              Discover new ideas{" "}
              <span className="text-gradient-brand">with us.</span>
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Imagination takes us everywhere — and a disciplined process makes
              sure we land. Here&apos;s how we work with every client.
            </p>

            <ul className="mt-8 space-y-5">
              {steps.map((step, i) => (
                <Reveal key={step.title} delay={i * 100}>
                  <li className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand text-brand-foreground shadow-[0_8px_20px_-8px_rgba(232,90,39,0.6)]">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>

            <div className="mt-8">
              <Button className="rounded-full bg-foreground px-6 text-background hover:bg-foreground/90">
                Start a project
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
            <div
              aria-hidden
              className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-orange-100 via-orange-50 to-white"
            />
            <div
              aria-hidden
              className="absolute inset-6 rounded-[2rem] border border-brand/20 bg-white/60 backdrop-blur"
            />
            <div className="absolute inset-12 rounded-[1.5rem] border border-brand/30" />
            <div
              aria-hidden
              className="absolute inset-10 rounded-full border border-dashed border-brand/40 animate-spin-slow"
            />
            <div
              aria-hidden
              className="absolute inset-20 rounded-full border border-brand/20 animate-spin-slow"
              style={{ animationDirection: "reverse", animationDuration: "24s" }}
            />
            <div className="relative flex h-40 w-40 animate-float items-center justify-center rounded-full bg-gradient-to-br from-brand to-amber-500 text-white shadow-[0_30px_60px_-20px_rgba(232,90,39,0.6)]">
              <span
                aria-hidden
                className="absolute inset-0 animate-ping rounded-full bg-brand/30"
                style={{ animationDuration: "3s" }}
              />
              <Lightbulb className="relative h-16 w-16" strokeWidth={1.5} />
            </div>
            {[
              { x: "8%", y: "12%", label: "Discovery" },
              { x: "78%", y: "18%", label: "Design" },
              { x: "12%", y: "78%", label: "Build" },
              { x: "78%", y: "78%", label: "Ship" },
            ].map((p) => (
              <div
                key={p.label}
                style={{ left: p.x, top: p.y }}
                className="absolute rounded-full glass-light px-3 py-1 text-xs font-medium text-foreground shadow-sm"
              >
                {p.label}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
