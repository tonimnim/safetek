"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";

type Status = "idle" | "submitting" | "success";

const LOOPS_FORM_ID = "cmokn61w20cqm0ix26cemqdfc";
const LOOPS_ENDPOINT = `https://app.loops.so/api/newsletter-form/${LOOPS_FORM_ID}`;
const RATE_LIMIT_KEY = "loops-form-timestamp";
const RATE_LIMIT_MS = 60_000;

function hasRecentSubmission() {
  if (typeof window === "undefined") return false;
  const previous = window.localStorage.getItem(RATE_LIMIT_KEY);
  return previous ? Number(previous) + RATE_LIMIT_MS > Date.now() : false;
}

export function FooterNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.includes("@")) return;
    if (hasRecentSubmission()) {
      toast.error("Too many signups. Please try again in a moment.");
      return;
    }

    setStatus("submitting");
    try {
      const body = `email=${encodeURIComponent(email)}&userGroup=&mailingLists=`;
      const res = await fetch(LOOPS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (res.status === 429) {
        throw new Error("Too many signups. Please try again in a moment.");
      }

      const data = (await res.json()) as { success: boolean; message?: string };
      if (!data.success) {
        throw new Error(data.message ?? "Couldn't subscribe. Try again.");
      }

      window.localStorage.setItem(RATE_LIMIT_KEY, Date.now().toString());
      setStatus("success");
      setEmail("");
      toast.success("You're on the list. We'll be in touch.");
      setTimeout(() => setStatus("idle"), 3000);
    } catch (err) {
      setStatus("idle");
      toast.error(
        err instanceof Error
          ? err.message
          : "Couldn't subscribe. Please try again.",
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-5 flex max-w-sm gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        aria-label="Email address"
        disabled={status === "submitting"}
        className="h-10 flex-1 rounded-full border border-border/60 bg-white px-4 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-brand/40 focus:outline-none focus:ring-2 focus:ring-brand/30 disabled:opacity-60"
      />
      <button
        type="submit"
        disabled={status === "submitting" || !email.includes("@")}
        className="inline-flex h-10 items-center justify-center gap-1 rounded-full bg-brand px-4 text-sm font-medium text-white transition hover:bg-brand/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            Subscribe
            <ArrowRight className="h-3.5 w-3.5" />
          </>
        )}
      </button>
    </form>
  );
}
