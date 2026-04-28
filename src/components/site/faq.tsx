import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./reveal";

const faqs = [
  {
    q: "What does Safetek do?",
    a: "Safetek is a unified platform for secure cloud and AI applications — combining identity, observability, and automation in one product so engineering teams move fast without breaking trust.",
  },
  {
    q: "Which clouds and frameworks are supported?",
    a: "We support AWS, GCP, Azure, and Vercel out of the box, with first-class SDKs for Next.js, Node.js, Python, Go, and Rust. Custom runtimes can be added via our plugin API.",
  },
  {
    q: "Is Safetek SOC 2 compliant?",
    a: "Yes. Safetek is SOC 2 Type II and ISO 27001 certified. Our compliance posture is audited continuously and customer-facing reports are available on request.",
  },
  {
    q: "How do I get started?",
    a: "Join the waitlist on this page and our team will reach out within one business day with onboarding details and a personalized demo.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-section-cream">
      <div className="mx-auto w-full max-w-3xl px-6 py-14 sm:px-8 md:px-12 md:py-20 lg:px-16">
        <Reveal>
          <div className="text-center">
            <Badge
              variant="outline"
              className="rounded-full border-brand/40 bg-brand/5 text-brand"
            >
              FAQ
            </Badge>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Frequently asked questions
            </h2>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <Accordion
            type="single"
            collapsible
            className="mt-10 overflow-hidden rounded-2xl border border-border/60 bg-white/70 backdrop-blur"
          >
            {faqs.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`item-${i}`}
                className="border-b border-border/60 px-5 last:border-b-0"
              >
                <AccordionTrigger className="py-5 text-left text-base font-medium hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
