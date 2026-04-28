const logos = [
  "ACME",
  "NORTHWIND",
  "INITECH",
  "UMBRELLA",
  "HOOLI",
  "STARK",
  "MASSIVE DYNAMIC",
  "WAYNE ENT.",
];

export function LogoMarquee() {
  return (
    <section className="border-y border-border/50 bg-background py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 overflow-hidden px-6 sm:px-8 md:px-12 lg:px-16">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Trusted by forward-thinking teams
        </p>
        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent"
          />
          <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
            {[...logos, ...logos].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="text-lg font-semibold tracking-[0.2em] text-foreground/40 transition-colors hover:text-foreground"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
