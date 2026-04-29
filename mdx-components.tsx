import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export function useMDXComponents(
  components: MDXComponents = {},
): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mt-12 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-10 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mt-5 text-base leading-relaxed text-muted-foreground">
        {children}
      </p>
    ),
    a: ({ href, children }) => (
      <Link
        href={href ?? "#"}
        className="font-medium text-brand underline-offset-4 transition hover:underline"
      >
        {children}
      </Link>
    ),
    ul: ({ children }) => (
      <ul className="mt-5 list-disc space-y-2 pl-6 text-muted-foreground marker:text-brand">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mt-5 list-decimal space-y-2 pl-6 text-muted-foreground marker:text-brand">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="mt-6 rounded-r-2xl border-l-4 border-brand bg-brand/5 px-5 py-4 italic text-foreground/90">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="rounded-md bg-foreground/[0.06] px-1.5 py-0.5 font-mono text-[0.9em] text-foreground">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="mt-5 overflow-x-auto rounded-2xl border border-border/60 bg-foreground/[0.04] p-5 font-mono text-sm">
        {children}
      </pre>
    ),
    hr: () => <hr className="my-10 border-border/60" />,
    img: ({ src, alt }) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={typeof src === "string" ? src : ""}
        alt={alt ?? ""}
        className="mt-6 w-full rounded-2xl border border-border/60"
      />
    ),
    ...components,
  };
}
