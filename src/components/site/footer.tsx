import Link from "next/link";
import { Globe, MessageCircle, Briefcase } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const columns = [
  {
    title: "Navigate",
    links: ["Home", "About", "Services", "Portfolio", "Contact"],
  },
  {
    title: "Products",
    links: ["Komiut", "K~Parcel", "Telemedicine", "Saferoute"],
  },
  {
    title: "Company",
    links: ["Partners", "Investors", "FAQ", "Contact us"],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand text-brand-foreground">
                <span className="h-2 w-2 rounded-full bg-white" />
              </span>
              <span className="text-base font-semibold tracking-tight">
                Safetek
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Empowering businesses with next-generation technology — secure by
              design, scalable by default. Built in Nairobi.
            </p>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold text-foreground">
                {c.title}
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {c.links.map((l) => (
                  <li key={l}>
                    <Link
                      href="#"
                      className="transition-colors hover:text-foreground"
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Safetek Systems. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <Link href="#" className="transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="transition-colors hover:text-foreground">
              Customer support
            </Link>
            <Link href="#" className="transition-colors hover:text-foreground">
              Careers
            </Link>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Link
              href="#"
              aria-label="Website"
              className="rounded-full p-2 transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              <Globe className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              aria-label="Contact"
              className="rounded-full p-2 transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              <MessageCircle className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              aria-label="Careers"
              className="rounded-full p-2 transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              <Briefcase className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
