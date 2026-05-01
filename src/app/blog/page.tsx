import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/site/reveal";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Journal — Safetek engineering, AI, and product notes",
  description:
    "Engineering and product notes from the Safetek team. Posts on M-Pesa integration, offline-first mobile apps, cloud cost engineering, AI in production, and building software for African networks.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Safetek Journal — engineering, AI, and product notes",
    description:
      "Engineering and product notes from the Safetek team. Building software for African networks, M-Pesa integration, AI in production, and cloud cost engineering.",
    url: "/blog",
    type: "website",
  },
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col bg-background">
        <section className="bg-section-cream">
          <div className="mx-auto w-full max-w-6xl px-6 pt-28 pb-14 sm:px-8 md:px-12 md:pt-32 md:pb-20 lg:px-16">
            <Reveal>
              <Badge
                variant="outline"
                className="rounded-full border-brand/40 bg-brand/5 text-brand"
              >
                Journal
              </Badge>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                Notes from the{" "}
                <span className="text-gradient-brand">field</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-2xl text-muted-foreground">
                Engineering at the edge of the network, product decisions on
                tight budgets, and the boring infrastructure that earns its
                keep. Roughly biweekly.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto w-full max-w-3xl px-6 py-14 sm:px-8 md:px-12 md:py-20 lg:px-16">
            <ul className="flex flex-col gap-5">
              {posts.map((p, i) => (
                <Reveal key={p.slug} delay={i * 80}>
                  <li>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="group hover-lift relative flex flex-col rounded-2xl border border-border/60 bg-white p-6 md:p-7"
                    >
                      <div className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        <span>{formatDate(p.metadata.date)}</span>
                        <span aria-hidden>·</span>
                        <span>{p.metadata.author}</span>
                        <span aria-hidden>·</span>
                        <span>{p.metadata.readingTime} min read</span>
                      </div>
                      <h2 className="mt-3 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                        {p.metadata.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {p.metadata.excerpt}
                      </p>
                      <div className="mt-5 flex items-center gap-1 text-sm font-medium text-brand opacity-80 transition-opacity group-hover:opacity-100">
                        Read post
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </Link>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
