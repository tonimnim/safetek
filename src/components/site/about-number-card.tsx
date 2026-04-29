"use client";

import { useCountUp } from "@/hooks/use-count-up";

export function AboutNumberCard({
  end,
  suffix,
  label,
}: {
  end: number;
  suffix?: string;
  label: string;
}) {
  const { ref, value } = useCountUp({ end });
  return (
    <div className="hover-lift relative overflow-hidden rounded-2xl border border-border/60 bg-white p-6 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-8 -right-8 h-24 w-24 rounded-full bg-brand/10 blur-2xl"
      />
      <p className="relative text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
        <span ref={ref} className="tabular-nums">
          {Math.round(value)}
          {suffix}
        </span>
      </p>
      <p className="relative mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </p>
    </div>
  );
}
