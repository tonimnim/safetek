"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Reveal } from "./reveal";

const channels = [
  {
    icon: MapPin,
    label: "Visit",
    value: "Nairobi, Kenya",
  },
  {
    icon: Phone,
    label: "Call",
    value: "+254 716 185 196",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@safetek.co.ke",
  },
];

type ContactFormState = {
  name: string;
  email: string;
  company: string;
  message: string;
  botcheck: string;
};

type ContactStatus = "idle" | "submitting" | "success" | "error";

type Web3FormsResponse = {
  success: boolean;
  message: string;
};

const INITIAL_STATE: ContactFormState = {
  name: "",
  email: "",
  company: "",
  message: "",
  botcheck: "",
};

const inputClass =
  "h-11 rounded-xl border-white/15 bg-white/5 text-white placeholder:text-white/40 focus-visible:ring-brand";

export function Contact() {
  const [values, setValues] = useState<ContactFormState>(INITIAL_STATE);
  const [status, setStatus] = useState<ContactStatus>("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const submitting = status === "submitting";
  const justSent = status === "success";

  const update = (key: keyof ContactFormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
  };

  const looseInvalid =
    !values.name.trim() ||
    !values.email.trim() ||
    !values.email.includes("@") ||
    !values.message.trim();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (submitting || justSent) return;

    const nextErrors: typeof errors = {};
    if (!values.name.trim()) nextErrors.name = "Please share your name.";
    if (!values.email.trim() || !values.email.includes("@"))
      nextErrors.email = "Please enter a valid email.";
    if (!values.message.trim())
      nextErrors.message = "Please add a short message.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    if (values.botcheck) return;

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey) {
      toast.error(
        "Contact form not configured. Please reach us via hello@safetek.co.ke.",
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
          access_key: accessKey,
          name: values.name,
          email: values.email,
          company: values.company,
          message: values.message,
          subject: "New contact submission from safetek.co.ke",
          from_name: "Safetek Website",
          botcheck: "",
        }),
      });

      const data = (await res.json()) as Web3FormsResponse;

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Request failed");
      }

      toast.success("Thanks! We'll get back to you within one business day.");
      setValues(INITIAL_STATE);
      setStatus("success");
      // Re-arm the form after a short success window so users can send another note.
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      toast.error(
        "Couldn't send your message. Please try again or email hello@safetek.co.ke.",
      );
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#100806] text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(232,90,39,0.3),transparent_60%)] blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-start gap-10 px-6 py-14 sm:px-8 md:grid-cols-2 md:px-12 md:py-20 lg:px-16">
        <Reveal>
          <div>
            <Badge
              variant="outline"
              className="rounded-full border-white/20 bg-white/5 text-white/80"
            >
              Got a problem?
            </Badge>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl">
              Write us an{" "}
              <span className="text-gradient-brand">email</span>
            </h2>
            <p className="mt-4 max-w-md text-white/70">
              Tell us about the project, the timeline, and the outcome you
              need. We&apos;ll come back to you within one business day.
            </p>

            <ul className="mt-8 space-y-4">
              {channels.map((c) => (
                <li
                  key={c.label}
                  className="glass-dark flex items-center gap-4 rounded-2xl px-4 py-3"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/15 text-brand">
                    <c.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                      {c.label}
                    </p>
                    <p className="font-medium">{c.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="glass-dark rounded-3xl p-6 md:p-8"
          >
            <input
              type="text"
              name="botcheck"
              value={values.botcheck}
              onChange={update("botcheck")}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            <fieldset
              disabled={submitting || justSent}
              className="contents disabled:opacity-70"
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name" className="text-white/80">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={update("name")}
                    placeholder="Jane Doe"
                    autoComplete="name"
                    aria-invalid={errors.name ? true : undefined}
                    className={inputClass}
                  />
                  {errors.name ? (
                    <p className="text-rose-400 text-xs mt-1">{errors.name}</p>
                  ) : null}
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email" className="text-white/80">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={update("email")}
                    placeholder="jane@company.com"
                    autoComplete="email"
                    aria-invalid={errors.email ? true : undefined}
                    className={inputClass}
                  />
                  {errors.email ? (
                    <p className="text-rose-400 text-xs mt-1">{errors.email}</p>
                  ) : null}
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <Label htmlFor="company" className="text-white/80">
                  Company
                </Label>
                <Input
                  id="company"
                  name="company"
                  value={values.company}
                  onChange={update("company")}
                  placeholder="Safetek Co."
                  autoComplete="organization"
                  className={inputClass}
                />
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <Label htmlFor="message" className="text-white/80">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={values.message}
                  onChange={update("message")}
                  placeholder="Tell us a bit about your project…"
                  aria-invalid={errors.message ? true : undefined}
                  className="min-h-32 rounded-xl border-white/15 bg-white/5 text-white placeholder:text-white/40 focus-visible:ring-brand"
                />
                {errors.message ? (
                  <p className="text-rose-400 text-xs mt-1">{errors.message}</p>
                ) : null}
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={submitting || justSent || looseInvalid}
                className="mt-6 w-full rounded-full bg-brand text-white hover:bg-brand/90 disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <Loader2 className="mr-1 h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : justSent ? (
                  <>
                    Sent
                    <Check className="ml-1 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Send message
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </>
                )}
              </Button>
            </fieldset>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
