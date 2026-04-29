"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";

type Status = "idle" | "submitting" | "success";

export function FooterNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.includes("@")) return;

    const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!key) {
      toast.error(
        "Newsletter not configured yet. Reach us at hello@safetek.co.ke.",
      );
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: key,
          email,
          subject: "Newsletter signup from safetek.co.ke",
          from_name: "Safetek Newsletter",
          message: `New newsletter subscriber: ${email}`,
          botcheck: "",
        }),
      });
      const data = (await res.json()) as { success: boolean; message?: string };
      if (!data.success) throw new Error(data.message ?? "Subscription failed");
      setStatus("success");
      setEmail("");
      toast.success("You're on the list. We'll be in touch.");
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("idle");
      toast.error("Couldn't subscribe. Please try again or email us.");
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
