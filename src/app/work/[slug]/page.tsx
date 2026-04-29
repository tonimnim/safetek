import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";
import { getProjectBySlug, projects } from "@/content/work";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} — Safetek work`,
    description: project.blurb,
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const titleWords = project.title.split(" ");
  const titleLead = titleWords.slice(0, -1).join(" ");
  const titleTail = titleWords.slice(-1)[0];

  const meta: { label: string; value: string }[] = [
    { label: "Client", value: project.client },
    { label: "Year", value: project.year },
    { label: "Role", value: project.role },
  ];

  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col bg-[#0e0907] text-white">
        <section className="relative overflow-hidden bg-[#100806]">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 right-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(232,90,39,0.18),transparent_60%)] blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 left-[-10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,136,0,0.15),transparent_60%)] blur-3xl"
          />
          <div className="relative mx-auto w-full max-w-6xl px-6 pt-28 pb-14 sm:px-8 md:px-12 md:pt-32 md:pb-20 lg:px-16">
            <Reveal>
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to projects
              </Link>
            </Reveal>

            <div className="mt-8 max-w-3xl">
              <Reveal>
                <Badge
                  variant="outline"
                  className="rounded-full border-white/20 bg-white/5 text-white/80"
                >
                  {project.category}
                </Badge>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-6xl">
                  {titleLead}{" "}
                  <span className="text-gradient-brand">{titleTail}</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                  {project.longDescription}
                </p>
              </Reveal>

              <Reveal delay={240}>
                <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {meta.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur"
                    >
                      <dt className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                        {m.label}
                      </dt>
                      <dd className="mt-1 text-sm font-medium text-white">
                        {m.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#0e0907]">
          <div className="relative mx-auto w-full max-w-6xl px-6 py-14 sm:px-8 md:px-12 md:py-20 lg:px-16">
            <Reveal>
              <div
                className={cn(
                  "relative flex h-72 items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br md:h-[420px]",
                  project.gradient,
                )}
              >
                <span className="animate-float text-[7rem] md:text-[10rem]">
                  {project.emoji}
                </span>
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#100806]">
          <div className="relative mx-auto w-full max-w-6xl px-6 py-14 sm:px-8 md:px-12 md:py-20 lg:px-16">
            <Reveal>
              <div className="max-w-2xl">
                <Badge
                  variant="outline"
                  className="rounded-full border-white/20 bg-white/5 text-white/80"
                >
                  Highlights
                </Badge>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
                  What we{" "}
                  <span className="text-gradient-brand">built</span>
                </h2>
              </div>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
              {project.highlights.map((h, i) => (
                <Reveal key={h} delay={i * 80}>
                  <div className="glass-dark flex h-full items-start gap-4 rounded-2xl p-5">
                    <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand text-brand-foreground">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <p className="text-sm leading-relaxed text-white/85">
                      {h}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#0e0907]">
          <div className="relative mx-auto w-full max-w-6xl px-6 py-14 sm:px-8 md:px-12 md:py-20 lg:px-16">
            <Reveal>
              <div className="max-w-2xl">
                <Badge
                  variant="outline"
                  className="rounded-full border-white/20 bg-white/5 text-white/80"
                >
                  Outcomes
                </Badge>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
                  Numbers that moved
                </h2>
              </div>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              {project.outcomes.map((o, i) => (
                <Reveal key={o.label} delay={i * 80}>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur">
                    <p className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                      {o.value}
                    </p>
                    <p className="mt-3 text-sm text-white/60">{o.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#100806]">
          <div className="relative mx-auto w-full max-w-6xl px-6 py-14 sm:px-8 md:px-12 md:py-20 lg:px-16">
            <Reveal>
              <div className="max-w-2xl">
                <Badge
                  variant="outline"
                  className="rounded-full border-white/20 bg-white/5 text-white/80"
                >
                  Tech stack
                </Badge>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
                  How it&apos;s{" "}
                  <span className="text-gradient-brand">made</span>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <ul className="mt-8 flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/85 backdrop-blur"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>

            {project.link ? (
              <Reveal delay={200}>
                <div className="mt-10">
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-full border-white/20 bg-white/5 text-white backdrop-blur hover:bg-white/10 hover:text-white"
                  >
                    <Link href={project.link.href}>
                      {project.link.label}
                      <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Reveal>
            ) : null}
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#0e0907]">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(232,90,39,0.25),transparent_60%)] blur-3xl"
          />
          <div className="relative mx-auto w-full max-w-3xl px-6 py-14 text-center sm:px-8 md:px-12 md:py-20 lg:px-16">
            <Reveal>
              <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                Have a similar{" "}
                <span className="text-gradient-brand">problem</span>?
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 text-white/70">
                We probably have a strong opinion about it. Tell us about it and
                we&apos;ll come back with a plan.
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
