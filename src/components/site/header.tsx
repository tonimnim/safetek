"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <div
        className={cn(
          "flex w-full max-w-3xl items-center justify-between gap-2 rounded-full px-2 py-1.5 transition-all duration-500",
          scrolled
            ? "glass-dark shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)]"
            : "border border-white/10 bg-black/20 backdrop-blur-md",
        )}
      >
        <Link
          href="/"
          className="ml-2 flex items-center gap-2 text-white"
          aria-label="Safetek home"
        >
          <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand text-brand-foreground">
            <span className="absolute inset-0 animate-ping rounded-full bg-brand/30" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-white" />
          </span>
          <span className="text-sm font-semibold tracking-tight">Safetek</span>
        </Link>

        <nav className="hidden items-center md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-[13px] text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Button
            asChild
            size="sm"
            className="hidden h-8 rounded-full bg-white px-4 text-[13px] text-black hover:bg-white/90 md:inline-flex"
          >
            <Link href="#contact">Contact</Link>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute top-20 left-4 right-4 rounded-2xl glass-dark p-4 md:hidden animate-fade-up">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-white/85 transition hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              className="mt-2 w-full rounded-full bg-brand text-white hover:bg-brand/90"
            >
              <Link href="#contact" onClick={() => setOpen(false)}>
                Contact Us
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
