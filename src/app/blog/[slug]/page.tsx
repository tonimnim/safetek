import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { ComponentType } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { getPostSlugs, type PostMetadata } from "@/lib/blog";

type PostModule = {
  default: ComponentType;
  metadata: PostMetadata;
};

async function loadPost(slug: string): Promise<PostModule | null> {
  try {
    const mod = (await import(`@/content/blog/${slug}.mdx`)) as PostModule;
    return mod;
  } catch {
    return null;
  }
}

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await loadPost(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.metadata.title} — Safetek journal`,
    description: post.metadata.excerpt,
  };
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await loadPost(slug);
  if (!post) notFound();

  const PostBody = post.default;
  const { metadata: m } = post;

  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col bg-background">
        <section className="bg-section-cream">
          <div className="mx-auto w-full max-w-3xl px-6 pt-28 pb-14 sm:px-8 md:px-12 md:pt-32 md:pb-16 lg:px-16">
            <Reveal>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to journal
              </Link>
            </Reveal>

            <Reveal delay={80}>
              <ul className="mt-8 flex flex-wrap gap-2">
                {m.tags.map((t) => (
                  <li key={t}>
                    <Badge
                      variant="outline"
                      className="rounded-full border-brand/40 bg-brand/5 text-brand"
                    >
                      {t}
                    </Badge>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={160}>
              <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                {m.title}
              </h1>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-5 flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <span>{m.author}</span>
                <span aria-hidden>·</span>
                <span>{formatDate(m.date)}</span>
                <span aria-hidden>·</span>
                <span>{m.readingTime} min read</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto w-full max-w-3xl px-6 py-14 sm:px-8 md:px-12 md:py-20 lg:px-16">
            <Reveal>
              <article>
                <PostBody />
              </article>
            </Reveal>
          </div>
        </section>

        <section className="bg-section-cream">
          <div className="mx-auto w-full max-w-3xl px-6 py-14 text-center sm:px-8 md:px-12 md:py-20 lg:px-16">
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                Want updates? Drop us a{" "}
                <span className="text-gradient-brand">line</span>.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-4 text-sm text-muted-foreground">
                We publish about every two weeks — only when we have something
                worth saying.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <Button
                asChild
                size="lg"
                className="mt-7 rounded-full bg-brand text-white hover:bg-brand/90"
              >
                <Link href="/#contact">
                  Get in touch
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
