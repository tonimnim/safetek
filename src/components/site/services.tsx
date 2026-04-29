import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";
import { services, type Service } from "@/content/services";

export function Services() {
  return (
    <section id="services" className="bg-section-cream">
      <div className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-8 md:px-12 md:py-20 lg:px-16">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <Badge
                variant="outline"
                className="rounded-full border-brand/40 bg-brand/5 text-brand"
              >
                What we do
              </Badge>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                Creative software{" "}
                <span className="text-gradient-brand">solutions</span> for
                modern businesses
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              From flagship products to bespoke engineering, we ship tools that
              hundreds of businesses already trust to run their operations.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 70}>
              <ServiceCard service={s} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group hover-lift relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-white p-6",
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gradient-to-br from-orange-200/70 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="relative flex items-center justify-between">
        <div
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-xl ring-1 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
            index % 2 === 0
              ? "bg-brand/10 text-brand ring-brand/20"
              : "bg-foreground/[0.04] text-foreground ring-border",
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          {service.tag}
        </span>
      </div>
      <h3 className="relative mt-5 text-xl font-semibold tracking-tight text-foreground">
        {service.title}
      </h3>
      <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>
      <div className="relative mt-6 flex items-center gap-1 text-sm font-medium text-brand opacity-80 transition-opacity group-hover:opacity-100">
        Learn more
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}
