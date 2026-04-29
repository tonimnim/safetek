import type { Metadata } from "next";
import Link from "next/link";
import { Download, Mail, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { Reveal } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "Press kit — Safetek",
  description:
    "Boilerplate, brand assets, and contact details for journalists and partners writing about Safetek.",
};

const facts = [
  { label: "Founded", value: "2021" },
  { label: "Headquarters", value: "Nairobi, Kenya" },
  { label: "Industry", value: "Software & AI" },
  { label: "Sectors", value: "Mobility, logistics, healthcare" },
];

export default function PressPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <section className="bg-section-cream">
          <div className="mx-auto w-full max-w-3xl px-6 pb-12 pt-28 sm:px-8 md:px-12 md:pb-16 md:pt-32 lg:px-16">
            <Reveal>
              <Badge
                variant="outline"
                className="rounded-full border-brand/40 bg-brand/5 text-brand"
              >
                Press
              </Badge>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                Press <span className="text-gradient-brand">kit</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-5 max-w-xl text-muted-foreground md:text-lg">
                Boilerplate, brand assets, and a contact for media enquiries.
                If you are writing about Safetek, this page is the right
                starting point.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto w-full max-w-3xl px-6 py-12 sm:px-8 md:px-12 md:py-16 lg:px-16">
            <Reveal>
              <div className="rounded-2xl border border-border/60 bg-white p-7">
                <h2 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                  Company boilerplate
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Safetek Systems Ltd is a software and AI company
                  headquartered in Nairobi, Kenya. Founded in 2021, Safetek
                  builds SaaS products for businesses across mobility,
                  logistics, and healthcare, and provides engineering and AI
                  consultancy services to teams developing their own. Its
                  software is used by hundreds of operators across the region.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {facts.map((f) => (
                  <div
                    key={f.label}
                    className="rounded-2xl border border-border/60 bg-white p-5"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {f.label}
                    </p>
                    <p className="mt-2 text-base font-semibold tracking-tight text-foreground">
                      {f.value}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-10 rounded-2xl border border-border/60 bg-white p-7">
                <h2 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                  Brand assets
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Logos in SVG and PNG, our wordmark, and approved colour
                  values. Please do not modify the marks or recolour them.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button
                    asChild
                    className="rounded-full bg-brand text-white hover:bg-brand/90"
                  >
                    <a href="mailto:press@safetek.co.ke?subject=Brand%20assets%20request">
                      <Download className="mr-1 h-4 w-4" />
                      Request brand assets
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full border-border/70 bg-white text-foreground hover:bg-foreground/[0.04]"
                  >
                    <Link href="/about">Read our story</Link>
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-10 rounded-2xl border border-border/60 bg-white p-7">
                <h2 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                  Media contact
                </h2>
                <div className="mt-4 space-y-2 text-sm text-muted-foreground md:text-base">
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-brand" />
                    <a
                      href="mailto:press@safetek.co.ke"
                      className="font-medium text-foreground underline-offset-4 hover:underline"
                    >
                      press@safetek.co.ke
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-brand" />
                    Nairobi, Kenya
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
