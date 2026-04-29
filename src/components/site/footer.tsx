import Link from "next/link";
import { MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { FooterNewsletter } from "./footer-newsletter";

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5v-9h3v9ZM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75ZM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19a.66.66 0 0 0 0 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66Z" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
    </svg>
  );
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-.99-.02-1.95-3.2.69-3.87-1.54-3.87-1.54-.52-1.34-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.66.79.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

type FooterLink = { label: string; href: string };

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Products",
    links: [
      { label: "Komiut", href: "/services/komiut" },
      { label: "K~Parcel", href: "/services/k-parcel" },
      { label: "Telemedicine", href: "/services/telemedicine" },
      { label: "Cuesports Africa", href: "/services/cuesports-africa" },
      { label: "Saferoute", href: "/work/saferoute" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "AI Consultancy", href: "/about" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "Growth Strategy", href: "/services/growth-strategy" },
      { label: "Cost Engineering", href: "/services/saving-strategy" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/#projects" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/#faq" },
      { label: "Press kit", href: "/press" },
    ],
  },
];

const social = [
  { label: "LinkedIn", href: "#", Icon: LinkedinIcon },
  { label: "X (Twitter)", href: "#", Icon: XIcon },
  { label: "GitHub", href: "#", Icon: GithubIcon },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand text-brand-foreground">
                <span className="h-2 w-2 rounded-full bg-white" />
              </span>
              <span className="text-base font-semibold tracking-tight">
                Safetek
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Software and AI for businesses across Africa. Built in Nairobi
              since 2021.
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-brand" />
              <span>Nairobi, Kenya</span>
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Stay in the loop
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              One short note when we ship something worth talking about.
            </p>
            <FooterNewsletter />
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold text-foreground">
                {c.title}
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col-reverse items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex flex-col gap-1 text-xs text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Safetek Systems Ltd · Registered in
              Kenya
            </p>
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <Link
                href="/privacy"
                className="transition-colors hover:text-foreground"
              >
                Privacy
              </Link>
              <span aria-hidden>·</span>
              <Link
                href="/terms"
                className="transition-colors hover:text-foreground"
              >
                Terms
              </Link>
              <span aria-hidden>·</span>
              <Link
                href="/privacy#cookies"
                className="transition-colors hover:text-foreground"
              >
                Cookies
              </Link>
            </p>
          </div>

          <div className="flex items-center gap-2">
            {social.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand"
              >
                <s.Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
