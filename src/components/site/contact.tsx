import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
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

export function Contact() {
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
          <form className="glass-dark rounded-3xl p-6 md:p-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name" className="text-white/80">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Jane Doe"
                  className="h-11 rounded-xl border-white/15 bg-white/5 text-white placeholder:text-white/40 focus-visible:ring-brand"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email" className="text-white/80">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="jane@company.com"
                  className="h-11 rounded-xl border-white/15 bg-white/5 text-white placeholder:text-white/40 focus-visible:ring-brand"
                />
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <Label htmlFor="company" className="text-white/80">
                Company
              </Label>
              <Input
                id="company"
                placeholder="Safetek Co."
                className="h-11 rounded-xl border-white/15 bg-white/5 text-white placeholder:text-white/40 focus-visible:ring-brand"
              />
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <Label htmlFor="message" className="text-white/80">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Tell us a bit about your project…"
                className="min-h-32 rounded-xl border-white/15 bg-white/5 text-white placeholder:text-white/40 focus-visible:ring-brand"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="mt-6 w-full rounded-full bg-brand text-white hover:bg-brand/90"
            >
              Send message
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
