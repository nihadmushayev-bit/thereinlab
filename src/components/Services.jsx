import Reveal from "./Reveal.jsx";
import { LINKS } from "../siteConfig.js";

const services = [
  {
    title: "Paid Media",
    description:
      "Full-funnel acquisition across Meta, Google, TikTok, and emerging channels managed against business outcomes, not vanity metrics.",
  },
  {
    title: "Creative Strategy",
    description:
      "Hooks, concepts, briefs, and iteration systems built from live performance data so your next creative move has a reason.",
  },
  {
    title: "Analytics & Attribution",
    description:
      "Clear reporting on blended CAC, margins, LTV, channel performance, and the numbers that decide where the next dollar goes.",
  },
  {
    title: "Retention Systems",
    description:
      "Email, SMS, and lifecycle flows that turn first-time buyers into repeat revenue and help growth compound over time.",
  },
];

export default function Services() {
  return (
    <section id="services" className="-mt-px bg-[#123747] px-6 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal className="relative mb-16 flex justify-center">
          <div className="relative inline-block text-center">
            <h2 className="text-5xl font-semibold tracking-normal md:text-6xl">What We Do</h2>
            <span className="signature pointer-events-none absolute -bottom-9 left-1/2 w-max -translate-x-1/2 text-4xl text-brand-light/90 md:-bottom-11 md:text-5xl">
              systems for scale
            </span>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08}>
              <article className="h-full rounded-2xl bg-black/40 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-black/50">
                <h3 className="mb-3 text-2xl font-extralight">
                  <span className="mr-2 font-mono text-sm text-brand-light">[{String(index + 1).padStart(3, "0")}]</span>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground/70">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <a
            href={LINKS.pfsSystem}
            className="inline-flex items-center justify-center text-sm font-medium text-white transition duration-300 hover:text-brand-light"
          >
            Learn More &rarr;
          </a>
        </Reveal>
      </div>
    </section>
  );
}
