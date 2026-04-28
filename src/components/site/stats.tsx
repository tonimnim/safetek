"use client";

import { Reveal } from "./reveal";
import { useCountUp } from "@/hooks/use-count-up";

type Stat = {
  end: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
  format?: "number" | "percent";
};

const stats: Stat[] = [
  { end: 50, suffix: "k+", label: "5-star reviews" },
  { end: 99.99, decimals: 2, suffix: "%", label: "platform uptime" },
  { end: 180, suffix: "+", label: "regions covered" },
  { end: 2.4, decimals: 1, suffix: "M", label: "events / second" },
];

export function Stats() {
  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <StatCard stat={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat }: { stat: Stat }) {
  const { ref, value } = useCountUp({ end: stat.end });
  const formatted = (stat.decimals ? value.toFixed(stat.decimals) : Math.round(value).toString());
  return (
    <div className="hover-lift rounded-2xl border border-border/60 bg-white/60 p-6 text-center backdrop-blur">
      <p className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
        <span ref={ref} className="tabular-nums">
          {stat.prefix}
          {formatted}
          {stat.suffix}
        </span>
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {stat.label}
      </p>
    </div>
  );
}
