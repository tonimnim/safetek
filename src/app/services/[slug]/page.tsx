import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Check, ExternalLink } from "lucide-react";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";
import { getServiceBySlug, services } from "@/content/services";
import { siteConfig } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service not found" };
  const url = `/services/${slug}`;
  return {
    title: `${service.title} — ${service.tag === "Product" ? "Safetek product" : "Safetek service"}`,
    description: `${service.tagline}. ${service.description}`,
    keywords: [
      service.title,
      `${service.title} Kenya`,
      `${service.title} Africa`,
      ...service.highlights,
      ...siteConfig.keywords.slice(0, 25),
    ],
    alternates: { canonical: url },
    openGraph: {
      title: `${service.title} — ${siteConfig.name}`,
      description: service.description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} — ${siteConfig.name}`,
      description: service.description,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = service.icon;
  const taglineWords = service.tagline.split(" ");
  const taglineLead = taglineWords.slice(0, -1).join(" ");
  const taglineTail = taglineWords.slice(-1)[0];

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.longDescription,
    serviceType: service.title,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: [
      { "@type": "Country", name: "Kenya" },
      { "@type": "Continent", name: "Africa" },
    ],
    url: `${siteConfig.url}/services/${slug}`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} deliverables`,
      itemListElement: service.deliverables.map((d, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "Service",
          name: d.title,
          description: d.description,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <SiteHeader />
      <main className="flex flex-1 flex-col bg-background">
        <section className="bg-section-cream">
          <div className="mx-auto w-full max-w-6xl px-6 pt-28 pb-14 sm:px-8 md:px-12 md:pt-32 md:pb-20 lg:px-16">
            <Reveal>
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to services
              </Link>
            </Reveal>

            <div className="mt-8 grid items-start gap-10 md:grid-cols-[auto_1fr] md:gap-12">
              <Reveal>
                <div
                  className={cn(
                    "flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-[0_20px_50px_-20px_rgba(232,90,39,0.5)]",
                    service.gradient,
                  )}
                >
                  <Icon className="h-9 w-9" />
                </div>
              </Reveal>

              <div>
                <Reveal>
                  <Badge
                    variant="outline"
                    className="rounded-full border-brand/40 bg-brand/5 text-brand"
                  >
                    {service.tag}
                  </Badge>
                </Reveal>
                <Reveal delay={80}>
                  <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                    {taglineLead}{" "}
                    <span className="text-gradient-brand">{taglineTail}</span>
                  </h1>
                </Reveal>
                <Reveal delay={160}>
                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                    {service.longDescription}
                  </p>
                </Reveal>
                <Reveal delay={240}>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Button
                      asChild
                      size="lg"
                      className="rounded-full bg-brand text-white hover:bg-brand/90"
                    >
                      <Link href="/#contact">
                        Start a project
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                    {service.link ? (
                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="rounded-full"
                      >
                        <a
                          href={service.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {service.link.label}
                          <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                      </Button>
                    ) : null}
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="rounded-full"
                    >
                      <Link href="/#services">See all services</Link>
                    </Button>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-8 md:px-12 md:py-20 lg:px-16">
            <Reveal>
              <div className="max-w-2xl">
                <Badge
                  variant="outline"
                  className="rounded-full border-brand/40 bg-brand/5 text-brand"
                >
                  Highlights
                </Badge>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  What you{" "}
                  <span className="text-gradient-brand">get</span>
                </h2>
              </div>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
              {service.highlights.map((h, i) => (
                <Reveal key={h} delay={i * 80}>
                  <div className="flex h-full items-start gap-4 rounded-2xl border border-border/60 bg-white p-5">
                    <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand text-brand-foreground">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <p className="text-sm leading-relaxed text-foreground">
                      {h}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-section-cream">
          <div className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-8 md:px-12 md:py-20 lg:px-16">
            <Reveal>
              <div className="max-w-2xl">
                <Badge
                  variant="outline"
                  className="rounded-full border-brand/40 bg-brand/5 text-brand"
                >
                  Deliverables
                </Badge>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  What we{" "}
                  <span className="text-gradient-brand">ship</span>
                </h2>
              </div>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              {service.deliverables.map((d, i) => (
                <Reveal key={d.title} delay={i * 80}>
                  <div className="hover-lift flex h-full flex-col rounded-2xl border border-border/60 bg-white p-6">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      0{i + 1}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
                      {d.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {d.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-8 md:px-12 md:py-20 lg:px-16">
            <Reveal>
              <div className="max-w-2xl">
                <Badge
                  variant="outline"
                  className="rounded-full border-brand/40 bg-brand/5 text-brand"
                >
                  Outcomes
                </Badge>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  Numbers we move
                </h2>
              </div>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              {service.outcomes.map((o, i) => (
                <Reveal key={o.label} delay={i * 80}>
                  <div className="rounded-2xl border border-border/60 bg-white p-7">
                    <p className="text-4xl font-semibold tracking-tight text-brand md:text-5xl">
                      {o.value}
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {o.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-section-cream">
          <div className="mx-auto w-full max-w-3xl px-6 py-14 text-center sm:px-8 md:px-12 md:py-20 lg:px-16">
            <Reveal>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                Ready to{" "}
                <span className="text-gradient-brand">build</span>?
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 text-muted-foreground">
                Tell us what you need. We&apos;ll come back within one business
                day with a plan and a price.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <Button
                asChild
                size="lg"
                className="mt-8 rounded-full bg-brand text-white hover:bg-brand/90"
              >
                <Link href="/#contact">
                  Talk to us
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
