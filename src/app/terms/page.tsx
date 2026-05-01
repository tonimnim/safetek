import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { Reveal } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "Terms of use",
  description:
    "Terms governing use of safetek.co.ke and related content. Governing law: Kenya.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <section className="bg-section-cream">
          <div className="mx-auto w-full max-w-3xl px-6 pb-10 pt-28 sm:px-8 md:px-12 md:pb-14 md:pt-32 lg:px-16">
            <Reveal>
              <Badge
                variant="outline"
                className="rounded-full border-brand/40 bg-brand/5 text-brand"
              >
                Legal
              </Badge>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                Terms of <span className="text-gradient-brand">use</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 text-muted-foreground">
                Last updated: 30 April 2026
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto w-full max-w-3xl px-6 py-12 sm:px-8 md:px-12 md:py-16 lg:px-16">
            <article className="space-y-10 text-foreground">
              <Block title="Agreement">
                <p>
                  By using safetek.co.ke and any pages or content under it (the
                  &quot;Site&quot;), you agree to these terms. If you do not
                  agree, please do not use the Site.
                </p>
                <p>
                  These terms cover the marketing website only. Use of any
                  Safetek product is governed by the agreement signed for that
                  product.
                </p>
              </Block>

              <Block title="Acceptable use">
                <p>
                  You may use the Site for lawful purposes. You may not attempt
                  to disrupt the Site, scrape it at scale without permission,
                  reverse-engineer it, or use it to distribute malware or
                  unlawful content.
                </p>
              </Block>

              <Block title="Intellectual property">
                <p>
                  Everything on the Site — copy, code, design, logos, images —
                  belongs to Safetek Systems Ltd or its licensors, except where
                  marked otherwise. You may share links to our pages and quote
                  short excerpts with attribution. Larger reuse needs our
                  written consent.
                </p>
              </Block>

              <Block title="Information on the Site">
                <p>
                  We do our best to keep the Site accurate, but we do not
                  guarantee it is free of errors. The Site is provided as-is.
                  We may change, suspend, or discontinue any part of it without
                  notice.
                </p>
              </Block>

              <Block title="Liability">
                <p>
                  To the extent permitted by law, Safetek is not liable for
                  indirect or consequential losses arising from your use of the
                  Site. Nothing in these terms limits liability that cannot
                  legally be limited.
                </p>
              </Block>

              <Block title="Governing law">
                <p>
                  These terms are governed by the laws of Kenya. Any dispute
                  will be heard by the courts of Kenya.
                </p>
              </Block>

              <Block title="Contact">
                <p>
                  Questions about these terms? Email{" "}
                  <a
                    href="mailto:hello@safetek.co.ke"
                    className="font-medium text-brand underline-offset-4 hover:underline"
                  >
                    hello@safetek.co.ke
                  </a>
                  .
                </p>
              </Block>
            </article>

            <div className="mt-12 rounded-2xl border border-border/60 bg-white p-6">
              <p className="text-sm text-muted-foreground">
                See also our{" "}
                <Link
                  href="/privacy"
                  className="font-medium text-brand underline-offset-4 hover:underline"
                >
                  privacy policy
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
        {title}
      </h2>
      <div className="mt-3 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
        {children}
      </div>
    </section>
  );
}
