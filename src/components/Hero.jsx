import Reveal from "./Reveal.jsx";

export default function Hero({ applyUrl }) {
  return (
    <section id="top" className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 py-16 pb-20 text-center md:py-32">
      <Reveal
        as="span"
        className="mb-8 inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-foreground/90 backdrop-blur"
      >
        A growth partner for eCom brands
      </Reveal>

      <Reveal as="h1" delay={0.12} className="text-5xl font-bold leading-[1.05] tracking-normal text-foreground md:text-7xl lg:text-8xl">
        Precision is the strategy.
      </Reveal>

      <Reveal delay={0.24} className="mt-8 max-w-xl text-base leading-relaxed text-foreground/70 md:text-lg">
        Rein Lab builds e-commerce and fashion brands the way they should be built: with data guiding every decision, creative working in rhythm, and nothing left to guesswork.
      </Reveal>

      <Reveal delay={0.36}>
        <a
          href={applyUrl}
          className="mt-10 inline-flex items-center justify-center rounded-full bg-surface-base px-8 py-4 text-sm font-medium text-foreground shadow-lg transition hover:scale-105 hover:bg-surface-deep"
        >
          Apply Now -&gt;
        </a>
      </Reveal>
    </section>
  );
}
