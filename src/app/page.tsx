import { SiteHeader } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { LogoMarquee } from "@/components/site/marquee";
import { Services } from "@/components/site/services";
import { Process } from "@/components/site/process";
import { Projects } from "@/components/site/projects";
import { Stats } from "@/components/site/stats";
import { Testimonials } from "@/components/site/testimonials";
import { FAQ } from "@/components/site/faq";
import { Contact } from "@/components/site/contact";
import { SiteFooter } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Hero />
        <LogoMarquee />
        <Services />
        <Process />
        <Projects />
        <Stats />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
