import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { Reveal } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How Safetek Systems Ltd collects, uses, and protects personal information. Compliance with the Kenya Data Protection Act, 2019.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
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
                Privacy <span className="text-gradient-brand">policy</span>
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
              <Block title="Who we are">
                <p>
                  Safetek Systems Ltd (&quot;Safetek&quot;, &quot;we&quot;,
                  &quot;us&quot;) is a software and AI company registered in
                  Kenya, with offices in Nairobi. We operate the website at
                  safetek.co.ke and the products listed on it.
                </p>
                <p>
                  For privacy questions or data requests, contact us at{" "}
                  <a
                    href="mailto:hello@safetek.co.ke"
                    className="font-medium text-brand underline-offset-4 hover:underline"
                  >
                    hello@safetek.co.ke
                  </a>
                  .
                </p>
              </Block>

              <Block title="What we collect">
                <p>
                  When you use our website, we collect the information you
                  choose to give us — typically your name, email, company, and
                  the contents of any message you send via the contact form. If
                  you subscribe to our newsletter, we collect your email
                  address.
                </p>
                <p>
                  We also receive standard request data your browser sends
                  automatically (IP address, user agent, referring page) and
                  basic analytics about which pages on the site are visited.
                </p>
              </Block>

              <Block title="How we use it">
                <p>
                  We use the information you give us to respond to your
                  enquiries, send you updates if you have asked for them, and
                  improve the website. We do not sell personal information. We
                  do not share it with third parties except as needed to deliver
                  the services you have asked for (for example, our email
                  provider).
                </p>
              </Block>

              <Block title="How long we keep it">
                <p>
                  Contact form submissions are retained for as long as is
                  needed to handle the conversation, and then archived. You can
                  ask us to delete your data at any time.
                </p>
              </Block>

              <Block title="Your rights">
                <p>
                  Under the Kenya Data Protection Act (2019), you have the
                  right to access the personal data we hold about you, ask for
                  it to be corrected or deleted, and lodge a complaint with the
                  Office of the Data Protection Commissioner. Email us to make
                  a request.
                </p>
              </Block>

              <Block title="Cookies" id="cookies">
                <p>
                  Our website uses a small number of essential cookies to keep
                  the site working and to measure aggregate traffic. We do not
                  use advertising cookies. You can disable cookies in your
                  browser settings; some parts of the site may not work as
                  expected if you do.
                </p>
              </Block>

              <Block title="Changes to this policy">
                <p>
                  We update this page when our practices change. The
                  &quot;last updated&quot; date at the top of the page reflects
                  the most recent revision.
                </p>
              </Block>
            </article>

            <div className="mt-12 rounded-2xl border border-border/60 bg-white p-6">
              <p className="text-sm text-muted-foreground">
                Need anything else?{" "}
                <Link
                  href="/#contact"
                  className="font-medium text-brand underline-offset-4 hover:underline"
                >
                  Get in touch.
                </Link>
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
  id,
  children,
}: {
  title: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-32">
      <h2 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
        {title}
      </h2>
      <div className="mt-3 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
        {children}
      </div>
    </section>
  );
}
